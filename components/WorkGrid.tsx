"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { CustomVideoPlayer } from './CustomVideoPlayer';
import { urlFor } from '@/sanity/lib/image';
import { cn } from '@/lib/utils';

interface WorkItem {
    _id: string;
    title: string;
    slug: { current: string };
    client?: string;
    category?: string;
    videoUrl: string;
    thumbnail: any;
    description?: string;
    orientation?: 'landscape' | 'portrait';
}

export default function WorkGrid({ works }: { works: WorkItem[] }) {
    const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

    return (
        <>
            {/* Masonry Grid using CSS Columns */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 pb-32">
                {works.map((work, index) => {
                    const isPortrait = work.orientation === 'portrait';

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
                                        src={typeof work.thumbnail === 'string' ? work.thumbnail : urlFor(work.thumbnail).url()}
                                        alt={work.title}
                                        width={800}
                                        height={isPortrait ? 1422 : 450} // Aspect ratio hints
                                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
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
                                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest border border-cyan-400/30 bg-cyan-400/10 px-2 py-1 rounded-full backdrop-blur-sm">
                                        {work.category || 'Project'}
                                    </span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400 transition-colors">
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
            <AnimatePresence>
                {selectedWork && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-10"
                        onClick={() => setSelectedWork(null)}
                    >
                        <button 
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedWork(null);
                            }}
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div 
                            className={cn(
                                "relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/10 border border-white/10",
                                selectedWork.orientation === 'portrait' 
                                    ? "h-full max-h-[90vh] aspect-[9/16]" 
                                    : "w-full max-w-6xl aspect-video"
                            )}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <CustomVideoPlayer 
                                src={selectedWork.videoUrl} 
                                poster={typeof selectedWork.thumbnail === 'string' ? selectedWork.thumbnail : urlFor(selectedWork.thumbnail).url()} 
                                autoPlay 
                                className={selectedWork.orientation === 'portrait' ? "h-full w-full object-cover" : ""}
                            />
                        </div>
                        
                        <div className="absolute bottom-10 left-10 text-white pointer-events-none hidden md:block">
                            <h2 className="text-3xl font-bold mb-2">{selectedWork.title}</h2>
                            <p className="text-neutral-400">{selectedWork.client} — {selectedWork.category}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
