"use client";

import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";

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
        
        {/* Replaced with verified GradientText component */}
        <GradientText 
            words={<>AI-Powered Growth Systems<br className="hidden md:block" /> Built to Scale</>}
            className="text-3xl md:text-4xl lg:text-5xl max-w-4xl"
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
              Admanics is an AI marketing and technology agency that builds automated, scalable growth systems for businesses operating in global markets.
               We help companies replace fragmented marketing and manual processes with structured, performance-driven workflows that connect advertising, websites, CRM, and sales operations into a single system.

By combining performance marketing, ecommerce growth, web development, content, social media, and AI-powered automation using tools like Zoho and Zapier, we ensure every lead is tracked, nurtured, and converted efficiently.

Admanics focuses on building long-term growth infrastructure—not short-term campaigns—so businesses can scale predictably, operate efficiently, and grow without operational chaos.
            </p>
        </motion.div>
      </div>
    </section>
  );
}
