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
            className="industrial-card group flex flex-col items-center text-center gap-4 md:gap-6 h-full p-6 pb-10 relative shadow-sm hover:shadow-xl transition-all duration-500"
        >
            <div className="space-y-1 md:space-y-2 w-full order-first">
                <h3 className="text-xl md:text-2xl font-black uppercase text-brand-dark tracking-tight leading-tight md:px-2 md:h-[2.5em] flex items-center justify-center text-center break-words hyphens-auto w-full">
                    {product.title}
                </h3>
                <div className="text-brand-green font-bold text-xs md:text-sm tracking-[0.1em] uppercase">
                    Industrial • {product.subtitle}
                </div>
            </div>

            <div className="w-full aspect-square relative bg-brand-light rounded-[24px] border border-brand-dark/5 overflow-hidden flex items-center justify-center p-6 md:p-8 group-hover:border-brand-green/20 transition-all shrink-0">
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image
                    src={product.image}
                    alt={`Galão BRUX ${product.title} 5L - Limpeza Industrial`}
                    width={280}
                    height={350}
                    className="relative z-10 transition-transform duration-700 group-hover:scale-110 object-contain"
                    style={{ filter: colorFilter }}
                />
            </div>

            {/* Packaging Badge */}
            <div className="text-[10px] text-brand-dark/40 font-bold uppercase tracking-widest">
                5L • 20L • 50L • 200L • 1000L
            </div>

            <div className="w-full space-y-3 pt-4">
                <button
                    onClick={() => onOpenDetails(product)}
                    className="btn-stitch btn-stitch-primary w-full py-4 text-xs tracking-[0.15em] border-none"
                >
                    Visualizar Detalhes
                </button>

                {/* Wholesale Link */}
                <a
                    href="https://wa.me/551127768000?text=Olá, gostaria de preços diferenciados para Atacado e Licitações."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-[10px] text-brand-green font-black hover:text-brand-green-fresh transition-colors uppercase tracking-wider"
                >
                    Cotação Corporativa
                </a>
            </div>
        </motion.div>
    )
}

// Helper to determine gallon color filter based on tags
// Base Image is Green (~100-120deg hue)
const getProductFilter = (tags: string[]) => {
    // Cozinha -> Keep Green or slight boost
    if (tags.includes("Cozinha")) return "saturate(1.2)"

    // Industrial -> Greyscale/Dark boost if needed, but base images are good
    if (tags.includes("Industrial")) return "none"

    // Hospitals -> Clean White
    if (tags.includes("Hospitalar")) return "none"

    return "none"
}

import { products } from '../data/products'

