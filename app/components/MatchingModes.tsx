import Reveal from "./Reveal";
import {
  IconScale,
  IconTarget,
  IconMedal,
  IconHandshake,
  IconGrid,
  IconCrown,
} from "./Icons";

const modes = [
  {
    Icon: IconScale,
    title: "Auto-balanced",
    body: "Fair queue order with evenly matched teams. The default for mixed-level open play.",
  },
  {
    Icon: IconTarget,
    title: "Skill-separated",
    body: "Keeps similar skill levels together so games stay competitive on every court.",
  },
  {
    Icon: IconMedal,
    title: "Winners / challengers",
    body: "Groups players by their most recent result, so winners keep facing strong competition.",
  },
  {
    Icon: IconHandshake,
    title: "Mixed doubles",
    body: "Mixed pairings with balanced skill, built for social mixed doubles nights.",
  },
  {
    Icon: IconGrid,
    title: "Skill courts",
    body: "Dedicated courts by level, so beginners and advanced players each have their own space.",
  },
  {
    Icon: IconCrown,
    title: "King / Queen court",
    body: "Winners advance through the courts, ladder style, up to the top court.",
  },
];

export default function MatchingModes() {
  return (
    <section className="bg-[#05070f] py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold tracking-widest text-[#5fa8ff] uppercase">
            Rotation logic
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Six ways to fill a court, fairly.
          </h2>
          <p className="mt-4 text-white/70">
            Switch modes any time during a session. The right rotation
            depends on the crowd you have that day.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modes.map((mode, i) => (
            <Reveal key={mode.title} delay={i * 50}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/25 hover:bg-white/10">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-[#5fa8ff]">
                  <mode.Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-bold">{mode.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {mode.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
