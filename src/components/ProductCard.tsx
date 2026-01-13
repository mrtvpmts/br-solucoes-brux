'use client'

import { motion } from 'framer-motion'
import { useQuote } from './QuoteContext'
import Image from 'next/image'

interface ProductCardProps {
    title: string
    subtitle: string
}

export default function ProductCard({ title, subtitle }: ProductCardProps) {
    const { setOpen } = useQuote()

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="industrial-card group flex flex-col items-center text-center space-y-6"
        >
            {/* The Product Image/3D Frame */}
            <div className="w-full aspect-square relative flex items-center justify-center p-8 bg-black/40 rounded-2xl border border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-radial-gradient(circle at 50% 50%, rgba(44, 255, 122, 0.1) 0%, transparent 80%)" />

                {/* 3D Representation Placeholder (Using high-quality thumbnail look) */}
                <Image
                    src="/textures/reference-product.png"
                    alt={title}
                    width={200}
                    height={200}
                    className="relative z-10 transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Typography */}
            <div className="space-y-2">
                <h3 className="text-base md:text-xl font-black uppercase text-white leading-tight line-clamp-2 min-h-[2.5em] flex items-center justify-center">
                    {title}
                </h3>
                <span className="text-brand-green font-bold text-sm tracking-widest">
                    {subtitle}
                </span>
            </div>

            {/* STITCH BUTTON */}
            <button
                onClick={() => setOpen(true)}
                className="btn-stitch w-full mt-4 group-hover:bg-brand-green/10 group-hover:border-brand-green group-hover:text-brand-green transition-all"
            >
                Falar com Especialista
            </button>
        </motion.div>
    )
}
