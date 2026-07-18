"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      el.style.display = "none";
      return;
    }

    document.documentElement.style.overflow = "hidden";

    const obj = { v: 0 };
    const tl = gsap.timeline();
    tl.to(obj, {
      v: 100,
      duration: 1.1,
      ease: "power2.inOut",
      onUpdate: () => setCount(Math.round(obj.v)),
    })
      .to(el, { autoAlpha: 0, duration: 0.5, ease: "power2.out" }, "+=0.15")
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
      className="fixed inset-0 z-[100] flex items-end bg-[#101210]"
    >
      <div className="flex w-full items-end justify-between p-6 lg:p-10">
        <div className="flex items-center gap-3">
          <span aria-hidden className="block h-2 w-2 bg-[#c8f04b]" />
          <span className="text-lg font-medium tracking-tight text-[#f4f5f2]">
            Pickle <span className="font-light text-[#8f938c]">CDO</span>
          </span>
        </div>
        <span className="sys text-[0.72rem] text-[#c8f04b]">
          Loading courts: {count.toString().padStart(3, "0")}
        </span>
      </div>
    </div>
  );
}
