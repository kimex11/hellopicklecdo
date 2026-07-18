import MagneticButton from "./MagneticButton";

const APP_URL = "https://picklecdo.vercel.app";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#05070f] py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(47,111,237,0.28), rgba(198,242,74,0.06) 45%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "repeating-conic-gradient(from 0deg at 50% 50%, rgba(255,255,255,0.04) 0deg 0.12deg, transparent 0.12deg 14deg)",
          maskImage: "radial-gradient(circle at center, black 5%, transparent 55%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 5%, transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-5xl font-black tracking-tight text-white sm:text-6xl">
          <span className="text-metal">Your next session</span>
          <br />
          <span className="text-ghost">deserves a real queue.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-white/55">
          Set it up courtside in under a minute. No login, no ads, no cost.
        </p>
        <div className="mt-10 flex justify-center">
          <MagneticButton className="inline-block rounded-full bg-[#2f6fed] px-10 py-5 text-base font-semibold text-white shadow-[0_20px_60px_-12px_rgba(47,111,237,0.8)] transition hover:bg-[#255ed1]">
            Open Pickle CDO, free
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05070f] py-10 text-white/40">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-[#2f6fed] text-[10px] font-black text-white">
            P
          </span>
          <span className="font-semibold text-white/70">Pickle CDO</span>
          <span className="text-white/30">Open Play Manager</span>
        </div>
        <p className="text-white/35">
          Free forever · No login ·{" "}
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 underline hover:text-white"
          >
            Open the app
          </a>
        </p>
        <p className="text-white/35">Designed and developed by: kiMex</p>
      </div>
    </footer>
  );
}
