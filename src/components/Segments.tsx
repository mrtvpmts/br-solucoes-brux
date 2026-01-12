'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Building2, Hotel, Utensils, Store, Factory, Building, X, Zap, Shield, Droplets } from 'lucide-react'

export default function Segments() {
    const [selectedSegment, setSelectedSegment] = useState<any>(null)

    const segments = [
        {
            title: "Condomínios",
            icon: <Building size={48} />,
            desc: "Residenciais e comerciais com alta circulação.",
            details: {
                focus: "Higiene Vertical e Áreas Comuns",
                protocol: "BRUX_CONDO_v4",
                specs: ["Limpadores Neutros de Alto Rendimento", "Tratamento de Pisos de Pedras", "Sanitização de Elevadores e Halls"],
                tech: "pH Balanceado / Zero Resíduos"
            }
        },
        {
            title: "Hotéis",
            icon: <Hotel size={48} />,
            desc: "Rede hoteleira que exige padrão de excelência.",
            details: {
                focus: "Experiência do Hóspede & Higiene Premium",
                protocol: "HOSPITALITY_SAFE",
                specs: ["Odorizadores Premium de Longa Duração", "Desinfetantes Hospitalares Inodoros", "Lavanderia Interna de Alta Performance"],
                tech: "Fragrância Micro-encapsulada"
            }
        },
        {
            title: "Restaurantes",
            icon: <Utensils size={48} />,
            desc: "Lanchonetes e áreas de manipulação de alimentos.",
            details: {
                focus: "Segurança Alimentar & Desengorduramento",
                protocol: "FOOD_GRADE_SAFE",
                specs: ["Desengraxantes Alcalinos Alimentares", "Detergentes Clorados de Ação Rápida", "Sanitizantes de Contato Direto"],
                tech: "Certificação Grau Alimentar"
            }
        },
        {
            title: "Comércios",
            icon: <Store size={48} />,
            desc: "Lojas e estabelecimentos de atendimento ao público.",
            details: {
                focus: "Estética e Conservação Diária",
                protocol: "RETAIL_SHINE",
                specs: ["Limpa-Vidros Anti-Embaçante", "Restauradores de Brilho Instantâneo", "Multiusos Concentrados"],
                tech: "Secagem Ultra-Rápida"
            }
        },
        {
            title: "Indústrias",
            icon: <Factory size={48} />,
            desc: "Fábricas, galpões e ambientes de grande porte.",
            details: {
                focus: "Pesados & Processos Produtivos",
                protocol: "HEAVY_DUTY_ALPHA",
                specs: ["Desengraxantes à base de Água", "Removedores de Óleos e Graxas", "Limpadores de Máquinas Pesadas"],
                tech: "Solventes Ecológicos Base Água"
            }
        },
        {
            title: "Ambientes Corporativos",
            icon: <Building2 size={48} />,
            desc: "Escritórios e espaços empresariais diversos.",
            details: {
                focus: "Qualidade do Ar & Ergonomia de Limpeza",
                protocol: "CORP_HEALTH_S2",
                specs: ["Limpeza de Estofados e Carpetes", "Higienização de Ar-Condicionado", "Desinfecção de Mobiliário Ergonômico"],
                tech: "Ação Bactericida Prolongada"
            }
        }
    ]

    return (
        <section id="segments" className="relative py-40 bg-[#060807] overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 relative z-10">

                <div className="flex flex-col items-center mb-32 space-y-6">
                    <h2 className="text-impact !text-4xl md:!text-8xl leading-none">
                        Excelência em <br />
                        <span className="text-neon block mt-4">Cada Segmento</span>
                    </h2>
                    <p className="text-white/40 font-black uppercase tracking-[0.4em] text-xs text-center">
                        Segmentos Atendidos pela Engenharia Brux
                    </p>
                    <div className="h-1 w-32 bg-brand-green/20 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {segments.map((s, i) => (
                        <motion.div
                            key={i}
                            layoutId={`segment-${i}`}
                            onClick={() => setSelectedSegment({ ...s, id: i })}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="industrial-card group flex flex-col gap-8 h-full cursor-pointer hover:border-brand-green/40 transition-colors"
                        >
                            <div className="text-brand-green/40 group-hover:text-brand-green group-hover:drop-shadow-[0_0_20px_#39FF14] transition-all duration-500">
                                {s.icon}
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-black uppercase text-white tracking-widest">{s.title}</h3>
                                <p className="text-white/50 font-medium leading-relaxed">{s.desc}</p>
                            </div>

                            <div className="mt-auto pt-8 border-t border-white/5 flex justify-between items-center opacity-20 group-hover:opacity-100 transition-opacity">
                                <span className="text-[8px] font-black uppercase tracking-widest text-brand-green">Ver Protocolo {s.details.protocol}</span>
                                <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedSegment && (
                    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedSegment(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
                        />

                        <motion.div
                            layoutId={`segment-${selectedSegment.id}`}
                            className="relative w-full max-w-2xl bg-[#0b0f0d] border border-white/10 rounded-[40px] p-8 md:p-12 overflow-hidden shadow-[0_0_100px_rgba(57,255,20,0.1)]"
                        >
                            {/* Neon Background Animations */}
                            <div className="absolute inset-0 z-0 pointer-events-none">
                                <motion.div
                                    animate={{
                                        opacity: [0.05, 0.1, 0.05],
                                        scale: [1, 1.2, 1]
                                    }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="absolute -top-1/2 -left-1/2 w-full h-full bg-brand-green/20 blur-[120px] rounded-full"
                                />
                                <div className="absolute inset-0 scanlines opacity-10" />
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-12">
                                    <div className="flex gap-6 items-center">
                                        <div className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green border border-brand-green/20 shadow-[0_0_20px_rgba(57,255,20,0.2)]">
                                            {selectedSegment.icon}
                                        </div>
                                        <div>
                                            <span className="text-brand-green font-black uppercase tracking-[0.4em] text-[10px] mb-1 block">Protocolo de Limpeza Profissional</span>
                                            <h3 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tighter italic">{selectedSegment.title}</h3>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedSegment(null)}
                                        className="p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 text-white/50 hover:text-white transition-all"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                    <div className="space-y-8">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-2 text-brand-green opacity-60">
                                                <Zap size={14} />
                                                <span className="text-[10px] font-black uppercase tracking-widest">Foco Operacional</span>
                                            </div>
                                            <p className="text-white text-xl font-bold leading-tight uppercase italic">{selectedSegment.details.focus}</p>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center gap-2 text-brand-green opacity-60">
                                                <Shield size={14} />
                                                <span className="text-[10px] font-black uppercase tracking-widest">Tecnologia Aplicada</span>
                                            </div>
                                            <div className="p-4 bg-white/[0.03] border border-white/5 rounded-2xl text-brand-green font-black tracking-widest text-xs uppercase">
                                                {selectedSegment.details.tech}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex items-center gap-2 text-brand-green opacity-60">
                                            <Droplets size={14} />
                                            <span className="text-[10px] font-black uppercase tracking-widest">Soluções Especializadas</span>
                                        </div>
                                        <ul className="space-y-4">
                                            {selectedSegment.details.specs.map((spec: string, idx: number) => (
                                                <li key={idx} className="flex items-center gap-4 group">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green shadow-[0_0_10px_#39FF14]" />
                                                    <span className="text-white/70 text-sm font-medium leading-tight group-hover:text-white transition-colors">{spec}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                                    <div className="flex flex-col gap-1 opacity-30 text-[9px] font-black uppercase tracking-[0.4em] text-brand-green">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                                            <span>SYSTEM_STABILITY: SECURE</span>
                                        </div>
                                        <span>ENGENHARIA QUÍMICA BRUX // {selectedSegment.details.protocol}</span>
                                    </div>
                                    <button
                                        onClick={() => window.open('https://wa.me/551127768000?text=' + encodeURIComponent(`Olá, gostaria de falar com um especialista sobre soluções para o segmento de ${selectedSegment.title}.`), '_blank')}
                                        className="btn-stitch px-8 py-4 text-xs shadow-lg border-brand-green/20 hover:border-brand-green"
                                    >
                                        Falar com Especialista
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Extreme Detail: Industrial Metallic Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/5 blur-[120px] rounded-full" />
        </section>
    )
}
