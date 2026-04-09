'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FileText, Download, Mail, Phone, MapPin, Shield, Leaf } from 'lucide-react'

export default function Footer() {
    return (
        <footer id="contact" className="relative bg-white pt-24 pb-16 px-8 overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-dark/5 to-transparent" />

            {/* TECHNICAL DOCUMENTATION */}
            <div className="max-w-7xl mx-auto mb-24">
                <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-16">
                    <div className="space-y-4 max-w-2xl text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-black uppercase text-brand-dark italic tracking-tighter">
                            Apoio <span className="text-brand-green">Técnico</span>
                        </h2>
                        <p className="text-brand-dark/50 font-medium text-lg md:text-xl leading-relaxed">
                            Fichas técnicas e FISPQ para conformidade e segurança.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <button className="group bg-brand-light border border-brand-dark/5 rounded-[32px] p-8 flex items-center justify-between hover:bg-white transition-all">
                        <div className="flex items-center gap-6 text-left">
                            <div>
                                <span className="block text-brand-dark font-black uppercase tracking-widest text-sm mb-1">Fichas Técnicas</span>
                                <span className="text-[10px] text-brand-dark/30 font-bold uppercase tracking-[0.2em]">Acervo Digital</span>
                            </div>
                        </div>
                        <div className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center text-brand-dark group-hover:bg-brand-green group-hover:text-white transition-all">
                            →
                        </div>
                    </button>

                    <button className="group bg-brand-light border border-brand-dark/5 rounded-[32px] p-8 flex items-center justify-between hover:bg-white transition-all">
                        <div className="flex items-center gap-6 text-left">
                            <div>
                                <span className="block text-brand-dark font-black uppercase tracking-widest text-sm mb-1">FISPQ</span>
                                <span className="text-[10px] text-brand-dark/30 font-bold uppercase tracking-[0.2em]">Segurança Química</span>
                            </div>
                        </div>
                        <div className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center text-brand-dark group-hover:bg-brand-green group-hover:text-white transition-all">
                            →
                        </div>
                    </button>
                </div>
            </div>

            {/* FINAL CONTACT PANEL */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-brand-light/50 border border-brand-dark/5 rounded-[64px] p-10 md:p-20 relative z-10 overflow-hidden shadow-2xl shadow-brand-dark/5 mb-16">
                {/* Visual Branding */}
                <div className="flex flex-col justify-center items-start lg:border-r lg:border-brand-dark/5 lg:pr-12">
                    <div className="relative w-48 md:w-64 aspect-square mb-12">
                        <Image
                            src="/images/brux-logo-complete.png"
                            alt="BRUX SOLUTIONS"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Contact Links */}
                <div className="flex flex-col justify-between items-start space-y-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10 w-full">
                        <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.open('mailto:contato@bruxsolucoes.com.br')}>
                            <div className="w-14 h-14 rounded-2xl bg-white shadow-lg border border-brand-dark/5 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all">
                                <Mail size={24} />
                            </div>
                            <div>
                                <span className="block text-[9px] font-black text-brand-dark/30 uppercase tracking-[0.4em] mb-1 group-hover:text-brand-green transition-colors">E-mail</span>
                                <span className="text-brand-dark text-lg font-bold tracking-tight">contato@bruxsolucoes.com.br</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.open('https://wa.me/551127768000')}>
                            <div className="w-14 h-14 rounded-2xl bg-white shadow-lg border border-brand-dark/5 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all">
                                <Phone size={24} />
                            </div>
                            <div>
                                <span className="block text-[9px] font-black text-brand-dark/30 uppercase tracking-[0.4em] mb-1 group-hover:text-brand-green transition-colors">Telefone</span>
                                <span className="text-brand-dark text-lg font-bold tracking-tight">(11) 2776-8000</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group">
                            <div className="w-14 h-14 rounded-2xl bg-white shadow-lg border border-brand-dark/5 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <span className="block text-[9px] font-black text-brand-dark/30 uppercase tracking-[0.4em] mb-1 group-hover:text-brand-green transition-colors">Localização</span>
                                <span className="text-brand-dark text-lg font-bold tracking-tight">São Paulo – SP</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* REAL-TIME MAP AREA */}
            <div className="max-w-7xl mx-auto mb-24 relative group">
                <div className="relative h-[400px] md:h-[500px] rounded-[48px] overflow-hidden border border-brand-dark/5 bg-brand-light shadow-2xl">
                    <iframe
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.4988!2d-46.6669!3d-23.6558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a9c00000000%3A0x0000000000000000!2sRua%20Maria%20da%20Gloria%2C%2067%20-%20Jardim%20Santa%20Helena%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1712217600000!5m2!1spt-BR!2sbr"
                        className="grayscale contrast-[1.1] brightness-[1.05] grayscale-[0.8] hover:grayscale-0 transition-all duration-700"
                    />
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-16 border-t border-brand-dark/5">
                {/* COPYRIGHT & LEGAL */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-12 border-t border-brand-dark/5">
                    <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-brand-dark font-black uppercase tracking-[0.4em] mb-1">
                                BRUX ® SOLUÇÕES EM LIMPEZA PROFISSIONAL
                            </span>
                            <span className="text-[9px] text-brand-dark/40 font-medium tracking-wide">
                                Registro INPI pendente. Direitos reservados © 2024.
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-10 text-[9px] font-black uppercase tracking-widest text-brand-dark/40">
                        <a href="#" className="hover:text-brand-green transition-colors">Privacidade</a>
                        <a href="#" className="hover:text-brand-green transition-colors">Termos</a>
                        <a href="#" className="hover:text-brand-green transition-colors">Compliance</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
