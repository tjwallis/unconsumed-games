import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/page-shell";
import { STUDIO } from "@/lib/site";

const DELETE_URL = `https://${STUDIO.site}/delete-account`;

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy policy · Unconsumed Games" },
      {
        name: "description",
        content:
          "How Covenanter and unconsumedgames.com handle information: what is collected, when, how long it is kept, and how to delete an account.",
      },
    ],
  }),
  component: PrivacyPage,
});

function Mail() {
  return <a href={`mailto:${STUDIO.hello}`}>{STUDIO.hello}</a>;
}

function PrivacyPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Studio"
        title="Privacy policy"
        lead="How Covenanter and this site handle information."
      />
      <section className="sec sec--light doc">
        <div className="wrap">
          <article className="prose prose--narrow prose--policy">
            <p className="uc-lead">
              {STUDIO.name} (“we”) makes Covenanter and runs {STUDIO.site}. This policy tells you
              what information the game and this website collect, why, who else sees it, how long we
              keep it, and what you can do about it.
            </p>
            <p className="prose__src">Last updated 29 October 2026.</p>

            <h2>The short version</h2>
            <ul>
              <li>
                <strong>You choose</strong> whether to “Share how you play”. If you say no, no play
                reports are sent, and the game plays the same.
              </li>
              <li>
                <strong>Your answers are a separate choice.</strong> Which catechism, psalm and
                dispute answers you pick could show your religious beliefs. We receive them only if
                you opt in to “Share my answers”, and you can change that at any time.
              </li>
              <li>
                <strong>No ads, no loot boxes, and no selling.</strong> We do not show ads, we do
                not use an advertising ID, and we never sell your personal information or share it
                for advertising.
              </li>
              <li>
                <strong>There is no user ID.</strong> Play reports are tied to a random number for
                your copy of the game. They are never tied to your name, your email or your account.
              </li>
              <li>
                <strong>Play reports are deleted after 14 months.</strong>
              </li>
              <li>
                <strong>An account is optional.</strong> If you make one, you can delete it, and
                your cloud saves with it, from inside the game. See “Deleting your account” below.
              </li>
              <li>
                <strong>Contact:</strong> <Mail />
              </li>
            </ul>

            <h2>1. Who we are</h2>
            <p>
              Covenanter is made by <strong>{STUDIO.name}</strong>. We decide why and how the
              information in this policy is used, which makes us the controller (GDPR) or the
              business (California law).
            </p>
            <p>
              For anything about privacy or your information, write to{" "}
              <strong>
                <Mail />
              </strong>
              .
            </p>

            <h2>2. What this policy covers</h2>
            <ul>
              <li>
                The <strong>Covenanter game</strong> on iPhone, iPad and Android.
              </li>
              <li>
                <strong>Test and beta builds</strong> of the game (TestFlight, Google Play testing
                and so on). They follow the same rules and the same choices as every other build,
                and testers’ information is treated the same way. One difference: a development
                build can report a bit more detail. See “Extra detail in test builds” in section 3.
              </li>
              <li>
                <strong>{STUDIO.site}</strong>, including the form for news of the beta.
              </li>
            </ul>

            <h2>3. What the game collects, and when</h2>
            <h3>Nothing is sent until you say so</h3>
            <p>
              Before the game sends anything about how you play, it asks you on a card, once, the
              first time you open the game on a phone or tablet.{" "}
              <strong>
                Until you say Yes, no play reports, crash reports or timing information are sent.
              </strong>{" "}
              The Google Firebase software the game uses is started when the game starts, but its
              reporting is switched off until you say Yes. The card is the same for everyone,
              wherever you live.
            </p>

            <h3>Difficulty</h3>
            <p>
              You choose a difficulty, from Easiest to Expert. It changes how the questions in a
              disputation are asked. It is a choice about how you want to play.
            </p>

            <h3>Share how you play?</h3>
            <p>
              The card asks whether to share how you play,{" "}
              <strong>with Yes and No buttons of equal size</strong>. The card says what is sent
              (crash reports, gameplay events such as chapters reached and disputations answered,
              and how quickly places load, through Google Firebase), and that it is never used for
              ads and never includes your name, your email or anything you type.{" "}
              <strong>If you close the card, that counts as No.</strong> You can change your mind
              any time in <strong>Settings → Share how you play</strong>.
            </p>
            <p>
              If you say <strong>Yes</strong>, the game sends the following to Google Firebase,
              which we use for analytics and crash reporting (see section 8):
            </p>
            <div className="tablewrap">
              <table className="collect">
                <thead>
                  <tr>
                    <th scope="col">What</th>
                    <th scope="col">Examples</th>
                    <th scope="col">Why we want it</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Gameplay events</strong>
                    </td>
                    <td>
                      Game started and ended; chapters and levels started and finished; disputations
                      started and finished (win or lose, how many questions you got right); lessons
                      and catechism rounds finished; achievements unlocked; menus opened; difficulty
                      changed; steps of the story reached; whether you used touch or keys; which
                      towns you have reformed
                    </td>
                    <td>
                      To see where players get stuck, which parts are too hard or too easy, and what
                      to improve
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Time spent</strong>
                    </td>
                    <td>
                      How many seconds of play you spent exploring, travelling, in conversations, in
                      disputations, in the catechism, singing, practising, in lessons, in the menus
                      and so on. It is sent about every 5 minutes of play and when you leave a
                      chapter or return to the title screen. The game stops counting when you have
                      been idle for a while
                    </td>
                    <td>
                      To learn how long the parts of the game take, and whether it is a good length
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Problems</strong>
                    </td>
                    <td>
                      Crash reports: what the game was doing, the error and where in the code it
                      happened, your phone model and system version, and whether the game was in the
                      background. At most 20 a session
                    </td>
                    <td>To fix bugs</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Speed</strong>
                    </td>
                    <td>
                      How smoothly maps and places draw (frames per second, slow and frozen frames,
                      and which map it was), and how long saving and syncing take
                    </td>
                    <td>To make the game run well on older phones</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Your device</strong>
                    </td>
                    <td>
                      Phone or tablet model, system version, app version, language, screen size, and
                      a rough location (country, and region or city) worked out by Google from your
                      internet address. We do not receive the address itself
                    </td>
                    <td>
                      To fix problems on particular devices and to see roughly where players are
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>A random number for your copy of the game</strong>
                    </td>
                    <td>An app instance ID made by the Firebase software. It is not a user ID</td>
                    <td>
                      So that the events from one copy of the game can be put together into one
                      session. See below
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <strong>The random number.</strong> Reports are tied to this number and to nothing
              else. It is not your name, your email, your Apple or Google account, or an advertising
              ID. <strong>There is no user ID.</strong> We do not give Google Analytics or
              Crashlytics a user ID, even when you are signed in, and the game clears any user ID an
              older copy might have left behind. Reinstalling the game, or deleting your account on
              a phone or tablet, gives you a new number. We cannot tell who you are from it.
            </p>
            <p>
              <strong>What we do not collect with Analytics:</strong> a user ID, an advertising ID,
              your name, email, address, contacts, photos, microphone or camera, precise location,
              or anything you type (a journey name or a note, for example). Ad ID collection is
              disabled.
            </p>
            <p>
              <strong>Extra detail in test builds.</strong> If you are a tester and use a
              development build, the same choice applies, and the game also reports finer detail:
              who you spoke to, what you examined, which place you entered (and the tile), items
              found, settings changed, steps of side quests, longer error text, and when you made no
              progress for a few minutes. We use the build’s label to tell tester reports from
              player reports. A normal release does not send this extra detail.
            </p>
            <p>
              <strong>What the crash reports can contain.</strong> A crash report carries a short
              trail of what the game did just before it crashed (event names, such as “dispute
              started”, and screen names) and a few labels: the map, the region, the activity and
              the app version. The trail is made from the same events as above, including their
              details, with answers left out unless you opted in to Share my answers.
            </p>

            <h3>Your answers: Share my answers</h3>
            <p>
              On the same card there is a separate box, <strong>unticked by default</strong>: “Share
              my answers”. It covers which catechism, psalm and dispute answers you choose, and the
              numbers that say which lesson, question or psalm it was. Answers like these can show
              your religious beliefs, so we treat them as a special category of information (see
              section 7), and we only receive them if you opt in. If you leave the box unticked,{" "}
              <strong>
                the game removes all of these answers and the lesson or question numbers before
                anything is sent
              </strong>
              , so we get only the totals (for example, “a catechism round of ten ended, seven
              right”). The game does this in one place in the code, so that no part of the game can
              send them by accident. This includes the verse you set in type on the printing press,
              which is treated as an answer too.
            </p>
            <p>
              You can turn it on or off in <strong>Settings → Share my answers</strong>. Turning off
              “Share how you play” turns it off too. If you had already agreed to share how you play
              before this choice existed, the game asked you once more.
            </p>

            <h3>What the game stores on your device</h3>
            <p>
              Your settings, your saved journeys, which sharing choices you made and (if you have
              one) a note of which account you are signed in as. These stay on your device. You can
              copy a journey out as a save code. Removing the game or clearing its data deletes
              them, unless they are also in your cloud account.
            </p>

            <h3>What is never collected</h3>
            <p>
              No user ID. No advertising ID, and ad ID collection is disabled. No ads, no loot
              boxes, no ad networks, no in-app purchases, no payment details, no contacts, no photos
              or camera, no microphone, no precise location, and no tracking across other companies’
              apps or sites. The game does not ask for permission to track you. Personal information
              is never sold.
            </p>

            <h2>4. Accounts and cloud saves (optional)</h2>
            <p>
              You can play as a guest. Saves then stay on your device and we hold nothing about you.
            </p>
            <p>
              If you sign in with <strong>Google</strong> (any device) or{" "}
              <strong>Sign in with Apple</strong> (on iPhone and iPad), Firebase Authentication
              makes an account for you.
            </p>
            <ul>
              <li>
                <strong>What it holds:</strong> from Google or Apple, the name and email address on
                that account (Apple may give a private relay address instead) and, from Google, the
                link to your profile picture. The game does not use the picture. It keeps your
                display name or email on your device so that Settings can say who you are signed in
                as. There is no user ID, and this account is not sent to Google Analytics or
                Crashlytics.
              </li>
              <li>
                <strong>Your cloud saves:</strong> your saved journeys (the game’s save file, the
                place you were, the journey’s name, how many towns you have reformed, and when it
                was saved) are stored in Google’s Firestore database for your account. Only you can
                read or change them. The rules for the database are set so that nobody else’s
                account can open yours.
              </li>
              <li>
                <strong>Journey names:</strong> you can name a journey (up to 64 characters). Please
                don’t put your own name or other personal details in it.
              </li>
            </ul>
            <p>
              We use the account only to let you sign in and carry your journeys between devices. We
              do not use it for play reports and we do not link it to them.
            </p>

            <h3>Deleting your account</h3>
            <p>
              You can delete your account yourself in the game:{" "}
              <strong>Settings → Account → Delete account</strong>. The game asks you to confirm
              (“This cannot be undone”), and may ask you to sign in again. It then:
            </p>
            <ul>
              <li>
                deletes every journey stored in your cloud account, so they disappear from all your
                devices,
              </li>
              <li>deletes this device’s copy of your account details,</li>
              <li>deletes your account with Firebase Authentication,</li>
              <li>signs you out, and the game carries on as a guest, and</li>
              <li>
                on iPhone, iPad and Android, forgets the reporting number for this copy of the game,
                so later play reports cannot be linked with earlier ones.
              </li>
            </ul>
            <p>
              You can also follow the steps on <a href="/delete-account">{DELETE_URL}</a>, or write
              to <Mail /> from the address you used to sign in. Google tells us that deleted account
              data is gone from its backups within 180 days. Deleting an account does not delete
              play reports, crash reports or speed reports already collected. There is no user ID,
              and those reports are not tied to your account, so we cannot pick them out. It also
              does not delete a Send a Note message. Play reports delete themselves after 14 months.
              See section 10.
            </p>
            <p>
              If you play as a guest, there is no account for us to delete. Saves stay on the
              device. Remove the game or clear its data to erase them. We hold no copy.
            </p>

            <h2>5. Send a Note</h2>
            <p>
              In the pause menu there is a <strong>Send a Note</strong> button. It does nothing
              unless you press Send.
            </p>
            <ul>
              <li>
                <strong>What is sent:</strong> the kind of note you chose (something broke, I was
                stuck, an idea, something else), what you typed (up to 1,000 characters), and
                context to help us find the problem: the build and its label, your platform, your
                screen size, where you were (scene, map and tile), your chapter, quest and step, the
                difficulty you chose, how many minutes you have played, and the time on our server.
              </li>
              <li>
                <strong>What is not sent:</strong> your name, email, account or a user ID. The note
                is not linked to any of those. The card asks you to leave your name and email out of
                what you write. Please do, because we read the text as you wrote it.
              </li>
              <li>
                It works for everyone, guests included, and{" "}
                <strong>does not need “Share how you play”</strong>. Sending a note is its own
                choice.
              </li>
              <li>
                Where it goes: a Firestore database that only we can read. Nobody can read other
                players’ notes from the game.
              </li>
              <li>
                Analytics hears only that a note was sent, its kind, and the scene and map. It never
                sees the text. That happens only if you have said Yes to Share how you play.
              </li>
              <li>
                <strong>How long we keep it:</strong> there is no automatic deletion period. We keep
                a note so we can read it and look into what you reported.
              </li>
            </ul>
            <p>
              Because a note does not carry your name or account, we cannot tell which note is yours
              unless you tell us what you wrote and about when. If you want one deleted, write to{" "}
              <Mail /> with the text or the time of day.
            </p>

            <h2>6. Our website, and the beta list</h2>
            <p>
              <strong>The website</strong> ({STUDIO.site}) does not include tracking, advertising or
              analytics scripts, and it does not set cookies for those. Fonts are files on this
              site. Links to other sites, such as YouTube, are ordinary links: those sites only see
              you if you click them. Like every web server, the host logs your internet address and
              the pages requested, for security and to keep the site working.
            </p>
            <p>
              <strong>The beta list.</strong> If you give your email address (and, if you want,
              which of iOS, Android or Steam you expect to use) to hear about the Covenanter beta
              and release, we pass it to <strong>Kit</strong> (formerly ConvertKit), our email
              service. Kit sends a confirmation email first. You are added after you click the link
              in it. We pass along the page you signed up on, and we can tag you with the platform
              you chose. We use the address only for notes about Covenanter, and every email has an
              unsubscribe link. We also keep a short-lived record to stop the form being abused (a
              scrambled version of your internet address, for about 10 minutes), and the form has a
              hidden field that only robots fill in.
            </p>
            <p>If you write to us, we keep your email and our replies so we can answer you.</p>

            <h2>7. Why we use information, and our legal basis</h2>
            <div className="tablewrap">
              <table className="basis">
                <thead>
                  <tr>
                    <th scope="col">We use</th>
                    <th scope="col">To</th>
                    <th scope="col">Legal basis (EU / UK)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Play reports, time spent, crash reports and speed reports</td>
                    <td>Fix bugs, balance and improve the game, and run it well</td>
                    <td>
                      <strong>Your consent</strong> (GDPR Article 6(1)(a)). Also what the privacy
                      rules on devices require. You give it with Yes on the card and can withdraw it
                      in Settings
                    </td>
                  </tr>
                  <tr>
                    <td>Your answers to the catechism, psalm and dispute questions</td>
                    <td>Improve the questions</td>
                    <td>
                      <strong>Your explicit consent</strong> (Article 9(2)(a)), because they can
                      reveal religious beliefs. This is Share my answers, and it stays off until you
                      opt in
                    </td>
                  </tr>
                  <tr>
                    <td>Account and cloud saves</td>
                    <td>Let you sign in and keep your journeys</td>
                    <td>
                      <strong>Contract</strong> (Article 6(1)(b)), meaning giving you what you asked
                      for
                    </td>
                  </tr>
                  <tr>
                    <td>Send a Note</td>
                    <td>Read what you tell us and fix it</td>
                    <td>
                      <strong>Your request</strong>, and our <strong>legitimate interest</strong> in
                      fixing the game (Article 6(1)(f))
                    </td>
                  </tr>
                  <tr>
                    <td>Email for the beta list</td>
                    <td>Tell you about the beta and release</td>
                    <td>
                      <strong>Your consent</strong> (Article 6(1)(a))
                    </td>
                  </tr>
                  <tr>
                    <td>Server logs, abuse protection</td>
                    <td>Keep the website working and secure</td>
                    <td>
                      <strong>Legitimate interests</strong> (Article 6(1)(f))
                    </td>
                  </tr>
                  <tr>
                    <td>Your emails to us, requests under privacy law</td>
                    <td>Answer you and keep records</td>
                    <td>
                      <strong>Legitimate interests</strong> and <strong>legal obligation</strong>{" "}
                      (Article 6(1)(c))
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              We do <strong>not</strong> use your information for advertising, for profiling you, to
              make automatic decisions about you, or to train AI models. We do not sell it.
            </p>

            <h2>8. Who we share it with</h2>
            <p>
              We do not sell your personal information and we do not share it for advertising. We
              use these companies to run the game and the site. They act on our instructions:
            </p>
            <ul>
              <li>
                <strong>Google (Firebase and Google Analytics).</strong> Analytics, Crashlytics
                (crash reports, on phones and tablets), Performance Monitoring, Authentication, and
                Firestore (cloud saves and notes). Google’s terms say it processes this for us as a
                processor or service provider.
              </li>
              <li>
                <strong>Apple and Google</strong> when you choose to sign in with them. They tell us
                who you are. They have their own privacy policies and are independent of us. The app
                stores also know that you downloaded the game, under their own policies.
              </li>
              <li>
                <strong>Kit</strong>, for the beta email list.
              </li>
              <li>
                <strong>Our web host</strong>, for the website.
              </li>
            </ul>
            <p>
              We may also disclose information if the law requires it, to protect people from harm,
              or if the game or company is sold or merged. We would tell you first, and the new
              owner must follow this policy.
            </p>

            <h2>9. International transfers</h2>
            <p>
              We are in the United States, and so is most of what we use. Google may process
              information on its servers anywhere in the world, and Firebase Authentication runs
              only in the United States. Where the law needs it, transfers from the EU, UK and
              Switzerland rest on Google’s certification under the{" "}
              <strong>EU-U.S. Data Privacy Framework</strong> (and the UK and Swiss extensions) and
              on standard contractual clauses in its terms.
            </p>

            <h2>10. How long we keep it</h2>
            <div className="tablewrap">
              <table className="keep">
                <thead>
                  <tr>
                    <th scope="col">What</th>
                    <th scope="col">How long</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Play reports and time spent (Google Analytics)</td>
                    <td>
                      <strong>14 months</strong>, then deleted automatically. Google Analytics is set
                      to keep event data for 14 months.
                    </td>
                  </tr>
                  <tr>
                    <td>Crash reports (Crashlytics)</td>
                    <td>
                      <strong>90 days</strong> (Google’s fixed period)
                    </td>
                  </tr>
                  <tr>
                    <td>Speed reports (Performance Monitoring)</td>
                    <td>
                      <strong>30 days</strong> for anything tied to an internet address, and{" "}
                      <strong>60 days</strong> for the rest (Google’s fixed periods)
                    </td>
                  </tr>
                  <tr>
                    <td>Your account and cloud saves</td>
                    <td>
                      Until you delete your account. Google removes deleted account data from its
                      backups within 180 days
                    </td>
                  </tr>
                  <tr>
                    <td>Send a Note messages</td>
                    <td>
                      No automatic deletion period. We keep a note so we can read it and look into
                      what you reported. Ask us to delete one by describing the text or the time
                    </td>
                  </tr>
                  <tr>
                    <td>The beta email list</td>
                    <td>Until you unsubscribe</td>
                  </tr>
                  <tr>
                    <td>Our emails with you</td>
                    <td>Kept so we can answer you and keep a record of the request</td>
                  </tr>
                  <tr>
                    <td>Website server logs</td>
                    <td>Kept by the host for security and to run the site</td>
                  </tr>
                  <tr>
                    <td>On your device</td>
                    <td>Until you remove the game or clear its data</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>11. Your choices and rights</h2>
            <p>
              <strong>In the game, any time:</strong> Settings → <em>Share how you play</em> (off
              stops all reports from then on) and <em>Share my answers</em>. Settings →{" "}
              <em>Account</em> to sign out or delete your account. You cannot see or export your
              play reports, because they are not tied to you and there is no user ID.
            </p>
            <p>
              <strong>By law,</strong> depending on where you live, you may have the right to: know
              what we hold about you; get a copy; have it corrected or deleted; object to or limit
              how we use it; withdraw consent (without affecting what we did before); take your
              information with you; and complain to your data protection authority (in the UK, the
              Information Commissioner’s Office). To use a right, write to{" "}
              <strong>
                <Mail />
              </strong>
              . We will answer within one month (45 days in California).
            </p>
            <p>
              <strong>Play reports and your rights.</strong> Because we do not tie play reports to
              your name, email or account, and there is no user ID, we cannot pick out yours to
              show, correct or delete. They are deleted by themselves after 14 months, and turning
              sharing off stops any more. For the information we can find (your account and cloud
              saves, a beta-list email, an email you sent, or a Send a Note you can describe), we
              will do what you ask.
            </p>
            <p>We will not treat you worse for using your rights.</p>

            <h2>12. California and other US states</h2>
            <p>
              We do not sell your personal information and we do not share it for cross-context
              behavioural advertising, as California and other states define those terms. We have no
              advertising partners. There are no ads and no loot boxes.
            </p>
            <p>
              In the last 12 months, the categories below are collected only if you agree to the
              sharing, or give them to us as described above:
            </p>
            <div className="tablewrap">
              <table className="ccpa">
                <thead>
                  <tr>
                    <th scope="col">Category</th>
                    <th scope="col">What</th>
                    <th scope="col">Source</th>
                    <th scope="col">Why</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Identifiers</td>
                    <td>
                      The random app-instance number; email and name if you sign in or join the
                      list. Not a user ID, and not an advertising ID
                    </td>
                    <td>You, your device</td>
                    <td>Running the game, sign-in, the beta list</td>
                  </tr>
                  <tr>
                    <td>Internet or app activity</td>
                    <td>Game events, time spent, crashes, speed</td>
                    <td>Your device</td>
                    <td>Improve the game</td>
                  </tr>
                  <tr>
                    <td>Approximate location</td>
                    <td>Country and region or city, from your internet address</td>
                    <td>Google, from your device</td>
                    <td>Fix problems, see where players are</td>
                  </tr>
                  <tr>
                    <td>Sensitive personal information</td>
                    <td>Answers that may show religious beliefs, only with Share my answers</td>
                    <td>You</td>
                    <td>
                      Improve the questions. We do not use it to infer characteristics about you
                    </td>
                  </tr>
                  <tr>
                    <td>Other</td>
                    <td>Notes you write; journey names</td>
                    <td>You</td>
                    <td>Fix the game; give you your cloud saves</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              You have the rights to know, to delete, to correct, to opt out of sale and sharing (we
              do neither), and to limit use of sensitive information (we use it only for the purpose
              above). Write to <Mail />. You can ask an authorised agent to do so for you. If we
              refuse a request, you can appeal by writing to us again, and in some states you can
              then contact your Attorney General. We do not respond to browser “Do Not Track”
              signals, because the website has no tracker to switch off.
            </p>

            <h2>13. If you are in the European Economic Area or the UK</h2>
            <p>
              The basis for each use is in section 7. You can complain to the data protection
              authority where you live. We have no office in the EU or UK.
            </p>

            <h2>14. Security</h2>
            <p>
              Information goes between the game and Google over encrypted connections, and Google
              encrypts it where it is stored. The database rules mean only you can read your cloud
              saves, and notes can only be written, not read, from the game. We cannot promise
              perfect security. We choose providers who take it seriously, and we collect as little
              as we can. If a breach affects you, we will tell you and the authorities as the law
              requires.
            </p>

            <h2>15. Changes to this policy</h2>
            <p>
              If we change this policy in a way that matters, we will change the date at the top,
              and tell you in the game or on the website. If we ever need your agreement to
              something new (for example, to collect something we do not collect now), the game will
              ask you again.
            </p>

            <h2>16. Contact</h2>
            <p>
              <strong>{STUDIO.name}</strong>
              <br />
              <Mail />
            </p>
            <p>
              Delete your account:{" "}
              <a href="/delete-account">
                <strong>{DELETE_URL}</strong>
              </a>
            </p>
            <p className="prose__src">Last updated 29 October 2026.</p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
