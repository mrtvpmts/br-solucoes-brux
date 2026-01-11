'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Truck, ClipboardCheck, Wallet, Headset, Zap } from 'lucide-react'

export default function Differentials() {
    const differentials = [
        { title: "Atendimento Especializado", icon: <Headset size={32} /> },
        { title: "Produtos de Alto Rendimento", icon: <Zap size={32} /> },
        { title: "Alta Diluição", icon: <CheckCircle2 size={32} /> },
        { title: "Emissão de NF-e", icon: <ClipboardCheck size={32} /> },
        { title: "Faturamento", icon: <Wallet size={32} /> },
        { title: "Suporte Técnico", icon: <CheckCircle2 size={32} /> }
    ]

    return (
        <section id="differentials" className="relative py-40 bg-[#060807] overflow-hidden px-8">
            <div className="max-w-7xl mx-auto space-y-32">

                <div className="text-center space-y-6">
                    <h2 className="text-impact !text-4xl md:!text-7xl">Diferenciais <span className="text-neon">Brux</span></h2>
                    <div className="h-1 w-48 bg-brand-green/30 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {differentials.map((d, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-center gap-6 bg-white/[0.02] border border-white/5 rounded-[32px] p-8 hover:border-brand-green/30 hover:bg-brand-green/[0.02] transition-all group"
                        >
                            <div className="p-4 bg-brand-green/10 rounded-2xl text-brand-green group-hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all">
                                {d.icon}
                            </div>
                            <span className="text-sm font-black text-white uppercase tracking-widest leading-tight">
                                {d.title}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* LOGISTICS SECTION (NEW) */}
                <div id="logistics" className="pt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-brand-green/5 border border-brand-green/20 rounded-[48px] p-12 md:p-20 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-12 text-brand-green/10 group-hover:text-brand-green/20 transition-colors">
                            <Truck size={240} strokeWidth={1} />
                        </div>

                        <div className="relative z-10 max-w-2xl space-y-8">
                            <div className="flex items-center gap-4 text-brand-green font-black uppercase tracking-[0.4em] text-xs">
                                <Truck size={20} />
                                <span>Logística Integrada</span>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter italic">
                                Entrega Rápida em Toda a<br />
                                <span className="text-neon">Grande São Paulo</span>
                            </h3>
                            <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed">
                                Operação logística otimizada para garantir o suprimento contínuo de sua empresa na capital e região metropolitana.
                            </p>
                            <div className="flex gap-10 pt-4">
                                <div className="space-y-1">
                                    <span className="block text-white font-black uppercase tracking-widest text-xs">SP Capital</span>
                                    <span className="text-[10px] text-white/30 font-bold tracking-widest">Entrega Prioritária</span>
                                </div>
                                <div className="w-[1px] h-10 bg-white/10" />
                                <div className="space-y-1">
                                    <span className="block text-white font-black uppercase tracking-widest text-xs">Região Metropolitana</span>
                                    <span className="text-[10px] text-white/30 font-bold tracking-widest">Cobertura Total</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
