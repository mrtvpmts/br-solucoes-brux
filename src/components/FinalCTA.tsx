'use client'

import { motion } from 'framer-motion'
import { MessageSquare, ArrowRight } from 'lucide-react'
import { useQuote } from './QuoteContext'

export default function FinalCTA() {
    const { setOpen } = useQuote()

    return (
        <section id="contact" className="py-24 bg-brand-dark relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/5 -skew-x-12 transform translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green/10 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-12">
                <div className="space-y-6">
                    <motion.span 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block px-6 py-2 bg-brand-green/10 border border-brand-green/20 rounded-full text-brand-green font-black uppercase tracking-[0.4em] text-[10px] md:text-xs"
                    >
                        Último Passo para sua Economia
                    </motion.span>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-black text-white uppercase italic leading-none"
                    >
                        PARE DE PAGAR CARO <br />
                        <span className="text-brand-green">TODO MÊS</span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/60 text-lg md:text-2xl font-bold italic"
                    >
                        Comece a economizar na sua próxima compra. <br className="hidden md:block" />
                        Atendimento imediato para indicação do produto certo.
                    </motion.p>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <button 
                        onClick={() => setOpen(true)}
                        className="group w-full md:w-auto px-12 py-8 bg-brand-green hover:bg-brand-green-fresh text-white rounded-3xl font-black uppercase italic tracking-widest text-lg md:text-2xl flex items-center justify-center gap-4 transition-all shadow-2xl shadow-brand-green/20 hover:scale-105 active:scale-95"
                    >
                        <MessageSquare size={32} fill="white" />
                        Solicitar Orçamento Agora
                        <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </motion.div>

                <div className="pt-8 flex items-center justify-center gap-8 text-white/30 text-[10px] font-black uppercase tracking-widest">
                    <span>Atendimento 24h</span>
                    <div className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                    <span>Consultoria Gratuita</span>
                    <div className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                    <span>Estoque Próprio</span>
                </div>
            </div>
        </section>
    )
}
