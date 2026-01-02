"use client";

import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";

const stats = [
  {
    value: "300%",
    label: "Average client growth rate",
  },
  {
    value: "50+",
    label: "Automated workflows built",
  },
  {
    value: "15",
    label: "Global markets served",
  },
];

export function Results() {
  return (
    <section id="growth" className="bg-neutral-950 py-24 px-4 font-sans text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header - Left Aligned */}
        <div className="max-w-3xl mb-16 text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-neutral-500 mb-4 block"
          >
            Results
          </motion.span>
          <GradientText
            words="Growth that speaks for itself"
            className="text-3xl md:text-4xl lg:text-5xl mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }} 
            className="text-lg text-neutral-400"
          >
            Measurable outcomes from automated systems
          </motion.p>
        </div>

        {/* Content - Image Left, Stats Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative rounded-2xl overflow-hidden h-[500px] w-full"
            >
                <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop" 
                    alt="Team working on results" 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
            </motion.div>

            {/* Stats */}
            <div className="flex flex-col justify-center space-y-12">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2, duration: 0.6 }}
                        className="flex flex-col"
                    >
                        <span className="text-6xl md:text-7xl font-bold text-white mb-2 tracking-tighter">
                            {stat.value}
                        </span>
                        <span className="text-xl md:text-2xl font-medium text-neutral-400">
                            {stat.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}
