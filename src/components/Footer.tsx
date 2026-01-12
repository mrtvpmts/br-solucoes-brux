'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FileText, Download, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
    return (
        <footer id="contact" className="relative bg-[#050505] pt-40 pb-16 px-8 overflow-hidden">

            {/* TECHNICAL DOCUMENTATION (NEW) */}
            <div className="max-w-7xl mx-auto mb-40 border-t border-white/5 pt-32">
                <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
                    <div className="space-y-6 max-w-2xl">
                        <h2 className="text-impact !text-4xl md:!text-6xl">Apoio <span className="text-neon">Técnico</span></h2>
                        <p className="text-white/40 font-medium text-lg leading-relaxed">
                            Acesse toda a documentação oficial, fichas técnicas e FISPQ de nossos produtos para garantir a conformidade e segurança de sua operação.
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <button className="btn-stitch gap-4 px-10">
                            <FileText size={20} className="text-brand-green" />
                            Docs Técnicos
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex items-center justify-between group hover:border-brand-green/40 transition-all">
                        <div className="flex items-center gap-6">
                            <div className="p-4 bg-white/5 rounded-2xl text-brand-green">
                                <Download size={24} />
                            </div>
                            <div>
                                <span className="block text-white font-black uppercase tracking-widest text-xs">Fichas Técnicas</span>
                                <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Download PDF (Geral)</span>
                            </div>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-brand-green group-hover:text-black transition-all">
                            →
                        </div>
                    </div>
                    <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex items-center justify-between group hover:border-brand-green/40 transition-all">
                        <div className="flex items-center gap-6">
                            <div className="p-4 bg-white/5 rounded-2xl text-brand-green">
                                <Download size={24} />
                            </div>
                            <div>
                                <span className="block text-white font-black uppercase tracking-widest text-xs">FISPQ</span>
                                <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Segurança Química</span>
                            </div>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-brand-green group-hover:text-black transition-all">
                            →
                        </div>
                    </div>
                </div>
            </div>

            {/* FINAL CONTACT PANEL */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white/[0.03] border border-white/10 rounded-[64px] p-10 md:p-20 relative z-10 overflow-hidden shadow-2xl">
                <div className="space-y-12">
                    <div className="flex items-center gap-1 group relative">
                        <div className="relative w-72 h-32 -ml-4">
                            <Image
                                src="/textures/logo-brux.png"
                                alt="BRUX SOLUTIONS"
                                fill
                                className="brightness-125 object-contain"
                            />
                        </div>
                    </div>

                    <div className="space-y-10">
                        <div className="flex items-center gap-6 group">
                            <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green">
                                <Mail size={24} />
                            </div>
                            <div className="space-y-1">
                                <span className="block text-[8px] font-black text-brand-green uppercase tracking-[0.4em]">E-mail Institucional</span>
                                <span className="text-white text-xl font-medium tracking-tight">contato@bruxsolucoes.com.br</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group">
                            <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green">
                                <Phone size={24} />
                            </div>
                            <div className="space-y-1">
                                <span className="block text-[8px] font-black text-brand-green uppercase tracking-[0.4em]">Atendimento e WhatsApp</span>
                                <span className="text-white text-xl font-medium tracking-tight">(11) 2776-8000</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group">
                            <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green">
                                <MapPin size={24} />
                            </div>
                            <div className="space-y-1">
                                <span className="block text-[8px] font-black text-brand-green uppercase tracking-[0.4em]">Sede Administrativa</span>
                                <span className="text-white text-xl font-medium tracking-tight">São Paulo – SP</span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-10 flex flex-col gap-4">
                        <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em]">Dados Jurídicos</div>
                        <div className="text-white/60 font-black tracking-widest text-sm italic">CNPJ: 36.911.009/0001-00</div>
                    </div>
                </div>

                {/* MAP AREA */}
                <div className="h-[500px] lg:h-full min-h-[500px] rounded-[48px] overflow-hidden border border-white/10 shadow-2xl grayscale saturate-[0.2] brightness-75">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117056.236195576!2d-46.74411135!3d-23.53377315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzM3LjkiUyA0NsKwMzknMTIuMyJX!5e0!3m2!1spt-BR!2sbr!4v1625000000000!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'invert(100%) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-24 border-t border-white/5 mt-32 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] text-white/20 font-black uppercase tracking-[0.6em]">
                <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                    <div className="flex items-center gap-4">
                        <span className="text-brand-green/30">●</span>
                        <span>BRUX ® SOLUÇÕES EM LIMPEZA PROFISSIONAL</span>
                    </div>
                    <span className="text-[8px] opacity-40 lowercase tracking-[0.2em] md:ml-4">
                        BRUX ® é uma marca registrada em processo perante o INPI. Todos os direitos reservados.
                    </span>
                </div>
                <div className="flex gap-12">
                    <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                    <a href="#" className="hover:text-white transition-colors">Privacidade (LGPD)</a>
                </div>
            </div>
        </footer>
    )
}
