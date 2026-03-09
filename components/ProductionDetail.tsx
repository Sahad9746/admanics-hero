"use client";

import { GradientText } from "@/components/ui/GradientText";
import { CTA } from "@/components/CTA";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  MotionValue,
} from "framer-motion";
import { Service, pillarMetadata } from "@/constants/services";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { urlFor } from "@/sanity/lib/image";
import {
  ArrowLeft,
  Play,
  ArrowRight,
  MousePointer2,
  Lightbulb,
  Clapperboard,
  Video,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLenis } from "lenis/react";

interface Reel {
  title: string;
  category: string;
  videoUrl?: string;
  videoFileUrl?: string;
  thumbnail: any;
  orientation?: "horizontal" | "vertical";
}

interface ProductionDetailProps {
  category: "Production";
  services: Service[];
  reels?: Reel[];
}

// Helper to get video source
const getVideoSource = (reel: Reel) => {
  if (reel.videoUrl) return reel.videoUrl;
  if (reel.videoFileUrl) return reel.videoFileUrl;
  return "";
};

// --- COMPONENTS ---
// 1. Horizontal Scroll Reel Card (REFACTORED)
// 1. Horizontal Scroll Reel Card (REFACTORED)
const ReelCard = ({
  title,
  category,
  videoUrl,
  poster,
  orientation = "horizontal",
}: {
  title: string;
  category: string;
  videoUrl: string;
  poster: string;
  orientation?: "horizontal" | "vertical";
}) => {
  const containerRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { amount: 0.4, margin: "0px 0px -100px 0px" }); // Play when 40% visible, with some margin
  const [isReady, setIsReady] = useState(false);

  const isVertical = orientation === "vertical";

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            // Silently catch autoplay errors if interaction is required
            console.log("Autoplay prevented");
          });
        }
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex-shrink-0 group cursor-pointer overflow-hidden border-r border-white/10 last:border-r-0 bg-neutral-900 transition-all duration-500",
        isVertical
          ? "w-[300px] md:w-[350px] aspect-[9/16]"
          : "w-[400px] md:w-[600px] aspect-[16/9]",
      )}
    >
      {/* Fallback Image */}
      <Image
        src={poster || "/images/services/production-v3.png"}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
      />

      {/* Video Background */}
      <video
        ref={videoRef}
        src={videoUrl}
        muted
        loop
        playsInline
        preload="none"
        autoPlay={false}
        onClick={(e) => {
           if (e.currentTarget.paused) {
             e.currentTarget.play();
           } else {
             e.currentTarget.pause();
           }
        }}
        onCanPlay={() => setIsReady(true)}
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105",
          // Show video if ready AND (in view OR playing manually)
          isReady ? "opacity-100" : "opacity-0", 
        )}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100" />

      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
            <Play className="w-3 h-3 text-white fill-white" />
          </div>
          <p className="text-label text-blue-400">{category}</p>
        </div>
        <h3
          className={cn(
            "font-black text-white capitalize tracking-tighter leading-none",
            isVertical ? "text-heading-md" : "text-heading-lg",
          )}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};

