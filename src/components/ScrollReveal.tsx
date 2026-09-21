"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

export type AnimationVariant =
    | "fade-up"
    | "fade-down"
    | "fade-left"
    | "fade-right"
    | "scale-up"
    | "none";

interface ScrollRevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
    className?: string;
    variant?: AnimationVariant;
    amount?: number;
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
        hidden: { opacity: 0, x: 24 },
        visible: { opacity: 1, x: 0 },
    },
    "fade-right": {
        hidden: { opacity: 0, x: -24 },
        visible: { opacity: 1, x: 0 },
    },
    "scale-up": {
        hidden: { opacity: 0, scale: 0.96, y: 10 },
        visible: { opacity: 1, scale: 1, y: 0 },
    },
    "none": {
        hidden: {},
        visible: {},
    },
};

export const ScrollReveal = ({
    children,
    width = "100%",
    delay = 0,
    duration = 0.45,
    className,
    variant = "fade-up",
    amount = 0.05,
}: ScrollRevealProps) => {
    return (
        <motion.div
            className={className}
            variants={revealVariants[variant]}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount, margin: "0px 0px -20px 0px" }}
            transition={{
                duration,
                delay: Math.min(delay, 0.25),
                ease: [0.16, 1, 0.3, 1], // refined ease-out curve
            }}
            style={{ width }}
        >
            {children}
        </motion.div>
    );
};
