"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CampusSlot } from "@/components/CampusSlot";
import Link from "next/link";
import Image from "next/image";

const campusGallery = [
    {
        title: "Actividades Administrativas",
        images: [
            "/images/campus/Actividades Administrativas/União UGS e UÓR.jpg",
            "/images/campus/Actividades Administrativas/611662685_886691647069739_8104502169508682476_n.jpg",
            "/images/campus/Actividades Administrativas/612015582_886691363736434_8040306337078013071_n.jpg",
            "/images/campus/Actividades Administrativas/612068848_886689570403280_4194881735953739809_n.jpg",
            "/images/campus/Actividades Administrativas/612154885_886691463736424_6149985773062116803_n.jpg",
            "/images/campus/Actividades Administrativas/612315522_886691120403125_4664828301956937093_n.jpg",
            "/images/campus/Actividades Administrativas/613041941_886691090403128_1351204333529591979_n.jpg",
            "/images/campus/Actividades Administrativas/673975616_968574962214740_358964964024974317_n.jpg",
            "/images/campus/Actividades Administrativas/676779534_968574992214737_7716244672753013356_n.jpg",
            "/images/campus/Actividades Administrativas/678783656_968574968881406_2154445807446645216_n.jpg",
            "/images/campus/Actividades Administrativas/679027886_969348275470742_2835941762995908464_n.jpg",
            "/images/campus/Actividades Administrativas/679155721_969347975470772_1071248168060430127_n.jpg",
            "/images/campus/Actividades Administrativas/679197817_969347642137472_9093521829223735644_n.jpg",
        ],
    },
    {
        title: "Actividades Recreativas e Culturais",
        images: [
            "/images/campus/Actividades recreativas e culturais/Festival Cultural.jpg",
            "/images/campus/Actividades recreativas e culturais/655670085_948414160897487_7585248797591567707_n.jpg",
            "/images/campus/Actividades recreativas e culturais/656693354_948414164230820_8966053221045503770_n.jpg",
            "/images/campus/Actividades recreativas e culturais/657088887_948413864230850_4124230780841967057_n.jpg",
            "/images/campus/Actividades recreativas e culturais/657189783_948414167564153_7457171577905885937_n.jpg",
            "/images/campus/Actividades recreativas e culturais/657264629_948414084230828_7124490929657482393_n.jpg",
            "/images/campus/Actividades recreativas e culturais/657387719_948413830897520_7873968369954432742_n.jpg",
            "/images/campus/Actividades recreativas e culturais/658296785_948413854230851_3306757783137568588_n.jpg",
            "/images/campus/Actividades recreativas e culturais/661657476_948413834230853_5284595705268613594_n.jpg",
        ],
    },
    {
        title: "Outorgas e Condecorações Académicas",
        images: [
            "/images/campus/Ortogas e condecorações académicas/597547441_865279582544279_6551297930881187657_n.jpg",
            "/images/campus/Ortogas e condecorações académicas/596815289_866936659045238_1796771575073827497_n.jpg",
            "/images/campus/Ortogas e condecorações académicas/596822700_866943632377874_6820515976535222251_n.jpg",
            "/images/campus/Ortogas e condecorações académicas/596932012_866936949045209_5645744483971849619_n.jpg",
            "/images/campus/Ortogas e condecorações académicas/597386229_866937382378499_5201727742211920879_n.jpg",
            "/images/campus/Ortogas e condecorações académicas/597742043_866935519045352_4838010364194404053_n.jpg",
            "/images/campus/Ortogas e condecorações académicas/597822715_866942449044659_6515539945116941172_n.jpg",
            "/images/campus/Ortogas e condecorações académicas/601993794_879415927797311_3590068202842307911_n.jpg",
            "/images/campus/Ortogas e condecorações académicas/605117038_879415931130644_2319150064664155186_n.jpg",
            "/images/campus/Ortogas e condecorações académicas/605138397_879415921130645_2273328582293023700_n.jpg",
            "/images/campus/Ortogas e condecorações académicas/605544220_879413407797563_6295684762741146765_n.jpg",
            "/images/campus/Ortogas e condecorações académicas/605721914_879415811130656_3760684160070012828_n.jpg",
            "/images/campus/Ortogas e condecorações académicas/605890549_879413554464215_4823321796454619771_n.jpg",
            "/images/campus/Ortogas e condecorações académicas/608808385_879416034463967_7072516703318054009_n.jpg",
        ],
    },
    {
        title: "Palestras em Salão Nobre",
        images: [
            "/images/campus/Palestras em Salão Nobre/PALESTRAS ACADÊMICAS.jpg",
            "/images/campus/Palestras em Salão Nobre/658043272_963718749367028_2094849666554263382_n.jpg",
            "/images/campus/Palestras em Salão Nobre/668456929_958520659886837_6383672894891120807_n.jpg",
            "/images/campus/Palestras em Salão Nobre/668584854_958520433220193_231573708226913221_n.jpg",
            "/images/campus/Palestras em Salão Nobre/668588449_958517806553789_2797471492406788644_n.jpg",
            "/images/campus/Palestras em Salão Nobre/671387644_963718632700373_8176971078595051089_n.jpg",
            "/images/campus/Palestras em Salão Nobre/671631662_963718252700411_7575350614378223602_n.jpg",
            "/images/campus/Palestras em Salão Nobre/671655708_963718099367093_2751129364900525157_n.jpg",
            "/images/campus/Palestras em Salão Nobre/672559830_963718049367098_5774126084626298052_n.jpg",
        ],
    },
    {
        title: "Tribunal Simulado",
        images: [
            "/images/campus/tribunal simulado/tribunal simulado.jpg",
            "/images/campus/tribunal simulado/696755459_984563763949193_3902543054747067210_n.jpg",
            "/images/campus/tribunal simulado/696927678_984563790615857_7179226683720151129_n.jpg",
            "/images/campus/tribunal simulado/697081102_984564003949169_5845944442163604669_n.jpg",
            "/images/campus/tribunal simulado/697162278_984563830615853_4898593723915325758_n.jpg",
            "/images/campus/tribunal simulado/697792554_984563310615905_8004036872223336184_n.jpg",
            "/images/campus/tribunal simulado/697792881_984563993949170_1577586580522066906_n.jpg",
        ],
    },
];

