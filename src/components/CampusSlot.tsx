"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CampusSlotProps {
    title: string;
    images: string[];
    interval?: number;
    delay?: number;
    className?: string;
    labelSize?: "sm" | "lg";
}

export function CampusSlot({ title, images, interval = 6000, delay = 0, className = "", labelSize = "sm" }: CampusSlotProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        // Start cycling after staggered delay
        const startTimer = setTimeout(() => {
            const timer = setInterval(() => {
                setIndex((prev) => (prev + 1) % images.length);
            }, interval);
            return () => clearInterval(timer);
        }, delay);

        return () => clearTimeout(startTimer);
    }, [images.length, interval, delay]);

    const activeImage = images[index];

    return (
        <div className={`relative overflow-hidden group/slot cursor-pointer ${className}`} style={{ transform: "translate3d(0, 0, 0)" }}>
            {/* Animated Images with Framer Motion (Ken Burns Effect) */}
            <AnimatePresence initial={false}>
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1.15 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        opacity: { duration: 1.8, ease: "easeInOut" },
                        scale: { duration: interval / 1000 + 1.8, ease: "linear" }
                    }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${activeImage}')` }}
                />
            </AnimatePresence>

            {/* Bottom gradient for label readability */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-[1] pointer-events-none transition-opacity duration-500 group-hover/slot:from-black/95" />

            {/* Title label with slide-up effect */}
            <div className={`absolute bottom-0 left-0 right-0 z-[2] pointer-events-none ${labelSize === "lg" ? "p-6 sm:p-8" : "p-4 sm:p-5"}`}>
                <div className="transform translate-y-1 group-hover/slot:translate-y-0 transition-transform duration-500">
                    <p className={`text-white font-extrabold drop-shadow-lg leading-tight tracking-wide ${labelSize === "lg" ? "text-lg sm:text-xl md:text-2xl" : "text-sm sm:text-base"}`}>
                        {title}
                    </p>
                    {/* Decorative underline appearing on hover */}
                    <div className="h-0.5 w-0 group-hover/slot:w-16 bg-primary mt-2 transition-all duration-500 rounded-full" />
                </div>
            </div>
            
            {/* Outer border glow highlight on hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover/slot:border-primary/40 rounded-2xl z-[3] pointer-events-none transition-colors duration-500" />
        </div>
    );
}

