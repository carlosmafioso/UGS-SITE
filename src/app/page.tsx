import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-background-light text-slate-900 transition-colors duration-300">
      {/* Barra de Navegação Superior */}
      <Navbar activePage="/" />
      <main>
        {/* Secção Hero */}
        <section className="relative w-full h-[480px] sm:h-[560px] md:h-[640px] flex items-center overflow-hidden bg-institutional">
          {/* Carrossel de Fundo */}
          <HeroCarousel />
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <ScrollReveal>
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-bold mb-4 sm:mb-6 tracking-wide">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-50"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  ADMISSÕES ABERTAS 2026/27
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-[1.1]">
                  Molde o seu Futuro na <span className="text-primary">Universidade</span> Gregório Semedo
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-10 leading-relaxed font-medium">
                  Dedicada à excelência académica e inovação moderna em Angola. Descubra os nossos
                  diversos programas e junte-se a uma comunidade de pensadores.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                  <Link href="/candidatura" className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl shadow-primary/20">
                    Candidate-se Agora
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                  <button className="bg-institutional text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-institutional/20">
                    Visita Virtual
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
        {/* Proposições de Valor */}
        <section className="py-10 sm:py-16 bg-background-light -mt-6 sm:-mt-10 relative z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal delay={0.1} variant="scale-up">
                <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-4 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-default">
                  <div className="size-14 bg-blue-50 text-institutional rounded-xl flex items-center justify-center group-hover:bg-institutional group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-3xl">lightbulb</span>
                  </div>
                  <h3 className="text-xl font-bold">Inovação Primeiro</h3>
                  <p className="text-slate-500 leading-relaxed">
                    Instalações de ponta e metodologias de ensino modernas que o preparam para o
                    mercado de trabalho global.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2} variant="scale-up">
                <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-4 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-default">
                  <div className="size-14 bg-orange-50 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-3xl">workspace_premium</span>
                  </div>
                  <h3 className="text-xl font-bold">Excelência Académica</h3>
                  <p className="text-slate-500 leading-relaxed">
                    Altos padrões académicos e membros do corpo docente distintos com experiência
                    real no sector.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3} variant="scale-up">
                <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-4 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-default">
                  <div className="size-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-3xl">diversity_3</span>
                  </div>
                  <h3 className="text-xl font-bold">Comunidade Vibrante</h3>
                  <p className="text-slate-500 leading-relaxed">
                    Uma vida estudantil próspera com clubes, desportos e iniciativas que incentivam o
                    crescimento pessoal e social.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
        {/* Secção Sobre */}
        <section className="py-12 sm:py-16 md:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <ScrollReveal variant="fade-right">
              <div className="space-y-6">
                <h2 className="text-primary font-bold uppercase tracking-widest text-sm">
                  O Nosso Legado
                </h2>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-institutional leading-tight">
                  Capacitando Gerações de Líderes em Angola
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Desde a sua fundação, a Universidade Gregório Semedo tem estado na vanguarda do ensino
                  superior na região. Acreditamos em fornecer educação acessível e de alta qualidade
                  que desperte o pensamento crítico e a inovação. A nossa missão é transformar a sociedade
                  através do conhecimento e da investigação.
                </p>
                <div className="flex flex-wrap gap-6 sm:gap-10 py-4">
                  <div>
                    <div className="text-3xl font-black text-institutional">
                      20+
                    </div>
                    <div className="text-sm text-slate-500 font-medium">Anos de Experiência</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-institutional">
                      8000+
                    </div>
                    <div className="text-sm text-slate-500 font-medium">Alunos Formados</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-institutional">
                      92%
                    </div>
                    <div className="text-sm text-slate-500 font-medium">Empregabilidade</div>
                  </div>
                </div>
                <button className="flex items-center gap-2 font-bold text-institutional hover:text-primary transition-colors group">
                  Saiba Mais Sobre a Nossa História
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    chevron_right
                  </span>
                </button>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4} variant="fade-left">
              <div className="relative group/about">
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover/about:scale-[1.02]">
                  <Image
                    src="/images/Legado.jpg"
                    alt="Nosso Legado - Graduação UGS"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover/about:scale-110"
                    unoptimized
                  />
                </div>
                {/* Pequeno cartão decorativo */}
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-3 sm:gap-4 border border-slate-100 hover:scale-105 transition-transform duration-300 max-w-[260px] sm:max-w-none">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">auto_graph</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter">
                      Ranking
                    </p>
                    <p className="text-sm font-bold">Top 5 Universidades em Angola</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
        {/* Áreas Académicas */}
        <section className="py-12 sm:py-16 md:py-24 bg-background-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4">
                <div className="max-w-xl">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-institutional mb-3 sm:mb-4">
                    Áreas Académicas
                  </h2>
                  <p className="text-slate-500 text-sm sm:text-base">
                    Explore a nossa vasta gama de programas de licenciatura e pós-graduação concebidos
                    para responder às exigências actuais da indústria global.
                  </p>
                </div>
                <button className="hidden md:block px-6 py-3 border-2 border-slate-200 rounded-xl font-bold hover:bg-slate-100 transition-colors shrink-0">
                  Ver Todos os Programas
                </button>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Cartão de Área 1 */}
              <ScrollReveal delay={0.1} variant="scale-up">
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/5] shadow-lg">
                    <div
                      className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: "url('/images/direito.jpg')" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-institutional/90 via-transparent to-transparent flex items-end p-6 opacity-80 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold group-hover:text-primary transition-colors">Direito</h4>
                  <p className="text-slate-500 text-sm">
                    Faculdade de Ciências Jurídicas
                  </p>
                </div>
              </ScrollReveal>
              {/* Cartão de Área 2 */}
              <ScrollReveal delay={0.2} variant="scale-up">
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/5] shadow-lg">
                    <div
                      className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: "url('/images/economia.jpg')" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-institutional/90 via-transparent to-transparent flex items-end p-6 opacity-80 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold group-hover:text-primary transition-colors">Economia</h4>
                  <p className="text-slate-500 text-sm">
                    Departamento de Negócios
                  </p>
                </div>
              </ScrollReveal>
              {/* Cartão de Área 3 */}
              <ScrollReveal delay={0.3} variant="scale-up">
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/5] shadow-lg">
                    <div
                      className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: "url('/images/engenharia.jpg')" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-institutional/90 via-transparent to-transparent flex items-end p-6 opacity-80 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold group-hover:text-primary transition-colors">Engenharia</h4>
                  <p className="text-slate-500 text-sm">
                    Sistemas e Tecnologia Moderna
                  </p>
                </div>
              </ScrollReveal>
              {/* Cartão de Área 4 */}
              <ScrollReveal delay={0.4} variant="scale-up">
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/5] shadow-lg">
                    <div
                      className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: "url('/images/ciencias sociais.jpg')" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-institutional/90 via-transparent to-transparent flex items-end p-6 opacity-80 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold group-hover:text-primary transition-colors">Ciências Sociais</h4>
                  <p className="text-slate-500 text-sm">
                    Humanidades e Artes
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
        {/* Grelha Modular de Notícias e Eventos */}
        <section className="py-12 sm:py-16 md:py-24 bg-slate-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">Últimas Notícias e Eventos</h2>
                <div className="flex gap-2">
                  <button className="size-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <button className="size-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cartão de Evento em Destaque */}
              <div className="lg:col-span-2">
                <ScrollReveal>
                  <div className="relative group h-full min-h-[400px] overflow-hidden rounded-2xl bg-institutional">
                    <div
                      className="absolute inset-0 bg-top bg-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: "url('/images/21-aniversario-ugs.jpg')" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8">
                      <span className="inline-block px-3 py-1 bg-primary rounded text-xs font-bold mb-4">
                        SIMPÓSIO
                      </span>
                      <h3 className="text-3xl font-bold mb-4 leading-tight max-w-xl">
                        Simpósio Internacional Anual de Investigação e Inovação 2024
                      </h3>
                      <div className="flex items-center gap-6 text-sm text-slate-300">
                        <span className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm">calendar_month</span> 15-17 Out
                        </span>
                        <span className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm">location_on</span> Auditório do Campus Principal
                        </span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
              {/* Grelha Lateral de Notícias */}
              <div className="flex flex-col gap-8">
                <ScrollReveal delay={0.1}>
                  <article className="flex gap-4 group cursor-pointer">
                    <div className="size-24 shrink-0 rounded-xl overflow-hidden">
                      <div
                        className="w-full h-full bg-center bg-cover group-hover:scale-110 transition-transform"
                        style={{ backgroundImage: "url('/images/outorga-diplomas.jpg')" }}
                      ></div>
                    </div>
                    <div>
                      <h4 className="font-bold leading-tight group-hover:text-primary transition-colors mb-2 text-sm">
                        Cerimónia de Outorga de Diplomas de Mestrados
                      </h4>
                      <time className="text-xs text-slate-400 font-medium">22 Dezembro 2025</time>
                    </div>
                  </article>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <article className="flex gap-4 group cursor-pointer">
                    <div className="size-24 shrink-0 rounded-xl overflow-hidden">
                      <div
                        className="w-full h-full bg-center bg-cover group-hover:scale-110 transition-transform"
                        style={{ backgroundImage: "url('/images/revista-cientifica.jpg')" }}
                      ></div>
                    </div>
                    <div>
                      <h4 className="font-bold leading-tight group-hover:text-primary transition-colors mb-2 text-sm">
                        Lançamento da Revista Científica: Ciência e Desenvolvimento
                      </h4>
                      <time className="text-xs text-slate-400 font-medium">27 Setembro 2024</time>
                    </div>
                  </article>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                  <article className="flex gap-4 group cursor-pointer">
                    <div className="size-24 shrink-0 rounded-xl overflow-hidden border border-white/10">
                      <div
                        className="w-full h-full bg-center bg-cover group-hover:scale-110 transition-transform"
                        style={{ backgroundImage: "url('/images/missao-reconstruir-benguela.jpg')" }}
                      ></div>
                    </div>
                    <div>
                      <h4 className="font-bold leading-tight group-hover:text-primary transition-colors mb-2 text-sm">
                        Projecto: Missão Reconstruir Benguela - Fase 2
                      </h4>
                      <time className="text-xs text-slate-400 font-medium">10 Maio 2024</time>
                    </div>
                  </article>
                </ScrollReveal>
                <ScrollReveal delay={0.4}>
                  <button className="w-full py-3 text-center border border-white/20 rounded-xl text-sm font-bold hover:bg-white/5 transition-colors">
                    Ler Todas as Notícias
                  </button>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
        
        {/* LUCY AI Section */}
        <section className="py-16 sm:py-24 md:py-32 bg-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
            <div className="absolute -right-32 bottom-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Text Content */}
                    <div className="order-2 lg:order-1 space-y-6 sm:space-y-8">
                        <ScrollReveal variant="fade-right">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-bold text-institutional mb-2 shadow-sm">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                                </span>
                                Nova Assistente Virtual
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-institutional tracking-tight leading-tight">
                                Conheça a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">LUCY AI</span>
                            </h2>
                        </ScrollReveal>
                        
                        <ScrollReveal variant="fade-right" delay={0.1}>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                Agente inteligente criada pelo departamento de tecnologia e inovação da AEUGS.
                            </p>
                            <p className="text-base text-slate-500 leading-relaxed mt-4">
                                A sua função é atender futuros estudantes da UGS, proporcionando um suporte rápido, preciso e disponível 24/7. A LUCY está programada para ajudar com:
                            </p>
                        </ScrollReveal>

                        <ScrollReveal variant="fade-right" delay={0.2}>
                            <ul className="space-y-4 mt-6">
                                {[
                                    { icon: 'how_to_reg', text: 'Informações detalhadas sobre inscrições' },
                                    { icon: 'history_edu', text: 'Preparação e datas de exames de acesso' },
                                    { icon: 'app_registration', text: 'Apoio em todo o processo de matrícula' },
                                    { icon: 'payments', text: 'Esclarecimentos sobre propinas e pagamentos' },
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <span className="material-symbols-outlined text-primary text-[18px]">{item.icon}</span>
                                        </div>
                                        <span className="text-slate-700 font-medium">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </ScrollReveal>

                        <ScrollReveal variant="fade-right" delay={0.3}>
                            <button className="mt-8 px-8 py-4 bg-institutional text-white rounded-xl font-bold shadow-xl shadow-institutional/20 hover:-translate-y-1 hover:bg-slate-800 transition-all flex items-center gap-2 group">
                                Falar com a LUCY
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">smart_toy</span>
                            </button>
                        </ScrollReveal>
                    </div>

                    {/* Image / Card */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <ScrollReveal variant="fade-left">
                            <div className="relative mx-auto w-full max-w-[576px]">
                                {/* Premium Card Container */}
                                <div className="relative rounded-[2.5rem] bg-gradient-to-b from-slate-50 to-white p-3 sm:p-4 shadow-2xl border-[0.5px] border-slate-200/50 transform hover:scale-[1.03] transition-all duration-500 animate-float group cursor-pointer">
                                    <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] blur-xl group-hover:bg-primary/20 group-hover:blur-2xl transition-all duration-500"></div>
                                    
                                    {/* Inner Image Wrapper */}
                                    <div className="relative rounded-[2rem] overflow-hidden bg-institutional aspect-[4/5] flex items-end justify-center">
                                        <div className="absolute inset-0 bg-gradient-to-t from-institutional via-institutional/40 to-transparent z-10 opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
                                        <img 
                                            src="/images/LUCY.png" 
                                            alt="LUCY AI - Assistente Virtual AEUGS" 
                                            className="w-full h-full object-cover relative z-0 transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        
                                        {/* Floating Glass UI Element */}
                                        <div className="absolute bottom-6 left-5 right-5 z-20 transform group-hover:-translate-y-2 transition-transform duration-500">
                                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4 hover:bg-white/20 transition-colors shadow-xl">
                                                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(242,127,13,0.5)] group-hover:shadow-[0_0_25px_rgba(242,127,13,0.8)] transition-shadow duration-300">
                                                    <span className="material-symbols-outlined text-white animate-pulse">smart_toy</span>
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-bold tracking-wide">LUCY</h4>
                                                    <p className="text-white/80 text-xs flex items-center gap-1.5 font-medium mt-0.5">
                                                        <span className="relative flex h-2 w-2">
                                                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                                        </span>
                                                        Online agora
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                </div>
            </div>
        </section>

        {/* Chamada Final para Acção */}
        <section className="py-12 sm:py-16 md:py-24 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
            <ScrollReveal variant="scale-up">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6">Pronto para Começar a sua Jornada?</h2>
              <p className="text-lg opacity-90 mb-10 leading-relaxed">
                Junte-se a milhares de estudantes que estão a definir os seus próprios caminhos na UGS.
                As candidaturas são avaliadas de forma contínua. Comece hoje mesmo.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/candidatura" className="bg-institutional text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all shadow-2xl">
                  Iniciar Candidatura
                </Link>
                <button className="bg-white text-primary px-10 py-4 rounded-xl text-lg font-bold hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all">
                  Descarregar Brochura
                </button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      {/* Rodapé */}
      <footer className="bg-institutional text-white py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Branding */}
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center mb-6">
                <Image 
                  src="/images/logo.png"
                  alt="UGS Logo"
                  width={160}
                  height={60}
                  className="h-14 w-auto object-contain"
                />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                A Universidade Gregório Semedo é uma instituição de ensino superior privada em Angola,
                comprometida com o rigor académico e o desenvolvimento social.
              </p>
              <div className="flex gap-4">
                <Link
                  className="size-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined text-sm">public</span>
                </Link>
                <Link
                  className="size-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined text-sm">share</span>
                </Link>
                <Link
                  className="size-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined text-sm">play_circle</span>
                </Link>
              </div>
            </div>
            {/* Links 1 */}
            <div>
              <h4 className="font-bold text-white mb-6">Universidade</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li>
                  <Link className="hover:text-primary transition-colors" href="#">
                    Sobre a UGS
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" href="/admin/media">
                    Gestor de Media (Admin)
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" href="#">
                    Reitoria
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" href="#">
                    Acreditação
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" href="#">
                    Carreiras na UGS
                  </Link>
                </li>
              </ul>
            </div>
            {/* Links 2 */}
            <div>
              <h4 className="font-bold text-white mb-6">Recursos para Estudantes</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li>
                  <Link className="hover:text-primary transition-colors" href="#">
                    Catálogo da Biblioteca
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" href="#">
                    Bem-estar Estudantil
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" href="#">
                    Rede de Alumni
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition-colors" href="#">
                    Calendário Académico
                  </Link>
                </li>
              </ul>
            </div>
            {/* Contacto */}
            <div>
              <h4 className="font-bold text-white mb-6">Contacte-nos</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">
                    location_on
                  </span>
                  <span>Avenida Deolinda Rodrigues, Luanda, Angola</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">call</span>
                  <span>931 213 054</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">mail</span>
                  <span>secgeral@ugs.edu.ao</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">schedule</span>
                  <span>Seg-Sex: 08:00-21:00</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-500">
              © 2024 Universidade Gregório Semedo. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-xs text-slate-500">
              <Link className="hover:text-white transition-colors" href="#">
                Política de Privacidade
              </Link>
              <Link className="hover:text-white transition-colors" href="#">
                Termos de Serviço
              </Link>
              <Link className="hover:text-white transition-colors" href="#">
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
