'use client'

import { motion } from 'framer-motion'
import { Send, Building2, User, Mail, Phone, MessageSquare, Briefcase } from 'lucide-react'

export default function ContactForm() {
    return (
        <section id="contact-form" className="relative py-40 bg-[#060807] px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center space-y-8 mb-24">
                    <h2 className="text-impact !text-4xl md:!text-7xl">Solicitar <span className="text-neon">Orçamento</span></h2>
                    <p className="text-white/40 font-black uppercase tracking-[0.4em] text-xs">
                        Atendimento imediato para demandas corporativas
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white/[0.02] border border-white/10 rounded-[48px] p-10 md:p-16 space-y-12 shadow-2xl"
                >
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Nome */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-widest text-brand-green/60 ml-4">Nome Completo</label>
                            <div className="relative">
                                <User size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" />
                                <input
                                    type="text"
                                    placeholder="Seu nome"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-white placeholder:text-white/10 focus:border-brand-green/50 focus:bg-brand-green/[0.02] outline-none transition-all"
                                />
                            </div>
                        </div>

                        {/* Empresa */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-widest text-brand-green/60 ml-4">Empresa / Responsável</label>
                            <div className="relative">
                                <Building2 size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" />
                                <input
                                    type="text"
                                    placeholder="Nome da empresa"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-white placeholder:text-white/10 focus:border-brand-green/50 focus:bg-brand-green/[0.02] outline-none transition-all"
                                />
                            </div>
                        </div>

                        {/* Segmento */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-widest text-brand-green/60 ml-4">Segmento de Atuação</label>
                            <div className="relative">
                                <Briefcase size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" />
                                <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-white appearance-none focus:border-brand-green/50 focus:bg-brand-green/[0.02] outline-none transition-all">
                                    <option className="bg-[#0a0a0a]">Selecione um segmento</option>
                                    <option className="bg-[#0a0a0a]">Condomínio</option>
                                    <option className="bg-[#0a0a0a]">Indústria</option>
                                    <option className="bg-[#0a0a0a]">Hotelaria</option>
                                    <option className="bg-[#0a0a0a]">Comércio</option>
                                    <option className="bg-[#0a0a0a]">Restaurante</option>
                                </select>
                            </div>
                        </div>

                        {/* Telefone / WhatsApp */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-widest text-brand-green/60 ml-4">Telefone / WhatsApp</label>
                            <div className="relative">
                                <Phone size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" />
                                <input
                                    type="text"
                                    placeholder="(11) 00000-0000"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-white placeholder:text-white/10 focus:border-brand-green/50 focus:bg-brand-green/[0.02] outline-none transition-all"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="md:col-span-2 space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-widest text-brand-green/60 ml-4">E-mail Corporativo</label>
                            <div className="relative">
                                <Mail size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" />
                                <input
                                    type="email"
                                    placeholder="seu@email.com.br"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-white placeholder:text-white/10 focus:border-brand-green/50 focus:bg-brand-green/[0.02] outline-none transition-all"
                                />
                            </div>
                        </div>

                        {/* Mensagem */}
                        <div className="md:col-span-2 space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-widest text-brand-green/60 ml-4">Mensagem / Demanda</label>
                            <div className="relative">
                                <MessageSquare size={18} className="absolute left-6 top-20 -translate-y-1/2 text-white/20" />
                                <textarea
                                    rows={5}
                                    placeholder="Como podemos ajudar sua operação?"
                                    className="w-full bg-white/5 border border-white/10 rounded-3xl py-10 pl-14 pr-6 text-white placeholder:text-white/10 focus:border-brand-green/50 focus:bg-brand-green/[0.02] outline-none transition-all resize-none"
                                />
                            </div>
                        </div>

                        <div className="md:col-span-2 flex flex-col gap-8 pt-6">
                            <div className="flex items-start gap-4 p-5 bg-white/[0.03] border border-white/5 rounded-2xl">
                                <div className="w-5 h-5 rounded border border-brand-green/40 mt-1 flex-shrink-0" />
                                <p className="text-[10px] text-white/40 font-medium leading-relaxed">
                                    Ao enviar este formulário, você concorda com nossa <span className="text-white">Política de Privacidade</span> e autoriza o processamento de seus dados para fins de orçamento corporativo conforme a <span className="text-white">LGPD</span>.
                                </p>
                            </div>

                            <button className="btn-stitch btn-stitch-primary w-full py-8 text-xl flex items-center justify-center gap-4">
                                Enviar Solicitação
                                <Send size={20} />
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    )
}
