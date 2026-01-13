'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Truck, Map, Clock, CheckCircle2 } from 'lucide-react'

export default function Logistics() {
    return (
        <section id="logistics" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden">
            {/* Background Map Effect */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 0 L100 100 M100 0 L0 100" stroke="white" strokeWidth="0.1" />
                    <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="0.1" fill="none" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="space-y-6">
                            <span className="text-brand-green text-xs font-black uppercase tracking-[0.4em]">Logística & Distribuição</span>
                            <h2 className="text-6xl md:text-8xl font-black uppercase text-white italic tracking-tighter leading-[0.9] mb-8">
                                Entrega Rápida <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-[#7FFF00] to-brand-green drop-shadow-[0_0_30px_rgba(57,255,20,0.5)]">
                                    Sem Fronteiras
                                </span>
                            </h2>
                            <p className="text-white/80 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl">
                                Estrutura logística própria e parcerias estratégicas para garantir que sua operação nunca pare. Atendemos todo o território nacional com agilidade.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 flex items-start gap-6 hover:border-brand-green/30 transition-all group">
                                <div className="p-3 bg-brand-green/10 rounded-xl text-brand-green group-hover:scale-110 transition-transform">
                                    <Truck size={28} />
                                </div>
                                <div>
                                    <h3 className="text-white font-black text-lg uppercase tracking-wide mb-2">Frota Própria SP</h3>
                                    <p className="text-white/50 text-sm leading-relaxed">Entregas em até 24h para Grande São Paulo e Região Metropolitana com veículos dedicados.</p>
                                </div>
                            </div>

                            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 flex items-start gap-6 hover:border-brand-green/30 transition-all group">
                                <div className="p-3 bg-brand-green/10 rounded-xl text-brand-green group-hover:scale-110 transition-transform">
                                    <Map size={28} />
                                </div>
                                <div>
                                    <h3 className="text-white font-black text-lg uppercase tracking-wide mb-2">Cobertura Nacional</h3>
                                    <p className="text-white/50 text-sm leading-relaxed">Hubs de distribuição estratégicos para atendimento rápido em todos os estados do Brasil.</p>
                                </div>
                            </div>

                            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 flex items-start gap-6 hover:border-brand-green/30 transition-all group">
                                <div className="p-3 bg-brand-green/10 rounded-xl text-brand-green group-hover:scale-110 transition-transform">
                                    <Clock size={28} />
                                </div>
                                <div>
                                    <h3 className="text-white font-black text-lg uppercase tracking-wide mb-2">Frete Grátis*</h3>
                                    <p className="text-white/50 text-sm leading-relaxed">Condições especiais de frete CIF para pedidos corporativos e contratos de fornecimento.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image/Visual - Using a stylized map representation or image if available */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-[40px] overflow-hidden border border-white/10 bg-[#0a0a0a] relative group">
                            {/* Tech Map Image */}
                            <div className="absolute inset-0">
                                <Image
                                    src="/images/logistics-map.png"
                                    alt="BRUX Logistics Network"
                                    fill
                                    className="object-cover object-center scale-110 group-hover:scale-105 transition-transform duration-700 opacity-80"
                                />
                            </div>

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

                            {/* Floating Cards */}
                            <div className="absolute top-10 right-10 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl z-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
                                    <span className="text-white text-[10px] font-bold uppercase tracking-wider">Status: Operação Normal</span>
                                </div>
                            </div>

                            <div className="absolute bottom-10 left-10 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl z-10">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-brand-green/10 rounded-lg text-brand-green">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <div>
                                        <div className="text-white text-xs font-bold uppercase tracking-wide">Entregas no Prazo</div>
                                        <div className="text-white/40 text-[10px] uppercase font-medium">Últimos 30 dias: <span className="text-brand-green">99.8%</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
