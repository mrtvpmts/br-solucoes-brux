'use client'

import { motion } from 'framer-motion'
import { Search, PenTool, Truck } from 'lucide-react'

const steps = [
    {
        title: 'Diagnóstico',
        text: 'Análise técnica presencial ou remota para entender a sujidade e o ambiente.',
        icon: Search
    },
    {
        title: 'Indicação Técnica',
        text: 'Desenvolvemos o plano de ação com os produtos ideais para sua demanda.',
        icon: PenTool
    },
    {
        title: 'Entrega e Suporte',
        text: 'Logística ágil acompanhada de treinamento especializado para sua equipe.',
        icon: Truck
    }
]

export default function Process() {
    return (
        <section className="px-8 py-32 bg-white/[0.02] border-y border-white/5">
            <div className="max-w-6xl mx-auto space-y-20">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold">Nosso Processo de <span className="text-brand-green">Confiança</span></h2>
                    <p className="text-white/40 font-light max-w-2xl mx-auto">
                        Garantimos resultados superiores através de uma metodologia focada no seu resultado operacional.
                    </p>
                </div>

                <div className="grid gap-12 md:grid-cols-3">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: .6, delay: i * .15 }}
                            className="relative group p-6"
                        >
                            {/* Connector line for desktop */}
                            {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-10 left-[70%] w-full h-[1px] bg-gradient-to-r from-brand-green/40 to-transparent z-0" />
                            )}

                            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                                <div className="w-20 h-20 rounded-2xl bg-brand-green/10 flex items-center justify-center border border-brand-green/20 group-hover:bg-brand-green group-hover:text-black transition-all duration-500">
                                    <step.icon size={32} />
                                </div>

                                <div className="space-y-3">
                                    <div className="text-brand-green font-mono text-sm font-bold">Módulo 0{i + 1}</div>
                                    <h3 className="text-2xl font-bold">{step.title}</h3>
                                    <p className="opacity-60 text-sm leading-relaxed font-light">
                                        {step.text}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
