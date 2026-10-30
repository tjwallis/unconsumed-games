import { useState, type FormEvent } from "react";
import { Button } from "@/components/ds/actions";
import { Input } from "@/components/ds/forms";
import { Icon } from "@/components/ds/icon";
import { Honeypot, honeypotValue, useNotify } from "@/components/site/notify";
import { STUDIO } from "@/lib/site";

/** Inline sign-up: email and submit. Posts to the existing Kit endpoint. */
export function SignupForm() {
  const notify = useNotify();
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    const error = await notify.save(email, honeypotValue(e.currentTarget));
    setBusy(false);
    setErr(error ?? "");
    if (!error) setEmail("");
  };

  return (
    <form className="sf" onSubmit={submit} noValidate>
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
      <Button size="lg" type="submit" disabled={busy}>
        {busy ? "Sending…" : "Join the waitlist"}
      </Button>
      <Honeypot />
    </form>
  );
}

export function BetaSteps() {
  const steps: [string, string][] = [
    ["Join the waitlist", "Leave your email address. It takes a moment."],
    ["Watch your inbox", "We will write with news of the full Covenanter launch."],
    [
      "Play together",
      "When Covenanter launches, families can play it together on iPhone, iPad or Android.",
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
    "Families, and the parents and teachers who play with them. Five difficulty levels let everyone in the house play the same story at their own pace.",
  ],
  [
    "Which devices can I use?",
    "The closed beta is on iPhone, iPad, and Android phones and tablets. A desktop (PC) version is planned after the mobile release.",
  ],
  [
    "Is everyone who asks given a place?",
    "The closed beta is invite-only, so this form does not ask for a place. Join the waitlist and we will write with news of the full launch.",
  ],
  [
    "When will I hear?",
    "We will write when there is news of the full launch. Use the address you check most.",
  ],
  [
    "I haven’t had an invite.",
    <>
      The closed beta is invite-only, so an invite may not come. Check your spam and promotions
      folders. This list is for news of the full launch. Questions? Write to{" "}
      <a href={`mailto:${STUDIO.hello}`}>{STUDIO.hello}</a>.
    </>,
  ],
  [
    "What will we do in it?",
    "Walk the towns of Scotland in 1559 and 1560, hear the Reformers preach, learn verses, the catechism and the psalms, and answer false teaching with the Word of God. There are no swords: you answer with Scripture.",
  ],
  ["Are there ads?", "No ads and no loot boxes. It is a game to play together."],
  [
    "Why Reformation Day?",
    "On 31 October 1517 Martin Luther sent out his Ninety-five Theses, and the questions he raised travelled as far as the towns of Scotland. It seemed the right day to open the beta.",
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
