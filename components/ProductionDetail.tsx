"use client";

import { Service, pillarMetadata } from "@/constants/services";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ArrowLeft, Play, ArrowRight, MousePointer2, Lightbulb, Clapperboard, Video } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLenis } from "lenis/react";

interface ProductionDetailProps {
  category: "Production";
  services: Service[];
}

// --- COMPONENTS ---
// 1. Horizontal Scroll Reel Card (REFACTORED)
// 1. Horizontal Scroll Reel Card (REFACTORED)
const ReelCard = ({ title, category, videoUrl, poster, orientation = "horizontal" }: { title: string, category: string, videoUrl: string, poster: string, orientation?: "horizontal" | "vertical" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  
  const isVertical = orientation === "vertical";

  return (
    <div 
      className={cn(
        "relative flex-shrink-0 group cursor-pointer overflow-hidden border-r border-white/10 last:border-r-0 bg-neutral-900 transition-all duration-500",
        isVertical ? "w-[300px] md:w-[400px] aspect-[9/16]" : "w-[400px] md:w-[700px] aspect-[16/9]"
      )}
      onMouseEnter={() => setIsPlaying(true)}
      onMouseLeave={() => setIsPlaying(false)}
    >
       {/* Fallback Image */}
       <Image 
         src={poster || "/images/services/production-v3.png"}
         alt={title}
         fill
         className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
       />

       {/* Video Background */}
       <video 
         src={videoUrl}
         muted
         loop
         playsInline
         autoPlay={false}
         onCanPlay={() => setIsReady(true)}
         ref={(el) => {
            if (el) {
                if (isPlaying) el.play().catch(() => {});
                else el.pause();
            }
         }}
         className={cn(
           "absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105",
           isReady && isPlaying ? "opacity-100" : "opacity-0"
         )}
       />
       
       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100" />
       
       <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center gap-3 mb-2">
             <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                <Play className="w-3 h-3 text-white fill-white" />
             </div>
             <p className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em]">{category}</p>
          </div>
          <h3 className={cn("font-black text-white uppercase tracking-tighter leading-none", isVertical ? "text-3xl md:text-5xl" : "text-3xl md:text-6xl")}>{title}</h3>
       </div>
    </div>
  );
}

// 2. Floating Parallax Card
const FloatingCard = ({ service, index, range }: { service: Service, index: number, range: [number, number] }) => {
  const ref = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Randomize/Alternate parallax speed based on index
  const y = useTransform(scrollYProgress, [0, 1], range);
  
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={cn(
      "relative w-full md:w-[45%] mb-24 md:mb-0",
      isEven ? "md:ml-[5%]" : "md:ml-[50%] md:-mt-[20%]" // Staggered layout
    )}>
      <motion.div style={{ y }} className="relative group">
         <div 
           className="aspect-video w-full overflow-hidden rounded-lg border border-white/10 relative z-10 bg-neutral-900 cursor-pointer"
           onMouseEnter={() => setIsVideoPlaying(true)}
           onMouseLeave={() => setIsVideoPlaying(false)}
         >
             {/* Layered Content: Image Background always present */}
             <Image 
               src={service.image || "/images/services/production-v3.png"}
               alt={service.title}
               fill
               className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
             />

             {service.videoUrl && (
                <video 
                  src={service.videoUrl}
                  muted
                  loop
                  playsInline
                  autoPlay
                  onCanPlay={(e) => (e.currentTarget.style.opacity = "1")}
                  className={cn(
                    "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0",
                    "group-hover:scale-105 transition-transform duration-1000" 
                  )}
                />
             )}
             
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
             
             {/* Text Overlay */}
             <div className="absolute bottom-0 md:-bottom-8 left-0 md:-left-8 z-20 bg-neutral-950 border border-white/10 p-5 md:p-8 max-w-[90%] md:max-w-sm shadow-2xl pointer-events-none">
                 <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{service.title}</h3>
                 <p className="text-sm text-neutral-400 line-clamp-2">{service.description}</p>
                 <div className="mt-4 flex gap-2">
                    {service.features.slice(0, 2).map((f, i) => (
                       <span key={i} className="text-[10px] uppercase tracking-wider border border-white/20 px-2 py-1 text-white/60">{f}</span>
                    ))}
                 </div>
             </div>
             
             {/* Play Icon Indicator */}
             {service.videoUrl && (
                <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/10 opacity-60 group-hover:opacity-100 transition-opacity">
                   <Play className="w-4 h-4 text-white fill-white" />
                </div>
             )}
         </div>
      </motion.div>
    </div>
  );
}

