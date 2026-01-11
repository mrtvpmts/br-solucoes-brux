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
        <div className="relative z-10 py-24 space-y-48 max-w-7xl mx-auto px-8">

            {/* Sectors Section */}
            <section id="sectors" className="text-center">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-white/40 uppercase tracking-[0.3em] text-sm mb-12"
                >
                    Atendemos Empresas que Exigem Limpeza Profissional
                </motion.h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {sectors.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center gap-4 p-8 border border-white/5 bg-white/[0.02] hover:bg-brand-green/5 hover:border-brand-green/20 transition-all group"
                        >
                            <div className="text-white/40 group-hover:text-brand-green transition-colors">
                                {s.icon}
                            </div>
                            <span className="text-sm font-bold tracking-widest uppercase">{s.name}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Catalog Section */}
            <section id="catalog">
                <div className="flex flex-col items-center mb-16 gap-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-center">Nosso Catálogo Premium</h2>
                    <div className="h-1 w-24 bg-brand-green" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {products.map((p, i) => (
                        <GlowCard key={i} {...p} />
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section id="process">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-8">Um Processo Simples, Profissional e Eficiente</h2>
                        <div className="space-y-12 relative">
                            {/* Connector line */}
                            <div className="absolute left-[20px] top-4 bottom-4 w-[2px] bg-white/5 lg:block hidden" />

                            {steps.map((s, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-8 items-start relative z-10"
                                >
                                    <div className="w-10 h-10 rounded-full bg-brand-dark border border-brand-green/40 flex items-center justify-center text-brand-green font-mono text-xs shrink-0 drop-shadow-[0_0_8px_rgba(44,255,122,0.3)]">
                                        {s.number}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">{s.title}</h4>
                                        <p className="text-white/40 text-sm italic">{s.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-8 border border-white/5 bg-white/[0.02] rounded-sm space-y-4">
                            <ShieldCheck className="text-brand-green" size={40} />
                            <h4 className="font-bold uppercase tracking-widest text-sm">Limpeza Pesada</h4>
                            <p className="text-xs text-white/40 leading-relaxed">Fórmulas de alta performance para os ambientes mais rigorosos.</p>
                        </div>
                        <div className="p-8 border border-white/5 bg-white/[0.02] rounded-sm space-y-4 translate-y-8">
                            <Zap className="text-brand-green" size={40} />
                            <h4 className="font-bold uppercase tracking-widest text-sm">Alto Rendimento</h4>
                            <p className="text-xs text-white/40 leading-relaxed">Diluições eficientes que garantem economia em larga escala.</p>
                        </div>
                        <div className="p-8 border border-white/5 bg-white/[0.02] rounded-sm space-y-4">
                            <TrendingUp className="text-brand-green" size={40} />
                            <h4 className="font-bold uppercase tracking-widest text-sm">Ideal para Empresas</h4>
                            <p className="text-xs text-white/40 leading-relaxed">Soluções completas para gestão de químicos industriais.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer / Contact Preview */}
            <footer className="pt-24 border-t border-white/5 text-center space-y-8">
                <NextImage
                    src="/textures/logo-brux.png"
                    alt="BRUX"
                    width={100}
                    height={30}
                    className="mx-auto grayscale opacity-50"
                />
                <div className="text-xs text-white/20 tracking-[0.2em] uppercase">
                    © 2024 BRUX - Soluções em Limpeza Industrial. Todos os direitos reservados.
                </div>
            </footer>
        </div>
    )
}
