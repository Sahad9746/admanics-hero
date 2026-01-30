"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import WorldMap from "@/components/ui/world-map";
import { Footer } from "@/components/Footer";

export function ContactContent() {
  return (
    <div className="bg-neutral-950 min-h-screen w-full text-white font-sans selection:bg-neutral-800 selection:text-white flex flex-col">
      <main className="flex-1 flex items-center justify-center py-24 px-4 md:px-8">
        
        <div className="max-w-7xl w-full mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                
                {/* Left Column: Contact Details */}
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col items-start gap-8 mb-8">
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-sm font-bold tracking-widest uppercase text-neutral-500 block"
                        >
                            Connect
                        </motion.span>
                        
                        <GradientText
                            words="Get in touch"
                            className="text-4xl md:text-5xl lg:text-6xl"
                            as="h1"
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg text-neutral-400 mb-8 max-w-lg"
                    >
                        Let&apos;s talk about your growth strategy.
                    </motion.p>

                    <div className="space-y-8">
                        {/* Email */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="group"
                        >
                            <div className="flex items-center gap-3 mb-1 text-neutral-500 group-hover:text-white transition-colors">
                                <Mail className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">Email</h3>
                            <a href="mailto:hello@admanics.com" className="text-base font-medium text-neutral-300 hover:text-white transition-all">
                                hello@admanics.com
                            </a>
                        </motion.div>

                        {/* Phone */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="group"
                        >
                            <div className="flex items-center gap-3 mb-1 text-neutral-500 group-hover:text-white transition-colors">
                                <Phone className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">Phone</h3>
                            <a href="tel:+18442362642" className="text-base font-medium text-neutral-300 hover:text-white transition-all">
                                +1 (844) 236-2642
                            </a>
                        </motion.div>

                        {/* Office */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="group"
                        >
                            <div className="flex items-center gap-3 mb-1 text-neutral-500 group-hover:text-white transition-colors">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">Office</h3>
                            <p className="text-base text-neutral-300 mb-2">
                                Sydney, NSW 2000, Australia
                            </p>
                            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold text-white hover:text-neutral-300 transition-colors uppercase tracking-wider">
                                Get directions <ArrowRight className="w-3 h-3 ml-1" />
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Right Column: World Map Vector */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: "circOut" }}
                    className="h-full w-full rounded-3xl overflow-hidden relative flex items-center justify-center min-h-[400px]"
                >
                    <WorldMap
                      dots={[
                        {
                          start: { lat: -33.8688, lng: 151.2093 }, // Sydney
                          end: { lat: 34.0522, lng: -118.2437 }, // LA
                        },
                        {
                          start: { lat: -33.8688, lng: 151.2093 }, // Sydney
                          end: { lat: 51.5074, lng: -0.1278 }, // London
                        },
                        {
                          start: { lat: -33.8688, lng: 151.2093 }, // Sydney
                          end: { lat: 25.2048, lng: 55.2708 }, // Dubai
                        },
                         {
                          start: { lat: -33.8688, lng: 151.2093 }, // Sydney
                          end: { lat: 1.3521, lng: 103.8198 }, // Singapore
                        },
                      ]}
                      lineColor="#ffffff" 
                    />
                </motion.div>

            </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
