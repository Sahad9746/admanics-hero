"use client";

import { useRef } from "react";
import { services, Service, pillarMetadata } from "@/constants/services";
import { motion, useScroll, useTransform } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Globe, Layers, Cpu } from "lucide-react";
import { CTA } from "@/components/CTA";

import { cn } from "@/lib/utils";

const pillarDetails = {
  Marketing: {
    title: "Digital Marketing & Growth",
    tagline: "ROI-Focused Scaling Systems",
    description:
      "Connect with your audience through data-driven strategies that turn attention into revenue.",
    bgClass: "from-blue-600/20 to neutral-950",
    accentColor: "text-blue-400",
    icon: Globe,
    imageUrl: "/images/services/marketing.png",
  },
  Production: {
    title: "Production & Media",
    tagline: "High-Impact Visual Infrastructure",
    description:
      "Creative storytelling and cinematic production engineered to captivate and convert.",
    bgClass: "from-purple-600/20 to neutral-950",
    accentColor: "text-purple-400",
    icon: Layers,
    imageUrl: "/images/services/product.png",
  },
  ORM: {
    title: "ORM & Reputation",
    tagline: "Protecting Digital Authority",
    description:
      "AI-driven monitoring and strategic communication to shield your brand integrity.",
    bgClass: "from-cyan-600/20 to neutral-950",
    accentColor: "text-cyan-400",
    icon: Cpu,
    imageUrl: "/images/services/intelligence.png",
  },
};

export function ServicesListing() {
  const containerRef = useRef<HTMLDivElement>(null);

  const marketingServices = services.filter((s) => s.pillar === "Marketing");
  const productionServices = services.filter((s) => s.pillar === "Production");
  const ormServices = services.filter((s) => s.pillar === "ORM");

  return (
    <div
      ref={containerRef}
      className="bg-neutral-950 min-h-screen text-white font-sans pt-32 md:pt-40 pb-16 md:pb-32 px-4 relative"
    >
      <div className="max-w-7xl mx-auto md:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-start text-left gap-8 mb-20 md:mb-40">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-label text-neutral-500"
          >
            Our Capabilities
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="relative"
          >
            <GradientText
              words="Intelligent Growth Modules"
              className="text-heading-xl"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-body-xl text-neutral-400 max-w-2xl"
          >
            We don&apos;t just provide services; we deploy interconnected growth
            infrastructure engineered for global scale and operational
            efficiency.
          </motion.p>
        </div>

        {/* Pillars Sections */}
        <div className="relative space-y-32 md:space-y-60">
          <PillarSection
            pillar="Marketing"
            services={marketingServices}
            reverse={false}
          />
          <PillarSection
            pillar="Production"
            services={productionServices}
            reverse={true}
          />
          <PillarSection pillar="ORM" services={ormServices} reverse={false} />
        </div>

        {/* Final CTA */}
        {/* Final CTA */}
        <div className="mt-32 md:mt-60">
          <CTA
            title="Build Your Custom Engine."
            description="Contact our systems architects to audit your current operation and deploy the Admanics modules best suited for your goals."
            buttonText="Initialize Deployment"
            buttonLink="/contact"
            className="bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900"
          />
        </div>
      </div>
    </div>
  );
}

function PillarSection({
  pillar,
  services: pillarServices,
  reverse,
}: {
  pillar: keyof typeof pillarDetails & keyof typeof pillarMetadata;
  services: Service[];
  reverse?: boolean;
}) {
  const details = pillarDetails[pillar];
  const metadata = pillarMetadata[pillar];
  const sectionRef = useRef<HTMLDivElement>(null);
  const isProduction = pillar === "Production";

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.6, 1, 1, 0.8],
  );

  return (
    <div
      ref={sectionRef}
      className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start relative group/section min-h-[80vh]"
    >
      {/* Visual Side - STICKY AND PARALLAX */}
      <div
        className={cn(
          "w-full lg:w-1/2 lg:sticky lg:top-32 self-start",
          reverse ? "lg:order-2" : "lg:order-1",
        )}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden group border border-white/5 bg-neutral-900 shadow-2xl shadow-blue-500/5 perspective-1000"
        >
          {/* Parallax Image Container */}
          <motion.div
            style={{ y, scale }}
            className="absolute inset-0 w-full h-[120%] will-change-transform"
          >
            <Image
              src={details.imageUrl}
              alt={details.title}
              fill
              className="object-cover transition-opacity duration-700"
              priority={pillar === "Marketing"}
            />
          </motion.div>

          {/* Subtle Pillar Glow */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br to neutral-950/20 mix-blend-overlay",
              details.bgClass,
            )}
          />
          <motion.div
            style={{ opacity }}
            className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent"
          />

          <div className="absolute inset-x-8 bottom-8 text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-neutral-950/60 backdrop-blur-2xl p-8 rounded-3xl border border-white/10"
            >
              <div className={cn("text-label mb-2", details.accentColor)}>
                {details.tagline}
              </div>
              <div className="text-2xl font-black tracking-tight">
                {pillar} MODULE
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Content Side - SCROLLS NATURALLY */}
      <div
        className={cn(
          "w-full lg:w-1/2 flex flex-col gap-12 py-8 relative",
          reverse ? "lg:order-1 lg:pr-12" : "lg:order-2 lg:pl-12",
        )}
      >
        {/* Animated Connector Line */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]),
          }}
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
        />

        <motion.div
          initial={{ opacity: 0, x: reverse ? -50 : 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-heading-lg mb-6">{details.title}</h2>
          <p className="text-body-lg text-neutral-400 max-w-xl">
            {details.description}
          </p>
        </motion.div>

        <div className="flex flex-col gap-2">
          {pillarServices.map((service, idx) => {
            const serviceHref = isProduction ? "https://thensanemedia.com/" : `/services/${service.slug}`;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
              >
                <Link
                  href={serviceHref}
                  className="block"
                  {...(isProduction ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <div className="group flex flex-col py-6 border-b border-white/5 hover:bg-white/[0.04] transition-all px-6 rounded-2xl -mx-6 cursor-pointer hover:pl-8">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-heading-md transition-colors text-neutral-400 group-hover:text-white">
                        {service.title}
                      </span>
                      <ChevronRight className="w-5 h-5 text-neutral-700 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </div>
                    <div className="flex items-center gap-3 overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 pt-2">
                        {service.tagline}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="pt-12">
          <Link 
            href={isProduction ? "https://thensanemedia.com/" : `/services/${metadata.slug}`}
            {...(isProduction ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <Button className="rounded-full px-12 py-8 bg-white text-black hover:bg-neutral-200 transition-all font-bold text-xl shadow-xl shadow-white/5 group/btn relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Explore {pillar} Modules{" "}
                  <ArrowRight className="ml-2 w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}
