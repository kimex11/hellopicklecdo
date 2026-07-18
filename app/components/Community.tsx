import Image from "next/image";
import Reveal from "./Reveal";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1659318006095-4d44845f3a1b?auto=format&fit=crop&w=1200&q=80",
    alt: "Players rallying during a doubles pickleball match on an outdoor court",
  },
  {
    src: "https://images.unsplash.com/photo-1687102618656-907b757ad5d9?auto=format&fit=crop&w=1200&q=80",
    alt: "A group of pickleball players gathering courtside between games",
  },
  {
    src: "https://images.unsplash.com/photo-1580763850522-504d40a05c50?auto=format&fit=crop&w=1200&q=80",
    alt: "A pickleball paddle and ball resting on the court line",
  },
];

export default function Community() {
  return (
    <section className="bg-[#05070f] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold tracking-[0.3em] text-[#5fa8ff] uppercase">
            Real courts, real players
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Built for the open play community.
          </h2>
          <p className="mt-4 text-white/55">
            Pickle CDO exists because organizers were running great sessions
            on paper sign-up sheets and shouted scores. It is built around how
            open play actually happens on the court.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {photos.map((photo, i) => (
            <Reveal key={photo.src} delay={i * 80}>
              <div className="shot-card relative aspect-[4/5] w-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
