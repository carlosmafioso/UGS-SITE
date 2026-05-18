"use client";

import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";
import Image from "next/image";

export const courses = [
    // LICENCIATURA COURSES
    {
        id: "ciencias-politicas",
        title: "Ciências Políticas e Administração do Território",
        faculty: "Faculdade de Ciências Humanas e Letras",
        duration: "4 Anos",
        level: "Licenciatura",
        desc: "Compreenda a dinâmica do poder, as políticas públicas e o desenvolvimento sustentável das regiões e municípios angolanos.",
        img: "/images/cursos/licenciatura/ciencia-politica-e-administracao-do-territorio.jpg",
    },
    {
        id: "direito",
        title: "Direito",
        faculty: "Faculdade de Ciências Jurídicas",
        duration: "4 Anos",
        level: "Licenciatura",
        desc: "Desenvolva uma compreensão abrangente dos sistemas jurídicos, pensamento crítico e raciocínio ético para a prática jurídica ou administração pública.",
        img: "/images/cursos/licenciatura/direito.jpg",
    },
    {
        id: "engenharia-informatica",
        title: "Engenharia Informática",
        faculty: "Faculdade de Engenharia e Arquitetura",
        duration: "4 Anos",
        level: "Licenciatura",
        desc: "Cobre o desenvolvimento de software corporativo, administração de redes e sistemas, preparando engenheiros para a economia digital global.",
        img: "/images/cursos/licenciatura/engenharia-informatica.jpg",
    },
    {
        id: "informatica-gestao-financeira",
        title: "Informática de Gestão Financeira",
        faculty: "Faculdade de Economia e Gestão",
        duration: "4 Anos",
        level: "Licenciatura",
        desc: "Uma aliança poderosa entre a tecnologia da informação e as finanças corporativas, focada em análise de dados e sistemas financeiros.",
        img: "/images/cursos/licenciatura/informatica-de-gestao-financeira.jpg",
    },
    {
        id: "gestao-comercial-marketing",
        title: "Gestão Comercial e Marketing",
        faculty: "Faculdade de Economia e Gestão",
        duration: "4 Anos",
        level: "Licenciatura",
        desc: "Formação em estratégias de mercado, comportamento do consumidor e vendas para construir marcas e negócios de sucesso.",
        img: "/images/cursos/licenciatura/gestao-comercial-e-marketing1.jpg",
    },
    {
        id: "organizacao-gestao-empresas",
        title: "Organização e Gestão de Empresas",
        faculty: "Faculdade de Economia e Gestão",
        duration: "4 Anos",
        level: "Licenciatura",
        desc: "Competências de liderança, análise financeira e operações estruturadas para a criação, transformação e gestão de PMEs e multinacionais.",
        img: "/images/cursos/licenciatura/organizacao-e-gestao-de-empresas.jpg",
    },
    {
        id: "gestao-recursos-humanos",
        title: "Gestão de Recursos Humanos",
        faculty: "Faculdade de Ciências Humanas",
        duration: "4 Anos",
        level: "Licenciatura",
        desc: "Preparação para a atração, retenção, formação e valorização do capital humano nas organizações modernas de todos os setores.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8w4DK-5b8a5Ci3TwPgqFI2FJ3v37reebjXrkZeMSRib6eOwHl_8uRhHEtNC3UjarhTtIYsHwMuE5OKBnM4VtY0UYv763BlZNQkQnhm_Rq2lssKGKT867iNquJUeSoyIURZnqPE6slSs-8AhsnZwLUhx2gOXTnvNVnUBBlvUuyRgcdxK12FnYFI3LBXLS_B_2Qio9ng68qa836B4wQAIsOAnnFNssPn5A5rWO0elMgwqmRuPbzQKRaQPGeG_gknUlIJmjnFJdzeMyR",
    },
    {
        id: "comunicacao-empresarial-linguas",
        title: "Comunicação Empresarial e Línguas",
        faculty: "Faculdade de Ciências Humanas e Letras",
        duration: "4 Anos",
        level: "Licenciatura",
        desc: "Desenvolvimento de perfis especialistas em comunicação corporativa, relações públicas e proficiência multilinguística.",
        img: "/images/cursos/licenciatura/comunicacao-empresarial-e-linguas.jpg",
    },

    // MESTRADO COURSES
    {
        id: "mestrado-direito",
        title: "Mestrado em Direito",
        faculty: "Faculdade de Ciências Jurídicas",
        duration: "2 Anos",
        level: "Mestrado",
        desc: "Especialidades em Ciências Jurídico-Empresariais e Ciências Jurídico-Forenses, focadas no direito empresarial e prática forense.",
        img: "/images/cursos/mestrado/direito.png",
    },
    {
        id: "mestrado-engenharia-informatica",
        title: "Mestrado em Engenharia Informática",
        faculty: "Faculdade de Engenharia e Arquitetura",
        duration: "2 Anos",
        level: "Mestrado",
        desc: "Especialidades em Desenvolvimento Mobile e Gestão de Redes de Computadores, preparando profissionais para os modernos desafios tecnológicos.",
        img: "/images/cursos/mestrado/engenharia-informatica.png",
    },
    {
        id: "mestrado-gestao-empresas",
        title: "Mestrado em Gestão de Empresas",
        faculty: "Faculdade de Economia e Gestão",
        duration: "2 Anos",
        level: "Mestrado",
        desc: "Especialidades em Gestão Comercial, Finanças, Logística e Marketing para o desenvolvimento de competências estratégicas e práticas empresariais.",
        img: "/images/cursos/mestrado/organizacao-e-gestao-de-empresas.png",
    },
    {
        id: "mestrado-recursos-humanos",
        title: "Mestrado em Recursos Humanos",
        faculty: "Faculdade de Ciências Humanas",
        duration: "2 Anos",
        level: "Mestrado",
        desc: "Especialidades em Gestão do Potencial Humano e Gestão Estratégica, focadas na liderança organizacional e valorização das pessoas.",
        img: "/images/cursos/mestrado/gestao-de-recursos-humanos.png",
    },

    // PÓS-GRADUAÇÕES COURSES
    {
        id: "pos-dev-mobile",
        title: "Desenvolvimento de Aplicações para Dispositivos Móveis",
        faculty: "Faculdade de Engenharia e Arquitetura",
        duration: "1 Ano",
        level: "Pós-Graduação",
        desc: "Especialização avançada na criação e arquitetura de aplicações nativas e multiplataforma para ecossistemas mobile.",
        img: "/images/cursos/mestrado/engenharia-informatica.png",
    },
    {
        id: "pos-direito-empresarial",
        title: "Direito Empresarial (Ciências Jurídico-Empresariais)",
        faculty: "Faculdade de Ciências Jurídicas",
        duration: "1 Ano",
        level: "Pós-Graduação",
        desc: "Aprofundamento em legislação corporativa, contratos mercantis e resolução de litígios no ambiente empresarial moderno.",
        img: "/images/cursos/mestrado/direito.png",
    },
    {
        id: "pos-direito-juridico",
        title: "Direito Jurídico (Ciências Jurídico-Forenses)",
        faculty: "Faculdade de Ciências Jurídicas",
        duration: "1 Ano",
        level: "Pós-Graduação",
        desc: "Foco na prática processual, investigação forense e na estratégia de litígio para profissionais de direito e advogados.",
        img: "/images/cursos/mestrado/direito.png",
    },
    {
        id: "pos-redes-computadores",
        title: "Gestão de Redes de Computadores e Sistemas de Comunicações",
        faculty: "Faculdade de Engenharia e Arquitetura",
        duration: "1 Ano",
        level: "Pós-Graduação",
        desc: "Desenvolvimento de perícia técnica na administração, segurança e infraestrutura de redes empresariais.",
        img: "/images/cursos/mestrado/engenharia-informatica.png",
    },
    {
        id: "pos-estrategia-rh",
        title: "Gestão Estratégica de Recursos Humanos",
        faculty: "Faculdade de Ciências Humanas",
        duration: "1 Ano",
        level: "Pós-Graduação",
        desc: "Capacitação para alinhar o capital humano aos objetivos estratégicos e de rentabilidade da organização.",
        img: "/images/cursos/mestrado/gestao-de-recursos-humanos.png",
    },
    {
        id: "pos-potencial-humano",
        title: "Gestão e Desenvolvimento do Potencial Humano em Ambiente Empresarial",
        faculty: "Faculdade de Ciências Humanas",
        duration: "1 Ano",
        level: "Pós-Graduação",
        desc: "Foco na retenção de talentos, mentoring, coaching corporativo e criação de ambientes de trabalho de alta performance.",
        img: "/images/cursos/mestrado/gestao-de-recursos-humanos.png",
    },
    {
        id: "pos-marketing-publicidade",
        title: "Marketing, Publicidade e Comunicação Empresarial",
        faculty: "Faculdade de Economia e Gestão",
        duration: "1 Ano",
        level: "Pós-Graduação",
        desc: "Especialização em planeamento de campanhas omnicanal, branding e comunicação corporativa digital e tradicional.",
        img: "/images/cursos/licenciatura/gestao-comercial-e-marketing1.jpg",
    },
    {
        id: "pos-financas-mercados",
        title: "Finanças e Mercados Financeiros",
        faculty: "Faculdade de Economia e Gestão",
        duration: "1 Ano",
        level: "Pós-Graduação",
        desc: "Análise avançada de investimentos, gestão de carteiras, risco corporativo e dinâmica dos mercados de capitais.",
        img: "/images/cursos/mestrado/organizacao-e-gestao-de-empresas.png",
    },
    {
        id: "pos-gestao-comercial",
        title: "Gestão Comercial",
        faculty: "Faculdade de Economia e Gestão",
        duration: "1 Ano",
        level: "Pós-Graduação",
        desc: "Estratégias avançadas de negociação, gestão de equipas de vendas e expansão de quota de mercado.",
        img: "/images/cursos/mestrado/organizacao-e-gestao-de-empresas.png",
    },
    {
        id: "pos-gestao-logistica",
        title: "Gestão da Logística e dos Transportes",
        faculty: "Faculdade de Economia e Gestão",
        duration: "1 Ano",
        level: "Pós-Graduação",
        desc: "Otimização de cadeias de abastecimento, gestão de frota, importação/exportação e operações aduaneiras.",
        img: "/images/cursos/mestrado/organizacao-e-gestao-de-empresas.png",
    },
    {
        id: "pos-governanca-corporativa",
        title: "Governança Corporativa",
        faculty: "Faculdade de Economia e Gestão",
        duration: "1 Ano",
        level: "Pós-Graduação",
        desc: "Mecanismos de compliance, ética empresarial, auditoria interna e responsabilidade social em grandes organizações.",
        img: "/images/cursos/mestrado/organizacao-e-gestao-de-empresas.png",
    },
    {
        id: "pos-gestao-projectos",
        title: "Gestão de Projectos",
        faculty: "Faculdade de Economia e Gestão",
        duration: "1 Ano",
        level: "Pós-Graduação",
        desc: "Metodologias ágeis e tradicionais (PMBOK) para a conceção, execução e entrega de projetos complexos.",
        img: "/images/cursos/mestrado/organizacao-e-gestao-de-empresas.png",
    }
];

