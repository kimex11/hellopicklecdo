"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Reveal from "./Reveal";
import AppLink from "./AppLink";
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
    const node = ref.current;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
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

  return <span ref={ref}>{value === null ? "0" : value}</span>;
}

export default function LiveReputation() {
  const [visits, setVisits] = useState<number | null>(null);
  const [appOpens, setAppOpens] = useState<number | null>(null);
  const [countries, setCountries] = useState<{ code: string; name: string }[]>(
    []
  );
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
          seedList.push({
            code: location.countryCode,
            name: location.countryName,
          });
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

  return (
    <section id="reputation" className="grid-ink relative py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <span className="sec-label text-[#c8f04b]">Live reputation</span>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-8 max-w-3xl text-[clamp(2rem,5.5vw,3.75rem)] leading-[1.08] font-light tracking-[-0.02em] text-[#f4f5f2]">
            Real numbers, ticking up as you read.
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#f4f5f2]/55 sm:text-base">
            These counters track real visits to this page and real clicks
            through to the app. No sample data, no guesses.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Site visits", live: true, node: <CountUp value={visits} /> },
            { label: "App opens from here", live: true, node: <CountUp value={appOpens} /> },
            { label: "Rotation modes", live: false, node: <span>6</span> },
            { label: "Logins required", live: false, node: <span>0</span> },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <div
                className={`hair-t py-8 sm:pr-8 ${
                  i > 0 ? "lg:border-l lg:pl-8" : ""
                }`}
                style={i > 0 ? { borderLeftColor: "var(--hairline)" } : undefined}
              >
                <p className="sys flex items-center gap-2 text-[0.68rem] text-[#f4f5f2]/45">
                  {s.live && (
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping bg-[#c8f04b] opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 bg-[#c8f04b]" />
                    </span>
                  )}
                  {s.live ? "Live" : "Constant"}
                </p>
                <div className="mt-4 text-5xl font-light tracking-[-0.02em] text-[#f4f5f2]">
                  {s.node}
                </div>
                <p className="sys mt-3 text-[0.68rem] text-[#f4f5f2]/45">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <div className="hair-t mt-0 py-8">
            <p className="sys text-[0.68rem] text-[#f4f5f2]/45">
              Reach
              {visitorCountry
                ? ` / latest visitor detected from ${visitorCountry}`
                : " / detecting where visitors join from"}
            </p>
            {countries.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {countries.map((c) => (
                  <span
                    key={c.code}
                    className="sys flex items-center gap-2 border border-[#f4f5f2]/15 px-3 py-1.5 text-[0.68rem] text-[#f4f5f2]/80"
                  >
                    <span className="bg-[#c8f04b] px-1 text-[#101210]">
                      {c.code}
                    </span>
                    {c.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <AppLink
            className="bracket bracket-primary -ml-3"
            onIncrement={setAppOpens}
          >
            [ Add your court to the map <span aria-hidden>-&gt;</span> ]
          </AppLink>
        </Reveal>
      </div>
    </section>
  );
}
