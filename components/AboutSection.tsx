"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import { useRef } from "react";

export function AboutSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} id="about" className="bg-neutral-950 py-16 md:py-48 px-6 md:px-12 font-sans text-white border-t border-white/5 relative overflow-hidden">
      {/* Cinematic Mask */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none">
          <motion.span 
            style={{ y }}
            className="text-[35vw] md:text-[30vw] font-black text-white/[0.015] leading-none tracking-tighter uppercase whitespace-nowrap"
          >
            SYSTEMS
          </motion.span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-8">
        <div className="flex flex-col items-start text-left gap-8 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
             <div className="w-8 md:w-12 h-px bg-blue-500" />
             <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-neutral-500">
               Engineering Philosophy
             </span>
          </motion.div>
          
          <GradientText 
              words="More than an agency — an automated growth infrastructure."
              className="text-4xl md:text-8xl font-bold leading-[1.1] tracking-tighter max-w-6xl"
          />

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-8 md:mt-12"
          >
              <p className="text-lg md:text-2xl text-neutral-400 leading-relaxed font-medium">
                Admanics is an AI-driven marketing and technology agency built to eliminate manual complexity and drive predictable growth. 
                We replace fragmented workflows and manual effort with intelligent, automated systems that connect your entire operation.
              </p>
              <p className="text-lg md:text-2xl text-neutral-400 leading-relaxed font-medium">
                By combining deep expertise in global markets with AI-powered tools, we build long-term growth infrastructure—not short-term campaigns—so your business can scale predictably and grow without operational chaos.
              </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
