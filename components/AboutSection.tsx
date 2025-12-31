"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export function AboutSection() {
  return (
    <section id="about" className="bg-neutral-950 py-24 px-4 font-sans text-white">
      <div className="max-w-7xl mx-auto flex flex-col items-end text-right gap-8 px-4 md:px-8">
        <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-neutral-500 mb-4 block"
        >
          About
        </motion.span>
        
        {/* Main Headline with TextGenerateEffect for consistency */}
        <TextGenerateEffect 
            words="At Admanics, performance isn't a buzzword — it's the baseline."
            className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-4xl leading-tight uppercase"
        />

        {/* Description Text */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl"
        >
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
                We build paid media strategies, automation systems, and content engines that don&apos;t just look good — they convert. Every move we make is designed to scale, sell, and support real business growth. From the first click to the final conversion, we help businesses show up and glow up — brilliantly, consistently, and at scale.
            </p>
        </motion.div>
      </div>
    </section>
  );
}
