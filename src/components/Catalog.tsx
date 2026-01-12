import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useQuote } from './QuoteContext'
import ProductDetailModal from './ProductDetailModal'

interface ProductCardProps {
    product: any
    onOpenDetails: (product: any) => void
}

function ProductCard({ product, onOpenDetails }: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="industrial-card group flex flex-col items-center text-center space-y-8 h-full"
        >
            {/* 1:1 3D Thumbnails Frame */}
            <div className="w-full aspect-[4/5] relative bg-[#0a0a0a] rounded-[32px] border border-white/5 overflow-hidden flex items-center justify-center p-8 group-hover:border-brand-green/30 transition-all">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image
                    src={product.image}
                    alt={product.title}
                    width={240}
                    height={300}
                    className="relative z-10 transition-transform duration-700 group-hover:scale-110 group-hover:drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                />
            </div>

            <div className="space-y-3 flex-grow">
                <h3 className="text-xl md:text-2xl font-black uppercase text-white tracking-tight leading-tight px-4 h-[3em] flex items-center justify-center">
                    {product.title}
                </h3>
                <div className="text-brand-green text-sm font-bold tracking-[0.3em] uppercase">
                    Industrial • {product.subtitle}
                </div>
            </div>

            <button
                onClick={() => onOpenDetails(product)}
                className="btn-stitch w-full py-5 text-sm uppercase font-black"
            >
                Visualizar Detalhes
            </button>
        </motion.div>
    )
}

export default function Catalog() {
    const [selectedProduct, setSelectedProduct] = useState<any>(null)

    const products = [
        {
            title: "Detergente Neutro Concentrado",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v1.png",
            tags: ["Eco-Safe", "pH Neutro", "Biodegradável"],
            specs: {
                dilution: "1:20 a 1:100",
                ph: "7.0 - 7.5",
                fragrance: "Inodoro / Neutro",
                actives: "Tensoativos Aniônicos e Não-iônicos",
                actionTime: "Imediato"
            }
        },
        {
            title: "Desengraxante Industrial",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v2.png",
            tags: ["Heavy Duty", "Ação Rápida", "Remoção Pesada"],
            specs: {
                dilution: "1:10 a 1:50",
                ph: "12.0 - 13.5",
                fragrance: "Cítrico Suave",
                actives: "Tensoativos e Agentes Alcalinos",
                actionTime: "3 a 5 Minutos"
            }
        },
        {
            title: "Desincrustante Ácido",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v3.png",
            tags: ["Ultra-Power", "Pós-Obra", "Limpeza Pesada"],
            specs: {
                dilution: "1:5 a 1:20",
                ph: "1.0 - 2.0",
                fragrance: "Característico",
                actives: "Tensoativos e Ácidos Inorgânicos",
                actionTime: "2 a 10 Minutos"
            }
        },
        {
            title: "Limpador Multiuso APC",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v4.png",
            tags: ["Versátil", "Multi-Superfície", "Pronto Uso"],
            specs: {
                dilution: "Pronto Uso / 1:10",
                ph: "8.5 - 9.5",
                fragrance: "Erva Doce / Floral",
                actives: "Tensoativos e Solventes Orgânicos",
                actionTime: "30 Segundos"
            }
        },
        {
            title: "Desinfetante Hospitalar",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v5.png",
            tags: ["Grau Frama", "Bactericida", "Segurança Total"],
            specs: {
                dilution: "1:20 a 1:100",
                ph: "6.0 - 8.0",
                fragrance: "Eucalipto / Neutro",
                actives: "Quaternário de Amônia de 5ª Geração",
                actionTime: "10 Minutos"
            }
        },
        {
            title: "Cera Impermeabilizante",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v6.png",
            tags: ["Alto Brilho", "Antiderrapante", "Proteção Longa"],
            specs: {
                dilution: "Puro (Uso Direto)",
                ph: "8.0 - 9.0",
                fragrance: "Característico",
                actives: "Polímeros Acrílicos e Ceras Sintéticas",
                actionTime: "Secagem em 20 min"
            }
        }
    ]

    return (
        <section id="catalog" className="relative py-40 bg-[#080a09]">
            <div className="max-w-7xl mx-auto px-8 space-y-32">
                <div className="space-y-6 mb-12">
                    <div className="text-center space-y-6">
                        <h2 className="text-impact !text-4xl md:!text-7xl">
                            Soluções Químicas <span className="text-neon">PARA LIMPEZA</span>
                        </h2>
                        <div className="h-1 w-32 bg-brand-green/20 mx-auto rounded-full" />
                    </div>

                    {/* Mobile Swipe Hint */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.4 }}
                        className="text-[10px] text-brand-green font-black uppercase tracking-[0.4em] text-center md:hidden"
                    >
                        Arraste para o lado para ver mais
                    </motion.p>
                </div>

                {/* Grid on Desktop, Horizontal Scroll on Mobile */}
                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 overflow-x-auto md:overflow-visible pb-12 md:pb-0 snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
                    {products.map((p, i) => (
                        <div key={i} className="min-w-[85vw] md:min-w-0 snap-center">
                            <ProductCard
                                product={p}
                                onOpenDetails={(prod) => setSelectedProduct(prod)}
                            />
                        </div>
                    ))}
                </div>

                <ProductDetailModal
                    product={selectedProduct}
                    isOpen={!!selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            </div>
        </section>
    )
}
