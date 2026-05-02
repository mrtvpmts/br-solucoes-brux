'use client'

import { motion } from 'framer-motion'
import { TrendingDown, ArrowRight } from 'lucide-react'
import { useQuote } from './QuoteContext'

export default function DirectImpact() {
    const { setOpen } = useQuote()

    return (
        <section className="py-20 bg-brand-dark relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-brand-green blur-[150px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="bg-gradient-to-br from-brand-green to-brand-green-fresh p-10 md:p-20 rounded-[40px] shadow-2xl shadow-brand-green/20 overflow-hidden relative group">
                    <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                        <TrendingDown size={300} strokeWidth={1} className="text-white" />
                    </div>

                    <div className="max-w-2xl space-y-8 relative z-10">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-7xl font-black text-white uppercase italic leading-[0.9] tracking-tighter"
                        >
                            Você pode estar pagando até <span className="text-brand-dark">70% a mais</span> sem perceber
                        </motion.h2>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-white/80 text-lg md:text-2xl font-bold italic"
                        >
                            Não deixe seu lucro ir ralo abaixo com produtos ineficientes.
                        </motion.p>

                        <motion.button 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            onClick={() => setOpen(true)}
                            className="px-10 py-6 bg-brand-dark text-white rounded-full font-black uppercase italic tracking-[0.2em] flex items-center gap-4 hover:bg-black transition-all shadow-xl active:scale-95"
                        >
                            Reduzir meu custo
                            <ArrowRight size={20} />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    )
}
