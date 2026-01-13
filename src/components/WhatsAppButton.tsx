'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, ShoppingCart, Building2, FileText } from 'lucide-react'

export default function WhatsAppButton() {
    const [isOpen, setIsOpen] = useState(false)

    const options = [
        {
            icon: <ShoppingCart size={18} />,
            label: 'Compras Varejo',
            message: 'Olá, gostaria de fazer uma compra de varejo.'
        },
        {
            icon: <Building2 size={18} />,
            label: 'Atacado e Indústria',
            message: 'Olá, gostaria de informações sobre compras em atacado e para indústria.'
        },
        {
            icon: <FileText size={18} />,
            label: 'Licitações e Governo',
            message: 'Olá, gostaria de informações sobre licitações e compras governamentais.'
        }
    ]

    const handleOptionClick = (message: string) => {
        window.open(`https://wa.me/551127768000?text=${encodeURIComponent(message)}`, '_blank')
        setIsOpen(false)
    }

    return (
        <>
            {/* Menu Options */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-32 right-6 z-[998] bg-[#0a0d0b] border border-white/10 rounded-2xl p-3 shadow-2xl min-w-[220px]"
                    >
                        <div className="text-[10px] font-black text-white/40 uppercase tracking-widest px-3 py-2 mb-1">
                            Como podemos ajudar?
                        </div>
                        {options.map((option, i) => (
                            <button
                                key={i}
                                onClick={() => handleOptionClick(option.message)}
                                className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white hover:bg-brand-green/10 hover:text-brand-green transition-all text-left"
                            >
                                <div className="text-brand-green">{option.icon}</div>
                                <span className="text-sm font-bold">{option.label}</span>
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-[999] w-16 h-16 bg-brand-green text-black rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(57,255,20,0.5)] hover:shadow-[0_0_50px_rgba(57,255,20,0.8)] transition-all"
            >
                {isOpen ? <X size={28} /> : <MessageSquare fill="currentColor" size={28} />}
            </motion.button>
        </>
    )
}
