"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";

// Mock Database of Courses Details
const courseData = {
    "ciencias-politicas": {
        title: "Licenciatura em Ciências Políticas e Administração do Território",
        faculty: "Faculdade de Ciências Humanas e Letras",
        banner: "/images/cursos/licenciatura/ciencia-politica-e-administracao-do-territorio.jpg",
        intro: "Compreenda a dinâmica do poder, as políticas públicas e o desenvolvimento sustentável das regiões e municípios angolanos. Prepare-se para funções chave na governação local e diplomacia.",
        aboutParagraphs: [
            "O curso de Ciências Políticas e Administração do Território da UGS forma quadros de excelência focados no desenvolvimento regional e nacional. Proporcionamos uma visão aprofundada sobre formulação de políticas públicas, governação local e processos democráticos.",
            "Os estudantes desenvolverão pensamento crítico aplicado à gestão do território e resolução de problemas cívicos e infraestruturais, numa abordagem fortemente adaptada à realidade administrativa e territorial do nosso país."
        ],
        reasons: [
            { icon: "public", title: "Gestão Autárquica", desc: "Preparação direta para os desafios da descentralização e governação autárquica.", color: "blue" },
            { icon: "handshake", title: "Protocolos Institucionais", desc: "Acesso a estágios e protocolos práticos com entidades do Estado.", color: "orange" },
            { icon: "map", title: "Estudos Territoriais", desc: "Laboratórios práticos de mapeamento e análise de políticas territoriais.", color: "green" },
        ],
        videoImg: "/images/cursos/licenciatura/ciencia-politica-e-administracao-do-territorio.jpg",
        videoTitle: "O Papel do Cientista Político",
        videoSubtitle: "Assista a uma simulação de Assembleia presidida pelos alunos.",
        careers: ["Administração Pública Local e Central", "Consultoria Política e Estratégica", "Diplomacia e Relações Internacionais", "Assessoria de Comunicação Governamental", "Organizações Não Governamentais (ONGs)"],
        duration: "4 Anos (8 Semestres)",
        degree: "Licenciatura"
    },
    "direito": {
        title: "Licenciatura em Direito",
        faculty: "Faculdade de Ciências Jurídicas",
        banner: "/images/cursos/licenciatura/direito.jpg",
        intro: "Desenvolva uma compreensão abrangente dos sistemas jurídicos, pensamento crítico e raciocínio ético. Prepare-se para uma carreira distinta na prática jurídica, magistratura ou administração pública.",
        aboutParagraphs: [
            "A Licenciatura em Direito na Universidade Gregório Semedo foi concebida para formar profissionais jurídicos capazes de interpretar e aplicar a lei com um elevado sentido de justiça e responsabilidade social. O nosso programa combina fundamentos teóricos rigorosos com o estudo de casos práticos, garantindo que os licenciados estejam bem equipados para as complexidades dos sistemas jurídicos modernos.",
            "Os estudantes irão explorar vários ramos do direito, incluindo Direito Civil, Penal, Constitucional e Internacional. O currículo é constantemente atualizado para refletir as alterações legislativas atuais e as tendências jurídicas globais, fomentando o pensamento crítico e as competências argumentativas essenciais para o sucesso na área."
        ],
        reasons: [
            { icon: "gavel", title: "Prática em Tribunal Simulado", desc: "Sessões regulares em instalações dedicadas a julgamentos fictícios.", color: "blue" },
            { icon: "handshake", title: "Clínicas Jurídicas", desc: "Oportunidades de prestar assistência jurídica supervisionada à comunidade.", color: "orange" },
            { icon: "library_books", title: "Biblioteca Abrangente", desc: "Acesso a uma das maiores coleções jurídicas físicas e digitais de Angola.", color: "green" },
            { icon: "work", title: "Estágios Garantidos", desc: "Colocações garantidas em escritórios de advogados e instituições parceiras.", color: "purple" }
        ],
        videoImg: "/images/cursos/licenciatura/direito.jpg",
        videoTitle: "A Vida na Faculdade de Direito",
        videoSubtitle: "Veja testemunhos de estudantes e uma visita ao campus.",
        careers: ["Advocacia & Contencioso", "Magistratura Judicial e do MP", "Consultoria Jurídica Empresarial", "Administração Pública", "Organizações Internacionais", "Notariado e Registos"],
        duration: "4 Anos (8 Semestres)",
        degree: "Licenciatura"
    },
    "engenharia-informatica": {
        title: "Licenciatura em Engenharia Informática",
        faculty: "Faculdade de Engenharia e Arquitetura",
        banner: "/images/cursos/licenciatura/engenharia-informatica.jpg",
        intro: "Cobre o desenvolvimento de software corporativo, administração de redes e sistemas, preparando engenheiros para dominar a economia digital global.",
        aboutParagraphs: [
            "O curso de Engenharia Informática providencia a base e ferramentas tecnológicas de última geração, para arquitetar, projetar e construir modernos sistemas de informação que alavancam negócios e sustentam redes de comunicações estruturais.",
            "Num mundo em rápida digitalização tecnológica, o nosso plano abrange linguagens de programação diversificadas (Python, Java, C++), engenharia de software aplicada, gestão robusta de bases de dados e abordagens aprofundadas a redes neuronais e Inteligência Artificial."
        ],
        reasons: [
            { icon: "computer", title: "Laboratórios Equipados", desc: "Hardware de topo para simulação, programação e prototipagem IoT.", color: "blue" },
            { icon: "bug_report", title: "Hackathons de Campus", desc: "Maratonas de programação promovidas por grandes parceiros tecnológicos.", color: "orange" },
            { icon: "security", title: "Foco em Cibersegurança", desc: "Módulos intensivos nas vertentes de ethical hacking e defesas de redes.", color: "green" },
            { icon: "cloud", title: "Cloud Computing", desc: "Certificações em AWS e Azure perfeitamente integradas no currículo.", color: "purple" }
        ],
        videoImg: "/images/cursos/licenciatura/engenharia-informatica.jpg",
        videoTitle: "Inovação no Laboratório Tecnológico",
        videoSubtitle: "Conheça os projetos premiados desenvolvidos por alunos.",
        careers: ["Desenvolvimento de Software", "Arquitetura de Sistemas", "Engenharia de Redes", "Administração de Bases de Dados", "Consultoria Tecnológica", "Gestão de Projetos IT"],
        duration: "4 Anos (8 Semestres)",
        degree: "Licenciatura"
    },
    "informatica-gestao-financeira": {
        title: "Licenciatura em Informática de Gestão Financeira",
        faculty: "Faculdade de Economia e Gestão",
        banner: "/images/cursos/licenciatura/informatica-de-gestao-financeira.jpg",
        intro: "Uma aliança poderosa entre a tecnologia da informação e as finanças corporativas, focada em análise de dados e sistemas financeiros.",
        aboutParagraphs: [
            "Este curso vanguardista preenche o fosso crucial entre as equipas de tecnologia (IT) e os responsáveis pela gestão e tomada de decisão de negócio financeiro. O foco recai na otimização de fluxos económicos com sistemas digitais.",
            "Nesta licenciatura dominará a utilização de ERPs líderes no mercado, auditoria digital de sistemas de informação organizacionais e business intelligence para extração de insights acionáveis na modernização e competitividade corporativa."
        ],
        reasons: [
            { icon: "insights", title: "Business Intelligence", desc: "Aprendizagem das melhores ferramentas como Power BI e Tableau.", color: "blue" },
            { icon: "account_balance", title: "Fintech Avançada", desc: "Integração das tendências atuais dos mercados e bancas eletrónicas.", color: "green" },
            { icon: "work_history", title: "Estágios Estratégicos", desc: "Protocolos ativos na banca nacional e principais consultoras Big 4.", color: "purple" }
        ],
        videoImg: "/images/cursos/licenciatura/informatica-de-gestao-financeira.jpg",
        videoTitle: "A Ponte entre Tech e Negócios",
        videoSubtitle: "Como os nossos alunos revolucionam as empresas.",
        careers: ["Analista de Negócios e Sistemas", "Consultor Financeiro IT", "Auditor de Sistemas de Informação", "Gestor de Projetos Digitais"],
        duration: "4 Anos (8 Semestres)",
        degree: "Licenciatura"
    },
    "gestao-comercial-marketing": {
        title: "Licenciatura em Gestão Comercial e Marketing",
        faculty: "Faculdade de Economia e Gestão",
        banner: "/images/cursos/licenciatura/gestao-comercial-e-marketing1.jpg",
        intro: "Formação em estratégias de mercado, comportamento do consumidor e vendas para construir marcas e negócios de sucesso.",
        aboutParagraphs: [
            "Voltado para o estímulo incansável de criatividade aliada aos números, a Gestão Comercial e Marketing é um programa pragmático para formar os melhores estrategistas dos mercados em crescendo.",
            "Será preparado para estruturar planos completos desde a pesquisa de tendências, desenho e gestão de carteiras de produtos, condução e liderança de equipas de venda em grande escala e marketing profundamente digital orientando resultados."
        ],
        reasons: [
            { icon: "campaign", title: "Campanhas Reais", desc: "Construção de planos de marketing avaliados por marcas parceiras.", color: "orange" },
            { icon: "storefront", title: "Gestão Retalhista", desc: "Módulos de especialização no setor retail que dominam a empregabilidade.", color: "blue" },
            { icon: "trending_up", title: "Growth Digital", desc: "Fundamentos fortes de tráfego, conversão em e-commerce e social media.", color: "purple" }
        ],
        videoImg: "/images/cursos/licenciatura/gestao-comercial-e-marketing1.jpg",
        videoTitle: "Criatividade e Resultados",
        videoSubtitle: "Masterclasses frequentes de Diretores de Marketing de relevo.",
        careers: ["Direção Comercial", "Gestão de Marketing (CMO)", "Key Account Manager", "Marketing Digital & E-Commerce", "Analista de Mercado"],
        duration: "4 Anos (8 Semestres)",
        degree: "Licenciatura"
    },
    "organizacao-gestao-empresas": {
        title: "Licenciatura em Organização e Gestão de Empresas",
        faculty: "Faculdade de Economia e Gestão",
        banner: "/images/cursos/licenciatura/organizacao-e-gestao-de-empresas.jpg",
        intro: "Competências de liderança, análise financeira e operações estruturadas para a criação, transformação e gestão de PMEs e multinacionais.",
        aboutParagraphs: [
            "Considerada uma das licenciaturas pilares na formação económica do país, organiza e incute o mindset estrutural necessário para alavancar carreiras focadas na Alta Direção e Empreendedorismo audaz mas planificado.",
            "Um percurso curricular 360º abrangente que toca intensivamente no Direito Comercial, Finanças Avançadas, Macro e Microeconomia, Logística e Estratégia Corporativa, formando líderes resolutos para todos os problemas de negócio do tecido empresarial angolano e mundial."
        ],
        reasons: [
            { icon: "leaderboard", title: "Empreendedorismo", desc: "Incubadora própria a operar no campus para acelerar startups dos alunos.", color: "blue" },
            { icon: "pie_chart", title: "Finanças Corporativas", desc: "Formulários rigorosos baseados na gestão das grandes firmas.", color: "orange" },
            { icon: "public", title: "Visão Global", desc: "Seminários de contextualização económica comparada entre continentes.", color: "green" },
        ],
        videoImg: "/images/cursos/licenciatura/organizacao-e-gestao-de-empresas.jpg",
        videoTitle: "O Líder do Futuro",
        videoSubtitle: "Mergulhe no caso prático final avaliado pelo CEO.",
        careers: ["Gestor e Administrador Executivo", "Consultoria Estratégica", "Auditor Financeiro", "Empreendedor / Fundador", "Direção de Operações"],
        duration: "4 Anos (8 Semestres)",
        degree: "Licenciatura"
    },
    "gestao-recursos-humanos": {
        title: "Licenciatura em Gestão de Recursos Humanos",
        faculty: "Faculdade de Ciências Humanas",
        banner: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8w4DK-5b8a5Ci3TwPgqFI2FJ3v37reebjXrkZeMSRib6eOwHl_8uRhHEtNC3UjarhTtIYsHwMuE5OKBnM4VtY0UYv763BlZNQkQnhm_Rq2lssKGKT867iNquJUeSoyIURZnqPE6slSs-8AhsnZwLUhx2gOXTnvNVnUBBlvUuyRgcdxK12FnYFI3LBXLS_B_2Qio9ng68qa836B4wQAIsOAnnFNssPn5A5rWO0elMgwqmRuPbzQKRaQPGeG_gknUlIJmjnFJdzeMyR",
        intro: "Preparação de topo para a atração, retenção, formação e valorização do capital mais importante de todas ass corporações: o capital humano.",
        aboutParagraphs: [
            "A Gestão de Recursos Humanos passou de rotinas puramente transacionais para o epicentro das estratégias criativas. Este programa forma os diretores que lideram as mudanças da cultura organizacional moderna e bem-estar corporativo.",
            "Vai dominar técnicas da perspetiva psicológica, enquadramento laboral legal minucioso, sistemas de recompensa corporativos, recrutamento inteligente e condução transformadora da mudança organizacional que fomenta inovação em equipa."
        ],
        reasons: [
            { icon: "groups", title: "Psicologia Ativa", desc: "Aplicação de diagnósticos comportamentais às equipas modernas.", color: "blue" },
            { icon: "balance", title: "Direito Laboral", desc: "Capacidade completa de interpretar os códigos laborais vigentes.", color: "green" },
            { icon: "star", title: "Gestão do Talento", desc: "Inovação na recompensa e fixação de quadros de alta performance.", color: "purple" }
        ],
        videoImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCH6NA81BnzwomXZ4Iu3izZSrexdhPPqQ0QfpiM85mO7pZ2ndOXjEpc_B2hW8Ukkw0C8K5pOiHbVQEGOsKAE02V47qKBHC6h5FM8P8pU24rhWaAR2N-LVbaY0T3T0n5HQSx7yS7RUBLEhNgWavEO8_ZS5QYExuTPMsrWYhRio52EoSSa0kkxIFtrz1trh1eKVuSA1M4mxpQUzfkXCZcHlJ4nXiwSVgpg_iyOcveFp52Moos4LtiH1Z80a8CktbGkv8m3a0QvRKNlp1b",
        videoTitle: "Foco nas Pessoas",
        videoSubtitle: "Como potenciar uma cultura organizacional que funciona.",
        careers: ["Direção de Recursos Humanos (CHRO)", "Consultoria de Organização Cívica", "Recrutamento Especializado e Headhunting", "Responsável de Formação Institucional"],
        duration: "4 Anos (8 Semestres)",
        degree: "Licenciatura"
    },
    "comunicacao-empresarial-linguas": {
        title: "Licenciatura em Comunicação Empresarial e Línguas",
        faculty: "Faculdade de Ciências Humanas e Letras",
        banner: "/images/cursos/licenciatura/comunicacao-empresarial-e-linguas.jpg",
        intro: "Desenvolvimento de perfis especialistas em comunicação corporativa, relações públicas e proficiência multilinguística.",
        aboutParagraphs: [
            "Preparando os 'embaixadores' vitais das organizações, este inovador programa une o marketing relacional, as mais sensíveis Relações Públicas, a gestão de marcas ao domínio técnico na fala dos principais idiomas diplomáticos e de negócios.",
            "Um perfil em elevada demanda, a UGS garante excelência perante gabinetes de imprensa, protocolos empresariais internacionais, mitigação de crises comunicacionais e produção criativa, aliada fortemente à tradução executiva (Inglês, Francês e ferramentas nativas)."
        ],
        reasons: [
            { icon: "translate", title: "Proficiência Bilingue", desc: "Aulas técnicas altamente imersivas em línguas de alto impacto.", color: "blue" },
            { icon: "record_voice_over", title: "Relações Públicas", desc: "Laboratório de Comunicação com simulações de imprensa abertas.", color: "orange" },
            { icon: "campaign", title: "Gestão de Crise", desc: "Desafios em tempo real com media training avançado interativo.", color: "purple" }
        ],
        videoImg: "/images/cursos/licenciatura/comunicacao-empresarial-e-linguas.jpg",
        videoTitle: "A Ponte da Comunicação",
        videoSubtitle: "Dominando os media room e os gabinetes de R.P.",
        careers: ["Direção de Comunicação Corporativa", "Assessor de Imprensa Institucional", "Relações Públicas / Eventos", "Tradução Executiva a Interpretação"],
        duration: "4 Anos (8 Semestres)",
        degree: "Licenciatura"
    },
    // MESTRADO COURSES
    "mestrado-direito": {
        title: "Mestrado em Direito",
        faculty: "Faculdade de Ciências Jurídicas",
        banner: "/images/cursos/mestrado/direito.png",
        intro: "Especialidades em Ciências Jurídico-Empresariais e Ciências Jurídico-Forenses, com foco em direito empresarial e práticas jurídicas forenses.",
        aboutParagraphs: [
            "O Mestrado em Direito tem como objetivo aprofundar conhecimentos jurídicos ligados às atividades económicas de empresas públicas e privadas, bem como oferecer uma formação especializada para profissões forenses.",
            "As suas especialidades incluem um forte foco em direito empresarial e financeiro (na vertente Jurídico-Empresarial) e uma ênfase especial em direitos processuais, sistema jurisdicional e prática jurídica (na vertente Jurídico-Forense)."
        ],
        reasons: [
            { icon: "business_center", title: "Ciências Jurídico-Empresariais", desc: "Aprofunde conhecimentos jurídicos em atividades económicas de empresas públicas e privadas.", color: "blue" },
            { icon: "gavel", title: "Ciências Jurídico-Forenses", desc: "Formação altamente especializada para profissões forenses e prática jurídica.", color: "orange" },
            { icon: "account_balance", title: "Sistema Jurisdicional", desc: "Ênfase prática nos direitos processuais e na compreensão ampla do sistema jurisdicional.", color: "purple" }
        ],
        videoImg: "/images/cursos/mestrado/direito.png",
        videoTitle: "O Jurista Moderno",
        videoSubtitle: "Práticas e desafios do direito empresarial e forense.",
        careers: ["Magistratura e Ministério Público", "Advocacia de Negócios e Forense", "Consultoria Jurídico-Empresarial", "Carreira Académica e Investigação"],
        duration: "2 Anos (4 Semestres)",
        degree: "Mestrado"
    },
    "mestrado-engenharia-informatica": {
        title: "Mestrado em Engenharia Informática",
        faculty: "Faculdade de Engenharia e Arquitetura",
        banner: "/images/cursos/mestrado/engenharia-informatica.png",
        intro: "Especialidades em Desenvolvimento Mobile e Gestão de Redes de Computadores, preparando profissionais para os modernos desafios tecnológicos.",
        aboutParagraphs: [
            "O Mestrado em Engenharia Informática providencia formação avançada para o desenvolvimento de soluções robustas, desde a programação mobile à gestão avançada de infraestruturas tecnológicas.",
            "As especialidades abordam o Desenvolvimento de Aplicações para Dispositivos Móveis e a Gestão de Redes de Computadores e Sistemas de Comunicações, exigidas pelos constantes desafios do mercado tecnológico moderno."
        ],
        reasons: [
            { icon: "smartphone", title: "Desenvolvimento Mobile", desc: "Formação científica e técnica aprofundada em aplicações para dispositivos móveis.", color: "blue" },
            { icon: "router", title: "Redes e Comunicações", desc: "Formação avançada em redes informáticas, infraestrutura e sistemas de comunicação.", color: "green" },
            { icon: "trending_up", title: "Foco no Mercado", desc: "Preparação direta para os desafios tecnológicos modernos e elevadas exigências do mercado.", color: "orange" }
        ],
        videoImg: "/images/cursos/mestrado/engenharia-informatica.png",
        videoTitle: "Inovação Tecnológica",
        videoSubtitle: "Criando o futuro através do desenvolvimento e gestão de redes.",
        careers: ["Desenvolvimento de Software e Mobile", "Arquitetura e Gestão de Redes", "Gestão de Sistemas de Informação", "Consultoria em Infraestruturas Tecnológicas"],
        duration: "2 Anos (4 Semestres)",
        degree: "Mestrado"
    },
    "mestrado-gestao-empresas": {
        title: "Mestrado em Gestão de Empresas",
        faculty: "Faculdade de Economia e Gestão",
        banner: "/images/cursos/mestrado/organizacao-e-gestao-de-empresas.png",
        intro: "Especialidades em Gestão Comercial, Finanças, Logística e Marketing, promovendo o desenvolvimento de competências práticas empresariais.",
        aboutParagraphs: [
            "O Mestrado em Gestão de Empresas está desenhado para responder de forma abrangente às necessidades das organizações nos setores comerciais, financeiros, logísticos e de comunicação.",
            "As especialidades incluem: Gestão Comercial; Finanças e Mercados Financeiros; Gestão da Logística e dos Transportes; e Comunicação, Marketing e Publicidade, com forte envolvimento de profissionais de grandes empresas em seminários de especialização."
        ],
        reasons: [
            { icon: "storefront", title: "Gestão Comercial e Marketing", desc: "Complementa a licenciatura, focando no desenvolvimento de competências estratégicas e comunicação empresarial.", color: "orange" },
            { icon: "account_balance", title: "Finanças e Mercados", desc: "Formação aprofundada em finanças empresariais e gestão financeira corporativa.", color: "blue" },
            { icon: "local_shipping", title: "Logística e Transportes", desc: "Especialização tática na gestão de cadeias de abastecimento e planeamento de operações.", color: "green" }
        ],
        videoImg: "/images/cursos/mestrado/organizacao-e-gestao-de-empresas.png",
        videoTitle: "Visão Estratégica",
        videoSubtitle: "Seminários especializados com líderes de mercado.",
        careers: ["Direção Comercial e Marketing", "Gestão Financeira e Análise de Mercados", "Direção de Operações e Logística", "Consultoria Estratégica e Comunicação Corporativa"],
        duration: "2 Anos (4 Semestres)",
        degree: "Mestrado"
    },
    "mestrado-recursos-humanos": {
        title: "Mestrado em Recursos Humanos",
        faculty: "Faculdade de Ciências Humanas",
        banner: "/images/cursos/mestrado/gestao-de-recursos-humanos.png",
        intro: "Especialidades em Gestão do Potencial Humano e Gestão Estratégica, focadas na liderança organizacional e desenvolvimento sustentável das pessoas.",
        aboutParagraphs: [
            "O Mestrado em Recursos Humanos foi concebido para reforçar a profissionalização da gestão de talentos, combinando os aspetos humanos do ambiente empresarial com as necessidades organizacionais de alto nível.",
            "Oferece formação especializada em duas áreas nucleares: a Gestão e Desenvolvimento do Potencial Humano em Ambiente Empresarial e a Gestão Estratégica de Recursos Humanos, criando líderes capazes de redefinir o futuro do trabalho."
        ],
        reasons: [
            { icon: "psychology", title: "Desenvolvimento Humano", desc: "Foco especializado na gestão de pessoas, desenvolvimento contínuo e bem-estar em ambiente empresarial.", color: "blue" },
            { icon: "insights", title: "Gestão Estratégica", desc: "Reforço direto da profissionalização e estruturação organizacional focada nos recursos humanos.", color: "purple" },
            { icon: "groups", title: "Liderança Organizacional", desc: "Desenvolvimento de competências essenciais para a liderança eficaz no mercado de trabalho atual.", color: "orange" }
        ],
        videoImg: "/images/cursos/mestrado/gestao-de-recursos-humanos.png",
        videoTitle: "O Centro das Organizações",
        videoSubtitle: "Como potenciar o verdadeiro capital das empresas.",
        careers: ["Direção de Recursos Humanos (CHRO)", "Consultoria de Organização Cívica", "Talent Acquisition e Headhunting", "Responsável por Estratégia de Retenção"],
        duration: "2 Anos (4 Semestres)",
        degree: "Mestrado"
    },
    "pos-dev-mobile": {
        title: "Pós-Graduação em Desenvolvimento de Aplicações para Dispositivos Móveis",
        faculty: "Faculdade de Engenharia e Arquitetura",
        banner: "/images/cursos/mestrado/engenharia-informatica.png",
        intro: "Especialização avançada na criação e arquitetura de aplicações nativas e multiplataforma para ecossistemas mobile.",
        aboutParagraphs: [
            "Este programa foca-se nas mais recentes tendências e tecnologias para a criação de soluções móveis robustas, escaláveis e centradas no utilizador.",
            "O currículo prático assegura domínio em frameworks líderes (como Flutter e React Native), bem como no desenvolvimento nativo (Swift e Kotlin)."
        ],
        reasons: [
            { icon: "smartphone", title: "Tecnologias de Ponta", desc: "Aprendizagem das stacks móveis mais requisitadas no mercado global.", color: "blue" },
            { icon: "code", title: "Projetos Práticos", desc: "Construção de um portefólio real durante todo o curso.", color: "orange" },
            { icon: "speed", title: "Otimização de Performance", desc: "Foco na eficiência e usabilidade das aplicações criadas.", color: "green" }
        ],
        videoImg: "/images/cursos/mestrado/engenharia-informatica.png",
        videoTitle: "O Futuro Mobile",
        videoSubtitle: "Criando as apps do amanhã hoje.",
        careers: ["Engenheiro de Software Mobile", "Arquiteto de Soluções Móveis", "Tech Lead", "Consultor Especialista"],
        duration: "1 Ano (2 Semestres)",
        degree: "Pós-Graduação"
    },
    "pos-direito-empresarial": {
        title: "Pós-Graduação em Direito Empresarial (Ciências Jurídico-Empresariais)",
        faculty: "Faculdade de Ciências Jurídicas",
        banner: "/images/cursos/mestrado/direito.png",
        intro: "Aprofundamento em legislação corporativa, contratos mercantis e resolução de litígios no ambiente empresarial moderno.",
        aboutParagraphs: [
            "Um curso estruturado para juristas e gestores que procuram dominar o intrincado quadro legal do mundo dos negócios, garantindo compliance e segurança jurídica.",
            "Aborda temas essenciais como sociedades comerciais, contratos internacionais, direito fiscal e laboral aplicado à gestão empresarial."
        ],
        reasons: [
            { icon: "gavel", title: "Especialização Estratégica", desc: "Ferramentas para assessorar e defender corporações em cenários complexos.", color: "blue" },
            { icon: "handshake", title: "Contratos Internacionais", desc: "Visão além-fronteiras das transações comerciais.", color: "orange" },
            { icon: "account_balance", title: "Compliance Financeiro", desc: "Domínio das regulamentações que regem o mercado.", color: "purple" }
        ],
        videoImg: "/images/cursos/mestrado/direito.png",
        videoTitle: "A Lei nos Negócios",
        videoSubtitle: "Assegurar o crescimento com segurança jurídica.",
        careers: ["Advogado de Empresa", "Assessor Jurídico", "Consultor de Compliance", "Jurista em Sociedades Financeiras"],
        duration: "1 Ano (2 Semestres)",
        degree: "Pós-Graduação"
    },
    "pos-direito-juridico": {
        title: "Pós-Graduação em Direito Jurídico (Ciências Jurídico-Forenses)",
        faculty: "Faculdade de Ciências Jurídicas",
        banner: "/images/cursos/mestrado/direito.png",
        intro: "Foco na prática processual, investigação forense e na estratégia de litígio para profissionais de direito e advogados.",
        aboutParagraphs: [
            "Voltada para a prática dos tribunais, esta especialização prepara os profissionais do foro para o exercício rigoroso e estratégico do patrocínio judiciário.",
            "Inclui o aprofundamento do direito processual (civil e penal) e das técnicas de negociação, mediação e redação de peças processuais complexas."
        ],
        reasons: [
            { icon: "gavel", title: "Simulação de Julgamentos", desc: "Experiência prática em ambiente de tribunal.", color: "blue" },
            { icon: "menu_book", title: "Estudos de Casos", desc: "Análise profunda de jurisprudência relevante e recente.", color: "orange" },
            { icon: "balance", title: "Ética e Deontologia", desc: "Forte componente na integridade do exercício forense.", color: "green" }
        ],
        videoImg: "/images/cursos/mestrado/direito.png",
        videoTitle: "Mestria Forense",
        videoSubtitle: "Excelência na argumentação e na defesa.",
        careers: ["Advogado de Contencioso", "Magistrado Judicial", "Auditor Jurídico", "Consultor Especialista de Litígios"],
        duration: "1 Ano (2 Semestres)",
        degree: "Pós-Graduação"
    },
    "pos-redes-computadores": {
        title: "Pós-Graduação em Gestão de Redes de Computadores e Sistemas de Comunicações",
        faculty: "Faculdade de Engenharia e Arquitetura",
        banner: "/images/cursos/mestrado/engenharia-informatica.png",
        intro: "Desenvolvimento de perícia técnica na administração, segurança e infraestrutura de redes empresariais.",
        aboutParagraphs: [
            "Um programa intensivo que qualifica os estudantes para desenhar, implementar e gerir as espinhas dorsais de comunicação das organizações.",
            "Os módulos cobrem desde a arquitetura de redes cabeadas e sem fios até as estratégias mais avançadas de cibersegurança e cloud computing."
        ],
        reasons: [
            { icon: "router", title: "Infraestruturas Complexas", desc: "Domínio de sistemas e equipamentos empresariais.", color: "blue" },
            { icon: "security", title: "Segurança de Redes", desc: "Estratégias defensivas contra ameaças cibernéticas modernas.", color: "red" },
            { icon: "cloud", title: "Integração Cloud", desc: "Convergência das redes físicas com as plataformas em nuvem.", color: "purple" }
        ],
        videoImg: "/images/cursos/mestrado/engenharia-informatica.png",
        videoTitle: "Conectando o Mundo",
        videoSubtitle: "Liderando a arquitetura das comunicações.",
        careers: ["Administrador de Redes", "Engenheiro de Telecomunicações", "Especialista em Cibersegurança", "Arquiteto de Sistemas Cloud"],
        duration: "1 Ano (2 Semestres)",
        degree: "Pós-Graduação"
    },
    "pos-estrategia-rh": {
        title: "Pós-Graduação em Gestão Estratégica de Recursos Humanos",
        faculty: "Faculdade de Ciências Humanas",
        banner: "/images/cursos/mestrado/gestao-de-recursos-humanos.png",
        intro: "Capacitação para alinhar o capital humano aos objetivos estratégicos e de rentabilidade da organização.",
        aboutParagraphs: [
            "Esta pós-graduação transforma a visão dos Recursos Humanos de uma função de apoio para um pilar central na definição da estratégia corporativa.",
            "Prepara líderes para gerir o ciclo de vida do talento com uma abordagem fundamentada em dados (HR Analytics) e no desenvolvimento da cultura organizacional."
        ],
        reasons: [
            { icon: "insights", title: "HR Analytics", desc: "Tomada de decisão baseada em métricas e dados.", color: "blue" },
            { icon: "psychology", title: "Liderança Transformacional", desc: "Técnicas de gestão para contextos de mudança.", color: "orange" },
            { icon: "groups", title: "Cultura Organizacional", desc: "Construção de ambientes de trabalho atrativos e produtivos.", color: "green" }
        ],
        videoImg: "/images/cursos/mestrado/gestao-de-recursos-humanos.png",
        videoTitle: "O Poder do Capital Humano",
        videoSubtitle: "Alinhando talento e estratégia corporativa.",
        careers: ["Diretor de Recursos Humanos (HRBP)", "Consultor de Gestão da Mudança", "Especialista em Cultura Organizacional", "Gestor de Talento"],
        duration: "1 Ano (2 Semestres)",
        degree: "Pós-Graduação"
    },
    "pos-potencial-humano": {
        title: "Pós-Graduação em Gestão e Desenvolvimento do Potencial Humano",
        faculty: "Faculdade de Ciências Humanas",
        banner: "/images/cursos/mestrado/gestao-de-recursos-humanos.png",
        intro: "Foco na retenção de talentos, mentoring, coaching corporativo e criação de ambientes de trabalho de alta performance.",
        aboutParagraphs: [
            "Destinado a profissionais que desejam aprofundar as competências no empoderamento e crescimento dos colaboradores dentro da empresa.",
            "O curso dota os participantes de ferramentas práticas de coaching, metodologias de avaliação de desempenho e políticas ativas de motivação."
        ],
        reasons: [
            { icon: "star", title: "Retenção de Talentos", desc: "Estratégias inovadoras para manter os melhores quadros.", color: "orange" },
            { icon: "emoji_people", title: "Coaching Executivo", desc: "Competências de mentoria e desenvolvimento individual.", color: "blue" },
            { icon: "trending_up", title: "Avaliação de Desempenho", desc: "Mecanismos para potenciar a alta performance das equipas.", color: "green" }
        ],
        videoImg: "/images/cursos/mestrado/gestao-de-recursos-humanos.png",
        videoTitle: "Desenvolvendo Pessoas",
        videoSubtitle: "A base do sucesso organizacional.",
        careers: ["Coach Corporativo", "Responsável de Formação e Desenvolvimento", "Consultor de Talentos", "Analista de Desempenho"],
        duration: "1 Ano (2 Semestres)",
        degree: "Pós-Graduação"
    },
    "pos-marketing-publicidade": {
        title: "Pós-Graduação em Marketing, Publicidade e Comunicação Empresarial",
        faculty: "Faculdade de Economia e Gestão",
        banner: "/images/cursos/licenciatura/gestao-comercial-e-marketing1.jpg",
        intro: "Especialização em planeamento de campanhas omnicanal, branding e comunicação corporativa digital e tradicional.",
        aboutParagraphs: [
            "Um curso intensivo projetado para criar estrategistas da comunicação capazes de posicionar marcas com impacto e precisão.",
            "Explora a intersecção entre a comunicação corporativa, a criatividade da publicidade e a assertividade do marketing digital e baseado em dados."
        ],
        reasons: [
            { icon: "campaign", title: "Planeamento Estratégico", desc: "Desenho de campanhas de publicidade com ROIs elevados.", color: "orange" },
            { icon: "language", title: "Comunicação Digital", desc: "Domínio das plataformas online e social media management.", color: "blue" },
            { icon: "brush", title: "Gestão de Marca (Branding)", desc: "Criação e preservação da identidade corporativa.", color: "purple" }
        ],
        videoImg: "/images/cursos/licenciatura/gestao-comercial-e-marketing1.jpg",
        videoTitle: "Marcas com Impacto",
        videoSubtitle: "Criatividade aliada à conversão de mercado.",
        careers: ["Diretor de Marketing Corporativo", "Gestor de Marca (Brand Manager)", "Estrategista de Comunicação", "Diretor Criativo/Publicidade"],
        duration: "1 Ano (2 Semestres)",
        degree: "Pós-Graduação"
    },
    "pos-financas-mercados": {
        title: "Pós-Graduação em Finanças e Mercados Financeiros",
        faculty: "Faculdade de Economia e Gestão",
        banner: "/images/cursos/mestrado/organizacao-e-gestao-de-empresas.png",
        intro: "Análise avançada de investimentos, gestão de carteiras, risco corporativo e dinâmica dos mercados de capitais.",
        aboutParagraphs: [
            "Para profissionais que procuram excelência na análise financeira, esta especialização mergulha profundamente no funcionamento dos mercados locais e internacionais.",
            "Abrange modelos complexos de avaliação de empresas, produtos derivados, gestão do risco cambial e de taxas de juro, preparando analistas de elite."
        ],
        reasons: [
            { icon: "show_chart", title: "Análise de Mercados", desc: "Leitura avançada das tendências dos mercados de capitais.", color: "blue" },
            { icon: "monetization_on", title: "Gestão de Carteiras", desc: "Estratégias de investimento em ativos diversificados.", color: "green" },
            { icon: "warning", title: "Gestão de Risco", desc: "Mitigação e cobertura (hedging) de riscos financeiros.", color: "orange" }
        ],
        videoImg: "/images/cursos/mestrado/organizacao-e-gestao-de-empresas.png",
        videoTitle: "A Dinâmica Financeira",
        videoSubtitle: "Maximizando retornos na economia global.",
        careers: ["Analista Financeiro", "Gestor de Carteiras (Portfolio Manager)", "Consultor de Investimentos", "Risk Manager"],
        duration: "1 Ano (2 Semestres)",
        degree: "Pós-Graduação"
    },
    "pos-gestao-comercial": {
        title: "Pós-Graduação em Gestão Comercial",
        faculty: "Faculdade de Economia e Gestão",
        banner: "/images/cursos/mestrado/organizacao-e-gestao-de-empresas.png",
        intro: "Estratégias avançadas de negociação, gestão de equipas de vendas e expansão de quota de mercado.",
        aboutParagraphs: [
            "Focada totalmente no motor das empresas: as vendas. Este programa eleva a perspetiva de gestores sobre a execução tática nos mercados B2B e B2C.",
            "Capacita para a definição de metas, estruturação de canais de distribuição, métricas comerciais (KPIs) e liderança de equipas de vendas de alta performance."
        ],
        reasons: [
            { icon: "groups", title: "Liderança de Vendas", desc: "Motivação e estruturação de equipas comerciais fortes.", color: "blue" },
            { icon: "pie_chart", title: "Gestão de Canais", desc: "Otimização de rotas de mercado e distribuidores parceiros.", color: "orange" },
            { icon: "handshake", title: "Negociação Avançada", desc: "Técnicas de fecho de contratos e gestão de grandes contas.", color: "purple" }
        ],
        videoImg: "/images/cursos/mestrado/organizacao-e-gestao-de-empresas.png",
        videoTitle: "Motor de Crescimento",
        videoSubtitle: "Conquistando a vanguarda comercial.",
        careers: ["Diretor Comercial", "Key Account Manager", "Gestor de Vendas Regional", "Consultor de Negócios e Retalho"],
        duration: "1 Ano (2 Semestres)",
        degree: "Pós-Graduação"
    },
    "pos-gestao-logistica": {
        title: "Pós-Graduação em Gestão da Logística e dos Transportes",
        faculty: "Faculdade de Economia e Gestão",
        banner: "/images/cursos/mestrado/organizacao-e-gestao-de-empresas.png",
        intro: "Otimização de cadeias de abastecimento, gestão de frota, importação/exportação e operações aduaneiras.",
        aboutParagraphs: [
            "Um curso crucial para a economia atual, focado em tornar as supply chains empresariais mais eficientes, rápidas e menos dispendiosas.",
            "Aborda gestão de armazéns, transporte multimodal, processos de procurement e os aspetos legais do comércio internacional e despacho aduaneiro."
        ],
        reasons: [
            { icon: "local_shipping", title: "Supply Chain Management", desc: "Visão global da logística de ponta-a-ponta.", color: "green" },
            { icon: "warehouse", title: "Gestão de Armazéns", desc: "Metodologias lean e sistemas de informação de stock.", color: "blue" },
            { icon: "public", title: "Comércio Internacional", desc: "Operações e trâmites de importação e exportação.", color: "orange" }
        ],
        videoImg: "/images/cursos/mestrado/organizacao-e-gestao-de-empresas.png",
        videoTitle: "A Cadeia de Valor",
        videoSubtitle: "Otimizando a logística do futuro.",
        careers: ["Diretor de Supply Chain", "Gestor de Logística e Frota", "Especialista em Comércio Internacional", "Operations Manager"],
        duration: "1 Ano (2 Semestres)",
        degree: "Pós-Graduação"
    },
    "pos-governanca-corporativa": {
        title: "Pós-Graduação em Governança Corporativa",
        faculty: "Faculdade de Economia e Gestão",
        banner: "/images/cursos/mestrado/organizacao-e-gestao-de-empresas.png",
        intro: "Mecanismos de compliance, ética empresarial, auditoria interna e responsabilidade social em grandes organizações.",
        aboutParagraphs: [
            "Prepara profissionais para garantir a transparência, sustentabilidade e integridade no topo da hierarquia corporativa das grandes empresas.",
            "Aprofunda as boas práticas de prestação de contas dos conselhos de administração, as normativas de auditoria e a regulamentação anti-corrupção (Compliance)."
        ],
        reasons: [
            { icon: "policy", title: "Compliance e Ética", desc: "Estruturação de códigos de conduta empresariais.", color: "purple" },
            { icon: "fact_check", title: "Auditoria Interna", desc: "Mecanismos de supervisão e controlo financeiro/processual.", color: "blue" },
            { icon: "account_balance", title: "Relações com Investidores", desc: "Garantia de transparência para o mercado e acionistas.", color: "green" }
        ],
        videoImg: "/images/cursos/mestrado/organizacao-e-gestao-de-empresas.png",
        videoTitle: "Governação com Transparência",
        videoSubtitle: "O pilar ético das grandes organizações.",
        careers: ["Compliance Officer", "Membro de Conselho de Administração", "Auditor Principal", "Diretor de Risco Corporativo"],
        duration: "1 Ano (2 Semestres)",
        degree: "Pós-Graduação"
    },
    "pos-gestao-projectos": {
        title: "Pós-Graduação em Gestão de Projectos",
        faculty: "Faculdade de Economia e Gestão",
        banner: "/images/cursos/mestrado/organizacao-e-gestao-de-empresas.png",
        intro: "Metodologias ágeis e tradicionais (PMBOK) para a conceção, execução e entrega de projetos complexos.",
        aboutParagraphs: [
            "Capacita profissionais de todas as áreas a liderar empreitadas dentro do prazo, do orçamento e com a qualidade exigida pelos stakeholders.",
            "Domine quer o corpo de conhecimento clássico do PMI, quer as abordagens ágeis (Scrum, Kanban), essenciais para ambientes de inovação rápida."
        ],
        reasons: [
            { icon: "assignment_turned_in", title: "Metodologia PMBOK", desc: "Preparação fundamentada nos standards globais do PMI.", color: "blue" },
            { icon: "sync", title: "Abordagens Ágeis", desc: "Gestão flexível para indústrias em rápida mutação (Agile).", color: "orange" },
            { icon: "request_quote", title: "Controlo Orçamental", desc: "Otimização e justificação rigorosa dos custos.", color: "green" }
        ],
        videoImg: "/images/cursos/mestrado/organizacao-e-gestao-de-empresas.png",
        videoTitle: "Do Conceito à Execução",
        videoSubtitle: "Entregando resultados num mundo exigente.",
        careers: ["Gestor de Projetos (Project Manager)", "Scrum Master", "Consultor PMO", "Diretor de Transformação Empresarial"],
        duration: "1 Ano (2 Semestres)",
        degree: "Pós-Graduação"
    }
};

