"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Loader2, Send } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import WorldMap from "@/components/ui/world-map";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { sendContactEmail } from "@/app/actions/contact";
import { Button } from "@/components/ui/Button";

export function ContactContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const result = await sendContactEmail(formData);

    if (result.success) {
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } else {
      setError(result.error || "Something went wrong. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="bg-neutral-950 min-h-screen w-full text-white font-sans selection:bg-neutral-800 selection:text-white flex flex-col pt-24 md:pt-32">
      <main className="flex-1 flex items-center justify-center py-12 px-6 md:px-12">
        
        <div className="max-w-7xl w-full mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                
                {/* Left Column: Form & Header */}
                <div className="flex flex-col justify-center order-2 lg:order-1">
                    <div className="flex flex-col items-start gap-6 mb-12">
                        <div className="flex items-center gap-4">
                           <div className="w-8 md:w-12 h-px bg-blue-500" />
                           <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-neutral-500">
                             Connect
                           </span>
                        </div>
                        
                        <GradientText
                            words="Start Your Transformation"
                            className="text-4xl md:text-7xl font-bold tracking-tight leading-tight"
                            as="h1"
                        />
                        <p className="text-lg md:text-xl text-neutral-400 mt-4 max-w-lg leading-relaxed font-medium">
                            Ready to deploy intelligent growth systems? Tell us about your infrastructure needs.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg relative">
                        {/* Success Overlay */}
                        {success && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="absolute inset-0 bg-neutral-950/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center text-center p-6 rounded-2xl border border-green-500/30"
                            >
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                                    <Send className="w-8 h-8 text-green-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-neutral-400 mb-6">We&apos;ll be in touch with you shortly.</p>
                                <Button 
                                    type="button" 
                                    onClick={() => setSuccess(false)}
                                    className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-3 font-bold"
                                >
                                    Send Another
                                </Button>
                            </motion.div>
                        )}

                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-neutral-500">Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name"
                                required
                                disabled={isSubmitting}
                                className="w-full bg-neutral-900/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-neutral-600 disabled:opacity-50"
                                placeholder="Enter your name"
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-bold uppercase tracking-widest text-neutral-500">Phone</label>
                            <input 
                                type="tel" 
                                name="phone" 
                                id="phone"
                                required
                                disabled={isSubmitting}
                                className="w-full bg-neutral-900/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-neutral-600 disabled:opacity-50"
                                placeholder="Enter your phone number"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-neutral-500">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email"
                                required
                                disabled={isSubmitting}
                                className="w-full bg-neutral-900/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-neutral-600 disabled:opacity-50"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-neutral-500">Requirements</label>
                            <textarea 
                                name="message" 
                                id="message"
                                required
                                rows={4}
                                disabled={isSubmitting}
                                className="w-full bg-neutral-900/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-neutral-600 resize-none disabled:opacity-50"
                                placeholder="Tell us about your project..."
                            />
                        </div>

                        <div className="pt-4">
                            <Button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="w-full bg-white text-black hover:bg-neutral-200 rounded-full py-4 text-lg font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Inquiry <Send className="w-5 h-5" />
                                    </>
                                )}
                            </Button>
                        </div>

                        {error && (
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium text-center"
                            >
                                {error}
                            </motion.div>
                        )}
                    </form>
                </div>

                {/* Right Column: Contact Details & Map */}
                <div className="flex flex-col gap-12 order-1 lg:order-2">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="w-full rounded-[2.5rem] overflow-hidden relative border border-white/5 bg-neutral-900/20 aspect-video lg:aspect-square flex items-center justify-center"
                    >
                         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950/80 z-10 pointer-events-none" />
                        <WorldMap
                          dots={[
                            { start: { lat: -33.8688, lng: 151.2093 }, end: { lat: 34.0522, lng: -118.2437 } }, // Sydney -> LA
                            { start: { lat: -33.8688, lng: 151.2093 }, end: { lat: 51.5074, lng: -0.1278 } }, // Sydney -> London
                            { start: { lat: -33.8688, lng: 151.2093 }, end: { lat: 25.2048, lng: 55.2708 } }, // Sydney -> Dubai
                             { start: { lat: -33.8688, lng: 151.2093 }, end: { lat: 1.3521, lng: 103.8198 } }, // Sydney -> Singapore
                          ]}
                          lineColor="#3b82f6" 
                        />
                        <div className="absolute bottom-8 left-8 right-8 z-20">
                            <div className="bg-neutral-950/80 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/10 space-y-6">
                                {/* Email */}
                                <div className="group flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-white/5 group-hover:bg-blue-500/20 transition-colors">
                                        <Mail className="w-5 h-5 text-neutral-400 group-hover:text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">Email</h3>
                                        <a href="mailto:contact@admanics.com" className="text-lg font-bold text-white hover:text-blue-400 transition-colors block">
                                            contact@admanics.com
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="group flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-white/5 group-hover:bg-blue-500/20 transition-colors">
                                        <Phone className="w-5 h-5 text-neutral-400 group-hover:text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">Phone</h3>
                                        <a href="tel:9900454378" className="text-lg font-bold text-white hover:text-blue-400 transition-colors block">
                                            9900454378
                                        </a>
                                    </div>
                                </div>

                                {/* Office */}
                                <div className="group flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-white/5 group-hover:bg-blue-500/20 transition-colors">
                                        <MapPin className="w-5 h-5 text-neutral-400 group-hover:text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">Office</h3>
                                        <p className="text-sm text-white font-medium mb-1">Banglore India nn itta m madhi</p>
                                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 uppercase tracking-wider mt-2">
                                            Get Directions <ArrowRight className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
