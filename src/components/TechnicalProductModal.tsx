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
                        className="fixed inset-0 bg-brand-dark/20 backdrop-blur-md"
                        style={{ zIndex: -1 }}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-5xl bg-white border border-brand-dark/5 rounded-[40px] overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 md:top-8 md:right-8 z-50 p-2 md:p-4 bg-brand-light hover:bg-brand-green hover:text-white rounded-full border border-brand-dark/5 text-brand-dark/40 transition-all group"
                        >
                            <X size={20} className="group-hover:rotate-90 transition-transform duration-300 md:w-6 md:h-6" />
                        </button>

                        {/* Header */}
                        <div className="p-8 md:p-14 border-b border-brand-dark/5 bg-brand-light">
                            <div className="flex items-start gap-6 md:gap-8">
                                <div className="w-16 h-16 md:w-24 md:h-24 rounded-3xl bg-brand-green flex items-center justify-center flex-shrink-0 shadow-xl shadow-brand-green/20">
                                    <span className="text-white font-black text-2xl md:text-4xl font-mono italic">
                                        {product.sector}
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <span className="text-brand-green text-[10px] font-black uppercase tracking-[0.3em] block mb-3 px-3 py-1 bg-brand-green/10 border border-brand-green/20 rounded-full w-fit">
                                        {product.family}
                                    </span>
                                    <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-brand-dark mb-3 leading-none">
                                        {product.name}
                                    </h2>
                                    <p className="text-brand-dark/50 text-base md:text-xl leading-snug font-medium max-w-2xl">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar p-8 md:p-14 space-y-12">
                            {/* Composição */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-green border border-brand-green/10">
                                        <Beaker size={20} />
                                    </div>
                                    <h3 className="text-brand-dark font-black uppercase tracking-tight text-lg md:text-xl italic">
                                        Composição Química
                                    </h3>
                                </div>
                                <p className="text-brand-dark/60 text-base md:text-lg leading-relaxed font-normal md:pl-14">
                                    {data.composition}
                                </p>
                            </div>

                            {/* Especificações Técnicas */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand-green border border-brand-green/10">
                                        <Shield size={20} />
                                    </div>
                                    <h3 className="text-brand-dark font-black uppercase tracking-tight text-lg md:text-xl italic">
                                        Especificações Técnicas
                                    </h3>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pl-0 md:pl-14">
                                    <div className="bg-brand-light border border-brand-dark/5 rounded-2xl p-6 hover:border-brand-green/30 transition-colors shadow-sm">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Droplet size={16} className="text-brand-green" />
                                            <span className="text-brand-dark/40 text-[10px] font-black uppercase tracking-wider">Diluição</span>
                                        </div>
                                        <span className="text-brand-dark font-black text-sm uppercase">{data.dilution}</span>
                                    </div>
                                    <div className="bg-brand-light border border-brand-dark/5 rounded-2xl p-6 hover:border-brand-green/30 transition-colors shadow-sm">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Beaker size={16} className="text-brand-green" />
                                            <span className="text-brand-dark/40 text-[10px] font-black uppercase tracking-wider">pH</span>
                                        </div>
                                        <span className="text-brand-dark font-black text-sm uppercase">{data.ph}</span>
                                    </div>
                                    <div className="bg-brand-light border border-brand-dark/5 rounded-2xl p-6 hover:border-brand-green/30 transition-colors shadow-sm">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Clock size={16} className="text-brand-green" />
                                            <span className="text-brand-dark/40 text-[10px] font-black uppercase tracking-wider">Ação</span>
                                        </div>
                                        <span className="text-brand-dark font-black text-sm uppercase">{data.actionTime}</span>
                                    </div>
                                    <div className="bg-brand-light border border-brand-dark/5 rounded-2xl p-6 hover:border-brand-green/30 transition-colors shadow-sm">
                                        <div className="flex items-center gap-2 mb-3">
                                            <ThermometerSun size={16} className="text-brand-green" />
                                            <span className="text-brand-dark/40 text-[10px] font-black uppercase tracking-wider">Temp.</span>
                                        </div>
                                        <span className="text-brand-dark font-black text-sm uppercase">{data.temperature}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Grid Layout for Safety and Application */}
                            <div className="grid md:grid-cols-2 gap-8 pl-0 md:pl-14">
                                {/* Aplicações */}
                                <div className="space-y-6">
                                    <h3 className="text-brand-dark font-black uppercase tracking-tight text-lg italic">
                                        Aplicações Recomendadas
                                    </h3>
                                    <div className="space-y-3">
                                        {data.applications.map((app, idx) => (
                                            <div key={idx} className="flex items-start gap-4 p-3 bg-brand-light rounded-xl border border-brand-dark/5">
                                                <div className="w-2 h-2 rounded-full bg-brand-green mt-1.5 flex-shrink-0" />
                                                <span className="text-brand-dark/70 text-sm font-bold uppercase tracking-tight">{app}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Precauções */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <AlertTriangle className="text-amber-600" size={20} />
                                        <h3 className="text-brand-dark font-black uppercase tracking-tight text-lg italic">
                                            Segurança
                                        </h3>
                                    </div>
                                    <div className="bg-amber-50/50 border border-amber-200/50 rounded-2xl p-6 space-y-4">
                                        {data.precautions.map((precaution, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <span className="text-amber-600 font-bold flex-shrink-0">•</span>
                                                <span className="text-brand-dark/80 text-xs font-bold uppercase leading-tight">{precaution}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Primeiros Socorros & Armazenamento */}
                            <div className="grid md:grid-cols-2 gap-8 pl-0 md:pl-14">
                                <div className="space-y-6">
                                    <h3 className="text-brand-dark font-black uppercase tracking-tight text-lg italic">
                                        Primeiros Socorros
                                    </h3>
                                    <div className="bg-rose-50/50 border border-rose-200/50 rounded-2xl p-6 space-y-3">
                                        {data.firstAid.map((aid, idx) => (
                                            <div key={idx} className="text-brand-dark/80 text-xs font-bold uppercase leading-tight">
                                                <span className="text-rose-500 font-black">•</span> {aid}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-brand-dark font-black uppercase tracking-tight text-lg italic">
                                        Armazenamento
                                    </h3>
                                    <div className="bg-brand-light border border-brand-dark/5 rounded-2xl p-8 space-y-6">
                                        <div>
                                            <span className="text-brand-dark/40 text-[10px] font-black uppercase block mb-1">Condições</span>
                                            <p className="text-brand-dark font-black text-sm uppercase leading-tight">{data.storage}</p>
                                        </div>
                                        <div className="pt-6 border-t border-brand-dark/5">
                                            <span className="text-brand-dark/40 text-[10px] font-black uppercase block mb-1">Validade</span>
                                            <p className="text-brand-green font-black text-sm uppercase">{data.validity}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Conformidade */}
                            <div className="bg-brand-green rounded-[32px] p-10 text-center relative overflow-hidden group shadow-2xl shadow-brand-green/10">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <Shield className="text-white mx-auto mb-4 relative z-10" size={48} />
                                <h4 className="text-white font-black uppercase tracking-[0.2em] text-lg mb-2 relative z-10 italic">
                                    Padrão Ouro de Conformidade
                                </h4>
                                <p className="text-white/80 text-xs max-w-md mx-auto relative z-10 font-bold uppercase tracking-wide leading-relaxed">
                                    Este insumo é rigorosamente testado, notificado e aprovado pela ANVISA para protocolos de higienização profissional.
                                </p>
                            </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="p-8 md:p-14 border-t border-brand-dark/5 bg-brand-light flex flex-col sm:flex-row gap-6">
                            <button
                                onClick={() => window.open(`https://wa.me/551127768000?text=Olá, gostaria de receber a ficha técnica (PDF) do produto: ${product.name}`, '_blank')}
                                className="flex-1 px-8 py-5 border-2 border-brand-dark/20 text-brand-dark/60 hover:border-brand-dark hover:text-brand-dark font-black uppercase text-xs tracking-[0.2em] rounded-full transition-all"
                            >
                                Ficha Técnica (PDF)
                            </button>
                            <button
                                onClick={() => window.open(`https://wa.me/551127768000?text=Olá, gostaria de solicitar um orçamento para o produto técnico: ${product.name}`, '_blank')}
                                className="flex-1 px-10 py-5 bg-brand-green hover:bg-brand-dark text-white font-black uppercase text-xs tracking-[0.2em] rounded-full transition-all shadow-xl shadow-brand-green/20"
                            >
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
