"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Maximize, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface CustomVideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
}

export function CustomVideoPlayer({ src, poster, className, autoPlay = false }: CustomVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize
  useEffect(() => {
    if (autoPlay && videoRef.current) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {
        // Autoplay prevented
        setIsPlaying(false);
      });
    }
  }, [autoPlay]);

  // Handle Play/Pause
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Handle Time Update
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration;
    
    setCurrentTime(current);
    setDuration(total);
    setProgress((current / total) * 100);
  };

  // Handle Seeking
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !containerRef.current) return;
    
    // Get the bounding rectangle of the progress bar
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const percent = Math.min(Math.max(0, x / width), 1);
    
    videoRef.current.currentTime = percent * videoRef.current.duration;
  };

  // Handle Fullscreen
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  // Handle Volume
  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Format Time
  const formatTime = (seconds: number) => {
    if (!seconds) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Controls Visibility
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    
    if (isPlaying) {
        controlsTimeoutRef.current = setTimeout(() => {
            setShowControls(false);
        }, 2000); // Hide after 2 seconds of inactivity
    }
  };

  return (
    <div 
        ref={containerRef}
        className={cn("relative group bg-black rounded-xl overflow-hidden aspect-video", className)}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => isPlaying && setShowControls(false)}
    >
        {/* Video Element */}
        <video
            ref={videoRef}
            src={src}
            poster={poster}
            className="w-full h-full object-contain"
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
            onClick={togglePlay}
        />

        {/* Big Play Button Overlay (when paused) */}
        {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] transition-opacity">
                <button 
                    onClick={togglePlay}
                    className="w-20 h-20 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:scale-110 transition-transform duration-300 group-hover:bg-white/20"
                >
                    <Play className="w-8 h-8 text-white ml-1 fill-white" />
                </button>
            </div>
        )}

        {/* Controls Bar */}
        <AnimatePresence>
            {showControls && (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent"
                >
                    {/* Progress Bar */}
                    <div 
                        className="relative w-full h-1.5 bg-white/20 rounded-full cursor-pointer group/progress mb-4 hover:h-2 transition-all"
                        onClick={handleSeek}
                    >
                        {/* Progress Fill - THEME GRADIENT */}
                        <div 
                            className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-[#7c3aed] to-[#06b6d4]"
                            style={{ width: `${progress}%` }}
                        />
                        {/* Thumb */}
                        <div 
                            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg opacity-0 group-hover/progress:opacity-100 transition-opacity"
                            style={{ left: `${progress}%` }}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button onClick={togglePlay} className="text-white hover:text-cyan-400 transition-colors">
                                {isPlaying ? <Pause className="w-6 h-6 fill-white" /> : <Play className="w-6 h-6 fill-white" />}
                            </button>
                            
                            <button onClick={toggleMute} className="text-white hover:text-cyan-400 transition-colors">
                                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                            </button>

                            <span className="text-xs font-medium text-white/80 tabular-nums">
                                {formatTime(currentTime)} / {formatTime(duration)}
                            </span>
                        </div>

                        <button onClick={toggleFullscreen} className="text-white hover:text-cyan-400 transition-colors">
                            <Maximize className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  );
}
