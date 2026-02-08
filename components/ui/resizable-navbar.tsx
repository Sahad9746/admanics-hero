"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

import React, { useRef, useState } from "react";
import { useLenis } from "lenis/react";


interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  headerContent?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
      className={cn("sticky inset-x-0 top-20 z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{
        backdropFilter: visible ? "blur(24px)" : "blur(8px)",
        boxShadow: visible
          ? "0 0 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05) inset"
          : "0 0 0 1px rgba(255, 255, 255, 0.03) inset",
        width: visible ? "45%" : "100%",
        y: visible ? 20 : 0,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 30,
      }}
      style={{
        minWidth: visible ? "800px" : "100%",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden flex-row items-center justify-between self-start rounded-full bg-neutral-950/20 px-8 py-3 lg:flex transition-colors duration-500",
        visible && "bg-neutral-950/40 border border-white/5",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const lenis = useLenis();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    if (onItemClick) onItemClick();
    
    if (link.startsWith("/#") && window.location.pathname === "/") {
      e.preventDefault();
      const targetId = link.replace("/", "");
      lenis?.scrollTo(targetId);
    }
  };

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-6 text-base font-bold tracking-tight transition duration-200 lg:flex",
        className,
      )}
    >
      <AnimatePresence>
        {items.map((item, idx) => (
          <motion.a
            key={`link-${idx}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            onMouseEnter={() => setHovered(idx)}
            onClick={(e) => handleScroll(e, item.link)}
            className="relative px-6 py-3 text-neutral-400 hover:text-white transition-colors duration-300 flex items-center justify-center leading-none"
            href={item.link}
          >
            {hovered === idx && (
              <motion.div
                layoutId="hovered-nav"
                className="absolute inset-0 h-full w-full rounded-full bg-blue-500/10 border border-blue-500/20"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-20">{item.name}</span>
          </motion.a>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "fixed top-4 inset-x-4 z-50 mx-auto flex flex-col items-center justify-between bg-transparent py-2 lg:hidden transition-all duration-300",
        visible && "bg-neutral-950/60 backdrop-blur-md border border-white/10 shadow-lg px-4 rounded-[2rem]",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  headerContent,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className={cn(
            "fixed inset-0 top-0 left-0 z-[100] h-screen w-screen flex flex-col items-center bg-neutral-950/95 backdrop-blur-2xl px-8 shadow-2xl overflow-hidden",
            className,
          )}
        >
          {headerContent && (
            <div className="w-full pt-10 pb-6 flex items-center justify-between">
              {headerContent}
              <IconX className="text-white w-8 h-8 cursor-pointer hover:scale-110 transition-transform" onClick={onClose} />
            </div>
          )}
          <div className="flex-1 flex flex-col items-center justify-center gap-8 w-full">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-white w-8 h-8" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-white w-8 h-8" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <img
        src="https://assets.aceternity.com/logo-dark.png"
        alt="logo"
        width={30}
        height={30}
      />
      <span className="font-medium text-black dark:text-white">Startup</span>
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: any;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-lg text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-md hover:shadow-blue-500/20",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-md",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
