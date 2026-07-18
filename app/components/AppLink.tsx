"use client";

import { incrementCounter } from "../lib/counters";

const APP_URL = "https://picklecdo.vercel.app";

export default function AppLink({
  className,
  children,
  onIncrement,
}: {
  className?: string;
  children: React.ReactNode;
  onIncrement?: (count: number) => void;
}) {
  return (
    <a
      href={APP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className ?? ""} transition-[scale] duration-150 active:scale-[0.96]`}
      onClick={() => {
        incrementCounter("app-opens").then((count) => {
          if (count !== null) onIncrement?.(count);
        });
      }}
    >
      {children}
    </a>
  );
}
