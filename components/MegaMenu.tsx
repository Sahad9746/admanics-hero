"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { services, pillarMetadata } from "@/constants/services";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const pillars = ["Marketing", "ORM" ,"Production"] as const;

  const getServicesByPillar = (pillar: typeof pillars[number]) => {
    return services.filter((service) => service.pillar === pillar);
  };

  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName] as LucideIcon;
    return IconComponent || Icons.Box;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Mega Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 top-20 pt-8 z-40"
            onMouseLeave={onClose}
          >
             <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative">
              <div className="bg-neutral-900/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden mt-2 relative">
                
                {/* Close Button */}
                <button 
                  onClick={onClose}
                  className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-all cursor-pointer"
                  aria-label="Close menu"
                >
                  <Icons.X className="w-5 h-5" />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-8">
                  {/* Hero Section */}
                  <div className="lg:col-span-1 flex flex-col justify-center p-6 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl border border-white/5">
                    <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                      Building Strong Capabilities to Empower Your Brand
                    </h3>
                    <Link
                      href="/services"
                      onClick={onClose}
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors group"
                    >
                      Go to overview
                      <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Pillars */}
                  <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((pillar) => {
                      const pillarServices = getServicesByPillar(pillar);
                      const metadata = pillarMetadata[pillar];

                      return (
                        <div key={pillar} className="space-y-4">
                          {/* Pillar Header */}
                          <div className="pb-3 border-b border-white/10">
                            <Link
                              href={`/services/${metadata.slug}`}
                              onClick={onClose}
                              className="group"
                            >
                              <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
                                {pillar}
                                <Icons.ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                              </h4>
                              <p className="text-xs text-neutral-400 mt-1">
                                {metadata.outcome}
                              </p>
                            </Link>
                          </div>

                          {/* Services List */}
                          <ul className="space-y-3">
                            {pillarServices.map((service) => {
                              const Icon = getIcon(service.iconName);
                              return (
                                <li key={service.slug}>
                                  <Link
                                    href={`/services/${service.slug}`}
                                    onClick={onClose}
                                    className="group flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
                                  >
                                    <div className="mt-0.5 text-blue-400/70 group-hover:text-blue-400 transition-colors">
                                      <Icon className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <p className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                                        {service.title}
                                      </p>
                                      <p className="text-xs text-neutral-500 line-clamp-1">
                                        {service.tagline}
                                      </p>
                                    </div>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
