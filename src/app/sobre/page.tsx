"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";
import Image from "next/image";

export default function SobrePage() {
    const [activeTab, setActiveTab] = useState("História e Legado");

    return (
        <div className="min-h-screen bg-background-light text-slate-900">
            <Navbar activePage="/sobre" />
            <main>
                {/* Banner Hero */}
                <section className="relative w-full h-[240px] sm:h-[280px] md:h-[320px] flex items-center bg-institutional">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-institutional/90 via-institutional/60 to-institutional/30 z-10"></div>
                        <div
                            className="w-full h-full bg-center bg-cover"
                            style={{
                                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC8w4DK-5b8a5Ci3TwPgqFI2FJ3v37reebjXrkZeMSRib6eOwHl_8uRhHEtNC3UjarhTtIYsHwMuE5OKBnM4VtY0UYv763BlZNQkQnhm_Rq2lssKGKT867iNquJUeSoyIURZnqPE6slSs-8AhsnZwLUhx2gOXTnvNVnUBBlvUuyRgcdxK12FnYFI3LBXLS_B_2Qio9ng68qa836B4wQAIsOAnnFNssPn5A5rWO0elMgwqmRuPbzQKRaQPGeG_gknUlIJmjnFJdzeMyR')",
                            }}
                        ></div>
                    </div>
                    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-6 sm:pt-10">
                        <ScrollReveal variant="fade-down">
                            <div className="flex items-center gap-2 text-sm text-slate-300 mb-4 font-medium">
                                <Link href="/" className="hover:text-white">
                                    Início
                                </Link>
                                <span className="material-symbols-outlined text-xs">
                                    chevron_right
                                </span>
                                <span className="text-primary">Institucional</span>
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 sm:mb-4">
                                Sobre a UGS
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl">
                                Construindo um legado de conhecimento, inovação e
                                responsabilidade social em Angola desde 2004.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
                    <div className="flex flex-col lg:flex-row gap-8 sm:gap-12">
                        {/* Sidebar */}
                        <aside className="w-full lg:w-1/4 shrink-0">
                            <div className="lg:sticky lg:top-28 space-y-6 sm:space-y-8">
                                <ScrollReveal variant="fade-right">
                                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                                        <h3 className="font-bold text-institutional mb-4 text-lg">
                                            Institucional
                                        </h3>
                                        <nav className="flex flex-col space-y-1">
                                            {[
                                                { label: "História e Legado" },
                                                { label: "Missão e Visão" },
                                                { label: "Equipe Reitoral" },
                                                { label: "Instalações do Campus" },
                                                { label: "Decania" },
                                            ].map((item) => {
                                                const isActive = activeTab === item.label;
                                                return (
                                                    <button
                                                        key={item.label}
                                                        onClick={() => setActiveTab(item.label)}
                                                        className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors w-full text-left ${isActive
                                                            ? "bg-white text-primary font-bold shadow-sm border-l-4 border-primary"
                                                            : "text-slate-600 hover:bg-slate-100 hover:text-institutional"
                                                            }`}
                                                    >
                                                        <span>{item.label}</span>
                                                        {isActive && (
                                                            <span className="material-symbols-outlined text-sm">
                                                                arrow_forward_ios
                                                            </span>
                                                        )}
                                                    </button>
                                                );
                                            })}
                                        </nav>
                                    </div>
                                </ScrollReveal>

                                <ScrollReveal delay={0.2} variant="fade-right">
                                    <div className="bg-institutional text-white rounded-xl p-6 relative overflow-hidden">
                                        <div className="relative z-10">
                                            <h4 className="font-bold text-xl mb-2">
                                                Inscrições Abertas
                                            </h4>
                                            <p className="text-sm text-slate-300 mb-4">
                                                O ano letivo 2026/2027 está quase a começar. Garanta o seu
                                                lugar.
                                            </p>
                                            <Link href="/candidatura" className="w-full inline-block text-center bg-primary hover:bg-orange-600 text-white font-bold py-2.5 rounded-lg text-sm transition-colors">
                                                Candidatar-se Agora
                                            </Link>
                                        </div>
                                        <div className="absolute -bottom-4 -right-4 text-white/5">
                                            <span className="material-symbols-outlined text-9xl">
                                                school
                                            </span>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </aside>

                        {/* Content Container */}
                        <div className="w-full lg:w-3/4 space-y-16">
                            {activeTab === "História e Legado" && (
                                <>
                                    <ScrollReveal>
                                        <section>
                                            <h2 className="text-3xl font-extrabold text-institutional mb-6">
                                                Uma Tradição de Excelência
                                            </h2>
                                            <div className="prose prose-lg prose-slate max-w-none text-slate-600">
                                                <p className="mb-4">
                                                    A Universidade Gregório Semedo (UGS) afirma-se como um farol
                                                    de aprendizagem superior em Angola, dedicada a promover o
                                                    crescimento intelectual e o desenvolvimento profissional.
                                                    Estabelecida com a visão de transformar o panorama
                                                    educativo, a UGS tem evoluído consistentemente para
                                                    responder às exigências de uma sociedade global dinâmica.
                                                </p>
                                                <p>
                                                    A nossa instituição orgulha-se de um currículo académico
                                                    rigoroso, de um corpo docente distinto e de um compromisso
                                                    com a investigação que aborda desafios do mundo real.
                                                    Acreditamos que a educação vai para além da sala de aula,
                                                    cultivando pensadores críticos e líderes éticos prontos
                                                    para contribuir significativamente para as suas
                                                    comunidades.
                                                </p>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                                                <div className="rounded-2xl overflow-hidden h-64 shadow-lg relative group">
                                                    <div
                                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                                        style={{ backgroundImage: "url('/images/vida-academica-vibrante.jpg')" }}
                                                    ></div>
                                                    <div className="absolute inset-0 bg-gradient-to-t from-institutional/80 to-transparent flex items-end p-6">
                                                        <span className="text-white font-bold text-lg">
                                                            Vida Académica Vibrante
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="rounded-2xl overflow-hidden h-64 shadow-lg relative group">
                                                    <div
                                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                                        style={{ backgroundImage: "url('/images/auditorios-de-ultima-geracao.jpg')" }}
                                                    ></div>
                                                    <div className="absolute inset-0 bg-gradient-to-t from-institutional/80 to-transparent flex items-end p-6">
                                                        <span className="text-white font-bold text-lg">
                                                            Auditórios de Última Geração
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </ScrollReveal>

                                    <section>
                                        <ScrollReveal>
                                            <h2 className="text-2xl font-bold text-institutional mb-8 border-l-4 border-primary pl-4">
                                                Cronologia da Nossa História
                                            </h2>
                                        </ScrollReveal>
                                        <div className="relative border-l-2 border-slate-200 ml-3 md:ml-6 space-y-12">
                                            {[
                                                {
                                                    year: "2004",
                                                    title: "Fundação",
                                                    desc: "A Universidade Gregório Semedo foi oficialmente fundada, iniciando com três faculdades e a visão de mudar o paradigma educativo em Luanda.",
                                                },
                                                {
                                                    year: "2010",
                                                    title: "Expansão do Campus",
                                                    desc: "Inauguração do novo edifício principal do campus, com laboratórios modernos, uma vasta biblioteca e maior capacidade de salas de aula.",
                                                    image:
                                                        "https://lh3.googleusercontent.com/aida-public/AB6AXuAZPDf4EpdB_utuXhqVMXXAdMzHpzM9ZNYec8-n2Fub28RTRNzgePGT1d8_UxmWfGzEs26Ri2f5SvWPHBWAE4x0vkzFl08SRLRGhREbwgp3Zqr9H5qbU4ZYgoAjQ_8PmAuqoYK8lFolHheSuO5Mxq_PNMLKx_YjjozjIucZN_NwwZeOYJzuOnhg3aLnEHFhG6Fl7HHBIYYQgxVSWRdMIvvXR0dK1qcDDYwQ--73Hs722q-W-kZ1fIirAwk4bbus6d8KJwHNPHNSMxMD",
                                                },
                                                {
                                                    year: "2016",
                                                    title: "Acreditação Internacional",
                                                    desc: "A UGS alcançou parcerias internacionais fundamentais e a acreditação dos seus programas de Gestão e Direito.",
                                                },
                                                {
                                                    year: "2023",
                                                    title: "Transformação Digital",
                                                    desc: "Lançamento do portal do aluno digital totalmente integrado e salas de aula de aprendizagem híbrida.",
                                                },
                                            ].map((item, idx) => (
                                                <ScrollReveal key={idx} delay={idx * 0.1} variant="fade-up">
                                                    <div className="relative pl-8 md:pl-12 group">
                                                        <div className="absolute -left-[9px] top-0 size-5 rounded-full border-4 border-white bg-slate-300 group-hover:bg-primary transition-colors"></div>
                                                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                                                            <span className="text-2xl font-black text-institutional">
                                                                {item.year}
                                                            </span>
                                                            <span className="text-sm font-bold text-primary uppercase tracking-wider">
                                                                {item.title}
                                                            </span>
                                                        </div>
                                                        <p className="text-slate-600 mb-4">{item.desc}</p>
                                                        {item.image && (
                                                            <div className="rounded-xl overflow-hidden w-full max-w-sm h-40 mt-3 border border-slate-100">
                                                                <div
                                                                    className="w-full h-full bg-center bg-cover"
                                                                    style={{ backgroundImage: `url('${item.image}')` }}
                                                                ></div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </ScrollReveal>
                                            ))}
                                        </div>
                                    </section>
                                </>
                            )}

                            {activeTab === "Missão e Visão" && (
                                <ScrollReveal variant="fade-up">
                                    <section className="grid md:grid-cols-2 gap-8">
                                        <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-xl shadow-slate-200/40 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-4 opacity-5">
                                                <span className="material-symbols-outlined text-8xl text-institutional">
                                                    visibility
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-institutional mb-4 flex items-center gap-2">
                                                <span className="material-symbols-outlined text-primary">
                                                    target
                                                </span>
                                                A Nossa Missão
                                            </h3>
                                            <p className="text-slate-600 leading-relaxed">
                                                Proporcionar um ensino superior de alta qualidade que
                                                promova a formação científica, técnica, cultural e humana,
                                                estimulando a inovação e o pensamento crítico para
                                                contribuir para o desenvolvimento sustentável de Angola.
                                            </p>
                                        </div>
                                        <div className="bg-white border border-slate-100 p-8 rounded-2xl shadow-xl shadow-slate-200/40 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-4 opacity-5">
                                                <span className="material-symbols-outlined text-8xl text-institutional">
                                                    light_mode
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-institutional mb-4 flex items-center gap-2">
                                                <span className="material-symbols-outlined text-primary">
                                                    visibility
                                                </span>
                                                A Nossa Visão
                                            </h3>
                                            <p className="text-slate-600 leading-relaxed">
                                                Ser uma universidade de referência no contexto nacional e
                                                internacional, reconhecida pela excelência académica,
                                                qualidade da investigação e pela competência dos nossos
                                                graduados no mercado de trabalho.
                                            </p>
                                        </div>
                                    </section>
                                </ScrollReveal>
                            )}

                            {activeTab === "Equipe Reitoral" && (
                                <ScrollReveal variant="fade-up">
                                    <section>
                                        <div className="flex items-center justify-between mb-8">
                                            <h2 className="text-2xl font-bold text-institutional border-l-4 border-primary pl-4">
                                                    Equipe Reitoral
                                            </h2>
                                            <Link
                                                className="text-sm font-bold text-primary hover:text-orange-600 flex items-center gap-1"
                                                href="#"
                                            >
                                                Ver Equipa Completa{" "}
                                                <span className="material-symbols-outlined text-sm">
                                                    arrow_forward
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {[
                                                {
                                                    name: "Prof. Euclides Nenga Manuel Sacomboio",
                                                    role: "Magnífico Reitor",
                                                    desc: "",
                                                    img: "/images/reitor-placeholder.png",
                                                },
                                                {
                                                    name: "Prof. Doutor Manuel Afonso",
                                                    role: "Vice-Reitor para Área Académica e Apoio ao Estudante",
                                                    desc: "",
                                                    img: "/images/vice-reitor-para-area-academica-e-apoio-ao-estudante-prof-doutor-manuel-afonso-1272x1536.jpg",
                                                },
                                                {
                                                    name: "Prof. Doutor Mpanzo Domingos",
                                                    role: "Vice-Reitor para Área Científica e Pós-graduação",
                                                    desc: "",
                                                    img: "/images/vice-reitor-para-area-cientifica-e-pos-graduacao-prof-doutor-mpanzo-domingos-1149x1536.jpg",
                                                },
                                            ].map((person, idx) => (
                                                <ScrollReveal key={idx} delay={idx * 0.1} variant="scale-up">
                                                    <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 items-center">
                                                        <div className="size-20 shrink-0 rounded-full bg-slate-200 overflow-hidden relative">
                                                            <Image
                                                                src={person.img}
                                                                alt={person.name}
                                                                fill                                                                className="object-cover"
                                                            />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-institutional text-lg">
                                                                {person.name}
                                                            </h4>
                                                            <p className="text-primary text-sm font-medium mb-1">
                                                                {person.role}
                                                            </p>
                                                            <p className="text-xs text-slate-500 line-clamp-2">
                                                                {person.desc}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </ScrollReveal>
                                            ))}
                                        </div>
                                    </section>
                                </ScrollReveal>
                            )}

                            {activeTab === "Instalações do Campus" && (
                                <ScrollReveal variant="fade-up">
                                    <section>
                                        <h2 className="text-3xl font-extrabold text-institutional mb-6 border-l-4 border-primary pl-4">
                                            Infraestruturas Modernas
                                        </h2>
                                        <p className="text-lg text-slate-600 mb-8 max-w-3xl">
                                            O nosso campus foi desenhado para inspirar e facilitar a aprendizagem.
                                            Com instalações de ponta, oferecemos um ambiente propício ao desenvolvimento académico e pessoal.
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                                            <div className="rounded-2xl overflow-hidden h-64 shadow-lg relative group">
                                                <div
                                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAZPDf4EpdB_utuXhqVMXXAdMzHpzM9ZNYec8-n2Fub28RTRNzgePGT1d8_UxmWfGzEs26Ri2f5SvWPHBWAE4x0vkzFl08SRLRGhREbwgp3Zqr9H5qbU4ZYgoAjQ_8PmAuqoYK8lFolHheSuO5Mxq_PNMLKx_YjjozjIucZN_NwwZeOYJzuOnhg3aLnEHFhG6Fl7HHBIYYQgxVSWRdMIvvXR0dK1qcDDYwQ--73Hs722q-W-kZ1fIirAwk4bbus6d8KJwHNPHNSMxMD')" }}
                                                ></div>
                                                <div className="absolute inset-0 bg-gradient-to-t from-institutional/80 to-transparent flex items-end p-6">
                                                    <span className="text-white font-bold text-lg">
                                                        Biblioteca Central
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="rounded-2xl overflow-hidden h-64 shadow-lg relative group">
                                                <div
                                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBfKdbgPuVJ82esPItv0FxhWj0t9CFPXO3oKi8eN66O60vJ-FJJ3xwzlrvT2EI7q_GB9doPwzsVth1wJzoa2cQnFWcKp3ImuOvnm-9ds__oDR24SfE03zOawIuYU_PBvi2zLb5KYW6bnCyIv8f4gN1y4KfQ3DVCVpE9jk4iRdxYOWwlarW_QJ0uyb1VQWbrEWyddFClmvid_X0mgM2esISBfp8dq6F90WWRhdRTeq6antYjUpi9a6eh1Nk-o6Yg2Q3M_l6MQHi2pYgC')" }}
                                                ></div>
                                                <div className="absolute inset-0 bg-gradient-to-t from-institutional/80 to-transparent flex items-end p-6">
                                                    <span className="text-white font-bold text-lg">
                                                        Auditórios e Laboratórios
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </ScrollReveal>
                            )}

                            {activeTab === "Decania" && (
                                <ScrollReveal variant="fade-up">
                                    <section>
                                        <h2 className="text-3xl font-extrabold text-institutional mb-6 border-l-4 border-primary pl-4">
                                            Decania
                                        </h2>
                                        <p className="text-lg text-slate-600 mb-10 max-w-3xl">
                                            Conheça os líderes académicos que orientam as nossas faculdades, garantindo a excelência no ensino, investigação e desenvolvimento institucional.
                                        </p>

                                        {/* Faculdade de Engenharia e Novas Tecnologias */}
                                        <div className="mb-12">
                                            <h3 className="text-xl font-bold text-institutional mb-6 flex items-center gap-2">
                                                <span className="material-symbols-outlined text-primary">engineering</span>
                                                Faculdade de Engenharia e Novas Tecnologias
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                {[
                                                    {
                                                        name: "Carlos Alberto Messani",
                                                        role: "Decano",
                                                        img: "/images/decania/3-carlos-alberto-messani-decano-da-faculdade-de-engenharia-e-novas-tecnologias.jpg",
                                                    },
                                                    {
                                                        name: "Pedro Senga Zódima",
                                                        role: "Vice-Decano para Área Académica",
                                                        img: "/images/decania/vice-decano-academico-engenharia-novas-tecnologias.jpg",
                                                    },
                                                    {
                                                        name: "Yosbel C. Izquierdo",
                                                        role: "Vice-Decano para Área Científica",
                                                        img: "/images/decania/4-yosbel-c-izquierdo-vice-decano-para-area-cientifica-da-faculdade-de-engenharia-e-novas-tecnologias-768x1024.jpg",
                                                    },
                                                ].map((person, idx) => (
                                                    <ScrollReveal key={idx} delay={idx * 0.1} variant="scale-up">
                                                        <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 items-center">
                                                            <div className="size-20 shrink-0 rounded-full bg-slate-200 overflow-hidden relative">
                                                                <Image
                                                                    src={person.img}
                                                                    alt={person.name}
                                                                    fill                                                                    className="object-cover object-top"
                                                                />
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-institutional text-lg">{person.name}</h4>
                                                                <p className="text-primary text-sm font-medium">{person.role}</p>
                                                            </div>
                                                        </div>
                                                    </ScrollReveal>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Faculdade de Ciências Económicas e Empresariais */}
                                        <div className="mb-12">
                                            <h3 className="text-xl font-bold text-institutional mb-6 flex items-center gap-2">
                                                <span className="material-symbols-outlined text-primary">account_balance</span>
                                                Faculdade de Ciências Económicas e Empresariais
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                {[
                                                    {
                                                        name: "Prof. Doutor Crispim Camango",
                                                        role: "Decano",
                                                        img: "/images/decania/decano-da-faculdade-de-ciencias-economicas-e-empresariais-1369x1536.jpg",
                                                    },
                                                    {
                                                        name: "Osmerivaldo Simão",
                                                        role: "Vice-Decano para Área Académica",
                                                        img: "/images/decania/vice-decano-para-area-academica-da-faculdade-de-ciencias-economicas-e-empresariais-768x963.jpg",
                                                    },
                                                    {
                                                        name: "Prof. Doutora Elizabeth Chaviano",
                                                        role: "Vice-Decana para Área Científica",
                                                        img: "/images/decania/vice-decana-para-area-cientifica-da-faculdade-de-ciencias-economicas-e-empresariais-768x971.jpg",
                                                    },
                                                ].map((person, idx) => (
                                                    <ScrollReveal key={idx} delay={idx * 0.1} variant="scale-up">
                                                        <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 items-center">
                                                            <div className="size-20 shrink-0 rounded-full bg-slate-200 overflow-hidden relative">
                                                                <Image
                                                                    src={person.img}
                                                                    alt={person.name}
                                                                    fill                                                                    className="object-cover object-top"
                                                                />
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-institutional text-lg">{person.name}</h4>
                                                                <p className="text-primary text-sm font-medium">{person.role}</p>
                                                            </div>
                                                        </div>
                                                    </ScrollReveal>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Faculdade de Ciências Sociais e Desenvolvimento Humano */}
                                        <div className="mb-12">
                                            <h3 className="text-xl font-bold text-institutional mb-6 flex items-center gap-2">
                                                <span className="material-symbols-outlined text-primary">groups</span>
                                                Faculdade de Ciências Sociais e Desenvolvimento Humano
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                {[
                                                    {
                                                        name: "Erineu Napoleão Kalupeteca",
                                                        role: "Decano",
                                                        img: "/images/decania/decano-ciencias-sociais-desenvolvimento-humano.jpeg",
                                                    },
                                                    {
                                                        name: "Justino Chiyo",
                                                        role: "Vice-Decano para Área Académica",
                                                        img: "/images/decania/vice-decano-para-area-academica-da-faculdade-de-ciencias-sociais-e-desenvolvimento-humano-768x875.jpg",
                                                    },
                                                    {
                                                        name: "Ivanov César",
                                                        role: "Vice-Decano para Área Científica",
                                                        img: "/images/decania/vice-decano-para-area-cientifica-da-faculdade-de-ciencias-sociais-e-desenvolvimento-humano-768x905.jpg",
                                                    },
                                                ].map((person, idx) => (
                                                    <ScrollReveal key={idx} delay={idx * 0.1} variant="scale-up">
                                                        <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 items-center">
                                                            <div className="size-20 shrink-0 rounded-full bg-slate-200 overflow-hidden relative">
                                                                <Image
                                                                    src={person.img}
                                                                    alt={person.name}
                                                                    fill                                                                    className="object-cover object-top"
                                                                />
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-institutional text-lg">{person.name}</h4>
                                                                <p className="text-primary text-sm font-medium">{person.role}</p>
                                                            </div>
                                                        </div>
                                                    </ScrollReveal>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Faculdade de Ciências Jurídicas e Políticas */}
                                        <div className="mb-12">
                                            <h3 className="text-xl font-bold text-institutional mb-6 flex items-center gap-2">
                                                <span className="material-symbols-outlined text-primary">gavel</span>
                                                Faculdade de Ciências Jurídicas e Políticas
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                {[
                                                    {
                                                        name: "Pedro Afonso",
                                                        role: "Vice-Decano para Área Científica",
                                                        img: "/images/decania/6-pedro-afonso-vice-decano-para-area-cientifica-da-da-faculdade-de-ciencias-e-juridicas-e-politicas-768x1024.jpg",
                                                    },
                                                ].map((person, idx) => (
                                                    <ScrollReveal key={idx} delay={idx * 0.1} variant="scale-up">
                                                        <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 items-center">
                                                            <div className="size-20 shrink-0 rounded-full bg-slate-200 overflow-hidden relative">
                                                                <Image
                                                                    src={person.img}
                                                                    alt={person.name}
                                                                    fill                                                                    className="object-cover object-top"
                                                                />
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-institutional text-lg">{person.name}</h4>
                                                                <p className="text-primary text-sm font-medium">{person.role}</p>
                                                            </div>
                                                        </div>
                                                    </ScrollReveal>
                                                ))}
                                            </div>
                                        </div>

                                    </section>
                                </ScrollReveal>
                            )}

                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
