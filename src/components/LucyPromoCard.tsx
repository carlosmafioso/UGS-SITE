"use client";

import Image from "next/image";
import { triggerLucyChat } from "@/lib/lucy";

interface LucyPromoCardProps {
    className?: string;
    onOpenChat?: () => void;
}

export function LucyPromoCard({ className = "", onOpenChat }: LucyPromoCardProps) {
    const handleClick = () => {
        if (onOpenChat) {
            onOpenChat();
        } else {
            triggerLucyChat();
        }
    };

    return (
        <div
            onClick={handleClick}
            className={`relative rounded-[2.5rem] bg-gradient-to-b from-slate-50 to-white p-3 sm:p-4 shadow-2xl border-[0.5px] border-slate-200/50 transform hover:scale-[1.03] transition-all duration-500 animate-float group cursor-pointer ${className}`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    handleClick();
                }
            }}
            aria-label="Abrir conversa com LUCY AI"
        >
            <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] blur-xl group-hover:bg-primary/20 group-hover:blur-2xl transition-all duration-500"></div>

            {/* Inner Image Wrapper */}
            <div className="relative rounded-[2rem] overflow-hidden bg-institutional aspect-[4/5] flex items-end justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-institutional via-institutional/40 to-transparent z-10 opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
                <Image
                    src="/images/lucy.png"
                    alt="LUCY AI - Assistente Virtual AEUGS"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 576px"
                    className="object-cover relative z-0 transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Floating Glass UI Element */}
                <div className="absolute bottom-6 left-5 right-5 z-20 transform group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4 hover:bg-white/20 transition-colors shadow-xl">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(242,127,13,0.5)] group-hover:shadow-[0_0_25px_rgba(242,127,13,0.8)] transition-shadow duration-300">
                            <span className="material-symbols-outlined text-white animate-pulse">smart_toy</span>
                        </div>
                        <div>
                            <h4 className="text-white font-bold tracking-wide">LUCY</h4>
                            <p className="text-white/80 text-xs flex items-center gap-1.5 font-medium mt-0.5">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                Online agora
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function LucyChatButton({
    text = "Falar com a LUCY",
    className = "",
}: {
    text?: string;
    className?: string;
}) {
    return (
        <button
            type="button"
            onClick={() => triggerLucyChat()}
            className={
                className ||
                "mt-8 px-8 py-4 bg-institutional text-white rounded-xl font-bold shadow-xl shadow-institutional/20 hover:-translate-y-1 hover:bg-slate-800 transition-all flex items-center gap-2 group"
            }
        >
            {text}
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                smart_toy
            </span>
        </button>
    );
}
