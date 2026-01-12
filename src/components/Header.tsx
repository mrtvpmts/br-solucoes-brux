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
        { label: 'Produtos', href: '#catalog' },
        { label: 'Segmentos', href: '#segments' },
        { label: 'Logística', href: '#logistics' },
        { label: 'Contato', href: '#contact' },
    ]

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#060807]/92 backdrop-blur-xl border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between gap-8">

                {/* LOGO */}
                <div className="flex-shrink-0">
                    <Link href="#home" className="block group">
                        <div className="relative w-[220px] h-[70px] md:w-[380px] md:h-[122px] transform-gpu transition-all duration-500 group-hover:scale-105">
                            <Image
                                src="/textures/brux-logo-horizontal.png"
                                alt="BRUX SOLUTIONS"
                                fill
                                className="object-cover object-center scale-110 drop-shadow-[0_0_40px_rgba(34,197,94,0.4)] brightness-110"
                                priority
                            />
                        </div>
                    </Link>
                </div>

                {/* NAVIGATION */}
                <nav className="hidden lg:flex flex-1 items-center justify-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-brand-green transition-all hover:tracking-[0.3em] whitespace-nowrap"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA */}
                <div className="flex items-center gap-4 flex-shrink-0">
                    <button
                        onClick={() => setOpen(true)}
                        className="btn-stitch btn-stitch-primary py-2.5 px-6 md:py-3 md:px-8 text-[9px] md:text-[10px] whitespace-nowrap"
                    >
                        <span className="sm:hidden">Orçamento</span>
                        <span className="hidden sm:inline">Solicitar Orçamento</span>
                    </button>

                    {/* Mobile Menu */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-white hover:text-brand-green transition-colors"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 z-[140] bg-black/60 backdrop-blur-sm lg:hidden"
                        />
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-[150] bg-[#060807] border-l border-white/5 flex flex-col pt-32 px-10 shadow-2xl lg:hidden"
                        >
                            <div className="absolute inset-0 scanlines opacity-10 pointer-events-none" />

                            <nav className="flex flex-col gap-6">
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
                                            className="text-3xl font-black uppercase italic tracking-tighter text-white/30 hover:text-brand-green transition-all block py-2"
                                        >
                                            <span className="text-brand-green mr-4 text-xs font-mono not-italic tracking-normal opacity-40">0{i + 1}</span>
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <div className="mt-auto mb-10 space-y-8">
                                <div className="h-[1px] w-full bg-white/5" />
                                <div className="space-y-4">
                                    <span className="text-[10px] font-black text-brand-green uppercase tracking-[0.4em]">Contato Direto</span>
                                    <div className="text-xl font-black text-white">(11) 2776-8000</div>
                                </div>
                                <button
                                    onClick={() => {
                                        setIsMenuOpen(false)
                                        setOpen(true)
                                    }}
                                    className="w-full btn-stitch btn-stitch-primary py-5 text-xs"
                                >
                                    Solicitar Orçamento
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header >
    )
}
