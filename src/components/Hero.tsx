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
                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] items-center">
 
                        {/* THE CONTENT - IMPACTO MÁXIMO NO DESKTOP */}
                        <div className="space-y-2 md:space-y-6 ml-0 max-w-[80%] md:max-w-none text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <motion.span className="text-brand-green font-black uppercase tracking-[0.3em] text-[8px] mb-1 block drop-shadow-sm">
                                    Performance Industrial
                                </motion.span>
                                <h1 className="text-lg md:text-[110px] font-black uppercase italic leading-[1.1] md:leading-[0.85] mb-4 drop-shadow-2xl">
                                    <span className="text-[#1a1a1a] md:text-white whitespace-nowrap">
                                        Produtos <br className="md:hidden" /> Concentrados
                                    </span> <br />
                                    <span className="text-brand-green">Para</span> <span className="text-white">Limpeza</span> <br />
                                    <span className="text-white">
                                        Profissional
                                    </span>
                                </h1>
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
