'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Truck, Map, Clock, CheckCircle2 } from 'lucide-react'

export default function Logistics() {
    return (
        <section id="logistics" className="relative py-24 md:py-32 bg-transparent overflow-hidden">
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
                            <h2 className="text-5xl md:text-7xl font-black uppercase text-brand-dark tracking-tighter leading-[0.9] mb-8">
                                Entrega Rápida <br />
                                <span className="text-brand-green">Sem Fronteiras</span>
                            </h2>
                            <p className="text-brand-dark/70 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                                Estrutura logística própria e parcerias estratégicas para garantir que sua operação nunca pare. Atendemos todo o território nacional com agilidade.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {[
                                { icon: <Truck size={28} />, title: "Frota Própria SP", desc: "Entregas em até 24h para Grande São Paulo e Região Metropolitana com veículos dedicados." },
                                { icon: <Map size={28} />, title: "Cobertura Nacional", desc: "Hubs de distribuição estratégicos para atendimento rápido em todos os estados do Brasil." },
                                { icon: <Clock size={28} />, title: "Frete Grátis*", desc: "Condições especiais de frete CIF para pedidos corporativos e contratos de fornecimento." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white border border-brand-dark/5 rounded-2xl p-6 flex items-start gap-6 hover:border-brand-green/30 transition-all group shadow-sm hover:shadow-md">
                                    <div className="p-3 bg-brand-green/10 rounded-xl text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-brand-dark font-black text-lg uppercase tracking-wide mb-2">{item.title}</h3>
                                        <p className="text-brand-dark/50 text-sm leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        {/* Background Bloom */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-green/10 blur-[120px] rounded-full scale-125" />

                        <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square flex items-center justify-center">
                            {/* Mascot Image */}
                            <div className="relative z-10 w-full h-full">
                                <Image
                                    src="/images/mascot-logistics.png"
                                    alt="BRUX Mascot - Entrega Rápida"
                                    fill
                                    className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                                    priority
                                />
                            </div>

                            {/* Brazil Label */}
                            <div className="absolute bottom-4 right-10 flex flex-col items-end opacity-20">
                                <span className="text-[100px] font-black text-brand-dark leading-none tracking-tighter">BR</span>
                                <span className="text-xs font-black text-brand-green uppercase tracking-[1em] -mt-4">LOGÍSTICA</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
