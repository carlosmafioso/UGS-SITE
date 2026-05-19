"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function AdminMediaManager() {
    return (
        <div className="flex h-screen w-full overflow-hidden bg-background-light font-display text-slate-900 antialiased">
            {/* Sidebar Barra Lateral */}
            <aside className="flex w-64 flex-col bg-ugs-blue text-white shadow-xl flex-shrink-0 z-20">
                <ScrollReveal delay={0} variant="fade-right" className="w-full">
                    {/* Marca */}
                    <div className="flex h-20 items-center gap-3 px-6 border-b border-white/10">
                        <div className="flex items-center justify-center size-10 rounded-lg bg-white/10 text-primary">
                            <span className="material-symbols-outlined text-2xl">school</span>
                        </div>
                        <div>
                            <h1 className="text-base font-bold leading-tight tracking-wide">Admin UGS</h1>
                            <p className="text-xs text-slate-400 font-medium uppercase tracking-tighter">Universidade G. Semedo</p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Navegação */}
                <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
                    <ScrollReveal delay={0.1}>
                        <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white transition-colors group">
                            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">dashboard</span>
                            <span className="text-sm font-medium">Painel Principal</span>
                        </Link>
                    </ScrollReveal>
                    <ScrollReveal delay={0.15}>
                        <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary transition-colors group">
                            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>perm_media</span>
                            <span className="text-sm font-medium">Biblioteca de Media</span>
                        </Link>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white transition-colors group">
                            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">article</span>
                            <span className="text-sm font-medium">Editor de Páginas</span>
                        </Link>
                    </ScrollReveal>
                    <ScrollReveal delay={0.25}>
                        <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white transition-colors group">
                            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">group</span>
                            <span className="text-sm font-medium">Corpo Docente</span>
                        </Link>
                    </ScrollReveal>
                    <ScrollReveal delay={0.3}>
                        <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white transition-colors group">
                            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">settings</span>
                            <span className="text-sm font-medium">Definições</span>
                        </Link>
                    </ScrollReveal>
                </nav>

                {/* Perfil do Utilizador */}
                <ScrollReveal delay={0.5} className="w-full">
                    <div className="border-t border-white/10 p-4">
                        <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3 hover:bg-white/10 transition-colors cursor-pointer">
                            <div
                                className="size-10 rounded-full bg-cover bg-center border-2 border-primary/30"
                                // style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAYps6y5ZVrhfZOHtqFRBkjO7m8kpMBKR_Z80BzUVjW40FUEpW3vjD8utclVWUdFcQQmWO1u8knuqM2mz7jKyDQRs1l9vUNY-Dtm94PVpLfo8X_xZJvt_mSCb8SwJQiByxToaSkmKTMtk_2sL5luzLmBsUXvRbNfDw_ARP9j5rZY0DJPH8pfmopBRNLgbAxKiHGRx5RkWg50LWJsmUok3695S4ryklCgHHiyZXAVxyZ9NnkP_ZRTdK-vZr8pKJjoVZsd1v_lhSymJbO')" }}
                            ></div>
                            <div className="flex flex-col min-w-0">
                                <p className="truncate text-sm font-semibold text-white">Carlos Mendes</p>
                                <p className="truncate text-xs text-slate-400">carlos.m@ugs.edu.ao</p>
                            </div>
                            <span className="material-symbols-outlined ml-auto text-slate-400 text-lg">logout</span>
                        </div>
                    </div>
                </ScrollReveal>
            </aside>

            {/* Conteúdo Principal */}
            <main className="flex flex-1 flex-col overflow-hidden relative">
                {/* Cabeçalho Superior */}
                <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">
                    <ScrollReveal delay={0.1} variant="fade-down">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Gestão de Media</h2>
                            <p className="text-sm text-slate-500">Gerir imagens e ficheiros do site principal do campus.</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2} variant="fade-down">
                        <div className="flex items-center gap-4">
                            <span className="text-xs font-medium text-slate-400">Última gravação: há 2 min</span>
                            <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary transition-all shadow-sm hover:scale-105 active:scale-95">
                                <span className="material-symbols-outlined text-lg">visibility</span>
                                Pré-visualização
                            </button>
                            <button className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white shadow-md shadow-primary/20 hover:bg-orange-600 transition-all hover:scale-105 active:scale-95">
                                <span className="material-symbols-outlined text-lg">save</span>
                                Guardar Alterações
                            </button>
                        </div>
                    </ScrollReveal>
                </header>

                {/* Área de Conteúdo com Scroll */}
                <div className="flex-1 overflow-y-auto bg-[#F9FAFB] p-8">
                    <div className="mx-auto max-w-6xl space-y-8 pb-12">

                        {/* Secção Hero da Homepage */}
                        <ScrollReveal delay={0.3} variant="fade-up">
                            <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <span className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary">
                                            <span className="material-symbols-outlined text-lg">web</span>
                                        </span>
                                        <h3 className="font-bold text-slate-800">Banner Principal da Homepage</h3>
                                    </div>
                                    <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">Publicado</span>
                                </div>
                                <div className="p-6 grid gap-6 lg:grid-cols-3">
                                    <div className="lg:col-span-2 space-y-4">
                                        {/* Contentor de Pré-visualização de Imagem */}
                                        <div className="group relative aspect-video w-full overflow-hidden rounded-lg bg-slate-100 border border-slate-200 shadow-inner">
                                            {/* <Image
                                                alt="Estudantes a estudar na biblioteca"
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGduuINzUN_fC9iMsEg9lxcRiAdB2yDCKdkVgkwCHsVCXoo7g2HcspI5NGzotjuMl3bk6NQmlYL93_jIR8TqFCvgujePQlRnq3CCnriXy0nSoGvd79Yh663p-wXvJOoPUD7O3E5cdf4uSdZC1YTqA3nIwwTlLulHa9FCvB-Ir_N8cc47wezx1z5r6A2sVgsyO7TQWnQ2VuGM3i4othx8ZtQs-buf08qw2NPgnG_iCNkaoe8xZvr4ZquHC71fYVftQViuD_f23ypJt0"
                                                fill                                            /> */}
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px]">
                                                <button className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg hover:text-primary hover:scale-105 transition-all">Alterar Imagem</button>
                                                <button className="size-9 rounded-lg bg-white/20 text-white backdrop-blur-md flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all">
                                                    <span className="material-symbols-outlined">crop</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-400 px-1">
                                            <span>Ficheiro: hero_biblioteca_v2.jpg</span>
                                            <span>1920 x 1080px • 1.2MB</span>
                                        </div>
                                    </div>

                                    {/* Controlos */}
                                    <div className="flex flex-col gap-5">
                                        <div className="group/drop rounded-lg border border-dashed border-slate-300 bg-slate-50/50 p-6 text-center hover:border-primary hover:bg-primary/5 transition-all cursor-pointer">
                                            <span className="material-symbols-outlined mx-auto mb-2 text-3xl text-slate-400 group-hover/drop:scale-110 group-hover/drop:text-primary transition-all">cloud_upload</span>
                                            <p className="text-sm font-medium text-slate-900">Arraste e solte para substituir</p>
                                            <p className="text-xs text-slate-500 mt-1">PNG, JPG, WEBP até 5MB</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Texto Alt (Acessibilidade)</label>
                                            <textarea
                                                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 focus:ring-2 focus:ring-primary focus:border-primary h-24 resize-none transition-all"
                                                placeholder="Descreva a imagem para leitores de ecrã..."
                                                defaultValue="Estudantes a colaborar no salão principal da biblioteca universitária com iluminação natural."
                                            ></textarea>
                                        </div>
                                        <button className="mt-auto w-full rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-primary hover:border-primary transition-all">
                                            Reverter para Anterior
                                        </button>
                                    </div>
                                </div>
                            </section>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                            {/* Galeria do Campus */}
                            <ScrollReveal delay={0.4} variant="fade-right">
                                <section className="bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col h-full hover:shadow-md transition-shadow">
                                    <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <span className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary">
                                                <span className="material-symbols-outlined text-lg">gallery_thumbnail</span>
                                            </span>
                                            <h3 className="font-bold text-slate-800">Galeria do Campus</h3>
                                        </div>
                                        <button className="text-sm font-medium text-primary hover:text-primary-hover flex items-center gap-1 hover:scale-105 transition-transform">
                                            <span className="material-symbols-outlined text-lg">add</span> Adicionar Novo
                                        </button>
                                    </div>
                                    <div className="p-6">
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                            {/* Item da Galeria 1 */}
                                            <div className="group relative aspect-square rounded-lg overflow-hidden bg-slate-100 cursor-pointer shadow-sm">
                                                {/* <Image
                                                    alt="Exterior do edifício da universidade"
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcX0GS8ZmXPTwnD49P20N7QQzka2EMpzJ3K4Cm5QvmPTGDaKjHGXc13SbccKmCWIZsNRWz0pbWdJa4s2v_DLM6ls9KriR6hdOOO2kpRKCRDr7o3J1CZHPP5iOOk0aczLreeIumQzzmtiPRpJZCoNobo0ZlKPxkcQviP_-oVni7rPds_5LdTfZ6MvZGQ6lBvqrZ9kGezzTHQjuC8cNrvWeEtXgMs2BaWNpJ3VEENiwrG-qSbNFHwgr1sjhet_NBTJbsogBbz3zAykqx"
                                                    fill                                                /> */}
                                                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                                                    <button className="size-8 rounded bg-white text-slate-700 shadow-lg flex items-center justify-center hover:text-primary hover:scale-110 transition-all">
                                                        <span className="material-symbols-outlined text-sm">edit</span>
                                                    </button>
                                                    <button className="size-8 rounded bg-white text-red-500 shadow-lg flex items-center justify-center hover:bg-red-50 hover:scale-110 transition-all">
                                                        <span className="material-symbols-outlined text-sm">delete</span>
                                                    </button>
                                                </div>
                                            </div>
                                            {/* Repetir para os outros itens se necessário, mas vou focar na estrutura de animação */}
                                            {/* Item da Galeria 2 */}
                                            <div className="group relative aspect-square rounded-lg overflow-hidden bg-slate-100 cursor-pointer shadow-sm">
                                                {/* <Image
                                                    alt="Cerimónia de graduação"
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQc5xrajnyZo2YRRDP8eJKg-9aFKTZrK12AqVyfr5NQencPHn_YnXKtKnAScUu6tJiqoRqC83JrqO2PaPURGvcdItZcGE7UIF3vhP2WXL3dIVtpAX3n3LYVERA5RUuclNsj8Quy5WevdivjE0m20iGx4LtJ8tkuUbbk1aInzxXB4P1rAE7kL3lwMWSxouoX4RjHcCpR-5uxMOBi-sACc9R93UTAwYRuA9L0OgjWw8SQ-nBHdJKZ4R0aBHm4Hqwqs8tYtxXSOLDxMPe"
                                                    fill                                                /> */}
                                                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                                                    <button className="size-8 rounded bg-white text-slate-700 shadow-lg flex items-center justify-center hover:text-primary hover:scale-110 transition-all">
                                                        <span className="material-symbols-outlined text-sm">edit</span>
                                                    </button>
                                                    <button className="size-8 rounded bg-white text-red-500 shadow-lg flex items-center justify-center hover:bg-red-50 hover:scale-110 transition-all">
                                                        <span className="material-symbols-outlined text-sm">delete</span>
                                                    </button>
                                                </div>
                                            </div>
                                            {/* Item da Galeria 3 */}
                                            <div className="group relative aspect-square rounded-lg overflow-hidden bg-slate-100 cursor-pointer shadow-sm">
                                                {/* <Image
                                                    alt="Laboratório de ciências"
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDazER5c5_ECksQx-f55sLa9mJkyH6nIKj7TRxMo9hzriJwvMsw4fVfqSsF4PuiVwcM5UZvKlvL1zWzwhPzyFDz9wTBHQHy7J2Dgi_xoGBeY0Xl1Gnc-HRFlTUFA1xryXKv5JbiVjnIj6NtEwlypIsXlDeIKMib0N-H-FGdGTKfmVXRfejbupII6ggMWxOIS7RJE42n1j9IO_Odg91kwrZjjvgZa0WcTjaEAznIg-BIf3POSqmKtyzglsdx3kIO9vgpKcUNmW-vEoNI"
                                                    fill                                                /> */}
                                                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                                                    <button className="size-8 rounded bg-white text-slate-700 shadow-lg flex items-center justify-center hover:text-primary hover:scale-110 transition-all">
                                                        <span className="material-symbols-outlined text-sm">edit</span>
                                                    </button>
                                                    <button className="size-8 rounded bg-white text-red-500 shadow-lg flex items-center justify-center hover:bg-red-50 hover:scale-110 transition-all">
                                                        <span className="material-symbols-outlined text-sm">delete</span>
                                                    </button>
                                                </div>
                                            </div>
                                            {/* Placeholder para Adicionar Novo */}
                                            <div className="aspect-square rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center text-slate-400 hover:border-primary hover:text-primary hover:bg-primary/5 cursor-pointer transition-all hover:scale-105 active:scale-95">
                                                <span className="material-symbols-outlined text-3xl">add_photo_alternate</span>
                                                <span className="text-xs font-bold mt-1 uppercase tracking-tighter">Carregar</span>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </ScrollReveal>

                            {/* Miniaturas de Notícias */}
                            <ScrollReveal delay={0.5} variant="fade-left">
                                <section className="bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col h-full hover:shadow-md transition-shadow">
                                    <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <span className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary">
                                                <span className="material-symbols-outlined text-lg">newspaper</span>
                                            </span>
                                            <h3 className="font-bold text-slate-800">Notícias e Eventos</h3>
                                        </div>
                                        <button className="text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">Ver Todos</button>
                                    </div>
                                    <div className="p-0">
                                        <div className="divide-y divide-slate-100">
                                            {/* Item de Notícia 1 */}
                                            <div className="flex gap-4 p-4 hover:bg-slate-50 transition-all group/news cursor-pointer">
                                                <div className="relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-md bg-slate-200 shadow-sm">
                                                    {/* <Image
                                                        alt="Multidão no seminário"
                                                        className="object-cover transition-transform duration-500 group-hover/news:scale-110"
                                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuClDsvxsSruRBTTYQlDaVg83NZXqwWY8qVFxhK-X9JDsGm4vyYzP2623SFbm8NslaW6NhW7OYMqoRwtBMqesu-3nK18RGF8UwetfyAhk6wY2KSUZTAQlIf3Vsnj27I8FHPLX1sy85Y6C9ZdmfhrS8kGXOJHOKdShL1trxucv77Sd5zjNMQvTVV4lrIKIqn8jv5hkYhgNxe22ScIRcxEPKT8EqaFyRgHAh7z31HARz6B9VpYwIrOU9DyDB-yGuxHr9kUicSDysWcNYPr"
                                                        fill                                                    /> */}
                                                    <div className="absolute inset-0 bg-black/0 hover:bg-black/20 flex items-center justify-center transition-colors">
                                                        <span className="material-symbols-outlined text-white opacity-0 group-hover/news:opacity-100 scale-75 group-hover/news:scale-100 transition-all">edit</span>
                                                    </div>
                                                </div>
                                                <div className="flex-1 min-w-0 flex flex-col justify-center">
                                                    <h4 className="text-sm font-bold text-slate-800 truncate group-hover/news:text-primary transition-colors">Simpósio Anual de Tecnologia 2023</h4>
                                                    <p className="text-[10px] text-slate-500 mt-1 truncate uppercase font-medium tracking-tighter">Actualizado por Sarah J. • há 2 dias</p>
                                                </div>
                                                <div className="flex items-center">
                                                    <button className="p-2 text-slate-400 hover:text-primary transition-all hover:scale-110" title="Editar Legenda Alt">
                                                        <span className="material-symbols-outlined text-xl">closed_caption</span>
                                                    </button>
                                                </div>
                                            </div>
                                            {/* Item de Notícia 2 */}
                                            <div className="flex gap-4 p-4 hover:bg-slate-50 transition-all group/news cursor-pointer">
                                                <div className="relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-md bg-slate-200 shadow-sm">
                                                    {/* <Image
                                                        alt="Estudante a ler"
                                                        className="object-cover transition-transform duration-500 group-hover/news:scale-110"
                                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi6hrg5wkMTX3H2gRTxIakQL67fo7eK0NICMt_oHILVYxFS3Y7_c37f7MKtIGHCj6AXfC_pPTqehZBxUvFnXsdpOcbhOIh6z1t5VfAo-6VzwNvaE4Fyxf0r9Ghz2UCqiRSjudOMClq_4Cwa7Nt7r_aT9-MrWJTGY1SzgVmdLNcoL0tIXz8x9Jtg23QZWj23GRMsm0isYGE8vsEbjzTIpsDzKokiw8B-j03Rr_QRYZE7305zugNlaaW7oJbVeyu4uOOC2pquvrHltSQ"
                                                        fill                                                    /> */}
                                                    <div className="absolute inset-0 bg-black/0 hover:bg-black/20 flex items-center justify-center transition-colors">
                                                        <span className="material-symbols-outlined text-white opacity-0 group-hover/news:opacity-100 scale-75 group-hover/news:scale-100 transition-all">edit</span>
                                                    </div>
                                                </div>
                                                <div className="flex-1 min-w-0 flex flex-col justify-center">
                                                    <h4 className="text-sm font-bold text-slate-800 truncate group-hover/news:text-primary transition-colors">Abertura da Nova Ala da Biblioteca</h4>
                                                    <p className="text-[10px] text-slate-500 mt-1 truncate uppercase font-medium tracking-tighter">Actualizado por Admin • há 5 horas</p>
                                                </div>
                                                <div className="flex items-center">
                                                    <button className="p-2 text-slate-400 hover:text-primary transition-all hover:scale-110" title="Editar Legenda Alt">
                                                        <span className="material-symbols-outlined text-xl">closed_caption</span>
                                                    </button>
                                                </div>
                                            </div>
                                            {/* Item de Notícia 3 */}
                                            <div className="flex gap-4 p-4 hover:bg-slate-50 transition-all group/news cursor-pointer">
                                                <div className="relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-md bg-slate-200 shadow-sm">
                                                    {/* <Image
                                                        alt="Estudantes a conversar"
                                                        className="object-cover transition-transform duration-500 group-hover/news:scale-110"
                                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3YPvxkU4s7sLyxCfQfO9djk-As91t5E4AnyIXQcvMtWztLk-VT-hfAYU38cV1Z91kHuLEgLEG-7k6sGcVJhbLwhtWAgRMDkVtq01eUZk83GN8LlqxH9dGMliSxQYPs3gDS5If8bpYdOWuv8P0AmkjOlhxDcy0fXJDLgrDWHoCjdwqs1KIcf8PUH2ooocHBf4TBz1UZicSdyd1tmlaKaJunUE3uTyu8rgTchi2mHrYRCKcgDa1j8Yhc0x4Mj0jfm6MK_gcxg6m6vd2"
                                                        fill                                                    /> */}
                                                    <div className="absolute inset-0 bg-black/0 hover:bg-black/20 flex items-center justify-center transition-colors">
                                                        <span className="material-symbols-outlined text-white opacity-0 group-hover/news:opacity-100 scale-75 group-hover/news:scale-100 transition-all">edit</span>
                                                    </div>
                                                </div>
                                                <div className="flex-1 min-w-0 flex flex-col justify-center">
                                                    <h4 className="text-sm font-bold text-slate-800 truncate group-hover/news:text-primary transition-colors">Programa Internacional de Intercâmbio</h4>
                                                    <p className="text-[10px] text-slate-500 mt-1 truncate uppercase font-medium tracking-tighter">Actualizado por Carlos M. • Agora mesmo</p>
                                                </div>
                                                <div className="flex items-center">
                                                    <button className="p-2 text-slate-400 hover:text-primary transition-all hover:scale-110" title="Editar Legenda Alt">
                                                        <span className="material-symbols-outlined text-xl">closed_caption</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
