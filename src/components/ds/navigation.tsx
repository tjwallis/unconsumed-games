import type { KeyboardEvent } from "react";

export type TabItem = { id: string; label: string; disabled?: boolean; panelId?: string };

export function Tabs({
  items,
  value,
  onChange,
  variant = "underline",
  className = "",
  "aria-label": ariaLabel,
}: {
  items: TabItem[];
  value: string;
  onChange: (id: string) => void;
  variant?: "underline" | "pill";
  className?: string;
  "aria-label"?: string;
}) {
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const enabled = items.filter((i) => !i.disabled);
    const idx = enabled.findIndex((i) => i.id === value);
    let next: TabItem | undefined;
    if (e.key === "ArrowRight") next = enabled[(idx + 1) % enabled.length];
    else if (e.key === "ArrowLeft") next = enabled[(idx - 1 + enabled.length) % enabled.length];
    else if (e.key === "Home") next = enabled[0];
    else if (e.key === "End") next = enabled[enabled.length - 1];
    if (next) {
      e.preventDefault();
      onChange(next.id);
      e.currentTarget.querySelector<HTMLElement>(`[data-tab-id="${next.id}"]`)?.focus();
    }
  };
  return (
    <div
      className={("uc-tabs " + className).trim()}
      role="tablist"
      aria-label={ariaLabel}
      data-variant={variant}
      onKeyDown={onKeyDown}
    >
      {items.map((it) => (
        <button
          key={it.id}
          type="button"
          role="tab"
          className="uc-tab"
          data-tab-id={it.id}
          aria-selected={it.id === value}
          aria-controls={it.panelId}
          tabIndex={it.id === value ? 0 : -1}
          disabled={it.disabled}
          onClick={() => onChange(it.id)}
        >
          <span className="uc-tab__label">{it.label}</span>
        </button>
      ))}
    </div>
  );
}
