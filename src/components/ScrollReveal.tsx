"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

export type AnimationVariant = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale-up" | "none";

interface ScrollRevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    className?: string;
    variant?: AnimationVariant;
}

const revealVariants: Record<AnimationVariant, Variants> = {
    "fade-up": {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    },
    "fade-down": {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    },
    "fade-left": {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
    },
    "fade-right": {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    },
    "scale-up": {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    },
    "none": {
        hidden: {},
        visible: {},
    }
};

export const ScrollReveal = ({
    children,
    width = "100%",
    delay = 0,
    className,
    variant = "fade-up",
}: ScrollRevealProps) => {
    return (
        <motion.div
            className={className}
            variants={revealVariants[variant]}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.4, delay, ease: "easeOut" }}
            style={{ width }}
        >
            {children}
        </motion.div>
    );
};
