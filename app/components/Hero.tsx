"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AppLink from "./AppLink";

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!prefersReduced) {
        // Entrance choreography (after preloader ~1.8s).
        const intro = gsap.timeline({ delay: 1.9 });
        intro
          .from(".hero-line span", {
            yPercent: 120,
            duration: 1.1,
            ease: "power4.out",
            stagger: 0.08,
          })
          .from(
            ".hero-orb",
            { scale: 0.6, opacity: 0, duration: 1.6, ease: "power3.out" },
            0
          )
          .from(
            ".hero-fade",
            { y: 30, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.12 },
            "-=0.7"
          );

        // Camera-flies-into-orb on scroll. Shorter run on phones so the
        // pinned stretch stays snappy with touch flicks.
        const mm = gsap.matchMedia();
        mm.add(
          {
            isMobile: "(max-width: 767px)",
            isDesktop: "(min-width: 768px)",
          },
          (mctx) => {
            const { isMobile } = mctx.conditions as { isMobile: boolean };
            const cam = gsap.timeline({
              scrollTrigger: {
                trigger: el,
                start: "top top",
                end: isMobile ? "+=70%" : "+=120%",
                scrub: isMobile ? 0.6 : 1,
                pin: true,
              },
            });
            cam
              .to(".hero-headline", { scale: 2.4, filter: "blur(14px)", opacity: 0, ease: "power2.in" }, 0)
              .to(".hero-orb", { scale: 3.2, ease: "power2.in" }, 0)
              .to(".hero-fade", { opacity: 0, y: -40, ease: "power2.in" }, 0)
              .to(el, { backgroundColor: "#05070f" }, 0);
          }
        );

        // Parallax glow drift.
        gsap.to(".hero-glow-a", {
          xPercent: 12,
          yPercent: -8,
          repeat: -1,
          yoyo: true,
          duration: 9,
          ease: "sine.inOut",
        });
        gsap.to(".hero-glow-b", {
          xPercent: -10,
          yPercent: 10,
          repeat: -1,
          yoyo: true,
          duration: 11,
          ease: "sine.inOut",
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="top"
      className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-[#05070f]"
    >
      {/* radial line backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          background:
            "repeating-conic-gradient(from 0deg at 50% 46%, rgba(255,255,255,0.05) 0deg 0.12deg, transparent 0.12deg 12deg)",
          maskImage:
            "radial-gradient(circle at 50% 46%, black 10%, transparent 62%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 46%, black 10%, transparent 62%)",
        }}
      />

      {/* glow blobs */}
      <div
        className="hero-glow-a glow-blob hero-fade"
        style={{
          top: "18%",
          left: "40%",
          width: 420,
          height: 420,
          background: "radial-gradient(circle, rgba(47,111,237,0.6), transparent 70%)",
        }}
      />
      <div
        className="hero-glow-b glow-blob hero-fade"
        style={{
          top: "34%",
          left: "48%",
          width: 340,
          height: 340,
          background: "radial-gradient(circle, rgba(198,242,74,0.28), transparent 70%)",
        }}
      />

      {/* the orb: glowing court ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
      <div
        className="hero-orb relative"
        style={{ width: "min(78vw, 560px)", aspectRatio: "1" }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 200deg, #ff8a3d, #2f6fed 120deg, #5fa8ff 200deg, #c6f24a 300deg, #ff8a3d)",
            filter: "blur(2px)",
            maskImage:
              "radial-gradient(circle, transparent 62%, black 63%, black 70%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(circle, transparent 62%, black 63%, black 70%, transparent 72%)",
          }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(5,7,15,0) 55%, rgba(5,7,15,0.9) 66%, #05070f 74%)",
          }}
        />
        <div
          className="absolute inset-[14%] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, rgba(47,111,237,0.22), rgba(5,7,15,0.05) 70%)",
          }}
        />
      </div>
      </div>

      {/* headline */}
      <div className="hero-headline relative z-10 px-6 text-center">
        <h1 className="hero-line text-[13vw] leading-[0.9] font-black tracking-tight sm:text-[10vw] lg:text-[8.5vw]">
          <span className="text-metal block overflow-hidden">OPEN PLAY.</span>
        </h1>
        <h1 className="hero-line text-[13vw] leading-[0.9] font-black tracking-tight sm:text-[10vw] lg:text-[8.5vw]">
          <span className="text-ghost block overflow-hidden">PERFECTLY QUEUED.</span>
        </h1>
      </div>

      {/* bottom copy + CTA */}
      <div className="hero-fade absolute bottom-[8%] left-1/2 z-10 w-full max-w-xl -translate-x-1/2 px-6 text-center">
        <p className="mx-auto max-w-md text-sm text-white/60 sm:text-base">
          From driveway drop-ins to club nights, Pickle CDO fills every court
          with fair rotations, live scoring, and a leaderboard. One screen. No
          login. Works offline.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <AppLink className="rounded-full bg-[#2f6fed] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_-8px_rgba(47,111,237,0.7)] transition hover:bg-[#255ed1]">
            Open the app, it&apos;s free
          </AppLink>
          <a
            href="#showcase"
            className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white/85 transition hover:border-white/40 hover:text-white"
          >
            See it in motion
          </a>
        </div>
      </div>
    </section>
  );
}
