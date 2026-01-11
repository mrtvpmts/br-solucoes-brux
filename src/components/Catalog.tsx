'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useQuote } from './QuoteContext'

interface ProductCardProps {
    title: string
    subtitle: string
    image: string
}

function ProductCard({ title, subtitle, image }: ProductCardProps) {
    const { setOpen } = useQuote()

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="industrial-card group flex flex-col items-center text-center space-y-8"
        >
            {/* 1:1 3D Thumbnails Frame */}
            <div className="w-full aspect-[4/5] relative bg-[#0a0a0a] rounded-[32px] border border-white/5 overflow-hidden flex items-center justify-center p-8 group-hover:border-brand-green/30 transition-all">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image
                    src={image}
                    alt={title}
                    width={240}
                    height={300}
                    className="relative z-10 transition-transform duration-700 group-hover:scale-110 group-hover:drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                />
            </div>

            <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-black uppercase text-white tracking-tight leading-tight px-4">
                    {title}
                </h3>
                <div className="text-brand-green text-sm font-bold tracking-[0.3em] uppercase">
                    Industrial • {subtitle}
                </div>
            </div>

            <button
                onClick={() => setOpen(true)}
                className="btn-stitch w-full py-5 text-lg"
            >
                Falar com Especialista
            </button>
        </motion.div>
    )
}

export default function Catalog() {
    const products = [
        { title: "Detergente Desengraxante", subtitle: "5L", image: "/textures/reference-product.png" },
        { title: "Desincrustante Profissional", subtitle: "5L", image: "/textures/reference-product.png" },
        { title: "Limpador de Alta Performance", subtitle: "5L", image: "/textures/reference-product.png" }
    ]

    return (
        <section id="catalog" className="relative py-40 bg-[#080a09]">
            <div className="max-w-7xl mx-auto px-8 space-y-32">
                <div className="space-y-6 mb-12">
                    <div className="text-center space-y-6">
                        <h2 className="text-impact !text-4xl md:!text-7xl">
                            Soluções Químicas <span className="text-neon">para Limpeza</span>
                        </h2>
                        <div className="h-1 w-32 bg-brand-green/20 mx-auto rounded-full" />
                    </div>

                    {/* Mobile Swipe Hint */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.4 }}
                        className="text-[10px] text-brand-green font-black uppercase tracking-[0.4em] text-center md:hidden"
                    >
                        Arraste para o lado para ver mais
                    </motion.p>
                </div>

                {/* Grid on Desktop, Horizontal Scroll on Mobile */}
                <div className="flex md:grid md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 overflow-x-auto md:overflow-visible pb-12 md:pb-0 snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
                    {products.map((p, i) => (
                        <div key={i} className="min-w-[85vw] md:min-w-0 snap-center">
                            <ProductCard {...p} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
