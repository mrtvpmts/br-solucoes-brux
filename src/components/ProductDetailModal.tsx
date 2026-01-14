import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, Shield, Info, Minus, Plus, ShoppingCart, Download } from 'lucide-react'
import { useQuote } from './QuoteContext'
import { trackEvent } from '@/lib/analytics'

interface ProductDetailModalProps {
    product: any
    isOpen: boolean
    onClose: () => void
}

export default function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
    const { setOpen: setQuoteOpen, addToCart } = useQuote()
    const [quantity, setQuantity] = useState(1)
    const [volume, setVolume] = useState('20L')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [])

    if (!mounted) return null

    // Note: detailed content removed for brevity in diff, but must be preserved. 
    // Actually, I need to provide the FULL content with Portal wrapping.

    const handleAddToCart = () => {
        addToCart({
            product,
            quantity,
            volume
        })
        trackEvent('add_to_cart', { product: product.title, volume, quantity })
        onClose()
        setQuoteOpen(true)
    }

    const modalContent = (
        <AnimatePresence>
            {isOpen && product && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 isolate">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/90 backdrop-blur-xl"
                        style={{ zIndex: -1 }}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-6xl bg-[#0b0f0d] border border-white/10 rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(57,255,20,0.1)] flex flex-col md:flex-row max-h-[90vh] md:h-auto"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2 md:p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-white/50 hover:text-white transition-all group"
                        >
                            <X size={20} className="group-hover:rotate-90 transition-transform duration-300 md:w-6 md:h-6" />
                        </button>

                        {/* Left: Product Showcase (Pedestal) */}
                        <div className="md:w-1/2 relative bg-[#080a09] flex flex-col items-center justify-center p-8 md:p-12 overflow-hidden border-b md:border-b-0 md:border-r border-white/5 min-h-[250px] md:min-h-full shrink-0">
                            <div className="absolute inset-0 scanlines opacity-10 pointer-events-none" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 md:w-80 h-60 md:h-80 bg-brand-green/20 blur-[100px] md:blur-[120px] rounded-full animate-pulse" />

                            <div className="relative z-10 space-y-6 md:space-y-12 flex flex-col items-center">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="relative"
                                >
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        width={320}
                                        height={400}
                                        className="relative z-10 drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)] object-contain h-[180px] md:h-[400px] w-auto"
                                    />
                                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full h-12 bg-black/60 blur-xl rounded-full" />
                                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[120%] h-4 bg-brand-green/10 blur-md rounded-full" />
                                </motion.div>

                                <div className="text-center space-y-2 hidden md:block">
                                    <span className="text-brand-green font-black uppercase tracking-[0.4em] text-[10px]">Categoria Industrial</span>
                                    <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter uppercase">{product.title}</h2>
                                </div>
                            </div>
                        </div>

                        {/* Right: Technical Specs & Actions */}
                        <div className="md:w-1/2 flex flex-col bg-[#0b0f0d] relative h-full overflow-hidden">
                            {/* Mobile Title (visible only on mobile) */}
                            <div className="md:hidden p-6 pb-0 text-center space-y-1 shrink-0">
                                <span className="text-brand-green font-black uppercase tracking-[0.3em] text-[9px]">Industrial</span>
                                <h2 className="text-2xl font-black text-white italic tracking-tighter uppercase leading-tight">{product.title}</h2>
                            </div>

                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-10 space-y-6 md:space-y-8">
                                <div className="space-y-6">
                                    <div className="flex flex-wrap gap-2 md:gap-3 pr-8 md:pr-12">
                                        {product.tags?.map((tag: string, i: number) => (
                                            <span key={i} className="px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-[9px] md:text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="space-y-4 pt-2 md:pt-4">
                                        <p className="text-white/70 text-xs md:text-sm leading-relaxed font-medium">
                                            {product.description}
                                        </p>

                                        <h4 className="flex items-center gap-3 text-white/40 text-[10px] font-black uppercase tracking-[0.3em] pt-2">
                                            <Info size={14} className="text-brand-green" /> Ficha Técnica
                                        </h4>
                                        <div className="space-y-0 border border-white/5 rounded-2xl overflow-hidden bg-white/[0.02]">
                                            {[
                                                { label: "Diluição", value: product.specs.dilution },
                                                { label: "pH", value: product.specs.ph },
                                                { label: "Fragrância", value: product.specs.fragrance },
                                                { label: "Ativos", value: product.specs.actives },
                                                { label: "Tempo", value: product.specs.actionTime },
                                            ].map((spec, i) => (
                                                <div key={i} className={`flex justify-between items-center p-3 md:p-4 border-b border-white/5 last:border-0 ${i % 2 === 0 ? 'bg-white/[0.01]' : ''}`}>
                                                    <span className="text-white/40 text-[10px] md:text-xs font-medium uppercase tracking-tight">{spec.label}</span>
                                                    <span className="text-white font-bold text-xs md:text-sm text-right">{spec.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="flex items-center gap-3 text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">
                                            <Shield size={14} className="text-brand-green" /> EPI Recomendado
                                        </h4>
                                        <div className="flex gap-3 md:gap-4 flex-wrap">
                                            {product.epis && product.epis.length > 0 ? (
                                                product.epis.map((epi: string, i: number) => (
                                                    <div key={i} className="flex flex-col items-center gap-2 group">
                                                        <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/20 group-hover:border-brand-green/40 group-hover:text-brand-green transition-all shadow-lg hover:shadow-brand-green/10">
                                                            <Shield size={18} className="md:w-6 md:h-6" strokeWidth={1.5} />
                                                        </div>
                                                        <span className="text-[8px] md:text-[9px] font-bold text-white/30 uppercase tracking-wider group-hover:text-white transition-colors">{epi}</span>
                                                    </div>
                                                ))
                                            ) : (
                                                <span className="text-white/20 text-xs italic pl-2 border-l-2 border-white/10">
                                                    Nenhum EPI obrigatório.
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4 pt-4 md:pt-6">
                                        <button className="flex items-center gap-3 text-brand-green/60 hover:text-brand-green transition-colors text-[10px] font-black uppercase tracking-widest">
                                            <Download size={14} /> TDS (PDF)
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Fixed Actions Footer */}
                            <div className="p-4 md:p-10 border-t border-white/10 bg-[#0b0f0d] z-20 space-y-4 md:space-y-6 shadow-[0_-20px_40px_rgba(0,0,0,0.5)] shrink-0">
                                {/* Volume Selector */}
                                <div className="space-y-2 md:space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest block">Volume:</span>
                                        <div className="flex flex-wrap gap-2">
                                            {['5L', '20L', '50L', '200L'].map((vol) => (
                                                <button
                                                    key={vol}
                                                    onClick={() => setVolume(vol)}
                                                    className={`px-2 py-1 md:px-3 md:py-1.5 rounded-lg text-[10px] md:text-xs font-bold border transition-all ${volume === vol
                                                        ? 'bg-brand-green text-black border-brand-green shadow-[0_0_15px_rgba(57,255,20,0.4)]'
                                                        : 'bg-white/5 border-white/10 text-white hover:border-brand-green/50'
                                                        }`}
                                                >
                                                    {vol}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 md:gap-4">
                                    <div className="flex items-center gap-2 md:gap-3 bg-white/5 rounded-xl p-1.5 md:p-2 border border-white/10">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg hover:bg-white/10 text-white transition-colors"
                                        >
                                            <Minus size={14} className="md:w-4 md:h-4" />
                                        </button>
                                        <span className="font-mono text-base md:text-xl font-bold text-brand-green min-w-[2ch] text-center">{quantity}</span>
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg hover:bg-white/10 text-white transition-colors"
                                        >
                                            <Plus size={14} className="md:w-4 md:h-4" />
                                        </button>
                                    </div>

                                    <button
                                        onClick={handleAddToCart}
                                        className="btn-stitch btn-stitch-primary flex-1 py-3 md:py-4 text-xs md:text-sm uppercase tracking-widest flex items-center justify-center gap-2 md:gap-3 group"
                                    >
                                        Adicionar
                                        <motion.div
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ repeat: Infinity, duration: 1.5 }}
                                        >
                                            <ShoppingCart size={16} fill="currentColor" className="md:w-[18px] md:h-[18px]" />
                                        </motion.div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )

    return createPortal(modalContent, document.body)
}
