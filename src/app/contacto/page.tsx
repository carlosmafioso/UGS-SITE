import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function ContactoPage() {
    return (
        <div className="min-h-screen bg-background-light text-slate-900">
            <Navbar activePage="/contacto" />
            <main>
                {/* Banner Hero */}
                <section className="relative w-full h-[400px] flex items-center bg-institutional overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-institutional/95 via-institutional/80 to-institutional/60 z-10"></div>
                        <div
                            className="w-full h-full bg-center bg-cover"
                            style={{
                                backgroundImage:
                                    "url('/images/logo contacto.jpeg')",
                            }}
                        ></div>
                    </div>
                    <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-10">
                        <ScrollReveal variant="fade-right">
                            <div className="max-w-3xl">
                                <div className="flex items-center gap-2 text-primary font-bold text-sm mb-4 uppercase tracking-wider">
                                    <span className="material-symbols-outlined text-lg">
                                        support_agent
                                    </span>
                                    CENTRO DE APOIO
                                </div>
                                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                                    Contacto & Apoio
                                </h1>
                                <p className="text-lg text-slate-300 leading-relaxed font-medium max-w-2xl">
                                    Tem perguntas sobre admissões, vida no campus ou programas
                                    académicos? Estamos aqui para ajudá-lo a navegar na sua
                                    jornada na UGS.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Info Cards */}
                <section className="relative z-30 -mt-16 pb-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <ScrollReveal variant="fade-up">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {/* Secretaria Geral */}
                                <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
                                    <div className="size-12 bg-blue-50 text-institutional rounded-xl flex items-center justify-center">
                                        <span className="material-symbols-outlined text-2xl">apartment</span>
                                    </div>
                                    <div className="w-full">
                                        <h3 className="text-lg font-bold mb-3 text-institutional border-b border-slate-100 pb-2">Secretaria Geral</h3>
                                        <ul className="space-y-2 text-sm text-slate-500">
                                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-primary">phone</span> 931 213 054</li>
                                            <li className="flex items-center gap-2 break-all"><span className="material-symbols-outlined text-[16px] text-primary">mail</span> secgeral@ugs.edu.ao</li>
                                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[16px] text-primary mt-0.5">schedule</span> <span>Seg-Sex: 08:00-21:00</span></li>
                                        </ul>
                                    </div>
                                </div>
                                
                                {/* Serviços Financeiros */}
                                <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
                                    <div className="size-12 bg-orange-50 text-primary rounded-xl flex items-center justify-center">
                                        <span className="material-symbols-outlined text-2xl">account_balance_wallet</span>
                                    </div>
                                    <div className="w-full">
                                        <h3 className="text-lg font-bold mb-3 text-institutional border-b border-slate-100 pb-2">Serviços Financeiros</h3>
                                        <ul className="space-y-2 text-sm text-slate-500">
                                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-primary">phone</span> 936 563 545</li>
                                            <li className="flex items-center gap-2 break-all"><span className="material-symbols-outlined text-[16px] text-primary">mail</span> online.sf@ugs.edu.ao</li>
                                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[16px] text-primary mt-0.5">schedule</span> <span>Seg-Sex: 08:30-21:00<br/>Sáb: 8:30-12:00</span></li>
                                        </ul>
                                    </div>
                                </div>
                                
                                {/* Serviços Académicos */}
                                <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
                                    <div className="size-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
                                        <span className="material-symbols-outlined text-2xl">school</span>
                                    </div>
                                    <div className="w-full">
                                        <h3 className="text-lg font-bold mb-3 text-institutional border-b border-slate-100 pb-2">Serviços Académicos</h3>
                                        <ul className="space-y-2 text-sm text-slate-500">
                                            <li className="flex items-center gap-2 break-all"><span className="material-symbols-outlined text-[16px] text-primary">mail</span> servacademico@ugs.edu.ao</li>
                                            <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[16px] text-primary mt-0.5">schedule</span> <span>Seg-Sex: 08:00-17:00</span></li>
                                        </ul>
                                    </div>
                                </div>
                                
                                {/* Reitoria */}
                                <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
                                    <div className="size-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
                                        <span className="material-symbols-outlined text-2xl">account_balance</span>
                                    </div>
                                    <div className="w-full">
                                        <h3 className="text-lg font-bold mb-3 text-institutional border-b border-slate-100 pb-2">Reitoria</h3>
                                        <ul className="space-y-2 text-sm text-slate-500">
                                            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] text-primary">phone</span> 943 993 892</li>
                                            <li className="flex items-center gap-2 break-all"><span className="material-symbols-outlined text-[16px] text-primary">mail</span> reitoria.geral@ugs.edu.ao</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Form and Map Section */}
                <section className="py-12 bg-background-light">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                            <ScrollReveal variant="fade-right">
                                <div className="order-2 lg:order-1">
                                    <h2 className="text-3xl font-extrabold text-institutional mb-6">
                                        Envie-nos uma Mensagem
                                    </h2>
                                    <p className="text-slate-500 mb-8 font-medium">
                                        Preencha o formulário abaixo e a nossa equipa entrará em
                                        contacto consigo num prazo de 24 horas. Para assuntos
                                        urgentes, ligue para a nossa linha de apoio.
                                    </p>
                                    <form className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label
                                                    className="text-sm font-bold text-slate-700"
                                                    htmlFor="firstName"
                                                >
                                                    Primeiro Nome
                                                </label>
                                                <input
                                                    className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-primary focus:ring-primary transition-colors"
                                                    id="firstName"
                                                    placeholder="ex. João"
                                                    type="text"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label
                                                    className="text-sm font-bold text-slate-700"
                                                    htmlFor="lastName"
                                                >
                                                    Apelido
                                                </label>
                                                <input
                                                    className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-primary focus:ring-primary transition-colors"
                                                    id="lastName"
                                                    placeholder="ex. Silva"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                className="text-sm font-bold text-slate-700"
                                                htmlFor="email"
                                            >
                                                Endereço de Email
                                            </label>
                                            <input
                                                className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-primary focus:ring-primary transition-colors"
                                                id="email"
                                                placeholder="ex. joao.silva@email.com"
                                                type="email"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                className="text-sm font-bold text-slate-700"
                                                htmlFor="subject"
                                            >
                                                Departamento
                                            </label>
                                            <select
                                                className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-primary focus:ring-primary transition-colors"
                                                id="subject"
                                            >
                                                <option>Assuntos Gerais</option>
                                                <option>Admissões</option>
                                                <option>Serviços Académicos</option>
                                                <option>Apoio Financeiro</option>
                                                <option>Suporte Técnico</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                className="text-sm font-bold text-slate-700"
                                                htmlFor="message"
                                            >
                                                Mensagem
                                            </label>
                                            <textarea
                                                className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-primary focus:ring-primary transition-colors"
                                                id="message"
                                                placeholder="Como podemos ajudá-lo hoje?"
                                                rows={4}
                                            ></textarea>
                                        </div>
                                        <button
                                            className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-orange-600 transition-transform active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-primary/20 w-full sm:w-auto"
                                            type="submit"
                                        >
                                            Enviar Mensagem
                                            <span className="material-symbols-outlined">send</span>
                                        </button>
                                    </form>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal variant="fade-left">
                                <div className="order-1 lg:order-2 h-full min-h-[400px]">
                                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100">
                                        {/* Map Simulation */}
                                        {/* <div className="absolute inset-0 bg-slate-200 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/13.25,-8.83,13,0/800x600?access_token=YOUR_TOKEN')] bg-cover bg-center grayscale opacity-60"></div> */}
                                        <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                            <div className="self-end bg-white p-2 rounded-lg shadow-md border border-slate-100 flex flex-col gap-2">
                                                <button className="p-2 hover:bg-slate-50 rounded transition-colors text-slate-600">
                                                    <span className="material-symbols-outlined">add</span>
                                                </button>
                                                <button className="p-2 hover:bg-slate-50 rounded transition-colors text-slate-600">
                                                    <span className="material-symbols-outlined">
                                                        remove
                                                    </span>
                                                </button>
                                            </div>
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                                <div className="bg-white px-4 py-2 rounded-lg shadow-xl border border-slate-100 mb-2 transform transition-transform hover:scale-105 cursor-pointer text-center">
                                                    <p className="font-bold text-institutional text-sm whitespace-nowrap">
                                                        Campus UGS
                                                    </p>
                                                    <p className="text-xs text-slate-500">
                                                        Entrada Principal
                                                    </p>
                                                </div>
                                                <div className="text-institutional drop-shadow-2xl">
                                                    <span className="material-symbols-outlined text-5xl">
                                                        location_on
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* LUCY IA Section */}
                <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            
                            {/* Left Column - Info */}
                            <div className="order-2 lg:order-1">
                                <ScrollReveal variant="fade-right">
                                    <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
                                        ASSISTENTE VIRTUAL UGS
                                    </h2>
                                    <h3 className="text-3xl md:text-5xl font-extrabold text-institutional mb-6 leading-tight">
                                        Fale com a <span className="text-primary">LUCY IA</span>
                                    </h3>
                                    <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
                                        A LUCY é a sua nova assistente inteligente, desenvolvida para responder de forma rápida e precisa a todas as suas dúvidas sobre a Universidade Gregório Semedo. Disponível 24/7.
                                    </p>
                                    
                                    <h4 className="text-xl font-bold text-institutional mb-6">O que a LUCY pode responder?</h4>
                                    
                                    <div className="space-y-4 mb-10">
                                        {[
                                            {
                                                icon: "school",
                                                title: "Cursos e Propinas",
                                                desc: "Informações sobre licenciaturas, mestrados e respetivas mensalidades."
                                            },
                                            {
                                                icon: "event",
                                                title: "Prazos e Inscrições",
                                                desc: "Datas de candidaturas, exames de acesso e renovação de matrículas."
                                            },
                                            {
                                                icon: "location_on",
                                                title: "Vida no Campus",
                                                desc: "Localização de departamentos, serviços e instalações da UGS."
                                            },
                                            {
                                                icon: "description",
                                                title: "Documentação",
                                                desc: "Requisitos para declarações, históricos e outros documentos académicos."
                                            }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                                <div className="bg-primary/10 text-primary p-3 rounded-xl">
                                                    <span className="material-symbols-outlined">{item.icon}</span>
                                                </div>
                                                <div>
                                                    <h5 className="font-bold text-institutional">{item.title}</h5>
                                                    <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <button className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-orange-600 transition-transform active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-primary/20 w-full sm:w-auto">
                                        Conversar com a LUCY
                                        <span className="material-symbols-outlined">smart_toy</span>
                                    </button>
                                </ScrollReveal>
                            </div>
                            
                            {/* Right Column - LUCY Card */}
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

                {/* Live Chat CTA */}
                <section className="py-24 bg-primary relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
                    <div className="max-w-4xl mx-auto px-6 text-center text-white relative z-10">
                        <ScrollReveal variant="scale-up">
                            <h2 className="text-4xl font-extrabold mb-6">
                                Precisa de Assistência Imediata?
                            </h2>
                            <p className="text-lg opacity-90 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
                                A nossa equipa de apoio ao estudante está disponível online para
                                conversar consigo em tempo real durante o horário de
                                expediente.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <button className="bg-white text-institutional px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-100 transition-all shadow-xl flex items-center gap-2">
                                    <span className="material-symbols-outlined">chat</span>
                                    Iniciar Chat em Direto
                                </button>
                                <button className="bg-institutional/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-institutional/30 transition-all flex items-center gap-2">
                                    <span className="material-symbols-outlined">help</span>
                                    Visitar Centro de Ajuda
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
