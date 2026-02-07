"use client";

import { Service, pillarMetadata } from "@/constants/services";
import { motion, useScroll, useTransform } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { 
  ArrowLeft, 
  ArrowRight,
  BarChart3,
  ShieldCheck,
  Clapperboard,
  Layout,
  Monitor,
  Code,
  Sparkles,
  Mail,
  PieChart,
  Zap,
  FileText,
  Share2,
  Search,
  Video,
  Lightbulb,
  Volume2,
  Fingerprint,
  Eye,
  MessageSquare
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, any> = {
  BarChart3,
  ShieldCheck,
  Clapperboard,
  Layout,
  Monitor,
  Code,
  Sparkles,
  Mail,
  PieChart,
  Zap,
  FileText,
  Share2,
  Search,
  Video,
  Lightbulb,
  Volume2,
  Fingerprint,
  Eye,
  MessageSquare
};

interface CategoryDetailProps {
  category: "Marketing" | "Production" | "ORM";
  services: Service[];
}

import { useLenis } from "lenis/react";
import { useEffect } from "react";
// ... existing imports

export function CategoryDetail({ category, services }: CategoryDetailProps) {
  const metadata = pillarMetadata[category];
  const containerRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [lenis, category]);

  return (
    <div ref={containerRef} className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Background Ambience - Preserved and Enhanced */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(30,58,138,0.1),_transparent_70%)]" />
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Cinematic Header (Not Fixed to avoid clash) */}
        <nav className="pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
          <Link href="/services" className="inline-flex items-center gap-3 text-neutral-500 hover:text-white transition-all group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold tracking-[0.3em] uppercase">Return to Systems</span>
          </Link>
        </nav>

        {/* Hero Section - Typography First */}
        <section className="relative pb-48 px-6 md:px-12 max-w-7xl mx-auto"> 
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-blue-500 mb-8">
                  System Pillar / {category}
                </span>
                
                <GradientText 
                  words={metadata.title}
                  className="text-6xl md:text-8xl font-bold leading-[1.1] tracking-tight mb-12 block"
                />
                
                <div className="flex flex-col gap-8 md:gap-12">
                    <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed font-medium max-w-2xl">
                      {metadata.description}
                    </p>
                    
                    <div className="flex-1 border-l-2 border-blue-500/30 pl-8 py-2">
                       <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500 mb-2">Target Outcome</span>
                       <span className="text-3xl font-bold tracking-tight text-white">{metadata.outcome}</span>
                    </div>
                </div>
              </motion.div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-h-[600px] w-full ml-auto rounded-3xl overflow-hidden border border-white/10 glow-box"
              >
                 <Image 
                    src={metadata.image || "/images/services/marketing-v3.png"} 
                    alt={metadata.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-1000"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cinematic Modules - No Cards, Pure Storytelling */}
        <main className="space-y-0">
          {services.map((service, idx) => {
            const Icon = iconMap[service.iconName] || BarChart3;
            return (
              <ModuleSection 
                key={service.slug} 
                service={service} 
                idx={idx} 
                Icon={Icon}
                category={category}
              />
            );
          })}
        </main>

        {/* Final Cinematic CTA */}
        <section className="relative py-64 px-6 md:px-12 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[1.1]">
                Initialize Your <br />
                <span className="text-blue-500 uppercase">{category} System</span>
              </h2>
              
              <div className="flex flex-col items-center gap-12">
                  <p className="text-xl md:text-2xl text-neutral-400 font-medium max-w-2xl">
                    Deploy the infrastructure your brand deserves. Connect with an architect to begin your transformation.
                  </p>
                  
                  <Link href="/contact">
                    <Button className="bg-white text-black hover:bg-neutral-200 rounded-full px-16 py-10 text-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-blue-500/10">
                      Deploy System &rarr;
                    </Button>
                  </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

function ModuleSection({ service, idx, Icon, category }: { service: Service, idx: number, Icon: any, category: string }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-32 overflow-hidden border-t border-white/5"
    >
      {/* Typography Mask - Cinematic Identity */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <motion.span 
            style={{ y }}
            className="text-[35vw] font-black text-white/[0.02] leading-none tracking-tighter uppercase whitespace-nowrap"
          >
            {service.slug}
          </motion.span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-24 items-center",
          idx % 2 !== 0 && "lg:flex-row-reverse"
        )}>
          {/* Content Side */}
          <div className={cn(
              "flex flex-col",
              idx % 2 !== 0 && "lg:order-2"
          )}>
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-8">
                  <div className="w-px h-12 bg-blue-500" />
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-500">{service.tagline}</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight leading-none text-white">
                {service.title}
              </h2>

              <p className="text-xl text-neutral-400 font-medium leading-relaxed mb-12 max-w-xl">
                {service.detailedContent}
              </p>

              <div className="grid grid-cols-1 gap-6 mb-16">
                 {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-6 group/item">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover/item:scale-150 transition-transform" />
                        <span className="text-lg font-bold text-neutral-300 tracking-tight">{feature}</span>
                    </div>
                 ))}
              </div>

              <Link href="/contact">
                <Button variant="outline" className="rounded-full px-10 py-7 border-white/10 hover:border-white/40 text-lg font-bold transition-all group/btn">
                  System Architecture <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Cinematic Visual Side */}
          <div className={cn(
              "relative",
              idx % 2 !== 0 && "lg:order-1"
          )}>
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <div className="relative aspect-[4/5] md:aspect-[16/10] overflow-hidden">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                    <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(10,10,10,0.4)_100%)]" />
                    
                    {/* Floating Icon Ambient */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-20 group-hover:opacity-40 transition-opacity">
                         <Icon size={320} strokeWidth={0.5} className="text-blue-400" />
                    </div>

                    <div className="absolute top-8 right-8 z-30">
                         <span className="px-6 py-2 rounded-full border border-white/10 bg-neutral-950/60 backdrop-blur-xl text-[10px] font-bold tracking-[0.3em] uppercase text-blue-500">
                             {service.outcome}
                         </span>
                    </div>
                </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
