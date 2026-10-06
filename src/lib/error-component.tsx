import type { ErrorComponentProps } from "@tanstack/react-router";
import { Icon } from "@/components/ds/icon";

const FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error) return error;
  return FALLBACK_MESSAGE;
}

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="err" data-theme="dark">
      <Icon name="triangle-alert" size={40} className="err__icon" />
      <h1>Something went wrong</h1>
      <p className="err__msg">{errorMessage(error)}</p>
      <a className="uc-btn" data-variant="primary" data-size="md" href="/">
        <span className="uc-btn__label">Return home</span>
      </a>
    </main>
  );
}
