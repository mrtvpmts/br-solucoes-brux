'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Truck, ClipboardCheck, Wallet, Headset, Zap, X, Shield, Star, BarChart3 } from 'lucide-react'

export default function Differentials() {
    const [selectedDiff, setSelectedDiff] = useState<any>(null)

    const differentials = [
        {
            title: "Atendimento Especializado",
            icon: <Headset size={32} />,
            details: {
                subtitle: "Consultoria Técnica de Elite",
                desc: "Nossa equipe não apenas vende produtos; nós resolvemos problemas complexos de limpeza industrial com suporte personalizado.",
                benefits: ["Acompanhamento Pós-Venda", "Treinamento de Equipes", "Diagnóstico Químico In Loco"],
                metric: "RESPOSTA_EM_4H"
            }
        },
        {
            title: "Produtos de Alto Rendimento",
            icon: <Zap size={32} />,
            details: {
                subtitle: "Fórmulas Ultra-Concentradas",
                desc: "Desenvolvemos produtos com densidade química superior, garantindo que cada gota entregue o máximo de poder de limpeza.",
                benefits: ["Menor Consumo por m²", "Ação Química Instantânea", "Estabilidade em Diluições Extremas"],
                metric: "PERFORMANCE_ALPHA"
            }
        },
        {
            title: "Alta Diluição",
            icon: <CheckCircle2 size={32} />,
            details: {
                subtitle: "Rendimento Exponencial",
                desc: "Nossos produtos permitem proporções de diluição que superam os padrões de mercado, reduzindo drasticamente o custo por uso.",
                benefits: ["Economia Real de Insumos", "Redução de Espaço de Estoque", "Otimização de Custos B2B"],
                metric: "YIELD_RATIO: MAX"
            }
        },
        {
            title: "Emissão de NF-e",
            icon: <ClipboardCheck size={32} />,
            details: {
                subtitle: "Gestão Fiscal Transparente",
                desc: "Processos administrativos rigorosos garantem conformidade total com a legislação fiscal para operações corporativas seguras.",
                benefits: ["Emissão Imediata", "Conformidade Tributária", "Facilidade em Auditorias"],
                metric: "COMPLIANCE: 100%"
            }
        },
        {
            title: "Faturamento",
            icon: <Wallet size={32} />,
            details: {
                subtitle: "Flexibilidade Financeira B2B",
                desc: "Entendemos o fluxo de caixa das empresas e oferecemos condições de faturamento flexíveis para parceiros recorrentes.",
                benefits: ["Prazos Customizados", "Análise de Crédito Ágil", "Boleto e Faturamento Direto"],
                metric: "FINANCIAL_AGILITY"
            }
        },
        {
            title: "Suporte Técnico",
            icon: <CheckCircle2 size={32} />,
            details: {
                subtitle: "Engenharia de Soluções",
                desc: "Acesso direto aos nossos especialistas para resolver desafios de remoção de sujidades específicas em diversos substratos.",
                benefits: ["Laudos de Eficácia", "Indicação de EPIs", "Suporte em Chamados Urgentes"],
                metric: "TECH_SUPPORT_v24"
            }
        }
    ]

    return (
        <section id="differentials" className="relative py-12 md:py-24 bg-transparent overflow-hidden px-8">
            <div className="max-w-7xl mx-auto space-y-12 md:space-y-20">

                <div className="text-center space-y-6">
                    <h2 className="text-impact !text-4xl md:!text-7xl !text-brand-dark">Diferenciais <span className="text-brand-green pr-4">Brux</span></h2>
                    <p className="text-brand-dark/40 font-black uppercase tracking-[0.4em] text-xs">
                        Excelência Química em Cada Detalhe
                    </p>
                    <div className="h-1.5 w-32 bg-brand-green/20 mx-auto rounded-full mt-8" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {differentials.map((d, i) => (
                        <motion.div
                            key={i}
                            layoutId={`diff-${i}`}
                            onClick={() => setSelectedDiff({ ...d, id: i })}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-center gap-6 bg-brand-light border border-brand-dark/5 rounded-[24px] p-8 hover:border-brand-green/30 hover:bg-white hover:shadow-xl transition-all group cursor-pointer"
                        >
                            <div className="p-4 bg-brand-green/10 rounded-2xl text-brand-green transition-all group-hover:bg-brand-green group-hover:text-white">
                                {d.icon}
                            </div>
                            <span className="text-xs md:text-sm font-black text-brand-dark uppercase tracking-widest leading-tight transition-colors group-hover:text-brand-green">
                                {d.title}
                            </span>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedDiff && (
                        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedDiff(null)}
                                className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
                            />

                            <motion.div
                                layoutId={`diff-${selectedDiff.id}`}
                                className="relative w-full max-w-xl bg-white border border-brand-dark/5 rounded-[32px] p-6 md:p-12 max-h-[85vh] overflow-y-auto shadow-2xl"
                            >
                                <div className="relative z-10 space-y-8">
                                    <div className="flex justify-between items-start">
                                        <div className="p-4 bg-brand-green/10 rounded-2xl text-brand-green">
                                            {selectedDiff.icon}
                                        </div>
                                        <button
                                            onClick={() => setSelectedDiff(null)}
                                            className="p-3 bg-brand-dark/5 hover:bg-brand-dark/10 rounded-full border border-brand-dark/5 text-brand-dark/50 hover:text-brand-dark transition-all"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>

                                    <div className="space-y-4">
                                        <span className="text-brand-green font-black uppercase tracking-[0.4em] text-[10px] block">Padrão de Qualidade Brux</span>
                                        <h3 className="text-3xl md:text-4xl font-black uppercase text-brand-dark tracking-tighter leading-tight">
                                            {selectedDiff.title}
                                        </h3>
                                        <p className="text-brand-green font-bold uppercase tracking-widest text-xs">
                                            {selectedDiff.details.subtitle}
                                        </p>
                                    </div>

                                    <p className="text-brand-dark/70 text-lg font-medium leading-relaxed">
                                        {selectedDiff.details.desc}
                                    </p>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-brand-green">
                                            <Shield size={14} />
                                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-dark/60">Principais Benefícios</span>
                                        </div>
                                        <ul className="grid grid-cols-1 gap-3">
                                            {selectedDiff.details.benefits.map((benefit: string, idx: number) => (
                                                <li key={idx} className="flex items-center gap-3 bg-brand-light border border-brand-dark/5 p-3 rounded-xl">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                                                    <span className="text-brand-dark/80 text-sm font-bold uppercase tracking-wide">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-8 border-t border-brand-dark/5 flex flex-col md:flex-row justify-between items-center gap-6">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2">
                                                <BarChart3 size={14} className="text-brand-green" />
                                                <span className="text-[9px] font-black uppercase tracking-widest text-brand-dark/50">Status: {selectedDiff.details.metric}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Star size={14} className="text-brand-green" />
                                                <span className="text-[9px] font-black uppercase tracking-widest text-brand-dark/50">Elite Standard</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => window.open('https://wa.me/551127768000?text=' + encodeURIComponent(`Olá, gostaria de falar com um especialista sobre ${selectedDiff.title}.`), '_blank')}
                                            className="btn-stitch btn-stitch-primary px-8 py-4 text-xs font-black uppercase tracking-widest"
                                        >
                                            Falar com Especialista
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    )
}
