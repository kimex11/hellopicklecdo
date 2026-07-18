import Reveal from "./Reveal";
import AppLink from "./AppLink";

const featured = [
  {
    label: "Setup",
    title: "Courts ready in one minute",
    body: "Venue, courts, format, rotation mode. No accounts, no invites.",
  },
  {
    label: "Rotation",
    title: "Six queue modes",
    body: "Auto-balanced to king and queen ladder, switchable mid-session.",
  },
  {
    label: "Runtime",
    title: "Offline, on your device",
    body: "Free forever. No login. Works with zero signal at the court.",
  },
];

export default function Hero() {
  return (
    <section id="top" className="grid-ink relative flex min-h-dvh flex-col">
      {/* plus markers */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {[
          { top: "22%", left: "8%" },
          { top: "38%", left: "64%" },
          { top: "58%", left: "34%" },
          { top: "18%", left: "86%" },
        ].map((p, i) => (
          <span
            key={i}
            className="absolute font-light text-[#f4f5f2]/20"
            style={{ top: p.top, left: p.left }}
          >
            +
          </span>
        ))}
      </div>

      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-6 pt-32 pb-16 lg:px-10">
        <Reveal>
          <h1 className="max-w-5xl text-[clamp(2.75rem,9vw,6.5rem)] leading-[1.02] font-light tracking-[-0.03em] text-[#f4f5f2]">
            Every Court Full.
            <br />
            Every Rotation Fair.
            <br />
            Zero Arguments.
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-[#f4f5f2]/60 sm:text-lg">
            Pickle CDO turns chaotic open play into a queue everyone can see:
            fair rotations, live court scoring, and a leaderboard, all from one
            screen at the courtside.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-start gap-2">
            <AppLink className="bracket bracket-primary -ml-3">
              [ Open the app for free <span aria-hidden>-&gt;</span> ]
            </AppLink>
            <a href="#why" className="bracket bracket-ghost -ml-3">
              [ See how it works <span aria-hidden>-&gt;</span> ]
            </a>
          </div>
        </Reveal>
      </div>

      {/* featured strip */}
      <div className="hair-t">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal>
            <p className="sys pt-6 text-[0.68rem] text-[#f4f5f2]/40">Featured</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {featured.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div
                  className={`py-7 sm:pr-8 ${
                    i > 0 ? "hair-t sm:border-t-0 sm:border-l sm:pl-8" : ""
                  }`}
                  style={i > 0 ? { borderLeftColor: "var(--hairline)" } : undefined}
                >
                  <p className="sys text-[0.68rem] text-[#c8f04b]">{f.label}</p>
                  <h3 className="mt-3 text-lg font-normal text-[#f4f5f2]">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#f4f5f2]/50">
                    {f.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
