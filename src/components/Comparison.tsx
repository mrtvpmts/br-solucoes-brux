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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    
                    {/* MERCADO TRADICIONAL */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-xl text-left flex flex-col items-center justify-center min-h-[450px]"
                    >
                        <div className="uppercase italic space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-2xl md:text-4xl font-black text-gray-400 ml-4">PRODUTO</h3>
                                <h3 className="text-2xl md:text-4xl font-black text-gray-400 ml-12">COMUM</h3>
                            </div>
                            
                            <div className="text-gray-400 font-medium text-sm md:text-lg space-y-1">
                                <p className="ml-6">O custo por litro parece baixo,</p>
                                <p className="ml-0 text-red-400/50 font-bold">mas o consumo é o dobro.</p>
                            </div>

                            <div className="text-gray-400 font-medium space-y-2 pt-4">
                                <p className="ml-10">Baixa concentração</p>
                                <p className="ml-0">Compra semanal</p>
                                <p className="ml-4">Custo por litro que engana</p>
                                <p className="ml-0">Resultados inconsistentes</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* SOLUÇÕES BRUX */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-brand-dark p-8 md:p-12 rounded-[2rem] shadow-2xl text-left flex flex-col items-center justify-center min-h-[450px] relative overflow-hidden"
                    >
                        <div className="relative z-10 w-full uppercase italic space-y-6">
                            <div className="space-y-1">
                                <h3 className="text-2xl md:text-4xl font-black text-white ml-8 md:ml-12">PRODUTOS</h3>
                                <h3 className="text-2xl md:text-4xl font-black text-brand-green ml-16 md:ml-24 leading-none">BRUX</h3>
                            </div>

                            <div className="text-brand-green font-bold text-sm md:text-lg space-y-1">
                                <p className="ml-4 md:ml-8">Investimento inteligente:</p>
                                <p className="ml-0">menos produto, mais resultado.</p>
                            </div>
                            
                            <div className="text-white font-bold space-y-3 pt-2 text-xs md:text-base">
                                <p className="ml-12 md:ml-20">Alta concentração</p>
                                <p className="ml-0">Compra mensal ou trimestral</p>
                                <p className="ml-4 md:ml-10">Economia real de até 70%</p>
                                <p className="ml-0">Padrão profissional de limpeza</p>
                            </div>

                            <div className="pt-6">
                                <button 
                                    onClick={() => setOpen(true)}
                                    className="w-full bg-brand-green text-brand-dark font-black py-5 rounded-xl uppercase italic tracking-wider hover:bg-white transition-all shadow-lg active:scale-95"
                                >
                                    QUERO ECONOMIZAR AGORA
                                </button>
                            </div>
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
