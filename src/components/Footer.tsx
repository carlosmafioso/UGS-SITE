import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-institutional text-white py-10 sm:py-16 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-16">
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
                            A Universidade Gregório Semedo é uma instituição de ensino superior privada em Angola, comprometida com o rigor académico e o desenvolvimento social.
                        </p>
                        <div className="flex gap-4">
                            <a className="size-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                                <span className="material-symbols-outlined text-sm">public</span>
                            </a>
                            <a className="size-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                                <span className="material-symbols-outlined text-sm">share</span>
                            </a>
                            <a className="size-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                                <span className="material-symbols-outlined text-sm">play_circle</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6">Universidade</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><Link className="hover:text-primary transition-colors" href="/sobre">Sobre a UGS</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="/sobre">Reitoria</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="/sobre">Acreditação</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="/sobre">Carreiras na UGS</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="/sobre">Notícias Institucionais</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6">Recursos para Estudantes</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><Link className="hover:text-primary transition-colors" href="#">Catálogo da Biblioteca</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">Bem-estar do Estudante</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">Rede de Alumni</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="#">Calendário Académico</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6">Contacte-nos</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-xl">location_on</span>
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
                <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
                    <p className="text-xs text-slate-500 text-center md:text-left">© 2024 Universidade Gregório Semedo. Todos os direitos reservados.</p>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs text-slate-500">
                        <Link className="hover:text-white transition-colors" href="#">Política de Privacidade</Link>
                        <Link className="hover:text-white transition-colors" href="#">Termos de Serviço</Link>
                        <Link className="hover:text-white transition-colors" href="#">Política de Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
