'use client'

import { motion } from 'framer-motion'
import { Check, X, TrendingDown, Clock, Droplets } from 'lucide-react'
import { useQuote } from './QuoteContext'

export default function Comparison() {
    const { setOpen } = useQuote()

    const commonProduct = [
        "Baixa concentração (mais água que produto)",
        "Compra semanal (logística cara)",
        "Custo por litro parece barato, mas some no mês",
        "Resultados inconsistentes",
    ]

    const bruxProduct = [
        "Alta concentração (rende até 10x mais)",
        "Compra mensal ou trimestral",
        "Economia real de até 70% no final do mês",
        "Padrão profissional de limpeza",
    ]

    return (
        <section id="comparison" className="py-24 relative overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-brand-green font-black uppercase tracking-[0.3em] text-sm mb-4 block"
                    >
                        A Verdade Simples
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-brand-dark uppercase italic leading-none"
                    >
                        Não compare Preço, <br />
                        Compare <span className="text-brand-green">Rendimento</span>
                    </motion.h2>
                </div>

                {/* VISUAL COMPARISON IMAGE INTEGRATED WITH TEXT */}
                <div className="relative max-w-6xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mb-4"
                    >
                        <img 
                            src="/images/comparison-visual.png" 
                            alt="Comparação Visual BRUX" 
                            className="w-full h-auto"
                        />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        {/* LEFT: COMMON PRODUCT DETAILS */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="px-4 md:px-8"
                        >
                            <h3 className="text-xl font-black text-brand-dark/40 uppercase italic mb-4">Produto Comum</h3>
                            <p className="text-brand-dark/50 font-bold mb-6 text-center md:text-left">
                                O custo por litro parece baixo, mas o consumo é o dobro.
                            </p>
                            <ul className="space-y-4">
                                {commonProduct.map((item, i) => (
                                    <li key={i} className="flex gap-3 text-brand-dark/60 font-bold text-sm">
                                        <X className="text-red-500 mt-1 flex-shrink-0" size={18} strokeWidth={3} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* RIGHT: BRUX PRODUCT DETAILS */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="px-4 md:px-8"
                        >
                            <h3 className="text-xl font-black text-brand-green uppercase italic mb-4">Produtos BRUX</h3>
                            <p className="text-brand-green font-bold mb-6 text-center md:text-left">
                                Investimento inteligente: menos produto, mais resultado.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {bruxProduct.map((item, i) => (
                                    <li key={i} className="flex gap-3 text-brand-dark/80 font-bold text-sm">
                                        <Check className="text-brand-green mt-1 flex-shrink-0" size={18} strokeWidth={3} />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <button 
                                onClick={() => setOpen(true)}
                                className="w-full py-4 bg-brand-green hover:bg-brand-green-fresh text-white rounded-xl font-black uppercase tracking-wider transition-all shadow-lg shadow-brand-green/20"
                            >
                                Quero Economizar Agora
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* Cards de Resumo Rápido */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="bg-brand-light p-6 rounded-2xl flex items-center gap-4 border border-brand-dark/5">
                        <TrendingDown className="text-brand-green" size={32} />
                        <div>
                            <div className="text-[10px] font-black text-brand-dark/40 uppercase tracking-widest">Custo Real</div>
                            <div className="text-lg font-black text-brand-dark leading-tight">-70% no final do mês</div>
                        </div>
                    </div>
                    <div className="bg-brand-light p-6 rounded-2xl flex items-center gap-4 border border-brand-dark/5">
                        <Droplets className="text-brand-green" size={32} />
                        <div>
                            <div className="text-[10px] font-black text-brand-dark/40 uppercase tracking-widest">Performance</div>
                            <div className="text-lg font-black text-brand-dark leading-tight">Limpeza Profissional</div>
                        </div>
                    </div>
                    <div className="bg-brand-light p-6 rounded-2xl flex items-center gap-4 border border-brand-dark/5">
                        <Clock className="text-brand-green" size={32} />
                        <div>
                            <div className="text-[10px] font-black text-brand-dark/40 uppercase tracking-widest">Eficiência</div>
                            <div className="text-lg font-black text-brand-dark leading-tight">Menos reposição</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
