'use client'

import { motion } from 'framer-motion'
import GlowCard from './GlowCard'
import { Factory, Building2, Store, Warehouse, ShieldCheck, Zap, TrendingUp } from 'lucide-react'
import NextImage from 'next/image'

export default function Sections() {
    const products = [
        { title: 'BRUX Ultra-Degreaser', subtitle: 'Removedor de Graxa e Óleo', image: '/textures/reference-product.png', tag: 'Top Seller' },
        { title: 'Industrial Wash', subtitle: 'Sabão Líquido para Lavanderia', image: '/textures/reference-product.png' },
        { title: 'Surface Guard', subtitle: 'Limpa Vidros e Superfícies', image: '/textures/reference-product.png' },
    ]

    const sectors = [
        { icon: <Factory size={32} />, name: 'Indústrias' },
        { icon: <Building2 size={32} />, name: 'Condomínios' },
        { icon: <Store size={32} />, name: 'Comércios' },
        { icon: <Warehouse size={32} />, name: 'Galpões' },
    ]

    const steps = [
        { number: '01', title: 'Solicitação de orçamento', desc: 'Preencha os dados básicos' },
        { number: '02', title: 'Análise da demanda', desc: 'Nossa equipe técnica avalia' },
        { number: '03', title: 'Indicação dos produtos', desc: 'Solução personalizada' },
        { number: '04', title: 'Retorno rápido', desc: 'Proposta em até 24h' },
    ]

    return (
        <div className="relative z-10 py-20 md:py-24 space-y-24 md:space-y-48 max-w-7xl mx-auto px-4 md:px-8">

            {/* Sectors Section */}
            <section id="sectors" className="text-center">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-white/20 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-sm mb-8 md:mb-12"
                >
                    Atendemos Empresas que Exigem Limpeza Profissional
                </motion.h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
                    {sectors.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center gap-3 p-6 md:p-8 border border-white/5 bg-white/[0.02] hover:bg-brand-green/5 hover:border-brand-green/20 transition-all group"
                        >
                            <div className="text-white/40 group-hover:text-brand-green transition-colors scale-75 md:scale-100">
                                {s.icon}
                            </div>
                            <span className="text-[10px] md:text-sm font-bold tracking-widest uppercase">{s.name}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section id="process">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black mb-10 md:mb-8 uppercase italic italic">Um Processo Profissional</h2>
                        <div className="space-y-8 md:space-y-12 relative">
                            {/* Connector line */}
                            <div className="absolute left-[20px] top-4 bottom-4 w-[2px] bg-white/5 lg:block hidden" />

                            {steps.map((s, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-6 md:gap-8 items-start relative z-10"
                                >
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-dark border border-brand-green/40 flex items-center justify-center text-brand-green font-mono text-[10px] md:text-xs shrink-0 drop-shadow-[0_0_8px_rgba(44,255,122,0.3)]">
                                        {s.number}
                                    </div>
                                    <div>
                                        <h4 className="text-sm md:text-lg font-bold mb-1 uppercase tracking-tight">{s.title}</h4>
                                        <p className="text-white/30 text-[10px] md:text-sm italic">{s.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 md:gap-6">
                        <div className="p-6 md:p-8 border border-white/5 bg-white/[0.02] rounded-sm space-y-3 md:space-y-4">
                            <ShieldCheck className="text-brand-green scale-75 md:scale-100" size={40} />
                            <h4 className="font-bold uppercase tracking-widest text-[9px] md:text-sm leading-tight">Limpeza Pesada</h4>
                            <p className="text-[10px] text-white/30 leading-relaxed md:block hidden">Fórmulas de alta performance para os ambientes mais rigorosos.</p>
                        </div>
                        <div className="p-6 md:p-8 border border-white/5 bg-white/[0.02] rounded-sm space-y-3 md:space-y-4 md:translate-y-8">
                            <Zap className="text-brand-green scale-75 md:scale-100" size={40} />
                            <h4 className="font-bold uppercase tracking-widest text-[9px] md:text-sm leading-tight">Alto Rendimento</h4>
                            <p className="text-[10px] text-white/30 leading-relaxed md:block hidden">Diluições eficientes que garantem economia em larga escala.</p>
                        </div>
                        <div className="p-6 md:p-8 border border-white/5 bg-white/[0.02] rounded-sm space-y-3 md:space-y-4">
                            <TrendingUp className="text-brand-green scale-75 md:scale-100" size={40} />
                            <h4 className="font-bold uppercase tracking-widest text-[9px] md:text-sm leading-tight">Ideal para B2B</h4>
                            <p className="text-[10px] text-white/30 leading-relaxed md:block hidden">Soluções completas para gestão de químicos industriais.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer / Contact Preview */}
            <footer className="pt-16 pb-10 border-t border-white/5 text-center space-y-6">
                <div className="relative w-48 h-16 mx-auto">
                    <NextImage
                        src="/textures/brux-logo-horizontal.png"
                        alt="BRUX"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="text-[8px] text-white/10 tracking-[0.3em] uppercase max-w-xs mx-auto">
                    © 2024 BRUX ® - Soluções em Limpeza Industrial. <br className="md:hidden" /> Todos os direitos reservados.
                </div>
            </footer>
        </div>
    )
}
