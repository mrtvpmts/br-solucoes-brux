'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Send } from 'lucide-react'
import { useState } from 'react'

interface ModalQuoteProps {
    isOpen: boolean
    onClose: () => void
    onSubmit: (data: any) => void
}

export default function ModalQuote({ isOpen, onClose, onSubmit }: ModalQuoteProps) {
    const [formData, setFormData] = useState({
        nome: '',
        empresa: '',
        email: '',
        whatsapp: '',
        segmento: 'Manufatura',
        mensagem: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit(formData)
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/80 backdrop-blur-md px-4"
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        className="bg-industrial-gray border border-white/10 p-8 rounded-sm max-w-lg w-full relative shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-white tracking-tight">Solicitar Orçamento Personalizado</h2>
                            <p className="text-white/40 text-sm mt-1">Preencha os dados abaixo e nossa equipe entrará em contato.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-1">
                                <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Nome Completo</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Nome Completo"
                                    className="w-full bg-brand-dark border border-white/10 px-4 py-3 rounded-sm text-white focus:border-brand-green/60 focus:outline-none transition-all"
                                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Nome da Empresa</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Nome da Empresa"
                                    className="w-full bg-brand-dark border border-white/10 px-4 py-3 rounded-sm text-white focus:border-brand-green/60 focus:outline-none transition-all"
                                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Email</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="Email"
                                        className="w-full bg-brand-dark border border-white/10 px-4 py-3 rounded-sm text-white focus:border-brand-green/60 focus:outline-none transition-all"
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">WhatsApp / Telefone</label>
                                    <input
                                        type="tel"
                                        required
                                        placeholder="WhatsApp / Telefone"
                                        className="w-full bg-brand-dark border border-white/10 px-4 py-3 rounded-sm text-white focus:border-brand-green/60 focus:outline-none transition-all"
                                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Segmento Industrial</label>
                                <select
                                    className="w-full bg-brand-dark border border-white/10 px-4 py-3 rounded-sm text-white appearance-none focus:border-brand-green/60 focus:outline-none transition-all"
                                    onChange={(e) => setFormData({ ...formData, segmento: e.target.value })}
                                >
                                    <option>Manufatura</option>
                                    <option>Logística</option>
                                    <option>Indústria Alimentícia</option>
                                    <option>Setor Automotivo</option>
                                </select>
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Mensagem / Interesse em Produto</label>
                                <textarea
                                    rows={4}
                                    placeholder="Descreva sua necessidade..."
                                    className="w-full bg-brand-dark border border-white/10 px-4 py-3 rounded-sm text-white focus:border-brand-green/60 focus:outline-none transition-all resize-none"
                                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-brand-green text-brand-dark font-bold py-4 rounded-sm flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(44,255,122,0.4)] transition-all mt-6"
                            >
                                Enviar Solicitação <Send size={18} />
                            </button>
                        </form>

                        <div className="text-center mt-6">
                            <a href="#" className="text-[10px] text-white/20 hover:text-white/40 underline uppercase tracking-widest">Política de Privacidade</a>
                        </div>

                        {/* Side Accent */}
                        <div className="absolute inset-y-0 left-0 w-1 bg-brand-green shadow-[0_0_15px_rgba(44,255,122,0.5)]" />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
