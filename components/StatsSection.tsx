"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import { useEffect, useRef } from "react";

const stats = [
  {
    value: "50+",
    label: "Happy Clients",
  },
  {
    value: "1m+",
    label: "Revenue Generated",
  },
  {
    value: "1m+",
    label: "Ad Spend",
  },
  {
    value: "2",
    label: "Years of Experience",
  },
];

function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Parse value
  const match = value.match(/^([^0-9]*)([0-9.,]+)(.*)$/);
  const prefix = match ? match[1] : "";
  const numberPart = match ? parseFloat(match[2].replace(/,/g, "")) : 0;
  const suffix = match ? match[3] : "";
  const decimalPlaces = (match?.[2].split('.')[1] || []).length;

  // Smoother spring configuration
  const spring = useSpring(0, { mass: 1, stiffness: 50, damping: 30 });
  const display = useTransform(spring, (current) => {
      // Format number with commas and correct decimal places
      const formatted = current.toLocaleString('en-US', { 
          minimumFractionDigits: decimalPlaces,
          maximumFractionDigits: decimalPlaces 
      });
      return `${prefix}${formatted}${suffix}`;
  });

  useEffect(() => {
    if (isInView) {
      spring.set(numberPart);
    }
  }, [isInView, spring, numberPart]);

  return <motion.span ref={ref} className={className}>{display}</motion.span>;
}

export function StatsSection() {
  return (
    <section className="bg-neutral-950 py-32 px-4 font-sans text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-end text-right gap-6 mb-24">
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
              className="text-4xl md:text-6xl font-bold leading-tight"
              />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed"
          >
            Years in the game. Proven systems. Results that speak.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 lg:gap-24 items-center">
          {/* Right Content - Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 mt-12">
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
                  <Counter value={stat.value} />
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
