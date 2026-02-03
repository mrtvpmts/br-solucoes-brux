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
        <section id="government" className="relative py-12 md:py-24 bg-[#080a09] overflow-hidden">

            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vw] max-w-[1000px] max-h-[1000px] bg-[radial-gradient(circle,rgba(57,255,20,0.05)_0%,transparent_70%)]" />
            </div>

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

                    <h2 className="text-3xl md:text-7xl font-black text-white leading-none uppercase italic tracking-tighter break-words max-w-full">
                        Autoridade <br />
                        <span className="text-brand-green drop-shadow-[0_0_15px_rgba(57,255,20,0.5)]">Governamental</span>
                    </h2>
                </motion.div>

                {/* Main Content Container - Flex Col on Mobile, Grid on Desktop */}
                <div className="w-full flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Left Side: Text & Stats */}
                    <div className="flex flex-col gap-8 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h3 className="text-lg md:text-3xl font-black text-white leading-tight uppercase italic">
                                A <span className="text-brand-green">BRUX</span> é parceira estratégica de órgãos públicos.
                            </h3>
                            <p className="text-white/70 text-sm md:text-lg font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Oferecemos soluções químicas de alto rendimento que atendem rigorosamente aos editais e normas de segurança vigentes.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                            <div className="flex flex-col items-center lg:items-start p-4 bg-white/5 rounded-2xl">
                                <span className="text-3xl md:text-5xl font-black text-brand-green">100%</span>
                                <span className="text-[10px] md:text-xs text-white/50 uppercase tracking-widest mt-1">Conformidade</span>
                            </div>
                            <div className="flex flex-col items-center lg:items-start p-4 bg-white/5 rounded-2xl">
                                <span className="text-3xl md:text-5xl font-black text-brand-green">31+</span>
                                <span className="text-[10px] md:text-xs text-white/50 uppercase tracking-widest mt-1">Produtos</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Cards */}
                    <div className="flex flex-col gap-4 w-full">
                        {authorityItems.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group w-full bg-white/[0.03] border border-white/10 hover:border-brand-green/50 rounded-2xl p-4 md:p-6 transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0 group-hover:bg-brand-green group-hover:text-black transition-colors">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1 text-left">
                                        <h4 className="text-white font-bold text-sm md:text-lg uppercase tracking-wide mb-1 group-hover:text-brand-green transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-white/50 text-xs md:text-sm leading-relaxed">
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
                        onClick={() => window.open('https://wa.me/551127768000?text=Solicitar documentação técnica', '_blank')}
                        className="w-full md:w-auto btn-stitch py-4 px-8 text-sm font-bold flex items-center justify-center gap-2"
                    >
                        <Shield className="w-4 h-4" />
                        Solicitar Documentação Técnica
                    </button>
                </motion.div>

            </div>
        </section>
    )
}
