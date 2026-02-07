"use client";

import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { 
  BarChart, 
  Settings, 
  Workflow, 
  Video, 
  Shield, 
  Zap 
} from "lucide-react";

const tools = [
  {
    name: "Brand24",
    category: "ORM & Sentiment",
    description: "Real-time AI monitoring of brand mentions across the web to protect your reputation.",
    icon: Shield,
  },
  {
    name: "Zoho CRM",
    category: "Full-Funnel Sales",
    description: "Centralized lead management and automated sales pipelines for peak ROI tracking.",
    icon: BarChart,
  },
  {
    name: "Zapier",
    category: "Automation Layer",
    description: "Connecting your entire marketing stack to automate repetitive tasks and data flow.",
    icon: Zap,
  },
  {
    name: "Adobe Premiere Pro",
    category: "Media Production",
    description: "Professional-grade video editing for high-conversion social media advertisements.",
    icon: Video,
  },
  {
    name: "DaVinci Resolve",
    category: "Color & Motion",
    description: "Cinema-quality color grading and motion graphics for premium brand storytelling.",
    icon: Settings,
  },
  {
    name: "Ads Manager",
    category: "Performance Ads",
    description: "Advanced data-driven placement systems for Meta and Google performance marketing.",
    icon: Workflow,
  }
];

export function ResultsSection() {
  return (
    <section className="bg-neutral-950 py-32 px-4 font-sans text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-end text-right gap-6 mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-neutral-500"
          >
            Technology
          </motion.span>
          <GradientText 
            words="Industry-Leading Tools for Automated Growth"
            className="text-4xl md:text-6xl max-w-4xl"
          />
          <p className="text-neutral-400 max-w-2xl text-lg mt-4 leading-relaxed">
            We don&apos;t just use software; we build intelligent systems. Our stack is engineered to ensure every campaign is tracked, every brand is protected, and every piece of content converts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <CardSpotlight className="p-8 rounded-2xl border-white/5 bg-neutral-900/30 flex flex-col items-start gap-4">
                <div className="relative z-20">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 text-white">
                    <tool.icon size={20} />
                  </div>
                  <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 block">
                    {tool.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-white">{tool.name}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2">
            <h4 className="text-2xl font-bold">Ready to automate your growth?</h4>
            <p className="text-neutral-400">Join 50+ brands scaling with our Intelligent Systems.</p>
          </div>
          <Link href="/contact" className="w-full md:w-auto">
            <Button className="w-full md:w-auto bg-white text-black hover:bg-neutral-200 rounded-full px-10 py-6 text-lg font-bold">
              Book a Strategy Call
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
