import { useEffect, useId, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

const STORAGE_KEY = "unconsumed-launch-email";
const CHANGE_EVENT = "unconsumed-launch-change";

function readSaved() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export function LaunchForm({
  tone,
  submitLabel,
  note,
}: {
  tone: "hero" | "band";
  submitLabel: string;
  note: string;
}) {
  const inputId = useId();
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState<string | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setSaved(readSaved());
    const sync = () => setSaved(readSaved());
    window.addEventListener(CHANGE_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(CHANGE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next)) {
      setError("Enter a real email address.");
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      setError("This browser blocked saving. Nothing was sent.");
      return;
    }
    setSaved(next);
    setError("");
    setEmail("");
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }

  const fieldClass =
    tone === "hero"
      ? "border-parchment/40 bg-parchment text-navy placeholder:text-navy/40"
      : "border-navy/15 bg-cream text-navy placeholder:text-navy/40";

  if (saved) {
    return (
      <div className={cn("max-w-xl", tone === "band" && "mx-auto text-center")}>
        <p className={cn("font-display text-sm tracking-widest uppercase", tone === "hero" ? "text-amber" : "text-ember")}>
          Saved on this device
        </p>
        <p className={cn("mt-2 text-xl", tone === "hero" ? "text-parchment" : "text-navy")}>{saved}</p>
        <p className={cn("mt-2 text-base", tone === "hero" ? "text-parchment/70" : "text-navy/70")}>
          The mailing list isn’t connected yet, so nothing has been sent. When it is, this is the address we’ll use.
        </p>
        <button
          type="button"
          className={cn(
            "mt-3 min-h-11 font-display text-xs tracking-widest uppercase underline underline-offset-4",
            tone === "hero" ? "text-amber" : "text-ember",
          )}
          onClick={() => {
            try {
              localStorage.removeItem(STORAGE_KEY);
            } catch {
              /* ignore */
            }
            setSaved(null);
            window.dispatchEvent(new Event(CHANGE_EVENT));
          }}
        >
          Use a different email
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn(tone === "band" && "mx-auto max-w-xl")} noValidate>
      <div className={cn("flex flex-col gap-3 sm:flex-row", tone === "band" && "sm:items-stretch")}>
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="you@example.com"
          value={email}
          suppressHydrationWarning
          onChange={(event) => {
            setEmail(event.target.value);
            if (error) setError("");
          }}
          className={cn(
            "min-h-12 w-full rounded-md border px-4 font-body text-lg outline-none sm:flex-1",
            fieldClass,
          )}
        />
        <Button type="submit" className="sm:shrink-0">
          {submitLabel}
        </Button>
      </div>
      {error ? (
        <p className="mt-2 text-base text-ember" role="alert">
          {error}
        </p>
      ) : null}
      <p className={cn("mt-3 text-sm leading-snug", tone === "hero" ? "text-parchment/65" : "text-navy/60", tone === "band" && "text-center")}>
        {note}
      </p>
    </form>
  );
}
