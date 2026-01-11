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
                Solicitar Orçamento
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
                <div className="text-center space-y-6">
                    <h2 className="text-impact !text-4xl md:!text-7xl">
                        Catálogo <span className="text-neon">Industrial</span>
                    </h2>
                    <div className="h-1 w-32 bg-brand-green/20 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {products.map((p, i) => (
                        <ProductCard key={i} {...p} />
                    ))}
                </div>
            </div>
        </section>
    )
}
