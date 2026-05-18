"use client";

import { useState, useEffect, useRef } from "react";

interface CampusSlotProps {
    title: string;
    images: string[];
    interval?: number;
    delay?: number;
    className?: string;
    labelSize?: "sm" | "lg";
}

export function CampusSlot({ title, images, interval = 6000, delay = 0, className = "", labelSize = "sm" }: CampusSlotProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);
    const [showNext, setShowNext] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (images.length <= 1) return;

        const cycle = () => {
            // Prepare the next image underneath
            setNextIndex((prev) => (prev + 1) % images.length);

            // Start crossfade
            setShowNext(true);

            // After the crossfade completes, swap layers
            timeoutRef.current = setTimeout(() => {
                setActiveIndex((prev) => (prev + 1) % images.length);
                setShowNext(false);
            }, 1500); // matches CSS transition duration
        };

        // Start cycling after staggered delay
        const startTimer = setTimeout(() => {
            cycle(); // trigger first cycle
            intervalRef.current = setInterval(cycle, interval);
        }, delay);

        return () => {
            clearTimeout(startTimer);
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [images.length, interval, delay]);

    return (
        <div className={`relative overflow-hidden ${className}`} style={{ transform: "translate3d(0, 0, 0)" }}>
            {/* Base layer — current image (always visible) */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                    backgroundImage: `url('${images[activeIndex]}')`,
                    transform: "translate3d(0, 0, 0)"
                }}
            />

            {/* Crossfade layer — next image fades in on top */}
            {images.length > 1 && (
                <div
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out"
                    style={{
                        backgroundImage: `url('${images[nextIndex]}')`,
                        opacity: showNext ? 1 : 0,
                        willChange: "opacity",
                        transform: "translate3d(0, 0, 0)"
                    }}
                />
            )}

            {/* Bottom gradient for label readability */}
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/60 to-transparent z-[1]" />

            {/* Title label */}
            <div className={`absolute bottom-0 left-0 right-0 z-[2] ${labelSize === "lg" ? "p-5 sm:p-6" : "p-3 sm:p-4"}`}>
                <p className={`text-white font-bold drop-shadow-lg ${labelSize === "lg" ? "text-base sm:text-lg" : "text-xs sm:text-sm"}`}>
                    {title}
                </p>
            </div>
        </div>
    );
}
