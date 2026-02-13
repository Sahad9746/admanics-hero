"use client";

import { Service, pillarMetadata } from "@/constants/services";
import { motion, useScroll, useTransform } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Lottie from "lottie-react";
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

function LottieRenderer({ url }: { url: string }) {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setAnimationData(data))
      .catch(err => console.error("Failed to load Lottie:", err));
  }, [url]);

  if (!animationData) return <div className="w-full h-full animate-pulse bg-white/5" />;

  return <Lottie animationData={animationData} loop={true} className="w-full h-full object-contain" />;
}
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
    <div ref={containerRef} className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-blue-500/30 overflow-x-hidden relative">
      {/* Background Ambience - Preserved and Enhanced */}
      <div className="absolute inset-x-0 inset-y-0 z-0 pointer-events-none overflow-hidden container-glow">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(30,58,138,0.1),_transparent_70%)]" />
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Cinematic Header (Repositioned to clear SiteNavbar) */}
        <nav className="fixed top-24 left-0 right-0 px-8 md:px-12 flex justify-between items-start z-50 mix-blend-exclusion pointer-events-none">
          <Link href="/services" className="pointer-events-auto flex items-center gap-3 text-white hover:opacity-70 transition-opacity">
            <ArrowLeft className="w-6 h-6" />
            <span className="text-sm font-bold tracking-[0.3em] uppercase">Systems</span>
          </Link>
          <div className="text-right">
              <p className="font-bold text-xs uppercase tracking-widest text-white underline decoration-blue-500/50 underline-offset-8">Admanics / Studio</p>
          </div>
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

        {/* 4. THE BLUEPRINT (Category Workflow) */}
        <section className="relative py-32 px-6 md:px-12 bg-neutral-950 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
              <div className="mb-24">
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 mb-4 block">The Pipeline</span>
                  <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white">The Blueprint.</h2>
                  <p className="text-xl text-neutral-400 mt-6 max-w-2xl">
                    Our {category} architecture is a precision-engineered system designed to translate business objectives into high-fidelity digital infrastructure.
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {(category === "Marketing" ? [
                    { step: "01", title: "Discovery & Audit", desc: "Digital ecosystem mapping, performance benchmarking, and target synthesis.", icon: <Search className="w-6 h-6" /> },
                    { step: "02", title: "System Architecting", desc: "Funnel engineering, creative mapping, and technical infrastructure setup.", icon: <Layout className="w-6 h-6" /> },
                    { step: "03", title: "Execution & Scale", desc: "Active optimization, algorithmic adjustments, and budget scaling.", icon: <Zap className="w-6 h-6" /> },
                    { step: "04", title: "Success Synthesis", desc: "Data interpretation, attribution modeling, and strategic reporting.", icon: <BarChart3 className="w-6 h-6" /> }
                  ] : [
                    { step: "01", title: "Sentiment Audit", desc: "AI-driven perception mapping and digital footprint vulnerability analysis.", icon: <Fingerprint className="w-6 h-6" /> },
                    { step: "02", title: "Defensive Blueprinting", desc: "Authority building strategy and sentiment stabilization roadmap.", icon: <ShieldCheck className="w-6 h-6" /> },
                    { step: "03", title: "Active Neutralization", desc: "Rapid response protocols and algorithmic visibility management.", icon: <Eye className="w-6 h-6" /> },
                    { step: "04", title: "Reputation Security", desc: "Perpetual monitoring and digital asset safeguarding.", icon: <Sparkles className="w-6 h-6" /> }
                  ]).map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group p-8 bg-neutral-900/40 border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all duration-500"
                    >
                        <div className="flex justify-between items-start mb-8">
                            <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                {item.icon}
                            </div>
                            <span className="text-4xl font-black text-white/5 group-hover:text-blue-500/10 transition-colors uppercase tracking-tighter">
                                {item.step}
                            </span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                        <p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors">
                            {item.desc}
                        </p>
                    </motion.div>
                  ))}
              </div>
          </div>
        </section>

        {/* 5. Footer CTA - GROWTH ACCELERATOR */}
        <section className="py-24 px-6 md:px-12 bg-neutral-950 relative overflow-hidden z-10">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-10 md:p-20 rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-br from-blue-500/10 to-transparent border border-white/10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(59,130,246,0.1),_transparent_70%)] pointer-events-none" />
                    
                    <div className="flex flex-col gap-4 md:gap-6 relative z-10 text-center md:text-left">
                        <h4 className="text-3xl md:text-6xl font-bold tracking-tighter leading-tight">Ready to automate <br className="hidden md:block" />your growth?</h4>
                        <p className="text-lg md:text-xl text-neutral-400 font-medium">Join 50+ brands scaling with our Intelligent Systems.</p>
                    </div>
                    <Link href="/contact" className="w-full md:w-auto relative z-10">
                        <Button className="w-full md:w-auto bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-4 md:px-12 md:py-6 text-lg md:text-xl font-bold shadow-2xl transition-all hover:scale-105 active:scale-95 whitespace-nowrap">
                            Book Strategy Call
                        </Button>
                    </Link>
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
       className="relative min-h-screen flex items-center py-16 md:py-32 overflow-hidden border-t border-white/5"
     >
       {/* ... */}
       <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
         <div className={cn(
           "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center",
           idx % 2 !== 0 && "lg:flex-row-reverse"
         )}>
           {/* Content Side - Order 2 on Mobile (Bottom), Alternates on Desktop */}
           <div className={cn(
               "flex flex-col order-2", // Mobile: Always Bottom
               idx % 2 === 0 ? "lg:order-1" : "lg:order-2" // Desktop: Alternates
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
 
               <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-10 tracking-tight leading-none text-white">
                 {service.title}
               </h2>
 
               <p className="text-lg md:text-xl text-neutral-400 font-medium leading-relaxed mb-8 md:mb-12 max-w-xl">
                 {service.detailedContent}
               </p>
 
               <div className="grid grid-cols-1 gap-4 md:gap-6 mb-10 md:mb-16">
                  {service.features.map((feature, fIdx) => (
                     <div key={fIdx} className="flex items-center gap-4 md:gap-6 group/item">
                         <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover/item:scale-150 transition-transform" />
                         <span className="text-lg font-bold text-neutral-300 tracking-tight">{feature}</span>
                     </div>
                  ))}
               </div>
 
               <Link href="/contact">
                 <Button variant="outline" className="bg-transparent text-white rounded-full px-10 py-7 border-white/10 hover:border-white/40 hover:bg-white/5 text-lg font-bold transition-all group/btn">
                   Explore Architecture <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
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
                <div className="relative aspect-[2/1] md:aspect-[16/10] overflow-hidden rounded-3xl md:rounded-none border border-white/10 md:border-none mb-8 md:mb-0 group bg-neutral-900/20">
                    {service.lottieUrl ? (
                      <div className="absolute inset-0 p-4 md:p-8 flex items-center justify-center">
                         <LottieRenderer url={service.lottieUrl} />
                      </div>
                    ) : service.image ? (
                      <Image 
                        src={service.image} 
                        alt={service.title}
                        fill
                        className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(10,10,10,0.4)_100%)]" />
                      </>
                    )}
                    
                    {/* Floating Icon Ambient - Only show if no image AND no lottie */}
                    {!service.image && !service.lottieUrl && (
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-20 group-hover:opacity-40 transition-opacity">
                           <Icon className="w-32 h-32 md:w-80 md:h-80 text-blue-400" strokeWidth={0.5} />
                      </div>
                    )}

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
