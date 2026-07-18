"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const el = root.current;
    if (!el) return;

    if (prefersReduced) {
      el.style.display = "none";
      return;
    }

    document.documentElement.style.overflow = "hidden";

    const obj = { v: 0 };
    const tl = gsap.timeline();
    tl.to(obj, {
      v: 100,
      duration: 1.6,
      ease: "power2.inOut",
      onUpdate: () => setCount(Math.round(obj.v)),
    })
      .to(".pl-bar", { scaleX: 1, duration: 1.6, ease: "power2.inOut" }, 0)
      .to(".pl-word", { y: "-110%", duration: 0.7, ease: "power4.in", stagger: 0.06 })
      .to(el, { yPercent: -100, duration: 0.9, ease: "power4.inOut" }, "-=0.2")
      .set(el, { display: "none" })
      .add(() => {
        document.documentElement.style.overflow = "";
      });

    return () => {
      tl.kill();
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#05070f]"
    >
      <div className="overflow-hidden">
        <div className="pl-word flex items-center gap-3 text-2xl font-black tracking-tight text-white sm:text-4xl">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#2f6fed] text-lg">
            P
          </span>
          PICKLE <span className="font-light text-white/40">CDO</span>
        </div>
      </div>
      <div className="mt-8 h-px w-56 overflow-hidden bg-white/10">
        <div className="pl-bar h-full w-full origin-left scale-x-0 bg-gradient-to-r from-[#2f6fed] to-[#c6f24a]" />
      </div>
      <div className="mt-4 font-mono text-xs tracking-widest text-white/40">
        {count.toString().padStart(3, "0")}
      </div>
    </div>
  );
}
