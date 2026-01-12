import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Menu, X } from 'lucide-react'
import { useQuote } from './QuoteContext'

export default function Header() {
    const { setOpen } = useQuote()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { label: 'Início', href: '#home' },
        { label: 'Sobre', href: '#about' },
        { label: 'Segmentos', href: '#segments' },
        { label: 'Produtos', href: '#catalog' },
        { label: 'Logística', href: '#logistics' },
        { label: 'Contato', href: '#contact' },
    ]

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#060807]/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="#home" className="flex items-center gap-1 group relative z-[60]">
                    <div className="relative w-40 md:w-52 h-14 md:h-16 -ml-4">
                        <Image
                            src="/textures/logo-brux.png"
                            alt="BRUX SOLUTIONS"
                            fill
                            className="brightness-125 saturate-150 object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-brand-green transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4 md:gap-8">
                    <div className="hidden md:flex flex-col items-end">
                        <span className="text-[8px] font-black text-brand-green/40 uppercase tracking-widest">Atendimento Oficial</span>
                        <div className="flex items-center gap-2 text-white font-black tracking-tight">
                            <Phone size={14} className="text-brand-green" />
                            <span>(11) 2776-8000</span>
                        </div>
                    </div>

                    <button
                        onClick={() => setOpen(true)}
                        className="hidden sm:flex btn-stitch btn-stitch-primary py-3 px-6 text-[10px] scale-100"
                    >
                        Solicitar Orçamento
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-white hover:text-brand-green transition-colors z-[60]"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[55] bg-[#060807] flex flex-col pt-32 px-10"
                    >
                        <div className="absolute inset-0 scanlines opacity-10 pointer-events-none" />

                        <nav className="flex flex-col gap-8">
                            {navItems.map((item, i) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-4xl font-black uppercase italic tracking-tighter text-white/20 hover:text-brand-green hover:text-white transition-all block"
                                    >
                                        <span className="text-brand-green mr-4 text-sm font-mono not-italic tracking-normal opacity-40">0{i + 1}</span>
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <div className="mt-auto mb-20 space-y-8">
                            <div className="h-[1px] w-full bg-white/5" />
                            <div className="space-y-4">
                                <span className="text-[10px] font-black text-brand-green uppercase tracking-[0.4em]">Atendimento Vendas</span>
                                <div className="text-2xl font-black text-white">(11) 2776-8000</div>
                            </div>
                            <button
                                onClick={() => {
                                    setIsMenuOpen(false)
                                    setOpen(true)
                                }}
                                className="w-full btn-stitch btn-stitch-primary py-6 text-sm"
                            >
                                Solicitar Orçamento
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
