"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { GradientText } from "@/components/ui/GradientText";

const features = [
  {
    title: "Lead tracking",
    description: "Your system learns and improves itself based on performance data. connects every tool into one intelligent workflow without manual effort.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    step: "01",
  },
  {
    title: "Automated Nurturing",
    description: "Engage leads instantly with personalized sequences. We build systems that understand lead behavior and deliver the right message at the right time.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
    step: "02",
  },
  {
    title: "Strategic Insights",
    description: "Turn raw data into actionable growth strategies. Our dashboards highlight the metrics that matter, helping you pivot faster and close more deals.",
    image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=2940&auto=format&fit=crop", 
    step: "03",
  },
  {
    title: "Unified reporting",
    description: "See everything from ad spend to customer lifetime value in one place. No more switching between tabs or guessing which channel is performing.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop", // Reusing image or finding new one? Let's use a chart/screen one. Keeping standard placeholder for now if needed, but these unsplash ids are charts.
    step: "04",
  },
];

export function ScrollFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  
  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate generic progress to switch slides
  // We have 4 slides. 0-0.25, 0.25-0.5, 0.5-0.75, 0.75-1.0
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const step = 1 / features.length;
    // Calculate index based on scroll position
    // We clamp index to valid range
    const newIndex = Math.min(
      Math.floor(latest / step),
      features.length - 1
    );
    if (newIndex !== activeFeature) {
      setActiveFeature(newIndex);
    }
  });

  return (
    <section 
        ref={containerRef} 
        id="promise"
        // Height needs to be tall enough to support scrolling through all items.
        // 4 items * 100vh = 400vh is a safe bet for full screen scrolling feel.
        className="h-[400vh] bg-neutral-950 font-sans text-white relative"
    >
      <div className="sticky top-0 min-h-screen lg:h-screen flex items-center overflow-visible lg:overflow-hidden py-12 lg:py-0">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Content - Text */}
            <div className="flex flex-col justify-center order-2 lg:order-1 relative z-10">
                <div className="mb-8 lg:mb-12">
                   <span className="text-sm font-bold tracking-widest uppercase text-neutral-500 mb-4 block">Promise</span>
                   <GradientText
                        words={"Systems that scale your growth automatically"}
                        className="text-3xl md:text-4xl lg:text-5xl mb-4 lg:mb-6"
                   />
                </div>
                
                <div className="relative h-48 md:h-64"> {/* Reduced height for mobile */}
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ 
                                opacity: activeFeature === idx ? 1 : 0,
                                x: activeFeature === idx ? 0 : -20,
                                pointerEvents: activeFeature === idx ? "auto" : "none",
                            }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute top-0 left-0 w-full"
                        >
                             <div className="flex items-baseline gap-4 mb-4">
                                <span className="text-xl font-bold text-neutral-600">{feature.step}.</span>
                                <h3 className="text-3xl font-bold text-white">{feature.title}</h3>
                             </div>
                             <p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-md">
                                {feature.description}
                             </p>
                             {/* Optional Buttons mentioned in screenshot "Explore", "Learn" */}

                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Right Content - Images */}
            <div className="order-1 lg:order-2 h-[35vh] md:h-[45vh] lg:h-[70vh] w-full relative">
                 <div className="w-full h-full relative overflow-hidden rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: "100%" }}
                            animate={{ 
                                y: activeFeature === idx ? "0%" : activeFeature > idx ? "-100%" : "100%", // Slide up (0) if active. Slide out top (-100) if passed. Slide down/wait bottom (100) if coming.
                                zIndex: activeFeature === idx ? 10 : 0
                            }}
                            transition={{ duration: 0.6, ease: "circOut" }}
                            className="absolute inset-0 w-full h-full p-8 md:p-12 flex items-center justify-center bg-neutral-900"
                        >
                            {/* Inner Image Container/Placeholder style as per screenshot (Gray box with icon) or Real Image */}
                            {/* Using Real Image for premium feel */}
                            <img 
                                src={feature.image} 
                                alt={feature.title} 
                                className="w-full h-full object-cover rounded-xl shadow-2xl"
                            />
                            
                            {/* Number overlay just for style match with screenshot 
                                Screenshot has just a placeholder icon with number.
                                I'll stick to the image.
                            */}
                        </motion.div>
                    ))}
                 </div>
            </div>

        </div>
      </div>
    </section>
  );
}
