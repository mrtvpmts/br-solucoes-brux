'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useQuote } from './QuoteContext'

export default function Hero() {
    const { setOpen } = useQuote()

    return (
        <section id="home" className="relative min-h-[85vh] md:min-h-screen w-full flex flex-col items-center justify-center pt-20 pb-12 md:pt-24 md:pb-24 overflow-hidden bg-black">
            {/* ELITE DYNAMIC BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/textures/hero-elite-bg.png"
                    alt="BRUX Industrial"
                    fill
                    className="object-cover brightness-[0.5] md:brightness-[0.6] contrast-125"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="noise-overlay" />
                <div className="scanlines opacity-20" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center text-center">

                {/* INSTITUTIONAL VALUE PROP */}
                <div className="space-y-6 md:space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="flex items-center gap-2 md:gap-3 justify-center text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-brand-green/60 mb-2 md:mb-4"
                    >
                        <div className="w-4 md:w-8 h-[1px] bg-brand-green/40" />
                        BRUX ® SOLUÇÕES EM LIMPEZA PROFISSIONAL
                        <div className="w-4 md:w-8 h-[1px] bg-brand-green/40" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-impact !text-4xl md:!text-8xl"
                    >
                        BRUX —<br />
                        <span className="text-neon block mt-4 md:mt-8 drop-shadow-[0_0_20px_rgba(57,255,20,0.4)]">
                            O Fim da Sujeira Impossível
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                        className="max-w-4xl mx-auto text-white/40 md:text-white/50 text-sm md:text-2xl font-light tracking-[0.1em] md:tracking-[0.15em] uppercase leading-tight px-4"
                    >
                        Tecnologia química de elite para resultados absolutos<br className="hidden md:block" />
                        em uso doméstico, industrial e governamental
                    </motion.p>
                </div>

                {/* COMPLIANT CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mt-8 md:mt-16 w-full px-6"
                >
                    <Link
                        href="#catalog"
                        className="btn-stitch btn-stitch-primary py-5 md:py-7 px-8 md:px-16 text-base md:text-xl w-full md:w-auto shadow-[0_10px_30px_rgba(57,255,20,0.1)]"
                    >
                        Ver Catálogo Completo
                    </Link>

                    <button
                        onClick={() => window.open('https://wa.me/551127768000?text=Olá, gostaria de falar com um especialista sobre soluções de limpeza profissional.', '_blank')}
                        className="btn-stitch py-5 md:py-7 px-8 md:px-14 text-base md:text-xl w-full md:w-auto shadow-xl group border-white/10 hover:border-brand-green"
                    >
                        <span className="flex items-center justify-center gap-4">
                            <svg className="text-brand-green shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.891-11.891 3.181 0 6.167 1.24 8.407 3.481 2.242 2.242 3.483 5.23 3.481 8.409 0 6.556-5.332 11.891-11.891 11.891-2.025 0-4.004-.515-5.76-1.493l-6.227 1.713zm5.835-4.267c1.54 1.014 3.09 1.541 4.935 1.541 5.421 0 9.833-4.412 9.833-9.832.001-2.628-1.026-5.099-2.895-6.968-1.867-1.868-4.341-2.893-6.969-2.893-5.421 0-9.833-4.412-9.833 9.832 0 1.916.529 3.475 1.524 4.92l-1.002 3.658 3.731-.99c.003-.001.004-.001.004-.001zm11.36-6.143c-.471-.237-2.78-1.371-3.213-1.53-.433-.158-.75-.237-1.066.237-.315.474-1.22 1.53-1.496 1.846-.275.315-.552.355-1.022.118-.471-.237-1.989-.733-3.788-2.336-1.4-.1.248-2.285 1.248-3.397.301-.113.4-.188.599-.394.2-.206.315-.474.158-.79-.158-.315-1.066-2.568-1.464-3.525-.389-.929-.785-.803-1.066-.817-.272-.014-.582-.016-.893-.016s-.817.118-1.245.592c-.427.474-1.63 1.593-1.63 3.882s1.669 4.498 1.905 4.815c.236.315 3.286 5.018 7.961 7.042 1.112.482 1.98.77 2.657.985 1.118.354 2.136.305 2.94.184.897-.133 2.78-.315-2.78-1.137s-.158-1.503-.158-1.897c0-.158.079-.237.237-.315z" />
                            </svg>
                            Falar com Especialista
                        </span>
                    </button>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[80px] md:h-[150px] bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
        </section>
    )
}
