"use client";

import { useEffect, useState } from "react";
import AppLink from "./AppLink";

const links = [
  { href: "#overview", label: "Overview" },
  { href: "#why", label: "How it works" },
  { href: "#reputation", label: "Live reputation" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-[#101210]/90 backdrop-blur-sm hair-b" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <span aria-hidden className="block h-2 w-2 bg-[#c8f04b]" />
          <span className="text-lg font-medium tracking-tight text-[#f4f5f2]">
            Pickle <span className="font-light text-[#8f938c]">CDO</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="sys text-[0.72rem] text-[#f4f5f2]/60 transition hover:text-[#c8f04b]"
            >
              {l.label}
            </a>
          ))}
          <AppLink className="bracket bracket-primary">
            [ Open the app <span aria-hidden>-&gt;</span> ]
          </AppLink>
        </nav>

        <button
          aria-label="Toggle menu"
          className="sys text-[0.72rem] text-[#f4f5f2] md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "[ Close ]" : "[ Menu ]"}
        </button>
      </div>

      {open && (
        <div className="hair-t bg-[#101210]/95 px-6 py-5 backdrop-blur-sm md:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="sys text-[0.78rem] text-[#f4f5f2]/80"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <AppLink className="bracket bracket-primary -ml-3 w-fit">
              [ Open the app <span aria-hidden>-&gt;</span> ]
            </AppLink>
          </nav>
        </div>
      )}
    </header>
  );
}
