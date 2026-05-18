"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Message {
    id: string;
    sender: "user" | "lucy";
    text: string;
    timestamp: Date;
}

export function LucyChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "welcome",
            sender: "lucy",
            text: "Olá! Sou a **LUCY**, a assistente inteligente da UGS. 🤖✨\n\nEstou aqui para ajudá-lo com qualquer dúvida sobre inscrições, cursos, propinas, horários ou vida no campus.\n\nComo posso ser útil hoje?",
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [hasNewMessage, setHasNewMessage] = useState(true);

    const messageEndRef = useRef<HTMLDivElement>(null);

    // Auto scroll to bottom
    useEffect(() => {
        if (messageEndRef.current) {
            messageEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isTyping]);

    // Handle initial alert/pulse badge
    useEffect(() => {
        if (isOpen) {
            setHasNewMessage(false);
        }
    }, [isOpen]);

    const quickQuestions = [
        { label: "🎓 Cursos Oferecidos", query: "Quais os cursos oferecidos na UGS?" },
        { label: "📝 Inscrições e Propinas", query: "Como funcionam as candidaturas e quais os valores das propinas?" },
        { label: "📞 Contactos e Horários", query: "Quais são os contactos e horários da secretaria?" },
        { label: "🤖 Quem é a LUCY?", query: "Quem é a LUCY IA e quem a criou?" }
    ];

    const getLucyResponse = (input: string): string => {
        const text = input.toLowerCase();

        // 1. CREATOR / IDENTITY
        if (text.includes("quem") && (text.includes("criou") || text.includes("lucy") || text.includes("te fez") || text.includes("desenvolveu"))) {
            return "Fui desenvolvida pelo **Departamento de Tecnologia e Inovação da AEUGS** (Associação de Estudantes da Universidade Gregório Semedo) para revolucionar o suporte aos nossos estudantes e candidatos. Sou fruto da criatividade e dedicação académica dos nossos próprios alunos! 💻🔥";
        }

        // 2. COURSES / CURSOS
        if (text.includes("curso") || text.includes("licenciatura") || text.includes("mestrado") || text.includes("estudar")) {
            return "A **UGS** oferece cursos de excelência reconhecidos pelo Ministério do Ensino Superior:\n\n" +
                "**Licenciaturas (4 Anos):**\n" +
                "• Direito ⚖️\n" +
                "• Engenharia Informática 💻\n" +
                "• Informática de Gestão Financeira 📈\n" +
                "• Organização e Gestão de Empresas 👔\n" +
                "• Gestão Comercial e Marketing 📊\n" +
                "• Gestão de Recursos Humanos 👥\n" +
                "• Comunicação Empresarial e Línguas 🗣️\n" +
                "• Ciências Políticas e Administração do Território 🗺️\n\n" +
                "**Mestrados (2 Anos):**\n" +
                "• Direito, Engenharia Informática, Gestão de Empresas, e Recursos Humanos.\n\n" +
                "Qual destas áreas lhe desperta mais interesse?";
        }

        // 3. CANDIDATURA / INSCRIÇÃO
        if (text.includes("candidatura") || text.includes("inscre") || text.includes("inscri") || text.includes("matrícula") || text.includes("documento") || text.includes("exame")) {
            return "As **candidaturas estão abertas** para o ano letivo 2026/27! 📝🌟\n\n" +
                "**Documentos Necessários:**\n" +
                "1. Certificado de Habilitações Literárias original (do Ensino Médio para Licenciatura)\n" +
                "2. Cópia do B.I. (Bilhete de Identidade)\n" +
                "3. 2 Fotografias tipo passe recentes\n" +
                "4. Atestado Médico e Talão de Depósito da taxa de inscrição\n\n" +
                "Pode candidatar-se diretamente na nossa secretaria física ou online clicando no botão **'Candidate-se Agora'** no menu superior.";
        }

        // 4. PROPINAS / MENSALIDADE
        if (text.includes("propina") || text.includes("mensalidade") || text.includes("custo") || text.includes("pagar") || text.includes("preço") || text.includes("valor")) {
            return "O valor das propinas varia de acordo com o curso e o grau académico (Licenciatura ou Mestrado).\n\n" +
                "Para informações financeiras exatas e atualizadas, recomendo que fale diretamente com os nossos **Serviços Financeiros**:\n" +
                "• 📞 **Tel**: 936 563 545\n" +
                "• 📧 **E-mail**: online.sf@ugs.edu.ao\n" +
                "• 🕒 **Horário**: Seg-Sex: 08h30-21h00 | Sáb: 08h30-12h00\n\n" +
                "Eles poderão fornecer-lhe a tabela de propinas detalhada do curso que pretende! 👍";
        }

        // 5. CONTACTS / CONTACTOS
        if (text.includes("contacto") || text.includes("telefone") || text.includes("email") || text.includes("secretaria") || text.includes("horário") || text.includes("seg-sex") || text.includes("ligar")) {
            return "Aqui estão os contactos oficiais dos nossos departamentos da **UGS**:\n\n" +
                "🏢 **Secretaria Geral**\n" +
                "• 📞 Tel: 931 213 054\n" +
                "• 📧 E-mail: secgeral@ugs.edu.ao\n" +
                "• 🕒 Horário: Seg-Sex: 08:00 - 21:00\n\n" +
                "💰 **Serviços Financeiros**\n" +
                "• 📞 Tel: 936 563 545\n" +
                "• 📧 E-mail: online.sf@ugs.edu.ao\n" +
                "• 🕒 Horário: Seg-Sex: 08:30-21:00 | Sáb: 08:30-12:00\n\n" +
                "📚 **Serviços Académicos**\n" +
                "• 📧 E-mail: servacademico@ugs.edu.ao\n" +
                "• 🕒 Horário: Seg-Sex: 08:00 - 17:00\n\n" +
                "👑 **Reitoria Geral**\n" +
                "• 📞 Tel: 943 993 892\n" +
                "• 📧 E-mail: reitoria.geral@ugs.edu.ao";
        }

        // 6. GREETINGS
        if (text.includes("olá") || text.includes("oi") || text.includes("bom dia") || text.includes("boa tarde") || text.includes("boa noite") || text.includes("sauda")) {
            return "Olá! 😊 Que bom falar consigo. Estou disponível para responder a tudo sobre a Universidade Gregório Semedo. \n\nQual é a sua dúvida de hoje?";
        }

        // DEFAULT HELP
        return "Percebo! Como assistente virtual inteligente da UGS, posso dar-lhe detalhes rápidos sobre a oferta formativa, contactos da secretaria ou passos para candidaturas. 🎓✨\n\nPoderia reformular a sua pergunta ou escolher uma das sugestões rápidas abaixo?";
    };

    const handleSendMessage = (text: string) => {
        if (!text.trim()) return;

        const userMsg: Message = {
            id: `msg-${Date.now()}-user`,
            sender: "user",
            text: text,
            timestamp: new Date()
        };

        setMessages((prev) => [...prev, userMsg]);
        setInputValue("");
        setIsTyping(true);

        // Simulate AI thinking and typing
        setTimeout(() => {
            const replyText = getLucyResponse(text);
            const lucyMsg: Message = {
                id: `msg-${Date.now()}-lucy`,
                sender: "lucy",
                text: replyText,
                timestamp: new Date()
            };
            setMessages((prev) => [...prev, lucyMsg]);
            setIsTyping(false);
        }, 1000);
    };

    // Helper to format text with bold formatting (markdown style)
    const formatMessageText = (text: string) => {
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, index) => {
            if (part.startsWith("**") && part.endsWith("**")) {
                return <strong key={index} className="font-extrabold text-slate-800">{part.slice(2, -2)}</strong>;
            }
            // Preserve newlines
            return part.split("\n").map((line, i) => (
                <span key={`${index}-${i}`}>
                    {line}
                    {i < part.split("\n").length - 1 && <br />}
                </span>
            ));
        });
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999] font-display">
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative size-14 sm:size-16 rounded-full flex items-center justify-center text-white bg-gradient-to-r from-primary to-orange-500 hover:from-orange-600 hover:to-primary hover:scale-105 active:scale-95 transition-all shadow-[0_6px_24px_rgba(242,127,13,0.35)] hover:shadow-[0_8px_32px_rgba(242,127,13,0.5)] z-50 group`}
                aria-label="Falar com a LUCY"
            >
                {isOpen ? (
                    <span className="material-symbols-outlined text-2xl sm:text-3xl transition-transform duration-300 rotate-90">close</span>
                ) : (
                    <span className="material-symbols-outlined text-2xl sm:text-3xl animate-pulse">smart_toy</span>
                )}

                {/* Pulse Notification Dot */}
                {hasNewMessage && !isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500 border-2 border-white justify-center items-center">
                            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                        </span>
                    </span>
                )}
            </button>

            {/* Chat Box Interface */}
            <div
                className={`absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[550px] max-h-[calc(100vh-140px)] max-w-[calc(100vw-32px)] bg-white/95 backdrop-blur-md border border-slate-200/60 rounded-[2rem] shadow-[0_20px_50px_rgba(15,23,42,0.15)] flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
                    isOpen 
                        ? "opacity-100 scale-100 pointer-events-auto" 
                        : "opacity-0 scale-75 pointer-events-none translate-y-10"
                }`}
            >
                {/* Header */}
                <div className="bg-institutional text-white px-6 py-4 flex items-center justify-between border-b border-white/10 shrink-0">
                    <div className="flex items-center gap-3.5">
                        {/* Profile Image */}
                        <div className="size-10 rounded-full bg-primary/20 relative overflow-hidden flex items-center justify-center border border-white/20">
                            <Image
                                src="/images/LUCY.png"
                                alt="LUCY"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                        <div>
                            <h3 className="font-extrabold text-base tracking-wide flex items-center gap-1.5">
                                LUCY IA
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                            </h3>
                            <p className="text-white/70 text-[10px] uppercase font-bold tracking-widest mt-0.5">Assistente Inteligente</p>
                        </div>
                    </div>
                    {/* Close Option */}
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="text-white/60 hover:text-white transition-colors size-8 rounded-lg hover:bg-white/10 flex items-center justify-center"
                    >
                        <span className="material-symbols-outlined text-lg">close</span>
                    </button>
                </div>

                {/* Message List Area */}
                <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/50">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                        >
                            <div
                                className={`max-w-[85%] rounded-2xl px-4.5 py-3 text-sm shadow-sm leading-relaxed ${
                                    msg.sender === "user"
                                        ? "bg-primary text-white rounded-tr-none font-medium"
                                        : "bg-white text-slate-700 border border-slate-100 rounded-tl-none font-medium"
                                }`}
                            >
                                {formatMessageText(msg.text)}
                                <span 
                                    className={`block text-[9px] mt-1.5 text-right ${
                                        msg.sender === "user" ? "text-white/60" : "text-slate-400"
                                    }`}
                                >
                                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                        </div>
                    ))}

                    {/* Typing Indicator */}
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none px-4.5 py-3 shadow-sm flex items-center gap-1.5">
                                <span className="size-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                                <span className="size-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                                <span className="size-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                            </div>
                        </div>
                    )}
                    <div ref={messageEndRef} />
                </div>

                {/* Suggestions Grid */}
                <div className="px-5 py-3 border-t border-slate-100 bg-white/50 shrink-0">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2">Sugestões de Perguntas:</p>
                    <div className="flex flex-wrap gap-2">
                        {quickQuestions.map((q, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleSendMessage(q.query)}
                                className="text-left text-xs bg-slate-50 border border-slate-100 hover:bg-primary/5 hover:border-primary/20 hover:text-primary transition-all px-3 py-1.5 rounded-full font-bold text-slate-600 shadow-sm"
                            >
                                {q.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Input Bar Footer */}
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSendMessage(inputValue);
                    }}
                    className="p-4 border-t border-slate-100 bg-white flex items-center gap-2 shrink-0"
                >
                    <div className="relative flex-1">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Escreva a sua mensagem..."
                            className="w-full pl-5 pr-12 py-3 bg-slate-50 border border-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder:text-slate-400 text-slate-800"
                        />
                        <button
                            type="submit"
                            disabled={!inputValue.trim()}
                            className={`absolute right-1.5 top-1/2 -translate-y-1/2 size-9 rounded-full flex items-center justify-center transition-all ${
                                inputValue.trim()
                                    ? "bg-primary text-white hover:scale-105 active:scale-95"
                                    : "bg-slate-100 text-slate-300 cursor-not-allowed"
                            }`}
                        >
                            <span className="material-symbols-outlined text-lg">send</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