function CourseCarousel({ title, coursesList }: { title: string, coursesList: typeof courses }) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = current.clientWidth * 0.8;
            current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    if (coursesList.length === 0) return null;

    return (
        <div className="mb-20">
            <div className="flex justify-between items-center mb-10 px-6 sm:px-0">
                <h2 className="text-3xl font-extrabold text-institutional border-l-4 border-primary pl-4">{title}</h2>
                <div className="flex gap-2">
                    <button onClick={() => scroll('left')} className="size-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-primary transition-colors shadow-sm">
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <button onClick={() => scroll('right')} className="size-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-primary transition-colors shadow-sm">
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-6 sm:gap-8 snap-x snap-mandatory pb-8 pt-4 px-6 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
                {coursesList.map((course, idx) => (
                    <div key={course.id} className="min-w-[300px] w-[300px] md:min-w-[360px] md:w-[360px] lg:min-w-[400px] lg:w-[400px] snap-start shrink-0 flex">
                        <ScrollReveal delay={idx * 0.1} variant="scale-up">
                            <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/40 hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={course.img}
                                        alt={course.title}
                                        fill
                                        unoptimized
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 backdrop-blur-md text-institutional text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                                            {course.faculty}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-1">
                                    <div className="flex items-center gap-4 mb-3">
                                        <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                                            <span className="material-symbols-outlined text-sm text-primary">
                                                schedule
                                            </span>
                                            {course.duration}
                                        </span>
                                        <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                                            <span className="material-symbols-outlined text-sm text-primary">
                                                verified
                                            </span>
                                            {course.level}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-institutional mb-4 group-hover:text-primary transition-colors leading-tight min-h-[56px]">
                                        {course.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                                        {course.desc}
                                    </p>
                                    <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                                        <Link
                                            href={`/cursos/${course.id}`}
                                            className="text-institutional font-bold text-sm flex items-center gap-1 hover:text-primary transition-colors"
                                        >
                                            Detalhes do Curso
                                            <span className="material-symbols-outlined text-sm">
                                                arrow_forward
                                            </span>
                                        </Link>
                                        <Link href="/contacto">
                                            <button className="size-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-primary transition-colors">
                                                <span className="material-symbols-outlined text-lg">
                                                    mail
                                                </span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function CursosPage() {
    const licenciaturas = courses.filter(c => c.level === "Licenciatura");
    const mestrados = courses.filter(c => c.level === "Mestrado");
    const posGraduacoes = courses.filter(c => c.level === "Pós-Graduação");

    return (
        <div className="min-h-screen bg-background-light text-slate-900">
            <Navbar activePage="/cursos" />
            <main>
                {/* Banner Hero */}
                <section className="relative w-full h-[400px] flex items-center bg-institutional overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-institutional/95 via-institutional/80 to-institutional/40 z-10"></div>
                        <div
                            className="w-full h-full bg-center bg-cover"
                            style={{
                                backgroundImage:
                                    "url('/images/cursos.png')",
                            }}
                        ></div>
                    </div>
                    <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-10">
                        <ScrollReveal variant="fade-right">
                            <div className="max-w-3xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full text-xs font-bold mb-6 tracking-wide">
                                    <span className="material-symbols-outlined text-sm text-primary">
                                        school
                                    </span>
                                    OFERTA ACADÉMICA
                                </div>
                                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                                    Cursos <span className="text-primary">Académicos</span>
                                </h1>
                                <p className="text-lg text-slate-300 leading-relaxed font-medium max-w-2xl">
                                    Explore a nossa vasta gama de programas de licenciatura e mestrado
                                    concebidos para equipar os estudantes com as competências e o
                                    conhecimento necessários para o sucesso no mercado de trabalho
                                    atual.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Search & Filter Bar */}
                <section className="relative z-30 -mt-10 mb-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <ScrollReveal variant="fade-up">
                            <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-4 md:p-6">
                                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 items-end">
                                    <div className="lg:col-span-2 space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                                            Pesquisar Cursos
                                        </label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                                search
                                            </span>
                                            <input
                                                className="w-full pl-10 pr-4 py-3 bg-slate-50 border-slate-100 rounded-xl text-sm focus:ring-2 focus:ring-primary transition-all"
                                                placeholder="ex. Direito, Informática..."
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                                            Faculdade
                                        </label>
                                        <select className="w-full px-4 py-3 bg-slate-50 border-slate-100 rounded-xl text-sm focus:ring-2 focus:ring-primary transition-all">
                                            <option>Todas as Faculdades</option>
                                            <option>Ciências Jurídicas</option>
                                            <option>Economia e Gestão</option>
                                            <option>Engenharia e Arquitetura</option>
                                            <option>Ciências Humanas e Letras</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                                            Duração
                                        </label>
                                        <select className="w-full px-4 py-3 bg-slate-50 border-slate-100 rounded-xl text-sm focus:ring-2 focus:ring-primary transition-all">
                                            <option>Qualquer Duração</option>
                                            <option>4 Anos</option>
                                            <option>5 Anos</option>
                                            <option>2 Anos</option>
                                        </select>
                                    </div>
                                    <button className="bg-institutional text-white h-12 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors">
                                        <span className="material-symbols-outlined text-lg">
                                            filter_list
                                        </span>
                                        Filtrar
                                    </button>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Courses Carousels Section */}
                <section className="py-4 bg-background-light">
                    <div className="max-w-7xl mx-auto px-0 sm:px-6 overflow-hidden">
                        <CourseCarousel title="Cursos de Licenciatura" coursesList={licenciaturas} />
                        <CourseCarousel title="Cursos de Mestrado" coursesList={mestrados} />
                        <CourseCarousel title="Pós-Graduações / Especializações" coursesList={posGraduacoes} />
                    </div>
                </section>

                {/* Advisory CTA */}
                <section className="py-24 bg-slate-50">
                    <div className="max-w-4xl mx-auto px-6">
                        <ScrollReveal variant="scale-up">
                            <div className="bg-institutional rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                                <div className="relative z-10">
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                                        Precisa de Aconselhamento Académico?
                                    </h2>
                                    <p className="text-lg text-slate-300 mb-10 leading-relaxed font-medium">
                                        Os nossos conselheiros estão disponíveis para ajudar a
                                        escolher o curso certo para os seus objetivos de carreira.
                                        Marque uma sessão de orientação hoje mesmo.
                                    </p>
                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                        <button className="bg-primary text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-orange-600 transition-colors shadow-xl shadow-primary/20">
                                            Falar com um Conselheiro
                                        </button>
                                        <Link
                                            href="/campus"
                                            className="text-white font-bold hover:text-primary transition-colors underline underline-offset-8"
                                        >
                                            Ver Vida no Campus
                                        </Link>
                                    </div>
                                </div>
                                {/* Decorative Icon */}
                                <div className="absolute -bottom-10 -right-10 text-white/5">
                                    <span className="material-symbols-outlined text-[200px]">
                                        lightbulb
                                    </span>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
