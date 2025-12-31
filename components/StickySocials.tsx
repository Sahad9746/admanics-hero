"use client";

import { Facebook, Instagram, Linkedin } from "lucide-react";

export function StickySocials() {
  return (
    <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-8 mix-blend-difference">
      {/* Line above */}
      {/* <div className="w-px h-24 bg-white/50" /> */}

      <div className="flex flex-col gap-12 items-center">
         <a 
            href="#" 
            className="text-white text-[10px] font-bold tracking-[0.2em] hover:text-neutral-400 transition-colors uppercase"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
         >
            Instagram
         </a>
         <a 
            href="#" 
            className="text-white text-[10px] font-bold tracking-[0.2em] hover:text-neutral-400 transition-colors uppercase"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
         >
            LinkedIn
         </a>
         <a 
            href="#" 
            className="text-white text-[10px] font-bold tracking-[0.2em] hover:text-neutral-400 transition-colors uppercase"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
         >
            Facebook
         </a>
      </div>

      {/* Line below */}
      {/* <div className="w-px h-24 bg-white/50" /> */}
    </div>
  );
}
