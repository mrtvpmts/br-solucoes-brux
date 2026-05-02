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

                {/* VISUAL COMPARISON IMAGE */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mb-12 relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-brand-dark/5"
                >
                    <img 
                        src="/images/comparison-visual.png" 
                        alt="Comparação Visual: Galão de Mercado vs Galão Concentrado BRUX" 
                        className="w-full h-auto"
                    />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {/* PRODUTO COMUM */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-brand-silver/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-brand-dark/5 flex flex-col h-full"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                                <X size={24} strokeWidth={3} />
                            </div>
                            <h3 className="text-2xl font-black text-brand-dark uppercase italic">Produto Comum</h3>
                        </div>
                        <p className="text-brand-dark/60 font-medium mb-8">
                            Você paga "barato" por litro... mas precisa comprar toda semana e usar o dobro da quantidade.
                        </p>
                        <ul className="space-y-4 mb-12 flex-1">
                            {commonProduct.map((item, i) => (
                                <li key={i} className="flex gap-3 text-brand-dark/70 font-bold text-sm">
                                    <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                                        <X size={10} strokeWidth={4} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* BRUX */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-brand-dark text-white rounded-3xl p-8 md:p-12 border border-brand-green/30 shadow-2xl shadow-brand-green/20 flex flex-col h-full relative overflow-hidden group"
                    >
                        {/* Efeito de Brilho */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/20 blur-[100px] -mr-32 -mt-32 rounded-full" />
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white">
                                    <Check size={24} strokeWidth={3} />
                                </div>
                                <h3 className="text-2xl font-black uppercase italic">Produtos BRUX</h3>
                            </div>
                            <p className="text-white/60 font-medium mb-8">
                                Você investe em concentração... usa menos produto, gasta menos tempo e economiza de verdade.
                            </p>
                            <ul className="space-y-4 mb-12">
                                {bruxProduct.map((item, i) => (
                                    <li key={i} className="flex gap-3 text-white/80 font-bold text-sm">
                                        <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-brand-green flex items-center justify-center text-white">
                                            <Check size={10} strokeWidth={4} />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <button 
                                onClick={() => setOpen(true)}
                                className="w-full py-5 bg-brand-green hover:bg-brand-green-fresh text-white rounded-2xl font-black uppercase tracking-wider transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-brand-green/20"
                            >
                                Quero Economizar Agora
                            </button>
                        </div>
                    </motion.div>
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
