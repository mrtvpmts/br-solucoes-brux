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
        // COZINHAS
        {
            title: "BRUX DESENGORD",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v1.png",
            tags: ["Cozinha", "Desengraxante", "Alto Poder"],
            specs: { dilution: "1:20", ph: "13.0 - 14.0", fragrance: "Característico", actives: "Alcalinos", actionTime: "5 min" }
        },
        {
            title: "BRUX LOUÇA CONC",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v2.png",
            tags: ["Cozinha", "Detergente", "Concentrado"],
            specs: { dilution: "1:40", ph: "7.0", fragrance: "Neutro", actives: "Tensoativos", actionTime: "Imediato" }
        },
        {
            title: "BRUX VEGETAL",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v3.png",
            tags: ["Cozinha", "Hortifrúti", "ANVISA"],
            specs: { dilution: "1:100", ph: "6.0 - 7.0", fragrance: "Inodoro", actives: "Dicloro", actionTime: "10 min" }
        },
        {
            title: "BRUX MULTIUSO",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v4.png",
            tags: ["Geral", "Limpeza Leve", "Sem Enxágue"],
            specs: { dilution: "Pronto Uso", ph: "8.0", fragrance: "Lavanda", actives: "Solventes", actionTime: "Imediato" }
        },
        {
            title: "BRUX VIDROS",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v5.png",
            tags: ["Geral", "Vidros", "Brilho"],
            specs: { dilution: "Pronto Uso", ph: "7.0", fragrance: "Álcool", actives: "Solventes", actionTime: "Secagem Rápida" }
        },
        {
            title: "BRUX ODOR STOP",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v6.png",
            tags: ["Geral", "Neutralizador", "Odores"],
            specs: { dilution: "Puro", ph: "6.0 - 8.0", fragrance: "Floral", actives: "Enzimas", actionTime: "Imediato" }
        },
        {
            title: "BRUX FOAM SOAP",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v1.png",
            tags: ["Higiene", "Sabonete", "Espuma"],
            specs: { dilution: "Pronto Uso", ph: "6.5 - 7.5", fragrance: "Erva Doce", actives: "Emolientes", actionTime: "Imediato" }
        },
        {
            title: "BRUX CLORO GEL",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v2.png",
            tags: ["Geral", "Cloro", "Sanitizante"],
            specs: { dilution: "Puro ou 1:10", ph: "11.0", fragrance: "Cloro", actives: "Hipoclorito", actionTime: "10 min" }
        },

        // HOSPITALAR
        {
            title: "BRUX QUATERNÁRIO",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v3.png",
            tags: ["Hospitalar", "Desinfetante", "5ª Geração"],
            specs: { dilution: "1:200", ph: "7.0 - 8.0", fragrance: "Neutro", actives: "Quaternário", actionTime: "10 min" }
        },
        {
            title: "BRUX ÁLCOOL 70",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v4.png",
            tags: ["Hospitalar", "Álcool", "Superfícies"],
            specs: { dilution: "Pronto Uso", ph: "N/A", fragrance: "Álcool", actives: "Álcool 70%", actionTime: "Imediato" }
        },
        {
            title: "BRUX ENZIMÁTICO",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v5.png",
            tags: ["Hospitalar", "Enzimático", "Cirúrgico"],
            specs: { dilution: "1:100", ph: "6.0 - 8.0", fragrance: "Neutro", actives: "Enzimas", actionTime: "15 min" }
        },
        {
            title: "BRUX FLOOR NEUTRO",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v6.png",
            tags: ["Pisos", "Neutro", "Manutenção"],
            specs: { dilution: "1:100", ph: "7.0", fragrance: "Floral Suave", actives: "Tensoativos", actionTime: "Imediato" }
        },
        {
            title: "BRUX ÁLCOOL GEL",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v1.png",
            tags: ["Higiene", "Mãos", "Antisséptico"],
            specs: { dilution: "Pronto Uso", ph: "7.0", fragrance: "Álcool", actives: "Álcool 70%", actionTime: "Imediato" }
        },
        {
            title: "BRUX SANIT. HOSP",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v2.png",
            tags: ["Hospitalar", "Sanitizante", "Alto Nível"],
            specs: { dilution: "1:100", ph: "8.0", fragrance: "Característico", actives: "Biguanida", actionTime: "10 min" }
        },
        {
            title: "BRUX DESINCRUST",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v3.png",
            tags: ["Limpeza Pesada", "Ácido", "Pós-Obra"],
            specs: { dilution: "1:10", ph: "1.0 - 2.0", fragrance: "Ácido", actives: "Ácidos Inorg.", actionTime: "5 min" }
        },

        // CONDOMÍNIOS
        {
            title: "BRUX PEDRA/PISO",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v4.png",
            tags: ["Pisos", "Externo", "Pedras"],
            specs: { dilution: "1:20", ph: "2.0 - 3.0", fragrance: "Característico", actives: "Ácidos", actionTime: "5 min" }
        },
        {
            title: "BRUX DESENGRAX",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v5.png",
            tags: ["Pisos", "Garagem", "Óleos"],
            specs: { dilution: "1:20", ph: "12.0", fragrance: "Pinho", actives: "Alcalinos", actionTime: "10 min" }
        },
        {
            title: "BRUX PERFUMADO",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v6.png",
            tags: ["Geral", "Perfume", "Duradouro"],
            specs: { dilution: "1:50", ph: "7.0", fragrance: "Premium 24h", actives: "Essência", actionTime: "Imediato" }
        },
        {
            title: "BRUX CERA ACRIL",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v1.png",
            tags: ["Pisos", "Cera", "Impermeabilizante"],
            specs: { dilution: "Puro", ph: "8.5", fragrance: "Acrílico", actives: "Polímeros", actionTime: "30 min" }
        },
        {
            title: "BRUX TEXTIL",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v2.png",
            tags: ["Tecidos", "Estofados", "Carpetes"],
            specs: { dilution: "1:20", ph: "9.0", fragrance: "Floral", actives: "Peróxido", actionTime: "10 min" }
        },
        {
            title: "BRUX ANTI-LIMBO",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v3.png",
            tags: ["Externo", "Cloro", "Mofo"],
            specs: { dilution: "1:5", ph: "11.0", fragrance: "Cloro", actives: "Hipoclorito", actionTime: "15 min" }
        },
        {
            title: "BRUX SABÃO LÍQ",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v4.png",
            tags: ["Higiene", "Mãos", "Perolado"],
            specs: { dilution: "Pronto Uso", ph: "7.0", fragrance: "Erva Doce", actives: "Emolientes", actionTime: "Imediato" }
        },

        // INDÚSTRIA
        {
            title: "BRUX POWER IND",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v5.png",
            tags: ["Industrial", "Pesado", "Biodegradável"],
            specs: { dilution: "1:40", ph: "13.0", fragrance: "Característico", actives: "Solventes D", actionTime: "10 min" }
        },
        {
            title: "BRUX SOLVENTE B",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v6.png",
            tags: ["Industrial", "Peças", "Motores"],
            specs: { dilution: "Puro", ph: "N/A", fragrance: "Solvente", actives: "Hidrocarb.", actionTime: "N/A" }
        },
        {
            title: "BRUX ALUMÍNIO",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v1.png",
            tags: ["Industrial", "Ativado", "Baús"],
            specs: { dilution: "1:40", ph: "2.0", fragrance: "Ácido", actives: "Ácido Fluor.", actionTime: "3 min" }
        },
        {
            title: "BRUX PASTA MÃOS",
            subtitle: "Pote 3kg",
            image: "/textures/brux-galao-v2.png",
            tags: ["Industrial", "Mãos", "Esfoliante"],
            specs: { dilution: "Puro", ph: "7.5", fragrance: "Citrus", actives: "Esfoliante", actionTime: "Imediato" }
        },
        {
            title: "BRUX HEAVY DUTY",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v3.png",
            tags: ["Industrial", "Vestiários", "Bactericida"],
            specs: { dilution: "1:20", ph: "10.0", fragrance: "Pinho", actives: "Quaternário", actionTime: "10 min" }
        },
        {
            title: "BRUX CLORO CONC",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v4.png",
            tags: ["Industrial", "Desinfecção", "12%"],
            specs: { dilution: "1:100", ph: "12.0", fragrance: "Cloro Forte", actives: "Hipoclorito", actionTime: "10 min" }
        },

        // ESCOLAS
        {
            title: "BRUX KIDS SANIT",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v5.png",
            tags: ["Escolar", "Hipoalergênico", "Seguro"],
            specs: { dilution: "1:50", ph: "7.0", fragrance: "Suave Bebê", actives: "QAC 5ª Ger.", actionTime: "10 min" }
        },
        {
            title: "BRUX SPORTS",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v6.png",
            tags: ["Academia", "Tatames", "Suor"],
            specs: { dilution: "1:20", ph: "7.0", fragrance: "Mentolado", actives: "Bactericida", actionTime: "Imediato" }
        },
        {
            title: "BRUX MULTI-DRENO",
            subtitle: "5L / 20L",
            image: "/textures/brux-galao-v1.png",
            tags: ["Manutenção", "Ralos", "Desentupidor"],
            specs: { dilution: "Puro", ph: "14.0", fragrance: "Característico", actives: "Hidróxidos", actionTime: "30 min" }
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
