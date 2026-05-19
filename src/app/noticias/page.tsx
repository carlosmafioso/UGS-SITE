import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function NoticiasPage() {
    return (
        <div className="min-h-screen bg-background-light text-slate-900">
            <Navbar activePage="/noticias" />
            <main>
                <section className="relative w-full h-[380px] sm:h-[420px] md:h-[480px] flex items-center overflow-hidden bg-institutional">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-institutional/95 via-institutional/70 to-institutional/30 z-10"></div>
                        <div className="w-full h-full bg-center bg-cover animate-ken-burns" style={{ backgroundImage: "url('/images/noticias.jpg')" }}></div>
                    </div>
                    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-6 sm:pt-10">
                        <ScrollReveal variant="fade-right">
                            <div className="max-w-3xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full text-xs font-bold mb-4 sm:mb-6 tracking-wide">
                                    <span className="material-symbols-outlined text-sm text-primary">newspaper</span>
                                    ATUALIDADE UGS
                                </div>
                                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
                                    Notícias & <span className="text-primary">Eventos</span>
                                </h1>
                                <p className="text-sm sm:text-base md:text-xl text-slate-300 mb-6 sm:mb-8 leading-relaxed font-medium">
                                    Fique a par de tudo o que acontece no universo da Universidade Gregório Semedo.
                                </p>
                                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                                    <button className="bg-primary text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-bold hover:bg-orange-600 transition-transform active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                                        Ler Destaques
                                        <span className="material-symbols-outlined text-base">arrow_downward</span>
                                    </button>
                                    <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-bold hover:bg-white/20 transition-colors">
                                        Subscrever Newsletter
                                    </button>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Content Grid & Sidebar from Stitch */}
                <div className="py-10 sm:py-16 md:py-20 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
                        {/* Secondary News Grid */}
                        <div className="lg:col-span-8">
                            {/* Featured News Card */}
                            <ScrollReveal variant="fade-up">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-institutional mb-4 sm:mb-6 flex items-center gap-3">
                                    <span className="w-2 h-8 bg-primary rounded-full"></span>
                                    Destaque Principal
                                </h2>
                                <article className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row overflow-hidden border border-slate-100 group cursor-pointer mb-8 sm:mb-12">
                                    <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto overflow-hidden bg-slate-100">
                                        <img src="/images/semana-academica-768x768.png" alt="Semana Académica UGS" className="w-full h-full object-cover object-center transition-transform duration-[1000ms] ease-out group-hover:scale-110" />
                                    </div>
                                    <div className="p-5 sm:p-8 flex flex-col justify-center w-full md:w-1/2">
                                        <div className="flex flex-wrap justify-between items-start mb-4 sm:mb-6 gap-2">
                                            <span className="bg-primary text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">Especial UGS</span>
                                            <time className="text-slate-500 text-xs sm:text-sm font-semibold flex items-center gap-1.5 bg-slate-50 px-2.5 sm:px-3 py-1 rounded-full">
                                                <span className="material-symbols-outlined text-sm text-primary">event</span> 18 a 22 Maio
                                            </time>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-institutional mb-3 sm:mb-4 leading-tight group-hover:text-primary transition-colors">
                                            Semana Académica
                                        </h3>
                                        <p className="text-slate-600 text-base mb-8 leading-relaxed font-medium">
                                            Ao serviço da inovação tecnológica, desenvolvimento sustentável, justiça e da transformação social. Junte-se a nós numa semana dedicada ao futuro e ao saber.
                                        </p>
                                        <div className="mt-auto pt-6 border-t border-slate-100 flex items-center">
                                            <span className="text-primary font-bold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                                Saber mais sobre o evento <span className="material-symbols-outlined text-base bg-primary/10 rounded-full p-1">arrow_forward</span>
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </ScrollReveal>

                            <ScrollReveal variant="fade-up">
                                <h2 className="text-2xl font-bold text-slate-700 mb-8 flex items-center gap-3">
                                    <span className="w-1.5 h-6 bg-slate-300 rounded-full"></span>
                                    Últimas Notícias
                                </h2>
                            </ScrollReveal>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* News Card 1 */}
                                <ScrollReveal delay={0.1} variant="scale-up">
                                    <article className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden border border-slate-100 group cursor-pointer">
                                        <div className="relative h-48 w-full overflow-hidden">
                                            <img src="/images/outorga-diplomas.jpg" alt="Cerimónia de Outorga de Diplomas de Mestrados" className="w-full h-full object-cover object-top transition-transform duration-[1000ms] ease-out group-hover:scale-110" />
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex justify-between items-start mb-4">
                                                <span className="bg-slate-100 text-primary px-3 py-1 rounded text-xs font-bold">Académico</span>
                                                <time className="text-slate-400 text-xs font-semibold flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-sm">calendar_today</span> 22 Dez, 2025
                                                </time>
                                            </div>
                                            <h3 className="text-xl font-bold text-institutional mb-4 leading-snug group-hover:text-primary transition-colors">Cerimónia de Outorga de Diplomas de Mestrados</h3>
                                            <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">Junte-se a nós no Centro de Conferências de Belas às 08:00 para celebrar o sucesso e dedicação dos nossos novos Mestres.</p>
                                            <div className="mt-auto pt-4 border-t border-slate-50 flex items-center">
                                                <span className="text-primary font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                                    Ler Mais <span className="material-symbols-outlined text-base">arrow_forward</span>
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                </ScrollReveal>
                                {/* News Card 2 */}
                                <ScrollReveal delay={0.2} variant="scale-up">
                                    <article className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden border border-slate-100 group cursor-pointer">
                                        <div className="relative h-48 w-full overflow-hidden">
                                            <img src="/images/revista-cientifica.jpg" alt="Lançamento da Revista Científica Gregório Semedo" className="w-full h-full object-cover object-top transition-transform duration-[1000ms] ease-out group-hover:scale-110" />
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex justify-between items-start mb-4">
                                                <span className="bg-slate-100 text-primary px-3 py-1 rounded text-xs font-bold">Investigação</span>
                                                <time className="text-slate-400 text-xs font-semibold flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-sm">calendar_today</span> 27 Set, 2024
                                                </time>
                                            </div>
                                            <h3 className="text-xl font-bold text-institutional mb-4 leading-snug group-hover:text-primary transition-colors">Lançamento da Revista Científica: Ciência e Desenvolvimento</h3>
                                            <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">Apresentação da nossa nova publicação. O evento decorrerá no Salão Nobre da Reitoria, às 15:00.</p>
                                            <div className="mt-auto pt-4 border-t border-slate-50 flex items-center">
                                                <span className="text-primary font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                                    Ler Mais <span className="material-symbols-outlined text-base">arrow_forward</span>
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                </ScrollReveal>
                                {/* News Card 3 */}
                                <ScrollReveal delay={0.3} variant="scale-up">
                                    <article className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden border border-slate-100 group cursor-pointer">
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src="/images/missao-reconstruir-benguela.jpg"
                                                alt="Projecto Missão Reconstruir Benguela"
                                                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-[1000ms] ease-out"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded text-xs font-bold shadow-sm">Solidariedade</span>
                                            </div>
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex justify-between items-start mb-4">
                                                <time className="text-slate-400 text-xs font-semibold flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-sm">calendar_today</span> 10 Mai, 2024
                                                </time>
                                            </div>
                                            <h3 className="text-xl font-bold text-institutional mb-4 leading-snug group-hover:text-primary transition-colors">Projecto: Missão Reconstruir Benguela - Fase 2</h3>
                                            <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">Campanha de recolha de bens e materiais para apoio às vítimas das cheias em Benguela. Junte-se a esta causa.</p>
                                            <div className="mt-auto pt-4 border-t border-slate-50 flex items-center">
                                                <span className="text-primary font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                                    Saiba mais <span className="material-symbols-outlined text-base">arrow_forward</span>
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                </ScrollReveal>
                                {/* News Card 4 */}
                                <ScrollReveal delay={0.4} variant="scale-up">
                                    <article className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden border border-slate-100 group cursor-pointer">
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex justify-between items-start mb-4">
                                                <span className="bg-slate-100 text-primary px-3 py-1 rounded text-xs font-bold">Evento</span>
                                                <time className="text-slate-400 text-xs font-semibold flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-sm">calendar_today</span> 05 Mai, 2024
                                                </time>
                                            </div>
                                            <h3 className="text-xl font-bold text-institutional mb-4 leading-snug group-hover:text-primary transition-colors">Final do Torneio Universitário de Basquetebol</h3>
                                            <p className="text-slate-500 text-sm mb-6 flex-grow leading-relaxed">Venha apoiar a nossa equipa na grande final contra a Universidade Agostinho Neto no próximo sábado.</p>
                                            <div className="mt-auto pt-4 border-t border-slate-50 flex items-center">
                                                <span className="text-primary font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                                    Ler Mais <span className="material-symbols-outlined text-base">arrow_forward</span>
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                </ScrollReveal>
                            </div>
                        </div>
                        {/* Sidebar */}
                        <aside className="lg:col-span-4 space-y-12">
                            <ScrollReveal variant="fade-left">
                                {/* Upcoming Events Widget */}
                                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-lg shadow-slate-200/40 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1.5 h-full bg-primary"></div>
                                    <h3 className="text-xl font-extrabold text-institutional mb-6 tracking-tight flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">event_upcoming</span>
                                        Próximos Eventos
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="flex gap-4 group cursor-pointer p-2 rounded-lg hover:bg-slate-50 transition-colors">
                                            <div className="flex-shrink-0 w-14 h-14 bg-white rounded-xl flex flex-col items-center justify-center shadow-md text-primary font-bold border border-slate-100 group-hover:border-primary/20 transition-colors">
                                                <span className="text-[10px] uppercase leading-none text-slate-400">Jun</span>
                                                <span className="text-xl">04</span>
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h4 className="font-bold text-institutional text-sm group-hover:text-primary transition-colors">Feira de Carreiras 2024</h4>
                                                <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                                                    <span className="material-symbols-outlined text-[14px]">schedule</span> 09:00 - Campus Central
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 group cursor-pointer p-2 rounded-lg hover:bg-slate-50 transition-colors">
                                            <div className="flex-shrink-0 w-14 h-14 bg-white rounded-xl flex flex-col items-center justify-center shadow-md text-primary font-bold border border-slate-100 group-hover:border-primary/20 transition-colors">
                                                <span className="text-[10px] uppercase leading-none text-slate-400">Jun</span>
                                                <span className="text-xl">15</span>
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h4 className="font-bold text-institutional text-sm group-hover:text-primary transition-colors">Workshop de Robótica</h4>
                                                <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                                                    <span className="material-symbols-outlined text-[14px]">schedule</span> 14:30 - Lab A-12
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 group cursor-pointer p-2 rounded-lg hover:bg-slate-50 transition-colors">
                                            <div className="flex-shrink-0 w-14 h-14 bg-white rounded-xl flex flex-col items-center justify-center shadow-md text-primary font-bold border border-slate-100 group-hover:border-primary/20 transition-colors">
                                                <span className="text-[10px] uppercase leading-none text-slate-400">Jun</span>
                                                <span className="text-xl">22</span>
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h4 className="font-bold text-institutional text-sm group-hover:text-primary transition-colors">Conferência de Medicina</h4>
                                                <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                                                    <span className="material-symbols-outlined text-[14px]">schedule</span> 10:00 - Auditório Magno
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="w-full mt-8 py-3 rounded-lg bg-slate-50 text-institutional font-bold text-sm hover:bg-institutional hover:text-white transition-all">Ver Calendário Completo</button>
                                </div>
                            </ScrollReveal>



                            <ScrollReveal delay={0.2} variant="fade-left">
                                {/* Newsletter Subscription */}
                                <div className="bg-gradient-to-br from-institutional to-slate-900 rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl">
                                    <div className="absolute -right-8 -bottom-8 opacity-10">
                                        <span className="material-symbols-outlined text-[160px]" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 relative z-10 flex items-center gap-2">
                                        Fique Atualizado
                                    </h3>
                                    <p className="text-white/80 text-sm mb-6 relative z-10 leading-relaxed font-medium">Receba as últimas notícias, eventos e prazos importantes diretamente no seu email semanalmente.</p>
                                    <form className="space-y-4 relative z-10">
                                        <input className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 rounded-xl py-3.5 px-4 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all shadow-inner" placeholder="O seu email principal" type="email" />
                                        <button className="w-full bg-primary text-white font-bold py-3.5 rounded-xl shadow-lg hover:bg-orange-600 active:scale-95 transition-all flex items-center justify-center gap-2" type="submit">
                                            Subscrever Newsletter
                                            <span className="material-symbols-outlined text-sm">send</span>
                                        </button>
                                    </form>
                                </div>
                            </ScrollReveal>
                        </aside>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
}
