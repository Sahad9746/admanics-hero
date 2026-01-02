"use client";

import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import Image from "next/image";
import { Megaphone, Monitor, Code, Target, Mail, Layout, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Target, // Representing Media Buys/Ads
    title: "Media Buys",
    description: "Maximize your reach with strategic ad placements that deliver measurable results and connect your brand with the right audience.",
  },
  {
    icon: Layout, // Representing UI/UX
    title: "UI/UX Design",
    description: "From initial concepts to final delivery, we craft visually stunning, user-friendly designs that captivate audiences and elevate your brand.",
  },
  {
    icon: Monitor, // Representing SEO
    title: "SEO",
    description: "Boost your online presence with tailored strategies that drive organic traffic, enhance visibility, and grow your brand.",
  },
  {
    icon: Megaphone, // Representing Content Creation
    title: "Content Creation",
    description: "Captivating content tailored to your brand, designed to engage audiences and tell your story with authenticity.",
    isLarge: true, // Example flag if we want one card to be taller or different, though grid suggests uniform size usually. But design might have one large card?
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop" // Optional image for "Content Creation" if design implies it. The uploaded image shows the last card has an image inside or is an image card? 
    // Wait, looking at the user request image (Step 0):
    // "Content Creation" card has an image at the bottom!
    // And it spans 2 rows? Or is just taller? 
    // It looks like a standard grid of 4 columns, 2 rows.
    // Row 1: Media Buys, UI/UX, SEO, Content Creation
    // Row 2: Web Dev, AI Automation, Email Marketing, (Empty? or Content Creation spans down?)
    // Actually, looking at the image provided in Step 0:
    // It's 4 columns.
    // Top Row: Media Buys, UI/UX Design, SEO, Content Creation (Long card?)
    // Bottom Row: Web Development, AI Automation, Email Marketing.
    // The "Content Creation" card seems to be tall and spans 2 rows (row-span-2).
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Transform your vision into reality with scalable, cutting-edge websites that deliver seamless user experiences.",
  },
  {
    icon: Sparkles, // AI Automation
    title: "Ai Automation",
    description: "Optimize your operations with AI-driven solutions that automate tasks, improve efficiency, and enhance decision-making.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Build meaningful relationships with your audience through impactful email campaigns that drive engagement and conversions.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Services() {
  return (
    <section id="services" className="bg-neutral-950 py-24 px-4 font-sans text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <GradientText 
            words="What We do"
            className="text-5xl md:text-6xl mb-4"
          />
        </div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, idx) => {
            const isContentCreation = service.title === "Content Creation";
            
            return (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className={`
                  bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 flex flex-col items-start hover:border-white/20 transition-colors duration-300
                  ${isContentCreation ? 'lg:row-span-2 lg:h-full justify-between' : 'h-full'}
                `}
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 text-black shrink-0">
                  <service.icon size={24} strokeWidth={2} />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">{service.description}</p>
                


                {isContentCreation && service.image && (
                   <div className="w-full mt-auto pt-4 rounded-lg overflow-hidden h-48 md:h-64 lg:h-auto lg:grow relative">
                      <Image 
                        src={service.image} 
                        alt="Content Creation Studio" 
                        fill
                        className="object-cover rounded-lg opacity-80"
                      />
                   </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-12">
            <Button className="bg-neutral-100 text-neutral-950 hover:bg-white rounded-full px-8 py-6 text-lg font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Work with us
            </Button>
        </div>
      </div>
    </section>
  );
}
