import Image from "next/image";
import Reveal from "./Reveal";
import AppLink from "./AppLink";

const steps = [
  {
    n: "01",
    title: "Set up your session",
    body: "Venue name, court count, doubles or singles, and a rotation mode. About a minute, start to finish.",
    shot: "/screenshots/01-session-setup.png",
    alt: "Pickle CDO session setup screen with venue, courts, format, and matching modes",
  },
  {
    n: "02",
    title: "Add your roster",
    body: "Players with names, levels, and pairing preferences, or load the demo roster. Check people in as they arrive.",
    shot: "/screenshots/03-player-roster.png",
    alt: "Pickle CDO player roster with levels and check-in status",
  },
  {
    n: "03",
    title: "Run live courts",
    body: "Every court fills automatically. Track clocks, update scores, and call the next group with one button.",
    shot: "/screenshots/04-court-control-live.png",
    alt: "Pickle CDO live court control with two active games and running clocks",
  },
  {
    n: "04",
    title: "Track the leaderboard",
    body: "Wins, win rate, and point differential update after every game. Export or share, no account required.",
    shot: "/screenshots/05-leaderboard.png",
    alt: "Pickle CDO leaderboard with session rankings",
  },
];

export default function LightSteps() {
  return (
    <section id="why" className="grid-paper bg-[#e9e9e6] py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <h2 className="max-w-4xl text-[clamp(2rem,5.5vw,3.75rem)] leading-[1.08] font-light tracking-[-0.02em]">
            <span className="text-[#101210]">How it works.</span>{" "}
            <span className="text-[#8f938c]">
              Empty court to full rotation in four steps.
            </span>
          </h2>
        </Reveal>

        <div className="mt-10 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
          <Reveal>
            <p className="text-sm leading-relaxed text-[#101210]/60 sm:text-base">
              Built for teams, clubs, schools, and organizations. The person
              running the night gets one screen; everyone else just plays.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-sm leading-relaxed text-[#101210]/60 sm:text-base">
              Everything is stored locally and works offline. Back up the whole
              session as one file and restore it on any device.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={(i % 2) * 80}>
              <div className="flex h-full flex-col border border-[#101210]/15 bg-white p-6 sm:p-8">
                <span className="sys w-fit bg-[#c8f04b] px-1.5 py-0.5 text-[0.72rem] text-[#101210]">
                  {s.n}
                </span>
                <h3 className="mt-5 text-2xl font-light tracking-[-0.01em] text-[#101210] sm:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-3 mb-6 max-w-md text-sm leading-relaxed text-[#101210]/60">
                  {s.body}
                </p>
                <div className="shot-frame-paper mt-auto">
                  <Image
                    src={s.shot}
                    alt={s.alt}
                    width={1440}
                    height={900}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-14">
            <AppLink className="bracket bracket-on-paper -ml-3">
              [ Start a session now <span aria-hidden>-&gt;</span> ]
            </AppLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
