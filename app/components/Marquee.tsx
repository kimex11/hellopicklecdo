const items = [
  "Free forever",
  "No login required",
  "Works fully offline",
  "Saved on your device",
  "6 rotation modes",
  "Live court scoring",
  "Auto leaderboard",
  "Built for clubs and schools",
];

export default function Marquee() {
  return (
    <section className="relative border-y border-white/10 bg-[#05070f] py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#05070f] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#05070f] to-transparent" />
      <div className="marquee-track">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
            {items.map((item) => (
              <span key={item} className="flex items-center gap-4 px-8">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c6f24a]" />
                <span className="text-sm font-semibold tracking-wide text-white/70 uppercase">
                  {item}
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
