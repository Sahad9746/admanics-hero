"use client";

import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";

const stats = [
  {
    value: "10+",
    label: "Happy Clients",
  },
  {
    value: "1m+",
    label: "Revenue Generated",
  },
  {
    value: "500K+",
    label: "Ad Spend",
  },
  {
    value: "2",
    label: "Years of Experience",
  },
];

export function StatsSection() {
  return (
    <section className="bg-neutral-950 py-24 px-4 font-sans text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start gap-8">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-widest uppercase text-neutral-500 mb-4 block"
            >
              Numbers
            </motion.span>
            
            <div className="mb-6">
                <GradientText 
                words="Solving Problems"
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-neutral-400 max-w-md leading-relaxed"
            >
              Years in the game. Proven systems. Results that speak.
            </motion.p>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-16">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="flex flex-col gap-2"
              >
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-neutral-400 text-sm md:text-base font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
