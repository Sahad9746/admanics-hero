"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { useLenis } from "lenis/react";
import { motion } from "framer-motion";


import Link from "next/link";
import Image from "next/image";

export function SiteNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    setIsMobileMenuOpen(false);
    if (link.startsWith("/#") && window.location.pathname === "/") {
        e.preventDefault();
        const targetId = link.replace("/", "");
        lenis?.scrollTo(targetId);
    }
  };

  const navItems = [
    { name: "About", link: "/#about" },

    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
    { name: "FAQ", link: "/#faq" },
  ];

  // ... (No change to desktop Render)

  return (
    <>
      <Navbar className="hidden lg:flex fixed top-6 z-50">
        <NavBody className="py-3 px-10">
          <div className="flex items-center gap-2 relative z-50">
            <Link href="/" className="hover:opacity-80 transition-opacity" onClick={(e) => handleScroll(e, "/#")}>
              <div className="h-16 w-56 relative overflow-hidden flex items-center justify-start">
                <Image 
                  src="/admanics-logo-v2.png" 
                  alt="Admanics" 
                  fill 
                  className="object-contain object-left origin-left scale-125" 
                  priority 
                />
              </div>
            </Link>
          </div>
          <NavItems items={navItems.filter(item => item.name !== "Contact")} /> 
          <Link 
            href="/contact" 
            className="hidden lg:block bg-white text-neutral-950 px-8 py-3 rounded-full font-bold text-base hover:bg-neutral-200 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] cursor-pointer relative z-50"
          >
            Contact
          </Link>
        </NavBody>
      </Navbar>

      {/* Mobile Navbar */}
      <MobileNav className="lg:hidden">
        <MobileNavHeader className="px-2">
          <div className="flex items-center gap-2">
            <Link href="/" onClick={(e) => handleScroll(e, "/#")}>
              <div className="h-14 w-48 relative overflow-hidden flex items-center justify-start">
                <Image src="/admanics-logo-v2.png" alt="Admanics" fill className="object-contain object-left origin-left scale-110" />
              </div>
            </Link>
          </div>
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
            <div className="flex flex-col items-center gap-12 w-full">
              {navItems.map((item, idx) => (
                  <motion.a 
                      key={idx} 
                      href={item.link} 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="text-4xl md:text-5xl font-bold tracking-tighter text-white hover:text-blue-500 transition-colors"
                      onClick={(e: React.MouseEvent) => handleScroll(e as any, item.link)}
                  >
                      {item.name}
                  </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="mt-8 flex flex-col items-center gap-6"
              >
                <span className="text-xs font-bold tracking-[0.5em] uppercase text-neutral-500">Connect with us</span>
                <div className="flex gap-8">
                  {["Instagram", "LinkedIn", "Facebook"].map((social) => (
                    <span key={social} className="text-sm font-bold text-white/50 hover:text-white transition-colors cursor-pointer">{social}</span>
                  ))}
                </div>
              </motion.div>
            </div>
        </MobileNavMenu>
      </MobileNav>
    </>
  );
}
