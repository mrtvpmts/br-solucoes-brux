'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
    return (
        <motion.a
            href="https://wa.me/551127768000?text=Olá, gostaria de falar com um especialista sobre soluções de limpeza profissional BRUX."
            target="_blank"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[90] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] text-white group"
        >
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
            <MessageCircle size={32} fill="white" className="relative z-10" />

            {/* Tooltip */}
            <div className="absolute right-20 bg-white text-black px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
                Falar com Especialista
            </div>
        </motion.a>
    )
}
