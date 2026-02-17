"use client";

import { Service } from "@/constants/services";
import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
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
  MessageSquare,
  ArrowLeft,
  CheckCircle2,
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
  MessageSquare,
};

interface ServiceDetailProps {
  service: Service;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  const Icon = iconMap[service.iconName] || BarChart3;

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans py-24 px-4 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Services
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 text-black shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <Icon size={32} strokeWidth={2} />
            </div>

            <motion.span className="text-label text-neutral-500 mb-4 block">
              System Module
            </motion.span>

            <GradientText
              words={service.title}
              className="text-heading-lg mb-6"
            />

            <p className="text-body-lg text-neutral-400 mb-10 max-w-xl">
              {service.detailedContent}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-12">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-neutral-300"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <CheckCircle2
                      size={14}
                      className="text-blue-500 shrink-0"
                    />
                  </div>
                  <span className="text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full bg-white text-black hover:bg-neutral-200 rounded-full px-10 py-7 text-lg font-bold transition-all hover:scale-[1.02] active:scale-[0.98]">
                  Book a Strategy Call
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full border-white/10 hover:bg-white/5 rounded-full px-10 py-7 text-lg font-bold transition-all"
                >
                  Request Demo
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative aspect-square lg:aspect-auto lg:h-[650px] rounded-[2.5rem] overflow-hidden border border-white/10 bg-neutral-900/40 backdrop-blur-sm group"
          >
            {service.image ? (
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center p-12 overflow-hidden bg-gradient-to-br from-blue-500/5 via-neutral-900 to-purple-500/5">
                <Icon
                  size={400}
                  strokeWidth={0.5}
                  className="text-white/[0.03] absolute -bottom-20 -right-20 rotate-12"
                />
                <div className="relative z-10 text-center">
                  <div className="relative inline-block mb-10">
                    <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full" />
                    <Icon
                      size={140}
                      strokeWidth={1}
                      className="text-white/30 relative z-10"
                    />
                  </div>
                  <p className="text-label text-neutral-500">
                    Intelligent Infrastructure
                  </p>
                </div>
              </div>
            )}

            {/* Glassmorphic Overlay Card */}
            <div className="absolute bottom-10 left-10 right-10 p-8 rounded-3xl bg-neutral-900/60 backdrop-blur-xl border border-white/10 shadow-2xl">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                  Module Active
                </span>
              </div>
              <h4 className="text-lg font-bold mb-2">Automated Optimization</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                This system module is precision-engineered for maximum
                scalability and real-time ROI optimization.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