// 2. Floating Parallax Card
const FloatingCard = ({
  service,
  index,
  range,
}: {
  service: Service;
  index: number;
  range: [number, number];
}) => {
  const ref = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Randomize/Alternate parallax speed based on index
  const y = useTransform(scrollYProgress, [0, 1], range);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={cn(
        "relative w-full md:w-[45%] mb-24 md:mb-0",
        isEven ? "md:ml-[5%]" : "md:ml-[50%] md:-mt-[20%]", // Staggered layout
      )}
    >
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
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
            className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
          />

          {service.videoUrl && (
            <video
              src={service.videoUrl}
              muted
              loop
              playsInline
              preload="none"
              autoPlay
              onCanPlay={(e) => (e.currentTarget.style.opacity = "1")}
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0",
                "group-hover:scale-105 transition-transform duration-1000",
              )}
            />
          )}

          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />

          {/* Text Overlay */}
          <div className="absolute bottom-0 md:-bottom-8 left-0 md:-left-8 z-20 bg-neutral-950 border border-white/10 p-5 md:p-8 max-w-[90%] md:max-w-sm shadow-2xl pointer-events-none">
            <h3 className="text-heading-md text-white mb-2">{service.title}</h3>
            <p className="text-body-md text-neutral-400 line-clamp-2">
              {service.description}
            </p>
            <div className="mt-4 flex gap-2">
              {service.features.slice(0, 2).map((f, i) => (
                <span
                  key={i}
                  className="text-label border border-white/20 px-2 py-1 text-white/60"
                >
                  {f}
                </span>
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
};


export function ProductionDetail({
  category,
  services,
  reels = [],
}: ProductionDetailProps) {

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
    offset: ["start start", "end end"],
  });

  // Scale from 1 to 50 (massively zoom in)
  const textScale = useTransform(heroProgress, [0, 0.4, 0.6], [1, 5, 20]);
  const textOpacity = useTransform(heroProgress, [0, 0.3], [1, 0]);
  const overlayOpacity = useTransform(heroProgress, [0.4, 0.6], [0.8, 0]); // Fade out dark overlay to reveal clear video

  // --- HORIZONTAL SCROLL ---
  const { scrollYProgress: horizontalProgress } = useScroll({
    target: horizontalRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(horizontalProgress, [0, 1], ["0%", "-45%"]); // Adjusted travel distance after removing Archive cardfull archive card

  // --- REEL SORTING (Alternate Landscape / Portrait) ---
  // Force alternate orientation based on index to ensure "Landscape -> Portrait -> Landscape" rhythm
  // regardless of actual video metadata (as requested by user)
  
  // Reel Collection Data
  // Map passed reels to the format ReelCard expects, or fallback to demo data
  const reelCollection = reels.length > 0 ? reels.map((reel, idx) => ({
    title: reel.title,
    category: reel.category || "Showcase",
    // Even index (0, 2...) -> Horizontal (Landscape)
    // Odd index (1, 3...) -> Vertical (Portrait)
    orientation: (idx % 2 === 0 ? "horizontal" : "vertical") as "horizontal" | "vertical",
    videoUrl: getVideoSource(reel),
    poster: reel.thumbnail ? urlFor(reel.thumbnail).url() : "/images/services/production-v3.png",
  })) : [
    {
      title: "Neon Nights",
      category: "Automotive",
      orientation: "horizontal" as const,
      videoUrl:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      poster: "/images/services/production-v3.png",
    },
    {
      title: "Urban Flow",
      category: "Lifestyle",
      orientation: "vertical" as const,
      videoUrl:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      poster: "/images/services/production-v3.png",
    },
    {
      title: "Taste of Luxury",
      category: "Food & Bev",
      orientation: "horizontal" as const,
      videoUrl:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      poster: "/images/services/production-v3.png",
    },
    {
      title: "Fashion Week",
      category: "Event",
      orientation: "vertical" as const,
      videoUrl:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      poster: "/images/services/production-v3.png",
    },
    {
      title: "Tech Forward",
      category: "Commercial",
      orientation: "horizontal" as const,
      videoUrl:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      poster: "/images/services/production-v3.png",
    },
    {
      title: "Social Vibes",
      category: "Social Media",
      orientation: "vertical" as const,
      videoUrl:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      poster: "/images/services/production-v3.png",
    },
    {
      title: "Wild Earth",
      category: "Documentary",
      orientation: "horizontal" as const,
      videoUrl:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      poster: "/images/services/production-v3.png",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="bg-neutral-950 text-white font-sans selection:bg-blue-500/30 overflow-x-hidden"
    >
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
            <motion.div
              style={{ opacity: overlayOpacity }}
              className="absolute inset-0 bg-neutral-950"
            />
          </div>

          {/* Est. 2024 Badge (Fixed) */}
          <div className="absolute top-32 z-10">
            <div className="inline-block border border-white/20 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full">
              <span className="text-label text-blue-500">Est. 2024</span>
            </div>
          </div>

          {/* Zooming Text */}
          <motion.div
            style={{ scale: textScale, opacity: textOpacity }}
            className="relative z-10 text-center origin-center px-4"
          >
            <h1 className="text-heading-hero text-[12vw] font-bold leading-none tracking-tighter text-white pointer-events-none pb-4">
              PRODUCTION
            </h1>
            <p className="mt-8 text-xl md:text-3xl text-neutral-400 uppercase tracking-widest">
              Beyond The Frame
            </p>
          </motion.div>

          {/* Scroll Hint */}
          <motion.div
            style={{ opacity: textOpacity }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <MousePointer2 className="w-6 h-6 animate-bounce text-white/50" />
            <span className="text-label text-white/50">Scroll to Enter</span>
          </motion.div>
        </div>
      </div>

      {/* 2. FLOATING GALLERY (Services) */}
      <section className="relative z-10 py-32 px-6 md:px-12 bg-neutral-950 shadow-[0_-50px_100px_rgba(0,0,0,1)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-32 text-center max-w-2xl mx-auto">
            <GradientText
              words="Visual Architecture"
              className="text-heading-hero mb-6 text-center"
            />
            <p className="text-body-lg text-neutral-400">
              We don't just shoot video. We construct visual systems that
              elevate your brand's narrative across every dimension.
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
      <section
        ref={horizontalRef}
        className="relative h-[150vh] bg-neutral-950 z-0 border-t border-white/5"
      >
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col pt-48 border-t border-white/5">
          <div className="absolute top-24 left-6 md:left-12 lg:left-24 z-20 pointer-events-none">
            <h2 className="text-heading-xl text-white/5 mb-4">SHOWCASE</h2>
          </div>

          <div className="absolute top-44 left-6 md:left-12 lg:left-24 z-20">
            <h3 className="text-heading-md text-white mb-2">Reel Collection</h3>
            <p className="text-neutral-400 max-w-xs mb-8">
              Curated selection of our finest frames.
            </p>
            <p className="text-body-md text-neutral-500 max-w-sm hidden md:block mb-8">
              We craft visual narratives that transcend the ordinary. Each frame
              is a deliberate stroke of artistry, designed to evoke emotion and
              drive impact.
            </p>
            <Link href="/work">
              <Button className="rounded-full px-8 py-3 text-sm font-bold bg-white text-black hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                View Full Archive
              </Button>
            </Link>
          </div>

          <motion.div
            style={{ x }}
            className="flex pl-6 md:pl-24 gap-0 w-max items-center h-full"
          >
            {reelCollection.map((reel, idx) => (
              <ReelCard key={idx} {...reel} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. THE BLUEPRINT (Production Pipeline) */}
      <section className="relative py-32 px-6 md:px-12 bg-neutral-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <span className="text-label text-blue-500 mb-4 block">
              The Pipeline
            </span>
            <GradientText
              words="The Blueprint."
              className="text-heading-hero"
            />
            <p className="text-body-lg text-neutral-400 mt-6 max-w-2xl">
              Our cinematic workflow is a precision-engineered system designed
              to translate complex ideas into high-fidelity visual
              infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                desc: "Concept mapping, target audience alignment, and definitive creative direction.",
                icon: <Lightbulb className="w-6 h-6" />,
              },
              {
                step: "02",
                title: "Field Production",
                desc: "High-fidelity capture, specialized cinematography, and on-set technical direction.",
                icon: <Clapperboard className="w-6 h-6" />,
              },
              {
                step: "03",
                title: "Post-Synthesis",
                desc: "Editing, immersive sound design, professional color grading, and VFX integration.",
                icon: <Video className="w-6 h-6" />,
              },
              {
                step: "04",
                title: "Distribution",
                desc: "Multi-platform optimization, asset versioning, and strategic deployment.",
                icon: <ArrowRight className="w-6 h-6" />,
              },
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
                <h4 className="text-heading-md text-white mb-4">
                  {item.title}
                </h4>
                <p className="text-body-md text-neutral-500 group-hover:text-neutral-400 transition-colors">
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
          <CTA
            title="Ready to automate <br class='hidden md:block' /> your growth?"
            description="Join 50+ brands scaling with our Intelligent Systems."
            buttonText="Book Strategy Call"
            buttonLink="/contact"
          />
        </div>
      </section>

      {/* Floating Header (Always Visible) */}
      <nav className="fixed top-24 left-0 right-0 px-8 md:px-12 flex justify-between items-start z-50 mix-blend-exclusion pointer-events-none">
        <Link
          href="/services"
          className="pointer-events-auto flex items-center gap-3 text-white hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="w-6 h-6" />
          <span className="text-label">Systems</span>
        </Link>
        <div className="text-right">
          <p className="text-label text-white underline decoration-blue-500/50 underline-offset-8">
            Admanics / Studio
          </p>
        </div>
      </nav>
    </div>
  );
}
