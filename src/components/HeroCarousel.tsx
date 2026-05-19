"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/banner-slogan-2048x1157.jpg",
  "/images/campus-ugs-entrada.jpg"
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-institutional">
      <div className="absolute inset-0 bg-gradient-to-r from-institutional/90 via-institutional/40 to-transparent z-10 pointer-events-none"></div>
      
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.08 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.5, ease: "easeInOut" },
            scale: { duration: 5, ease: "linear" }
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`UGS Hero Banner ${currentIndex + 1}`}
            fill
            sizes="100vw"
            priority={true}
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Controladores do Carrossel */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-primary w-8" : "bg-white/50 w-2 hover:bg-white"
            }`}
            aria-label={`Ir para a imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
