'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { useQuote } from './QuoteContext'

export default function Header() {
    const { setOpen } = useQuote()

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
                <Link href="#home" className="flex items-center gap-1 group">
                    <Image
                        src="/textures/logo-brux.png"
                        alt="BRUX"
                        width={120}
                        height={45}
                        className="brightness-125 saturate-150"
                    />
                    <span className="text-brand-green font-black text-[8px] self-start mt-2 group-hover:drop-shadow-[0_0_8px_#39FF14] transition-all">®</span>
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

                <div className="flex items-center gap-8">
                    <div className="hidden md:flex flex-col items-end">
                        <span className="text-[8px] font-black text-brand-green/40 uppercase tracking-widest">Atendimento Oficial</span>
                        <div className="flex items-center gap-2 text-white font-black tracking-tight">
                            <Phone size={14} className="text-brand-green" />
                            <span>(11) 2776-8000</span>
                        </div>
                    </div>

                    <button
                        onClick={() => setOpen(true)}
                        className="btn-stitch btn-stitch-primary py-3 px-6 text-[10px] scale-100"
                    >
                        Falar com Especialista
                    </button>
                </div>
            </div>
        </header>
    )
}
