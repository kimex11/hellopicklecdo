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
    <section id="faq" className="bg-[#05070f] py-28">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <span className="text-xs font-bold tracking-[0.3em] text-[#5fa8ff] uppercase">
            FAQ
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Common questions
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 space-y-3">
            {faqs.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                >
                  <button
                    className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-white"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    {item.q}
                    <span
                      className={`ml-4 shrink-0 text-xl text-[#5fa8ff] transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <p className="px-6 pb-5 text-sm leading-relaxed text-white/55">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