export default function CampusPage() {
    return (
        <div className="min-h-screen bg-background-light text-slate-900">
            <Navbar activePage="/campus" />
            <main>
                {/* Banner Hero */}
                <section className="relative w-full h-[500px] flex items-center overflow-hidden bg-institutional">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-institutional/90 via-institutional/60 to-transparent z-10"></div>
                        <div
                            className="w-full h-full bg-center bg-cover"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBfiAGWl_iPonQFmPtmJQl2iD6xtHEA2d0Lkerj_7zBjEoC0gIQHo6aGfNW8W1wYogNsVZsHZjigbw8ZW_eFOjtEeKhAImNPzg8JxrHuLgkL2NwRUmoghgJY6Pap7bjmKdJ_8U0V-dT9lVLvM9lO9Y0RRmM1MBKfDoRixn0nkVNsesDdX1V_hYYah8OLE_LR7VfoY4fVo7ZXnmjf9aqQYxe6rE2gEJbU3mkUf-jPheJW4nh_qf7OlUzAXUpURo1TIX1VfmNzFXas_sR')",
                            }}
                        ></div>
                    </div>
                    <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
                        <ScrollReveal variant="fade-right">
                            <div className="max-w-3xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-xs font-bold mb-6 tracking-wide">
                                    <span className="material-symbols-outlined text-sm text-primary">
                                        diversity_2
                                    </span>
                                    EXPERIÊNCIA DO ESTUDANTE
                                </div>
                                <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-[1.1]">
                                    Vida Além da <span className="text-primary">Sala de Aula</span>
                                </h1>
                                <p className="text-xl text-slate-300 mb-8 leading-relaxed font-medium">
                                    Descubra uma comunidade vibrante onde pode seguir as suas
                                    paixões, juntar-se a clubes, praticar desporto e encontrar
                                    amigos para a vida na UGS.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <button className="bg-primary text-white px-8 py-3.5 rounded-xl text-base font-bold hover:bg-orange-600 transition-transform active:scale-95 flex items-center gap-2 shadow-xl shadow-primary/20">
                                        Juntar-se a um Clube
                                        <span className="material-symbols-outlined">group_add</span>
                                    </button>
                                    <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-3.5 rounded-xl text-base font-bold hover:bg-white/20 transition-colors">
                                        Ver Calendário de Eventos
                                    </button>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Development Section */}
                <section className="py-20 bg-background-light">
                    <div className="max-w-7xl mx-auto px-6">
                        <ScrollReveal>
                            <div className="text-center max-w-2xl mx-auto mb-16">
                                <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
                                    Desenvolvimento Holístico
                                </h2>
                                <h3 className="text-4xl font-extrabold text-institutional leading-tight">
                                    Envolve-te, Compete e Prospera
                                </h3>
                                <p className="text-lg text-slate-600 mt-4">
                                    Acreditamos que a experiência universitária é mais do que
                                    apenas notas. Trata-se de construir caráter, resiliência e
                                    comunidade.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: "groups",
                                    title: "Clubes & Organizações Estudantis",
                                    desc: "Da Sociedade de Debate ao Clube de Robótica, encontra a tua tribo. Temos mais de 30 organizações ativas adaptadas a diversos interesses.",
                                    link: "Explorar Diretório",
                                },
                                {
                                    icon: "sports_basketball",
                                    title: "Atletismo & Recreação",
                                    desc: "Mantém-te ativo com as nossas ligas internas e equipas universitárias. O nosso complexo desportivo moderno inclui campos de basquetebol, ginásio e campos de futebol.",
                                    link: "Ver Horário Desportivo",
                                },
                                {
                                    icon: "volunteer_activism",
                                    title: "Serviços de Apoio ao Estudante",
                                    desc: "O teu bem-estar é a nossa prioridade. Acede a aconselhamento académico, apoio psicológico e orientação de carreira sempre que precisares.",
                                    link: "Obter Apoio",
                                },
                            ].map((item, idx) => (
                                <ScrollReveal key={idx} delay={idx * 0.1} variant="fade-up">
                                    <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-sm border border-slate-100 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group h-full relative overflow-hidden">
                                        {/* Hover decorative element */}
                                        <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                                        
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-50 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-8 group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-500 relative z-10">
                                            <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl transition-colors">{item.icon}</span>
                                        </div>
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-institutional mb-3 sm:mb-4 relative z-10">{item.title}</h3>
                                        <p className="text-slate-500 text-base leading-relaxed relative z-10 group-hover:text-slate-700 transition-colors mb-6">{item.desc}</p>
                                        
                                        <Link
                                            className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all relative z-10"
                                            href="#"
                                        >
                                            {item.link}{" "}
                                            <span className="material-symbols-outlined ml-1 text-sm">
                                                arrow_forward
                                            </span>
                                        </Link>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="py-20 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <ScrollReveal>
                            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                                <div>
                                    <h2 className="text-3xl font-extrabold text-institutional mb-2">
                                        Momentos no Campus
                                    </h2>
                                    <p className="text-slate-500">
                                        Um vislumbre da vida quotidiana na Universidade Gregório
                                        Semedo.
                                    </p>
                                </div>
                                <button className="hidden md:flex items-center gap-2 text-institutional font-bold hover:text-primary transition-colors">
                                    Segue-nos no Instagram{" "}
                                    <span className="material-symbols-outlined">open_in_new</span>
                                </button>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
                            {/* Slot 1 — Large left: Outorgas e Condecorações Académicas */}
                            <ScrollReveal className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
                                <CampusSlot
                                    title={campusGallery[2].title}
                                    images={campusGallery[2].images}
                                    interval={7000}
                                    delay={0}
                                    className="h-full w-full rounded-2xl"
                                    labelSize="lg"
                                />
                            </ScrollReveal>

                            {/* Slot 2 — Top right small: Actividades Recreativas e Culturais */}
                            <ScrollReveal className="col-span-1 row-span-1 rounded-2xl overflow-hidden" delay={0.1}>
                                <CampusSlot
                                    title={campusGallery[1].title}
                                    images={campusGallery[1].images}
                                    interval={8000}
                                    delay={1500}
                                    className="h-full w-full rounded-2xl"
                                />
                            </ScrollReveal>

                            {/* Slot 3 — Top far-right small: Palestras em Salão Nobre */}
                            <ScrollReveal className="col-span-1 row-span-1 rounded-2xl overflow-hidden" delay={0.2}>
                                <CampusSlot
                                    title={campusGallery[3].title}
                                    images={campusGallery[3].images}
                                    interval={9000}
                                    delay={3000}
                                    className="h-full w-full rounded-2xl"
                                />
                            </ScrollReveal>

                            {/* Slot 4 — Bottom right small: Actividades Administrativas */}
                            <ScrollReveal className="col-span-1 row-span-1 rounded-2xl overflow-hidden" delay={0.3}>
                                <CampusSlot
                                    title={campusGallery[0].title}
                                    images={campusGallery[0].images}
                                    interval={10000}
                                    delay={4500}
                                    className="h-full w-full rounded-2xl"
                                />
                            </ScrollReveal>

                            {/* Slot 5 — Bottom far-right small: Tribunal Simulado */}
                            <ScrollReveal className="col-span-1 row-span-1 rounded-2xl overflow-hidden" delay={0.4}>
                                <CampusSlot
                                    title={campusGallery[4].title}
                                    images={campusGallery[4].images}
                                    interval={11000}
                                    delay={6000}
                                    className="h-full w-full rounded-2xl"
                                />
                            </ScrollReveal>
                        </div>
                    </div>
                </section>


                {/* Events Section */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            <div className="lg:col-span-4 space-y-8">
                                <ScrollReveal variant="fade-right">
                                    <div>
                                        <h2 className="text-4xl font-extrabold text-institutional mb-4">
                                            Próximos Eventos
                                        </h2>
                                        <p className="text-slate-600 leading-relaxed">
                                            Mantém-te a par do que está a acontecer no campus. De
                                            seminários académicos a encontros sociais, há sempre algo
                                            pelo que esperar.
                                        </p>
                                    </div>
                                    <div className="bg-primary/5 border border-primary/10 p-6 rounded-2xl mt-8">
                                        <h4 className="font-bold text-institutional mb-2 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary">
                                                campaign
                                            </span>
                                            Não Perca Nada
                                        </h4>
                                        <p className="text-sm text-slate-600 mb-4">
                                            Subscreva a nossa newsletter semanal para receber
                                            atualizações de eventos diretamente na sua caixa de
                                            entrada.
                                        </p>
                                        <div className="flex gap-2">
                                            <input
                                                className="flex-1 bg-white border-slate-200 rounded-lg text-sm px-4 py-2 focus:ring-primary focus:border-primary"
                                                placeholder="O teu email"
                                                type="email"
                                            />
                                            <button className="bg-institutional text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors">
                                                Subscrever
                                            </button>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                            <div className="lg:col-span-8 space-y-4">
                                {[
                                    {
                                        day: "15",
                                        month: "OUT",
                                        category: "ACADÉMICO",
                                        tag: "ABERTO AO PÚBLICO",
                                        title: "Simpósio Internacional de Investigação 2024",
                                        desc: "Junta-te a académicos de renome para um dia de apresentações e discussões sobre desenvolvimento sustentável na África Austral.",
                                        time: "09:00 AM - 04:00 PM",
                                        location: "Auditório Principal",
                                    },
                                    {
                                        day: "22",
                                        month: "OUT",
                                        category: "DESPORTO",
                                        title: "Finais do Torneio de Basquetebol Inter-Faculdades",
                                        desc: "Vem apoiar a equipa da tua faculdade no jogo decisivo! Haverá música e refrescos.",
                                        time: "05:00 PM",
                                        location: "Complexo Desportivo",
                                    },
                                    {
                                        day: "05",
                                        month: "NOV",
                                        category: "CARREIRA",
                                        title: "Feira Anual de Carreiras & Networking",
                                        desc: "Conhece recrutadores das principais empresas em Angola. Traz o teu CV e veste-te de forma profissional.",
                                        time: "10:00 AM - 03:00 PM",
                                        location: "Pátio do Campus",
                                    },
                                ].map((event, idx) => (
                                    <ScrollReveal key={idx} delay={idx * 0.1} variant="fade-left">
                                        <div className="flex flex-col md:flex-row bg-white border border-slate-100 rounded-2xl p-6 hover:border-primary/30 transition-shadow hover:shadow-md group cursor-pointer">
                                            <div className="flex md:flex-col items-center justify-center md:w-24 shrink-0 md:border-r border-slate-100 md:pr-6 md:mr-6 mb-4 md:mb-0 gap-2 md:gap-0">
                                                <span className="text-sm font-bold text-primary uppercase tracking-wider">
                                                    {event.month}
                                                </span>
                                                <span className="text-3xl font-extrabold text-institutional">
                                                    {event.day}
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase">
                                                        {event.category}
                                                    </span>
                                                    {event.tag && (
                                                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase">
                                                            {event.tag}
                                                        </span>
                                                    )}
                                                </div>
                                                <h3 className="text-xl font-bold text-institutional mb-2 group-hover:text-primary transition-colors">
                                                    {event.title}
                                                </h3>
                                                <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                                                    {event.desc}
                                                </p>
                                                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-medium">
                                                    <span className="flex items-center gap-1.5">
                                                        <span className="material-symbols-outlined text-lg">
                                                            schedule
                                                        </span>{" "}
                                                        {event.time}
                                                    </span>
                                                    <span className="flex items-center gap-1.5">
                                                        <span className="material-symbols-outlined text-lg">
                                                            location_on
                                                        </span>{" "}
                                                        {event.location}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonial Section */}
                <section className="py-20 bg-institutional text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
                    <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                        <ScrollReveal variant="scale-up">
                            <span className="material-symbols-outlined text-6xl text-primary mb-6 opacity-50">
                                format_quote
                            </span>
                            <blockquote className="text-2xl md:text-4xl font-bold leading-relaxed mb-10">
                                &quot;A UGS não é apenas um lugar para estudar; é um lugar para
                                crescer. A comunidade acolhedora e a vida ativa no campus
                                deram-me a confiança para liderar e a rede de contactos para ter
                                sucesso.&quot;
                            </blockquote>
                            <div className="flex flex-col items-center gap-2">
                                <div className="size-16 rounded-full overflow-hidden border-2 border-primary mb-2 relative">
                                    <Image
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_FtuXhCzJTLrk41aitwLbPsLStBUReOa1NMNA6WkOII32cBAplJHELFWS4iCk03sawIcp44egpP4AktYi-7_RzTjPRvUwoqSPuduLNJ8o-Ha9fxy4Iuzdpy89h2Y4lc1oPFCd3Wh-6l0nPk-maPZ_Mck6XyXK_4_A9i-t4_L6yIw4ef-qBeAS3b0-QFHFbw_8LrAMM2hXGjG_0u7X0cRdAvTpF4mNxCxmGxaP_IEp8erMdOAu3n8KiB4KCSAZY5hCsSLG2_CvocaG"
                                        alt="Avatar de estudante"
                                        fill
                                        unoptimized
                                        className="object-cover"
                                    />
                                </div>
                                <cite className="not-italic font-bold text-lg">
                                    Maria Santos
                                </cite>
                                <span className="text-primary text-sm font-medium uppercase tracking-wider">
                                    Estudante de Economia, Turma de &apos;24
                                </span>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Join Community CTA */}
                <section className="py-24 bg-slate-50">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <ScrollReveal variant="fade-up">
                            <h2 className="text-4xl font-extrabold text-institutional mb-6">
                                Pronto para se juntar à nossa comunidade?
                            </h2>
                            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                                Dê o primeiro passo para uma experiência universitária
                                inesquecível. Candidate-se agora ou agende uma visita para ver o
                                campus por si mesmo.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/candidatura" className="inline-block bg-primary text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-primary/20">
                                    Candidatar-se Agora
                                </Link>
                                <button className="bg-white text-institutional border border-slate-200 px-10 py-4 rounded-xl text-lg font-bold hover:bg-slate-50 transition-colors">
                                    Agendar Visita ao Campus
                                </button>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
