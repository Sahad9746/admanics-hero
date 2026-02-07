"use client";

import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { services, pillarMetadata } from "@/constants/services";
import { motion } from "framer-motion";
import Link from "next/link";
import { CardSpotlight } from "@/components/ui/card-spotlight";

import { 
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

export function Services() {
  const primaryServices = services.slice(0, 3);

  return (
    <section id="services" className="bg-neutral-950 py-32 px-4 font-sans text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto md:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start text-left gap-6 mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-neutral-500"
          >
            Capabilities
          </motion.span>
          <GradientText 
            words="Our Intelligent Systems"
            className="text-5xl md:text-7xl leading-tight"
          />
          <p className="text-neutral-400 max-w-2xl text-lg leading-relaxed mt-4">
            Custom-engineered modules designed to handle the complexity of global scale.
          </p>
        </div>

        {/* Primary 3 Pillars Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
           {primaryServices.map((service, idx) => {
             const Icon = iconMap[service.iconName] || BarChart3;
             return (
               <motion.div
                 key={service.slug}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1, duration: 0.8 }}
                 className="relative group"
               >
                 <CardSpotlight className="p-10 rounded-[2.5rem] border border-white/10 bg-neutral-900/30 backdrop-blur-sm h-full flex flex-col items-start relative z-10">
                    <div className="flex items-center justify-between w-full mb-10">
                       <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-neutral-500">{service.category}</span>
                       <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 tracking-wider uppercase">
                          {service.outcome}
                       </div>
                    </div>
                    
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-black mb-8 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500">
                       <Icon size={32} />
                    </div>

                    <h3 className="text-3xl font-bold mb-6 leading-tight group-hover:text-blue-400 transition-colors">
                       {service.title}
                    </h3>
                    
                    <p className="text-neutral-400 leading-relaxed mb-10 text-lg">
                       {service.description}
                    </p>

                     <div className="mt-auto w-full pt-8 border-t border-white/5">
                        <Link href={`/services/${pillarMetadata[service.pillar].slug}`} className="flex items-center justify-between w-full group/link">
                           <span className="text-sm font-bold tracking-widest uppercase text-neutral-300 group-hover/link:text-white transition-colors">Explore Category</span>
                           <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/link:bg-white group-hover/link:text-black transition-all">
                              <ArrowRight size={18} />
                           </div>
                        </Link>
                     </div>
                 </CardSpotlight>
               </motion.div>
             )
           })}
        </div>

        <div className="flex justify-center mt-12">
            <Link href="/contact">
              <Button className="bg-white text-black hover:bg-neutral-200 rounded-full px-12 py-8 text-xl font-bold shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 transition-all">
                  Initialize Deployment &rarr;
              </Button>
            </Link>
        </div>
      </div>
    </section>
  );
}
