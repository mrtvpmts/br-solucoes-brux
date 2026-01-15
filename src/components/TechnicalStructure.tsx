'use client'

import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import TechnicalProductModal from './TechnicalProductModal'

interface ProductFamily {
    sector: string
    title: string
    products: Array<{
        name: string
        description: string
    }>
}

const productFamilies: ProductFamily[] = [
    {
        sector: "01",
        title: "COZINHAS PROFISSIONAIS E GASTRONOMIA",
        products: [
            { name: "BRUX DESENGORD", description: "Desengordurante alcalino para remoção de gorduras carbonizadas em chapas, fornos e coifas." },
            { name: "BRUX LOUÇA CONC", description: "Detergente neutro concentrado de alto rendimento para pias e utensílios." },
            { name: "BRUX VEGETAL", description: "Sanitizante para hortifrúti e superfícies de manipulação (Conformidade ANVISA)." },
            { name: "BRUX MULTIUSO", description: "Limpador de superfícies para área de atendimento (não deixa rastro)." },
            { name: "BRUX VIDROS", description: "Limpador com brilho instantâneo para vitrines e divisórias." },
            { name: "BRUX ODOR STOP", description: "Neutralizador químico de odores para ralos e descartes." },
            { name: "BRUX FOAM SOAP", description: "Sabonete espuma de alta performance para áreas de higienização." },
            { name: "BRUX CLORO GEL", description: "Higienização profunda com cloro ativo para vasos e pisos." },
        ]
    },
    {
        sector: "02",
        title: "HOSPITALAR E SAÚDE",
        products: [
            { name: "BRUX QUATERNÁRIO", description: "Desinfetante de 5ª Geração. Amplo espectro bactericida para superfícies em áreas críticas." },
            { name: "BRUX ÁLCOOL 70", description: "Antissepsia rápida para bancadas e mobiliário clínico." },
            { name: "BRUX ENZIMÁTICO", description: "Detergente para pré-lavagem de instrumentos (remoção de resíduos orgânicos)." },
            { name: "BRUX FLOOR NEUTRO", description: "Limpador de pisos que mantém a proteção sem tornar a superfície escorregadia." },
            { name: "BRUX ÁLCOOL GEL", description: "Higienização de mãos para áreas comuns e totens." },
            { name: "BRUX SANIT. HOSP", description: "Desinfetante específico para louças sanitárias de uso médico." },
            { name: "BRUX DESINCRUST", description: "Remoção de resíduos minerais e incrustações em áreas de saúde." },
        ]
    },
    {
        sector: "03",
        title: "CONDOMÍNIOS E HOTELARIA",
        products: [
            { name: "BRUX PEDRA/PISO", description: "Limpeza pesada de calçadas, pedras rústicas e pós-obra." },
            { name: "BRUX DESENGRAX", description: "Removedor de óleos e graxas para garagens e oficinas." },
            { name: "BRUX PERFUMADO", description: "Limpador com fragrância de alta fixação para halls e elevadores." },
            { name: "BRUX CERA ACRIL", description: "Impermeabilizante e protetor de brilho para pisos de pedra e madeira." },
            { name: "BRUX TEXTIL", description: "Limpador técnico para estofados, cortinas e carpetes." },
            { name: "BRUX ANTI-LIMBO", description: "Eliminador de fungos e mofo para áreas úmidas e saunas." },
            { name: "BRUX SABÃO LÍQ", description: "Higiene básica e perfumação para lavabos sociais." },
        ]
    },
    {
        sector: "04",
        title: "INDÚSTRIA E LOGÍSTICA",
        products: [
            { name: "BRUX POWER IND", description: "Desengraxante biodegradável de alta potência para chão de fábrica." },
            { name: "BRUX SOLVENTE B", description: "Limpeza técnica de peças, engrenagens e motores." },
            { name: "BRUX ALUMÍNIO", description: "Detergente ativado para limpeza de baús, rodas e chassis." },
            { name: "BRUX PASTA MÃOS", description: "Desengraxante dermoprotetor para remoção de graxas pesadas na pele." },
            { name: "BRUX HEAVY DUTY", description: "Detergente de alta carga para vestiários e refeitórios industriais." },
            { name: "BRUX CLORO CONC", description: "Desinfecção de alta concentração para docas e áreas de resíduos." },
        ]
    },
    {
        sector: "05",
        title: "ESCOLAS E ACADEMIAS",
        products: [
            { name: "BRUX KIDS SANIT", description: "Desinfetante hipoalergênico e sem perfume para brinquedos e salas." },
            { name: "BRUX SPORTS", description: "Higienizador para tatames e equipamentos (combate odores de transpiração)." },
            { name: "BRUX MULTI-DRENO", description: "Higienizador de ralos que previne odores e entupimentos em vestiários." },
        ]
    },
]

