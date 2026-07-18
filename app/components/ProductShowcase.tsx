"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const shots = [
  {
    src: "/screenshots/01-session-setup.png",
    tag: "01 / Setup",
    title: "A session in one minute",
    body: "Name the venue, set courts and format, pick a rotation mode. The live summary confirms capacity before the first serve.",
  },
  {
    src: "/screenshots/03-player-roster.png",
    tag: "02 / Roster",
    title: "Faces, levels, check-ins",
    body: "Build a roster with photos and skill levels so courtside calls stay fast, even with a full house.",
  },
  {
    src: "/screenshots/04-court-control-live.png",
    tag: "03 / Live courts",
    title: "Every court, one screen",
    body: "Running clocks, teams, and scores update in real time. Call the next group up with a single tap.",
  },
  {
    src: "/screenshots/05-leaderboard.png",
    tag: "04 / Leaderboard",
    title: "Standings that settle themselves",
    body: "Win rate, point differential, and rankings recalculate after every game. Share results, no accounts needed.",
  },
];

export default function ProductShowcase() {
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
      const panels = gsap.utils.toArray<HTMLElement>(".ps-shot");
      const captions = gsap.utils.toArray<HTMLElement>(".ps-caption");

      gsap.set(panels, { autoAlpha: 0, yPercent: 8, rotateX: 8 });
      gsap.set(panels[0], { autoAlpha: 1, yPercent: 0, rotateX: 0 });
      gsap.set(captions, { autoAlpha: 0, y: 20 });
      gsap.set(captions[0], { autoAlpha: 1, y: 0 });

      // Shorter pinned run and tighter scrub on phones so touch flicks
      // move through the deck without feeling stuck.
      const mm = gsap.matchMedia();
      mm.add(
        {
          isMobile: "(max-width: 767px)",
          isDesktop: "(min-width: 768px)",
        },
        (mctx) => {
          const { isMobile } = mctx.conditions as { isMobile: boolean };
          const per = isMobile ? 60 : 90;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              start: "top top",
              end: "+=" + shots.length * per + "%",
              scrub: isMobile ? 0.6 : 1,
              pin: ".ps-stage",
            },
          });

          for (let i = 1; i < panels.length; i++) {
            tl.to(panels[i - 1], { autoAlpha: 0, yPercent: -8, rotateX: -8, ease: "power2.inOut" }, i)
              .to(captions[i - 1], { autoAlpha: 0, y: -20, ease: "power2.inOut" }, i)
              .to(panels[i], { autoAlpha: 1, yPercent: 0, rotateX: 0, ease: "power2.out" }, i)
              .to(captions[i], { autoAlpha: 1, y: 0, ease: "power2.out" }, i)
              .to(".ps-progress", { scaleX: (i + 1) / panels.length, ease: "none" }, i - 1);
          }
        }
      );

      gsap.set(".ps-progress", { scaleX: 1 / panels.length });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="showcase" className="relative bg-[#05070f]">
      <div className="ps-stage relative flex min-h-dvh items-center overflow-hidden">
        <div
          aria-hidden
          className="glow-blob"
          style={{
            top: "20%",
            left: "5%",
            width: 380,
            height: 380,
            background: "radial-gradient(circle, rgba(47,111,237,0.35), transparent 70%)",
          }}
        />
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-6 px-6 lg:grid-cols-2 lg:gap-16">
          {/* captions */}
          <div className="relative order-2 lg:order-1">
            <span className="text-xs font-bold tracking-[0.3em] text-[#5fa8ff] uppercase">
              The product
            </span>
            <div className="relative mt-4 h-[200px] sm:h-[200px]">
              {shots.map((s) => (
                <div key={s.tag} className="ps-caption absolute inset-0">
                  <div className="font-mono text-xs tracking-widest text-white/40">
                    {s.tag}
                  </div>
                  <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm text-white/60 sm:mt-4 sm:text-base">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 h-px w-full max-w-md overflow-hidden bg-white/10 sm:mt-6">
              <div className="ps-progress h-full w-full origin-left bg-gradient-to-r from-[#2f6fed] to-[#c6f24a]" />
            </div>
          </div>

          {/* device stack */}
          <div
            className="relative order-1 h-[38vh] min-h-[260px] lg:order-2 lg:h-[52vh] lg:min-h-[360px]"
            style={{ perspective: "1400px" }}
          >
            {shots.map((s) => (
              <div
                key={s.src}
                className="ps-shot absolute inset-0 flex items-center justify-center"
              >
                <div className="shot-card w-[94%] max-w-xl sm:w-[86%]">
                  <Image
                    src={s.src}
                    alt={s.title}
                    width={1440}
                    height={900}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
