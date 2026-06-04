"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar({ activePage }: { activePage?: string }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navLinks = [
        { label: "Sobre nós", href: "/sobre" },
        { label: "Cursos", href: "/cursos" },
        { label: "Notícias", href: "/noticias" },
        { label: "Vida no Campus", href: "/campus" },
        { label: "Contacto", href: "/contacto" },
        { label: "AEUGS", href: "/aeugs" },
    ];

    return (
        <header
            className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
                scrolled
                    ? "bg-white/95 backdrop-blur-md border-slate-200 shadow-md shadow-slate-900/5"
                    : "bg-white border-slate-100 shadow-sm"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
                <Link
                    href="/"
                    className="flex items-center justify-center transition-opacity hover:opacity-80 shrink-0"
                >
                    <Image
                        src="/images/novo-logo.png"
                        alt="UGS Logo"
                        width={300}
                        height={80}
                        className="h-10 sm:h-14 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`relative text-sm whitespace-nowrap group transition-colors duration-200 ${
                                activePage === link.href
                                    ? "text-primary font-bold"
                                    : "text-slate-600 font-semibold hover:text-primary"
                            }`}
                        >
                            {link.label}
                            {/* animated underline */}
                            <span
                                className={`absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                                    activePage === link.href
                                        ? "w-full"
                                        : "w-0 group-hover:w-full"
                                }`}
                            />
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <Link href="/student-portal" className="hidden sm:block">
                        <button className="bg-institutional text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 hover:bg-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
                            <span className="material-symbols-outlined text-base sm:text-lg">
                                login
                            </span>
                            Portal do Aluno
                        </button>
                    </Link>

                    {/* Mobile Hamburger */}
                    <button
                        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-100 transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Abrir menu"
                    >
                        <motion.span
                            key={mobileOpen ? "close" : "menu"}
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            transition={{ duration: 0.2 }}
                            className="material-symbols-outlined text-2xl text-institutional"
                        >
                            {mobileOpen ? "close" : "menu"}
                        </motion.span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence initial={false}>
                {mobileOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="lg:hidden overflow-hidden border-t border-slate-100"
                    >
                        <nav className="flex flex-col px-4 py-4 bg-white shadow-lg">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05, duration: 0.25 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className={`block py-3 px-4 rounded-lg text-sm font-semibold transition-colors ${
                                            activePage === link.href
                                                ? "text-primary bg-primary/5 font-bold"
                                                : "text-slate-700 hover:text-primary hover:bg-slate-50"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}

                            {/* Portal do Aluno button for mobile */}
                            <div className="mt-3 pt-3 border-t border-slate-100 sm:hidden">
                                <Link
                                    href="/student-portal"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    <button className="w-full bg-institutional text-white px-5 py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-primary transition-colors">
                                        <span className="material-symbols-outlined text-lg">
                                            login
                                        </span>
                                        Portal do Aluno
                                    </button>
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
