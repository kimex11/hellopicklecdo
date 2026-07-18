"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import AppLink from "./AppLink";
import { IconEye, IconCursorClick, IconGlobe } from "./Icons";
import { incrementCounter, readCounter, detectVisitorLocation } from "../lib/counters";

const SEED_COUNTRIES: { code: string; name: string }[] = [
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

function formatCount(n: number | null): string {
  if (n === null) return "...";
  return n.toLocaleString("en-US");
}

export default function LiveStats() {
  const [visits, setVisits] = useState<number | null>(null);
  const [appOpens, setAppOpens] = useState<number | null>(null);
  const [countries, setCountries] = useState<{ code: string; name: string; count: number }[]>([]);
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
        const alreadySeeded = seedList.some((c) => c.code === location.countryCode);
        if (!alreadySeeded) {
          seedList.push({ code: location.countryCode, name: location.countryName });
        }
        const key = `country-${location.countryCode.toLowerCase()}`;
        await incrementCounter(key);
      }

      const results = await Promise.all(
        seedList.map(async (c) => {
          const count = await readCounter(`country-${c.code.toLowerCase()}`);
          return { ...c, count: count ?? 0 };
        })
      );

      setCountries(results.filter((c) => c.count > 0).sort((a, b) => b.count - a.count));
    })();
  }, []);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold tracking-widest text-[#2f6fed] uppercase">
            Live reputation
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0b1730] sm:text-4xl">
            Real numbers, updating as you read this.
          </h2>
          <p className="mt-4 text-slate-600">
            These counters track real visits to this page and real clicks
            through to the app. No sample data, no guesses.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Reveal>
            <div className="flex h-full items-center gap-5 rounded-3xl border border-slate-100 bg-slate-50/60 p-8">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white text-[#2f6fed] shadow-sm">
                <IconEye className="h-7 w-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-xs font-semibold tracking-wide text-emerald-600 uppercase">
                    Live
                  </span>
                </div>
                <div className="mt-1 text-3xl font-extrabold text-[#0b1730]">
                  {formatCount(visits)}
                </div>
                <div className="text-sm text-slate-500">Site visits</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex h-full items-center gap-5 rounded-3xl border border-slate-100 bg-slate-50/60 p-8">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white text-[#2f6fed] shadow-sm">
                <IconCursorClick className="h-7 w-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-xs font-semibold tracking-wide text-emerald-600 uppercase">
                    Live
                  </span>
                </div>
                <div className="mt-1 text-3xl font-extrabold text-[#0b1730]">
                  {formatCount(appOpens)}
                </div>
                <div className="text-sm text-slate-500">App opens from this page</div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="mt-6 rounded-3xl border border-slate-100 bg-slate-50/60 p-8">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-[#2f6fed] shadow-sm">
                <IconGlobe className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-[#0b1730]">
                  Players checking in from around the world
                </h3>
                <p className="text-sm text-slate-500">
                  {visitorCountry
                    ? `Latest visitor detected from ${visitorCountry}.`
                    : "Detecting where today's visitors are joining from."}
                </p>
              </div>
            </div>

            {countries.length > 0 ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {countries.map((c) => (
                  <span
                    key={c.code}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#0b1730]"
                  >
                    <span className="grid h-5 w-8 place-items-center rounded bg-[#0b1730] text-[10px] font-bold tracking-wider text-white">
                      {c.code}
                    </span>
                    {c.name}
                  </span>
                ))}
              </div>
            ) : (
              <p className="mt-6 text-sm text-slate-400">
                This page has not logged a visit from a new country yet today.
              </p>
            )}
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-8 text-center">
          <AppLink
            className="inline-block rounded-full bg-[#2f6fed] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:bg-[#255ed1]"
            onIncrement={setAppOpens}
          >
            Join them, open the app
          </AppLink>
        </Reveal>
      </div>
    </section>
  );
}
