"use client";

import {
  motion,
  useInView,
  useScroll,
  useTransform,
  animate,
} from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import { useEffect, useRef } from "react";
import { cn } from "@/components/ui/Button"; // Assuming this utility exists

const stats = [
  {
    prefix: "",
    target: 25,
    suffix: "+",
    label: "INDIAN CLIENTS",
    description: "Businesses scaled using our automated systems.",
  },
  {
    prefix: "$",
    target: 1.2,
    suffix: "M+",
    label: "USD GENERATED",
    description: "New revenue generated for our partners.",
  },
  {
    prefix: "",
    target: 300,
    suffix: "%",
    label: "ROAS INCREASE",
    description: "Average return on ad spend improvement.",
  },
  {
    prefix: "0",
    target: 2,
    suffix: "",
    label: "YEARS EXPERTISE",
    description: "Proven performance in automated growth infrastructure.",
  },
];

function Counter({
  target,
  prefix = "",
  suffix = "",
  className,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, target, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (value) => {
          if (ref.current) {
            // Using textContent update is safe and guarantees animation across all React versions
            let displayValue = "";
            if (value % 1 !== 0) {
                 displayValue = value.toFixed(1);
            } else {
                 displayValue = Math.floor(value).toString();
            }
            ref.current.textContent = `${prefix}${displayValue}${suffix}`;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, target, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
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
      className="bg-neutral-950 min-h-[80vh] flex flex-col justify-center py-24 px-6 md:px-12 font-sans text-white border-t border-white/5 relative overflow-hidden"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 z-0 bg-[url('https://admanics.com/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5 pointer-events-none" />

      {/* Cinematic Mask */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-0 flex items-center justify-center pointer-events-none select-none px-4 text-center overflow-hidden">
        <motion.span
          style={{ y }}
          className="text-[40vw] font-black text-white/[0.02] leading-none tracking-tighter uppercase whitespace-nowrap will-change-transform mix-blend-screen"
        >
          IMPACT
        </motion.span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-8 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4 max-w-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-blue-500" />
              <span className="text-label text-blue-500 tracking-[0.2em]">BY THE NUMBERS</span>
            </div>
            <GradientText
              words="Automated AI Lead Generation"
              className="text-heading-xl md:text-5xl lg:text-7xl leading-tight"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:max-w-sm"
          >
            <p className="text-lg text-neutral-400 font-medium leading-relaxed border-l border-white/10 pl-6">
               Years in the game. Proven systems. Intelligent AI marketing infrastructure that delivers results without the manual overhead.
            </p>
          </motion.div>
        </div>

        {/* Minimalist Asymmetric Layout */}
        <div className="flex flex-col w-full border-t border-white/10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.8, ease: "easeOut" }}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between py-10 md:py-16 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500 px-4 -mx-4 md:px-8 md:-mx-8"
            >
              <div className="flex flex-col md:w-1/3 mb-4 md:mb-0">
                 <h4 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {stat.label}
                 </h4>
                 <p className="text-sm md:text-base text-neutral-500 max-w-xs">
                   {stat.description}
                 </p>
              </div>

              <div className="text-6xl md:text-8xl lg:text-[8rem] font-black tracking-tighter text-transparent bg-clip-text bg-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-500">
                <Counter
                  target={stat.target}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
