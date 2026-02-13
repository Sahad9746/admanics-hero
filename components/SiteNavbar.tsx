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
import { useState, useRef } from "react";
import { useLenis } from "lenis/react";
import { motion } from "framer-motion";
import { MegaMenu } from "@/components/MegaMenu";

import Link from "next/link";
import Image from "next/image";

export function SiteNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const isMenuHovered = useRef(false);
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
    { name: "About", link: "/about" },
    { name: "Services", link: "/services", hasMegaMenu: true },
    { name: "Contact", link: "/contact" },
    { name: "Blog", link: "/blog" },
  ];

  // ... (No change to desktop Render)

  return (
    <>
      <Navbar className="hidden lg:flex fixed top-6 z-50">
        <NavBody className="py-2 px-10 flex items-center justify-between overflow-visible">
          <div className="flex items-center gap-12">
            <Link href="/" className="hover:opacity-80 transition-opacity flex items-center shrink-0" onClick={(e) => handleScroll(e, "/#")}>
              <div className="h-10 w-48 relative flex items-center justify-start">
                <Image 
                  src="/admanics-logo-v2.png" 
                  alt="Admanics" 
                  fill 
                  className="object-contain object-left origin-left scale-[1.7]" 
                  priority 
                />
              </div>
            </Link>

          </div>
            <div className="flex items-center justify-start gap-8">
               {navItems.filter(item => item.name !== "Contact").map((item, idx) => (
                 item.hasMegaMenu ? (
                   <div
                     key={idx}
                     className="relative h-full flex items-center"
                     onMouseEnter={() => {
                        setIsMegaMenuOpen(true);
                     }}
                     onMouseLeave={() => {
                        setTimeout(() => {
                           if (!isMenuHovered.current) {
                              setIsMegaMenuOpen(false);
                           }
                        }, 200);
                     }}
                   >
                     <Link
                       href={item.link}
                       className="text-neutral-300 hover:text-white transition-colors text-sm font-medium px-4 py-2"
                     >
                       {item.name}
                     </Link>
                   </div>
                 ) : (
                   <Link
                     key={idx}
                     href={item.link}
                     onClick={(e) => handleScroll(e, item.link)}
                     className="text-neutral-300 hover:text-white transition-colors text-sm font-medium px-4 py-2"
                   >
                     {item.name}
                   </Link>
                 )
               ))}
            </div>

          <Link 
            href="/contact" 
            className="bg-white text-neutral-950 px-8 py-3 rounded-full font-bold text-sm hover:bg-neutral-200 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] cursor-pointer relative z-50 whitespace-nowrap leading-none flex items-center justify-center shrink-0"
          >
            Book Strategy
          </Link>
        </NavBody>
      </Navbar>
      
      <div 
        id="mega-menu-container"
        onMouseEnter={() => {
          setIsMegaMenuOpen(true);
          isMenuHovered.current = true;
        }}
        onMouseLeave={() => {
          setIsMegaMenuOpen(false);
          isMenuHovered.current = false;
        }}
      >
        <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
      </div>

      {/* Mobile Navbar */}
      <MobileNav className="lg:hidden !top-6 !inset-x-0 !max-w-full !p-0 overflow-hidden">
        <MobileNavHeader className="px-6 md:px-12 py-4 flex items-center justify-between">
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
          <div className="flex items-center">
            <Link href="/" onClick={(e) => handleScroll(e, "/#")}>
              <div className="h-14 w-44 relative overflow-hidden flex items-center justify-end">
                <Image 
                  src="/admanics-logo-v2.png" 
                  alt="Admanics" 
                  fill 
                  className="object-contain object-right origin-right scale-[1.6]" 
                />
              </div>
            </Link>
          </div>
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          headerContent={
            <div className="w-full flex items-center justify-center relative">
              <Link href="/" onClick={(e) => handleScroll(e, "/#")}>
                <div className="h-14 w-44 relative overflow-hidden flex items-center justify-center">
                  <Image 
                    src="/admanics-logo-v2.png" 
                    alt="Admanics" 
                    fill 
                    className="object-contain object-center scale-[1.6]" 
                  />
                </div>
              </Link>
            </div>
          }
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
