"use client";

import { motion } from "framer-motion";
import { Vortex } from "@/components/ui/vortex";
import { GradientText } from "@/components/ui/GradientText";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-neutral-950 flex flex-col justify-center items-center font-sans">
      <Vortex
        backgroundColor="transparent"
        rangeY={200}
        particleCount={200}
        baseHue={220}
        className="flex items-center flex-col justify-center px-4 md:px-10 py-10 w-full min-h-screen"
      >
        {/* Main Content */}
        <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-12 text-center pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <span className="inline-block text-label text-blue-500 mb-8 md:mb-12">
              Admanics / Intelligent Infrastructure
            </span>

            <h1 className="text-heading-hero text-white mb-10 md:mb-16 flex flex-col items-center justify-center font-sans px-2 md:px-4">
              <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-8 mb-4 md:mb-6">
                <span className="inline-flex items-center justify-center px-6 py-2 md:px-10 md:py-4 rounded-2xl md:rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl w-auto max-w-full overflow-hidden">
                  <LayoutTextFlip
                    words={["Automated", "Intelligent", "Scalable"]}
                    text=""
                    className="text-heading-hero"
                  />
                </span>
                <span className="text-white text-heading-hero">Growth</span>
              </div>
              <GradientText
                words="Systems that Scale"
                as="span"
                className="block px-2 text-heading-hero text-center"
              />
            </h1>

            <p className="text-body-xl text-neutral-400 max-w-3xl mx-auto mb-16 md:mb-20 px-4">
              Building the architecture your business needs to grow predictably.
              Replace manual complexity with connected intelligence.
            </p>
          </motion.div>
        </div>
      </Vortex>

      {/* Scroll Trigger Ambient */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <span className="text-label">Explore System</span>
        <div className="w-px h-8 md:h-12 bg-gradient-to-b from-blue-500 Porto-transparent" />
      </div>
    </div>
  );
}
