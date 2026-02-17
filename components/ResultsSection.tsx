"use client";

import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { BarChart, Settings, Workflow, Video, Shield, Zap } from "lucide-react";
import { CTA } from "@/components/CTA";

const tools = [
  {
    name: "Brand24",
    category: "ORM & Sentiment",
    description:
      "Real-time AI monitoring of brand mentions across the web to protect your reputation.",
    icon: Shield,
  },
  {
    name: "Zoho CRM",
    category: "Full-Funnel Sales",
    description:
      "Centralized lead management and automated sales pipelines for peak ROI tracking.",
    icon: BarChart,
  },
  {
    name: "Zapier",
    category: "Automation Layer",
    description:
      "Connecting your entire marketing stack to automate repetitive tasks and data flow.",
    icon: Zap,
  },
  {
    name: "Adobe Premiere Pro",
    category: "Media Production",
    description:
      "Professional-grade video editing for high-conversion social media advertisements.",
    icon: Video,
  },
  {
    name: "DaVinci Resolve",
    category: "Color & Motion",
    description:
      "Cinema-quality color grading and motion graphics for premium brand storytelling.",
    icon: Settings,
  },
  {
    name: "Ads Manager",
    category: "Performance Ads",
    description:
      "Advanced data-driven placement systems for Meta and Google performance marketing.",
    icon: Workflow,
  },
];

export function ResultsSection() {
  return (
    <section className="bg-neutral-950 section-padding px-6 md:px-12 font-sans text-white border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-end text-right gap-8 md:gap-10 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-end gap-4 md:gap-6"
          >
            <span className="text-label text-neutral-500">
              Technology Stack
            </span>
            <GradientText words="Growth Systems" className="text-heading-xl" />
          </motion.div>
          <p className="text-body-xl text-neutral-400 max-w-3xl">
            We don&apos;t just use software; we build intelligent systems. Our
            stack is engineered to ensure every campaign is tracked, every brand
            is protected, and every piece of content converts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 1 }}
            >
              <CardSpotlight className="card-padding rounded-[2rem] md:rounded-[2.5rem] border border-white/5 bg-neutral-900/20 backdrop-blur-md flex flex-col items-start gap-6 h-full group">
                <div className="relative z-20 w-full">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-8 md:mb-10 text-white group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all">
                    <tool.icon size={22} className="md:w-[24px] md:h-[24px]" />
                  </div>
                  <span className="text-label text-neutral-500 mb-3 md:mb-4 block">
                    {tool.category}
                  </span>
                  <h3 className="text-heading-md mb-3 md:mb-4 text-white group-hover:text-blue-500 transition-colors uppercase">
                    {tool.name}
                  </h3>
                  <p className="text-neutral-400 text-sm md:text-lg leading-relaxed font-medium">
                    {tool.description}
                  </p>
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 md:mt-32">
          <CTA
            title="Ready to automate <br class='hidden md:block' /> your growth?"
            description="Join 50+ brands scaling with our Intelligent Systems."
            buttonText="Book Strategy Call"
            buttonLink="/contact"
          />
        </div>
      </div>
    </section>
  );
}
