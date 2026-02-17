"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import { StatsSection } from "@/components/StatsSection";
import { BrandSlider } from "@/components/BrandSlider";
import { useRef } from "react";
import { CTA } from "@/components/CTA";

export function AboutPageClient({
  teamSection,
}: {
  teamSection: React.ReactNode;
}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <main
      ref={containerRef}
      className="bg-neutral-950 min-h-screen w-full font-sans selection:bg-neutral-800 selection:text-white pb-24"
    >
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-6 md:px-12 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none select-none">
          <div className="w-[80vw] h-[80vw] bg-blue-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <span className="text-label text-blue-500">About Admanics</span>
            <h1 className="text-heading-hero text-white">
              WHO KNOWS THE <br />
              <GradientText
                words="WEB BETTER?"
                className="text-heading-hero"
                as="span"
              />
            </h1>
            <p className="text-body-xl text-neutral-400 max-w-3xl mt-8">
              Enabling businesses to get a competitive edge in the digital era
              through intelligent automation and strategic infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- PROPOSITION SECTION --- */}
      <section className="py-24 px-6 md:px-12 bg-neutral-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left: Heading */}
          <div className="lg:col-span-4 flex flex-col justify-start pt-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col mb-2"
            >
              <span className="text-heading-md uppercase text-white">OUR</span>
              <GradientText
                words="PROPOSITION"
                className="text-heading-md uppercase"
              />
            </motion.div>
            <div className="w-16 h-1 bg-blue-500 mt-6" />
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-body-lg text-neutral-300 space-y-8"
            >
              <p>
                At Admanics, we don't just build websites; we build{" "}
                <strong className="text-white font-medium">
                  digital ecosystems
                </strong>
                . In a world saturated with noise, your business needs a signal
                that cuts through. We combine data-driven insights with
                cutting-edge design to create platforms that are not only
                visually stunning but operationally efficient.
              </p>
              <p>
                Our proposition is simple:{" "}
                <strong className="text-white font-medium">
                  Growth through Intelligence.
                </strong>
                We replace manual, error-prone processes with automated systems
                that scale with you. From the moment a lead lands on your page
                to the final conversion, every step is optimized for
                performance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION (Reused) --- */}
      <StatsSection />

      {/* --- MISSION & VISION SECTION --- */}
      <section className="py-24 px-6 md:px-12 bg-neutral-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <div className="lg:col-span-4 order-1 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <span className="text-heading-md uppercase text-white">
                  OUR
                </span>
                <GradientText
                  words="MISSION"
                  className="text-heading-md uppercase"
                />
              </motion.div>
            </div>
            <div className="lg:col-span-8 order-2 lg:order-2">
              <p className="text-body-lg text-neutral-300">
                To empower bold businesses by democratizing access to
                enterprise-grade growth infrastructure. We strive to make
                sophisticated marketing automation accessible, understandable,
                and deeply effective for companies ready to scale.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <div className="lg:col-span-4 order-1 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <span className="text-heading-md uppercase text-white">
                  OUR
                </span>
                <GradientText
                  words="VISION"
                  className="text-heading-md uppercase"
                />
              </motion.div>
            </div>
            <div className="lg:col-span-8 order-2 lg:order-2">
              <p className="text-body-lg text-neutral-300">
                A world where business growth is predictable, not accidental. We
                envision a future where technology handles the complexity of
                operations, allowing human creativity and strategy to flourish
                without boundaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- BRAND GRID SECTION --- */}
      <BrandSlider />

      <section className="px-6 md:px-12 py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <CTA
            title="Ready to join the <br class='hidden md:block' /> future of growth?"
            description="Partner with the team that's redefining digital infrastructure."
            buttonText="Work With Us"
            buttonLink="/contact"
          />
        </div>
      </section>

      {/* --- TEAM SECTION (Passed as specific prop or children) --- */}
      {teamSection}
    </main>
  );
}
