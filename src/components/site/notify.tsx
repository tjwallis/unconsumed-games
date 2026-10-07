import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { Button } from "@/components/ds/actions";
import { Dialog, Toast } from "@/components/ds/feedback";
import { Input, Select } from "@/components/ds/forms";

/* Sign-ups post to the PHP endpoint deployed next to the static site (public/api/subscribe.php),
   which adds them to Kit. The Kit API key lives only on the server. */
const SUBSCRIBE_URL = import.meta.env.VITE_SUBSCRIBE_URL || "/api/subscribe.php";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Notify = {
  /** Open the "Get notified" dialog. */
  open: () => void;
  /**
   * Sign an address up. Resolves to an error message, or null on success.
   * `trap` is the hidden honeypot field: real people leave it empty.
   */
  save: (email: string, platform?: string, trap?: string) => Promise<string | null>;
};

const NotifyContext = createContext<Notify | null>(null);

export function useNotify() {
  const ctx = useContext(NotifyContext);
  if (!ctx) throw new Error("useNotify must be used inside <NotifyProvider>");
  return ctx;
}

/** Off-screen field that only bots fill in. Read it with `form.elements.namedItem("website")`. */
export function Honeypot() {
  return (
    <input
      className="hp"
      type="text"
      name="website"
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
      defaultValue=""
    />
  );
}

export function honeypotValue(form: HTMLFormElement) {
  const el = form.elements.namedItem("website");
  return el instanceof HTMLInputElement ? el.value : "";
}

export function NotifyProvider({ children }: { children: ReactNode }) {
  const [dialog, setDialog] = useState(false);
  const [toast, setToast] = useState<null | { confirm: boolean }>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const save = useCallback(async (raw: string, platform?: string, trap?: string) => {
    const email = raw.trim();
    if (!EMAIL_RE.test(email)) return "Enter a valid email address";
    let res: Response;
    try {
      res = await fetch(SUBSCRIBE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, platform: platform || "", website: trap || "" }),
      });
    } catch {
      return "We could not reach the sign-up service. Check your connection and try again.";
    }
    const body = (await res.json().catch(() => ({}))) as {
      ok?: boolean;
      error?: string;
      confirm?: boolean;
    };
    if (!res.ok || !body.ok)
      return body.error || "We could not sign you up just now. Please try again later.";
    setDialog(false);
    setToast({ confirm: Boolean(body.confirm) });
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 8000);
    return null;
  }, []);

  const value = useMemo<Notify>(() => ({ open: () => setDialog(true), save }), [save]);

  return (
    <NotifyContext.Provider value={value}>
      {children}
      <NotifyDialog open={dialog} onClose={() => setDialog(false)} onSave={save} />
      {toast ? (
        <div className="toast-region">
          {toast.confirm ? (
            <Toast tone="success" title="Check your email" onClose={() => setToast(null)}>
              We sent a link to confirm your address. Once you confirm, we will write when
              Covenanter is available.
            </Toast>
          ) : (
            <Toast tone="success" title="You are on the list" onClose={() => setToast(null)}>
              We will write when Covenanter is available.
            </Toast>
          )}
        </div>
      ) : null}
    </NotifyContext.Provider>
  );
}

function NotifyDialog({
  open,
  onClose,
  onSave,
}: {
  open: boolean;
  onClose: () => void;
  onSave: Notify["save"];
}) {
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    const err = await onSave(email, platform, honeypotValue(e.currentTarget));
    setBusy(false);
    setError(err ?? "");
    if (!err) {
      setEmail("");
      setPlatform("");
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      size="sm"
      eyebrow="Covenanter"
      title="Get notified"
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" form="notify-form" disabled={busy}>
            {busy ? "Sending…" : "Notify me"}
          </Button>
        </>
      }
    >
      <form id="notify-form" onSubmit={submit} noValidate className="notify-form">
        <p className="uc-small">
          Leave your email and we will let you know when Covenanter is available.
        </p>
        <Input
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          error={error}
        />
        <Select
          label="Platform"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          placeholder="Choose one"
          options={[
            { value: "ios", label: "iOS" },
            { value: "android", label: "Android" },
            { value: "steam", label: "Steam (PC)" },
          ]}
        />
        <Honeypot />
        <p className="uc-caption">
          We will only write about Covenanter. You can leave the list from any email.
        </p>
      </form>
    </Dialog>
  );
}
