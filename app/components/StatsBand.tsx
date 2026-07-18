"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AppLink from "./AppLink";
import { IconEye, IconCursorClick, IconGlobe } from "./Icons";
import {
  incrementCounter,
  readCounter,
  detectVisitorLocation,
} from "../lib/counters";

const SEED_COUNTRIES = [
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
  { code: "GB", name: "United Kingdom" },
  { code: "PH", name: "Philippines" },
  { code: "ES", name: "Spain" },
  { code: "MX", name: "Mexico" },
  { code: "FR", name: "France" },
  { code: "DE", name: "Germany" },
  { code: "NZ", name: "New Zealand" },
  { code: "JP", name: "Japan" },
  { code: "SG", name: "Singapore" },
];

function CountUp({ value }: { value: number | null }) {
  const ref = useRef<HTMLSpanElement>(null);
  const prev = useRef(0);

  useEffect(() => {
    if (value === null || !ref.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const node = ref.current;
    if (prefersReduced) {
      node.textContent = value.toLocaleString("en-US");
      return;
    }
    const obj = { v: prev.current };
    const tween = gsap.to(obj, {
      v: value,
      duration: 1.4,
      ease: "power2.out",
      onUpdate: () => {
        node.textContent = Math.round(obj.v).toLocaleString("en-US");
      },
    });
    prev.current = value;
    return () => {
      tween.kill();
    };
  }, [value]);

  return <span ref={ref}>{value === null ? "..." : value}</span>;
}

export default function StatsBand() {
  const root = useRef<HTMLDivElement>(null);
  const [visits, setVisits] = useState<number | null>(null);
  const [appOpens, setAppOpens] = useState<number | null>(null);
  const [countries, setCountries] = useState<
    { code: string; name: string }[]
  >([]);
  const [visitorCountry, setVisitorCountry] = useState<string | null>(null);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    incrementCounter("site-visits").then(setVisits);
    readCounter("app-opens").then(setAppOpens);

    (async () => {
      const location = await detectVisitorLocation();
      const seedList = [...SEED_COUNTRIES];
      if (location) {
        setVisitorCountry(location.countryName);
        if (!seedList.some((c) => c.code === location.countryCode)) {
          seedList.push({ code: location.countryCode, name: location.countryName });
        }
        await incrementCounter(`country-${location.countryCode.toLowerCase()}`);
      }
      const results = await Promise.all(
        seedList.map(async (c) => ({
          ...c,
          count: await readCounter(`country-${c.code.toLowerCase()}`),
        }))
      );
      setCountries(
        results.filter((c) => c.count > 0).sort((a, b) => b.count - a.count)
      );
    })();
  }, []);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".sb-item", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: el, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="proof" className="relative overflow-hidden bg-[#05070f] py-28">
      <div
        aria-hidden
        className="glow-blob"
        style={{
          top: "10%",
          right: "8%",
          width: 420,
          height: 420,
          background: "radial-gradient(circle, rgba(198,242,74,0.18), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="sb-item max-w-2xl">
          <span className="text-xs font-bold tracking-[0.3em] text-[#5fa8ff] uppercase">
            Live reputation
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Real numbers, ticking up as you read.
          </h2>
          <p className="mt-4 text-white/55">
            These counters track real visits to this page and real clicks
            through to the app. No sample data, no guesses.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sb-item rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="flex items-center gap-2 text-[#c6f24a]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c6f24a] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c6f24a]" />
              </span>
              <span className="text-[10px] font-bold tracking-widest uppercase">Live</span>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <IconEye className="h-6 w-6 text-white/40" />
              <span className="text-4xl font-extrabold text-white">
                <CountUp value={visits} />
              </span>
            </div>
            <div className="mt-2 text-sm text-white/50">Site visits</div>
          </div>

          <div className="sb-item rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="flex items-center gap-2 text-[#c6f24a]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c6f24a] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c6f24a]" />
              </span>
              <span className="text-[10px] font-bold tracking-widest uppercase">Live</span>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <IconCursorClick className="h-6 w-6 text-white/40" />
              <span className="text-4xl font-extrabold text-white">
                <CountUp value={appOpens} />
              </span>
            </div>
            <div className="mt-2 text-sm text-white/50">App opens from here</div>
          </div>

          <div className="sb-item rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="text-4xl font-extrabold text-white">6</div>
            <div className="mt-2 text-sm text-white/50">Rotation modes</div>
            <div className="mt-4 text-xs text-white/35">
              Auto-balanced to king and queen ladder.
            </div>
          </div>

          <div className="sb-item rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="text-4xl font-extrabold text-white">0</div>
            <div className="mt-2 text-sm text-white/50">Logins required</div>
            <div className="mt-4 text-xs text-white/35">
              Free forever, offline, on your device.
            </div>
          </div>
        </div>

        <div className="sb-item mt-4 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/5 text-[#5fa8ff] ring-1 ring-white/10">
              <IconGlobe className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-white">
                Organizers checking in worldwide
              </h3>
              <p className="text-sm text-white/45">
                {visitorCountry
                  ? `Latest visitor detected from ${visitorCountry}.`
                  : "Detecting where today's visitors are joining from."}
              </p>
            </div>
          </div>
          {countries.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2.5">
              {countries.map((c) => (
                <span
                  key={c.code}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/85"
                >
                  <span className="grid h-5 w-8 place-items-center rounded bg-white/10 text-[10px] font-bold tracking-wider text-white">
                    {c.code}
                  </span>
                  {c.name}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="sb-item mt-10 text-center">
          <AppLink
            className="inline-flex items-center gap-2 rounded-full bg-[#2f6fed] px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_40px_-8px_rgba(47,111,237,0.7)] transition hover:bg-[#255ed1]"
            onIncrement={setAppOpens}
          >
            Add your court to the map
          </AppLink>
        </div>
      </div>
    </section>
  );
}
