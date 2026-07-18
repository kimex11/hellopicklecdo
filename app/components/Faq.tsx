"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "Does it need internet to run a session?",
    a: "No. Once the page has loaded once, Pickle CDO runs entirely offline. Court control, scoring, and the leaderboard all work without a signal.",
  },
  {
    q: "Do players need to create accounts?",
    a: "No. There's no login for organizers or players. Just add names to the roster and check people in as they arrive.",
  },
  {
    q: "Is it really free?",
    a: "Yes, free forever. There's no subscription, no per-player fee, and no ads.",
  },
  {
    q: "Can I use it for a tournament, not just open play?",
    a: "It's built for open play and drop-in sessions. The King/Queen ladder and Winners/Challengers modes work well for informal round-robin style tournaments too.",
  },
  {
    q: "What happens to my data?",
    a: "Everything is saved locally on the device running the session. You can export a full backup as a JSON file at any time, or restore one on another device.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <span className="sec-label text-[#c8f04b]">FAQ</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-8 max-w-3xl text-[clamp(2rem,5.5vw,3.75rem)] leading-[1.08] font-light tracking-[-0.02em] text-[#f4f5f2]">
            Common questions.
          </h2>
        </Reveal>

        <div className="mt-12">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.q} delay={i * 50}>
                <div className="hair-t">
                  <button
                    className="grid w-full cursor-pointer grid-cols-[2.5rem_1fr_2rem] items-center gap-4 py-6 text-left sm:grid-cols-[6rem_1fr_2rem] sm:gap-8"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="sys text-[0.72rem] text-[#f4f5f2]/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-lg font-light sm:text-2xl ${
                        isOpen ? "text-[#f4f5f2]" : "text-[#f4f5f2]/60"
                      }`}
                    >
                      {item.q}
                    </span>
                    <span className="sys text-right text-sm text-[#c8f04b]">
                      {isOpen ? "x" : "+"}
                    </span>
                  </button>
                  <div
                    className="grid overflow-hidden transition-[grid-template-rows] duration-400 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="min-h-0">
                      <p className="max-w-2xl pb-7 text-sm leading-relaxed text-[#f4f5f2]/55 sm:pl-32 sm:text-base">
                        {item.a}
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