export function ProductionDetail({ category, services }: ProductionDetailProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [lenis, category]);

  // --- HERO ZOOM EFFECT ---
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"]
  });

  // Scale from 1 to 50 (massively zoom in)
  const textScale = useTransform(heroProgress, [0, 0.4, 0.6], [1, 5, 20]);
  const textOpacity = useTransform(heroProgress, [0, 0.3], [1, 0]);
  const overlayOpacity = useTransform(heroProgress, [0.4, 0.6], [0.8, 0]); // Fade out dark overlay to reveal clear video
  
  // --- HORIZONTAL SCROLL ---
  const { scrollYProgress: horizontalProgress } = useScroll({
    target: horizontalRef,
    offset: ["start start", "end end"]
  });
  const x = useTransform(horizontalProgress, [0, 1], ["0%", "-85%"]); // Increased travel distance for wider cards

  // Reel Collection Data
  const reelCollection = [
    { 
       title: "Neon Nights", 
       category: "Automotive", 
       orientation: "horizontal" as const,
       videoUrl: "https://cdn.coverr.co/videos/coverr-driving-through-a-city-at-night-4523/1080p.mp4",
       poster: "/images/services/production-v3.png" 
    },
    { 
       title: "Urban Flow", 
       category: "Lifestyle", 
       orientation: "vertical" as const,
       videoUrl: "https://cdn.coverr.co/videos/coverr-skateboarding-skills-959/1080p.mp4",
       poster: "/images/services/production-v3.png" 
    },
    { 
       title: "Taste of Luxury", 
       category: "Food & Bev", 
       orientation: "horizontal" as const,
       videoUrl: "https://cdn.coverr.co/videos/coverr-pouring-wine-into-a-glass-5320/1080p.mp4",
       poster: "/images/services/production-v3.png" 
    },
    { 
       title: "Fashion Week", 
       category: "Event", 
       orientation: "vertical" as const,
       videoUrl: "https://cdn.coverr.co/videos/coverr-model-walking-on-catwalk-2661/1080p.mp4",
       poster: "/images/services/production-v3.png" 
    },
    { 
       title: "Tech Forward", 
       category: "Commercial", 
       orientation: "horizontal" as const,
       videoUrl: "https://cdn.coverr.co/videos/coverr-typing-on-computer-keyboard-4632/1080p.mp4",
       poster: "/images/services/production-v3.png" 
    },
    { 
       title: "Social Vibes", 
       category: "Social Media", 
       orientation: "vertical" as const,
       videoUrl: "https://cdn.coverr.co/videos/coverr-dancing-in-a-neon-room-5423/1080p.mp4",
       poster: "/images/services/production-v3.png" 
    },
    { 
       title: "Wild Earth", 
       category: "Documentary", 
       orientation: "horizontal" as const,
       videoUrl: "https://cdn.coverr.co/videos/coverr-drone-shot-of-a-forest-in-autumn-5315/1080p.mp4",
       poster: "/images/services/production-v3.png" 
    },
  ];

  return (
    <div ref={containerRef} className="bg-neutral-950 text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* 1. ZOOM HERO SECTION (Sticky Wrapper) */}
      <div ref={heroRef} className="h-[200vh] relative z-0">
         <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
             
             {/* Background Video */}
             <div className="absolute inset-0 z-0">
                 <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  src="https://assets.mixkit.co/videos/preview/mixkit-cinematographer-filming-with-a-camera-4045-large.mp4" 
                  />
                  <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-neutral-950" />
              </div>

              {/* Est. 2024 Badge (Fixed) */}
              <div className="absolute top-32 z-10">
                  <div className="inline-block border border-white/20 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full">
                      <span className="text-xs font-bold uppercase tracking-[0.3em] text-white">Est. 2024</span>
                  </div>
              </div>

              {/* Zooming Text */}
              <motion.div 
                style={{ scale: textScale, opacity: textOpacity }}
                className="relative z-10 text-center origin-center px-4"
              >
                 <h1 
                   className="text-[12vw] font-bold leading-none tracking-tighter text-gradient pointer-events-none pb-4"
                 >
                   PRODUCTION
                 </h1>
                 <p className="mt-8 text-xl text-neutral-400 font-light tracking-[0.5em] uppercase">
                     Beyond The Frame
                 </p>
              </motion.div>


             {/* Scroll Hint */}
             <motion.div 
                style={{ opacity: textOpacity }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
             >
                 <MousePointer2 className="w-6 h-6 animate-bounce text-white/50" />
                 <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll to Enter</span>
             </motion.div>
         </div>
      </div>

      {/* 2. FLOATING GALLERY (Services) */}
      <section className="relative z-10 py-32 px-6 md:px-12 bg-neutral-950 shadow-[0_-50px_100px_rgba(0,0,0,1)]">
         <div className="max-w-7xl mx-auto">
             <div className="mb-32 text-center max-w-2xl mx-auto">
                 <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-gradient">Visual Architecture</h2>
                 <p className="text-lg text-neutral-400">
                    We don't just shoot video. We construct visual systems that elevate your brand's narrative across every dimension.
                 </p>
             </div>

             <div className="flex flex-col relative w-full pb-32">
                 {services.map((service, idx) => (
                    <FloatingCard 
                      key={idx} 
                      service={service} 
                      index={idx} 
                      range={idx % 2 === 0 ? [50, -50] : [100, -100]} // Different speeds
                    />
                 ))}
             </div>
         </div>
      </section>

      {/* 3. HORIZONTAL REEL - "Reel Collection" */}
      <section ref={horizontalRef} className="relative h-[200vh] bg-neutral-950 z-0 border-t border-white/5"> 
         <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center border-t border-white/10">
             
             <div className="absolute top-24 left-6 md:left-12 lg:left-24 z-20 pointer-events-none">
                 <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-4 text-white/10">SHOWCASE</h2>
             </div>
             
             <div className="absolute top-44 left-6 md:left-12 lg:left-24 z-20">
                 <h3 className="text-2xl font-bold text-white mb-2">Reel Collection</h3>
                 <p className="text-neutral-500 max-w-xs">Curated selection of our finest frames.</p>
             </div>

             <motion.div style={{ x }} className="flex pl-6 md:pl-24 gap-0 w-max items-center h-full">
                 {reelCollection.map((reel, idx) => (
                     <ReelCard key={idx} {...reel} />
                 ))}
                 
                 {/* View All Card */}
                 <div className="relative flex-shrink-0 w-[400px] md:w-[600px] aspect-[16/9] md:aspect-video bg-neutral-900 border border-white/5 flex flex-col items-center justify-center text-center p-8 group hover:bg-neutral-800 transition-colors">
                     <h3 className="text-4xl font-black mb-4 uppercase">Archive</h3>
                     <p className="text-neutral-400 mb-8 max-w-xs">Explore our full library of commercial work.</p>
                     <Button variant="outline" className="rounded-full px-8 py-6 text-lg">View All Projects</Button>
                 </div>
             </motion.div>
         </div>
      </section>

      {/* 4. THE BLUEPRINT (Production Pipeline) */}
      <section className="relative py-32 px-6 md:px-12 bg-neutral-950 border-t border-white/5">
         <div className="max-w-7xl mx-auto">
             <div className="mb-24">
                 <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-500 mb-4 block">The Pipeline</span>
                 <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-gradient">The Blueprint.</h2>
                 <p className="text-xl text-neutral-400 mt-6 max-w-2xl">
                    Our cinematic workflow is a precision-engineered system designed to translate complex ideas into high-fidelity visual infrastructure.
                 </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                    { 
                        step: "01", 
                        title: "Discovery & Strategy", 
                        desc: "Concept mapping, target audience alignment, and definitive creative direction.",
                        icon: <Lightbulb className="w-6 h-6" />
                    },
                    { 
                        step: "02", 
                        title: "Field Production", 
                        desc: "High-fidelity capture, specialized cinematography, and on-set technical direction.",
                        icon: <Clapperboard className="w-6 h-6" />
                    },
                    { 
                        step: "03", 
                        title: "Post-Synthesis", 
                        desc: "Editing, immersive sound design, professional color grading, and VFX integration.",
                        icon: <Video className="w-6 h-6" />
                    },
                    { 
                        step: "04", 
                        title: "Distribution", 
                        desc: "Multi-platform optimization, asset versioning, and strategic deployment.",
                        icon: <ArrowRight className="w-6 h-6" />
                    }
                 ].map((item, i) => (
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

      {/* Floating Header (Always Visible) */}
      <nav className="fixed top-24 left-0 right-0 px-8 md:px-12 flex justify-between items-start z-50 mix-blend-exclusion pointer-events-none">
          <Link href="/services" className="pointer-events-auto flex items-center gap-3 text-white hover:opacity-70 transition-opacity">
             <ArrowLeft className="w-6 h-6" />
             <span className="font-bold tracking-widest uppercase text-xs">Systems</span>
          </Link>
          <div className="text-right">
              <p className="font-bold text-xs uppercase tracking-widest text-white underline decoration-blue-500/50 underline-offset-8">Admanics / Studio</p>
          </div>
      </nav>

    </div>
  );
}
