"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "/images/banner-slogan-2048x1157.jpg",
    "/images/campus-ugs-entrada.jpg",
];

export function HeroCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const goTo = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-institutional">
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-institutional/90 via-institutional/50 to-transparent z-10 pointer-events-none" />

            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={{
                        enter: (d: number) => ({
                            opacity: 0,
                            scale: 1.05,
                            x: d > 0 ? 40 : -40,
                        }),
                        center: {
                            opacity: 1,
                            scale: 1.08,
                            x: 0,
                        },
                        exit: (d: number) => ({
                            opacity: 0,
                            scale: 1,
                            x: d > 0 ? -40 : 40,
                        }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        opacity: { duration: 1.2, ease: "easeInOut" },
                        scale: { duration: 6, ease: "linear" },
                        x: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] },
                    }}
                    className="absolute inset-0"
                >
                    <Image
                        src={images[currentIndex]}
                        alt={`UGS Hero Banner ${currentIndex + 1}`}
                        fill
                        sizes="100vw"
                        priority={currentIndex === 0}
                        className="object-cover object-center"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goTo(index)}
                        className={`h-2 rounded-full transition-all duration-500 ease-out ${
                            index === currentIndex
                                ? "bg-primary w-8 shadow-[0_0_8px_rgba(242,127,13,0.6)]"
                                : "bg-white/40 w-2 hover:bg-white/70"
                        }`}
                        aria-label={`Ir para a imagem ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