export default function CourseDetailPage() {
    const params = useParams();
    const id = params.id as string;

    const [activeTab, setActiveTab] = useState("Visão Geral");

    const currentCourse = courseData[id as keyof typeof courseData];

    if (!currentCourse) {
        return (
            <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
                <h1 className="text-4xl font-extrabold text-institutional mb-4">Curso não encontrado</h1>
                <p className="text-slate-500 mb-8 max-w-md">Não conseguimos localizar o curso solicitado. Certifique-se que o link está correto.</p>
                <Link href="/cursos">
                    <button className="bg-primary text-white py-3 px-8 rounded-xl font-bold hover:bg-orange-600 transition-colors">Voltar para a Lista de Cursos</button>
                </Link>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <Navbar activePage="/cursos" />
            <main>
                {/* Banner Hero */}
                <section className="relative bg-institutional py-20 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-institutional/95 via-institutional/80 to-institutional/40 z-10"></div>
                        <div
                            className="w-full h-full bg-center bg-cover bg-institutional"
                            style={{
                                backgroundImage: `url('${currentCourse.banner}')`,
                            }}
                        ></div>
                    </div>
                    <div className="relative z-20 max-w-7xl mx-auto px-6">
                        <ScrollReveal variant="fade-right">
                            <div className="max-w-3xl">
                                <div className="flex flex-wrap items-center gap-2 md:gap-3 text-slate-300 text-xs md:text-sm font-medium mb-6">
                                    <Link href="/" className="hover:text-white transition-colors">Início</Link>
                                    <span className="material-symbols-outlined text-[10px] md:text-xs">chevron_right</span>
                                    <Link href="/cursos" className="hover:text-white transition-colors">Cursos</Link>
                                    <span className="material-symbols-outlined text-[10px] md:text-xs">chevron_right</span>
                                    <span className="text-primary font-bold line-clamp-1">{currentCourse.title.replace('Licenciatura em ', '')}</span>
                                </div>
                                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                                    {currentCourse.title}
                                </h1>
                                <p className="text-base md:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed font-medium">
                                    {currentCourse.intro}
                                </p>
                                <div className="flex flex-wrap gap-3 md:gap-4 text-white/90 text-xs md:text-sm font-bold">
                                    <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
                                        <span className="material-symbols-outlined text-primary text-base md:text-lg">school</span>
                                        {currentCourse.faculty}
                                    </div>
                                    <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
                                        <span className="material-symbols-outlined text-primary text-base md:text-lg">schedule</span>
                                        Tempo Inteiro / Pós-Laboral
                                    </div>
                                    <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
                                        <span className="material-symbols-outlined text-primary text-base md:text-lg">location_on</span>
                                        Campus Principal, Luanda
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-8">
                            {/* Tabs Navigation */}
                            <ScrollReveal>
                                <div className="border-b border-slate-200 mb-10 overflow-x-auto scrollbar-hide">
                                    <nav className="flex space-x-8 min-w-max">
                                        {['Visão Geral', 'Plano de Estudos', 'Corpo Docente', 'Admissões'].map((tabItem) => (
                                            <button
                                                key={tabItem}
                                                onClick={() => setActiveTab(tabItem)}
                                                className={`border-b-4 py-4 px-1 text-sm md:text-base font-bold flex items-center gap-2 transition-all ${activeTab === tabItem ? 'border-primary text-institutional' : 'border-transparent text-slate-400 hover:text-institutional'}`}
                                            >
                                                <span className="material-symbols-outlined">
                                                    {tabItem === 'Visão Geral' ? 'info' : tabItem === 'Plano de Estudos' ? 'menu_book' : tabItem === 'Corpo Docente' ? 'group' : 'assignment_turned_in'}
                                                </span>
                                                {tabItem}
                                            </button>
                                        ))}
                                    </nav>
                                </div>
                            </ScrollReveal>

                            {/* Details Content Container */}
                            <div className="space-y-12">
                                {activeTab === "Visão Geral" && (
                                    <>
                                        <ScrollReveal variant="fade-up">
                                            <section>
                                                <h2 className="text-2xl font-black text-institutional mb-6">Sobre o Curso</h2>
                                                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-medium space-y-4">
                                                    {currentCourse.aboutParagraphs.map((paragraph, i) => (
                                                        <p key={i}>{paragraph}</p>
                                                    ))}
                                                </div>
                                            </section>
                                        </ScrollReveal>

                                        <ScrollReveal variant="fade-up">
                                            <section>
                                                <h3 className="text-xl font-black text-institutional mb-6">Porquê Estudar {currentCourse.title.replace('Licenciatura em ', '')} na UGS?</h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    {currentCourse.reasons.map((item, idx) => (
                                                        <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex gap-4 hover:shadow-md transition-shadow">
                                                            <div className={`size-12 rounded-xl bg-${item.color}-50 flex items-center justify-center shrink-0 text-${item.color}-600`}>
                                                                <span className="material-symbols-outlined font-bold">{item.icon}</span>
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                                                <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </section>
                                        </ScrollReveal>

                                        <ScrollReveal variant="scale-up">
                                            <section className="rounded-3xl overflow-hidden relative group cursor-pointer shadow-2xl border-4 border-white">
                                                <div className="aspect-video w-full bg-slate-200 relative">
                                                    <Image
                                                        src={currentCourse.videoImg}
                                                        alt="Vida na Faculdade"
                                                        fill                                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                                                        <div className="size-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 group-hover:scale-110 transition-all">
                                                            <span className="material-symbols-outlined text-white text-5xl ml-1">play_arrow</span>
                                                        </div>
                                                    </div>
                                                    <div className="absolute bottom-8 left-8 text-white pr-4">
                                                        <h4 className="font-black text-lg md:text-2xl drop-shadow-lg leading-tight">{currentCourse.videoTitle}</h4>
                                                        <p className="text-sm md:text-base font-bold opacity-90 drop-shadow-md mt-1">{currentCourse.videoSubtitle}</p>
                                                    </div>
                                                </div>
                                            </section>
                                        </ScrollReveal>

                                        <ScrollReveal variant="fade-up">
                                            <section>
                                                <h2 className="text-2xl font-black text-institutional mb-6">Oportunidades de Carreira</h2>
                                                <p className="text-slate-600 mb-6 font-medium">Os licenciados deste curso estão preparados para uma vasta gama de percursos profissionais:</p>
                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    {currentCourse.careers.map((job, idx) => (
                                                        <li key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm font-bold text-slate-700">
                                                            <span className="material-symbols-outlined text-primary font-bold">check_circle</span>
                                                            <span>{job}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </section>
                                        </ScrollReveal>
                                    </>
                                )}
                                {activeTab !== "Visão Geral" && (
                                    <ScrollReveal variant="fade-up">
                                        <div className="p-8 border-2 border-dashed border-slate-200 rounded-3xl text-center bg-white/50">
                                            <span className="material-symbols-outlined text-4xl text-slate-300 mb-4 inline-block">construction</span>
                                            <h3 className="text-lg font-bold text-institutional mb-2">Informação em Preparação</h3>
                                            <p className="text-slate-500 max-w-md mx-auto">A secção &quot;{activeTab}&quot; está a ser atualizada para o próximo ano letivo. Por favor, descarregue a brochura no painel lateral para mais detalhes.</p>
                                        </div>
                                    </ScrollReveal>
                                )}
                            </div>
                        </div>

                        <div className="lg:col-span-4 space-y-8">
                            <ScrollReveal variant="fade-left">
                                <div className="bg-white p-8 rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 sticky top-28 mx-auto xl:mx-0 w-full">
                                    <div className="mb-8">
                                        <span className="inline-block px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-black mb-4 tracking-widest uppercase">ADMISSÕES ABERTAS</span>
                                        <h3 className="text-2xl font-black text-institutional mb-2 tracking-tight">Pronto para começar?</h3>
                                        <p className="text-slate-500 font-medium text-sm">Garanta a sua vaga para o próximo ano letivo.</p>
                                    </div>
                                    <Link href="/candidatura" className="w-full bg-primary text-white py-5 rounded-2xl text-[15px] sm:text-lg font-black hover:bg-orange-600 transition-all shadow-xl shadow-primary/25 flex items-center justify-center gap-2 mb-4 group active:scale-95">
                                        Candidatar-se ao Curso
                                        <span className="material-symbols-outlined font-bold group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </Link>
                                    <button className="w-full bg-white text-institutional border-2 border-slate-100 py-4 rounded-2xl font-black hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 mb-8 active:scale-95 text-[15px] sm:text-base">
                                        <span className="material-symbols-outlined font-bold">download</span>
                                        Descarregar Brochura
                                    </button>

                                    <div className="space-y-5 pt-6 border-t border-slate-100">
                                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Informações Chave</h4>
                                        {[
                                            { icon: "calendar_today", label: "Duração", val: currentCourse.duration },
                                            { icon: "school", label: "Grau Académico", val: currentCourse.degree },
                                            { icon: "translate", label: "Idioma", val: "Português" },
                                            { icon: "payments", label: "Propinas", val: "Consulte para detalhes" }
                                        ].map((info, idx) => (
                                            <div key={idx} className="flex items-start gap-4">
                                                <div className="mt-0.5 text-primary">
                                                    <span className="material-symbols-outlined font-bold">{info.icon}</span>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider">{info.label}</p>
                                                    <p className="font-bold text-slate-800 text-sm">{info.val}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal variant="fade-left" delay={0.2}>
                                <div className="bg-institutional text-white p-8 rounded-3xl shadow-xl shadow-institutional/20 relative overflow-hidden group">
                                    <div className="relative z-10">
                                        <h4 className="font-black text-xl mb-4">Dúvidas sobre o curso?</h4>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="size-12 rounded-full border-2 border-white/20 overflow-hidden relative shrink-0">
                                                <Image
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1oq43LzWSFAIsS-sHA8UE11FrIMsaZ-EmZ5d0jv5iXdPcoJzbxRxjNHfG3FuIY2KQ3gTYRSv0ZYVW_18_kWArDycDUB7IyRs_0Ft_OMmY-Jrf7jNvv4-hZI_n81KgdClpngoN5kJY-pcHkBepqyJSilMXqVp7PMNrCXTFm0vsToj5KzBq5Yvfqo6YgAfm1mlNFzEQiidYMqCBDINJ0GbkjAP-ZEA4kAb1PhxiHrYM7P9P5kw5RQXNZZI4EWaBZlf87fTwAuLJk-GJ"
                                                    alt="Admissões"
                                                    fill                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <p className="text-sm font-black text-white/90">Gabinete de Apoio</p>
                                                <a className="text-[13px] md:text-sm text-primary font-bold hover:underline word-break break-all" href="mailto:admissoes@ugs.ed.ao">admissoes@ugs.ed.ao</a>
                                            </div>
                                        </div>
                                        <p className="text-xs text-slate-300 font-medium leading-relaxed">A nossa equipa está disponível de Seg-Sex, das 8h às 17h, para responder a todas as suas questões.</p>
                                    </div>
                                    <div className="absolute -bottom-6 -right-6 text-white/5 pointer-events-none">
                                        <span className="material-symbols-outlined text-8xl">contact_support</span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
