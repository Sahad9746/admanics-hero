"use client";

import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";

export function Solutions() {
  return (
    <section id="solutions" className="bg-neutral-950 py-24 px-4 font-sans text-white">
      <div className="max-w-7xl mx-auto flex flex-col items-start gap-8 px-4 md:px-8">
        <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-neutral-500 mb-4 block"
        >
          Solutions
        </motion.span>
        
        {/* Replaced with verified GradientText component */}
        <GradientText 
            words="Admanics isn’t just an agency — it’s an automated growth system."
            className="text-3xl md:text-4xl lg:text-5xl max-w-4xl"
        />

        <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl"
        >
            Admanics is an AI-driven marketing and technology agency built to eliminate manual effort from growth.
We don’t just run campaigns — we design automated workflows that connect traffic, leads, sales, and follow-ups using performance marketing, CRM, and AI-powered automation.

Every process we build is engineered to scale without chaos.
        </motion.p>

        
      </div>
    </section>
  );
}
