'use client'

import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
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
        <section id="technical-structure" className="relative py-24 md:py-40 overflow-hidden border-t border-brand-dark/5 z-[10]">
            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-light/50 -skew-x-12 translate-x-1/2" />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 mb-6"
                        >
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-green">
                                Conformidade ANVISA • Licitações
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-7xl font-black text-brand-dark italic tracking-tighter uppercase leading-[0.9]"
                        >
                            Estrutura Técnica por
                            <span className="text-brand-green block">Família de Produtos</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-brand-dark/50 text-lg md:text-xl font-medium max-w-sm leading-tight border-l-2 border-brand-green/20 pl-6"
                    >
                        Classificação técnica seguindo parâmetros legais de rotulagem e notificações da ANVISA para processos licitatórios.
                    </motion.p>
                </div>

                <div className="grid gap-6">
                    {productFamilies.map((family, index) => (
                        <motion.div
                            key={family.sector}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <button
                                onClick={() => setExpandedSector(expandedSector === family.sector ? null : family.sector)}
                                className="w-full p-8 md:p-10 flex items-center justify-between gap-6 bg-white border border-brand-dark/5 rounded-[24px] group-hover:border-brand-green/30 transition-all duration-500 hover:bg-brand-light shadow-sm group-hover:shadow-xl relative z-10"
                            >
                                <div className="flex items-center gap-6 md:gap-8 text-left">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <span className="text-brand-green font-black text-2xl md:text-3xl font-mono">
                                            {family.sector}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-brand-dark/30 text-[11px] font-black uppercase tracking-[0.2em] block mb-2">
                                            Portfólio Estruturado • Setor {family.sector}
                                        </span>
                                        <h3 className="text-brand-dark font-black text-xl md:text-3xl uppercase tracking-tighter italic leading-none">
                                            {family.title}
                                        </h3>
                                    </div>
                                </div>
                                <div className={`w-12 h-12 rounded-full border border-brand-dark/5 flex items-center justify-center transition-all duration-500 ${expandedSector === family.sector ? 'bg-brand-green border-brand-green text-white rotate-180' : 'bg-white text-brand-dark group-hover:border-brand-green/30 group-hover:text-brand-green'}`}>
                                    <ChevronDown size={20} />
                                </div>
                            </button>

                            {/* Products List */}
                            {expandedSector === family.sector && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-4 bg-brand-light/20 rounded-b-[24px] mt-[-32px] pt-[56px] border-x border-b border-brand-dark/5">
                                        {family.products.map((product, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: idx * 0.05 }}
                                                onClick={() => setSelectedProduct({
                                                    name: product.name,
                                                    description: product.description,
                                                    family: family.title,
                                                    sector: family.sector
                                                })}
                                                className="flex gap-5 p-6 rounded-2xl bg-white border border-brand-dark/5 hover:border-brand-green/40 hover:shadow-xl transition-all group/card cursor-pointer relative overflow-hidden"
                                            >
                                                {/* Card Accent */}
                                                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-green/5 rounded-full translate-x-12 -translate-y-12 group-hover/card:scale-150 transition-transform duration-500" />

                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2.5 flex-shrink-0" />
                                                <div className="flex-1 min-w-0 relative z-10">
                                                    <h4 className="text-brand-dark font-black text-lg md:text-xl uppercase tracking-tighter mb-1 group-hover/card:text-brand-green transition-colors">
                                                        {product.name}
                                                    </h4>
                                                    <div className="w-full h-full relative flex items-center justify-center p-4">
                                                        <Image
                                                            src={product.image || "/textures/brux-galao-green.png"}
                                                            alt={product.name}
                                                            fill
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                    <p className="text-brand-dark/60 text-sm leading-relaxed font-medium">
                                                        {product.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 p-10 rounded-[32px] bg-brand-dark border border-brand-dark relative overflow-hidden group shadow-2xl"
                >
                    {/* Decorative Background Effect */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full translate-x-24 -translate-y-24 group-hover:scale-110 transition-transform duration-700" />

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-brand-green flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-green/20">
                            <span className="text-white text-3xl font-black italic">!</span>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h4 className="text-white font-black text-xl md:text-2xl uppercase tracking-tight italic mb-3">
                                Apoio Técnico e Relacionamento Comercial
                            </h4>
                            <p className="text-white/60 text-base md:text-lg leading-snug font-medium max-w-3xl">
                                Nossos especialistas desenvolvem protocolos personalizados de diluição e higienização.
                                Atendimento especializado para indústrias, instituições de saúde e editais públicos em total conformidade ANVISA.
                            </p>
                        </div>
                        <button
                            onClick={() => window.open('https://wa.me/551127768000?text=Olá, gostaria de suporte técnico especializado da BRUX.', '_blank')}
                            className="px-8 py-4 bg-brand-green hover:bg-white text-white hover:text-brand-dark font-black uppercase text-xs tracking-widest rounded-full transition-all shadow-xl whitespace-nowrap"
                        >
                            Falar com especialista
                        </button>
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
