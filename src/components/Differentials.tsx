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
        <section id="differentials" className="relative py-40 bg-[#060807] overflow-hidden px-8">
            <div className="max-w-7xl mx-auto space-y-32">

                <div className="text-center space-y-6">
                    <h2 className="text-impact !text-4xl md:!text-7xl">Diferenciais <span className="text-neon">Brux</span></h2>
                    <p className="text-white/40 font-black uppercase tracking-[0.4em] text-xs">
                        Clique em um diferencial para ver os detalhes técnicos
                    </p>
                    <div className="h-1 w-48 bg-brand-green/30 mx-auto rounded-full" />
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
                            className="flex items-center gap-6 bg-white/[0.02] border border-white/5 rounded-[32px] p-8 hover:border-brand-green/30 hover:bg-brand-green/[0.02] transition-all group cursor-pointer"
                        >
                            <div className="p-4 bg-brand-green/10 rounded-2xl text-brand-green group-hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all">
                                {d.icon}
                            </div>
                            <span className="text-sm font-black text-white uppercase tracking-widest leading-tight">
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
                                className="relative w-full max-w-xl bg-[#080b09] border border-white/10 rounded-[40px] p-8 md:p-12 overflow-hidden shadow-[0_0_80px_rgba(57,255,20,0.15)]"
                            >
                                {/* Animated industrial background */}
                                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                                    <div className="absolute top-0 right-0 p-12 text-brand-green/20">
                                        {selectedDiff.icon}
                                    </div>
                                    <div className="absolute inset-0 scanlines" />
                                </div>

                                <div className="relative z-10 space-y-8">
                                    <div className="flex justify-between items-start">
                                        <div className="p-4 bg-brand-green/10 rounded-2xl text-brand-green border border-brand-green/20 shadow-[0_0_20px_rgba(57,255,20,0.2)]">
                                            {selectedDiff.icon}
                                        </div>
                                        <button
                                            onClick={() => setSelectedDiff(null)}
                                            className="p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 text-white/50 hover:text-white transition-all"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>

                                    <div className="space-y-4">
                                        <span className="text-brand-green font-black uppercase tracking-[0.4em] text-[10px] block opacity-60">Padrão de Qualidade Brux</span>
                                        <h3 className="text-3xl md:text-4xl font-black uppercase text-white tracking-tighter italic leading-tight">
                                            {selectedDiff.title}
                                        </h3>
                                        <p className="text-brand-green/80 font-bold uppercase tracking-widest text-xs italic">
                                            {selectedDiff.details.subtitle}
                                        </p>
                                    </div>

                                    <p className="text-white/60 text-lg font-medium leading-relaxed">
                                        {selectedDiff.details.desc}
                                    </p>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-brand-green opacity-40">
                                            <Shield size={14} />
                                            <span className="text-[10px] font-black uppercase tracking-widest">Principais Benefícios</span>
                                        </div>
                                        <ul className="grid grid-cols-1 gap-3">
                                            {selectedDiff.details.benefits.map((benefit: string, idx: number) => (
                                                <li key={idx} className="flex items-center gap-3 bg-white/[0.03] border border-white/5 p-3 rounded-xl">
                                                    <div className="w-1 h-1 rounded-full bg-brand-green shadow-[0_0_8px_#39FF14]" />
                                                    <span className="text-white/80 text-sm font-bold uppercase tracking-wide">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                                        <div className="flex flex-col gap-1 opacity-40">
                                            <div className="flex items-center gap-2">
                                                <BarChart3 size={14} className="text-brand-green" />
                                                <span className="text-[9px] font-black uppercase tracking-widest text-white">Status: {selectedDiff.details.metric}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Star size={14} className="text-brand-green" />
                                                <span className="text-[9px] font-black uppercase tracking-widest text-white">Elite Standard</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => window.open('https://wa.me/551127768000?text=' + encodeURIComponent(`Olá, gostaria de falar com um especialista sobre ${selectedDiff.title}.`), '_blank')}
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

                {/* LOGISTICS SECTION (NEW) */}
                <div id="logistics" className="pt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-brand-green/5 border border-brand-green/20 rounded-[48px] p-12 md:p-20 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-12 text-brand-green/10 group-hover:text-brand-green/20 transition-colors">
                            <Truck size={240} strokeWidth={1} />
                        </div>

                        <div className="relative z-10 max-w-2xl space-y-8">
                            <div className="flex items-center gap-4 text-brand-green font-black uppercase tracking-[0.4em] text-xs">
                                <Truck size={20} />
                                <span>Logística Integrada</span>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter italic">
                                Entrega Rápida em Toda a<br />
                                <span className="text-neon">Grande São Paulo</span>
                            </h3>
                            <p className="text-white/60 text-lg md:text-xl font-medium leading-relaxed">
                                Operação logística otimizada para garantir o suprimento contínuo de sua empresa na capital e região metropolitana.
                            </p>
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pt-4">
                                <div className="flex gap-10">
                                    <div className="space-y-1">
                                        <span className="block text-white font-black uppercase tracking-widest text-xs">SP Capital</span>
                                        <span className="text-[10px] text-white/30 font-bold tracking-widest">Entrega Prioritária</span>
                                    </div>
                                    <div className="w-[1px] h-10 bg-white/10" />
                                    <div className="space-y-1">
                                        <span className="block text-white font-black uppercase tracking-widest text-xs">Região Metropolitana</span>
                                        <span className="text-[10px] text-white/30 font-bold tracking-widest">Cobertura Total</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => window.open('https://wa.me/551127768000?text=' + encodeURIComponent('Olá, gostaria de falar com um especialista sobre a logística da BRUX.'), '_blank')}
                                    className="btn-stitch px-10 py-5 text-sm"
                                >
                                    Falar com Especialista
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
