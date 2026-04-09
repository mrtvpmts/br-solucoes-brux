'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqData = [
    {
        question: "Quais são os prazos de entrega?",
        answer: "Grande SP: 24h úteis. Outras regiões: 2 a 5 dias úteis, conforme volume."
    },
    {
        question: "Vocês fornecem fichas técnicas e FISPQ?",
        answer: "Sim. Documentação técnica completa e FISPQ disponível para toda a linha."
    },
    {
        question: "Qual o pedido mínimo?",
        answer: "Não trabalhamos com pedido mínimo. Atendemos todas as demandas."
    },
    {
        question: "Os produtos são concentrados?",
        answer: "Sim. Alta concentração para máxima diluição e economia profissional."
    },
    {
        question: "Fazem formulações personalizadas?",
        answer: "Sim. Nossa engenharia desenvolve soluções sob medida para sua necessidade."
    },
    {
        question: "Como funciona o suporte técnico?",
        answer: "Suporte completo via WhatsApp e telefone: orientação, treinamento e visitas."
    },
    {
        question: "Trabalham com contratos corporativos?",
        answer: "Sim. Logística e condições comerciais exclusivas para fornecimento contínuo."
    },
    {
        question: "Os produtos são biodegradáveis?",
        answer: "Sim. Nossa linha atende às mais rigorosas normas ambientais vigentes."
    }
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section id="faq" className="relative bg-white py-24 px-8 overflow-hidden">
            {/* Background Effects */}
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
                        className="text-5xl md:text-8xl font-black text-brand-dark italic tracking-tighter uppercase leading-none mb-6"
                    >
                        Dúvidas <span className="text-brand-green">Técnicas</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-brand-dark/60 font-medium text-lg max-w-2xl mx-auto"
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
                                className="w-full bg-brand-light border border-brand-dark/5 rounded-2xl p-6 md:p-8 text-left transition-all hover:border-brand-green/30 hover:bg-white shadow-sm"
                            >
                                <div className="flex items-center justify-between gap-6">
                                    <h3 className="text-brand-dark font-black text-base md:text-lg pr-4">
                                        {item.question}
                                    </h3>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-shrink-0"
                                    >
                                        <ChevronDown
                                            size={24}
                                            className={`transition-colors ${openIndex === index ? 'text-brand-green' : 'text-brand-dark/20'
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
                                            <div className="pt-6 border-t border-brand-dark/5 mt-6">
                                                <p className="text-brand-dark/60 font-medium leading-relaxed">
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
                    <p className="text-brand-dark/40 font-black uppercase tracking-widest text-xs mb-8">
                        Não encontrou sua resposta?
                    </p>
                    <a
                        href="#contact"
                        className="btn-stitch btn-stitch-primary inline-flex items-center gap-3 px-12 py-6 text-sm"
                    >
                        Falar com Especialista
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
