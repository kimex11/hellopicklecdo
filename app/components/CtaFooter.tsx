import Reveal from "./Reveal";
import AppLink from "./AppLink";

const APP_URL = "https://picklecdo.vercel.app";

export function FinalCta() {
  return (
    <section className="grid-ink relative py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <h2 className="max-w-5xl text-[clamp(2.5rem,7.5vw,5.5rem)] leading-[1.04] font-light tracking-[-0.03em]">
            <span className="text-[#f4f5f2]">Your next session</span>
            <br />
            <span className="text-[#8f938c]">deserves a real queue.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-[#f4f5f2]/55 sm:text-base">
            Set it up courtside in under a minute. No login, no ads, no cost.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-10">
            <AppLink className="bracket bracket-primary -ml-3">
              [ Open Pickle CDO for free <span aria-hidden>-&gt;</span> ]
            </AppLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="hair-t py-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <div className="flex items-center gap-3">
          <span aria-hidden className="block h-2 w-2 bg-[#c8f04b]" />
          <span className="text-sm font-medium text-[#f4f5f2]">
            Pickle <span className="font-light text-[#8f938c]">CDO</span>
          </span>
          <span className="sys text-[0.65rem] text-[#f4f5f2]/35">
            Open play manager
          </span>
        </div>
        <p className="sys text-[0.65rem] text-[#f4f5f2]/35">
          Free forever / no login /{" "}
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c8f04b] hover:underline"
          >
            Open the app
          </a>
        </p>
        <p className="sys text-[0.65rem] text-[#f4f5f2]/35">
          Designed and developed by: kiMex
        </p>
      </div>
    </footer>
  );
}
