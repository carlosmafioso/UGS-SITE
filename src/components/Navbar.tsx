"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar({ activePage }: { activePage?: string }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const navLinks = [
        { label: "Sobre nós", href: "/sobre" },
        { label: "Cursos", href: "/cursos" },
        { label: "Notícias", href: "/noticias" },
        { label: "Vida no Campus", href: "/campus" },
        { label: "Contacto", href: "/contacto" },
        { label: "AEUGS", href: "/aeugs" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center justify-center transition-opacity hover:opacity-80 shrink-0">
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
                            className={`text-sm transition-colors whitespace-nowrap ${activePage === link.href
                                ? "text-primary font-bold"
                                : "text-slate-600 font-semibold hover:text-primary"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <Link href="/student-portal" className="hidden sm:block">
                        <button className="bg-institutional text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 hover:bg-slate-800 transition-colors">
                            <span className="material-symbols-outlined text-base sm:text-lg">login</span>
                            Portal do Aluno
                        </button>
                    </Link>

                    {/* Mobile Hamburger */}
                    <button
                        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-100 transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Abrir menu"
                    >
                        <span className="material-symbols-outlined text-2xl text-institutional">
                            {mobileOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    mobileOpen ? "max-h-[500px] border-t border-slate-100" : "max-h-0"
                }`}
            >
                <nav className="flex flex-col px-4 py-4 bg-white shadow-lg">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className={`py-3 px-4 rounded-lg text-sm font-semibold transition-colors ${
                                activePage === link.href
                                    ? "text-primary bg-primary/5 font-bold"
                                    : "text-slate-700 hover:text-primary hover:bg-slate-50"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    {/* Portal do Aluno button for mobile */}
                    <div className="mt-3 pt-3 border-t border-slate-100 sm:hidden">
                        <Link href="/student-portal" onClick={() => setMobileOpen(false)}>
                            <button className="w-full bg-institutional text-white px-5 py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors">
                                <span className="material-symbols-outlined text-lg">login</span>
                                Portal do Aluno
                            </button>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}
