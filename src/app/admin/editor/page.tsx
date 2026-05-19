"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

type SectionKey = "hero" | "academicas" | "sobre" | "noticias";

interface SectionData {
    label: string;
    icon: string;
    status: "published" | "draft";
    heroTitle: string;
    heroSubtitle: string;
    buttonText: string;
    buttonUrl: string;
    metaTitle: string;
    imageFile: string;
    imageDimensions: string;
    imageSize: string;
    imageFormat: string;
    overlayOpacity: number;
}

const sectionsData: Record<SectionKey, SectionData> = {
    hero: {
        label: "Hero Section",
        icon: "web",
        status: "published",
        heroTitle: "Bem-vindo à Universidade Gregório Semedo",
        heroSubtitle: "Formando líderes para o futuro com excelência académica e inovação.",
        buttonText: "Conheça os Cursos",
        buttonUrl: "/cursos",
        metaTitle: "Universidade Gregório Semedo - Luanda",
        imageFile: "/images/banner-slogan-2048x1157.jpg",
        imageDimensions: "1920x1080",
        imageSize: "145 KB",
        imageFormat: "JPEG",
        overlayOpacity: 40,
    },
    academicas: {
        label: "Academic Areas",
        icon: "school",
        status: "published",
        heroTitle: "Áreas Académicas de Excelência",
        heroSubtitle: "Explore os nossos programas de licenciatura e pós-graduação.",
        buttonText: "Ver Programas",
        buttonUrl: "/cursos",
        metaTitle: "Áreas Académicas - UGS",
        imageFile: "/images/campus-ugs-entrada.jpg",
        imageDimensions: "1200x800",
        imageSize: "218 KB",
        imageFormat: "JPEG",
        overlayOpacity: 30,
    },
    sobre: {
        label: "About UGS",
        icon: "info",
        status: "published",
        heroTitle: "Sobre a Universidade",
        heroSubtitle: "Construindo um legado de conhecimento desde 2004.",
        buttonText: "Saiba Mais",
        buttonUrl: "/sobre",
        metaTitle: "Sobre - Universidade Gregório Semedo",
        imageFile: "/images/legado.jpg",
        imageDimensions: "1600x1200",
        imageSize: "622 KB",
        imageFormat: "JPEG",
        overlayOpacity: 50,
    },
    noticias: {
        label: "News & Events",
        icon: "newspaper",
        status: "draft",
        heroTitle: "Últimas Notícias e Eventos",
        heroSubtitle: "Acompanhe as novidades e acontecimentos do campus.",
        buttonText: "Ver Notícias",
        buttonUrl: "/noticias",
        metaTitle: "Notícias - UGS",
        imageFile: "/images/21-aniversario-ugs.jpg",
        imageDimensions: "1920x1080",
        imageSize: "540 KB",
        imageFormat: "JPEG",
        overlayOpacity: 35,
    },
};

