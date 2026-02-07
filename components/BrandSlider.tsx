"use client";

import Image from "next/image";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const brands = [
  {
    name: "Client 2",
    logo: <Image src="/images/clients_logo/2.jpg" alt="Client 2" width={200} height={100} className="h-20 w-auto object-contain" />,
  },
  {
    name: "Client 3",
    logo: <Image src="/images/clients_logo/3.jpg" alt="Client 3" width={200} height={100} className="h-20 w-auto object-contain" />,
  },
  {
    name: "Client 4",
    logo: <Image src="/images/clients_logo/4.jpg" alt="Client 4" width={200} height={100} className="h-20 w-auto object-contain" />,
  },
  {
    name: "Client 5",
    logo: <Image src="/images/clients_logo/5.jpg" alt="Client 5" width={200} height={100} className="h-20 w-auto object-contain" />,
  },
  {
    name: "Client 6",
    logo: <Image src="/images/clients_logo/6.jpg" alt="Client 6" width={200} height={100} className="h-20 w-auto object-contain" />,
  },
  {
    name: "Client 7",
    logo: <Image src="/images/clients_logo/7.jpg" alt="Client 7" width={200} height={100} className="h-20 w-auto object-contain" />,
  },
  {
    name: "Client 9",
    logo: <Image src="/images/clients_logo/9.jpg" alt="Client 9" width={200} height={100} className="h-20 w-auto object-contain" />,
  },
  {
    name: "Client 10",
    logo: <Image src="/images/clients_logo/10.jpg" alt="Client 10" width={200} height={100} className="h-20 w-auto object-contain" />,
  },
  {
    name: "Client 11",
    logo: <Image src="/images/clients_logo/11.jpg" alt="Client 11" width={200} height={100} className="h-20 w-auto object-contain" />,
  },
  {
    name: "Client 12",
    logo: <Image src="/images/clients_logo/12.jpg" alt="Client 12" width={200} height={100} className="h-20 w-auto object-contain" />,
  },
];

export function BrandSlider() {
  return (
    <div className="py-8 flex flex-col antialiased items-center justify-center relative overflow-hidden bg-neutral-950">
        <h3 className="text-sm font-bold tracking-widest uppercase text-neutral-500 mb-8 text-center">Trusted by industry leaders</h3>
        <InfiniteMovingCards
            items={brands}
            direction="left"
            speed="normal"
        />
    </div>
  );
}
