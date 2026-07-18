import Reveal from "./Reveal";

export default function Overview() {
  return (
    <section id="overview" className="grid-ink relative py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <span className="sec-label text-[#c8f04b]">Overview</span>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-10 max-w-4xl text-[clamp(1.4rem,3.4vw,2.4rem)] leading-[1.3] font-light tracking-[-0.01em] text-[#f4f5f2]">
            Every open play night, someone runs the courts from a whiteboard, a
            group chat, and memory. Players wait too long, teams come out
            lopsided, and the same argument happens at every changeover.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-10 max-w-4xl text-[clamp(1.4rem,3.4vw,2.4rem)] leading-[1.3] font-light tracking-[-0.01em] text-[#f4f5f2]/55">
            Pickle CDO replaces all of it with one screen anyone can run. Fair
            queues by default, scores tracked where the games happen, and a
            leaderboard that settles itself.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
