"use client";

import { useEffect, useState } from "react";
import AppLink from "./AppLink";

const links = [
  { href: "#showcase", label: "Product" },
  { href: "#features", label: "Features" },
  { href: "#workflow", label: "How it works" },
  { href: "#proof", label: "Proof" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#05070f]/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#2f6fed] text-sm font-black text-white">
            P
          </span>
          <span className="font-extrabold tracking-tight text-white">
            PICKLE <span className="font-light text-white/50">CDO</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/60 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <AppLink className="group inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur transition hover:bg-white/10">
            Open the app
            <span className="grid h-6 w-6 place-items-center rounded-full bg-[#2f6fed] transition group-hover:translate-x-0.5">
              <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </AppLink>
        </div>

        <button
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#05070f]/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-white/80"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <AppLink className="rounded-full bg-[#2f6fed] px-5 py-2.5 text-center text-sm font-semibold text-white">
              Open the app
            </AppLink>
          </nav>
        </div>
      )}
    </header>
  );
}
