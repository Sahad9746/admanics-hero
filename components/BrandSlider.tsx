"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const brands = [
  {
    name: "Vortex",
    logo: <span className="text-xl md:text-2xl font-bold font-sans tracking-tight text-white">vortex</span>,
  },
  {
    name: "Soma Pilates",
    logo: <span className="text-xl md:text-2xl font-serif italic text-white">Soma Pilates</span>,
  },
  {
    name: "Club Sudo",
    logo: <span className="text-xl md:text-2xl font-mono uppercase text-white tracking-widest">CLUB SŪDŌ</span>,
  },
  {
    name: "ACE Performance",
    logo: <span className="text-xl md:text-2xl font-black italic text-white">ACE</span>,
  },
  {
    name: "Club Well",
    logo: <span className="text-xl md:text-2xl font-serif text-white">club well</span>,
  },
  {
    name: "Function Studios",
    logo: <span className="text-xl md:text-2xl font-sans font-light text-white">functiön</span>,
  },
  {
    name: "Tone Pilates",
    logo: <span className="text-xl md:text-2xl font-thin tracking-[0.2em] text-white">TONE</span>,
  },
];

export function BrandSlider() {
  return (
    <div className="py-8 flex flex-col antialiased items-center justify-center relative overflow-hidden bg-neutral-950">
        <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-neutral-600 mb-8 text-center">Trusted by industry leaders</h3>
        <InfiniteMovingCards
            items={brands}
            direction="left"
            speed="normal"
        />
    </div>
  );
}
