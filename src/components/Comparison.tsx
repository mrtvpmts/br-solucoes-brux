'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingDown, Clock, Droplets } from 'lucide-react'
import { useQuote } from './QuoteContext'

export default function Comparison() {
    const { setOpen } = useQuote()

    return (
        <section id="comparison" className="py-24 relative overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-brand-dark uppercase italic leading-none"
                    >
                        Não compare Preço, <br />
                        Compare <span className="text-brand-green">Rendimento</span>
                    </motion.h2>
                </div>

                {/* IMAGEM DE COMPARAÇÃO RESTAURADA */}
                <div className="relative max-w-4xl mx-auto mb-16">
                    <img 
                        src="/images/comparison-visual.png" 
                        alt="Comparação de Produtos" 
                        className="w-full h-auto drop-shadow-2xl"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    
                    {/* MERCADO TRADICIONAL */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-xl flex flex-col items-center justify-center min-h-[550px] uppercase italic font-black tracking-tighter"
                    >
                        <div className="flex flex-col text-gray-400">
                            <p className="text-3xl md:text-5xl ml-0">PRODUTO</p>
                            <p className="text-3xl md:text-5xl ml-16">COMUM</p>
                            
                            <div className="mt-8 space-y-1 text-sm md:text-xl">
                                <p className="ml-4">O custo por litro parece baixo,</p>
                                <p className="ml-0 text-red-400 font-bold">mas o consumo é o dobro.</p>
                            </div>

                            <div className="mt-8 space-y-2 text-sm md:text-lg">
                                <p className="ml-12">Baixa concentração</p>
                                <p className="ml-0">Compra semanal</p>
                                <p className="ml-6">Custo por litro que engana</p>
                                <p className="ml-0 text-red-400/70">Resultados inconsistentes</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* SOLUÇÕES BRUX */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-brand-dark p-8 md:p-12 rounded-[2rem] shadow-2xl flex flex-col items-center justify-center min-h-[550px] relative overflow-hidden uppercase italic font-black tracking-tighter"
                    >
                        <div className="relative z-10 flex flex-col">
                            <p className="text-white text-3xl md:text-5xl ml-0">PRODUTOS</p>
                            <p className="text-brand-green text-4xl md:text-7xl ml-16 md:ml-24 leading-none">BRUX</p>
                            
                            <div className="text-brand-green mt-10 space-y-1 text-sm md:text-xl">
                                <p className="ml-6">Investimento inteligente:</p>
                                <p className="ml-0 underline decoration-2 underline-offset-4">menos produto, mais resultado.</p>
                            </div>

                            <div className="text-white mt-10 space-y-3 text-sm md:text-lg">
                                <p className="ml-16">Alta concentração</p>
                                <p className="ml-0">Compra mensal ou trimestral</p>
                                <p className="ml-8 text-brand-green">Economia real de até 70%</p>
                                <p className="ml-0">Padrão profissional de limpeza</p>
                            </div>
                        </div>

                        <div className="relative z-10 pt-12 w-full max-w-xs">
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
