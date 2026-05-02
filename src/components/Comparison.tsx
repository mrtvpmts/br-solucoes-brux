'use client'

import React from 'react'
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    
                    {/* MERCADO TRADICIONAL */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-xl text-center flex flex-col items-center"
                    >
                        <h3 className="text-2xl md:text-4xl font-black text-gray-400 uppercase italic mb-2">
                            PRODUTO COMUM
                        </h3>
                        <p className="text-gray-400 mb-8 font-medium italic">
                            O custo por litro parece baixo, mas o consumo é o dobro.
                        </p>
                        
                        <ul className="space-y-6 text-center">
                            {commonProduct.map((item, idx) => (
                                <li key={idx} className="flex items-center justify-center gap-3 text-gray-400 group">
                                    <X className="w-5 h-5 text-red-400" />
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* SOLUÇÕES BRUX */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-brand-dark p-8 md:p-12 rounded-[2rem] shadow-2xl text-center flex flex-col items-center relative overflow-hidden"
                    >
                        <div className="relative z-10 w-full">
                            <h3 className="text-2xl md:text-4xl font-black text-white uppercase italic mb-2">
                                PRODUTOS <span className="text-brand-green">BRUX</span>
                            </h3>
                            <p className="text-brand-green mb-8 font-bold italic">
                                Investimento inteligente: menos produto, mais resultado.
                            </p>
                            
                            <ul className="space-y-6 mb-10 text-center">
                                {bruxProduct.map((item, idx) => (
                                    <li key={idx} className="flex items-center justify-center gap-3 text-white group">
                                        <Check className="w-5 h-5 text-brand-green" />
                                        <span className="font-bold">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <button 
                                onClick={() => setOpen(true)}
                                className="w-full bg-brand-green text-brand-dark font-black py-5 rounded-xl uppercase italic tracking-wider hover:bg-white transition-all shadow-lg active:scale-95"
                            >
                                QUERO ECONOMIZAR AGORA
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Cards de Resumo Rápido */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="bg-brand-light p-6 rounded-2xl flex flex-col items-center text-center gap-2 border border-brand-dark/5">
                        <TrendingDown className="text-brand-green" size={32} />
                        <div>
                            <div className="text-[10px] font-black text-brand-dark/40 uppercase tracking-widest">Custo Real</div>
                            <div className="text-lg font-black text-brand-dark leading-tight">-70% no final do mês</div>
                        </div>
                    </div>
                    <div className="bg-brand-light p-6 rounded-2xl flex flex-col items-center text-center gap-2 border border-brand-dark/5">
                        <Droplets className="text-brand-green" size={32} />
                        <div>
                            <div className="text-[10px] font-black text-brand-dark/40 uppercase tracking-widest">Performance</div>
                            <div className="text-lg font-black text-brand-dark leading-tight">Limpeza Profissional</div>
                        </div>
                    </div>
                    <div className="bg-brand-light p-6 rounded-2xl flex flex-col items-center text-center gap-2 border border-brand-dark/5">
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
