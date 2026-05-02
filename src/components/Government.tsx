'use client'

import { motion } from 'framer-motion'
import { Shield, Scale, FileCheck, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function Government() {
    const [selectedAuthority, setSelectedAuthority] = useState<any>(null)

    const authorityItems = [
        {
            title: "Conformidade Legal",
            desc: "Produtos notificados e registrados na ANVISA",
            icon: <Shield className="w-full h-full" />,
            detail: "Documentação completa para processos licitatórios e fiscalização sanitária."
        },
        {
            title: "Química Verde",
            desc: "Fórmulas biodegradáveis e ecoeficientes",
            icon: <FileCheck className="w-full h-full" />,
            detail: "Atendimento às normas de sustentabilidade exigidas em editais públicos."
        },
        {
            title: "Capacidade de Escala",
            desc: "Estrutura preparada para suprimento em larga escala",
            icon: <Scale className="w-full h-full" />,
            detail: "Logística integrada para atender grandes volumes com pontualidade."
        }
    ]

    return (
        <section id="government" className="relative py-12 md:py-24 bg-transparent overflow-hidden">

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">

                {/* Header Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-12 w-full"
                >
                    <div className="flex items-center gap-3 mb-4 opacity-80">
                        <div className="w-8 h-[2px] bg-brand-green" />
                        <span className="text-brand-green text-[10px] font-black uppercase tracking-[0.3em]">Setor Público</span>
                        <div className="w-8 h-[2px] bg-brand-green" />
                    </div>

                    <h2 className="font-black text-brand-dark leading-none uppercase tracking-tighter whitespace-nowrap" style={{ fontSize: 'clamp(1.75rem, 8vw, 4.5rem)' }}>
                        Setor <span className="text-brand-green">Público</span>
                    </h2>
                </motion.div>

                {/* Main Content Container */}
                <div className="w-full flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Left Side: Text & Stats */}
                    <div className="flex flex-col gap-8 text-center mx-auto">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6 md:space-y-8 text-center max-w-2xl mx-auto"
                        >
                            <div>
                                <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase italic tracking-tight leading-tight">
                                    SOLUÇÕES PARA O <span className="text-brand-green">SETOR PÚBLICO</span>
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Nossa linha de produtos atende rigorosamente aos padrões de exigência de órgãos públicos, 
                                    garantindo máxima eficiência em grandes volumes com o melhor custo-benefício do mercado.
                                </p>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-4 border-t border-brand-dark/10 pt-6">
                            <div className="flex flex-col items-center p-6 bg-white border border-brand-dark/5 rounded-2xl shadow-sm">
                                <span className="text-3xl md:text-5xl font-black text-brand-green">100%</span>
                                <span className="text-[10px] md:text-xs text-brand-dark/40 uppercase tracking-widest mt-1">Garantia</span>
                            </div>
                            <div className="flex flex-col items-center lg:items-start p-6 bg-white border border-brand-dark/5 rounded-2xl shadow-sm">
                                <span className="text-3xl md:text-5xl font-black text-brand-green">31+</span>
                                <span className="text-[10px] md:text-xs text-brand-dark/40 uppercase tracking-widest mt-1">Produtos</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Cards */}
                    <div className="flex flex-col gap-4 w-full">
                        {[
                            { title: "Entrega Garantida", desc: "Logística ágil para suprimento em larga escala." },
                            { title: "Segurança Total", desc: "Fórmulas biodegradáveis e ecoeficientes." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group w-full bg-white border border-brand-dark/5 hover:border-brand-green/30 rounded-2xl p-4 md:p-6 transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-1 text-left">
                                        <h4 className="text-brand-dark font-bold text-sm md:text-lg uppercase tracking-wide mb-1 group-hover:text-brand-green transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-brand-dark/50 text-xs md:text-sm leading-relaxed font-medium">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 w-full md:w-auto"
                >
                    <button
                        onClick={() => window.open('https://wa.me/551127768000?text=Solicitar orçamento para setor público', '_blank')}
                        className="w-full md:w-auto btn-stitch btn-stitch-primary py-4 px-10 text-sm font-bold flex items-center justify-center gap-2"
                    >
                        Solicitar Orçamento Setor Público
                    </button>
                </motion.div>

            </div>
        </section>
    )
}
