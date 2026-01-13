'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface GlowCardProps {
    title: string
    subtitle: string
    image: string
    tag?: string
}

export default function GlowCard({ title, subtitle, image, tag }: GlowCardProps) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group relative bg-industrial-gray/40 border border-white/5 p-6 rounded-sm overflow-hidden backdrop-blur-md"
        >
            {/* Glow Effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-br from-brand-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

            <div className="relative z-10 flex flex-col items-center gap-6">
                {tag && (
                    <span className="self-start text-[10px] font-mono tracking-widest uppercase px-2 py-1 bg-brand-green/10 text-brand-green border border-brand-green/20">
                        {tag}
                    </span>
                )}

                <div className="relative w-48 h-64 transition-transform duration-500 group-hover:scale-110">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                    />
                    {/* Light Sweep overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-light-sweep" />
                </div>

                <div className="text-center">
                    <h3 className="text-[clamp(1rem,3vw,1.25rem)] font-bold text-white group-hover:text-brand-green transition-colors leading-tight break-words hyphens-auto">
                        {title}
                    </h3>
                    <p className="text-sm text-white/40 mt-1 uppercase tracking-tighter">
                        {subtitle}
                    </p>
                </div>

                <button className="flex items-center gap-2 text-xs font-bold text-brand-green uppercase tracking-widest border-t border-white/5 w-full pt-4 justify-center group-hover:gap-4 transition-all">
                    Falar com Especialista <ArrowRight size={14} />
                </button>
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 group-hover:border-brand-green/40 transition-colors" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/10 group-hover:border-brand-green/40 transition-colors" />
        </motion.div>
    )
}
