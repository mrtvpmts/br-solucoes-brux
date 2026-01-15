import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Shield, AlertTriangle, Droplet, Beaker, Clock, ThermometerSun } from 'lucide-react'

interface TechnicalProduct {
    name: string
    description: string
    family: string
    sector: string
}

interface TechnicalProductModalProps {
    product: TechnicalProduct | null
    isOpen: boolean
    onClose: () => void
}

export default function TechnicalProductModal({ product, isOpen, onClose }: TechnicalProductModalProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [])

    if (!mounted || !product) return null

    // Dados técnicos simulados baseados no tipo de produto
    const getTechnicalData = (productName: string) => {
        // Dados genéricos que podem ser customizados por produto
        return {
            composition: "Tensoativos aniônicos e não-iônicos, sequestrantes, alcalinizantes, corantes e fragrância.",
            dilution: "1:10 a 1:50 (conforme aplicação)",
            ph: "11.5 - 13.0 (alcalino)",
            density: "1.02 - 1.05 g/cm³",
            actionTime: "5-10 minutos",
            temperature: "Ambiente (15°C - 30°C)",
            storage: "Local fresco e seco, protegido da luz solar",
            validity: "24 meses a partir da fabricação",
            precautions: [
                "Usar luvas de proteção durante manuseio",
                "Evitar contato com olhos e mucosas",
                "Manter fora do alcance de crianças",
                "Não misturar com outros produtos químicos",
                "Utilizar em área ventilada"
            ],
            firstAid: [
                "Olhos: Lavar com água corrente por 15 minutos",
                "Pele: Lavar com água e sabão neutro",
                "Ingestão: Não provocar vômito, procurar atendimento médico",
                "Inalação: Remover para local arejado"
            ],
            applications: [
                "Limpeza de superfícies industriais",
                "Remoção de gorduras e resíduos",
                "Higienização de equipamentos",
                "Manutenção de áreas críticas"
            ]
        }
    }

    const data = getTechnicalData(product.name)

    const modalContent = (
        <AnimatePresence>
            {isOpen && (
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
                        className="relative w-full max-w-5xl bg-[#0b0f0d] border border-white/10 rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(57,255,20,0.1)] max-h-[90vh] flex flex-col"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2 md:p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-white/50 hover:text-white transition-all group"
                        >
                            <X size={20} className="group-hover:rotate-90 transition-transform duration-300 md:w-6 md:h-6" />
                        </button>

                        {/* Header */}
                        <div className="p-6 md:p-10 border-b border-white/10 bg-gradient-to-b from-brand-green/5 to-transparent">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center flex-shrink-0">
                                    <span className="text-brand-green font-black text-xl md:text-2xl font-mono">
                                        {product.sector}
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <span className="text-white/40 text-[10px] font-black uppercase tracking-widest block mb-2">
                                        {product.family}
                                    </span>
                                    <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter text-white mb-2">
                                        {product.name}
                                    </h2>
                                    <p className="text-white/60 text-sm md:text-base leading-relaxed">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-10 space-y-8">
                            {/* Composição */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Beaker className="text-brand-green" size={20} />
                                    <h3 className="text-white font-black uppercase tracking-wide text-sm md:text-base">
                                        Composição Química
                                    </h3>
                                </div>
                                <p className="text-white/70 text-sm leading-relaxed pl-8">
                                    {data.composition}
                                </p>
                            </div>

                            {/* Especificações Técnicas */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Shield className="text-brand-green" size={20} />
                                    <h3 className="text-white font-black uppercase tracking-wide text-sm md:text-base">
                                        Especificações Técnicas
                                    </h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-8">
                                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Droplet size={16} className="text-brand-green/60" />
                                            <span className="text-white/40 text-xs font-bold uppercase">Diluição</span>
                                        </div>
                                        <span className="text-white font-bold text-sm">{data.dilution}</span>
                                    </div>
                                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Beaker size={16} className="text-brand-green/60" />
                                            <span className="text-white/40 text-xs font-bold uppercase">pH</span>
                                        </div>
                                        <span className="text-white font-bold text-sm">{data.ph}</span>
                                    </div>
                                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Clock size={16} className="text-brand-green/60" />
                                            <span className="text-white/40 text-xs font-bold uppercase">Tempo de Ação</span>
                                        </div>
                                        <span className="text-white font-bold text-sm">{data.actionTime}</span>
                                    </div>
                                    <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <ThermometerSun size={16} className="text-brand-green/60" />
                                            <span className="text-white/40 text-xs font-bold uppercase">Temperatura</span>
                                        </div>
                                        <span className="text-white font-bold text-sm">{data.temperature}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Aplicações */}
                            <div className="space-y-4">
                                <h3 className="text-white font-black uppercase tracking-wide text-sm md:text-base">
                                    Aplicações Recomendadas
                                </h3>
                                <div className="space-y-2 pl-8">
                                    {data.applications.map((app, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 flex-shrink-0" />
                                            <span className="text-white/70 text-sm">{app}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Precauções */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <AlertTriangle className="text-yellow-500" size={20} />
                                    <h3 className="text-white font-black uppercase tracking-wide text-sm md:text-base">
                                        Precauções de Segurança
                                    </h3>
                                </div>
                                <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-4 space-y-2">
                                    {data.precautions.map((precaution, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <span className="text-yellow-500 font-bold flex-shrink-0">⚠</span>
                                            <span className="text-white/70 text-sm">{precaution}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Primeiros Socorros */}
                            <div className="space-y-4">
                                <h3 className="text-white font-black uppercase tracking-wide text-sm md:text-base">
                                    Primeiros Socorros
                                </h3>
                                <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4 space-y-3">
                                    {data.firstAid.map((aid, idx) => (
                                        <div key={idx} className="text-white/70 text-sm">
                                            <span className="text-red-400 font-bold">• </span>
                                            {aid}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Armazenamento */}
                            <div className="space-y-4">
                                <h3 className="text-white font-black uppercase tracking-wide text-sm md:text-base">
                                    Armazenamento e Validade
                                </h3>
                                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 space-y-2">
                                    <div className="text-white/70 text-sm">
                                        <span className="text-brand-green font-bold">Condições: </span>
                                        {data.storage}
                                    </div>
                                    <div className="text-white/70 text-sm">
                                        <span className="text-brand-green font-bold">Validade: </span>
                                        {data.validity}
                                    </div>
                                </div>
                            </div>

                            {/* Conformidade */}
                            <div className="bg-brand-green/5 border border-brand-green/20 rounded-xl p-6 text-center">
                                <Shield className="text-brand-green mx-auto mb-3" size={32} />
                                <h4 className="text-brand-green font-black uppercase tracking-wide text-sm mb-2">
                                    Conformidade ANVISA
                                </h4>
                                <p className="text-white/60 text-xs">
                                    Produto notificado e em conformidade com as normas da ANVISA para uso profissional.
                                </p>
                            </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="p-6 md:p-8 border-t border-white/10 bg-[#0b0f0d] flex gap-4">
                            <button className="flex-1 btn-stitch py-4 text-sm uppercase font-black">
                                Baixar Ficha Técnica (PDF)
                            </button>
                            <button className="flex-1 btn-stitch btn-stitch-primary py-4 text-sm uppercase font-black">
                                Solicitar Orçamento
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )

    return createPortal(modalContent, document.body)
}
