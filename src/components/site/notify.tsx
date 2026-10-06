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

/* The launch list is not connected to a mail service yet. Addresses are kept in this
   browser only (same key as the old site's form), and the copy says so. */
const EMAIL_KEY = "unconsumed-launch-email";
const PLATFORM_KEY = "unconsumed-launch-platform";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Notify = {
  /** Open the "Get notified" dialog. */
  open: () => void;
  /** Validate and save an address. Returns an error message, or null on success. */
  save: (email: string, platform?: string) => string | null;
};

const NotifyContext = createContext<Notify | null>(null);

export function useNotify() {
  const ctx = useContext(NotifyContext);
  if (!ctx) throw new Error("useNotify must be used inside <NotifyProvider>");
  return ctx;
}

export function NotifyProvider({ children }: { children: ReactNode }) {
  const [dialog, setDialog] = useState(false);
  const [toast, setToast] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const save = useCallback((raw: string, platform?: string) => {
    const email = raw.trim();
    if (!EMAIL_RE.test(email)) return "Enter a valid email address";
    try {
      localStorage.setItem(EMAIL_KEY, email);
      if (platform) localStorage.setItem(PLATFORM_KEY, platform);
    } catch {
      return "This browser blocked saving. Nothing was sent.";
    }
    setDialog(false);
    setToast(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(false), 6400);
    return null;
  }, []);

  const value = useMemo<Notify>(() => ({ open: () => setDialog(true), save }), [save]);

  return (
    <NotifyContext.Provider value={value}>
      {children}
      <NotifyDialog open={dialog} onClose={() => setDialog(false)} onSave={save} />
      {toast ? (
        <div className="toast-region">
          <Toast tone="success" title="Saved on this device" onClose={() => setToast(false)}>
            Our mailing list is not connected yet, so nothing was sent. When it is, we will write to
            you when Covenanter is available.
          </Toast>
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

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const err = onSave(email, platform);
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
          <Button type="submit" form="notify-form">
            Notify me
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
          ]}
        />
        <p className="uc-caption">
          The list is not connected yet. Your email stays on this device until it is.
        </p>
      </form>
    </Dialog>
  );
}
