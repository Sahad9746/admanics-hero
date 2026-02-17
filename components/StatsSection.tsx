"use client";

import {
  motion,
  useSpring,
  useTransform,
  useInView,
  useScroll,
} from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import { useEffect, useRef } from "react";

const stats = [
  {
    value: "50+",
    label: "HAPPY CLIENTS",
  },
  {
    value: "2M+",
    label: "REVENUE GENERATED",
  },
  {
    value: "1M+",
    label: "AD SPEND",
  },
  {
    value: "02",
    label: "YEARS OF EXPERIENCE",
  },
];

function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const match = value.match(/^([^0-9]*)([0-9.,]+)(.*)$/);
  const prefix = match ? match[1] : "";
  const numberPart = match ? parseFloat(match[2].replace(/,/g, "")) : 0;
  const suffix = match ? match[3] : "";
  const decimalPlaces = (match?.[2].split(".")[1] || []).length;

  const spring = useSpring(0, { mass: 1, stiffness: 50, damping: 30 });
  const display = useTransform(spring, (current) => {
    const formatted = current.toLocaleString("en-US", {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    });
    return `${prefix}${formatted}${suffix}`;
  });

  useEffect(() => {
    if (isInView) {
      spring.set(numberPart);
    }
  }, [isInView, spring, numberPart]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}

export function StatsSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      ref={containerRef}
      className="bg-neutral-950 section-padding-lg px-6 md:px-12 font-sans text-white border-t border-white/5 relative overflow-hidden"
    >
      {/* Cinematic Mask */}
      <div className="absolute inset-0 z-0 flex items-start justify-center pt-32 pointer-events-none select-none px-4 text-center">
        <motion.span
          style={{ y }}
          className="text-cinematic whitespace-nowrap will-change-transform"
        >
          NUMBERS
        </motion.span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-8">
        <div className="flex flex-col items-center text-center gap-8 md:gap-10 mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4 md:gap-6"
          >
            <span className="text-label text-blue-500">Market Presence</span>
            <GradientText
              words="Built for Performance"
              className="text-heading-xl"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-neutral-400 max-w-3xl leading-relaxed font-medium"
          >
            Years in the game. Proven systems. Infrastructure that delivers
            results without the manual overhead.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-12 lg:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 1 }}
              className="flex flex-col items-center group"
            >
              <div className="text-heading-hero text-white mb-4 group-hover:text-blue-500 transition-colors">
                <Counter value={stat.value} />
              </div>
              <div className="w-8 h-px bg-white/10 group-hover:w-16 group-hover:bg-blue-500 transition-all mb-4" />
              <p className="text-label text-neutral-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
