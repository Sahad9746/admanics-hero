"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  className?: string;
}

export function CTA({
  title,
  description,
  buttonText,
  buttonLink,
  className,
}: CTAProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "relative p-10 md:p-20 rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-br from-blue-500/10 to-transparent border border-white/10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 overflow-hidden group",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(59,130,246,0.1),_transparent_70%)] pointer-events-none" />

      <div className="flex flex-col gap-4 md:gap-6 relative z-10 text-center md:text-left">
        <h4 className="text-heading-lg text-white" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="text-lg md:text-xl text-neutral-400 font-medium max-w-xl">
          {description}
        </p>
      </div>
      <Link href={buttonLink} className="w-full md:w-auto relative z-10">
        <Button className="w-full md:w-auto bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-4 md:px-12 md:py-6 text-lg md:text-xl font-bold shadow-2xl transition-all hover:scale-105 active:scale-95 whitespace-nowrap">
          {buttonText}
        </Button>
      </Link>
    </motion.div>
  );
}
