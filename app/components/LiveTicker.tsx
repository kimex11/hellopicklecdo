"use client";

import { useEffect, useState } from "react";
import { readCounter } from "../lib/counters";

export default function LiveTicker() {
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    let alive = true;
    const load = async () => {
      const v = await readCounter("site-visits");
      if (alive) setVisits(v);
    };
    load();
    const t = window.setInterval(load, 30000);
    return () => {
      alive = false;
      window.clearInterval(t);
    };
  }, []);

  if (visits === null) return null;

  return (
    <div className="sys pointer-events-none fixed bottom-4 left-4 z-40 hidden items-center gap-2 bg-[#101210]/90 px-3 py-2 text-[0.65rem] text-[#c8f04b] sm:flex">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping bg-[#c8f04b] opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 bg-[#c8f04b]" />
      </span>
      Live visits: {visits.toLocaleString("en-US")}
    </div>
  );
}
