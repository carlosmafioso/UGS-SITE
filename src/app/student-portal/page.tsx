"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function StudentPortalPage() {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [idInput, setIdInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeTab, setActiveTab] = useState<"inicio" | "notas" | "calendario" | "pagamentos" | "servicos">("inicio");


    // Document Requests State
    const [requests, setRequests] = useState([
        { id: "REQ-0938", type: "Declaração de Matrícula (Simples)", date: "02/06/2026", status: "Concluído", download: true },
        { id: "REQ-0824", type: "Histórico Académico Parcial", date: "28/05/2026", status: "Concluído", download: true }
    ]);
    const [selectedService, setSelectedService] = useState("Declaração de Matrícula (Simples)");
    const [requestNotes, setRequestNotes] = useState("");
    const [requestSuccess, setRequestSuccess] = useState(false);

    // Sync theme on mount
    useEffect(() => {
        const isDark = document.documentElement.classList.contains("dark");
        setTheme(isDark ? "dark" : "light");
    }, []);

    const toggleTheme = () => {
        const nextTheme = theme === "light" ? "dark" : "light";
        setTheme(nextTheme);
        if (nextTheme === "dark") {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        } else {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
        }
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage("");

        if (!idInput.trim()) {
            setErrorMessage("Por favor, insira o seu ID do Aluno ou Email.");
            return;
        }
        if (!passwordInput) {
            setErrorMessage("Por favor, insira a sua senha.");
            return;
        }
        if (passwordInput.length < 6) {
            setErrorMessage("A senha deve conter no mínimo 6 caracteres.");
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsLoggedIn(true);
        }, 1200);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setPasswordInput("");
        setErrorMessage("");
    };

    const handleServiceSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newReq = {
            id: `REQ-${Math.floor(1000 + Math.random() * 9000)}`,
            type: selectedService,
            date: new Date().toLocaleDateString("pt-PT"),
            status: "Em Processamento",
            download: false
        };
        setRequests([newReq, ...requests]);
        setRequestNotes("");
        setRequestSuccess(true);
        setTimeout(() => setRequestSuccess(false), 4000);
    };

    const features = [
        {
            icon: "grade",
            title: "Notas e Faltas",
            desc: "Acompanhe seu desempenho acadêmico em tempo real."
        },
        {
            icon: "calendar_month",
            title: "Calendário Acadêmico",
            desc: "Exames, feriados e datas importantes do semestre."
        },
        {
            icon: "account_balance_wallet",
            title: "Mensalidades e Pagamentos",
            desc: "Consulte referências, pague propinas e baixe recibos."
        },
        {
            icon: "contact_support",
            title: "Serviços ao Aluno",
            desc: "Requerimentos, declarações e suporte administrativo."
        }
    ];

    const studentMock = {
        name: "Carlos Alexandre Abreu",
        id: "20230123",
        course: "Engenharia Informática",
        gpa: "16.4 / 20",
        attendance: "94%",
        enrolledCredits: 30,
        status: "Ativo / Regularizado",
        avatar: "/images/carlos-abreu.png"
    };

    const gradesMock = [
        { subject: "Programação Web II", code: "LEI-301", p1: "17.2", p2: "15.8", media: "16.5", exame: "16.0", recurso: "-", final: "16.5", status: "Aprovado" },
        { subject: "Sistemas Distribuídos", code: "LEI-302", p1: "14.5", p2: "16.0", media: "15.3", exame: "15.0", recurso: "-", final: "15.3", status: "Aprovado" },
        { subject: "Bases de Dados II", code: "LEI-303", p1: "18.0", p2: "19.0", media: "18.5", exame: "18.0", recurso: "-", final: "18.5", status: "Aprovado" },
        { subject: "Inteligência Artificial", code: "LEI-304", p1: "8.0", p2: "9.5", media: "8.8", exame: "-", recurso: "14.0", final: "14.0", status: "Aprovado" },
        { subject: "Gestão de Projetos de Software", code: "LEI-305", p1: "13.8", p2: "15.2", media: "14.5", exame: "15.0", recurso: "-", final: "15.0", status: "Aprovado" }
    ];

    const examsMock = [
        { subject: "Programação Web II", date: "12/06/2026", time: "09:00 - 11:30", type: "Exame de Frequência", room: "Sala 104 - Bloco A" },
        { subject: "Sistemas Distribuídos", date: "15/06/2026", time: "14:00 - 16:30", type: "Exame de Frequência", room: "Anfiteatro B" },
        { subject: "Bases de Dados II", date: "19/06/2026", time: "09:00 - 11:30", type: "Exame de Frequência", room: "Sala 202 - Bloco B" },
        { subject: "Inteligência Artificial", date: "23/06/2026", time: "11:30 - 14:00", type: "Exame de Frequência", room: "Sala 301 - Bloco C" }
    ];

    const paymentsMock = [
        { month: "Maio 2026", type: "Propina", amount: "45.000,00 AOA", status: "Pago", date: "05/05/2026", ref: "987 654 321" },
        { month: "Abril 2026", type: "Propina", amount: "45.000,00 AOA", status: "Pago", date: "08/04/2026", ref: "123 456 789" },
        { month: "Março 2026", type: "Propina + Matrícula", amount: "65.000,00 AOA", status: "Pago", date: "10/03/2026", ref: "456 123 789" }
    ];

    return (
        <div className="bg-[#f8f7f5] dark:bg-ugs-blue text-institutional dark:text-white min-h-screen flex flex-col font-display transition-colors duration-300">
            
            {/* Top Navigation Bar */}
            <header className="w-full bg-white/80 backdrop-blur-xl dark:bg-brand-navy/80 border-b border-institutional/5 dark:border-white/5 sticky top-0 z-40 transition-colors duration-300">
                <div className="w-full px-6 lg:px-12 h-20 flex items-center justify-between">
                    
                    {/* Brand/Logo */}
                    <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-85 shrink-0">
                        <Image 
                            src="/images/novo-logo.png"
                            alt="UGS Logo"
                            width={200}
                            height={60}
                            className="h-10 sm:h-12 w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Header Controls */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="w-10 h-10 rounded-lg flex items-center justify-center text-institutional/50 dark:text-white/50 hover:bg-institutional/[0.02] dark:hover:bg-white/10 transition-colors"
                            aria-label="Alternar tema"
                            title="Alternar Tema Claro/Escuro"
                        >
                            <span className="material-symbols-outlined text-xl">
                                {theme === "light" ? "dark_mode" : "light_mode"}
                            </span>
                        </button>

                        <Link href="/contacto">
                        <button 
                            className="bg-primary hover:bg-primary/95 text-white text-sm font-bold h-10 px-6 rounded-lg transition-all shadow-md shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0"
                        >
                            Suporte
                        </button>
                        </Link>
                        
                        {isLoggedIn && (
                            <button
                                onClick={handleLogout}
                                className="hidden sm:flex items-center gap-2 border border-institutional/5 dark:border-white/5 hover:bg-red-50 hover:text-red-600 hover:border-red-200 dark:hover:bg-red-950/30 dark:hover:text-red-400 dark:hover:border-red-900/50 text-institutional/70 dark:text-white/70 text-sm font-bold h-10 px-4 rounded-lg transition-all"
                            >
                                <span className="material-symbols-outlined text-lg">logout</span>
                                Sair
                            </button>
                        )}
                    </div>
                </div>
            </header>

            {/* Main Area */}
            <main className={`flex-1 flex relative overflow-hidden ${!isLoggedIn ? 'items-center justify-center p-6 lg:p-12' : ''}`}>
                <AnimatePresence mode="wait">
                    {!isLoggedIn ? (
                        /* LOGIN ACCESS PANEL */
                        <motion.div
                            key="login-screen"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
                        >
                            {/* Left Side: Login Form */}
                            <div className="lg:col-span-5">
                                <div className="bg-white dark:bg-brand-navy p-5 lg:p-6 rounded-2xl shadow-2xl shadow-institutional/[0.03] border border-institutional/5 dark:border-white/5 transition-all duration-300">
                                    <div className="mb-5">
                                        <h1 className="text-xl font-bold text-institutional dark:text-white mb-1">Portal do Aluno</h1>
                                        <p className="text-xs text-institutional/70 dark:text-white/70 font-medium">Acesse sua vida acadêmica com segurança.</p>
                                    </div>
                                    
                                    <form className="space-y-3" onSubmit={handleLogin}>
                                        {errorMessage && (
                                            <div className="p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 rounded-lg text-xs font-medium flex items-center gap-2">
                                                <span className="material-symbols-outlined text-[16px] shrink-0">error</span>
                                                {errorMessage}
                                            </div>
                                        )}

                                        <div className="space-y-1">
                                            <label className="block text-xs font-bold text-institutional/90 dark:text-white/90">
                                                ID do Aluno ou Email
                                            </label>
                                            <div className="relative group">
                                                <span className="material-symbols-outlined text-[18px] absolute left-3 top-1/2 -translate-y-1/2 text-institutional/40 dark:text-white/40 group-focus-within:text-primary transition-colors">
                                                    person
                                                </span>
                                                <input
                                                    className="w-full h-10 pl-9 pr-3 rounded-lg border border-institutional/5 dark:border-white/5 bg-institutional/[0.02] dark:bg-ugs-blue focus:ring-2 focus:ring-primary/20 focus:border-primary text-[13px] transition-all text-institutional dark:text-white placeholder-institutional/40 dark:placeholder-white/40 outline-none"
                                                    placeholder="Ex: 20230123"
                                                    type="text"
                                                    value={idInput}
                                                    onChange={(e) => setIdInput(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="block text-xs font-bold text-institutional/90 dark:text-white/90">
                                                Senha
                                            </label>
                                            <div className="relative group">
                                                <span className="material-symbols-outlined text-[18px] absolute left-3 top-1/2 -translate-y-1/2 text-institutional/40 dark:text-white/40 group-focus-within:text-primary transition-colors">
                                                    lock
                                                </span>
                                                <input
                                                    className="w-full h-10 pl-9 pr-9 rounded-lg border border-institutional/5 dark:border-white/5 bg-institutional/[0.02] dark:bg-ugs-blue focus:ring-2 focus:ring-primary/20 focus:border-primary text-[13px] transition-all text-institutional dark:text-white placeholder-institutional/40 dark:placeholder-white/40 outline-none"
                                                    placeholder="••••••••"
                                                    type={showPassword ? "text" : "password"}
                                                    value={passwordInput}
                                                    onChange={(e) => setPasswordInput(e.target.value)}
                                                />
                                                <button
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-institutional/40 dark:text-white/40 hover:text-institutional/70 dark:hover:text-white/70 transition-colors"
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    tabIndex={-1}
                                                >
                                                    <span className="material-symbols-outlined text-[18px]">
                                                        {showPassword ? "visibility_off" : "visibility"}
                                                    </span>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between text-[11px] pt-1">
                                            <label className="flex items-center gap-2 cursor-pointer select-none">
                                                <input
                                                    className="rounded border-institutional/20 text-primary focus:ring-primary w-3 h-3"
                                                    type="checkbox"
                                                    checked={rememberMe}
                                                    onChange={(e) => setRememberMe(e.target.checked)}
                                                />
                                                <span className="text-institutional/70 dark:text-white/70 font-medium">Lembrar acesso</span>
                                            </label>
                                            <a className="text-primary font-bold hover:underline" href="#">Esqueci a senha?</a>
                                        </div>

                                        <button
                                            className="w-full h-10 bg-primary text-white text-[13px] font-bold rounded-lg shadow-[0_2px_8px_rgba(30,42,74,0.04)] shadow-primary/30 hover:bg-primary/90 hover:-translate-y-[1px] active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                                            type="submit"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                    </svg>
                                                    Acessando...
                                                </>
                                            ) : (
                                                "Entrar no Portal"
                                            )}
                                        </button>
                                    </form>

                                    <div className="mt-5 pt-5 border-t border-institutional/5 dark:border-white/5 text-center">
                                        <p className="text-[11px] text-institutional/70 dark:text-white/70 font-medium">
                                            Novo aluno? <a className="text-primary font-bold hover:underline" href="#">Saiba como ativar seu acesso</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Quick Links & Branding */}
                            <div className="lg:col-span-7 flex flex-col gap-6">
                                <div className="space-y-2">
                                    <h2 className="text-2xl lg:text-3xl font-bold text-institutional dark:text-white leading-tight">
                                        Sua jornada acadêmica, <span className="text-primary">simplificada.</span>
                                    </h2>
                                    <p className="text-sm text-institutional/70 dark:text-white/70 max-w-lg leading-relaxed">
                                        Acesse notas, calendários de exames, serviços financeiros e tudo o que você precisa para a excelência acadêmica na UGS.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {features.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="p-4 bg-white dark:bg-brand-navy border border-institutional/5 dark:border-white/5 rounded-xl hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 cursor-pointer group hover:shadow-[0_2px_8px_rgba(30,42,74,0.04)]"
                                        >
                                            <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2.5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                <span className="material-symbols-outlined text-[16px]">{item.icon}</span>
                                            </div>
                                            <h3 className="text-[13px] font-bold text-institutional dark:text-white mb-0.5 group-hover:text-primary transition-colors">{item.title}</h3>
                                            <p className="text-[11px] text-institutional/60 dark:text-white/60 leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10 max-w-sm">
                                    <span className="material-symbols-outlined text-primary text-[22px] shrink-0">verified_user</span>
                                    <div>
                                        <p className="text-xs font-bold text-institutional dark:text-white">Acesso Seguro</p>
                                        <p className="text-[10px] text-institutional/60 dark:text-white/60 font-medium leading-tight">Seus dados estão protegidos por criptografia de ponta a ponta.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        /* LOGGED-IN: INTERACTIVE STUDENT DASHBOARD */
                        <motion.div
                            key="dashboard-screen"
                            initial={{ opacity: 0, scale: 0.99 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="w-full h-full bg-white dark:bg-brand-navy transition-all overflow-hidden grid grid-cols-1 lg:grid-cols-12"
                        >
                            
                            {/* Dashboard Left Sidebar */}
                            <div className="lg:col-span-3 bg-institutional/[0.02] dark:bg-ugs-blue p-5 sm:p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-institutional/5 dark:border-white/5 flex flex-col justify-between">
                                <div className="space-y-6 lg:space-y-8">
                                    
                                    {/* Student Card */}
                                    <div className="flex items-center gap-4 p-4 bg-white dark:bg-brand-navy border border-institutional/5 dark:border-white/5 rounded-2xl shadow-[0_2px_8px_rgba(30,42,74,0.04)]">
                                        <div className="size-12 rounded-xl bg-institutional/10 dark:bg-white/10 overflow-hidden shrink-0 relative flex items-center justify-center">
                                            <svg className="w-full h-full text-institutional/40 dark:text-white/40 mt-3" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                        </div>
                                        <div className="overflow-hidden">
                                            <h4 className="font-bold text-sm text-institutional dark:text-white truncate">{studentMock.name}</h4>
                                            <p className="text-[11px] text-institutional/60 dark:text-white/60 font-bold uppercase tracking-wider mt-0.5">RA: {studentMock.id}</p>
                                        </div>
                                    </div>

                                    {/* Navigation Tabs */}
                                    <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 snap-x hide-scrollbar">
                                        <button
                                            onClick={() => setActiveTab("inicio")}
                                            className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold transition-all text-left ${
                                                activeTab === "inicio"
                                                    ? "bg-institutional text-white shadow-[0_2px_8px_rgba(30,42,74,0.04)] shadow-institutional/20"
                                                    : "text-institutional/70 dark:text-white/70 hover:bg-institutional/10 dark:hover:bg-white/10"
                                            }`}
                                        >
                                            <span className="material-symbols-outlined text-[20px]">dashboard</span>
                                            <span className="whitespace-nowrap">Início</span>
                                        </button>
                                        <button
                                            onClick={() => setActiveTab("notas")}
                                            className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold transition-all text-left ${
                                                activeTab === "notas"
                                                    ? "bg-institutional text-white shadow-[0_2px_8px_rgba(30,42,74,0.04)] shadow-institutional/20"
                                                    : "text-institutional/70 dark:text-white/70 hover:bg-institutional/10 dark:hover:bg-white/10"
                                            }`}
                                        >
                                            <span className="material-symbols-outlined text-[20px]">grade</span>
                                            <span className="whitespace-nowrap">Notas e Faltas</span>
                                        </button>
                                        <button
                                            onClick={() => setActiveTab("calendario")}
                                            className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold transition-all text-left ${
                                                activeTab === "calendario"
                                                    ? "bg-institutional text-white shadow-[0_2px_8px_rgba(30,42,74,0.04)] shadow-institutional/20"
                                                    : "text-institutional/70 dark:text-white/70 hover:bg-institutional/10 dark:hover:bg-white/10"
                                            }`}
                                        >
                                            <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                                            <span className="whitespace-nowrap">Calendário Académico</span>
                                        </button>
                                        <button
                                            onClick={() => setActiveTab("pagamentos")}
                                            className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold transition-all text-left ${
                                                activeTab === "pagamentos"
                                                    ? "bg-institutional text-white shadow-[0_2px_8px_rgba(30,42,74,0.04)] shadow-institutional/20"
                                                    : "text-institutional/70 dark:text-white/70 hover:bg-institutional/10 dark:hover:bg-white/10"
                                            }`}
                                        >
                                            <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
                                            <span className="whitespace-nowrap">Mensalidades e Pagamentos</span>
                                        </button>
                                        <button
                                            onClick={() => setActiveTab("servicos")}
                                            className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold transition-all text-left ${
                                                activeTab === "servicos"
                                                    ? "bg-institutional text-white shadow-[0_2px_8px_rgba(30,42,74,0.04)] shadow-institutional/20"
                                                    : "text-institutional/70 dark:text-white/70 hover:bg-institutional/10 dark:hover:bg-white/10"
                                            }`}
                                        >
                                            <span className="material-symbols-outlined text-[20px]">contact_support</span>
                                            <span className="whitespace-nowrap">Serviços e Pedidos</span>
                                        </button>
                                    </nav>
                                </div>

                                <div className="space-y-5 pt-8 border-t border-institutional/5 dark:border-white/5">
                                    <div className="p-4 bg-primary/5 border border-primary/10 rounded-2xl">
                                        <h5 className="text-[11px] font-bold text-primary uppercase tracking-wider mb-2">Situação</h5>
                                        <p className="text-xs font-semibold text-institutional/70 dark:text-white/70">{studentMock.course}</p>
                                        <div className="mt-2 flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
                                            <span className="size-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                                            {studentMock.status}
                                        </div>
                                    </div>
                                    
                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl border border-institutional/5 dark:border-white/5 text-institutional/70 dark:text-white/70 hover:bg-red-50 hover:text-red-600 hover:border-red-200 dark:hover:bg-red-950/20 dark:hover:text-red-400 dark:hover:border-red-900 transition-colors text-sm font-bold cursor-pointer"
                                    >
                                        <span className="material-symbols-outlined text-[18px]">logout</span>
                                        Encerrar Sessão
                                    </button>
                                </div>
                            </div>

                            {/* Dashboard Right Panel */}
                            <div className="lg:col-span-9 p-5 sm:p-6 lg:p-12 flex flex-col justify-between overflow-y-auto">
                                
                                <div className="flex-1 max-w-6xl">
                                    {/* Dynamic Panel Header */}
                                    <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 pb-6 border-b border-institutional/5 dark:border-white/5 mb-8">
                                        <div>
                                            <span className="text-[11px] text-primary font-bold uppercase tracking-widest">UGS Portal do Aluno</span>
                                            <h2 className="text-3xl font-bold text-institutional dark:text-white capitalize mt-2">
                                                {activeTab === "inicio" && "Painel Geral"}
                                                {activeTab === "notas" && "Boletim de Notas e Faltas"}
                                                {activeTab === "calendario" && "Calendário de Exames"}
                                                {activeTab === "pagamentos" && "Mensalidades e Pagamentos"}
                                                {activeTab === "servicos" && "Requerimento de Serviços"}
                                            </h2>
                                        </div>
                                        <div className="text-institutional/60 dark:text-white/60 text-sm font-medium">
                                            Ano Lectivo: <strong className="text-institutional dark:text-white">2025/2026</strong>
                                        </div>
                                    </div>

                                    {/* TAB CONTENT: INICIO (OVERVIEW) */}
                                    {activeTab === "inicio" && (
                                        <motion.div
                                            key="tab-inicio"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                                            className="space-y-8"
                                        >
                                            {/* Summary Cards */}
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                                                <div className="p-5 bg-institutional/[0.02] dark:bg-ugs-blue border border-institutional/5 dark:border-white/5 rounded-2xl">
                                                    <span className="text-[11px] text-institutional/50 dark:text-white/50 font-bold uppercase tracking-widest">Média Global</span>
                                                    <h3 className="text-2xl font-black text-primary mt-2">{studentMock.gpa}</h3>
                                                </div>
                                                <div className="p-5 bg-institutional/[0.02] dark:bg-ugs-blue border border-institutional/5 dark:border-white/5 rounded-2xl">
                                                    <span className="text-[11px] text-institutional/50 dark:text-white/50 font-bold uppercase tracking-widest">Presença Geral</span>
                                                    <h3 className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-2">{studentMock.attendance}</h3>
                                                </div>
                                                <div className="p-5 bg-institutional/[0.02] dark:bg-ugs-blue border border-institutional/5 dark:border-white/5 rounded-2xl">
                                                    <span className="text-[11px] text-institutional/50 dark:text-white/50 font-bold uppercase tracking-widest">Créditos ECTS</span>
                                                    <h3 className="text-2xl font-black text-indigo-600 dark:text-indigo-400 mt-2">{studentMock.enrolledCredits}</h3>
                                                </div>
                                                <div className="p-5 bg-institutional/[0.02] dark:bg-ugs-blue border border-institutional/5 dark:border-white/5 rounded-2xl">
                                                    <span className="text-[11px] text-institutional/50 dark:text-white/50 font-bold uppercase tracking-widest">Situação</span>
                                                    <h3 className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-2">Regular</h3>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                                <div className="md:col-span-2 space-y-4">
                                                    <h4 className="text-lg font-bold text-institutional dark:text-white">Avisos e Notificações</h4>
                                                    
                                                    <div className="p-5 bg-orange-500/10 border border-orange-500/20 text-orange-800 dark:text-orange-400 rounded-2xl flex gap-4">
                                                        <span className="material-symbols-outlined text-2xl shrink-0">notification_important</span>
                                                        <div className="text-sm">
                                                            <p className="font-bold text-base">Propina de Junho Disponível para Pagamento</p>
                                                            <p className="mt-1 opacity-90 leading-relaxed">Verifique a aba de Pagamentos para consultar as referências deste mês.</p>
                                                        </div>
                                                    </div>

                                                    <div className="p-5 bg-institutional/[0.02] dark:bg-ugs-blue border border-institutional/5 dark:border-white/5 rounded-2xl flex gap-4">
                                                        <span className="material-symbols-outlined text-institutional/40 dark:text-white/40 text-2xl shrink-0">info</span>
                                                        <div className="text-sm">
                                                            <p className="font-bold text-base text-institutional dark:text-white">Requerimento Concluído</p>
                                                            <p className="mt-1 text-institutional/60 dark:text-white/60 leading-relaxed">Requerimento **REQ-0938** pronto para download na aba de Serviços.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-4">
                                                    <h4 className="text-lg font-bold text-institutional dark:text-white">Próximo Exame</h4>
                                                    <div className="p-6 bg-gradient-to-br from-institutional to-brand-navy dark:from-ugs-blue dark:to-institutional text-white rounded-2xl shadow-2xl shadow-institutional/[0.03] border border-institutional/20 dark:border-white/5">
                                                        <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-md uppercase tracking-wider text-primary">Frequência</span>
                                                        <h3 className="text-xl font-bold mt-4 mb-2">Programação Web II</h3>
                                                        <p className="text-sm opacity-90 flex items-center gap-2 mb-2">
                                                            <span className="material-symbols-outlined text-base">calendar_month</span> 12 Junho 2026
                                                        </p>
                                                        <p className="text-sm opacity-90 flex items-center gap-2">
                                                            <span className="material-symbols-outlined text-base">location_on</span> Sala 104 - Bloco A
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* TAB CONTENT: NOTAS */}
                                    {activeTab === "notas" && (
                                        <motion.div
                                            key="tab-notas"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                                            className="space-y-6"
                                        >
                                            <div className="overflow-x-auto rounded-2xl border border-institutional/5 dark:border-white/5 shadow-[0_2px_8px_rgba(30,42,74,0.04)] pb-2 lg:pb-0">
                                                <table className="w-full min-w-[700px] text-left text-sm border-collapse">
                                                    <thead>
                                                        <tr className="bg-institutional/[0.02] dark:bg-ugs-blue border-b border-institutional/5 dark:border-white/5 text-institutional/60 dark:text-white/60 font-bold uppercase tracking-wider text-[10px] md:text-xs">
                                                            <th className="py-4 px-4 md:px-6">Cód</th>
                                                            <th className="py-4 px-4 md:px-6">Disciplina</th>
                                                            <th className="py-4 px-2 md:px-4 text-center">P1</th>
                                                            <th className="py-4 px-2 md:px-4 text-center">P2</th>
                                                            <th className="py-4 px-2 md:px-4 text-center">Média</th>
                                                            <th className="py-4 px-2 md:px-4 text-center">Exame</th>
                                                            <th className="py-4 px-2 md:px-4 text-center">Recurso</th>
                                                            <th className="py-4 px-4 md:px-6 text-center">Final</th>
                                                            <th className="py-4 px-4 md:px-6 text-center">Estado</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-institutional/5 dark:divide-white/5">
                                                        {gradesMock.map((row, idx) => (
                                                            <tr key={idx} className="hover:bg-institutional/[0.02] dark:hover:bg-white/5 transition-colors font-medium">
                                                                <td className="py-4 px-4 md:px-6 text-xs font-bold text-institutional/40 dark:text-white/40">{row.code}</td>
                                                                <td className="py-4 px-4 md:px-6 text-institutional dark:text-white font-bold">{row.subject}</td>
                                                                <td className="py-4 px-2 md:px-4 text-center font-bold text-institutional/80 dark:text-white/80">{row.p1}</td>
                                                                <td className="py-4 px-2 md:px-4 text-center font-bold text-institutional/80 dark:text-white/80">{row.p2}</td>
                                                                <td className="py-4 px-2 md:px-4 text-center font-bold text-institutional/80 dark:text-white/80">{row.media}</td>
                                                                <td className="py-4 px-2 md:px-4 text-center font-bold text-institutional/80 dark:text-white/80">{row.exame}</td>
                                                                <td className="py-4 px-2 md:px-4 text-center font-bold text-institutional/80 dark:text-white/80">{row.recurso}</td>
                                                                <td className="py-4 px-4 md:px-6 text-center font-bold text-primary text-base">{row.final}</td>
                                                                <td className="py-4 px-4 md:px-6 text-center">
                                                                    <span className="px-3 py-1 rounded-md text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                                                                        {row.status}
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <p className="text-xs text-institutional/50 dark:text-white/50 leading-relaxed">
                                                * Nota mínima para dispensa de exame: 14 valores. Abaixo de 10 exige exame de recurso.
                                            </p>
                                        </motion.div>
                                    )}

                                    {/* TAB CONTENT: CALENDARIO */}
                                    {activeTab === "calendario" && (
                                        <motion.div
                                            key="tab-calendario"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                                            className="space-y-6"
                                        >
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                {examsMock.map((exam, idx) => (
                                                    <div key={idx} className="p-6 bg-institutional/[0.02] dark:bg-ugs-blue border border-institutional/5 dark:border-white/5 rounded-2xl relative group hover:border-primary/50 transition-all duration-300">
                                                        <div className="flex justify-between items-start gap-4">
                                                            <div>
                                                                <span className="text-xs font-bold text-primary uppercase tracking-wider">{exam.type}</span>
                                                                <h4 className="font-bold text-institutional dark:text-white mt-1 mb-3 text-lg">{exam.subject}</h4>
                                                                
                                                                <div className="space-y-2 text-sm text-institutional/60 dark:text-white/60 font-medium">
                                                                    <p className="flex items-center gap-2">
                                                                        <span className="material-symbols-outlined text-base text-institutional/40 dark:text-white/40">calendar_month</span>
                                                                        {exam.date}
                                                                    </p>
                                                                    <p className="flex items-center gap-2">
                                                                        <span className="material-symbols-outlined text-base text-institutional/40 dark:text-white/40">schedule</span>
                                                                        {exam.time}
                                                                    </p>
                                                                    <p className="flex items-center gap-2">
                                                                        <span className="material-symbols-outlined text-base text-institutional/40 dark:text-white/40">location_on</span>
                                                                        {exam.room}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="size-12 bg-white dark:bg-brand-navy rounded-xl flex items-center justify-center text-institutional/50 dark:text-white/50 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-[0_2px_8px_rgba(30,42,74,0.04)]">
                                                                <span className="material-symbols-outlined text-2xl">event_note</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* TAB CONTENT: PAGAMENTOS */}
                                    {activeTab === "pagamentos" && (
                                        <motion.div
                                            key="tab-pagamentos"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                                            className="space-y-8"
                                        >
                                            
                                            {/* Painel de Pagamento Atual */}
                                            <div className="p-8 bg-white dark:bg-brand-navy border border-institutional/5 dark:border-white/5 rounded-2xl shadow-[0_2px_8px_rgba(30,42,74,0.04)] flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center justify-between">
                                                <div>
                                                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Propina a Pagamento</span>
                                                    <h3 className="text-3xl font-bold text-institutional dark:text-white mt-2">Junho 2026</h3>
                                                    <p className="text-base font-medium text-institutional/70 dark:text-white/70 mt-1">
                                                        Data Limite: <span className="font-bold text-institutional dark:text-white">10/06/2026</span>
                                                    </p>
                                                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 text-xs font-bold">
                                                        <span className="size-2 rounded-full bg-amber-500 animate-pulse"></span>
                                                        A Aguardar Pagamento
                                                    </div>
                                                </div>
                                                
                                                {/* Bloco de Referência Multicaixa */}
                                                <div className="bg-institutional/[0.02] dark:bg-ugs-blue p-6 rounded-2xl border border-institutional/5 dark:border-white/5 w-full lg:w-auto min-w-[320px]">
                                                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-institutional/5 dark:border-white/5">
                                                        <span className="material-symbols-outlined text-primary text-2xl">account_balance</span>
                                                        <span className="text-base font-bold text-institutional dark:text-white">Pagamento Multicaixa</span>
                                                    </div>
                                                    <div className="space-y-3 text-sm">
                                                        <div className="flex justify-between items-center">
                                                            <span className="text-institutional/70 dark:text-white/70 font-medium">Entidade:</span>
                                                            <span className="font-bold text-institutional dark:text-white text-base">00045</span>
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <span className="text-institutional/70 dark:text-white/70 font-medium">Referência:</span>
                                                            <span className="font-bold text-institutional dark:text-white text-base tracking-widest">123 456 789</span>
                                                        </div>
                                                        <div className="flex justify-between items-center pt-3 mt-3 border-t border-institutional/5 dark:border-white/5">
                                                            <span className="text-institutional/70 dark:text-white/70 font-medium">Montante:</span>
                                                            <span className="font-bold text-primary text-lg">45.000,00 AOA</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Histórico de Pagamentos */}
                                            <div className="space-y-4">
                                                <h4 className="font-bold text-lg text-institutional dark:text-white">Histórico de Pagamentos (Ano Letivo Atual)</h4>
                                                
                                                <div className="space-y-4">
                                                    {paymentsMock.map((payment, idx) => (
                                                        <div key={idx} className="p-5 bg-white dark:bg-brand-navy border border-institutional/5 dark:border-white/5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-5 hover:border-primary/40 dark:hover:border-primary/40 transition-colors group">
                                                            <div className="flex items-center gap-4">
                                                                <div className="size-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 flex items-center justify-center shrink-0">
                                                                    <span className="material-symbols-outlined text-2xl">check_circle</span>
                                                                </div>
                                                                <div>
                                                                    <h5 className="font-bold text-institutional dark:text-white text-base">{payment.type} — {payment.month}</h5>
                                                                    <p className="text-xs text-institutional/60 dark:text-white/60 font-medium mt-1">
                                                                        Pago a {payment.date} • Ref: {payment.ref}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 shrink-0 border-t sm:border-0 border-institutional/5 dark:border-white/5 pt-3 sm:pt-0">
                                                                <span className="font-bold text-institutional dark:text-white text-base">{payment.amount}</span>
                                                                <button className="flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary/80 transition-colors cursor-pointer">
                                                                    <span className="material-symbols-outlined text-base">picture_as_pdf</span>
                                                                    Comprovativo
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* TAB CONTENT: SERVICOS */}
                                    {activeTab === "servicos" && (
                                        <motion.div
                                            key="tab-servicos"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                                            className="grid grid-cols-1 md:grid-cols-12 gap-8"
                                        >
                                            {/* Form section */}
                                            <div className="md:col-span-6 bg-institutional/[0.02] dark:bg-ugs-blue p-6 md:p-8 rounded-2xl border border-institutional/5 dark:border-white/5">
                                                <h4 className="font-bold text-lg text-institutional dark:text-white mb-5">Novo Requerimento</h4>
                                                
                                                <form onSubmit={handleServiceSubmit} className="space-y-5">
                                                    <div>
                                                        <label className="block text-xs font-bold text-institutional/60 dark:text-white/60 uppercase mb-2">Serviço Pretendido</label>
                                                        <select
                                                            className="w-full h-12 px-4 rounded-xl border border-institutional/5 dark:border-white/5 bg-white dark:bg-brand-navy text-institutional dark:text-white text-sm focus:ring-primary focus:border-primary outline-none"
                                                            value={selectedService}
                                                            onChange={(e) => setSelectedService(e.target.value)}
                                                        >
                                                            <option>Declaração de Matrícula</option>
                                                            <option>Declaração com Notas</option>
                                                            <option>Histórico Académico</option>
                                                            <option>Revisão de Nota de Prova</option>
                                                        </select>
                                                    </div>

                                                    <div>
                                                        <label className="block text-xs font-bold text-institutional/60 dark:text-white/60 uppercase mb-2">Observações / Detalhes</label>
                                                        <textarea
                                                            className="w-full p-4 rounded-xl border border-institutional/5 dark:border-white/5 bg-white dark:bg-brand-navy text-institutional dark:text-white text-sm focus:ring-primary focus:border-primary min-h-[120px] placeholder-institutional/40 dark:placeholder-white/40 outline-none resize-none"
                                                            placeholder="Indique observações..."
                                                            value={requestNotes}
                                                            onChange={(e) => setRequestNotes(e.target.value)}
                                                        />
                                                    </div>

                                                    {requestSuccess && (
                                                        <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 text-emerald-600 dark:text-emerald-400 rounded-xl text-sm font-semibold flex items-center gap-2">
                                                            <span className="material-symbols-outlined text-lg">check_circle</span>
                                                            Pedido submetido com sucesso!
                                                        </div>
                                                    )}

                                                    <button
                                                        type="submit"
                                                        className="w-full h-12 bg-primary hover:bg-primary/95 text-white font-bold rounded-xl text-sm transition-all shadow-md shadow-primary/20 hover:-translate-y-[1px] cursor-pointer mt-2"
                                                    >
                                                        Submeter Pedido
                                                    </button>
                                                </form>
                                            </div>

                                            {/* History section */}
                                            <div className="md:col-span-6 space-y-4">
                                                <h4 className="font-bold text-lg text-institutional dark:text-white">Historial</h4>
                                                
                                                <div className="space-y-4">
                                                    {requests.map((req, idx) => (
                                                        <div key={idx} className="p-5 bg-white dark:bg-brand-navy border border-institutional/5 dark:border-white/5 rounded-2xl flex flex-col sm:flex-row justify-between gap-4">
                                                            <div>
                                                                <span className="text-[10px] font-bold text-institutional/40 dark:text-white/40 uppercase tracking-widest">{req.id}</span>
                                                                <h5 className="font-bold text-institutional dark:text-white text-base mt-1">{req.type}</h5>
                                                                <p className="text-xs text-institutional/60 dark:text-white/60 font-medium mt-0.5">Data: {req.date}</p>
                                                            </div>
                                                            <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between gap-2 border-t sm:border-0 border-institutional/5 dark:border-white/5 pt-3 sm:pt-0">
                                                                <span className={`px-3 py-1 rounded-md text-[10px] font-bold inline-block ${
                                                                    req.status === "Concluído"
                                                                        ? "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400"
                                                                        : "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
                                                                }`}>
                                                                    {req.status}
                                                                </span>
                                                                {req.download && (
                                                                    <button className="text-xs text-primary font-bold hover:underline flex items-center gap-1 cursor-pointer">
                                                                        <span className="material-symbols-outlined text-base">download</span> Descarregar
                                                                    </button>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

        </div>
    );
}

