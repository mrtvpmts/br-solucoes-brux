'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface Testimonial {
    id: number
    name: string
    role: string
    company: string
    location: string
    image: string
    rating: number
    text: string
    category: string
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Carlos Mendes',
        role: 'Gerente de Facilities',
        company: 'Logística Express',
        location: 'São Paulo - SP',
        image: '/images/clean-warehouse.png',
        rating: 5,
        text: 'A BRUX transformou nosso galpão. Pisos impecáveis, organização total e um ambiente que impressiona nossos clientes. Profissionalismo de alto nível!',
        category: 'Galpão Industrial'
    },
    {
        id: 2,
        name: 'Dra. Ana Paula Silva',
        role: 'Diretora Administrativa',
        company: 'Hospital Santa Cruz',
        location: 'Rio de Janeiro - RJ',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
        rating: 5,
        text: 'Padrão hospitalar impecável. A equipe BRUX entende as exigências de sanitização e segurança. Confiança total em cada serviço.',
        category: 'Hospital'
    },
    {
        id: 3,
        name: 'Roberto Almeida',
        role: 'Síndico',
        company: 'Condomínio Jardim Paulista',
        location: 'São Paulo - SP',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
        rating: 5,
        text: 'Lobby sempre impecável, áreas comuns brilhando. Os moradores notaram a diferença imediatamente. Melhor investimento que fizemos!',
        category: 'Condomínio Residencial'
    },
    {
        id: 4,
        name: 'Eng. Fernando Costa',
        role: 'Gerente de Produção',
        company: 'Indústria MetalTech',
        location: 'Guarulhos - SP',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
        rating: 5,
        text: 'Limpeza industrial de verdade. Removem até as manchas mais difíceis de óleo e graxa. Ambiente seguro e produtivo para nossa equipe.',
        category: 'Indústria'
    },
    {
        id: 5,
        name: 'Mariana Oliveira',
        role: 'Gerente de Operações',
        company: 'Shopping Center Plaza',
        location: 'Campinas - SP',
        image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80',
        rating: 5,
        text: 'Mantêm nosso shopping impecável 24/7. Trabalho discreto, eficiente e com produtos que não incomodam os clientes. Parceria essencial!',
        category: 'Shopping Center'
    }
]

export default function SocialProofCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)
    const scrollRef = useRef<HTMLDivElement>(null)

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    }

    const swipeConfidenceThreshold = 10000
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity
    }

    const paginate = (newDirection: number) => {
        setDirection(newDirection)
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection
            if (nextIndex < 0) nextIndex = testimonials.length - 1
            if (nextIndex >= testimonials.length) nextIndex = 0
            return nextIndex
        })
    }

    const handleDotClick = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1)
        setCurrentIndex(index)
    }

    return (
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#060807] via-[#0a0f0b] to-[#060807]">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-green/5 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4"
                    >
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-green">
                            Prova Social
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white mb-6"
                    >
                        Resultados que <span className="text-neon">Impressionam</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/60 max-w-2xl mx-auto"
                    >
                        Veja o que nossos clientes dizem sobre a transformação que a BRUX trouxe para seus ambientes
                    </motion.p>
                </div>

                {/* Desktop Carousel */}
                <div className="hidden lg:block relative">
                    <div className="relative h-[600px] flex items-center justify-center">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = swipePower(offset.x, velocity.x)
                                    if (swipe < -swipeConfidenceThreshold) {
                                        paginate(1)
                                    } else if (swipe > swipeConfidenceThreshold) {
                                        paginate(-1)
                                    }
                                }}
                                className="absolute w-full max-w-5xl"
                            >
                                <TestimonialCard testimonial={testimonials[currentIndex]} />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={() => paginate(-1)}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-14 h-14 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center text-white hover:bg-brand-green/20 hover:border-brand-green/50 transition-all group"
                    >
                        <ChevronLeft className="w-6 h-6 group-hover:text-brand-green transition-colors" />
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-14 h-14 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center text-white hover:bg-brand-green/20 hover:border-brand-green/50 transition-all group"
                    >
                        <ChevronRight className="w-6 h-6 group-hover:text-brand-green transition-colors" />
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`h-2 rounded-full transition-all ${index === currentIndex
                                    ? 'w-8 bg-brand-green'
                                    : 'w-2 bg-white/20 hover:bg-white/40'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Mobile Scrollable Carousel */}
                <div
                    ref={scrollRef}
                    className="lg:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-6 px-6"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="flex-shrink-0 w-[85vw] snap-center">
                            <TestimonialCard testimonial={testimonial} />
                        </div>
                    ))}
                </div>

                {/* Mobile Scroll Indicator */}
                <div className="lg:hidden flex justify-center gap-2 mt-4">
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            className="h-1.5 w-1.5 rounded-full bg-white/20"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        <div className="grid md:grid-cols-2 gap-8 bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl">
            {/* Image */}
            <div className="relative h-64 md:h-full">
                <Image
                    src={testimonial.image}
                    alt={testimonial.category}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6">
                    <span className="inline-block px-4 py-2 bg-brand-green/90 backdrop-blur-sm rounded-full text-xs font-black uppercase tracking-wider text-black">
                        {testimonial.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-brand-green text-brand-green" />
                    ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl font-light text-white mb-8 leading-relaxed">
                    "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-white/10 pt-6">
                    <div className="font-bold text-white text-lg mb-1">
                        {testimonial.name}
                    </div>
                    <div className="text-sm text-white/60 mb-1">
                        {testimonial.role}
                    </div>
                    <div className="text-sm text-brand-green font-semibold">
                        {testimonial.company} • {testimonial.location}
                    </div>
                </div>
            </div>
        </div>
    )
}
