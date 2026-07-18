import Reveal from "./Reveal";

const rows = [
  { label: "Setup time", us: "~1 minute", them: "Printing sheets, texting groups" },
  { label: "Account required", us: "Never", them: "Usually, for every player" },
  { label: "Works offline", us: "Yes, fully", them: "Rarely" },
  { label: "Fair rotation logic", us: "6 automatic modes", them: "Manual, by memory" },
  { label: "Live scoring", us: "Built in, courtside", them: "Shouted across the court" },
  { label: "Cost", us: "Free forever", them: "Subscriptions or per-seat fees" },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <span className="text-xs font-bold tracking-widest text-[#2f6fed] uppercase">
            Why Pickle CDO
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0b1730] sm:text-4xl">
            Ditch the whiteboard and the spreadsheet.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Most open-play groups run on a mix of paper sign-up sheets, group
            chats, and someone&apos;s memory. Pickle CDO replaces all of it
            with one screen anyone can run.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 overflow-hidden rounded-3xl border border-slate-100 shadow-sm">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-[#0b1730] text-white">
                  <th className="px-6 py-4 font-semibold">&nbsp;</th>
                  <th className="px-6 py-4 font-semibold">Pickle CDO</th>
                  <th className="px-6 py-4 font-semibold text-white/60">
                    Spreadsheets &amp; whiteboards
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="px-6 py-4 font-semibold text-[#0b1730]">
                      {row.label}
                    </td>
                    <td className="px-6 py-4 font-semibold text-emerald-600">
                      {row.us}
                    </td>
                    <td className="px-6 py-4 text-slate-500">{row.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
