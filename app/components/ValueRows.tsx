"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { IconScale, IconTv, IconTrophy } from "./Icons";

const rows = [
  {
    n: "01",
    Icon: IconScale,
    title: "Fair courts by default",
    body: "Six rotation modes decide who plays next: auto-balanced, skill-separated, winners and challengers, mixed doubles, skill courts, or king and queen ladder. The queue is visible to everyone, so nobody argues with the whiteboard.",
  },
  {
    n: "02",
    Icon: IconTv,
    title: "Live court control",
    body: "Every court shows its teams, running clock, and score on one screen. Tap to update points as they happen, call the next group with one button, and watch rotation health stay fair in real time.",
  },
  {
    n: "03",
    Icon: IconTrophy,
    title: "Proof at the end of the night",
    body: "Wins, win rate, and point differential update after every game. Session rankings and lifetime stats live on your device, exportable and shareable without anyone creating an account.",
  },
];

export default function ValueRows() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <p className="sys text-[0.68rem] text-[#f4f5f2]/40">Value proposition</p>
        </Reveal>

        <div className="mt-8">
          {rows.map((row, i) => {
            const isActive = active === i;
            return (
              <Reveal key={row.n} delay={i * 60}>
                <div className="hair-t">
                  <button
                    className="grid w-full cursor-pointer grid-cols-[2.5rem_2.5rem_1fr] items-center gap-4 py-6 text-left sm:grid-cols-[6rem_4rem_1fr] sm:gap-8 sm:py-8"
                    onClick={() => setActive(i)}
                    aria-expanded={isActive}
                  >
                    <span className="sys text-[0.72rem] text-[#f4f5f2]/50">
                      {row.n}
                    </span>
                    <span className="grid h-8 w-8 place-items-center bg-[#c8f04b] text-[#101210]">
                      <row.Icon className="h-4 w-4" />
                    </span>
                    <h3
                      className={`text-xl font-light tracking-[-0.01em] transition sm:text-3xl ${
                        isActive ? "text-[#f4f5f2]" : "text-[#f4f5f2]/60"
                      }`}
                    >
                      {row.title}
                    </h3>
                  </button>
                  <div
                    className="grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out"
                    style={{ gridTemplateRows: isActive ? "1fr" : "0fr" }}
                  >
                    <div className="min-h-0">
                      <p className="max-w-2xl pb-8 pl-0 text-sm leading-relaxed text-[#f4f5f2]/55 sm:pl-40 sm:text-base">
                        {row.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
          <div className="hair-t" />
        </div>
      </div>
    </section>
  );
}
