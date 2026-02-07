"use client";

import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";

export function AboutSection() {
  return (
    <section id="about" className="bg-neutral-950 py-32 px-4 font-sans text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-start text-left gap-8 px-4 md:px-8">
        <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-neutral-500"
        >
          About
        </motion.span>
        
        <GradientText 
            words="More than an agency — an automated growth system."
            className="text-4xl md:text-6xl max-w-5xl"
        />

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl"
        >
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed mb-8">
              Admanics is an AI-driven marketing and technology agency built to eliminate manual complexity and drive predictable growth. 
              We replace fragmented workflows and manual effort with intelligent, automated systems that connect your entire operation—from performance marketing and content architecture to CRM and sales automation.
            </p>
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
              By combining deep expertise in global markets with AI-powered tools, we build long-term growth infrastructure—not short-term campaigns—so your business can scale predictably, operate efficiently, and grow without operational chaos.
            </p>
        </motion.div>
      </div>
    </section>
  );
}
