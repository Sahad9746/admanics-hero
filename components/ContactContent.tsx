"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Loader2, Send, Search, ChevronDown, X } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import WorldMap from "@/components/ui/world-map";
import { Footer } from "@/components/Footer";
import { useState, useEffect, useMemo } from "react";
import { sendContactEmail } from "@/app/actions/contact";
import { Button } from "@/components/ui/Button";
import Lottie from "lottie-react";
import { isValidPhoneNumber } from "libphonenumber-js";
import { AnimatePresence } from "framer-motion";

interface Country {
  name: string;
  code: string;
  flag: string;
  dial_code: string;
}

export function ContactContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<Record<string, string> | null>(null);
  const [successAnimation, setSuccessAnimation] = useState<any>(null);
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("+1");
  const [isCountryModalOpen, setIsCountryModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const selectedCountryData = useMemo(() => {
    return countries.find(c => c.dial_code === selectedCountry) || countries[0];
  }, [countries, selectedCountry]);

  // Dynamic Max Length: Specific lengths for common regions, default to 15 (E.164 max)
  const maxPhoneLength = useMemo(() => {
    if (!selectedCountryData) return 15;
    const code = selectedCountryData.code;
    const lengths: Record<string, number> = {
        'IN': 10, 'US': 10, 'GB': 10, 'AE': 9, 'SA': 10, 
        'QA': 8, 'OM': 8, 'KW': 8, 'BH': 8, 'DE': 11, 'FR': 9, 'AU': 9
    };
    return lengths[code] || 15;
  }, [selectedCountryData]);

  const filteredCountries = useMemo(() => {
    return countries.filter(c => 
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      c.dial_code.includes(searchQuery) ||
      c.code.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [countries, searchQuery]);

  useEffect(() => {
    // 1. Fetch Blue Themed Lottie (Stable Finsweet/Lottieflow CDN)
    fetch("https://cdn.prod.website-files.com/5d829bf092d4644f5c42e0ea/5def871cca4d3b3d86d6ee1b_Success-Pack9-smooth.json") 
      .then(res => res.json())
      .then(data => setSuccessAnimation(data))
      .catch(() => null);

    // 2. Fetch Countries from Public API (Optimized fields)
    const fetchCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all?fields=name,cca2,idd,flag");
        const data = await res.json();
        const formattedCountries = data
          .map((c: any) => ({
            name: c.name.common,
            code: c.cca2,
            flag: c.flag || "🏳️",
            dial_code: c.idd.root + (c.idd.suffixes ? c.idd.suffixes[0] : ""),
          }))
          .filter((c: any) => c.dial_code && !c.dial_code.includes("undefined"))
          .sort((a: any, b: any) => a.name.localeCompare(b.name));
        
        setCountries(formattedCountries);

        // 3. Detect User's Region (IP Based)
        try {
          const geoRes = await fetch("https://ipapi.co/json/");
          const geoData = await geoRes.json();
          if (geoData.country_code) {
            const matched = formattedCountries.find((c: Country) => c.code === geoData.country_code);
            if (matched) {
              setSelectedCountry(matched.dial_code);
            }
          }
        } catch (geoErr) {
          console.error("Geo-detection failed, using default", geoErr);
        }
      } catch (err) {
        console.error("Failed to fetch countries", err);
      }
    };

    fetchCountries();
  }, []);

  // Body Scroll Lock for Modal
  useEffect(() => {
    if (success || isCountryModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [success, isCountryModalOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const phone = formData.get("phone") as string;
    
    // Combine dial code + phone for validation
    const fullPhone = selectedCountry + phone;
    
    // Strict Validation: If phone is provided, check validity including length
    if (phone && !isValidPhoneNumber(fullPhone)) {
        setError({ phone: "Invalid phone number length for this country." });
        setIsSubmitting(false);
        return;
    }
    
    formData.set("phone", fullPhone);
    formData.set("countryCode", selectedCountry); // Ensure country code is sent correctly

    const result = await sendContactEmail(formData);

    if (result.success) {
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
      setPhoneValue(""); // Clear controlled phone state
    } else {
        if (typeof result.errors === 'object') {
            setError(result.errors);
        } else {
             setError({ form: result.error || "Something went wrong" });
        }
    }
    setIsSubmitting(false);
  };

  return (
    <div className="bg-neutral-950 min-h-screen w-full text-white font-sans selection:bg-neutral-800 selection:text-white flex flex-col pt-24 md:pt-32">
      <main className="flex-1 flex items-center justify-center py-12 px-4 md:px-12">
        
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
                            className="text-3xl md:text-7xl font-bold tracking-tight leading-tight"
                            as="h1"
                        />
                        <p className="text-lg md:text-xl text-neutral-400 mt-4 max-w-lg leading-relaxed font-medium">
                            Ready to deploy intelligent growth systems? Tell us about your infrastructure needs.
                        </p>
                    </div>


                    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg relative">
                        {/* Success Overlay - Fixed Center Screen */}
                        {success && (
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-6"
                            >
                                <motion.div 
                                    initial={{ scale: 0.9, y: 20 }}
                                    animate={{ scale: 1, y: 0 }}
                                    className="bg-neutral-900 border border-white/10 p-8 md:p-12 rounded-3xl max-w-md w-full flex flex-col items-center text-center shadow-2xl relative overflow-hidden"
                                >
                                    {/* Blue Glow Effect */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-500/20 blur-[100px] rounded-full pointing-events-none" />
                                    
                                    <div className="w-40 h-40 mb-6 relative z-10">
                                        {successAnimation ? (
                                            <Lottie animationData={successAnimation} loop={true} />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-blue-500/10 rounded-full">
                                                <Send className="w-16 h-16 text-blue-400" />
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-3 relative z-10">Message Sent</h3>
                                    <p className="text-neutral-400 mb-8 relative z-10">
                                        Our intelligence team has received your briefing. We will analyze your requirements and respond shortly.
                                    </p>
                                    <Button 
                                        type="button" 
                                        onClick={() => setSuccess(false)}
                                        className="bg-white text-black hover:bg-neutral-200 rounded-full px-10 py-4 font-bold text-lg w-full relative z-10"
                                    >
                                        Close
                                    </Button>
                                </motion.div>
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
                                className={`w-full bg-neutral-900/50 border ${error?.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-blue-500/50'} rounded-xl p-4 text-white focus:outline-none focus:ring-1 ${error?.name ? 'focus:ring-red-500/50' : 'focus:ring-blue-500/50'} transition-all placeholder:text-neutral-600 disabled:opacity-50`}
                                placeholder="Enter your name"
                            />
                            {error?.name && <p className="text-red-400 text-xs mt-1">{error.name}</p>}
                        </div>
                        
                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-bold uppercase tracking-widest text-neutral-500">Phone <span className="text-neutral-600 normal-case tracking-normal font-normal ml-1">(Optional)</span></label>
                            <div className="flex gap-2 sm:gap-4 relative">
                                {/* Custom Country Modal Trigger */}
                                <div className="relative">
                                    <button 
                                        type="button"
                                        onClick={() => setIsCountryModalOpen(true)}
                                        className="flex items-center justify-between gap-1 bg-neutral-900/50 border border-white/10 rounded-xl px-3 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all hover:bg-neutral-800/80 w-[100px] sm:w-[140px] shrink-0"
                                    >
                                        <span className="text-xl sm:text-2xl">{selectedCountryData?.flag || "🏳️"}</span>
                                        <span className="font-medium text-sm sm:text-base">{selectedCountry}</span>
                                        <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 text-neutral-500 transition-transform ${isCountryModalOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    
                                    <AnimatePresence>
                                        {isCountryModalOpen && (
                                            <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
                                                <motion.div 
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    onClick={() => setIsCountryModalOpen(false)}
                                                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                                                />
                                                <motion.div 
                                                    initial={{ scale: 0.95, opacity: 0, y: 10 }}
                                                    animate={{ scale: 1, opacity: 1, y: 0 }}
                                                    exit={{ scale: 0.95, opacity: 0, y: 10 }}
                                                    className="relative bg-neutral-900 border border-white/10 rounded-3xl w-full max-w-md overflow-hidden flex flex-col max-h-[80vh] shadow-2xl"
                                                >
                                                    <div className="p-4 border-b border-white/5 flex items-center gap-4 sticky top-0 bg-neutral-900 z-10">
                                                        <Search className="w-5 h-5 text-neutral-500" />
                                                        <input 
                                                            type="text" 
                                                            autoFocus
                                                            placeholder="Search country or code..."
                                                            value={searchQuery}
                                                            onChange={(e) => setSearchQuery(e.target.value)}
                                                            className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-neutral-600 p-2"
                                                        />
                                                        <button 
                                                            onClick={() => setIsCountryModalOpen(false)}
                                                            className="p-2 hover:bg-white/5 rounded-full transition-colors"
                                                        >
                                                            <X className="w-5 h-5 text-neutral-500" />
                                                        </button>
                                                    </div>
                                                    
                                                    <div className="flex-1 overflow-y-auto p-2 country-list-scrollbar">
                                                        {filteredCountries.length > 0 ? (
                                                            filteredCountries.map((country) => (
                                                                <button
                                                                    key={`${country.code}-${country.dial_code}`}
                                                                    type="button"
                                                                    onClick={() => {
                                                                        setSelectedCountry(country.dial_code);
                                                                        setIsCountryModalOpen(false);
                                                                        setSearchQuery("");
                                                                    }}
                                                                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${selectedCountry === country.dial_code ? 'bg-blue-500/10 text-white' : 'hover:bg-white/5 text-neutral-400 hover:text-white'}`}
                                                                >
                                                                    <div className="flex items-center gap-4">
                                                                        <span className="text-2xl">{country.flag}</span>
                                                                        <span className="font-medium text-sm text-left">{country.name}</span>
                                                                    </div>
                                                                    <span className="text-neutral-500 font-mono text-sm">{country.dial_code}</span>
                                                                </button>
                                                            ))
                                                        ) : (
                                                            <div className="p-8 text-center text-neutral-600">
                                                                <p>No results for &quot;{searchQuery}&quot;</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            </div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <input 
                                    type="tel" 
                                    name="phone" 
                                    id="phone"
                                    value={phoneValue}
                                    onChange={(e) => {
                                        // Numeric only
                                        const val = e.target.value.replace(/\D/g, "");
                                        if (val.length <= maxPhoneLength) {
                                            setPhoneValue(val);
                                        }
                                    }}
                                    inputMode="numeric"
                                    disabled={isSubmitting}
                                    className={`flex-1 min-w-0 bg-neutral-900/50 border ${error?.phone ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-blue-500/50'} rounded-xl p-4 text-white focus:outline-none focus:ring-1 ${error?.phone ? 'focus:ring-red-500/50' : 'focus:ring-blue-500/50'} transition-all placeholder:text-neutral-600 disabled:opacity-50`}
                                    placeholder="Phone number"
                                />
                            </div>
                            {error?.phone && <p className="text-red-400 text-xs mt-1">{error.phone}</p>}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-neutral-500">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email"
                                required
                                disabled={isSubmitting}
                                className={`w-full bg-neutral-900/50 border ${error?.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-blue-500/50'} rounded-xl p-4 text-white focus:outline-none focus:ring-1 ${error?.email ? 'focus:ring-red-500/50' : 'focus:ring-blue-500/50'} transition-all placeholder:text-neutral-600 disabled:opacity-50`}
                                placeholder="Enter your email"
                            />
                            {error?.email && <p className="text-red-400 text-xs mt-1">{error.email}</p>}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-neutral-500">Requirements</label>
                            <textarea 
                                name="message" 
                                id="message"
                                required
                                rows={4}
                                disabled={isSubmitting}
                                className={`w-full bg-neutral-900/50 border ${error?.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-blue-500/50'} rounded-xl p-4 text-white focus:outline-none focus:ring-1 ${error?.message ? 'focus:ring-red-500/50' : 'focus:ring-blue-500/50'} transition-all placeholder:text-neutral-600 resize-none disabled:opacity-50`}
                                placeholder="Tell us about your project..."
                            />
                            {error?.message && <p className="text-red-400 text-xs mt-1">{error.message}</p>}
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

                        {/* General Error (if any, separate from fields) */}
                        {typeof error === 'string' && error && (
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
                        className="w-full rounded-[2.5rem] overflow-hidden relative border border-white/5 bg-neutral-900/20 h-[500px] lg:h-auto lg:aspect-square flex items-center justify-center"
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
                            <div className="bg-neutral-950/80 backdrop-blur-xl p-6 rounded-3xl border border-white/10 space-y-6">
                                {/* Email */}
                                <div className="group flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-white/5 group-hover:bg-blue-500/20 transition-colors">
                                        <Mail className="w-5 h-5 text-neutral-400 group-hover:text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">Email</h3>
                                        <a href="mailto:contact@admanics.com" className="text-base sm:text-lg font-bold text-white hover:text-blue-400 transition-colors block break-all sm:break-normal">
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
                                        <a href="tel:9900454378" className="text-base sm:text-lg font-bold text-white hover:text-blue-400 transition-colors block">
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
                                        <p className="text-sm text-white font-medium mb-1">Banglore India</p>
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
