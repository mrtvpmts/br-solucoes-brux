'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useQuote } from './QuoteContext'
import { X, CheckCircle, Send, Loader2, Phone } from 'lucide-react'

export default function QuoteModal() {
    const { open, setOpen, success, setSuccess } = useQuote()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        whatsapp: '',
        segment: '',
        message: ''
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!formData.name || !formData.email || !formData.company || !formData.segment) {
            alert('Por favor, preencha os campos obrigatórios.')
            return
        }

        setIsSubmitting(true)
        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                // Formatting WhatsApp message
                const waMessage = encodeURIComponent(
                    `*NOVO ORÇAMENTO - BRUX*\n\n` +
                    `*Nome:* ${formData.name}\n` +
                    `*Empresa:* ${formData.company}\n` +
                    `*E-mail:* ${formData.email}\n` +
                    `*WhatsApp:* ${formData.whatsapp || 'Não informado'}\n` +
                    `*Segmento:* ${formData.segment}\n` +
                    `*Demanda:* ${formData.message || 'Sem mensagem adicional'}`
                )

                // Open WhatsApp in a new tab
                window.open(`https://wa.me/551127768000?text=${waMessage}`, '_blank')

                setSuccess(true)
                setFormData({ name: '', company: '', email: '', whatsapp: '', segment: '', message: '' })
            } else {
                alert('Erro ao enviar solicitação. Tente novamente.')
            }
        } catch (error) {
            console.error('Error submitting form:', error)
            alert('Erro técnico ao conectar com o servidor.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[100] flex items-center justify-center p-4 px-6 overflow-hidden"
                >
                    {/* Backdrop Click to Close */}
                    <div className="absolute inset-0" onClick={() => !isSubmitting && setOpen(false)} />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative z-10 bg-[#0b0f0d] border border-white/10 rounded-3xl p-8 md:p-10 w-full max-w-lg shadow-[0_0_50px_rgba(44,255,122,0.15)] overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-6 right-6 text-white/30 hover:text-white transition-colors p-2"
                        >
                            <X size={20} />
                        </button>

                        {!success ? (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="space-y-2 text-center">
                                    <h3 className="text-3xl font-bold tracking-tight text-white mb-2">Solicitar Orçamento</h3>
                                    <p className="text-white/40 text-sm font-light">Preencha os dados e nossa equipe técnica retornará em breve.</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Nome Completo *</label>
                                        <input
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full p-4 rounded-xl bg-white/[0.03] border border-white/10 focus:border-brand-green/60 focus:outline-none transition-all placeholder:text-white/10 text-white"
                                            placeholder="Seu nome"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Empresa *</label>
                                        <input
                                            required
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            className="w-full p-4 rounded-xl bg-white/[0.03] border border-white/10 focus:border-brand-green/60 focus:outline-none transition-all placeholder:text-white/10 text-white"
                                            placeholder="Nome da empresa"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">E-mail Corporativo *</label>
                                            <input
                                                required
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full p-4 rounded-xl bg-white/[0.03] border border-white/10 focus:border-brand-green/60 focus:outline-none transition-all placeholder:text-white/10 text-white"
                                                placeholder="email@empresa.com"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Telefone / WhatsApp</label>
                                            <input
                                                value={formData.whatsapp}
                                                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                                className="w-full p-4 rounded-xl bg-white/[0.03] border border-white/10 focus:border-brand-green/60 focus:outline-none transition-all placeholder:text-white/10 text-white"
                                                placeholder="(11) 00000-0000"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Segmento de Atuação *</label>
                                        <select
                                            required
                                            value={formData.segment}
                                            onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                                            className="w-full p-4 rounded-xl bg-[#0b0f0d] border border-white/10 focus:border-brand-green/60 focus:outline-none transition-all text-white/70 appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled>Selecione um segmento</option>
                                            <option value="Condomínios">Condomínios</option>
                                            <option value="Hotéis">Hotéis</option>
                                            <option value="Restaurantes">Restaurantes</option>
                                            <option value="Comércios">Comércios</option>
                                            <option value="Indústrias">Indústrias</option>
                                            <option value="Escritórios">Ambientes Corporativos</option>
                                        </select>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Mensagem / Demanda Espécifica</label>
                                        <textarea
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full p-4 rounded-xl bg-white/[0.03] border border-white/10 focus:border-brand-green/60 focus:outline-none transition-all placeholder:text-white/10 text-white min-h-[120px] resize-none"
                                            placeholder="Como podemos ajudar sua operação? (Ex: Limpeza pós-obra, manutenção mensal...)"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-5 rounded-2xl bg-brand-green text-black font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-[0_20px_40px_rgba(57,255,20,0.15)] mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>Processando <Loader2 className="w-5 h-5 animate-spin" /></>
                                        ) : (
                                            <>Falar com Especialista <Send size={18} /></>
                                        )}
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center space-y-8"
                            >
                                <div className="relative mx-auto w-32 h-32">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute inset-0 bg-brand-green/20 blur-2xl rounded-full"
                                    />
                                    <div className="relative w-full h-full rounded-full border-2 border-brand-green/40 flex items-center justify-center text-brand-green bg-white/[0.03] backdrop-blur-sm">
                                        <CheckCircle size={56} strokeWidth={1.5} />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-3xl font-black text-white tracking-widest italic uppercase">Solicitação Enviada!</h3>
                                    <p className="text-white/40 leading-relaxed font-light text-sm max-w-[280px] mx-auto">
                                        Obrigado por escolher a BRUX. Nossa equipe técnica analisará sua demanda e entrará em contato em breve.
                                    </p>
                                </div>

                                {/* Simplified Protocol Box for Modal */}
                                <div className="py-3 px-6 bg-white/[0.03] border border-white/5 rounded-2xl inline-block">
                                    <span className="block text-[8px] font-black text-brand-green uppercase tracking-[0.3em] mb-1">Protocolo:</span>
                                    <span className="text-white font-mono text-lg font-black tracking-widest">BRUX-{new Date().getFullYear()}-QS{Math.floor(100 + Math.random() * 900)}</span>
                                </div>

                                <div className="flex flex-col gap-4 mt-8">
                                    <button
                                        onClick={() => {
                                            const waMessage = encodeURIComponent(`*NOVO ORÇAMENTO - BRUX*\n\n*Nome:* ${formData.name}\n*Empresa:* ${formData.company}\n*Segmento:* ${formData.segment}`)
                                            window.open(`https://wa.me/551127768000?text=${waMessage}`, '_blank')
                                        }}
                                        className="w-full py-4 rounded-2xl bg-[#25D366] text-white font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 shadow-lg"
                                    >
                                        <Phone size={14} fill="white" />
                                        WhatsApp Direto
                                    </button>
                                    <button
                                        onClick={() => {
                                            setSuccess(false)
                                            setOpen(false)
                                        }}
                                        className="w-full py-3 rounded-2xl border border-white/10 text-white/50 text-[9px] font-bold uppercase tracking-widest hover:text-white transition-all"
                                    >
                                        Concluir
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* Industrial Accent Line */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-green/40 to-transparent" />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
