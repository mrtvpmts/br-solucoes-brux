'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Shield, Leaf, Scale, FileText, CheckCircle2, X, Zap, ChevronRight } from 'lucide-react'

export default function Government() {
    const [selectedAuthority, setSelectedAuthority] = useState<any>(null)

    const authorityItems = [
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Conformidade Legal",
            desc: "Produtos notificados e registrados na ANVISA",
            details: {
                subtitle: "Segurança Jurídica e Sanitária",
                longDesc: "Todos os produtos BRUX são rigorosamente notificados e registrados na ANVISA, garantindo total conformidade com as normas sanitárias vigentes. Nossa documentação técnica é auditável e atende a todos os requisitos de editais públicos.",
                points: ["Registro ANVISA para todos os lotes", "Laudos técnicos detalhados e FISPQ", "Conformidade com RDC 59/2000", "Responsabilidade Técnica Química Ativa"],
                badge: "CERTIFICAÇÃO: GRAU 1 E 2"
            }
        },
        {
            icon: <Leaf className="w-8 h-8" />,
            title: "Química Verde",
            desc: "Fórmulas biodegradáveis e ecoeficientes",
            details: {
                subtitle: "Sustentabilidade com Alta Performance",
                longDesc: "Compromisso inegociável com o meio ambiente. Desenvolvemos fórmulas de alta performance que minimizam o impacto ambiental sem sacrificar o poder de limpeza, alinhado com as diretrizes ESG.",
                points: ["Tensoativos 100% Biodegradáveis", "Fórmulas Isentas de Fosfatos", "Embalagens 100% Recicláveis", "Processo produtivo com reuso de água"],
                badge: "SELO: ECO-FRIENDLY"
            }
        },
        {
            icon: <Scale className="w-8 h-8" />,
            title: "Capacidade de Escala",
            desc: "Estrutura preparada para suprimento em larga escala",
            details: {
                subtitle: "Logística e Produção Industrial",
                longDesc: "Infraestrutura robusta preparada para atender grandes demandas governamentais e industriais com agilidade e precisão. Garantimos o abastecimento contínuo mesmo em picos de demanda.",
                points: ["Capacidade Produtiva: +50.000L/dia", "Frota própria e homologada", "Estoque regulador estratégico", "Logística reversa de embalagens"],
                badge: "SCALE: INDUSTRIAL"
            }
        }
    ]

    return (
        <section id="government" className="relative py-24 md:py-40 overflow-hidden">
            {/* DARK INDUSTRIAL BACKGROUND */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#040504] via-[#0a0d0b] to-[#050605]" />

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(57,255,20,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }} />
            </div>

            {/* Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(57,255,20,0.08)_0%,transparent_60%)]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header with Impact */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-brand-green" />
                        <span className="text-brand-green text-xs font-black uppercase tracking-[0.5em]">
                            Setor Público e Indústria
                        </span>
                        <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-brand-green" />
                    </div>

                    <h2 className="text-5xl md:text-8xl font-black uppercase italic text-white tracking-tighter leading-[0.9] mb-6">
                        Autoridade<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-[#7FFF00] to-brand-green drop-shadow-[0_0_30px_rgba(57,255,20,0.5)]">
                            Governamental
                        </span>
                    </h2>

                    <div className="h-1 w-32 bg-gradient-to-r from-transparent via-brand-green to-transparent mx-auto rounded-full shadow-[0_0_20px_rgba(57,255,20,0.5)]" />
                </motion.div>

                {/* Content Grid - Asymmetric Layout */}
                <div className="grid lg:grid-cols-5 gap-12 items-start">
                    {/* Left - Text Block */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-2 space-y-16"
                    >
                        {/* FRESH IMPLEMENTATION - MASSIVE TYPOGRAPHY */}
                        <div className="space-y-12">
                            <h3 className="text-white text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.9] drop-shadow-2xl">
                                A <span className="text-brand-green">BRUX</span> É PARCEIRA ESTRATÉGICA DE ÓRGÃOS PÚBLICOS E AUTARQUIAS.
                            </h3>

                            <h3 className="text-white/90 text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-[0.9]">
                                OFERECEMOS SOLUÇÕES QUÍMICAS DE ALTO RENDIMENTO QUE ATENDEM RIGOROSAMENTE AOS EDITAIS E NORMAS DE SEGURANÇA VIGENTES.
                            </h3>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-8 pt-4 border-t border-white/10">
                            <div className="text-center">
                                <div className="text-5xl md:text-7xl font-black text-brand-green mb-2">100%</div>
                                <div className="text-sm md:text-base text-white/40 uppercase tracking-[0.2em] font-bold">Conformidade</div>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl md:text-7xl font-black text-brand-green mb-2">31+</div>
                                <div className="text-sm md:text-base text-white/40 uppercase tracking-[0.2em] font-bold">Produtos</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Authority Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-3 space-y-5"
                    >
                        {authorityItems.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + i * 0.1 }}
                                onClick={() => setSelectedAuthority(item)}
                                className="group relative bg-gradient-to-r from-white/[0.03] to-transparent border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-brand-green/40 transition-all duration-500 cursor-pointer"
                            >
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative flex items-center gap-6">
                                    <div className="p-4 bg-brand-green/10 rounded-2xl text-brand-green group-hover:bg-brand-green group-hover:text-black transition-all duration-500 shadow-[0_0_30px_rgba(57,255,20,0.2)]">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-white font-black text-xl uppercase tracking-wide mb-2 group-hover:text-brand-green transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/50 text-sm">{item.desc}</p>
                                    </div>
                                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:border-brand-green group-hover:bg-brand-green group-hover:text-black transition-all">
                                        <ChevronRight size={16} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* CTA Button - Premium Style */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 text-center"
                >
                    <button
                        onClick={() => window.open('https://wa.me/551127768000?text=Olá, gostaria de solicitar a documentação técnica e FISPQ dos produtos BRUX.', '_blank')}
                        className="relative group inline-flex items-center gap-4 bg-gradient-to-r from-brand-green/20 to-brand-green/10 hover:from-brand-green hover:to-[#32e012] border border-brand-green/30 hover:border-brand-green rounded-2xl px-12 py-6 text-white hover:text-black font-black uppercase tracking-wider text-sm transition-all duration-500 shadow-[0_0_40px_rgba(57,255,20,0.2)] hover:shadow-[0_0_60px_rgba(57,255,20,0.5)]"
                    >
                        <FileText className="w-6 h-6" />
                        Solicitar Documentação Técnica e FISPQ
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-brand-green rounded-full animate-ping" />
                    </button>
                </motion.div>
            </div>

            {/* AUTHORITY DETAIL MODAL */}
            <AnimatePresence>
                {selectedAuthority && (
                    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedAuthority(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
                        />

                        <motion.div
                            layoutId={`authority-${selectedAuthority.title}`}
                            className="relative w-full max-w-3xl bg-[#0b0f0d] border border-white/10 rounded-[40px] p-8 md:p-12 overflow-hidden shadow-[0_0_100px_rgba(57,255,20,0.1)]"
                        >
                            {/* Background Effects */}
                            <div className="absolute inset-0 z-0 opacity-20">
                                <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-brand-green/20 blur-[100px] rounded-full" />
                                <div className="absolute top-0 right-0 p-12 opacity-10 scale-150 text-brand-green">
                                    {selectedAuthority.icon}
                                </div>
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Header */}
                                <div className="flex justify-between items-start mb-10">
                                    <div className="flex gap-6 items-center">
                                        <div className="w-20 h-20 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green border border-brand-green/20 shadow-[0_0_20px_rgba(57,255,20,0.2)]">
                                            {selectedAuthority.icon}
                                        </div>
                                        <div>
                                            <span className="text-brand-green font-black uppercase tracking-[0.3em] text-[10px] mb-2 block">
                                                {selectedAuthority.details.subtitle}
                                            </span>
                                            <h3 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tighter italic leading-none">
                                                {selectedAuthority.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedAuthority(null)}
                                        className="p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 text-white/50 hover:text-white transition-all"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="space-y-8">
                                    <p className="text-white/80 text-xl font-medium leading-relaxed border-l-4 border-brand-green/50 pl-6">
                                        {selectedAuthority.details.longDesc}
                                    </p>

                                    <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-8">
                                        <h4 className="flex items-center gap-3 text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                                            <Zap size={14} className="text-brand-green" /> Pontos Chave
                                        </h4>
                                        <ul className="grid md:grid-cols-2 gap-4">
                                            {selectedAuthority.details.points.map((point: string, idx: number) => (
                                                <li key={idx} className="flex items-center gap-4">
                                                    <div className="min-w-[6px] h-1.5 rounded-full bg-brand-green shadow-[0_0_10px_#39FF14]" />
                                                    <span className="text-white font-bold text-sm tracking-tight">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="mt-10 pt-8 border-t border-white/5 flex justify-between items-center">
                                    <div className="flex items-center gap-3 opacity-50">
                                        <CheckCircle2 size={16} className="text-brand-green" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-white">
                                            Status: <span className="text-brand-green">{selectedAuthority.details.badge}</span>
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => window.open('https://wa.me/551127768000?text=Olá, preciso de mais informações sobre: ' + selectedAuthority.title, '_blank')}
                                        className="text-brand-green hover:text-white text-xs font-black uppercase tracking-widest transition-colors flex items-center gap-2 group"
                                    >
                                        Saiba Mais <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    )
}
