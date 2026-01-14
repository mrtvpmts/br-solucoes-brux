import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
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
    const [visibleCount, setVisibleCount] = useState(9)


    return (
        <section id="catalog" className="relative py-2 md:py-8 bg-[#080a09]">
            <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12 md:space-y-20">
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 lg:gap-16">
                    {products.slice(0, visibleCount).map((p, i) => (
                        <div key={i} className="h-full">
                            <ProductCard
                                product={p}
                                onOpenDetails={(prod) => setSelectedProduct(prod)}
                                colorFilter={getProductFilter(p.tags)}
                            />
                        </div>
                    ))}
                </div>

                {visibleCount < products.length && (
                    <div className="flex justify-center pt-12">
                        <button
                            onClick={() => setVisibleCount(prev => prev + 9)}
                            className="btn-stitch px-12 py-4 text-sm font-bold tracking-widest uppercase hover:bg-brand-green/20 transition-all border border-brand-green/30 hover:border-brand-green flex items-center gap-3"
                        >
                            Carregar Mais Produtos
                            <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                        </button>
                    </div>
                )}

                <ProductDetailModal
                    product={selectedProduct}
                    isOpen={!!selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            </div>
        </section>
    )
}
