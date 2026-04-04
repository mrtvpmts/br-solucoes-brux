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
        <section className="relative py-20 md:py-32 overflow-hidden bg-brand-light">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-green/3 via-transparent to-transparent" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-dark/5" />

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6"
                    >
                        <span className="text-[10px] font-black text-brand-green uppercase tracking-[0.4em] px-6 py-2 border border-brand-green/20 rounded-full bg-brand-green/5">
                            Prova Social
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black text-brand-dark italic tracking-tighter uppercase leading-none mb-6"
                    >
                        Resultados que <span className="text-brand-green">Impressionam</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-brand-dark/60 font-medium max-w-2xl mx-auto"
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
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-16 h-16 rounded-full bg-white border border-brand-dark/5 shadow-xl flex items-center justify-center text-brand-dark hover:bg-brand-green hover:border-brand-green hover:text-white transition-all group scale-90 hover:scale-100"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-16 h-16 rounded-full bg-white border border-brand-dark/5 shadow-xl flex items-center justify-center text-brand-dark hover:bg-brand-green hover:border-brand-green hover:text-white transition-all group scale-90 hover:scale-100"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center gap-3 mt-12">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`h-1.5 rounded-full transition-all duration-500 ${index === currentIndex
                                    ? 'w-12 bg-brand-green'
                                    : 'w-1.5 bg-brand-dark/10 hover:bg-brand-dark/20'
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
        <div className="grid md:grid-cols-2 gap-8 bg-white border border-brand-dark/5 rounded-[32px] overflow-hidden shadow-2xl relative">
            {/* Image */}
            <div className="relative h-64 md:h-full group">
                <Image
                    src={testimonial.image}
                    alt={testimonial.category}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                    <span className="inline-block px-5 py-2 bg-brand-green rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
                        {testimonial.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-14 flex flex-col justify-center bg-white relative">
                {/* Decorative Quote Mark */}
                <div className="absolute top-8 right-8 text-brand-green/10 text-8xl font-serif leading-none select-none">"</div>

                {/* Stars */}
                <div className="flex gap-1 mb-8 relative z-10">
                    {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-brand-green text-brand-green" />
                    ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-3xl font-medium text-brand-dark mb-10 leading-snug tracking-tight relative z-10">
                    "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-brand-dark/5 pt-8 relative z-10">
                    <div className="font-black text-brand-dark text-xl mb-1 uppercase tracking-tight">
                        {testimonial.name}
                    </div>
                    <div className="text-xs text-brand-dark/40 font-bold uppercase tracking-widest mb-2">
                        {testimonial.role}
                    </div>
                    <div className="text-brand-green font-black text-xs uppercase tracking-widest">
                        {testimonial.company} • {testimonial.location}
                    </div>
                </div>
            </div>
        </div>
    )
}
