"use client";

import { GradientText } from "@/components/ui/GradientText";
import { services, Service, pillarMetadata } from "@/constants/services";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight, BarChart3, Clapperboard, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const pillarIcons: Record<string, any> = {
  Marketing: BarChart3,
  Production: Clapperboard,
  ORM: ShieldCheck,
};

export function Services() {
  const primaryServices = [
    services.find((s) => s.pillar === "Marketing"),
    services.find((s) => s.pillar === "Production"),
    services.find((s) => s.pillar === "ORM"),
  ].filter((s): s is Service => !!s);

  return (
    <section
      id="services"
      className="relative bg-neutral-950 py-16 md:py-32 px-6 md:px-12 font-sans text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-8">
        {/* Cinematic Header */}
        <div className="flex flex-col items-start text-left gap-8 md:gap-10 mb-16 md:mb-32">
          <div className="flex flex-col items-start gap-4 md:gap-6">
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="w-8 md:w-12 h-px bg-blue-500" />
              <span className="text-label text-neutral-500">
                Engineering Capabilities
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <GradientText
                words="Intelligent Systems"
                className="text-heading-xl"
              />
            </motion.div>
          </div>
          <motion.p
            className="text-xl md:text-2xl text-neutral-400 max-w-3xl leading-relaxed font-medium"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            Deploying high-impact modules engineered to handle the complexity of
            global scale. Infrastructure that converts attention to revenue.
          </motion.p>
        </div>

        {/* Cinematic Pillar Flow - No Cards */}
        <div className="relative space-y-0">
          {primaryServices.map((service, idx) => {
            const Icon = pillarIcons[service.pillar] || BarChart3;
            return (
              <PillarModule
                key={service.slug}
                service={service}
                idx={idx}
                Icon={Icon}
              />
            );
          })}
        </div>

        <motion.div
          className="flex justify-center mt-16 md:mt-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link href="/contact" className="group w-full md:w-auto px-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 md:px-12 md:py-6 rounded-full font-bold text-base md:text-xl shadow-2xl shadow-blue-500/20 transition-all w-full md:w-auto whitespace-nowrap"
            >
              Start Your Transformation &rarr;
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function PillarModule({
  service,
  idx,
  Icon,
}: {
  service: Service;
  idx: number;
  Icon: any;
}) {
  const sectionRef = useRef(null);
  const metadata = pillarMetadata[service.pillar];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <motion.div
      ref={sectionRef}
      className="relative min-h-[50vh] md:min-h-[60vh] flex items-center py-20 md:py-32 border-t border-white/5 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Typography Mask */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none">
        <motion.span
          style={{ y }}
          className="text-[30vw] md:text-[25vw] font-black text-white/[0.015] leading-none tracking-tighter uppercase whitespace-nowrap"
        >
          {service.pillar}
        </motion.span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center w-full relative z-10 px-4">
        <div
          className={cn(
            "flex flex-col gap-6 md:gap-8",
            idx % 2 !== 0 && "lg:order-2",
          )}
        >
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="w-8 h-px bg-blue-500" />
            <span className="text-label text-neutral-500">
              System Pillar {idx + 1}
            </span>
          </motion.div>

          <motion.h3
            className="text-heading-xl text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            {service.title}
          </motion.h3>

          <motion.p
            className="text-lg md:text-xl text-neutral-400 font-medium leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            {service.description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <motion.div
              className="px-6 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-label text-blue-400"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              {service.outcome}
            </motion.div>
            <Link
              href={`/services/${metadata.slug}`}
              className="group/link flex items-center gap-4 text-white hover:text-blue-500 transition-colors"
            >
              <span className="text-label">Explore Infrastructure</span>
              <ArrowRight
                size={18}
                className="group-hover/link:translate-x-2 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </div>

        <motion.div
          className={cn("relative group", idx % 2 !== 0 && "lg:order-1")}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div className="aspect-[16/10] bg-neutral-900 border border-white/10 rounded-2xl md:rounded-3xl flex items-center justify-center overflow-hidden relative">
            <Image
              src={metadata.image || "/images/services/marketing-v3.png"}
              alt={service.title}
              fill
              className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent group-hover:opacity-60 transition-opacity duration-700" />

            {/* Subtle Icon Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
              <div className="bg-neutral-950/40 backdrop-blur-md p-6 rounded-full border border-white/10">
                <Icon size={48} className="text-white" />
              </div>
            </div>

            <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 text-[8vw] font-black text-white/[0.1] pointer-events-none uppercase mix-blend-overlay">
              {service.pillar.slice(0, 3)}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
