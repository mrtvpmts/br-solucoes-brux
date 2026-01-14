'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useQuote } from './QuoteContext'
import { X, CheckCircle, Send, Loader2, Phone } from 'lucide-react'

import { trackEvent } from '@/lib/analytics'

export default function QuoteModal() {
    const { open, setOpen, success, setSuccess, cart, removeFromCart } = useQuote()
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
                body: JSON.stringify({ ...formData, cart })
            })

            if (response.ok) {
                trackEvent('quote_sent', { segment: formData.segment, cartSize: cart.length })

                // Build items list for WhatsApp
                let itemsList = ''
                if (cart.length > 0) {
                    itemsList = '\n\n*ITENS DA COTAÇÃO:*\n' + cart.map(item =>
                        `▪️ ${item.product.title} (${item.volume}) x ${item.quantity}`
                    ).join('\n')
                }

                // Formatting WhatsApp message
                const waMessage = encodeURIComponent(
                    `*NOVO ORÇAMENTO - BRUX*\n\n` +
                    `*Nome:* ${formData.name}\n` +
                    `*Empresa:* ${formData.company}\n` +
                    `*E-mail:* ${formData.email}\n` +
                    `*WhatsApp:* ${formData.whatsapp || 'Não informado'}\n` +
                    `*Segmento:* ${formData.segment}\n` +
                    itemsList + '\n\n' +
                    `*Demanda:* ${formData.message || 'Sem mensagem adicional'}`
                )

                // Open WhatsApp in a new tab
                window.open(`https://wa.me/551127768000?text=${waMessage}`, '_blank')
                trackEvent('whatsapp_click', { source: 'quote_success' })

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
                    <div className="absolute inset-0" onClick={() => !isSubmitting && setOpen(false)} />

                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-green/10 blur-[120px] rounded-full" />
                    </div>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative z-10 bg-[#0b0f0d] border border-white/10 rounded-[32px] p-8 md:p-10 w-full max-w-lg shadow-[0_0_50px_rgba(44,255,122,0.1)] overflow-hidden max-h-[90vh] overflow-y-auto custom-scrollbar"
                    >
                        {/* Scanlines Effect */}
                        <div className="absolute inset-0 scanlines opacity-5 pointer-events-none" />

                        {/* Close Button */}
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-6 right-6 text-white/30 hover:text-white transition-colors p-2 z-50 rounded-full hover:bg-white/5"
                        >
                            <X size={20} />
                        </button>

                        {!success ? (
                            <form onSubmit={handleSubmit} className="space-y-6 relative">
                                <div className="space-y-2 text-center mb-6">
                                    <div className="inline-block px-3 py-1 bg-brand-green/10 rounded-full border border-brand-green/20 mb-4">
                                        <span className="text-[9px] font-black text-brand-green uppercase tracking-[0.2em]">Falar com Especialista</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-white uppercase italic leading-none">
                                        Solicitar <span className="text-neon">Cotação</span>
                                    </h3>
                                    <p className="text-white/40 text-xs font-medium leading-relaxed max-w-[300px] mx-auto pt-2">
                                        Preencha os dados abaixo para receber um atendimento técnico personalizado.
                                    </p>
                                </div>

                                {/* CART SUMMARY */}
                                {cart.length > 0 && (
                                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 space-y-3">
                                        <h4 className="text-[10px] font-black text-white/40 uppercase tracking-widest flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-brand-green" /> Itens Selecionados ({cart.length})
                                        </h4>
                                        <div className="space-y-2 max-h-[150px] overflow-y-auto pr-2 custom-scrollbar">
                                            {cart.map((item, index) => (
                                                <div key={index} className="flex items-center justify-between text-sm bg-black/20 p-2 rounded-lg border border-white/5">
                                                    <div>
                                                        <div className="text-white font-bold text-xs">{item.product.title}</div>
                                                        <div className="text-brand-green font-mono text-[10px]">
                                                            {item.volume} • Qtd: {item.quantity}
                                                        </div>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={() => removeFromCart(item.product.title)}
                                                        className="text-white/20 hover:text-red-500 transition-colors p-1"
                                                    >
                                                        <X size={14} />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-4">
                                    <div className="space-y-1">
                                        <label className="text-[9px] font-black uppercase tracking-widest text-brand-green/70 ml-3">Nome Completo *</label>
                                        <input
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full p-4 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-brand-green/50 focus:bg-brand-green/[0.02] focus:outline-none transition-all placeholder:text-white/10 text-white text-sm"
                                            placeholder="Seu nome"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[9px] font-black uppercase tracking-widest text-brand-green/70 ml-3">Empresa *</label>
                                        <input
                                            required
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            className="w-full p-4 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-brand-green/50 focus:bg-brand-green/[0.02] focus:outline-none transition-all placeholder:text-white/10 text-white text-sm"
                                            placeholder="Nome da empresa"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-[9px] font-black uppercase tracking-widest text-brand-green/70 ml-3">E-mail *</label>
                                            <input
                                                required
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full p-4 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-brand-green/50 focus:bg-brand-green/[0.02] focus:outline-none transition-all placeholder:text-white/10 text-white text-sm"
                                                placeholder="email@empresa.com"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[9px] font-black uppercase tracking-widest text-brand-green/70 ml-3">WhatsApp</label>
                                            <input
                                                value={formData.whatsapp}
                                                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                                className="w-full p-4 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-brand-green/50 focus:bg-brand-green/[0.02] focus:outline-none transition-all placeholder:text-white/10 text-white text-sm"
                                                placeholder="(11) 00000-0000"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-[9px] font-black uppercase tracking-widest text-brand-green/70 ml-3">Segmento *</label>
                                        <div className="relative">
                                            <select
                                                required
                                                value={formData.segment}
                                                onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                                                className="w-full p-4 rounded-2xl bg-[#0b0f0d] border border-white/10 focus:border-brand-green/50 focus:bg-brand-green/[0.02] focus:outline-none transition-all text-white appearance-none cursor-pointer text-sm [&>option]:text-black"
                                            >
                                                <option value="" disabled>Selecione um segmento</option>
                                                <option value="Condomínios">Condomínios</option>
                                                <option value="Hotéis">Hotéis</option>
                                                <option value="Restaurantes">Restaurantes</option>
                                                <option value="Comércios">Comércios</option>
                                                <option value="Indústrias">Indústrias</option>
                                                <option value="Escritórios">Ambientes Corporativos</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/20 select-none">▼</div>
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-[9px] font-black uppercase tracking-widest text-brand-green/70 ml-3">Mensagem</label>
                                        <textarea
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full p-4 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-brand-green/50 focus:bg-brand-green/[0.02] focus:outline-none transition-all placeholder:text-white/10 text-white min-h-[100px] resize-none text-sm"
                                            placeholder="Como podemos ajudar sua operação?"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-3 pt-4">
                                        <button
                                            type="button"
                                            onClick={() => setOpen(false)}
                                            className="w-full py-4 text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white border border-white/10 hover:bg-white/5 rounded-xl transition-all"
                                        >
                                            + Adicionar Mais Produtos
                                        </button>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="btn-stitch btn-stitch-primary w-full py-5 text-sm uppercase font-black tracking-widest flex items-center justify-center gap-3 disabled:opacity-50"
                                        >
                                            {isSubmitting ? (
                                                <>Enviando <Loader2 className="w-4 h-4 animate-spin" /></>
                                            ) : (
                                                <>Solicitar Cotação <Send size={16} /></>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center space-y-8 py-8"
                            >
                                <div className="relative mx-auto w-32 h-32">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute inset-0 bg-brand-green/20 blur-3xl rounded-full"
                                    />
                                    <div className="relative w-full h-full rounded-full border border-brand-green/30 flex items-center justify-center text-brand-green bg-gradient-to-br from-white/5 to-transparent backdrop-blur-md">
                                        <CheckCircle size={64} strokeWidth={1} className="drop-shadow-[0_0_15px_#39FF14]" />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-4xl font-black text-white tracking-tighter italic uppercase leading-none">
                                        Solicitação<br /><span className="text-neon">Recebida!</span>
                                    </h3>
                                    <p className="text-white/40 leading-relaxed font-medium text-xs max-w-[280px] mx-auto">
                                        Nossa equipe técnica analisará sua demanda e entrará em contato em breve.
                                    </p>
                                </div>

                                {/* Simplified Protocol Box for Modal */}
                                <div className="py-3 px-8 bg-white/[0.03] border border-white/5 rounded-2xl inline-block relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-brand-green/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                    <span className="block text-[8px] font-black text-brand-green uppercase tracking-[0.4em] mb-1 relative z-10">Protocolo</span>
                                    <span className="text-white font-mono text-xl font-black tracking-widest relative z-10">BRUX-{new Date().getFullYear()}-QS{Math.floor(100 + Math.random() * 900)}</span>
                                </div>

                                <div className="flex flex-col gap-3 mt-8">
                                    <button
                                        onClick={() => {
                                            // Re-build message for "chat now" button if needed, or rely on automatic open
                                            const waMessage = encodeURIComponent(`*NOVO ORÇAMENTO - BRUX*\n\n*Nome:* ${formData.name}\n*Empresa:* ${formData.company}\n*Segmento:* ${formData.segment}`)
                                            window.open(`https://wa.me/551127768000?text=${waMessage}`, '_blank')
                                        }}
                                        className="w-full py-4 rounded-xl bg-[#25D366] text-white font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(37,211,102,0.2)] hover:scale-[1.02] transition-transform"
                                    >
                                        <Phone size={14} fill="white" />
                                        Conversar no WhatsApp
                                    </button>
                                    <button
                                        onClick={() => {
                                            setSuccess(false)
                                            setOpen(false)
                                        }}
                                        className="w-full py-3 rounded-xl border border-white/10 text-white/40 text-[9px] font-bold uppercase tracking-widest hover:text-white hover:bg-white/5 transition-all"
                                    >
                                        Fechar Janela
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* Industrial Accent Line */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-green/60 to-transparent" />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
