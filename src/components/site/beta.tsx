import { useState, type FormEvent } from "react";
import { Button } from "@/components/ds/actions";
import { Input, Select } from "@/components/ds/forms";
import { Icon } from "@/components/ds/icon";
import { Honeypot, honeypotValue, useNotify } from "@/components/site/notify";
import { BETA, PLATFORM_OPTIONS, type BetaPhase } from "@/lib/beta";
import { STUDIO } from "@/lib/site";

/** Inline sign-up: email, optional platform, submit. Used on the home page and /beta. */
export function SignupForm({ withPlatform = false }: { withPlatform?: boolean }) {
  const notify = useNotify();
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    const error = await notify.save(email, platform, honeypotValue(e.currentTarget));
    setBusy(false);
    setErr(error ?? "");
    if (!error) {
      setEmail("");
      setPlatform("");
    }
  };

  return (
    <form className={"sf" + (withPlatform ? " sf--platform" : "")} onSubmit={submit} noValidate>
      <Input
        size="lg"
        type="email"
        autoComplete="email"
        placeholder="you@example.com"
        aria-label="Email address"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (err) setErr("");
        }}
        error={err}
      />
      {withPlatform ? (
        <Select
          aria-label="Platform"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          placeholder="Platform (optional)"
          options={PLATFORM_OPTIONS}
        />
      ) : null}
      <Button size="lg" type="submit" disabled={busy}>
        {busy ? "Sending…" : "Request to join"}
      </Button>
      <Honeypot />
    </form>
  );
}

export function BetaSteps({ phase }: { phase: BetaPhase }) {
  const steps: [string, string][] = [
    ["Request a place", "Leave your email. It takes a moment."],
    phase === "open"
      ? [
          "Watch your inbox",
          "We choose testers at random from everyone who asks, and invites go out by email. Check your spam and promotions folders too.",
        ]
      : [
          "Watch your inbox",
          `We choose testers at random from everyone who asks. Invites go out by email from ${BETA.dateLong}.`,
        ],
    [
      "Play together",
      "If you are chosen, install Covenanter on iPhone, iPad or Android, then tell us what your children learn, what they love, and what we can make better.",
    ],
  ];
  return (
    <ol className="steps3">
      {steps.map(([title, text], i) => (
        <li key={title}>
          <span className="steps3__n" aria-hidden="true">
            {i + 1}
          </span>
          <h3>{title}</h3>
          <p>{text}</p>
        </li>
      ))}
    </ol>
  );
}

const FAQ: [string, React.ReactNode][] = [
  [
    "Who is the beta for?",
    "Families with children of about 5 to 13 and up, and the parents and teachers who play with them. Five difficulty levels let a younger and an older child play side by side.",
  ],
  [
    "Which devices can I use?",
    "iPhone, iPad and Android phones and tablets. The closed beta is not on Steam or PC.",
  ],
  [
    "Is everyone who asks given a place?",
    "No. Places in the closed beta are limited, so we choose testers at random from everyone who asks. If you are not chosen this time, you stay on our list and we will write when Covenanter is available.",
  ],
  [
    "When will I hear?",
    `Invites go out by email from ${BETA.dateLong}. Use the address you check most.`,
  ],
  [
    "I haven't had an invite.",
    <>
      Not everyone who asks is chosen, so an invite may not come this time. Check your spam and
      promotions folders, and make sure you used the address you check. Questions? Write to{" "}
      <a href={`mailto:${STUDIO.hello}`}>{STUDIO.hello}</a>.
    </>,
  ],
  [
    "What will my children do in it?",
    "Walk the towns of Scotland in 1559 and 1560, hear the Reformers preach, learn verses, the catechism and the psalms, and answer false teaching with the Word of God. There are no swords: you answer with Scripture.",
  ],
  ["Are there ads?", "No ads and no loot boxes. It is something to play together."],
  [
    "Why Reformation Day?",
    "On 31 October 1517 Martin Luther sent out his Ninety-five Theses, and the questions he raised travelled as far as the towns of Scotland. We chose the day to open the beta.",
  ],
  ["How do I send feedback?", "Reply to the email your invite came from. We read every message."],
  [
    "What happens to my email address?",
    <>
      It is kept in Kit, the service we use to send email, and used only for notes about Covenanter.
      See our <a href="/privacy">privacy policy</a>.
    </>,
  ],
];

export function BetaFaq() {
  return (
    <div className="faq">
      {FAQ.map(([q, a]) => (
        <details key={q}>
          <summary>
            {q}
            <Icon name="chevron-down" size={20} />
          </summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}
