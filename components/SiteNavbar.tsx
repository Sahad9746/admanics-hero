"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { useLenis } from "lenis/react";

import Link from "next/link";

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
    { name: "Services", link: "/#services" },
    { name: "Promise", link: "/#promise" },
    { name: "Contact", link: "/contact" },
    { name: "FAQ", link: "/#faq" },
  ];

  // ... (No change to desktop Render)

  return (
    <>
      {/* Desktop Navbar */}
      <Navbar className="hidden lg:flex fixed top-4 z-50">
        <NavBody>
          <div className="flex items-center gap-2 relative z-50">
            <Link href="/#" className="font-bold text-xl text-white hover:opacity-80 transition-opacity" onClick={(e) => handleScroll(e as any, "/#")}>
              Admanics
            </Link>
          </div>
          <NavItems items={navItems.filter(item => item.name !== "Contact")} /> 
          <Link 
            href="/contact" 
            className="hidden lg:block bg-neutral-100 text-neutral-950 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer relative z-50"
          >
            Contact
          </Link>

        </NavBody>
      </Navbar>

      {/* Mobile Navbar */}
      <MobileNav className="lg:hidden fixed top-4 z-50">
        <MobileNavHeader>
          <div className="flex items-center gap-2">
            <Link href="/#" className="font-bold text-xl text-white" onClick={(e) => handleScroll(e as any, "/#")}>
              Admanics
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
            {navItems.map((item, idx) => (
                <a 
                    key={idx} 
                    href={item.link} 
                    className="text-lg font-medium py-2 border-b border-gray-800 w-full text-white"
                    onClick={(e) => handleScroll(e, item.link)}
                >
                    {item.name}
                </a>
            ))}

        </MobileNavMenu>
      </MobileNav>
    </>
  );
}
