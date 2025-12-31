"use client"

import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { Vortex } from "@/components/ui/vortex"
import { LayoutTextFlip } from "@/components/ui/layout-text-flip"

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-neutral-950 flex flex-col justify-center items-center font-sans py-20">
      <Vortex
        backgroundColor="transparent"
        rangeY={200}
        particleCount={500}
        baseHue={200}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
      
      {/* Main Content */}
      <div className="relative z-30 max-w-4xl mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6 flex flex-col items-center justify-center font-sans"
        >
          <span className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-2 md:gap-4">
            <span className="inline-flex items-center justify-center px-4 py-1 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm">
              <LayoutTextFlip words={["Automated", "Intelligent", "Scalable"]} text="" />
            </span>
            <span className="">Growth Systems that Scale</span>
          </span>
          {/* <span className="block md:inline ml-0 md:ml-4">Systems that Scale</span> */}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-400 mx-auto mb-10 leading-relaxed"
        >
          Admanics builds the infrastructure your business needs to grow predictably. 
          We connect your marketing, sales, and operations into one intelligent system that 
          eliminates manual work and delivers measurable results at scale.
        </motion.p>
      </div>
      </Vortex>
    </div>
  )
}
