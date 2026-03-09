"use client";

import Image from "next/image";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const brands = [
  {
    name: "The Reborn Society",
    logo: (
      <Image
        src="/images/clients_logo/2.jpg"
        alt="The Reborn Society"
        width={200}
        height={100}
        loading="lazy"
        sizes="(max-width: 768px) 100px, 200px"
        className="h-20 w-auto object-contain"
      />
    ),
  },
  {
    name: "Vyntage Horology",
    logo: (
      <Image
        src="/images/clients_logo/4.jpg"
        alt="Vyntage Horology"
        width={200}
        height={100}
        loading="lazy"
        sizes="(max-width: 768px) 100px, 200px"
        className="h-20 w-auto object-contain"
      />
    ),
  },
  {
    name: "Peter England",
    logo: (
      <Image
        src="/images/clients_logo/5.jpg"
        alt="Peter England"
        width={200}
        height={100}
        loading="lazy"
        sizes="(max-width: 768px) 100px, 200px"
        className="h-20 w-auto object-contain"
      />
    ),
  },

  {
    name: "Concord",
    logo: (
      <Image
        src="/images/clients_logo/7.jpg"
        alt="Concord"
        width={200}
        height={100}
        loading="lazy"
        sizes="(max-width: 768px) 100px, 200px"
        className="h-20 w-auto object-contain"
      />
    ),
  },
  {
    name: "Adidas",
    logo: (
      <Image
        src="/images/clients_logo/9.jpg"
        alt="Adidas"
        width={200}
        height={100}
        loading="lazy"
        sizes="(max-width: 768px) 100px, 200px"
        className="h-20 w-auto object-contain"
      />
    ),
  },
  {
    name: "BCBG",
    logo: (
      <Image
        src="/images/clients_logo/10.jpg"
        alt="BCBG"
        width={200}
        height={100}
        loading="lazy"
        sizes="(max-width: 768px) 100px, 200px"
        className="h-20 w-auto object-contain"
      />
    ),
  },
  {
    name: "Client 11",
    logo: (
      <Image
        src="/images/clients_logo/11.jpg"
        alt="Client 11"
        width={200}
        height={100}
        loading="lazy"
        sizes="(max-width: 768px) 100px, 200px"
        className="h-20 w-auto object-contain"
      />
    ),
  },
  {
    name: "Client 12",
    logo: (
      <Image
        src="/images/clients_logo/12.jpg"
        alt="Client 12"
        width={200}
        height={100}
        loading="lazy"
        sizes="(max-width: 768px) 100px, 200px"
        className="h-20 w-auto object-contain"
      />
    ),
  },
];

export function BrandSlider() {
  return (
    <div className="py-12 md:py-16 flex flex-col antialiased items-center justify-center relative overflow-hidden bg-neutral-950">
      <h3 className="text-label text-neutral-500 mb-8 text-center">
        Trusted by industry leaders
      </h3>
      <InfiniteMovingCards items={brands} direction="left" speed="normal" />
    </div>
  );
}
