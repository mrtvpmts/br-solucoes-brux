'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useQuote } from './QuoteContext'
import { X } from 'lucide-react'
import ContactForm from './ContactForm'

export default function QuoteModal() {
    const { open, setOpen } = useQuote()

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-0 md:p-4 overflow-hidden"
                >
                    <div className="absolute inset-0" onClick={() => setOpen(false)} />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative z-10 w-full max-w-5xl h-full md:h-auto max-h-screen md:max-h-[90vh] overflow-y-auto custom-scrollbar bg-brand-light md:rounded-[48px] shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-8 right-8 text-brand-dark/20 hover:text-brand-dark transition-colors p-3 z-50 rounded-full hover:bg-brand-dark/5 bg-white md:bg-transparent shadow-lg md:shadow-none"
                        >
                            <X size={24} />
                        </button>

                        <div className="relative">
                            <ContactForm />
                        </div>

                        {/* Industrial Accent Line */}
                        <div className="sticky bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-brand-green to-transparent z-50" />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
