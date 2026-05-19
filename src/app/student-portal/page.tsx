"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function StudentPortalPage() {
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const features = [
        {
            icon: "grade",
            title: "Notas e Faltas",
            desc: "Acompanhe o seu desempenho académico em tempo real.",
            color: "bg-primary/10 text-primary",
        },
        {
            icon: "calendar_month",
            title: "Calendário Académico",
            desc: "Exames, feriados e datas importantes do semestre.",
            color: "bg-blue-50 text-institutional",
        },
        {
            icon: "local_library",
            title: "Biblioteca Digital",
            desc: "Milhares de títulos e periódicos científicos à sua disposição.",
            color: "bg-emerald-50 text-emerald-600",
        },
        {
            icon: "support_agent",
            title: "Serviços ao Aluno",
            desc: "Requerimentos, declarações e suporte administrativo.",
            color: "bg-purple-50 text-purple-600",
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-display text-slate-900 flex flex-col">
            {/* Top Navigation Bar */}
            <header className="bg-white border-b border-slate-100 shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
                        <Image
                            src="/images/novo-logo.png"
                            alt="UGS Logo"
                            width={260}
                            height={70}
                            className="h-10 sm:h-12 w-auto object-contain"
                            priority
                        />
                    </Link>
                    <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500">
                        <Link href="/sobre" className="hover:text-primary transition-colors">Institucional</Link>
                        <Link href="/candidatura" className="hover:text-primary transition-colors">Admissões</Link>
                        <Link href="/noticias" className="hover:text-primary transition-colors">Notícias</Link>
                        <Link href="/campus" className="hover:text-primary transition-colors">Biblioteca</Link>
                    </nav>
                    <Link href="/contacto" className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-bold hover:bg-slate-200 transition-colors">
                        <span className="material-symbols-outlined text-base">help</span>
                        Suporte
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center px-4 py-8 sm:py-12">
                <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    
                    {/* Login Form Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 sm:p-10 max-w-md mx-auto lg:mx-0 w-full">
                            <div className="mb-8">
                                <h1 className="text-2xl sm:text-3xl font-extrabold text-institutional tracking-tight mb-2">
                                    Portal do Aluno
                                </h1>
                                <p className="text-slate-500 text-sm font-medium">
                                    Acesse a sua vida académica com segurança.
                                </p>
                            </div>

                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                                        ID do Aluno ou Email
                                    </label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
                                            person
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Ex: 20250723"
                                            className="w-full h-12 pl-11 pr-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-semibold text-slate-800 placeholder:text-slate-400"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                                        Senha
                                    </label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
                                            lock
                                        </span>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            className="w-full h-12 pl-11 pr-12 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-semibold text-slate-800 placeholder:text-slate-400"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-lg">
                                                {showPassword ? "visibility_off" : "visibility"}
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <label className="flex items-center gap-2 cursor-pointer select-none">
                                        <button
                                            type="button"
                                            onClick={() => setRememberMe(!rememberMe)}
                                            className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                                                rememberMe
                                                    ? "bg-primary border-primary"
                                                    : "border-slate-300 hover:border-slate-400"
                                            }`}
                                        >
                                            {rememberMe && (
                                                <span className="material-symbols-outlined text-white text-sm">check</span>
                                            )}
                                        </button>
                                        <span className="text-sm text-slate-600 font-medium">Lembrar acesso</span>
                                    </label>
                                    <a href="#" className="text-sm font-bold text-primary hover:text-orange-600 transition-colors">
                                        Esqueci a senha?
                                    </a>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full h-12 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:bg-orange-600 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                                >
                                    Entrar no Portal
                                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                </button>
                            </form>

                            <p className="mt-6 text-center text-sm text-slate-500 font-medium">
                                Novo aluno?{" "}
                                <Link href="/candidatura" className="text-primary font-bold hover:text-orange-600 transition-colors">
                                    Saiba como ativar seu acesso
                                </Link>
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Side — Info Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-institutional tracking-tight leading-tight mb-4">
                                Sua jornada académica,{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                                    simplificada.
                                </span>
                            </h2>
                            <p className="text-slate-500 text-base sm:text-lg font-medium leading-relaxed max-w-lg">
                                Acesse notas, calendários de exames, bibliotecas digitais e tudo o que precisa para a excelência académica na UGS.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                                    className="group bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
                                >
                                    <div className={`w-10 h-10 rounded-xl ${feature.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                                        <span className="material-symbols-outlined text-xl">{feature.icon}</span>
                                    </div>
                                    <h3 className="font-bold text-institutional text-sm mb-1">{feature.title}</h3>
                                    <p className="text-xs text-slate-500 leading-relaxed">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Security Badge */}
                        <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl p-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-primary">verified_user</span>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-institutional">Acesso Seguro</h4>
                                <p className="text-xs text-slate-500 font-medium">
                                    Seus dados são protegidos por criptografia de ponta a ponta.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t border-slate-100 bg-white py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <p className="text-xs text-slate-400 font-medium">
                        © 2026 Universidade Gregório Semedo. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-6 text-xs text-slate-400 font-medium">
                        <a href="#" className="hover:text-slate-600 transition-colors">Privacidade</a>
                        <a href="#" className="hover:text-slate-600 transition-colors">Termos de Uso</a>
                        <a href="#" className="hover:text-slate-600 transition-colors">Suporte Técnico</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
