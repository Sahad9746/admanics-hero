"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

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
        
        <TextGenerateEffect 
            words="Replace fragmented processes with connected automation"
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-4xl leading-tight"
        />

        <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl"
        >
            We eliminate manual bottlenecks by connecting your entire tech stack—from CRM to ad platforms—into a unified engine that runs while you sleep.
        </motion.p>

        
      </div>
    </section>
  );
}
