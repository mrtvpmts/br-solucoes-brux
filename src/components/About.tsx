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
            label: "Quem Somos",
            title: "Tecnologia e Eficiência em Higiene Profissional",
            desc: "A BRUX nasceu com a missão de transformar a limpeza técnica em um pilar de produtividade e segurança para as organizações. Mais do que fornecer saneantes, entregamos soluções inteligentes que unem alta performance química e economia.",
            meta: "CHEMISTRY_LEVEL: ELITE // SCALE: ALL_SIZES"
        },
        {
            label: "Versatilidade",
            title: "Do Pequeno ao Grande: Alcance Total",
            desc: "Nossa estrutura foi desenhada para atender com excelência a todos os portes de negócio. Atendemos desde a lanchonete do bairro até complexos hospitalares de alta responsabilidade e grandes centros comerciais.",
            meta: "COVERAGE: FULL_SPECTRUM // B2B_READY"
        },
        {
            label: "Sustentabilidade",
            title: "Compromisso com a Natureza",
            desc: "Na BRUX, acreditamos que a limpeza impecável não deve vir às custas do meio ambiente. Toda a nossa linha é composta por fórmulas biodegradáveis, desenvolvidas para se decomporem naturalmente, garantindo conformidade ESG.",
            meta: "ECO_COMPLIANCE: CERTIFIED // BIODEGRADABLE: 100%"
        },
        {
            label: "Parceria B2B",
            title: "Compromisso com o Resultado",
            desc: "Trabalhamos no modelo de parceria estratégica. Seja através de vendas diretas ou contratos de suprimentos para o setor público e privado, a BRUX garante que sua operação nunca pare por falta de higiene e cuidado.",
            meta: "PARTNERSHIP_MODEL: STRATEGIC // SUPPLY: GUARANTEED"
        }
    ]

    const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length)
    const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)

    return (
        <section
            id="about"
            ref={containerRef}
            className="relative bg-transparent py-12 md:py-24 overflow-hidden"
        >
            {/* Soft Ambient Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,107,63,0.02)_0%,transparent_70%)]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center">

                {/* PROFESSIONAL CAROUSEL FRAME */}
                <motion.div
                    style={{ scale, opacity }}
                    className="relative w-full border border-brand-dark/5 bg-white rounded-[32px] md:rounded-[48px] p-6 md:py-16 md:px-24 overflow-hidden group shadow-xl"
                >
                    {/* Subtle Brand Accents */}
                    <div className="absolute top-0 left-0 w-16 md:w-32 h-16 md:h-32 border-t-2 md:border-t-4 border-l-2 md:border-l-4 border-brand-green/20 rounded-tl-[32px] md:rounded-tl-[48px] group-hover:border-brand-green/40 transition-all duration-1000" />
                    <div className="absolute bottom-0 right-0 w-16 md:w-32 h-16 md:h-32 border-b-2 md:border-b-4 border-r-2 md:border-r-4 border-brand-green/20 rounded-br-[32px] md:rounded-br-[48px] group-hover:border-brand-green/40 transition-all duration-1000" />

                    {/* TOP HUD NAV */}
                    <div className="w-full flex justify-between mb-4 md:mb-12 opacity-30 text-[7px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.5em] text-brand-green">
                        <div className="flex items-center gap-1.5 md:gap-4">
                            <div className="w-1 md:w-2 h-1 md:h-2 rounded-full bg-brand-green animate-ping" />
                            <span>About_Brux_v.Elite</span>
                        </div>
                        <span>0{activeSlide + 1}/0{slides.length}</span>
                    </div>

                    <div className="relative min-h-[220px] md:min-h-[350px] flex flex-col items-center text-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSlide}
                                drag="x"
                                dragDirectionLock
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.2}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipeThreshold = 30
                                    const velocityThreshold = 500
                                    const swipe = offset.x
                                    const vel = velocity.x

                                    if (swipe < -swipeThreshold || vel < -velocityThreshold) nextSlide()
                                    else if (swipe > swipeThreshold || vel > velocityThreshold) prevSlide()
                                }}
                                initial={{ opacity: 0, x: 100, filter: 'blur(20px)' }}
                                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, x: -100, filter: 'blur(20px)' }}
                                transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                                className="space-y-4 md:space-y-10 touch-none cursor-grab active:cursor-grabbing w-full h-full flex flex-col items-center justify-center py-2 md:py-4"
                            >
                                <div className="space-y-2 md:space-y-4">
                                    <span className="text-brand-green font-black uppercase tracking-[0.4em] md:tracking-[0.8em] text-[10px] md:text-[14px]">
                                        {slides[activeSlide].label}
                                    </span>
                                    <h2 className="text-brand-dark font-black uppercase tracking-tight text-2xl md:text-6xl leading-tight md:leading-[1.1]">
                                        {slides[activeSlide].title.split(':').map((part, idx) => (
                                            <span key={idx} className={idx === 1 ? "text-brand-green block mt-1 md:mt-2" : ""}>{part}</span>
                                        ))}
                                    </h2>
                                    <div className="h-[2px] md:h-[4px] w-12 md:w-24 bg-brand-green/20 mx-auto rounded-full" />
                                </div>

                                <p className="text-brand-dark/70 md:text-brand-dark !text-lg md:!text-2xl lg:!text-3xl font-semibold leading-relaxed max-w-5xl mx-auto tracking-tight px-4 mt-6">
                                    {slides[activeSlide].desc}
                                </p>

                                {/* INTEGRATED NAVIGATION BUTTONS INSIDE CAROUSEL */}
                                <div className="flex items-center justify-center gap-3 pt-4">
                                    <button
                                        onClick={prevSlide}
                                        className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-brand-green/10 bg-brand-light flex items-center justify-center text-brand-green/40 hover:text-brand-green hover:border-brand-green/30 transition-all shadow-sm hover:shadow-md"
                                    >
                                        <ChevronLeft className="w-5 h-5 md:w-8 md:h-8" />
                                    </button>

                                    <div className="flex gap-2">
                                        {slides.map((_, i) => (
                                            <div
                                                key={i}
                                                className={`h-1.5 transition-all duration-700 rounded-full ${i === activeSlide ? 'w-8 md:w-12 bg-brand-green' : 'w-2 bg-brand-dark/10'}`}
                                            />
                                        ))}
                                    </div>

                                    <button
                                        onClick={nextSlide}
                                        className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-brand-green/10 bg-brand-light flex items-center justify-center text-brand-green/40 hover:text-brand-green hover:border-brand-green/30 transition-all shadow-sm hover:shadow-md"
                                    >
                                        <ChevronRight className="w-5 h-5 md:w-8 md:h-8" />
                                    </button>
                                </div>

                                <div className="pt-4 md:pt-10 text-[8px] md:text-[12px] text-brand-dark/30 font-bold uppercase tracking-[0.2em] md:tracking-[0.4em]">
                                    {slides[activeSlide].meta}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>

            {/* Side Accents */}
            <div className="absolute top-1/2 left-0 w-32 h-[800px] bg-gradient-to-r from-white/[0.02] to-transparent border-r border-white/5 -translate-y-1/2 hidden 2xl:block" />
            <div className="absolute top-1/2 right-0 w-32 h-[800px] bg-gradient-to-l from-white/[0.02] to-transparent border-l border-white/5 -translate-y-1/2 hidden 2xl:block" />
        </section>
    )
}
