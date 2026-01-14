import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useQuote } from './QuoteContext'
import ProductDetailModal from './ProductDetailModal'

interface ProductCardProps {
    product: any
    onOpenDetails: (product: any) => void
    colorFilter?: string
}

function ProductCard({ product, onOpenDetails, colorFilter }: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="industrial-card group flex flex-col items-center text-center gap-6 md:gap-8 h-full p-8 md:p-12"
        >
            <div className="w-full aspect-[4/5] relative bg-[#0a0a0a] rounded-[32px] border border-white/5 overflow-hidden flex items-center justify-center p-6 md:p-10 group-hover:border-brand-green/30 transition-all shrink-0 shadow-inner">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image
                    src={product.image}
                    alt={product.title}
                    width={320}
                    height={400}
                    className={`relative z-10 transition-transform duration-700 group-hover:scale-110 group-hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] object-contain ${colorFilter ? '' : ''}`}
                    style={{ filter: colorFilter }}
                />
            </div>

            <div className="space-y-1 md:space-y-3 flex-grow min-w-0">
                <h3 className="text-[clamp(1rem,4vw,1.5rem)] font-black uppercase text-white tracking-tight leading-tight md:px-4 md:h-[3em] flex items-center justify-center text-center break-words hyphens-auto w-full">
                    {product.title}
                </h3>
                <div className="text-brand-green text-[9px] md:text-sm font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase opacity-70">
                    Industrial • {product.subtitle}
                </div>
            </div>

            {/* Packaging Badge */}
            <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">
                Disponível: 5L • 20L • 50L • 200L • 1000L
            </div>

            <div className="w-full space-y-3">
                <button
                    onClick={() => onOpenDetails(product)}
                    className="btn-stitch w-full py-4 text-xs uppercase font-black"
                >
                    Visualizar Detalhes
                </button>

                {/* Wholesale Link */}
                <a
                    href="https://wa.me/551127768000?text=Olá, gostaria de preços diferenciados para Atacado e Licitações."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-[10px] text-brand-green/70 hover:text-brand-green underline underline-offset-2 transition-colors"
                >
                    Preços para Atacado e Licitações – Solicite Cotação
                </a>
            </div>
        </motion.div>
    )
}

// Helper to determine gallon color filter based on tags
// Base Image is Green (~100-120deg hue)
const getProductFilter = (tags: string[]) => {
    // Base Image is Green (~120deg Hue)

    // Cozinha -> Yellow (Target ~60deg) -> Rotate -60deg
    if (tags.includes("Cozinha")) return "hue-rotate(-60deg) saturate(3) brightness(1.2)"

    // Hospitalar -> White
    if (tags.includes("Hospitalar")) return "grayscale(100%) brightness(1.5) contrast(1.1)"

    // Industrial -> Black/Dark Grey
    if (tags.includes("Industrial")) return "grayscale(100%) brightness(0.6) contrast(1.2)"

    // Escolar -> Purple (Target ~300deg) -> Rotate +180deg
    if (tags.includes("Escolar")) return "hue-rotate(180deg) saturate(1.2)"

    // Higiene -> Green (Brand Identity)
    if (tags.includes("Higiene")) return "none"

    // Geral, Pisos, etc -> Blue (Target ~240deg) -> Rotate +120deg
    if (tags.includes("Geral") || tags.includes("Condomínios") || tags.includes("Pisos") || tags.includes("Externo") || tags.includes("Tecidos")) {
        return "hue-rotate(125deg) brightness(0.9) saturate(1.2)"
    }

    return "hue-rotate(125deg) brightness(0.9) saturate(1.2)" // Default to Blue for anything else to avoid too much Green
}

import { products } from '../data/products'