export default function TechnicalStructure() {
    const [expandedSector, setExpandedSector] = useState<string | null>(null)
    const [selectedProduct, setSelectedProduct] = useState<{ name: string, description: string, family: string, sector: string } | null>(null)

    return (
        <section id="technical-structure" className="relative py-16 md:py-24 bg-[#060807] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#060807] to-black" />
            <div className="noise-overlay opacity-5" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center space-y-6 mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-green/60 block mb-4">
                            Conformidade ANVISA • Licitações
                        </span>
                        <h2 className="text-3xl md:text-6xl font-black uppercase italic tracking-tighter text-white">
                            Estrutura Técnica por
                            <span className="text-brand-green block mt-2">Família de Produtos</span>
                        </h2>
                    </motion.div>
                    <p className="text-white/40 max-w-3xl mx-auto text-sm md:text-base">
                        Classificação técnica seguindo parâmetros legais de rotulagem e notificações da ANVISA para processos licitatórios.
                    </p>
                </div>

                {/* Product Families */}
                <div className="space-y-4">
                    {productFamilies.map((family, index) => (
                        <motion.div
                            key={family.sector}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02] backdrop-blur-sm hover:border-brand-green/30 transition-all"
                        >
                            {/* Sector Header */}
                            <button
                                onClick={() => setExpandedSector(expandedSector === family.sector ? null : family.sector)}
                                className="w-full p-6 md:p-8 flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors group"
                            >
                                <div className="flex items-center gap-4 md:gap-6 text-left">
                                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-brand-green font-black text-xl md:text-2xl font-mono">
                                            {family.sector}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-white/40 text-[10px] font-black uppercase tracking-widest block mb-1">
                                            Família Setor {family.sector}
                                        </span>
                                        <h3 className="text-white font-black text-base md:text-xl uppercase tracking-tight">
                                            {family.title}
                                        </h3>
                                    </div>
                                </div>
                                <div className="text-white/30 group-hover:text-brand-green transition-colors flex-shrink-0">
                                    {expandedSector === family.sector ? (
                                        <ChevronUp size={24} />
                                    ) : (
                                        <ChevronDown size={24} />
                                    )}
                                </div>
                            </button>

                            {/* Products List */}
                            {expandedSector === family.sector && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="border-t border-white/10"
                                >
                                    <div className="p-6 md:p-8 space-y-4">
                                        {family.products.map((product, idx) => (
                                            <div
                                                key={idx}
                                                onClick={() => setSelectedProduct({
                                                    name: product.name,
                                                    description: product.description,
                                                    family: family.title,
                                                    sector: family.sector
                                                })}
                                                className="flex gap-4 p-4 rounded-xl bg-white/[0.01] border border-white/5 hover:border-brand-green/20 hover:bg-white/[0.02] transition-all group cursor-pointer"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-brand-green/40 mt-2 flex-shrink-0 group-hover:bg-brand-green transition-colors" />
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-brand-green font-black text-sm md:text-base uppercase tracking-tight mb-1">
                                                        {product.name}
                                                    </h4>
                                                    <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                                                        {product.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Technical Notice */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 p-6 md:p-8 rounded-2xl bg-brand-green/5 border border-brand-green/20"
                >
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                            <span className="text-brand-green text-xl">⚠️</span>
                        </div>
                        <div className="flex-1">
                            <h4 className="text-brand-green font-black text-sm md:text-base uppercase tracking-wide mb-2">
                                Aviso Técnico e Comercial
                            </h4>
                            <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                                Consulte nossa equipe técnica para protocolos de diluição e treinamento de sua equipe de limpeza.
                                Atendemos sob demanda com faturamento para empresas (CNPJ) e licitações em conformidade com as normas da ANVISA.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Technical Product Modal */}
                <TechnicalProductModal
                    product={selectedProduct}
                    isOpen={!!selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            </div>
        </section>
    )
}
