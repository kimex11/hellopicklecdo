import Reveal from "./Reveal";
import {
  IconTimer,
  IconShuffle,
  IconTv,
  IconUsers,
  IconTrophy,
  IconDatabase,
} from "./Icons";

const features = [
  {
    Icon: IconTimer,
    title: "1-minute session setup",
    body: "Name your venue, pick court count and format, choose a rotation mode. No accounts, no invites.",
  },
  {
    Icon: IconShuffle,
    title: "6 matching modes",
    body: "Auto-balanced, skill-separated, winners, mixed doubles, skill courts, or king and queen ladder.",
  },
  {
    Icon: IconTv,
    title: "Live court control",
    body: "Every court's game, teams, and running clock at a glance. Tap to update the score from courtside.",
  },
  {
    Icon: IconUsers,
    title: "Player roster with faces",
    body: "Photos, levels, and pairing preferences so check-in and next-up calls stay fast for big groups.",
  },
  {
    Icon: IconTrophy,
    title: "Leaderboard and stats",
    body: "Win rate, point differential, and rankings update automatically, shareable per player.",
  },
  {
    Icon: IconDatabase,
    title: "Local-first and portable",
    body: "Everything saves on the device. Export a backup any time, restore on another device in seconds.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-[#05070f] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold tracking-[0.3em] text-[#5fa8ff] uppercase">
            Everything courtside needs
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            One screen replaces the whiteboard, the spreadsheet, and the group
            chat.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 70}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-500 hover:border-white/25 hover:bg-white/[0.06]">
                <div
                  aria-hidden
                  className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[#2f6fed]/0 blur-2xl transition duration-500 group-hover:bg-[#2f6fed]/25"
                />
                <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white/5 text-[#5fa8ff] ring-1 ring-white/10">
                  <f.Icon className="h-6 w-6" />
                </div>
                <h3 className="relative mt-6 text-lg font-bold text-white">
                  {f.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-white/55">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