export default function Catalog() {
    const [selectedProduct, setSelectedProduct] = useState<any>(null)
    const { isCatalogOpen, setIsCatalogOpen } = useQuote()
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
        <section id="catalog" className="relative py-16 md:py-32 bg-white z-[20] overflow-hidden border-b border-brand-dark/5">
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 space-y-16 md:space-y-24">

                {/* Header */}
                <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                    <div className="text-center space-y-4 md:space-y-6">
                        <h2 className="text-impact mb-6 leading-[1.1] !font-black" style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}>
                            Soluções Químicas <br className="md:hidden" />
                            <span className="text-brand-green pr-2">
                                PARA LIMPEZA INDUSTRIAL
                            </span>
                        </h2>
                        <div className="h-1.5 w-20 md:w-32 bg-brand-green/20 mx-auto rounded-full mt-4 md:mt-8" />
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll('left')}
                        className="flex absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-30 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white border border-brand-green/10 text-brand-dark hover:bg-brand-green hover:text-white hover:scale-110 transition-all shadow-lg items-center justify-center group"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6 lg:w-7 lg:h-7 transition-transform group-hover:-translate-x-1" />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={() => scroll('right')}
                        className="flex absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-30 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white border border-brand-green/10 text-brand-dark hover:bg-brand-green hover:text-white hover:scale-110 transition-all shadow-lg items-center justify-center group"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6 lg:w-7 lg:h-7 transition-transform group-hover:translate-x-1" />
                    </button>

                    {/* Scroll View */}
                    <div
                        ref={scrollRef}
                        className={`flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 md:gap-6 -mx-6 px-6 md:mx-0 md:px-0 pb-12 items-stretch ${isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab'}`}
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none'
                        }}
                        onMouseDown={startDragging}
                        onMouseLeave={stopDragging}
                        onMouseUp={stopDragging}
                        onMouseMove={onDrag}
                    >
                        {products.map((p, i) => (
                            <div key={i} className="w-[85vw] md:w-[300px] lg:w-[350px] snap-center flex-shrink-0 pointer-events-auto select-none">
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
                </div>

                {/* View All Button */}
                <div className="flex justify-center mt-[-10px] mb-8 relative z-20">
                    <button
                        onClick={() => setIsCatalogOpen(true)}
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
                    {isCatalogOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[10000] bg-brand-dark overflow-y-auto"
                        >
                            <div className="max-w-[1800px] mx-auto p-6 md:p-12 relative min-h-screen bg-brand-light">
                                <button
                                    onClick={() => setIsCatalogOpen(false)}
                                    className="fixed top-8 right-8 z-[110] p-4 bg-white/5 hover:bg-white/10 rounded-full text-white/50 hover:text-white transition-all backdrop-blur-md border border-white/5"
                                >
                                    <span className="sr-only">Fechar</span>
                                    ✕
                                </button>

                                <div className="space-y-12">
                                    <div className="text-center space-y-4 pt-12">
                                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-brand-dark">
                                            Catálogo <span className="text-brand-green">Completo</span>
                                        </h2>
                                        <p className="text-brand-dark/60 max-w-2xl mx-auto font-medium">
                                            Explore nossa linha completa de soluções profissionais.
                                        </p>
                                    </div>

                                    {/* Filters */}
                                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 sticky top-4 z-50 py-4 backdrop-blur-md rounded-2xl bg-white/80 border border-brand-dark/5 px-6 mx-auto w-fit shadow-lg">
                                        {['Todos', 'Industrial', 'Cozinha', 'Hospitalar', 'Geral', 'Escolar'].map(cat => (
                                            <button
                                                key={cat}
                                                onClick={() => setActiveCategory(cat)}
                                                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all border ${activeCategory === cat
                                                    ? 'bg-brand-green text-white border-brand-green'
                                                    : 'bg-brand-light text-brand-dark/50 border-brand-dark/5 hover:bg-brand-dark/5 hover:text-brand-dark'
                                                    }`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Grid */}
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                                        {products
                                            .filter(p => activeCategory === 'Todos' || p.tags.some(t => t.includes(activeCategory)))
                                            .map((p, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: i * 0.05 }}
                                                    onClick={() => setSelectedProduct(p)}
                                                    className="group cursor-pointer bg-white border border-brand-dark/5 rounded-3xl p-4 md:p-6 hover:border-brand-green/30 transition-all shadow-sm hover:shadow-md"
                                                >
                                                    <div className="text-center space-y-1 mb-4">
                                                        <h3 className="text-brand-dark font-black uppercase text-sm md:text-base leading-tight">{p.title}</h3>
                                                        <div className="text-brand-green text-[9px] font-bold uppercase tracking-widest">{p.subtitle}</div>
                                                    </div>
                                                    <div className="aspect-[4/5] bg-brand-light rounded-2xl relative overflow-hidden flex items-center justify-center p-4">
                                                        <Image
                                                            src={p.image}
                                                            alt={`Galão BRUX ${p.title} 5L - Limpeza Industrial`}
                                                            width={200}
                                                            height={250}
                                                            className="object-contain transition-transform duration-500 group-hover:scale-110"
                                                            style={{ filter: getProductFilter(p.tags) }}
                                                        />
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
