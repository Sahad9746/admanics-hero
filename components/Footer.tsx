"use client";

import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-neutral-950 py-24 px-6 md:px-12 font-sans text-white border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,_rgba(59,130,246,0.05),_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
          {/* Logo */}
          <div className="h-16 w-56 relative overflow-hidden flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 mb-8 md:mb-0">
            <Image
              src="/admanics-logo-v2.png"
              alt="Admanics"
              fill
              className="object-contain object-center"
            />
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-12">
            {[
              { name: "About", link: "/#about" },
              { name: "Services", link: "/services" },
              { name: "Contact", link: "/contact" },
              { name: "FAQ", link: "/#faq" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-label text-neutral-500 hover:text-white transition-all transform hover:scale-110"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-8">
            <a
              href="https://www.facebook.com/share/1AHvaKahvD/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/5 bg-white/5 text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/admanics.io?igsh=MWxpOHRhd2dlOXZnYQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/5 bg-white/5 text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/admanics/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/5 bg-white/5 text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 w-full mb-12" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-label text-neutral-600">
          <span>&copy; 2025 Admanics System Architect.</span>
          <div className="flex gap-8">
            <a
              href="/privacy"
              className="hover:text-neutral-400 cursor-pointer transition-colors"
            >
              Privacy Policy
            </a>
            <span className="hover:text-neutral-400 transition-colors">
              System Status: Optimal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
