'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqData = [
    {
        question: "Quais são os prazos de entrega?",
        answer: "Trabalhamos com entregas expressas para a Grande São Paulo em até 24h úteis. Para outras regiões, o prazo varia entre 2 a 5 dias úteis, dependendo da localização e volume do pedido."
    },
    {
        question: "Vocês fornecem fichas técnicas e FISPQ?",
        answer: "Sim! Todos os nossos produtos possuem documentação técnica completa, incluindo fichas técnicas detalhadas e FISPQ (Ficha de Informações de Segurança de Produtos Químicos) para garantir conformidade e segurança operacional."
    },
    {
        question: "Qual o pedido mínimo?",
        answer: "Não trabalhamos com pedido mínimo. Atendemos desde pequenas demandas até grandes volumes industriais, sempre com o mesmo padrão de qualidade e atendimento especializado."
    },
    {
        question: "Os produtos são concentrados?",
        answer: "Sim, nossa linha industrial é formulada com alta concentração para máxima eficiência e economia. Fornecemos orientações precisas de diluição para cada aplicação específica."
    },
    {
        question: "Fazem formulações personalizadas?",
        answer: "Absolutamente! Nossa engenharia química desenvolve soluções sob medida para necessidades específicas. Entre em contato com nosso time técnico para discutir seu projeto."
    },
    {
        question: "Como funciona o suporte técnico?",
        answer: "Oferecemos suporte técnico completo incluindo: orientação de aplicação, treinamento de equipes, visitas técnicas e acompanhamento de performance. Nossa equipe está disponível via WhatsApp, e-mail e telefone."
    },
    {
        question: "Trabalham com contratos corporativos?",
        answer: "Sim, estruturamos contratos personalizados para fornecimento contínuo com condições especiais de preço, prazo e logística para empresas e indústrias."
    },
    {
        question: "Os produtos são biodegradáveis?",
        answer: "Parte significativa da nossa linha é formulada com componentes biodegradáveis e de baixo impacto ambiental, atendendo às mais rigorosas normas ambientais. Consulte-nos sobre produtos específicos."
    }
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section id="faq" className="relative bg-[#050505] py-24 px-8 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 scanlines opacity-5 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-[200px]" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6"
                    >
                        <span className="text-[10px] font-black text-brand-green uppercase tracking-[0.4em] px-6 py-2 border border-brand-green/20 rounded-full bg-brand-green/5">
                            Perguntas Frequentes
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-impact !text-4xl md:!text-6xl mb-6"
                    >
                        Dúvidas <span className="text-neon">Técnicas</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/40 font-medium text-lg max-w-2xl mx-auto"
                    >
                        Respostas diretas sobre nossos produtos, processos e serviços
                    </motion.p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 text-left transition-all hover:border-brand-green/40 hover:bg-white/[0.04]"
                            >
                                <div className="flex items-center justify-between gap-6">
                                    <h3 className="text-white font-black text-base md:text-lg pr-4">
                                        {item.question}
                                    </h3>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-shrink-0"
                                    >
                                        <ChevronDown
                                            size={24}
                                            className={`transition-colors ${openIndex === index ? 'text-brand-green' : 'text-white/40'
                                                }`}
                                        />
                                    </motion.div>
                                </div>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-6 border-t border-white/5 mt-6">
                                                <p className="text-white/60 font-medium leading-relaxed">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-white/40 font-medium mb-6">
                        Não encontrou sua resposta?
                    </p>
                    <a
                        href="#contact"
                        className="btn-stitch btn-stitch-primary inline-flex items-center gap-3"
                    >
                        Falar com Especialista
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
