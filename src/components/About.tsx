'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function About() {
    const [activeSlide, setActiveSlide] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

    const slides = [
        {
            label: "DNA Industrial",
            title: "BRUX Chemistry: Engenharia de Limpeza",
            desc: "Nascida na rigidez dos ambientes profissionais, a BRUX funde química avançada com eficiência bruta. Cada molécula é projetada para o impacto, garantindo performance inegociável onde outros falham.",
            meta: "CHEM_STABILITY: ALPHA // YIELD_INDEX: MAX"
        },
        {
            label: "Soluções B2B",
            title: "Diluições Extremas, Resultados Absolutos",
            desc: "Desenvolvemos formulações de altíssimo rendimento para operações que exigem escala e economia real. Do faturamento flexível à entrega prioritária, somos o motor químico da sua empresa.",
            meta: "B2B_PROTOCOL: ACTIVE // SCALE_READY"
        },
        {
            label: "Segurança & Suporte",
            title: "Rigor Técnico e Conformidade Total",
            desc: "Segurança B2B é inegociável. Garantimos suporte técnico especializado e toda a documentação (FISPQ) rigorosamente atualizada, protegendo sua equipe e o meio ambiente com nível de excelência.",
            meta: "COMPLIANCE_LEVEL: SECURED // TECH_SUPPORT: v24"
        },
        {
            label: "Logística Alpha",
            title: "Suprimento Contínuo e Veloz",
            desc: "Operação logística otimizada para a Grande São Paulo. Entregamos agilidade no fornecimento para que sua operação nunca pare, mantendo o fluxo de limpeza sempre em sua potência máxima.",
            meta: "LOG_STATUS: PRIORITY // REGION: SP_METRO"
        }
    ]

    const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length)
    const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)

    return (
        <section
            id="about"
            ref={containerRef}
            className="relative bg-[#060807] py-48 md:py-64 overflow-hidden"
        >
            <div className="beveled-divider" />

            {/* CINEMATIC LAYERED BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(57,255,20,0.03)_0%,transparent_70%)]" />
                <div className="absolute inset-0 noise-overlay opacity-10" />
                <div className="absolute inset-0 scanlines opacity-5" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col items-center">

                {/* MASSIVE REACTIVE CAROUSEL FRAME */}
                <motion.div
                    style={{ scale, opacity }}
                    className="relative w-full border-x border-white/5 bg-white/[0.01] backdrop-blur-3xl rounded-[100px] p-12 md:p-32 overflow-hidden group shadow-[0_0_100px_rgba(0,0,0,0.5)]"
                >
                    {/* Animated Heavy Brackets (STITCH LOGO DNA) */}
                    <div className="absolute top-0 left-0 w-48 h-48 border-t-4 border-l-4 border-brand-green/40 rounded-tl-[100px] group-hover:border-brand-green transition-all duration-1000" />
                    <div className="absolute bottom-0 right-0 w-48 h-48 border-b-4 border-r-4 border-brand-green/40 rounded-br-[100px] group-hover:border-brand-green transition-all duration-1000" />

                    {/* TOP HUD NAV */}
                    <div className="w-full flex justify-between mb-16 opacity-30 text-[10px] font-black uppercase tracking-[0.5em] text-brand-green">
                        <div className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
                            <span>Sector: About_Brux_v.Elite</span>
                        </div>
                        <span>Sequence: 0{activeSlide + 1} / 0{slides.length}</span>
                    </div>

                    <div className="relative min-h-[400px] flex flex-col items-center text-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSlide}
                                initial={{ opacity: 0, x: 100, filter: 'blur(20px)' }}
                                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, x: -100, filter: 'blur(20px)' }}
                                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                                className="space-y-12"
                            >
                                <div className="space-y-6">
                                    <span className="text-brand-green font-black uppercase tracking-[0.8em] text-[12px] drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]">
                                        {slides[activeSlide].label}
                                    </span>
                                    <h2 className="text-white font-black italic uppercase tracking-tighter text-4xl md:text-8xl leading-none">
                                        {slides[activeSlide].title.split(':').map((part, idx) => (
                                            <span key={idx} className={idx === 1 ? "text-neon block mt-4" : ""}>{part}</span>
                                        ))}
                                    </h2>
                                    <div className="h-[2px] w-48 bg-brand-green/40 mx-auto rounded-full shadow-[0_0_20px_#39FF14]" />
                                </div>

                                <p className="text-white/80 text-xl md:text-4xl font-medium leading-[1.3] max-w-5xl mx-auto tracking-tight">
                                    {slides[activeSlide].desc}
                                </p>

                                <div className="pt-12 text-[10px] text-white/20 font-black uppercase tracking-[0.8em]">
                                    {slides[activeSlide].meta}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* ELITE METALLIC NAVIGATION */}
                    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-16 z-20">
                        <button
                            onClick={prevSlide}
                            className="w-16 h-16 rounded-2xl border border-white/5 bg-white/[0.03] flex items-center justify-center text-white/30 hover:text-brand-green hover:border-brand-green/40 hover:bg-brand-green/[0.05] transition-all"
                        >
                            <ChevronLeft size={32} />
                        </button>

                        <div className="flex gap-4">
                            {slides.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-2 transition-all duration-700 rounded-full ${i === activeSlide ? 'w-16 bg-brand-green shadow-[0_0_20px_#39FF14]' : 'w-4 bg-white/10'}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="w-16 h-16 rounded-2xl border border-white/5 bg-white/[0.03] flex items-center justify-center text-white/30 hover:text-brand-green hover:border-brand-green/40 hover:bg-brand-green/[0.05] transition-all"
                        >
                            <ChevronRight size={32} />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Side Accents */}
            <div className="absolute top-1/2 left-0 w-32 h-[800px] bg-gradient-to-r from-white/[0.02] to-transparent border-r border-white/5 -translate-y-1/2 hidden 2xl:block" />
            <div className="absolute top-1/2 right-0 w-32 h-[800px] bg-gradient-to-l from-white/[0.02] to-transparent border-l border-white/5 -translate-y-1/2 hidden 2xl:block" />
        </section>
    )
}
