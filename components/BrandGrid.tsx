"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const brands = [
  {
    name: "Mydesignation",
    logo: "/images/clients_logo/5.jpg", // Verified good (33KB)
  },
  {
    name: "Cotoman",
    logo: "/images/clients_logo/6.jpg", // Verified good (23KB)
  },
  {
    name: "Homfert",
    logo: "/images/clients_logo/9.jpg", // Verified good (51KB)
  },
  {
    name: "Haindex",
    logo: "/images/clients_logo/10.jpg", // Verified good (42KB)
  },
  {
    name: "Wood Oak",
    logo: "/images/clients_logo/7.jpg", // Large file (168KB), assuming valid
  },
  {
    name: "Partner Brand",
    logo: "/images/brand_placeholder.png",
  },
  {
    name: "Future Tech",
    logo: "/images/brand_placeholder.png",
  },
  {
    name: "Global Corp",
    logo: "/images/brand_placeholder.png",
  },
];

export function BrandGrid() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={containerRef} className="bg-neutral-950 py-16 md:py-32 px-6 md:px-12 font-sans text-white border-t border-white/5 relative overflow-hidden">
      {/* Cinematic Mask */}
      <div className="absolute inset-0 z-0 flex items-start justify-center pt-24 pointer-events-none select-none px-4 text-center">
          <motion.span 
            style={{ y }}
            className="text-[40vw] md:text-[35vw] font-black text-white/[0.01] leading-none tracking-tighter uppercase whitespace-nowrap will-change-transform"
          >
            BRANDS
          </motion.span>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4 block">
            Trusted By
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Industry Leaders
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {brands.map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-center justify-center p-8 bg-neutral-900/60 backdrop-blur-sm rounded-3xl border border-white/5 hover:border-white/20 hover:bg-neutral-900/80 transition-all duration-300 group"
            >
              <div className="relative h-12 w-32 md:h-16 md:w-40 filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
            
            {/* CTA Card as the last item if needed, or just filler */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: brands.length * 0.05 }}
              className="flex items-center justify-center p-8 bg-blue-600/20 backdrop-blur-sm rounded-3xl border border-blue-500/30 hover:bg-blue-600/30 transition-all duration-300 group cursor-pointer"
            >
                 <span className="text-blue-400 font-bold text-lg group-hover:text-blue-300">Join Them &rarr;</span>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
