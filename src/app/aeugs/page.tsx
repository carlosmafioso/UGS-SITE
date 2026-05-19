import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function AEUGSPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-primary/20 selection:text-primary">
            <Navbar activePage="/aeugs" />
            <main>
                <section className="relative w-full h-[420px] sm:h-[520px] md:h-[640px] flex items-center overflow-hidden bg-institutional">
                    <div className="absolute inset-0 z-0">
                        <div className="w-full h-full bg-center bg-cover animate-ken-burns" style={{ backgroundImage: "url('/images/sobre-hero-bg.jpg')" }}></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-institutional/95 sm:from-institutional/90 via-institutional/60 sm:via-institutional/40 to-transparent pointer-events-none z-10"></div>
                    </div>
                    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 w-full">
                        <ScrollReveal variant="fade-right">
                            <div className="max-w-3xl">
                                <span className="inline-block py-1 px-3 mb-4 sm:mb-6 bg-primary/20 text-primary font-bold text-xs uppercase tracking-widest rounded-full border border-primary/30">Associação de Estudantes</span>
                                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tighter mb-4 sm:mb-6">
                                    AEUGS: Unidos pela Educação Construindo um Futuro Melhor
                                </h1>
                                <p className="text-sm sm:text-base md:text-xl text-slate-200 mb-6 sm:mb-10 leading-relaxed max-w-2xl">
                                    Comprometidos com a representação estudantil e o fomento de uma cultura de campus vibrante, inovadora e inclusiva para todos os alunos da UGS.
                                </p>
                                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                                    <button className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-lg font-bold shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all text-sm sm:text-base">Juntar-se à AEUGS</button>
                                    <button className="px-6 sm:px-8 py-3 sm:py-4 bg-institutional text-white rounded-lg font-bold shadow-lg hover:-translate-y-1 hover:bg-institutional/90 transition-all text-sm sm:text-base">Saber Mais</button>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Mission & Vision Section (Refined) */}
                <section className="py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden">
                    <div className="absolute -left-32 top-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-center">
                            
                            {/* Text Content */}
                            <div className="lg:col-span-7 space-y-6">
                                <ScrollReveal variant="fade-right">
                                    <div className="relative p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 group">
                                        <div className="absolute top-0 left-0 w-1.5 h-full bg-primary rounded-l-2xl"></div>
                                        <h2 className="text-xl sm:text-2xl font-bold text-institutional tracking-tight flex items-center gap-2 sm:gap-3">
                                            <span className="material-symbols-outlined text-primary text-3xl group-hover:-rotate-12 transition-transform duration-300">flag</span>
                                            Nossa Missão
                                        </h2>
                                        <p className="mt-4 text-slate-600 leading-relaxed">
                                            Atuamos como a ponte vital entre a comunidade estudantil e a administração universitária. Garantimos que cada voz seja ouvida, defendendo os interesses académicos, sociais e profissionais com integridade e dedicação.
                                        </p>
                                    </div>
                                </ScrollReveal>
                                <ScrollReveal variant="fade-right" delay={0.2}>
                                    <div className="relative p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 group">
                                        <div className="absolute top-0 left-0 w-1.5 h-full bg-institutional rounded-l-2xl"></div>
                                        <h2 className="text-xl sm:text-2xl font-bold text-institutional tracking-tight flex items-center gap-2 sm:gap-3">
                                            <span className="material-symbols-outlined text-institutional text-3xl group-hover:scale-110 transition-transform duration-300">visibility</span>
                                            Nossa Visão
                                        </h2>
                                        <p className="mt-4 text-slate-600 leading-relaxed">
                                            Aspiramos a criar um ecossistema universitário onde a excelência académica caminhe de mãos dadas com o desenvolvimento humano, tornando a UGS uma referência em integração estudantil em Angola.
                                        </p>
                                    </div>
                                </ScrollReveal>
                            </div>

                            {/* Floating Logo Asset */}
                            <div className="lg:col-span-5 relative flex justify-center items-center order-first lg:order-last">
                                <ScrollReveal variant="scale-up">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full scale-105 pointer-events-none"></div>
                                        <img 
                                            src="/images/aeugs-logo.png" 
                                            alt="Logótipo AEUGS" 
                                            className="relative z-10 max-w-[280px] md:max-w-[360px] w-full h-auto drop-shadow-xl animate-float"
                                        />
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Pillars / Activities (Premium Hover Cards) */}
                <section className="py-16 sm:py-24 md:py-32 bg-slate-50 relative border-t border-slate-200/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-10 sm:mb-16 md:mb-20">
                        <ScrollReveal variant="fade-up">
                            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">As Nossas Bases</span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-institutional tracking-tight mb-4 sm:mb-6">Pilares de Atuação</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto font-medium text-sm sm:text-base md:text-lg">
                                Desenvolvemos atividades focadas no crescimento integral do estudante durante a sua jornada académica.
                            </p>
                        </ScrollReveal>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                            {/* Pillar Cards Array */}
                            {[
                                { icon: 'account_balance', title: 'Representação Académica', desc: 'Defesa dos direitos estudantis e participação ativa nos conselhos diretivos da instituição.' },
                                { icon: 'sports_soccer', title: 'Desporto e Cultura', desc: 'Promoção de torneios, grupos artísticos e eventos que celebram o talento da comunidade.' },
                                { icon: 'diversity_3', title: 'Apoio ao Estudante', desc: 'Programas de mentoria, orientação psicológica e apoio à integração de novos alunos.' },
                                { icon: 'festival', title: 'Eventos e Tradições', desc: 'Organização da Receção ao Caloiro, Semana Académica e conferências multidisciplinares.' },
                            ].map((pillar, idx) => (
                                <ScrollReveal key={idx} delay={0.1 * (idx + 1)} variant="fade-up">
                                    <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-sm border border-slate-100 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group h-full relative overflow-hidden">
                                        {/* Hover decorative element */}
                                        <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                                        
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-50 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-8 group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-500 relative z-10">
                                            <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl transition-colors">{pillar.icon}</span>
                                        </div>
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-institutional mb-3 sm:mb-4 relative z-10">{pillar.title}</h3>
                                        <p className="text-slate-500 text-base leading-relaxed relative z-10 group-hover:text-slate-700 transition-colors">{pillar.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>



                {/* Leadership / Current Board (Interactive Overlays) */}
                <section className="py-16 sm:py-24 md:py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <ScrollReveal variant="fade-up">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-4 sm:gap-6">
                                <div className="max-w-2xl">
                                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">A Nossa Equipa</span>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-institutional tracking-tight mb-3 sm:mb-4">Direção AEUGS 2026</h2>
                                    <p className="text-slate-600 font-medium text-sm sm:text-base md:text-lg">Conheça os líderes dedicados a transformar a sua experiência universitária.</p>
                                </div>
                                <button className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-slate-50 border border-slate-200 rounded-full text-institutional font-bold text-sm sm:text-base hover:bg-slate-100 hover:text-primary transition-all group shrink-0">
                                    Estrutura Completa <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                            </div>
                        </ScrollReveal>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-5xl mx-auto">
                            {[
                                { name: 'Lucena Eduardo', role: 'Presidente da Associação', img: '/images/lucena-eduardo.png' },
                                { name: 'Lino Tomás', role: 'Secretário Geral', img: '/images/lino-tomas.png' },
                                { name: 'Carlos Abreu', role: 'Secretário para Tecnologia', img: '/images/carlos-abreu.png' }
                            ].map((member, idx) => (
                                <ScrollReveal key={idx} delay={0.1 * (idx + 1)} variant="scale-up">
                                    <div className="group cursor-pointer rounded-3xl bg-slate-50 p-3 border border-slate-100 hover:border-primary/30 transition-colors shadow-sm hover:shadow-xl">
                                        <div className="aspect-[4/5] rounded-2xl overflow-hidden relative mb-4 bg-slate-200">
                                            <img className="w-full h-full object-cover object-top transition-transform duration-[1000ms] ease-out group-hover:scale-110" alt={member.name} src={member.img} />
                                            
                                            {/* Sliding Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-institutional/90 via-institutional/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end p-6">
                                                <div className="flex gap-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                                                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-primary transition-colors">
                                                        <span className="material-symbols-outlined text-sm">mail</span>
                                                    </a>
                                                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-primary transition-colors">
                                                        <span className="material-symbols-outlined text-sm">link</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-3 pb-3 text-center">
                                            <h4 className="text-xl font-bold text-institutional mb-1 group-hover:text-primary transition-colors">{member.name}</h4>
                                            <p className="text-slate-500 font-medium text-sm">{member.role}</p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-12 sm:py-16 md:py-24 bg-institutional text-center relative overflow-hidden">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
                        <ScrollReveal variant="fade-up">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight">Faça Parte da Nossa História</h2>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                                A sua contribuição é o que torna a UGS num lugar extraordinário. Participe nas nossas iniciativas e ajude a construir um legado de excelência.
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-lg font-bold shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all text-sm sm:text-base">
                                    Tornar-me Membro
                                </button>
                                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white border border-white/20 rounded-lg font-bold hover:bg-white/20 transition-all text-sm sm:text-base">
                                    Falar com a Direção
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
