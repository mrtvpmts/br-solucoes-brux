'use client'

import { motion } from 'framer-motion'
import { MessageSquare } from 'lucide-react'

export default function WhatsAppButton() {
    const handleClick = () => {
        window.open('https://wa.me/551127768000?text=Olá, gostaria de informações sobre soluções de limpeza profissional.', '_blank')
    }

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClick}
            className="fixed bottom-10 right-10 z-[999] w-16 h-16 bg-brand-green text-black rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(57,255,20,0.5)] hover:shadow-[0_0_50px_rgba(57,255,20,0.8)] transition-all"
        >
            <MessageSquare fill="currentColor" size={30} />
            <span className="absolute -top-12 right-0 bg-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl text-black shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                Falar com Especialista
            </span>
        </motion.button>
    )
}
