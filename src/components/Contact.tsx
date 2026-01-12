'use client'

import { useQuote } from './QuoteContext'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Contact() {
    const { setOpen } = useQuote()

    return (
        <section className="px-8 py-32 md:py-48 text-center relative overflow-hidden bg-[#0b0f0d]">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-green/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto space-y-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                >
                    <span className="text-brand-green font-mono text-sm tracking-[0.4em] uppercase block mb-4">
                        Parceria de Alto Desempenho
                    </span>
                    <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic text-white leading-none">
                        Pronto para Elevar <br />
                        <span className="text-brand-green">Sua Operação?</span>
                    </h2>
                    <p className="text-white/40 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                        Fale com a equipe técnica da BRUX e descubra a solução química ideal para os desafios mais complexos do seu ambiente industrial.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <button
                        onClick={() => setOpen(true)}
                        className="group relative px-12 py-6 rounded-2xl bg-brand-green text-black font-black uppercase tracking-widest text-xl overflow-hidden shadow-[0_0_40px_rgba(44,255,122,0.3)] hover:scale-105 active:scale-95 transition-all outline-none"
                    >
                        {/* Light Sweep Animation */}
                        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none" />

                        <div className="relative z-10 flex items-center gap-3">
                            Falar com Especialista
                            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </button>

                    <div className="mt-8 text-white/30 text-xs font-mono tracking-widest uppercase">
                        Respondemos em até 24 horas úteis
                    </div>
                </motion.div>
            </div>

            {/* Industrial Footer line */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    )
}
