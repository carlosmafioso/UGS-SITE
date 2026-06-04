"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Candidatura() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [paymentMethod, setPaymentMethod] = useState("multicaixa");
  const [docsUploaded, setDocsUploaded] = useState({ idCard: false, certificate: false });

  const nextStep = () => {
      setDirection(1);
      setCurrentStep((prev) => Math.min(prev + 1, 5));
  };
  const prevStep = () => {
      setDirection(-1);
      setCurrentStep((prev) => Math.max(prev - 1, 1));
  };
  const finish = () => {
      if (isSubmitting) return;
      setIsSubmitting(true);
      setTimeout(() => {
          setIsSubmitting(false);
          setDirection(1);
          setCurrentStep(5);
      }, 1500);
  };
  
  const jumpToStep = (stepId: number) => {
      if (stepId < currentStep) {
          setDirection(-1);
          setCurrentStep(stepId);
      }
  };

  const handleUpload = (doc: "idCard" | "certificate") => {
      setDocsUploaded((prev) => ({ ...prev, [doc]: true }));
  };

  const steps = [
    { id: 1, title: "Dados Pessoais", icon: "person" },
    { id: 2, title: "Documentação", icon: "upload_file" },
    { id: 3, title: "Pagamento", icon: "payments" },
    { id: 4, title: "Finalizar", icon: "check_circle" },
  ];

  const slideVariants = {
      enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
      center: { zIndex: 1, x: 0, opacity: 1 },
      exit: (dir: number) => ({ zIndex: 0, x: dir < 0 ? 40 : -40, opacity: 0 })
  };

  return (
    <div className="bg-slate-50 text-slate-900 h-screen w-full flex overflow-hidden selection:bg-orange-500/30">
        
        {/* Sidebar */}
        {currentStep < 5 && (
        <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-slate-200 h-full shrink-0 shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10">
            <div className="p-6 flex flex-col h-full">
                
                {/* Logo & Back Button */}
                <Link href="/" className="flex items-center gap-3 mb-8 transition-transform hover:scale-105 active:scale-95 group">
                    <div className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-xl shadow-sm">
                        <span className="material-symbols-outlined text-[20px]">school</span>
                    </div>
                    <div>
                        <h2 className="text-sm font-extrabold tracking-tight text-blue-900 leading-tight group-hover:text-primary transition-colors">UGS Portal</h2>
                        <p className="text-[9px] uppercase tracking-widest text-slate-500 font-bold mt-0.5">Página Inicial</p>
                    </div>
                </Link>

                <div className="mb-6">
                    <h2 className="text-base font-bold text-blue-900">Candidatura 2026/27</h2>
                    <p className="text-slate-500 text-[11px] font-medium uppercase tracking-wider mt-0.5">Processo de Inscrição</p>
                </div>

                {/* Steps Menu */}
                <nav className="flex flex-col gap-2 flex-1">
                    {steps.map((step) => {
                        const isActive = step.id === currentStep;
                        const isPast = step.id < currentStep;
                        return (
                            <div 
                                key={step.id} 
                                onClick={() => isPast ? jumpToStep(step.id) : null}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-sm ${
                                    isActive ? "text-blue-900 font-bold bg-slate-50 border-l-4 border-orange-500 shadow-sm" : 
                                    isPast ? "text-emerald-600 font-semibold cursor-pointer hover:bg-emerald-50" : "text-slate-400 font-medium cursor-not-allowed"
                                }`}
                                style={isActive ? { marginLeft: "-2px" } : {}}
                            >
                                <span className="material-symbols-outlined text-[20px]">
                                    {isPast && step.id !== 4 ? "check_circle" : step.icon}
                                </span>
                                <span>{step.title}</span>
                            </div>
                        );
                    })}
                </nav>

                {/* Support Box */}
                <div className="mt-4 p-4 bg-blue-900/5 border border-blue-900/10 rounded-xl">
                    <p className="text-[10px] font-bold text-blue-900 uppercase tracking-wider mb-1.5">Suporte Direto</p>
                    <div className="flex items-center gap-2 text-blue-800">
                        <span className="material-symbols-outlined text-[16px]">call</span>
                        <span className="text-xs font-bold">+244 923 123 456</span>
                    </div>
                </div>

                {/* Compact Footer in Sidebar */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-1.5">
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">© 2026 UGS Digital</p>
                    <div className="flex gap-3 text-[10px] font-semibold text-slate-500">
                        <a className="hover:text-primary transition-colors cursor-pointer">Privacidade</a>
                        <a className="hover:text-primary transition-colors cursor-pointer">Ajuda</a>
                    </div>
                </div>
            </div>
        </aside>
        )}

        {/* Main Content Area */}
        <main className={`flex-1 bg-slate-50 p-6 md:p-8 h-full overflow-y-auto flex flex-col items-center justify-center ${currentStep === 5 ? 'w-full' : ''}`}>
           {currentStep < 5 ? (
           <div className="max-w-3xl w-full flex flex-col h-full justify-center py-4">
                
                <div className="space-y-1 mb-5">
                    <h1 className="text-2xl font-extrabold text-blue-900 tracking-tight">Formulário de Admissão</h1>
                    <p className="text-slate-500 text-sm font-medium">Etapa {currentStep} de 4: <strong className="text-slate-700">{steps[currentStep - 1].title}</strong></p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-200/60 overflow-hidden flex flex-col max-h-[85vh]">
                    <div className="p-6 md:p-8 flex-1 overflow-y-auto">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentStep}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
                            >
                                {/* Step 1: Dados Pessoais */}
                                {currentStep === 1 && (
                                    <div>
                                        <h3 className="text-base font-bold text-blue-900 mb-4 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary text-[20px]">account_circle</span>
                                            Identificação
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-1 md:col-span-2">
                                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Nome Completo</label>
                                                <input className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-semibold text-slate-800" placeholder="Conforme o BI" type="text"/>
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">E-mail</label>
                                                <input className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-semibold text-slate-800" placeholder="exemplo@mail.com" type="email"/>
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Telefone</label>
                                                <div className="flex gap-2">
                                                    <span className="h-11 px-3 flex items-center justify-center bg-slate-100 border border-slate-200 rounded-xl text-slate-500 font-bold text-sm">+244</span>
                                                    <input className="flex-1 h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-semibold text-slate-800" placeholder="9XXXXXXXX" type="tel"/>
                                                </div>
                                            </div>
                                            <div className="space-y-1 md:col-span-2">
                                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Curso Pretendido</label>
                                                <select defaultValue="" className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none text-sm font-bold text-slate-800 cursor-pointer">
                                                    <option value="" disabled>Selecione um curso...</option>
                                                    <option>Direito</option>
                                                    <option>Gestão de Empresas</option>
                                                    <option>Engenharia Informática</option>
                                                    <option>Psicologia</option>
                                                    <option>Relações Internacionais</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 2: Documentação */}
                                {currentStep === 2 && (
                                    <div>
                                        <h3 className="text-base font-bold text-blue-900 mb-4 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary text-[20px]">cloud_upload</span>
                                            Upload de Arquivos
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div 
                                                onClick={() => handleUpload('idCard')}
                                                className={`group relative cursor-pointer p-6 border-2 rounded-2xl transition-all text-center flex flex-col items-center justify-center h-48
                                                ${docsUploaded.idCard ? 'border-emerald-500 bg-emerald-50/50' : 'border-dashed border-slate-200 hover:border-primary hover:bg-orange-50/50'}`}
                                            >
                                                <span className={`material-symbols-outlined text-[32px] mb-2 transition-colors ${docsUploaded.idCard ? 'text-emerald-600' : 'text-slate-400 group-hover:text-primary'}`}>
                                                    {docsUploaded.idCard ? 'task_alt' : 'id_card'}
                                                </span>
                                                <p className={`text-sm font-bold ${docsUploaded.idCard ? 'text-emerald-800' : 'text-slate-700'}`}>Bilhete de Identidade (BI)</p>
                                                <p className={`text-[11px] font-semibold mt-1 ${docsUploaded.idCard ? 'text-emerald-600' : 'text-slate-400'}`}>
                                                    {docsUploaded.idCard ? 'Anexado com Sucesso' : 'PDF, JPG ou PNG (Máx 5MB)'}
                                                </p>
                                                {!docsUploaded.idCard && (
                                                    <div className="mt-4 px-4 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold group-hover:bg-primary group-hover:text-white transition-colors">Procurar Ficheiro</div>
                                                )}
                                            </div>
                                            <div 
                                                onClick={() => handleUpload('certificate')}
                                                className={`group relative cursor-pointer p-6 border-2 rounded-2xl transition-all text-center flex flex-col items-center justify-center h-48
                                                ${docsUploaded.certificate ? 'border-emerald-500 bg-emerald-50/50' : 'border-dashed border-slate-200 hover:border-primary hover:bg-orange-50/50'}`}
                                            >
                                                <span className={`material-symbols-outlined text-[32px] mb-2 transition-colors ${docsUploaded.certificate ? 'text-emerald-600' : 'text-slate-400 group-hover:text-primary'}`}>
                                                    {docsUploaded.certificate ? 'task_alt' : 'description'}
                                                </span>
                                                <p className={`text-sm font-bold ${docsUploaded.certificate ? 'text-emerald-800' : 'text-slate-700'}`}>Certificado de Habilitações</p>
                                                <p className={`text-[11px] font-semibold mt-1 ${docsUploaded.certificate ? 'text-emerald-600' : 'text-slate-400'}`}>
                                                    {docsUploaded.certificate ? 'Anexado com Sucesso' : 'Digitalizado (Frente e Verso)'}
                                                </p>
                                                {!docsUploaded.certificate && (
                                                    <div className="mt-4 px-4 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold group-hover:bg-primary group-hover:text-white transition-colors">Procurar Ficheiro</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Pagamento */}
                                {currentStep === 3 && (
                                    <div>
                                        <div className="flex flex-col gap-4">
                                            <h3 className="text-base font-bold text-blue-900 mb-1 flex items-center gap-2">
                                                <span className="material-symbols-outlined text-primary text-[20px]">receipt_long</span>
                                                Taxa de Candidatura
                                            </h3>
                                            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
                                                <div>
                                                    <span className="text-slate-500 text-[11px] font-bold uppercase tracking-wide">Valor a Pagar</span>
                                                    <div className="text-blue-900 font-extrabold text-2xl mt-0.5">15.000,00 <span className="text-sm font-bold text-slate-400">AKZ</span></div>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-slate-500 text-[11px] font-bold uppercase tracking-wide">Ref. Multicaixa</span>
                                                    <div className="font-mono font-bold tracking-widest text-lg mt-0.5 text-slate-800 bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-sm">998 123 456</div>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                                                <div 
                                                    onClick={() => setPaymentMethod('multicaixa')}
                                                    className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'multicaixa' ? 'border-primary bg-orange-50/30 shadow-sm' : 'border-slate-200 hover:border-slate-300'}`}
                                                >
                                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${paymentMethod === 'multicaixa' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'}`}>
                                                        <span className="material-symbols-outlined text-[16px]">account_balance</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className={`text-sm font-bold transition-colors ${paymentMethod === 'multicaixa' ? 'text-blue-900' : 'text-slate-700'}`}>Multicaixa</p>
                                                        <p className="text-[10px] text-slate-500 font-medium mt-0.5">Pagamento Automático</p>
                                                    </div>
                                                    <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'multicaixa' ? 'border-primary bg-primary' : 'border-slate-300'}`}>
                                                        {paymentMethod === 'multicaixa' && <span className="w-1.5 h-1.5 bg-white rounded-full"></span>}
                                                    </span>
                                                </div>
                                                <div 
                                                    onClick={() => setPaymentMethod('transferencia')}
                                                    className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'transferencia' ? 'border-primary bg-orange-50/30 shadow-sm' : 'border-slate-200 hover:border-slate-300'}`}
                                                >
                                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${paymentMethod === 'transferencia' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'}`}>
                                                        <span className="material-symbols-outlined text-[16px]">swap_horiz</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className={`text-sm font-bold transition-colors ${paymentMethod === 'transferencia' ? 'text-blue-900' : 'text-slate-700'}`}>Transferência</p>
                                                        <p className="text-[10px] text-slate-500 font-medium mt-0.5">Anexar Comprovativo</p>
                                                    </div>
                                                    <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'transferencia' ? 'border-primary bg-primary' : 'border-slate-300'}`}>
                                                        {paymentMethod === 'transferencia' && <span className="w-1.5 h-1.5 bg-white rounded-full"></span>}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 4: Finalizar */}
                                {currentStep === 4 && (
                                    <div>
                                        <div className="flex flex-col gap-6">
                                            <div>
                                                <h3 className="text-base font-bold text-blue-900 mb-2 flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-primary text-[20px]">task_alt</span>
                                                    Revisão Final
                                                </h3>
                                                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                                    As informações introduzidas encontram-se gravadas. Ao clicar em concluir, a sua candidatura será submetida para avaliação pelos nossos serviços académicos.
                                                </p>
                                            </div>
                                            
                                            <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                                                <h4 className="text-xs font-bold text-orange-800 mb-1 flex items-center gap-1.5">
                                                    <span className="material-symbols-outlined text-[16px]">gavel</span>
                                                    Termo de Responsabilidade
                                                </h4>
                                                <p className="text-[11px] text-orange-700/80 leading-relaxed font-medium">
                                                    Declaro sob compromisso de honra que os dados e documentos apresentados são autênticos. Compreendo que falsificações resultarão em anulação imediata.
                                                </p>
                                            </div>

                                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                                <div className="flex justify-between items-center text-sm font-bold text-slate-700">
                                                    <span>Total a Pagar Hoje:</span>
                                                    <span className="text-blue-900 text-lg">15.000 <span className="text-xs text-slate-400">AKZ</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Action Buttons Pinned to Bottom of Card */}
                    <div className="flex items-center justify-between p-4 px-6 md:px-8 border-t border-slate-100 bg-slate-50/50">
                        {currentStep === 1 ? (
                            <div className="text-xs text-slate-400 font-semibold hidden md:block">Etapa 1 de 4</div>
                        ) : (
                            <button onClick={prevStep} className="px-4 py-2.5 text-slate-500 text-sm font-bold hover:text-blue-900 hover:bg-white rounded-lg transition-colors flex items-center gap-2 border border-transparent hover:border-slate-200">
                                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                                Voltar
                            </button>
                        )}

                        {currentStep < 4 ? (
                            <button onClick={nextStep} className="ml-auto px-6 py-2.5 bg-primary text-white text-sm font-bold rounded-lg shadow-md shadow-orange-500/20 hover:bg-orange-600 active:scale-95 transition-all flex items-center gap-2">
                                Continuar
                                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                            </button>
                        ) : (
                            <button disabled={isSubmitting} onClick={finish} className={`ml-auto px-6 py-2.5 bg-emerald-600 text-white text-sm font-bold rounded-lg shadow-md shadow-emerald-500/20 flex items-center gap-2 transition-all ${isSubmitting ? 'opacity-80 scale-95' : 'hover:bg-emerald-500 active:scale-95'}`}>
                                {isSubmitting ? (
                                    <>
                                        <span className="material-symbols-outlined animate-spin text-[18px]">sync</span>
                                        A Enviar...
                                    </>
                                ) : (
                                    <>
                                        Submeter Candidatura
                                        <span className="material-symbols-outlined text-[18px]">check</span>
                                    </>
                                )}
                            </button>
                        )}
                    </div>
                </div>
            </div>
            ) : (
            /* Step 5: Concluído (Centered Success Card) */
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 280, damping: 24 }}
                className="max-w-xl w-full mx-auto bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-10 text-center"
            >
                <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                    <span className="material-symbols-outlined text-4xl">check_circle</span>
                </motion.div>
                <h1 className="text-3xl font-extrabold text-blue-900 tracking-tight mb-3">Candidatura Recebida!</h1>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                    O seu processo foi submetido com sucesso. Enviámos os detalhes e as credenciais provisórias para o seu e-mail. Fique atento às notificações da Secretaria Académica.
                </p>
                <div className="bg-slate-50 rounded-xl p-4 mb-8 flex items-center justify-between border border-slate-100 text-left">
                    <div>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Nº de Processo</p>
                        <p className="font-mono font-bold text-slate-800">CAND-2026-8832</p>
                    </div>
                    <span className="material-symbols-outlined text-slate-300 text-3xl">mark_email_read</span>
                </div>
                <Link href="/" className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-900 text-white font-bold rounded-xl shadow-md hover:bg-blue-800 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">home</span>
                    Regressar à Página Inicial
                </Link>
            </motion.div>
            )}
        </main>
    </div>
  );
}
