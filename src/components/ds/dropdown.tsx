import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from "react";
import { createPortal } from "react-dom";
import { Icon, type IconName } from "@/components/ds/icon";

export type DropdownOption = {
  value: string;
  label: string;
  description?: string;
  icon?: IconName;
  badge?: string;
};

type Place = { left: number; width: number; top?: number; bottom?: number; maxHeight: number };

const GAP = 8;

/**
 * A custom select (WAI-ARIA select-only combobox). Focus stays on the trigger; the list is
 * portalled to <body> so dialogs with overflow:hidden don't clip it, and it carries the
 * trigger's theme with it.
 */
export function Dropdown({
  label,
  hint,
  error,
  options,
  value,
  onChange,
  placeholder = "Choose one",
  size = "md",
  disabled = false,
  id,
  className = "",
  style,
  "aria-label": ariaLabel,
}: {
  label?: string;
  hint?: string;
  error?: string;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  size?: "md" | "lg";
  disabled?: boolean;
  id?: string;
  className?: string;
  style?: CSSProperties;
  "aria-label"?: string;
}) {
  const auto = useId().replace(/:/g, "");
  const btnId = id || "uc-dd-" + auto;
  const listId = btnId + "-list";
  const labelId = btnId + "-label";
  const describedBy = error ? btnId + "-err" : hint ? btnId + "-hint" : undefined;

  const btnRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const typed = useRef({ text: "", at: 0 });
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [place, setPlace] = useState<Place | null>(null);
  const [theme, setTheme] = useState<string | undefined>();

  const selected = options.find((o) => o.value === value);
  const selectedIndex = Math.max(
    0,
    options.findIndex((o) => o.value === value),
  );

  const measure = useCallback(() => {
    const b = btnRef.current?.getBoundingClientRect();
    if (!b) return;
    const below = window.innerHeight - b.bottom - GAP * 2;
    const above = b.top - GAP * 2;
    const want = Math.min(360, (listRef.current?.scrollHeight ?? 320) + 2);
    const up = below < Math.min(want, 240) && above > below;
    const width = Math.min(Math.max(b.width, 320), window.innerWidth - GAP * 4);
    setPlace({
      left: Math.max(GAP * 2, Math.min(b.left, window.innerWidth - width - GAP * 2)),
      width,
      ...(up ? { bottom: window.innerHeight - b.top + GAP } : { top: b.bottom + GAP }),
      maxHeight: Math.max(160, up ? above : below),
    });
  }, []);

  const show = (index = selectedIndex) => {
    if (disabled) return;
    setTheme(btnRef.current?.closest<HTMLElement>("[data-theme]")?.dataset.theme);
    setActive(index);
    setOpen(true);
  };
  const hide = (refocus = true) => {
    setOpen(false);
    if (refocus) btnRef.current?.focus();
  };
  const pick = (i: number) => {
    const o = options[i];
    if (o) onChange(o.value);
    hide();
  };

  useLayoutEffect(() => {
    if (open) measure();
  }, [open, measure]);

  useEffect(() => {
    if (!open) return undefined;
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!btnRef.current?.contains(t) && !listRef.current?.contains(t)) hide(false);
    };
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure, true);
    document.addEventListener("mousedown", onDown);
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure, true);
      document.removeEventListener("mousedown", onDown);
    };
  }, [open, measure]);

  useEffect(() => {
    if (open)
      listRef.current
        ?.querySelector<HTMLElement>(`[data-index="${active}"]`)
        ?.scrollIntoView({ block: "nearest" });
  }, [open, active]);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const last = options.length - 1;
    const move = (i: number) => {
      e.preventDefault();
      if (open) setActive(i);
      else show(i);
    };
    switch (e.key) {
      case "ArrowDown":
        return open ? move(Math.min(last, active + 1)) : move(selectedIndex);
      case "ArrowUp":
        return open ? move(Math.max(0, active - 1)) : move(selectedIndex);
      case "Home":
        return move(0);
      case "End":
        return move(last);
      case "Enter":
      case " ":
        e.preventDefault();
        return open ? pick(active) : show();
      case "Escape":
        if (open) {
          // Close the list, not the dialog around it.
          e.preventDefault();
          e.stopPropagation();
          hide();
        }
        return;
      case "Tab":
        if (open) pick(active);
        return;
      default:
        if (e.key.length === 1 && !e.metaKey && !e.ctrlKey && !e.altKey) {
          const now = Date.now();
          const t = typed.current;
          t.text = (now - t.at > 600 ? "" : t.text) + e.key.toLowerCase();
          t.at = now;
          const i = options.findIndex((o) => o.label.toLowerCase().startsWith(t.text));
          if (i >= 0) {
            if (open) setActive(i);
            else onChange(options[i].value);
          }
        }
    }
  };

  return (
    <div className={("uc-field " + className).trim()} style={style}>
      {label ? (
        <label className="uc-field__label" id={labelId} htmlFor={btnId}>
          {label}
        </label>
      ) : null}
      <button
        ref={btnRef}
        id={btnId}
        type="button"
        role="combobox"
        className="uc-dd"
        data-size={size}
        data-open={open ? "" : undefined}
        data-invalid={error ? "" : undefined}
        data-empty={selected ? undefined : ""}
        disabled={disabled}
        aria-label={label ? undefined : ariaLabel}
        aria-labelledby={label ? labelId : undefined}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-activedescendant={open ? `${listId}-${active}` : undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        onClick={() => (open ? hide() : show())}
        onKeyDown={onKey}
      >
        <span className="uc-dd__icon" aria-hidden="true">
          <Icon name={selected?.icon ?? "smartphone"} size={size === "lg" ? 20 : 18} />
        </span>
        <span className="uc-dd__value">{selected ? selected.label : placeholder}</span>
        <Icon name="chevron-down" size={20} className="uc-dd__chev" />
      </button>
      {error ? (
        <div className="uc-field__error" id={btnId + "-err"}>
          <Icon name="circle-alert" size={16} />
          {error}
        </div>
      ) : hint ? (
        <div className="uc-field__hint" id={btnId + "-hint"}>
          {hint}
        </div>
      ) : null}
      {open
        ? createPortal(
            <ul
              ref={listRef}
              id={listId}
              role="listbox"
              aria-labelledby={label ? labelId : btnId}
              className="uc-dd__list"
              data-theme={theme}
              data-up={place?.bottom !== undefined ? "" : undefined}
              tabIndex={-1}
              style={
                place
                  ? {
                      left: place.left,
                      width: place.width,
                      top: place.top,
                      bottom: place.bottom,
                      maxHeight: place.maxHeight,
                    }
                  : { visibility: "hidden" }
              }
            >
              {options.map((o, i) => (
                <li
                  key={o.value || "none"}
                  id={`${listId}-${i}`}
                  role="option"
                  data-index={i}
                  aria-selected={o.value === value}
                  data-active={i === active ? "" : undefined}
                  className="uc-dd__opt"
                  onMouseMove={() => i !== active && setActive(i)}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => pick(i)}
                >
                  <span className="uc-dd__oicon" aria-hidden="true">
                    <Icon name={o.icon ?? "circle-help"} size={20} />
                  </span>
                  <span className="uc-dd__otext">
                    <span className="uc-dd__olabel">
                      {o.label}
                      {o.badge ? <span className="uc-dd__badge">{o.badge}</span> : null}
                    </span>
                    {o.description ? <span className="uc-dd__odesc">{o.description}</span> : null}
                  </span>
                  <Icon name="check" size={18} className="uc-dd__tick" />
                </li>
              ))}
            </ul>,
            document.body,
          )
        : null}
    </div>
  );
}
