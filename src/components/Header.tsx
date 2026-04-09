'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { useQuote } from './QuoteContext'
import { trackEvent } from '@/lib/analytics'

export default function Header() {
    const { setOpen, cart } = useQuote()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        // Track Page View on Mount
        trackEvent('page_view')
    }, [])

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'Produtos', href: '#catalog' },
        { label: 'Setor Público', href: '#government' },
        { label: 'Logística', href: '#logistics' },
        { label: 'Dúvidas', href: '#faq' },
    ]

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-[200] bg-white/95 backdrop-blur-xl border-b border-brand-green/10">
                <div className="max-w-7xl mx-auto px-3 md:px-6 h-16 md:h-24 flex items-center justify-between gap-2 md:gap-8">

                    {/* LOGO */}
                    <div className="flex-shrink-0">
                        <a
                            href="/"
                            onClick={(e) => {
                                e.preventDefault()
                                window.location.href = '/'
                            }}
                            className="block group cursor-pointer"
                        >
                            <div className="relative w-[140px] h-[45px] md:w-[320px] md:h-[100px] transform-gpu transition-all duration-500 group-hover:scale-105">
                                <Image
                                    src="/textures/brux-logo-horizontal.png"
                                    alt="Logotipo BRUX - Soluções em Higiene Profissional e Limpeza Técnica"
                                    fill
                                    className="object-contain object-left scale-110 drop-shadow-[0_4px_20px_rgba(0,107,63,0.1)]"
                                    priority
                                />
                            </div>
                        </a>
                    </div>

                    {/* NAVIGATION DESKTOP */}
                    <nav className="hidden lg:flex flex-1 items-center justify-center gap-10">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-dark/50 hover:text-brand-green transition-all whitespace-nowrap"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA + MOBILE BUTTON */}
                    <div className="flex items-center gap-1.5 md:gap-4 flex-shrink-0">
                        <button
                            onClick={() => {
                                setOpen(true)
                                trackEvent('click_cta_header')
                            }}
                            className="hidden sm:flex bg-brand-green hover:bg-brand-green-fresh text-white font-bold py-2 px-3 md:py-3.5 md:px-6 text-[10px] uppercase tracking-wider whitespace-nowrap rounded-xl transition-all shadow-md active:scale-95"
                        >
                            <span className="sm:inline">Falar com Especialista</span>
                        </button>

                        {/* Cart Icon */}
                        <button
                            onClick={() => setOpen(true)}
                            className="relative p-2 text-brand-dark/40 hover:text-brand-green transition-colors flex-shrink-0"
                            aria-label="Carrinho de compras"
                        >
                            <ShoppingBag size={22} className="md:w-6 md:h-6" />
                            {cart.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-brand-green text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-sm">
                                    {cart.length}
                                </span>
                            )}
                        </button>

                        {/* Botão Menu Mobile */}
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="lg:hidden p-2 text-brand-dark hover:text-brand-green transition-colors flex-shrink-0"
                            aria-label="Abrir menu"
                        >
                            <Menu size={24} className="md:w-6 md:h-6" />
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
                        {/* FUNDO BRANCO SÓLIDO - TELA INTEIRA */}
                        <div className="absolute inset-0 bg-white/98 backdrop-blur-2xl" />

                        {/* Botão Fechar */}
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-6 right-6 p-2 text-brand-dark hover:text-brand-green transition-colors z-[10000] cursor-pointer bg-brand-dark/5 rounded-full"
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
                                            className="text-4xl font-black uppercase italic tracking-tight text-brand-dark hover:text-brand-green transition-all block py-3"
                                        >
                                            <span className="text-brand-green mr-4 text-sm font-mono not-italic">0{i + 1}</span>
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <div className="mt-16 space-y-6">
                                <div className="h-[1px] w-48 bg-brand-dark/10" />
                                <div>
                                    <span className="text-[10px] font-black text-brand-green uppercase tracking-[0.3em] block mb-2">Contato Direto</span>
                                    <div className="text-2xl font-black text-brand-dark">(11) 2776-8000</div>
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
