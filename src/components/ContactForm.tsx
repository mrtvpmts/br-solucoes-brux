'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Building2, User, Mail, Phone, MessageSquare, Briefcase, Loader2, CheckCircle, ArrowRight, X } from 'lucide-react'
import { useQuote } from './QuoteContext'
import { products } from '../data/products'

export default function ContactForm() {
    const { cart, addToCart, removeFromCart } = useQuote()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [success, setSuccess] = useState(false)
    const [protocol, setProtocol] = useState('')
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        segment: '',
        whatsapp: '',
        email: '',
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
                // Generate a professional protocol number
                const date = new Date()
                const year = date.getFullYear()
                const random = Math.floor(100 + Math.random() * 900)
                const newProtocol = `BRUX-${year}-QS${random}`
                setProtocol(newProtocol)

                setSuccess(true)
            } else {
                alert('Erro ao enviar solicitação. Tente novamente.')
            }
        } catch (error) {
            console.error('Error:', error)
            alert('Erro técnico ao conectar com o servidor.')
        } finally {
            setIsSubmitting(false)
        }
    }

    const openWhatsApp = () => {
        let itemsList = ''
        if (cart.length > 0) {
            itemsList = '\n\n*ITENS DA COTAÇÃO:*\n' + cart.map(item =>
                `▪️ ${item.product.title} (${item.volume}) x ${item.quantity}`
            ).join('\n')
        }

        const waMessage = encodeURIComponent(
            `*NOVO ORÇAMENTO - BRUX*\n\n` +
            `*Protocolo:* ${protocol}\n` +
            `*Nome:* ${formData.name}\n` +
            `*Empresa:* ${formData.company}\n` +
            `*E-mail:* ${formData.email}\n` +
            `*WhatsApp:* ${formData.whatsapp || 'Não informado'}\n` +
            `*Segmento:* ${formData.segment}\n` +
            itemsList + '\n' +
            `*Demanda:* ${formData.message || 'Sem mensagem adicional'}`
        )
        window.open(`https://wa.me/551127768000?text=${waMessage}`, '_blank')
    }

    return (
        <section id="contact-form" className="relative py-8 md:py-16 bg-[#060807] px-8 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-green/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-green/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <AnimatePresence mode="wait">
                    {!success ? (
                        <motion.div
                            key="form"
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <div className="text-center space-y-4 md:space-y-6 mb-8 md:mb-12">
                                <h2 className="text-impact !text-4xl md:!text-7xl">Solicitar <span className="text-neon">Orçamento</span></h2>
                                <p className="text-white/40 font-black uppercase tracking-[0.4em] text-xs">
                                    Atendimento imediato para demandas corporativas
                                </p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-white/[0.02] border border-white/10 rounded-[48px] p-10 md:p-16 space-y-12 shadow-2xl relative"
                            >
                                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Nome */}
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-green/60 ml-4">Nome Completo *</label>
                                        <div className="relative">
                                            <User size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" />
                                            <input
                                                required
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="Seu nome"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-white placeholder:text-white/10 focus:border-brand-green/50 focus:bg-brand-green/[0.02] outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Empresa */}
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-green/60 ml-4">Empresa / Responsável *</label>
                                        <div className="relative">
                                            <Building2 size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" />
                                            <input
                                                required
                                                type="text"
                                                value={formData.company}
                                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                placeholder="Nome da empresa"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-white placeholder:text-white/10 focus:border-brand-green/50 focus:bg-brand-green/[0.02] outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Segmento */}
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-green/60 ml-4">Segmento de Atuação *</label>
                                        <div className="relative">
                                            <Briefcase size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" />
                                            <select
                                                required
                                                value={formData.segment}
                                                onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-12 text-white appearance-none focus:border-brand-green/50 focus:bg-brand-green/[0.02] outline-none transition-all"
                                            >
                                                <option value="" disabled className="bg-[#0a0a0a]">Selecione um segmento</option>
                                                <option value="Condomínios" className="bg-[#0a0a0a]">Condomínio</option>
                                                <option value="Indústrias" className="bg-[#0a0a0a]">Indústria</option>
                                                <option value="Hotéis" className="bg-[#0a0a0a]">Hotelaria</option>
                                                <option value="Comércios" className="bg-[#0a0a0a]">Comércio</option>
                                                <option value="Restaurantes" className="bg-[#0a0a0a]">Restaurante</option>
                                            </select>
                                            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/20 border-l border-white/10 pl-4">
                                                ▼
                                            </div>
                                        </div>
                                    </div>

                                    {/* Telefone / WhatsApp */}
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-green/60 ml-4">Telefone / WhatsApp</label>
                                        <div className="relative">
                                            <Phone size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" />
                                            <input
                                                type="text"
                                                value={formData.whatsapp}
                                                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                                placeholder="(11) 00000-0000"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-white placeholder:text-white/10 focus:border-brand-green/50 focus:bg-brand-green/[0.02] outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="md:col-span-2 space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-green/60 ml-4">E-mail Corporativo *</label>
                                        <div className="relative">
                                            <Mail size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" />
                                            <input
                                                required
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="seu@email.com.br"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-white placeholder:text-white/10 focus:border-brand-green/50 focus:bg-brand-green/[0.02] outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Mensagem */}
                                    <div className="md:col-span-2 space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-green/60 ml-4">Mensagem / Demanda</label>
                                        <div className="relative">
                                            <MessageSquare size={18} className="absolute left-6 top-20 -translate-y-1/2 text-white/20" />
                                            <textarea
                                                rows={5}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                placeholder="Como podemos ajudar sua operação?"
                                                className="w-full bg-white/5 border border-white/10 rounded-3xl py-10 pl-14 pr-6 text-white placeholder:text-white/10 focus:border-brand-green/50 focus:bg-brand-green/[0.02] outline-none transition-all resize-none"
                                            />
                                        </div>
                                    </div>

                                    {/* PRODUCT SELECTION SECTION */}
                                    <div className="md:col-span-2 space-y-6 pt-8 border-t border-white/10">
                                        <div className="flex items-center gap-4">
                                            <div className="h-[1px] flex-1 bg-white/10" />
                                            <h3 className="text-neon font-black uppercase tracking-widest text-sm">Adicionar Produtos (Opcional)</h3>
                                            <div className="h-[1px] flex-1 bg-white/10" />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                                            {/* Product Select */}
                                            <div className="md:col-span-6 relative">
                                                <select
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white text-xs appearance-none focus:border-brand-green/50 outline-none"
                                                    onChange={(e) => {
                                                        const prod = products.find(p => p.title === e.target.value)
                                                        if (prod) {
                                                            addToCart({ product: prod, quantity: 1, volume: '20L' })
                                                        }
                                                    }}
                                                    value=""
                                                >
                                                    <option value="" disabled>Selecionar Produto da Lista...</option>
                                                    {products.map((p, i) => (
                                                        <option key={i} value={p.title} className="bg-[#0a0a0a] text-white">
                                                            {p.title} - {p.subtitle}
                                                        </option>
                                                    ))}
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">▼</div>
                                            </div>

                                            {/* Hint */}
                                            <div className="md:col-span-6 flex items-center text-[10px] text-white/30">
                                                * Selecione para adicionar automaticamente ao carrinho (Padrão: 20L / 1 un). Ajuste abaixo.
                                            </div>
                                        </div>

                                        {/* CART DISPLAY IN FORM */}
                                        {cart.length > 0 && (
                                            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 space-y-3">
                                                <h4 className="text-[10px] font-black text-white/40 uppercase tracking-widest flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green" /> Itens na Cotação ({cart.length})
                                                </h4>
                                                <div className="space-y-2 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
                                                    {cart.map((item, index) => (
                                                        <div key={index} className="flex items-center justify-between text-sm bg-black/20 p-2 rounded-lg border border-white/5">
                                                            <div className="flex items-center gap-3">
                                                                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-[10px] font-bold text-white/50">
                                                                    {index + 1}
                                                                </div>
                                                                <div>
                                                                    <div className="text-white font-bold text-xs">{item.product.title}</div>
                                                                    <div className="text-brand-green font-mono text-[10px]">
                                                                        {item.volume} • Qtd: {item.quantity}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button
                                                                type="button"
                                                                onClick={() => removeFromCart(item.product.title)}
                                                                className="text-white/20 hover:text-red-500 transition-colors p-2 hover:bg-white/5 rounded-full"
                                                            >
                                                                <X size={14} />
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="md:col-span-2 flex flex-col gap-8 pt-6">
                                        <div className="flex items-start gap-4 p-5 bg-white/[0.03] border border-white/5 rounded-2xl">
                                            <div className="w-5 h-5 rounded border border-brand-green/40 mt-1 flex-shrink-0" />
                                            <p className="text-[10px] text-white/40 font-medium leading-relaxed">
                                                Ao enviar este formulário, você concorda com nossa <span className="text-white">Política de Privacidade</span> e autoriza o processamento de seus dados para fins de orçamento corporativo conforme a <span className="text-white">LGPD</span>.
                                            </p>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="btn-stitch btn-stitch-primary w-full py-8 text-xl flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>Processando <Loader2 className="w-6 h-6 animate-spin" /></>
                                            ) : (
                                                <>Solicitar Orçamento <Send size={20} /></>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            className="bg-[#0b0f0d] border border-white/10 rounded-[64px] p-12 md:p-24 text-center space-y-12 shadow-[0_0_100px_rgba(57,255,20,0.1)] relative overflow-hidden"
                        >
                            {/* Decorative Elements */}
                            <div className="absolute inset-0 scanlines opacity-10 pointer-events-none" />
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-brand-green/40 to-transparent" />

                            <div className="relative">
                                {/* Success Icon with Metallic/Glass effect */}
                                <div className="relative mx-auto w-40 h-40 mb-12">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", damping: 12, stiffness: 200 }}
                                        className="absolute inset-0 bg-brand-green/20 blur-3xl rounded-full"
                                    />
                                    <motion.div
                                        initial={{ scale: 0, rotate: -45 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        className="relative w-full h-full rounded-full border-4 border-brand-green/30 flex items-center justify-center bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md shadow-2xl"
                                    >
                                        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent)]" />
                                        <CheckCircle size={80} className="text-brand-green drop-shadow-[0_0_20px_#39FF14]" strokeWidth={1.5} />
                                    </motion.div>
                                </div>

                                <div className="space-y-6">
                                    <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase">
                                        Solicitação Enviada<br />
                                        <span className="text-neon">com Sucesso!</span>
                                    </h2>
                                    <p className="text-white/40 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
                                        Obrigado por escolher a BRUX. Nossa equipe técnica analisará sua demanda e entrará em contato em até 24 horas úteis.
                                    </p>
                                </div>

                                {/* Protocol Box */}
                                <div className="mt-12 py-6 px-10 bg-white/[0.03] border border-white/10 rounded-3xl inline-block">
                                    <span className="block text-[10px] font-black text-brand-green uppercase tracking-[0.4em] mb-2">Número de Protocolo:</span>
                                    <span className="text-white font-mono text-2xl font-black tracking-widest">{protocol}</span>
                                </div>

                                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-16">
                                    <button
                                        onClick={() => setSuccess(false)}
                                        className="px-10 py-5 rounded-2xl border border-white/10 text-white font-black uppercase tracking-widest text-sm hover:bg-white/5 transition-all"
                                    >
                                        Voltar para o Início
                                    </button>
                                    <button
                                        onClick={openWhatsApp}
                                        className="px-10 py-5 rounded-2xl bg-[#25D366] text-white font-black uppercase tracking-widest text-sm flex items-center gap-3 shadow-[0_20px_40px_rgba(37,211,102,0.2)] hover:scale-105 transition-transform"
                                    >
                                        <Phone size={20} fill="white" />
                                        Falar agora no WhatsApp
                                    </button>
                                </div>

                                <div className="pt-16 text-[10px] font-black text-white/10 uppercase tracking-[0.8em]">
                                    BRUX — Soluções em Limpeza
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}
