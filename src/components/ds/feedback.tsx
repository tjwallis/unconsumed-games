import { useEffect, useId, useRef, type ReactNode } from "react";
import { IconButton } from "@/components/ds/actions";
import { Icon, type IconName } from "@/components/ds/icon";

export function Dialog({
  open = true,
  onClose,
  title,
  eyebrow,
  footer,
  size = "md",
  dismissable = true,
  className = "",
  children,
}: {
  open?: boolean;
  onClose?: () => void;
  title?: ReactNode;
  eyebrow?: ReactNode;
  footer?: ReactNode;
  size?: "sm" | "md" | "lg";
  dismissable?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = "uc-dlg-" + useId().replace(/:/g, "");

  useEffect(() => {
    if (!open) return undefined;
    const returnTo = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && dismissable && onClose) onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      returnTo?.focus?.();
    };
  }, [open, dismissable, onClose]);

  if (!open) return null;
  return (
    <div
      className="uc-dialog-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget && dismissable && onClose) onClose();
      }}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal
        aria-labelledby={title ? titleId : undefined}
        className={("uc-dialog " + className).trim()}
        data-size={size}
      >
        <div className="uc-dialog__header">
          <div className="uc-dialog__heading">
            {eyebrow ? <div className="uc-dialog__eyebrow">{eyebrow}</div> : null}
            {title ? (
              <h2 id={titleId} className="uc-dialog__title">
                {title}
              </h2>
            ) : null}
          </div>
          {onClose ? <IconButton icon="x" label="Close" size="sm" onClick={onClose} /> : null}
        </div>
        <div className="uc-dialog__body">{children}</div>
        {footer ? <div className="uc-dialog__footer">{footer}</div> : null}
      </div>
    </div>
  );
}

const TONE_ICON: Record<string, IconName> = {
  info: "info",
  success: "circle-check",
  warning: "triangle-alert",
  danger: "circle-alert",
};

export function Toast({
  tone = "info",
  title,
  action,
  onClose,
  className = "",
  children,
}: {
  tone?: "info" | "success" | "warning" | "danger";
  title?: ReactNode;
  action?: ReactNode;
  onClose?: () => void;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      role={tone === "danger" ? "alert" : "status"}
      className={("uc-toast " + className).trim()}
      data-tone={tone}
    >
      <Icon name={TONE_ICON[tone] ?? "info"} size={22} className="uc-toast__icon" />
      <div className="uc-toast__main">
        {title ? <div className="uc-toast__title">{title}</div> : null}
        {children ? <div className="uc-toast__text">{children}</div> : null}
        {action ? <div className="uc-toast__action">{action}</div> : null}
      </div>
      {onClose ? (
        <button type="button" className="uc-toast__close" aria-label="Dismiss" onClick={onClose}>
          <Icon name="x" size={16} strokeWidth={2} />
        </button>
      ) : null}
    </div>
  );
}
