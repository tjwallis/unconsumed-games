import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Icon, type IconName } from "@/components/ds/icon";

type ButtonVariant = "primary" | "accent" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

type ButtonOwnProps = {
  variant?: ButtonVariant;
  size?: Size;
  iconLeft?: IconName;
  iconRight?: IconName;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonProps = ButtonOwnProps &
  (
    | ({ href: string } & Omit<
        AnchorHTMLAttributes<HTMLAnchorElement>,
        keyof ButtonOwnProps | "href"
      >)
    | ({ href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonOwnProps>)
  );

export function Button({
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const iconSize = size === "sm" ? 16 : size === "lg" ? 22 : 20;
  const shared = {
    className: ("uc-btn " + className).trim(),
    "data-variant": variant,
    "data-size": size,
    "data-full": fullWidth ? "" : undefined,
  };
  const inner = (
    <>
      {iconLeft ? <Icon name={iconLeft} size={iconSize} strokeWidth={2} /> : null}
      <span className="uc-btn__label">{children}</span>
      {iconRight ? <Icon name={iconRight} size={iconSize} strokeWidth={2} /> : null}
    </>
  );

  if (rest.href !== undefined) {
    const { href, ...anchor } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a
        {...shared}
        {...anchor}
        href={disabled ? undefined : href}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
      >
        {inner}
      </a>
    );
  }
  const { type = "button", ...button } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button {...shared} {...button} type={type} disabled={disabled}>
      {inner}
    </button>
  );
}

export function IconButton({
  icon,
  label,
  variant = "ghost",
  size = "md",
  type = "button",
  className = "",
  ...rest
}: {
  icon: IconName;
  label: string;
  variant?: "ghost" | "outline" | "solid";
  size?: Size;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">) {
  const iconSize = size === "sm" ? 18 : size === "lg" ? 26 : 22;
  return (
    <button
      type={type}
      className={("uc-iconbtn " + className).trim()}
      data-variant={variant}
      data-size={size}
      aria-label={label}
      title={label}
      {...rest}
    >
      <Icon name={icon} size={iconSize} />
    </button>
  );
}
