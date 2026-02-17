"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { CustomVideoPlayer } from "./CustomVideoPlayer";
import { urlFor } from "@/sanity/lib/image";
import { cn } from "@/lib/utils";

interface WorkItem {
  _id: string;
  title: string;
  slug: { current: string };
  client?: string;
  category?: string;
  videoUrl?: string;
  videoFile?: any; // Sanity file asset
  thumbnail: any;
  description?: string;
  orientation?: "landscape" | "portrait";
}

export default function WorkGrid({ works }: { works: WorkItem[] }) {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [bgColor, setBgColor] = useState<string>("#7c3aed");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (selectedWork) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
      setBgColor("#7c3aed"); // Reset color when modal closes
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, [selectedWork]);

  const getVideoSource = (work: WorkItem) => {
    if (work.videoUrl) return work.videoUrl;
    if (work.videoFile?.asset?.url) return work.videoFile.asset.url;
    return "";
  };

  const handleColorExtract = (color: string) => {
    setBgColor(color);
  };


  return (
    <>
      {/* Masonry Grid using CSS Columns */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 pb-32">
        {works.map((work, index) => {
          const isPortrait = work.orientation === "portrait";

          return (
            <motion.div
              key={work._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "10%" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid group relative w-full cursor-pointer rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 hover:border-white/20 transition-all duration-500"
              onClick={() => setSelectedWork(work)}
            >
              {/* Image / Thumbnail - Let height be natural */}
              <div className="relative w-full">
                {work.thumbnail && (
                  <Image
                    src={
                      typeof work.thumbnail === "string"
                        ? work.thumbnail
                        : urlFor(work.thumbnail).url()
                    }
                    alt={work.title}
                    width={800}
                    height={isPortrait ? 1422 : 450} // Aspect ratio hints
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                )}

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Play Button (Centered & Subtle) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 transform scale-75 group-hover:scale-100 transition-transform">
                    <Play className="w-5 h-5 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>

              {/* Content Overlay (Bottom) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-label text-cyan-400 border border-cyan-400/30 bg-cyan-400/10 px-2 py-1 rounded-full backdrop-blur-sm">
                    {work.category || "Project"}
                  </span>
                </div>
                <h3 className="text-heading-md text-white capitalize leading-tight mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400 transition-colors">
                  {work.title}
                </h3>
                {work.client && (
                  <p className="text-sm text-neutral-400 font-medium">
                    {work.client}
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Video Modal */}
      {mounted && createPortal(
        <AnimatePresence>
          {selectedWork && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                background: `radial-gradient(circle at center, ${bgColor}15 0%, #000000 70%)`,
                transition: 'background 1s ease',
              }}
              className="fixed top-0 left-0 right-0 bottom-0 z-[9999] backdrop-blur-xl overflow-hidden w-screen h-screen flex items-center justify-center"
              onClick={() => setSelectedWork(null)}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedWork(null);
                }}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Centered Video Player Container */}
              <div className="w-full h-full flex items-center justify-center p-4">
                <div
                  className={cn(
                    "relative overflow-hidden shadow-2xl shadow-purple-500/10 rounded-xl border border-white/20",
                    selectedWork.orientation === "portrait"
                      ? "h-[85vh] w-auto aspect-[9/16] max-w-[90vw]"
                      : "w-full max-w-5xl aspect-video max-h-[85vh]",
                  )}
                  onClick={(e) => e.stopPropagation()}
                >
                  <CustomVideoPlayer
                    src={getVideoSource(selectedWork)}
                    poster={
                      typeof selectedWork.thumbnail === "string"
                        ? selectedWork.thumbnail
                        : urlFor(selectedWork.thumbnail).url()
                    }
                    autoPlay
                    onColorExtract={handleColorExtract}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Details - Bottom Left Corner */}
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white pointer-events-none z-40 max-w-md">
                <h2 className="text-xl md:text-3xl font-bold mb-2 drop-shadow-lg">
                  {selectedWork.title}
                </h2>
                <p className="text-sm md:text-base text-neutral-300 drop-shadow-lg">
                  {selectedWork.client}{" "}
                  {selectedWork.client && selectedWork.category && "—"}{" "}
                  {selectedWork.category}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
