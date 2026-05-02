'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useQuote } from './QuoteContext'

export default function Hero() {
    const { setOpen } = useQuote()

    return (
        <section id="home" className="relative z-[150] w-full bg-brand-light overflow-hidden">
            {/* 1. THE BASE HIGH-FIDELITY IMAGE */}
            <div className="relative w-full overflow-hidden bg-white">
                <img
                    src="/images/hero-final.png"
                    alt="BRUX SOLUTIONS"
                    className="w-full h-auto block"
                />

                {/* 2. DYNAMIC OVERLAY (TEXT & BUTTONS) */}
                <div className="absolute inset-0 flex items-start">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 items-start">
 
                        {/* THE CONTENT - Travado na esquerda, branco com sombra e bem estreito */}
                        <div className="space-y-4 md:space-y-6 pt-24 pb-10 md:pt-40 max-w-[55%] md:max-w-none text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <motion.span className="text-brand-green font-black uppercase tracking-[0.3em] text-[8px] mb-2 block drop-shadow-sm">
                                    Performance Industrial
                                </motion.span>
                                <h1 className="text-lg md:text-7xl font-black text-white uppercase italic leading-[1.2] mb-4 drop-shadow-2xl">
                                    Produtos <br />
                                    Concentrados <br />
                                    <span className="text-brand-green">Para</span> <br />
                                    Limpeza <br />
                                    Profissional
                                </h1>

                                <div className="flex flex-wrap items-center gap-2 md:gap-3 text-[9px] md:text-[11px] font-bold text-black/60 tracking-wider uppercase">
                                    <span>Alta Concentração</span>
                                    <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-brand-green" />
                                    <span>Economia Real</span>
                                    <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-brand-green" />
                                    <span>Máximo Rendimento</span>
                                </div>
                            </motion.div>

                            {/* Buttons Group */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="flex flex-col sm:flex-row items-center gap-3 md:gap-4"
                            >
                                <button
                                    onClick={() => setOpen(true)}
                                    className="w-full sm:w-auto px-6 md:px-10 py-3.5 md:py-4 bg-[#1a1a1a] text-white rounded-md font-black uppercase text-[11px] md:text-sm tracking-tighter hover:bg-black transition-all shadow-xl"
                                >
                                    Fazer Cotação Agora
                                </button>

                                <a
                                    href="https://wa.me/551127768000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 bg-white/90 backdrop-blur-md text-[#1a1a1a] rounded-md font-bold uppercase text-[10px] md:text-xs tracking-tight flex items-center justify-center gap-2 border border-brand-dark/10 hover:bg-white transition-all shadow-md"
                                >
                                    <div className="w-4 md:w-5 h-4 md:h-5 bg-brand-green rounded-full flex items-center justify-center">
                                        <span className="text-[9px] md:text-[10px] text-white">W</span>
                                    </div>
                                    Falar com um especialista
                                </a>
                            </motion.div>
                        </div>

                        {/* Right side is empty to let the Shield image shine through */}
                        <div className="hidden lg:block h-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}
