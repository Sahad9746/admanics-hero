"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { GradientText } from "@/components/ui/GradientText";

export default function ContactPage() {
  return (
    <div className="bg-neutral-950 min-h-screen w-full text-white font-sans selection:bg-neutral-800 selection:text-white flex flex-col">
      <main className="flex-1 flex items-center justify-center pt-24 pb-12 px-4 md:px-8">
        
        <div className="max-w-7xl w-full mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                
                {/* Left Column: Contact Details */}
                <div className="flex flex-col justify-center">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xs md:text-sm font-bold tracking-widest uppercase text-neutral-500 mb-4 block"
                    >
                        Connect
                    </motion.span>
                    
                    <GradientText
                        words="Get in touch"
                        className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
                        as="h1" // Semantic h1 for page title
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg text-neutral-400 mb-10 max-w-lg"
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

                {/* Right Column: Image */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: "circOut" }}
                    className="h-[50vh] lg:h-[80vh] w-full rounded-3xl overflow-hidden relative"
                >
                    <div className="absolute inset-0 bg-neutral-900 animate-pulse" />
                    <img 
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                        alt="Admanics Office Building" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                </motion.div>

            </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
