'use client'

import { motion } from 'framer-motion'
import { Target, Zap, ShieldCheck } from 'lucide-react'
import { useQuote } from './QuoteContext'

export default function LogicalProof() {
    const { setOpen } = useQuote()

    return (
        <section className="py-24 bg-brand-light relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="space-y-6 md:space-y-10"
                    >
                        <h2 className="text-5xl md:text-8xl font-black text-brand-dark uppercase italic leading-[0.85] tracking-tighter">
                            Não é sobre preço <br />
                            <span className="text-brand-green">Unitário.</span> <br />
                            É sobre <span className="text-brand-green">Quanto dura.</span>
                        </h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-green border border-brand-dark/5">
                                    <Target size={24} />
                                </div>
                                <div>
                                    <h4 className="font-black text-brand-dark uppercase italic">Produto comum: acaba rápido</h4>
                                    <p className="text-brand-dark/50 text-sm font-medium">Baixa concentração obriga o uso de grandes quantidades por aplicação.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-brand-green rounded-2xl shadow-lg flex items-center justify-center text-white">
                                    <Zap size={24} />
                                </div>
                                <div>
                                    <h4 className="font-black text-brand-dark uppercase italic">Produto concentrado: rende muito mais</h4>
                                    <p className="text-brand-dark/50 text-sm font-medium">Cada gota é formulada para máxima performance. Uma diluição substitui vários galões comuns.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="p-8 bg-white rounded-3xl border border-brand-dark/5 shadow-sm">
                            <p className="text-xl font-bold text-brand-dark leading-relaxed">
                                "Você não reduz custo comprando barato. <br />
                                <span className="text-brand-green">Você reduz custo comprando certo.</span>"
                            </p>
                        </div>

                        <button 
                            onClick={() => setOpen(true)}
                            className="inline-flex items-center gap-3 px-8 py-5 bg-brand-dark text-white rounded-2xl font-black uppercase italic tracking-wider hover:bg-brand-green transition-all"
                        >
                            Me mostra o melhor pra mim
                            <ShieldCheck size={20} />
                        </button>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-brand-green/20 blur-[120px] rounded-full" />
                        <div className="relative bg-white/40 backdrop-blur-md border border-white/50 rounded-[40px] p-4 shadow-2xl">
                             <img 
                                src="/images/brux-gallon-labeled.png" 
                                alt="Galão Concentrado BRUX" 
                                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,107,63,0.3)] transform hover:scale-105 transition-transform duration-700"
                             />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
