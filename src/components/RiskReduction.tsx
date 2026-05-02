'use client'

import { motion } from 'framer-motion'
import { MessageSquare, ShieldCheck, HeartHandshake } from 'lucide-react'
import { useQuote } from './QuoteContext'

export default function RiskReduction() {
    const { setOpen } = useQuote()

    return (
        <section className="py-24 bg-brand-light relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="bg-white rounded-[40px] p-8 md:p-16 border border-brand-dark/5 shadow-xl flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative">
                    
                    {/* Visual Mascot */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="absolute inset-0 bg-brand-green/10 blur-[80px] rounded-full" />
                        <img 
                            src="/images/gotinha-expert.png" 
                            alt="Gotinha BRUX - Especialista Técnico" 
                            className="relative z-10 w-full h-auto max-w-md mx-auto drop-shadow-[0_20px_50px_rgba(0,107,63,0.3)] transform hover:scale-105 transition-transform duration-500"
                        />
                    </motion.div>

                    <div className="w-full lg:w-1/2 space-y-10">
                        <div className="space-y-4">
                            <span className="text-brand-green font-black uppercase tracking-[0.3em] text-sm flex items-center gap-2">
                                <ShieldCheck size={18} />
                                Compra Segura e Assistida
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-brand-dark uppercase italic leading-tight">
                                Você não precisa <br />
                                <span className="text-brand-green">comprar errado</span> de novo.
                            </h2>
                            <p className="text-brand-dark/60 font-medium text-lg leading-relaxed">
                                Nosso time técnico analisa o seu tipo de piso, sujeira e tráfego para indicar **exatamente** o produto certo. Sem desperdício, sem erro.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex gap-4 p-4 rounded-2xl bg-brand-light border border-brand-dark/5">
                                <MessageSquare className="text-brand-green" size={24} />
                                <div className="text-xs font-bold text-brand-dark/70">Consultoria Técnica Gratuita</div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-2xl bg-brand-light border border-brand-dark/5">
                                <HeartHandshake className="text-brand-green" size={24} />
                                <div className="text-xs font-bold text-brand-dark/70">Indicação sob Medida</div>
                            </div>
                        </div>

                        <button 
                            onClick={() => setOpen(true)}
                            className="w-full py-6 bg-brand-green hover:bg-brand-green-fresh text-white rounded-2xl font-black uppercase italic tracking-widest transition-all shadow-xl shadow-brand-green/20 flex items-center justify-center gap-4 group"
                        >
                            Quero o produto certo para mim
                            <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                                →
                            </motion.span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