export default function Catalog() {
    const [selectedProduct, setSelectedProduct] = useState<any>(null)
    const [showFullCatalog, setShowFullCatalog] = useState(false)
    const [activeCategory, setActiveCategory] = useState('Todos')
    const scrollRef = useRef<HTMLDivElement>(null)

    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef
            const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
        }
    }

    const startDragging = (e: React.MouseEvent) => {
        setIsDragging(true)
        setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0))
        setScrollLeft(scrollRef.current?.scrollLeft || 0)
    }

    const stopDragging = () => {
        setIsDragging(false)
    }

    const onDrag = (e: React.MouseEvent) => {
        if (!isDragging) return
        e.preventDefault()
        if (scrollRef.current) {
            const x = e.pageX - scrollRef.current.offsetLeft
            const walk = (x - startX) * 2 // Scroll-fast
            scrollRef.current.scrollLeft = scrollLeft - walk
        }
    }

    return (
        <section id="catalog" className="relative py-2 md:py-8 bg-[#080a09] group/carousel">
            <div className="max-w-[1600px] mx-auto px-4 md:px-8 space-y-12 md:space-y-20 relative">
                <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                    <div className="text-center space-y-4 md:space-y-6">
                        <h2 className="text-impact !text-3xl md:!text-7xl leading-[1.1]">
                            Soluções Químicas <br className="md:hidden" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-[#7FFF00] to-brand-green drop-shadow-[0_0_30px_rgba(57,255,20,0.5)] pr-2">
                                PARA LIMPEZA
                            </span>
                        </h2>
                        <div className="h-1 w-20 md:w-32 bg-gradient-to-r from-transparent via-brand-green to-transparent mx-auto rounded-full mt-4 md:mt-8 shadow-[0_0_20px_rgba(57,255,20,0.5)]" />
                    </div>
                </div>

                {/* Left Arrow */}
                <button
                    onClick={() => scroll('left')}
                    className="hidden lg:flex absolute left-4 top-[60%] -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-black/50 border border-white/10 backdrop-blur-xl items-center justify-center text-white hover:bg-brand-green/20 hover:border-brand-green/50 transition-all group opacity-0 group-hover/carousel:opacity-100 duration-500 hover:scale-110"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6 group-hover:text-brand-green transition-colors" />
                </button>

                {/* Right Arrow */}
                <button
                    onClick={() => scroll('right')}
                    className="hidden lg:flex absolute right-4 top-[60%] -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-black/50 border border-white/10 backdrop-blur-xl items-center justify-center text-white hover:bg-brand-green/20 hover:border-brand-green/50 transition-all group opacity-0 group-hover/carousel:opacity-100 duration-500 hover:scale-110"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6 group-hover:text-brand-green transition-colors" />
                </button>

                {/* Carousel */}
                <div
                    ref={scrollRef}
                    className={`flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 md:gap-8 px-4 pb-12 items-stretch ${isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab'}`}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    onMouseDown={startDragging}
                    onMouseLeave={stopDragging}
                    onMouseUp={stopDragging}
                    onMouseMove={onDrag}
                >
                    {products.slice(0, 8).map((p, i) => ( /* Show only featured in carousel initially */
                        <div key={i} className="min-w-[85vw] md:min-w-[400px] lg:min-w-[450px] snap-center flex-shrink-0 pointer-events-auto select-none">
                            <ProductCard
                                product={p}
                                onOpenDetails={(prod) => {
                                    if (!isDragging) setSelectedProduct(prod)
                                }}
                                colorFilter={getProductFilter(p.tags)}
                            />
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="flex justify-center mt-[-10px] mb-8 relative z-20">
                    <button
                        onClick={() => setShowFullCatalog(true)}
                        className="btn-stitch px-12 py-4 text-sm font-black uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-[0_0_20px_rgba(57,255,20,0.3)]"
                    >
                        Ver Catálogo Completo
                    </button>
                </div>

                <ProductDetailModal
                    product={selectedProduct}
                    isOpen={!!selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />

                {/* Full Catalog Modal */}
                <AnimatePresence>
                    {showFullCatalog && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl overflow-y-auto"
                        >
                            <div className="max-w-[1800px] mx-auto p-6 md:p-12 relative min-h-screen">
                                <button
                                    onClick={() => setShowFullCatalog(false)}
                                    className="fixed top-8 right-8 z-[110] p-4 bg-white/5 hover:bg-white/10 rounded-full text-white/50 hover:text-white transition-all backdrop-blur-md border border-white/5"
                                >
                                    <span className="sr-only">Fechar</span>
                                    ✕
                                </button>

                                <div className="space-y-12">
                                    <div className="text-center space-y-4 pt-12">
                                        <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white">
                                            Catálogo <span className="text-brand-green">Completo</span>
                                        </h2>
                                        <p className="text-white/40 max-w-2xl mx-auto">
                                            Explore nossa linha completa de soluções profissionais.
                                        </p>
                                    </div>

                                    {/* Filters */}
                                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 sticky top-4 z-50 py-4 backdrop-blur-md rounded-2xl bg-black/50 border border-white/5 px-6 mx-auto w-fit">
                                        {['Todos', 'Industrial', 'Cozinha', 'Hospitalar', 'Geral', 'Escolar'].map(cat => (
                                            <button
                                                key={cat}
                                                onClick={() => setActiveCategory(cat)}
                                                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all border ${activeCategory === cat
                                                    ? 'bg-brand-green text-black border-brand-green shadow-[0_0_20px_rgba(37,211,102,0.3)]'
                                                    : 'bg-white/5 text-white/50 border-white/5 hover:bg-white/10 hover:text-white'
                                                    }`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                                        {products
                                            .filter(p => activeCategory === 'Todos' || p.tags.some(t => t.includes(activeCategory)))
                                            .map((p, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: i * 0.05 }}
                                                    onClick={() => setSelectedProduct(p)}
                                                    className="group cursor-pointer bg-[#0b0f0d] border border-white/5 rounded-3xl p-6 hover:border-brand-green/30 transition-all hover:bg-white/[0.02]"
                                                >
                                                    <div className="aspect-[4/5] bg-black/40 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center p-4">
                                                        <Image
                                                            src={p.image}
                                                            alt={p.title}
                                                            width={200}
                                                            height={250}
                                                            className="object-contain transition-transform duration-500 group-hover:scale-110"
                                                            style={{ filter: getProductFilter(p.tags) }}
                                                        />
                                                    </div>
                                                    <div className="text-center space-y-2">
                                                        <h3 className="text-white font-black uppercase text-lg leading-tight">{p.title}</h3>
                                                        <div className="text-brand-green text-[10px] font-bold uppercase tracking-widest">{p.subtitle}</div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}
