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
            className="industrial-card group flex flex-col items-center text-center gap-6 md:gap-8 h-full p-8 md:p-12"
        >
            <div className="w-full aspect-[4/5] relative bg-[#0a0a0a] rounded-[32px] border border-white/5 overflow-hidden flex items-center justify-center p-6 md:p-10 group-hover:border-brand-green/30 transition-all shrink-0 shadow-inner">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image
                    src={product.image}
                    alt={product.title}
                    width={320}
                    height={400}
                    className="relative z-10 transition-transform duration-700 group-hover:scale-110 group-hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] object-contain"
                />
            </div>

            <div className="space-y-1 md:space-y-3 flex-grow min-w-0">
                <h3 className="text-[clamp(1rem,4vw,1.5rem)] font-black uppercase text-white tracking-tight leading-tight md:px-4 md:h-[3em] flex items-center justify-center text-center break-words hyphens-auto w-full">
                    {product.title}
                </h3>
                <div className="text-brand-green text-[9px] md:text-sm font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase opacity-70">
                    Industrial • {product.subtitle}
                </div>

                {/* Tags removed for cleaner "normal" look */}
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
        <section id="catalog" className="relative py-2 md:py-8 bg-[#080a09]">
            <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12 md:space-y-20">
                <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                    <div className="text-center space-y-4 md:space-y-6">
                        <h2 className="text-impact !text-3xl md:!text-7xl leading-[1.1]">
                            Soluções Químicas <br className="md:hidden" />
                            <span className="text-brand-green">PARA LIMPEZA</span>
                        </h2>
                        <div className="h-1 w-20 md:w-32 bg-brand-green/20 mx-auto rounded-full mt-4 md:mt-8" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 lg:gap-16">
                    {products.map((p, i) => (
                        <div key={i} className="h-full">
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
