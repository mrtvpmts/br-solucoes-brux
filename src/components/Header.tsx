'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useQuote } from './QuoteContext'

export default function Header() {
    const { setOpen } = useQuote()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'Produtos', href: '#catalog' },
        { label: 'Indústria & Governo', href: '#government' },
        { label: 'Logística', href: '#logistics' },
        { label: 'Contato', href: '#contact' },
    ]

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-[100] bg-[#060807]/92 backdrop-blur-xl border-b border-white/5">
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

                    {/* NAVIGATION DESKTOP */}
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

                    {/* CTA + MOBILE BUTTON */}
                    <div className="flex items-center gap-4 flex-shrink-0">
                        <button
                            onClick={() => setOpen(true)}
                            className="bg-[#39FF14] hover:bg-[#32e012] text-black font-black py-2 px-4 md:py-3 md:px-6 text-[9px] md:text-[10px] uppercase tracking-wider whitespace-nowrap rounded-lg transition-all shadow-[0_0_20px_rgba(57,255,20,0.4)]"
                        >
                            <span className="sm:hidden">Especialista</span>
                            <span className="hidden sm:inline">Falar com Especialista</span>
                        </button>

                        {/* Botão Menu Mobile */}
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="lg:hidden p-2 text-white hover:text-brand-green transition-colors"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </header>

            {/* ========== MENU MOBILE FULLSCREEN ========== */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[9999] lg:hidden overflow-hidden"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
                    >
                        {/* FUNDO PRETO SÓLIDO - TELA INTEIRA */}
                        <div className="absolute inset-0 bg-[#060807]/92 backdrop-blur-2xl" />

                        {/* Botão Fechar */}
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-6 right-6 p-2 text-white hover:text-brand-green transition-colors z-[10000] cursor-pointer bg-white/5 rounded-full"
                        >
                            <X size={32} />
                        </button>

                        {/* Conteúdo do Menu */}
                        <div className="relative z-10 flex flex-col h-full max-h-screen overflow-y-auto pt-28 pb-8 px-8">
                            <nav className="flex flex-col gap-2">
                                {navItems.map((item, i) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.08 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="text-4xl font-black uppercase italic tracking-tight text-white hover:text-brand-green transition-all block py-3"
                                        >
                                            <span className="text-brand-green mr-4 text-sm font-mono not-italic">0{i + 1}</span>
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <div className="mt-16 space-y-6">
                                <div className="h-[1px] w-48 bg-white/10" />
                                <div>
                                    <span className="text-[10px] font-black text-brand-green uppercase tracking-[0.3em] block mb-2">Contato Direto</span>
                                    <div className="text-2xl font-black text-white">(11) 2776-8000</div>
                                </div>
                                <button
                                    onClick={() => {
                                        setIsMenuOpen(false)
                                        setOpen(true)
                                    }}
                                    className="btn-stitch btn-stitch-primary py-4 px-8 text-sm"
                                >
                                    Solicitar Orçamento
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
