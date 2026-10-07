import {
  useId,
  type CSSProperties,
  type InputHTMLAttributes,
  type SelectHTMLAttributes,
} from "react";
import { Icon } from "@/components/ds/icon";

type FieldProps = {
  label?: string;
  hint?: string;
  error?: string;
  className?: string;
  style?: CSSProperties;
};

function FieldMessage({ id, error, hint }: { id: string; error?: string; hint?: string }) {
  if (error)
    return (
      <div className="uc-field__error" id={id + "-err"}>
        <Icon name="circle-alert" size={16} />
        {error}
      </div>
    );
  if (hint)
    return (
      <div className="uc-field__hint" id={id + "-hint"}>
        {hint}
      </div>
    );
  return null;
}

export function Input({
  label,
  hint,
  error,
  size = "md",
  disabled = false,
  id,
  className = "",
  style,
  ...rest
}: FieldProps & { size?: "md" | "lg" } & Omit<InputHTMLAttributes<HTMLInputElement>, "size">) {
  const auto = useId();
  const inputId = id || "uc-in-" + auto.replace(/:/g, "");
  const describedBy = error ? inputId + "-err" : hint ? inputId + "-hint" : undefined;
  return (
    <div className={("uc-field " + className).trim()} style={style}>
      {label ? (
        <label className="uc-field__label" htmlFor={inputId}>
          {label}
        </label>
      ) : null}
      <div
        className="uc-input"
        data-size={size}
        data-invalid={error ? "" : undefined}
        data-disabled={disabled ? "" : undefined}
      >
        <input
          id={inputId}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          {...rest}
        />
      </div>
      <FieldMessage id={inputId} error={error} hint={hint} />
    </div>
  );
}

export function Select({
  label,
  hint,
  error,
  options,
  placeholder,
  disabled = false,
  id,
  className = "",
  style,
  ...rest
}: FieldProps & {
  options: { value: string; label: string; disabled?: boolean }[];
  placeholder?: string;
} & SelectHTMLAttributes<HTMLSelectElement>) {
  const auto = useId();
  const selId = id || "uc-sel-" + auto.replace(/:/g, "");
  const describedBy = error ? selId + "-err" : hint ? selId + "-hint" : undefined;
  return (
    <div className={("uc-field " + className).trim()} style={style}>
      {label ? (
        <label className="uc-field__label" htmlFor={selId}>
          {label}
        </label>
      ) : null}
      <div
        className="uc-select"
        data-invalid={error ? "" : undefined}
        data-disabled={disabled ? "" : undefined}
      >
        <select
          id={selId}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          {...rest}
        >
          {placeholder ? (
            <option value="" disabled>
              {placeholder}
            </option>
          ) : null}
          {options.map((o) => (
            <option key={o.value} value={o.value} disabled={o.disabled}>
              {o.label}
            </option>
          ))}
        </select>
        <Icon name="chevron-down" size={20} className="uc-select__chev" />
      </div>
      <FieldMessage id={selId} error={error} hint={hint} />
    </div>
  );
}
