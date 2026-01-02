"use client";

import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-neutral-950 py-12 px-4 font-sans text-white border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          {/* Logo */}
          <div className="h-24 w-64 relative overflow-hidden flex items-center justify-center">
              <Image src="/logo.png" alt="Admanics" fill className="object-contain scale-[3]" />
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8">
            {[
              { name: "About", link: "/#about" },

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
            <a href="#" className="text-white hover:text-neutral-400 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-neutral-900 w-full mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-neutral-500">
            <span>&copy; 2025 Admanics. All rights reserved.</span>

        </div>

      </div>
    </footer>
  );
}
