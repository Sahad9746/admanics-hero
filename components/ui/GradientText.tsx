"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import { cn } from "@/lib/utils";

export const GradientText = ({
  words,
  className,
  as: Component = "h2", // Default to h2 for semantic headings, can be overridden
}: {
  words: React.ReactNode;
  className?: string;
  as?: any;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  
  const MotionComponent = useMemo(() => motion(Component), [Component]);

  return (
    <MotionComponent
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "text-gradient font-bold tracking-tight leading-tight pb-2",
        className
      )}
    >
      {words}
    </MotionComponent>
  );
};
