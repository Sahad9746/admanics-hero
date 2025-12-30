"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const services = [
  {
    type: "image",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop",
    title: "Performance marketing and paid advertising",
    description: "Intelligent campaigns that optimize spend, target the right audience, and deliver measurable ROI at every stage.",
    className: "md:col-span-1"
  },
  {
    type: "image",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop",
    title: "Ecommerce growth and conversion optimization",
    description: "Structured systems that turn traffic into customers and customers into repeat buyers through data-driven strategies.",
    className: "md:col-span-1"
  },
  {
    type: "image",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop",
    title: "Web development and technical infrastructure",
    description: "Fast, scalable websites built to convert, integrated seamlessly with your CRM and marketing automation tools.",
    className: "md:col-span-1"
  },
  
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -50 }, // Start above (falling effect)
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      stiffness: 100,
      damping: 20,
    },
  },
};

export function Services() {
  return (
    <section id="services" className="bg-neutral-950 py-24 px-4 font-sans text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 ml-auto text-right">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-neutral-500 mb-4 block"
          >
            Services
          </motion.span>
          <TextGenerateEffect 
            words="Everything you need to scale without chaos"
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }} 
            className="text-lg text-neutral-400"
          >
            From performance marketing to AI automation, we build the complete infrastructure your business needs to grow predictably and operate efficiently.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className={`flex flex-col h-full ${service.className}`}
            >
              {service.type === "image" && (
                <div className="w-full h-64 mb-8 overflow-hidden rounded-2xl border border-white/10">
                   <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              )}
              
              {/* Spacer for text-only col to align titles if needed, or just let it flow top-aligned */}
              {service.type === "text" && <div className="hidden md:block md:h-64 md:mb-8" />} 
              {/* Actually, looking at screenshot, the text col title aligns with image bottoms? 
                  No, usually text col is just top aligned. 
                  But screenshot shows the Text Title "Performance..." is aligned with the **Images** in other cols?
                  Wait, looking at screenshot:
                  Col 1: Title is roughly at the same vertical level as the Images in Col 2 & 3? 
                  OR Col 1 Title is at top, and Col 2/3 Images are at top.
                  Ah, screenshot: 
                  Col 1: Text "Performance..." is visible. 
                  Col 2: Image is visible. Title "Ecommerce..." is BELOW image.
                  Col 3: Image is visible. Title "Web..." is BELOW image.
                  So Col 1 title is Top Aligned. Col 2/3 have Image at Top.
                  This means Col 1 title will be way higher than Col 2/3 titles.
                  Let's stick to standard flow first.
               */}
              
               <div className="flex flex-col">
                  <h3 className="text-3xl font-bold mb-4 text-white leading-tight">{service.title}</h3>
                  <p className="text-neutral-400 leading-relaxed text-base">{service.description}</p>
               </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