export default function AdminEditorPage() {
    const [activeSection, setActiveSection] = useState<SectionKey>("hero");
    const [activeLang, setActiveLang] = useState("pt");
    const [activeDevice, setActiveDevice] = useState("desktop");

    const section = sectionsData[activeSection];

    const [title, setTitle] = useState(section.heroTitle);
    const [subtitle, setSubtitle] = useState(section.heroSubtitle);
    const [btnText, setBtnText] = useState(section.buttonText);
    const [btnUrl, setBtnUrl] = useState(section.buttonUrl);
    const [metaTitle, setMetaTitle] = useState(section.metaTitle);
    const [overlayOpacity, setOverlayOpacity] = useState(section.overlayOpacity);

    const handleSectionChange = (key: SectionKey) => {
        setActiveSection(key);
        const s = sectionsData[key];
        setTitle(s.heroTitle);
        setSubtitle(s.heroSubtitle);
        setBtnText(s.buttonText);
        setBtnUrl(s.buttonUrl);
        setMetaTitle(s.metaTitle);
        setOverlayOpacity(s.overlayOpacity);
    };

    return (
        <div className="flex h-screen w-full overflow-hidden bg-slate-50 font-display text-slate-900 antialiased">
            {/* Sidebar */}
            <aside className="hidden lg:flex w-64 flex-col bg-white border-r border-slate-200 shadow-[4px_0_24px_rgba(0,0,0,0.02)] flex-shrink-0 z-20">
                <ScrollReveal delay={0} variant="fade-right" className="w-full">
                    {/* Brand */}
                    <div className="flex h-16 items-center gap-3 px-6 border-b border-slate-100">
                        <div className="flex items-center justify-center size-9 rounded-lg bg-primary/10 text-primary">
                            <span className="material-symbols-outlined text-xl">edit_note</span>
                        </div>
                        <div>
                            <h1 className="text-sm font-extrabold leading-tight text-institutional tracking-tight">UGS Admin</h1>
                            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Content Management</p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
                    <ScrollReveal delay={0.1}>
                        <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-institutional transition-colors group">
                            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors text-xl">dashboard</span>
                            <span className="text-sm font-semibold">Dashboard</span>
                        </Link>
                    </ScrollReveal>

                    {/* Homepage Sections */}
                    <div>
                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest px-3 mb-2">Homepage Sections</p>
                        <div className="space-y-0.5">
                            {(Object.keys(sectionsData) as SectionKey[]).map((key) => {
                                const s = sectionsData[key];
                                const isActive = activeSection === key;
                                return (
                                    <ScrollReveal key={key} delay={0.15}>
                                        <button
                                            onClick={() => handleSectionChange(key)}
                                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-left ${
                                                isActive
                                                    ? "bg-primary/5 text-primary font-bold border-l-[3px] border-primary"
                                                    : "text-slate-500 hover:bg-slate-50 hover:text-institutional"
                                            }`}
                                        >
                                            <span
                                                className={`material-symbols-outlined text-xl ${isActive ? "text-primary" : "text-slate-400"}`}
                                                style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                                            >
                                                {s.icon}
                                            </span>
                                            <span className="text-sm font-semibold">{s.label}</span>
                                        </button>
                                    </ScrollReveal>
                                );
                            })}
                        </div>
                    </div>

                    {/* System */}
                    <div>
                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest px-3 mb-2">System</p>
                        <ScrollReveal delay={0.3}>
                            <Link href="/admin/media" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-institutional transition-colors group">
                                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors text-xl">perm_media</span>
                                <span className="text-sm font-semibold">Media Library</span>
                            </Link>
                        </ScrollReveal>
                        <ScrollReveal delay={0.35}>
                            <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-institutional transition-colors group">
                                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors text-xl">settings</span>
                                <span className="text-sm font-semibold">Settings</span>
                            </Link>
                        </ScrollReveal>
                    </div>
                </nav>

                {/* User Profile */}
                <ScrollReveal delay={0.5} className="w-full">
                    <div className="border-t border-slate-100 p-4">
                        <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 hover:bg-slate-100 transition-colors cursor-pointer">
                            <div className="size-9 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-lg">person</span>
                            </div>
                            <div className="flex flex-col min-w-0">
                                <p className="truncate text-sm font-bold text-institutional">Admin User</p>
                                <p className="truncate text-[10px] text-slate-400 font-medium">UGS Editor</p>
                            </div>
                            <span className="material-symbols-outlined ml-auto text-slate-400 text-lg">logout</span>
                        </div>
                    </div>
                </ScrollReveal>
            </aside>

            {/* Main Content */}
            <main className="flex flex-1 flex-col overflow-hidden relative">
                {/* Top Header */}
                <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 sm:px-8 shrink-0">
                    <ScrollReveal delay={0.1} variant="fade-down">
                        <div className="flex items-center gap-4">
                            <h2 className="text-lg sm:text-xl font-extrabold text-institutional tracking-tight">
                                Edit {section.label}
                            </h2>
                            <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                                section.status === "published"
                                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                    : "bg-amber-50 text-amber-700 border border-amber-200"
                            }`}>
                                {section.status === "published" ? "● Draft Mode" : "● Draft"}
                            </span>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2} variant="fade-down">
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-medium text-slate-400 hidden sm:block">Last saved 2 min ago</span>
                            <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-primary transition-all shadow-sm hover:scale-105 active:scale-95">
                                <span className="material-symbols-outlined text-base">visibility</span>
                                Preview
                            </button>
                            <button className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-bold text-white shadow-md shadow-primary/20 hover:bg-orange-600 transition-all hover:scale-105 active:scale-95">
                                <span className="material-symbols-outlined text-base">publish</span>
                                Publish Changes
                            </button>
                        </div>
                    </ScrollReveal>
                </header>

                {/* Content Area with Scroll */}
                <div className="flex-1 overflow-y-auto p-6 sm:p-8">
                    <div className="mx-auto max-w-6xl space-y-8 pb-12">
                        
                        {/* Two-Column Layout */}
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                            
                            {/* Left Column — Text Content */}
                            <ScrollReveal delay={0.2} variant="fade-up">
                                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                                    <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                                        <h3 className="font-bold text-institutional flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary text-lg">edit_note</span>
                                            Text Content
                                        </h3>
                                        {/* Language Tabs */}
                                        <div className="flex bg-slate-100 rounded-lg p-0.5">
                                            {["pt", "en"].map((lang) => (
                                                <button
                                                    key={lang}
                                                    onClick={() => setActiveLang(lang)}
                                                    className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                                                        activeLang === lang
                                                            ? "bg-white text-institutional shadow-sm"
                                                            : "text-slate-400 hover:text-slate-600"
                                                    }`}
                                                >
                                                    {lang === "pt" ? "Português (PT)" : "English (EN)"}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="p-6 space-y-5">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Hero Title</label>
                                            <input
                                                type="text"
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                                className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-semibold text-slate-800"
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Subtitle / Description</label>
                                            <textarea
                                                value={subtitle}
                                                onChange={(e) => setSubtitle(e.target.value)}
                                                rows={3}
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium text-slate-800 resize-none"
                                            />
                                            <p className="text-[10px] text-slate-400 font-medium text-right">{subtitle.length}/250 characters</p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Primary Button Text</label>
                                                <input
                                                    type="text"
                                                    value={btnText}
                                                    onChange={(e) => setBtnText(e.target.value)}
                                                    className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-semibold text-slate-800"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Button Link URL</label>
                                                <input
                                                    type="text"
                                                    value={btnUrl}
                                                    onChange={(e) => setBtnUrl(e.target.value)}
                                                    className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium text-slate-600"
                                                />
                                            </div>
                                        </div>

                                        {/* SEO Settings */}
                                        <div className="pt-4 border-t border-slate-100">
                                            <h4 className="text-sm font-bold text-institutional mb-4 flex items-center gap-2">
                                                <span className="material-symbols-outlined text-primary text-base">search</span>
                                                SEO Settings
                                            </h4>
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Meta Title</label>
                                                <input
                                                    type="text"
                                                    value={metaTitle}
                                                    onChange={(e) => setMetaTitle(e.target.value)}
                                                    className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium text-slate-700"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Right Column — Visual Assets */}
                            <ScrollReveal delay={0.3} variant="fade-up">
                                <div className="space-y-6">
                                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                                        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                                            <h3 className="font-bold text-institutional flex items-center gap-2">
                                                <span className="material-symbols-outlined text-primary text-lg">image</span>
                                                Visual Assets
                                            </h3>
                                            {/* Device Tabs */}
                                            <div className="flex bg-slate-100 rounded-lg p-0.5">
                                                {["desktop", "mobile"].map((device) => (
                                                    <button
                                                        key={device}
                                                        onClick={() => setActiveDevice(device)}
                                                        className={`px-3 py-1 rounded-md text-xs font-bold transition-all flex items-center gap-1 ${
                                                            activeDevice === device
                                                                ? "bg-white text-institutional shadow-sm"
                                                                : "text-slate-400 hover:text-slate-600"
                                                        }`}
                                                    >
                                                        <span className="material-symbols-outlined text-sm">
                                                            {device === "desktop" ? "desktop_windows" : "smartphone"}
                                                        </span>
                                                        {device === "desktop" ? "Desktop" : "Mobile"}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="p-6 space-y-5">
                                            {/* Image Preview */}
                                            <div className="group relative aspect-video w-full overflow-hidden rounded-xl bg-slate-100 border border-slate-200 shadow-inner">
                                                <Image
                                                    alt="Section preview"
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                    src={section.imageFile}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                />
                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px]">
                                                    <button className="rounded-lg bg-white px-4 py-2 text-sm font-bold text-slate-900 shadow-lg hover:text-primary hover:scale-105 transition-all">
                                                        Change Image
                                                    </button>
                                                    <button className="size-9 rounded-lg bg-white/20 text-white backdrop-blur-md flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all">
                                                        <span className="material-symbols-outlined">crop</span>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Image Optimizer Stats */}
                                            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className="text-xs font-bold text-slate-700">Image Optimizer</span>
                                                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">Optimised</span>
                                                </div>
                                                <div className="grid grid-cols-3 gap-3">
                                                    <div className="text-center">
                                                        <p className="text-lg font-extrabold text-institutional">{section.imageDimensions.split("x")[0]}<span className="text-xs text-slate-400">x{section.imageDimensions.split("x")[1]}</span></p>
                                                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Dimensions</p>
                                                    </div>
                                                    <div className="text-center">
                                                        <p className="text-lg font-extrabold text-institutional">{section.imageFormat}</p>
                                                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Format</p>
                                                    </div>
                                                    <div className="text-center">
                                                        <p className="text-lg font-extrabold text-institutional">{section.imageSize}</p>
                                                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Size</p>
                                                    </div>
                                                </div>
                                                <button className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 bg-white hover:bg-slate-50 hover:text-primary hover:border-primary transition-all">
                                                    <span className="material-symbols-outlined text-base">crop</span>
                                                    Open Cropper Tool
                                                </button>
                                            </div>

                                            {/* Upload Zone */}
                                            <div className="group/drop rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/50 p-6 text-center hover:border-primary hover:bg-primary/5 transition-all cursor-pointer">
                                                <span className="material-symbols-outlined mx-auto mb-2 text-3xl text-slate-300 group-hover/drop:scale-110 group-hover/drop:text-primary transition-all">cloud_upload</span>
                                                <p className="text-sm font-bold text-slate-700">Click or drag file to upload</p>
                                                <p className="text-[10px] text-slate-400 font-medium mt-1">SVG PNG JPEG or GIF (Max. 5MB)</p>
                                                <button className="mt-3 px-4 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-primary hover:border-primary transition-all shadow-sm">
                                                    Select File
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image Overlay */}
                                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden p-6">
                                        <h3 className="font-bold text-institutional flex items-center gap-2 mb-4">
                                            <span className="material-symbols-outlined text-primary text-lg">gradient</span>
                                            Image Overlay
                                        </h3>
                                        <div className="flex items-center gap-4">
                                            <div className="size-10 rounded-full bg-institutional border-2 border-slate-200 shadow-inner" />
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-1.5">
                                                    <span className="text-xs font-bold text-slate-500">Opacity</span>
                                                    <span className="text-sm font-extrabold text-institutional">{overlayOpacity}%</span>
                                                </div>
                                                <input
                                                    type="range"
                                                    min="0"
                                                    max="100"
                                                    value={overlayOpacity}
                                                    onChange={(e) => setOverlayOpacity(Number(e.target.value))}
                                                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
