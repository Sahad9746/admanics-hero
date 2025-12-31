"use client";

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-950 py-12 px-4 font-sans text-white border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          {/* Logo */}
          <div className="h-12 w-48 relative overflow-hidden flex items-center justify-center -ml-4">
              <img src="/logo.png" alt="Admanics" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400%] w-auto max-w-none object-contain" />
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8">
            {[
              { name: "About", link: "/#about" },
              { name: "Solutions", link: "/#solutions" },
              { name: "Services", link: "/#services" },
              { name: "Promise", link: "/#promise" },
              { name: "Contact", link: "/contact" },
              { name: "FAQ", link: "/#faq" }
            ].map((item) => (
              <a 
                key={item.name} 
                href={item.link} 
                className="text-sm font-semibold text-white hover:text-neutral-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-white hover:text-neutral-400 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-white hover:text-neutral-400 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-white hover:text-neutral-400 transition-colors"><Twitter size={20} /></a> 
            {/* Note: 'X' icon usually replaced by Twitter icon in Lucide or custom SVG. Using Twitter for now or X specific if available/custom. Lucide has 'X' icon? No, but Twitter is standard fallback or 'X' char. Let's use Twitter icon for simplicity or X text. Screenshot shows X logo. Lucide might not have X logo yet. Let's use Twitter icon as placeholder or an X text. Check lucide availability. Lucide v0.4+ has X? Actually let's use Twitter icon but maybe call it X visually? No, let's just use icons available. Screenshot shows Facebook, Instagram, X, LinkedIn, Youtube. */}
            <a href="#" className="text-white hover:text-neutral-400 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-white hover:text-neutral-400 transition-colors"><Youtube size={20} /></a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-neutral-900 w-full mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-neutral-500">
            <span>&copy; 2025 Admanics. All rights reserved.</span>
            <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors underline decoration-neutral-800 underline-offset-4">Privacy policy</a>
                <a href="#" className="hover:text-white transition-colors underline decoration-neutral-800 underline-offset-4">Terms of service</a>
                <a href="#" className="hover:text-white transition-colors underline decoration-neutral-800 underline-offset-4">Cookie settings</a>
            </div>
        </div>

      </div>
    </footer>
  );
}
