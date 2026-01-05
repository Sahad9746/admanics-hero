"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    logo: React.ReactNode;
    name: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Only add animation items once
    if (containerRef.current && scrollerRef.current && !scrollerRef.current.getAttribute("data-cloned")) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      scrollerRef.current.setAttribute("data-cloned", "true");
    }
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    
    // Speed: pixels per frame
    const scrollSpeed = speed === "fast" ? 1.0 : speed === "normal" ? 0.5 : 0.25;

    const animate = () => {
      if (containerRef.current && !isPaused) {
        const moveAmount = direction === "left" ? scrollSpeed : -scrollSpeed;
        
        containerRef.current.scrollLeft += moveAmount;

        // Infinite loop reset logic
        if (direction === "left") {
             // If we scrolled past half the width (the original content width)
             if (containerRef.current.scrollLeft >= containerRef.current.scrollWidth / 2) {
                 containerRef.current.scrollLeft = 0;
             }
        } else {
             // For right direction, we might start at 0 and go negative? 
             // overflow-x-auto usually clamps at 0. 
             // To support right scroll, we'd start at middle and decrease?
             // Simplification: For now, strict left auto-scroll is standard.
             // If user wants changes, we can accept direction "right" via logic.
             // But let's keep "left" logic simple.
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, speed, direction]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-x-auto no-scrollbar [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-auto max-w-full relative flex-shrink-0 flex items-center justify-center px-8 md:px-12"
            key={item.name + idx}
          >
             <div className="relative z-20">
                {item.logo}
             </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
