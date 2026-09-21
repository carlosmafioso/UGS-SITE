"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const slides = [
    {
        src: "/images/banner-slogan-2048x1157.jpg",
        alt: "Universidade Gregório Semedo - Excelência e Inovação",
    },
    {
        src: "/images/campus-ugs-entrada.jpg",
        alt: "Campus Universitário da Universidade Gregório Semedo",
    },
];

export function HeroCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const startTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 6500);
    };

    useEffect(() => {
        startTimer();
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    const goTo = (index: number) => {
        setCurrentIndex(index);
        startTimer();
    };

    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-institutional" id="hero-carousel-container">
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-institutional/95 via-institutional/65 to-transparent z-10 pointer-events-none" />

            {/* Seamless Infinite Cross-Fade Images */}
            {slides.map((slide, index) => {
                const isActive = index === currentIndex;
                return (
                    <motion.div
                        key={slide.src}
                        id={`hero-slide-${index}`}
                        className="absolute inset-0 pointer-events-none"
                        initial={false}
                        animate={{
                            opacity: isActive ? 1 : 0,
                            scale: isActive ? 1.05 : 1,
                        }}
                        transition={{
                            opacity: {
                                duration: 2.2, // slow and smooth cross-fade
                                ease: "easeInOut",
                            },
                            scale: {
                                duration: 8,
                                ease: "easeOut",
                            },
                        }}
                    >
                        <Image
                            src={slide.src}
                            alt={slide.alt}
                            fill
                            sizes="100vw"
                            priority={index === 0}
                            className="object-cover object-center"
                        />
                    </motion.div>
                );
            })}

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2" id="hero-carousel-dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        id={`hero-dot-${index}`}
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

