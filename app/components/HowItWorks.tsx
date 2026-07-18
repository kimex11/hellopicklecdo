"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    n: "01",
    title: "Set up your session",
    body: "Venue name, court count, doubles or singles, and a matching mode. About a minute, start to finish.",
  },
  {
    n: "02",
    title: "Add your roster",
    body: "Add players with names, levels, and pairing preferences, or load the demo roster. Check people in as they arrive.",
  },
  {
    n: "03",
    title: "Run live courts",
    body: "Pickle CDO fills every court automatically. Track clocks, update scores, and call the next group with one button.",
  },
  {
    n: "04",
    title: "Track the leaderboard",
    body: "Wins, win rate, and point differential update after every game. Export or share, no account required.",
  },
];

export default function HowItWorks() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(".wf-line-fill", {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".wf-list",
          start: "top 65%",
          end: "bottom 70%",
          scrub: 1,
        },
      });
      gsap.from(".wf-step", {
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: { trigger: ".wf-list", start: "top 70%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="workflow" className="relative bg-[#05070f] py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold tracking-[0.3em] text-[#5fa8ff] uppercase">
            Step by step
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Empty court to full rotation in four steps.
          </h2>
        </div>

        <div className="wf-list relative mt-16 pl-10">
          <div className="absolute top-2 bottom-2 left-[13px] w-px bg-white/10" />
          <div className="wf-line-fill absolute top-2 bottom-2 left-[13px] w-px origin-top scale-y-0 bg-gradient-to-b from-[#2f6fed] to-[#c6f24a]" />
          <div className="space-y-14">
            {steps.map((s) => (
              <div key={s.n} className="wf-step relative">
                <span className="absolute top-1 -left-10 grid h-7 w-7 place-items-center rounded-full border border-white/20 bg-[#05070f] font-mono text-[10px] text-white/70">
                  {s.n}
                </span>
                <h3 className="text-2xl font-bold text-white">{s.title}</h3>
                <p className="mt-3 max-w-lg text-white/55">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
