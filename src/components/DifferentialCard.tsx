'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function DifferentialCard({
    title,
    description
}: {
    title: string
    description: string
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-brand-green/20 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden group"
        >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <CheckCircle2 size={40} className="text-brand-green" />
            </div>

            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-brand-green transition-colors">
                {title}
            </h3>
            <p className="opacity-70 text-sm leading-relaxed font-light">
                {description}
            </p>

            {/* Subtle border accent */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-green group-hover:w-full transition-all duration-500" />
        </motion.div>
    )
}
