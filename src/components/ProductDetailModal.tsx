import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, FileText, Shield, Droplets, Zap, Eye, Download, Info, Minus, Plus, ShoppingCart } from 'lucide-react'
import { useQuote } from './QuoteContext'

interface ProductDetailModalProps {
    product: any
    isOpen: boolean
    onClose: () => void
}

export default function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
    const { setOpen: setQuoteOpen, addToCart } = useQuote()
    const [quantity, setQuantity] = useState(1)
    const [volume, setVolume] = useState('20L')

    if (!product) return null

    const handleAddToCart = () => {
        addToCart({
            product,
            quantity,
            volume
        })
        onClose()
        setQuoteOpen(true)
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-6xl bg-[#0b0f0d] border border-white/10 rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(57,255,20,0.1)] flex flex-col md:flex-row min-h-[600px]"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-50 p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-white/50 hover:text-white transition-all group"
                        >
                            <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                        </button>

                        {/* Left: Product Showcase (Pedestal) */}
                        <div className="md:w-1/2 relative bg-[#080a09] flex flex-col items-center justify-center p-12 overflow-hidden border-b md:border-b-0 md:border-r border-white/5">
                            <div className="absolute inset-0 scanlines opacity-10 pointer-events-none" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-green/20 blur-[120px] rounded-full animate-pulse" />

                            <div className="relative z-10 space-y-12 flex flex-col items-center">
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
                                        className="relative z-10 drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)]"
                                    />
                                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full h-12 bg-black/60 blur-xl rounded-full" />
                                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[120%] h-4 bg-brand-green/10 blur-md rounded-full" />
                                </motion.div>

                                <div className="text-center space-y-2">
                                    <span className="text-brand-green font-black uppercase tracking-[0.4em] text-[10px]">Categoria Industrial</span>
                                    <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter uppercase">{product.title}</h2>
                                </div>
                            </div>
                        </div>

                        {/* Right: Technical Specs */}
                        <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center space-y-10 relative bg-[#0b0f0d]">
                            <div className="space-y-6">
                                <div className="flex flex-wrap gap-3">
                                    {product.tags?.map((tag: string, i: number) => (
                                        <span key={i} className="px-4 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-[10px] font-black uppercase tracking-widest">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="space-y-4 pt-4">
                                    <h4 className="flex items-center gap-3 text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">
                                        <Info size={14} className="text-brand-green" /> Ficha Técnica
                                    </h4>
                                    <div className="space-y-0 border border-white/5 rounded-2xl overflow-hidden bg-white/[0.02]">
                                        {[
                                            { label: "Diluição Recomendada", value: product.specs.dilution },
                                            { label: "Nível de pH (25°C)", value: product.specs.ph },
                                            { label: "Fragrância / Aroma", value: product.specs.fragrance },
                                            { label: "Princípios Ativos", value: product.specs.actives },
                                            { label: "Tempo de Ação", value: product.specs.actionTime },
                                        ].map((spec, i) => (
                                            <div key={i} className={`flex justify-between items-center p-4 border-b border-white/5 last:border-0 ${i % 2 === 0 ? 'bg-white/[0.01]' : ''}`}>
                                                <span className="text-white/40 text-xs font-medium uppercase tracking-tight">{spec.label}</span>
                                                <span className="text-white font-bold text-sm">{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="flex items-center gap-3 text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">
                                        <Shield size={14} className="text-brand-green" /> EPI Recomendado
                                    </h4>
                                    <div className="flex gap-4">
                                        {['Luvas', 'Óculos', 'Máscara'].map((item, i) => (
                                            <div key={i} className="w-14 h-14 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/20 group hover:border-brand-green/40 hover:text-brand-green transition-all" title={item}>
                                                <Shield size={24} strokeWidth={1.5} />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 pt-6">
                                    <button className="flex items-center gap-3 text-brand-green/60 hover:text-brand-green transition-colors text-[10px] font-black uppercase tracking-widest">
                                        <Download size={14} /> Technical Data Sheet (PDF)
                                    </button>
                                </div>
                            </div>

                            {/* VOLUME & QUANTITY & ACTION */}
                            <div className="space-y-6 pt-6 border-t border-white/10">

                                {/* Volume Selector */}
                                <div className="space-y-3">
                                    <span className="text-xs font-bold text-white uppercase tracking-widest block">Volume (Embalagem):</span>
                                    <div className="flex flex-wrap gap-3">
                                        {['5L', '20L', '50L', '200L', '1000L'].map((vol) => (
                                            <button
                                                key={vol}
                                                onClick={() => setVolume(vol)}
                                                className={`px-4 py-2 rounded-xl text-sm font-bold border transition-all ${volume === vol
                                                    ? 'bg-brand-green text-black border-brand-green shadow-[0_0_15px_rgba(57,255,20,0.4)]'
                                                    : 'bg-white/5 border-white/10 text-white hover:border-brand-green/50'
                                                    }`}
                                            >
                                                {vol}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-white uppercase tracking-widest">Quantidade:</span>
                                    <div className="flex items-center gap-4 bg-white/5 rounded-xl p-2 border border-white/10">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-white transition-colors"
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <span className="font-mono text-xl font-bold text-brand-green min-w-[2ch] text-center">{quantity}</span>
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-white transition-colors"
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                </div>

                                <button
                                    onClick={handleAddToCart}
                                    className="btn-stitch btn-stitch-primary w-full py-6 text-lg uppercase tracking-widest flex items-center justify-center gap-4 group"
                                >
                                    Adicionar à Cotação
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                    >
                                        <ShoppingCart size={18} fill="currentColor" />
                                    </motion.div>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
