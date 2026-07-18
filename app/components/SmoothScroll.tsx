"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Recalculate after fonts/images/preloader/pins settle. Multiple passes
    // because the preloader locks scroll and pinned sections shift offsets.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const timers = [600, 1200, 2100, 2800].map((ms) =>
      window.setTimeout(refresh, ms)
    );

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      window.removeEventListener("load", refresh);
      timers.forEach((t) => window.clearTimeout(t));
      ScrollTrigger.getAll().forEach((s) => s.kill());
    };
  }, []);

  return null;
}
