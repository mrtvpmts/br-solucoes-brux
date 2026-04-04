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
        <section id="contact-form" className="relative py-16 md:py-24 bg-brand-light px-8 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-green/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-green/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <AnimatePresence mode="wait">
                    {!success ? (
                        <motion.div
                            key="form"
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16">
                                <h2 className="text-5xl md:text-8xl font-black text-brand-dark tracking-tighter uppercase leading-none">
                                    Solicitar <span className="text-brand-green">Orçamento</span>
                                </h2>
                                <p className="text-brand-dark/40 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
                                    Atendimento imediato para demandas corporativas
                                </p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-white border border-brand-dark/5 rounded-[48px] p-8 md:p-16 space-y-12 shadow-[0_30px_100px_rgba(0,0,0,0.05)] relative"
                            >
                                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                                    {/* Nome */}
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-green ml-4">Nome Completo *</label>
                                        <div className="relative">
                                            <User size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-dark/20" />
                                            <input
                                                required
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="Seu nome"
                                                className="w-full bg-brand-light border border-brand-dark/5 rounded-2xl py-5 pl-14 pr-6 text-brand-dark placeholder:text-brand-dark/20 focus:border-brand-green/30 outline-none transition-all shadow-sm"
                                            />
                                        </div>
                                    </div>

                                    {/* Empresa */}
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-green ml-4">Empresa / Responsável *</label>
                                        <div className="relative">
                                            <Building2 size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-dark/20" />
                                            <input
                                                required
                                                type="text"
                                                value={formData.company}
                                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                placeholder="Nome da empresa"
                                                className="w-full bg-brand-light border border-brand-dark/5 rounded-2xl py-5 pl-14 pr-6 text-brand-dark placeholder:text-brand-dark/20 focus:border-brand-green/30 outline-none transition-all shadow-sm"
                                            />
                                        </div>
                                    </div>

                                    {/* Segmento */}
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-green ml-4">Segmento de Atuação *</label>
                                        <div className="relative">
                                            <Briefcase size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-dark/20" />
                                            <select
                                                required
                                                value={formData.segment}
                                                onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                                                className="w-full bg-brand-light border border-brand-dark/5 rounded-2xl py-5 pl-14 pr-12 text-brand-dark appearance-none focus:border-brand-green/30 outline-none transition-all shadow-sm"
                                            >
                                                <option value="" disabled className="bg-white">Selecione um segmento</option>
                                                <option value="Condomínios" className="bg-white">Condomínio</option>
                                                <option value="Indústrias" className="bg-white">Indústria</option>
                                                <option value="Hotéis" className="bg-white">Hotelaria</option>
                                                <option value="Comércios" className="bg-white">Comércio</option>
                                                <option value="Restaurantes" className="bg-white">Restaurante</option>
                                            </select>
                                            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-brand-dark/20 border-l border-brand-dark/5 pl-4">
                                                ▼
                                            </div>
                                        </div>
                                    </div>

                                    {/* Telefone / WhatsApp */}
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-green ml-4">Telefone / WhatsApp</label>
                                        <div className="relative">
                                            <Phone size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-dark/20" />
                                            <input
                                                type="text"
                                                value={formData.whatsapp}
                                                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                                placeholder="(11) 00000-0000"
                                                className="w-full bg-brand-light border border-brand-dark/5 rounded-2xl py-5 pl-14 pr-6 text-brand-dark placeholder:text-brand-dark/20 focus:border-brand-green/30 outline-none transition-all shadow-sm"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="md:col-span-2 space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-green ml-4">E-mail Corporativo *</label>
                                        <div className="relative">
                                            <Mail size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-dark/20" />
                                            <input
                                                required
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="seu@email.com.br"
                                                className="w-full bg-brand-light border border-brand-dark/5 rounded-2xl py-5 pl-14 pr-6 text-brand-dark placeholder:text-brand-dark/20 focus:border-brand-green/30 outline-none transition-all shadow-sm"
                                            />
                                        </div>
                                    </div>

                                    {/* Mensagem */}
                                    <div className="md:col-span-2 space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-green ml-4">Mensagem / Demanda</label>
                                        <div className="relative">
                                            <MessageSquare size={18} className="absolute left-6 top-20 -translate-y-1/2 text-brand-dark/20" />
                                            <textarea
                                                rows={5}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                placeholder="Como podemos ajudar sua operação?"
                                                className="w-full bg-brand-light border border-brand-dark/5 rounded-3xl py-10 pl-14 pr-6 text-brand-dark placeholder:text-brand-dark/20 focus:border-brand-green/30 outline-none transition-all resize-none shadow-sm"
                                            />
                                        </div>
                                    </div>

                                    {/* PRODUCT SELECTION SECTION */}
                                    <div className="md:col-span-2 space-y-6 pt-10 border-t border-brand-dark/5">
                                        <div className="flex items-center gap-4">
                                            <div className="h-[1px] flex-1 bg-brand-dark/5" />
                                            <h3 className="text-brand-green font-black uppercase tracking-widest text-xs md:text-sm">Adicionar Produtos (Opcional)</h3>
                                            <div className="h-[1px] flex-1 bg-brand-dark/5" />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                                            {/* Product Select */}
                                            <div className="md:col-span-6 relative">
                                                <select
                                                    className="w-full bg-brand-light border border-brand-dark/5 rounded-xl py-4 px-4 text-brand-dark text-xs appearance-none focus:border-brand-green/30 outline-none shadow-sm"
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
                                                        <option key={i} value={p.title} className="bg-white text-brand-dark">
                                                            {p.title} - {p.subtitle}
                                                        </option>
                                                    ))}
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brand-dark/20">▼</div>
                                            </div>

                                            {/* Hint */}
                                            <div className="md:col-span-6 flex items-center text-[10px] text-brand-dark/40 font-medium italic">
                                                * Selecione para adicionar automaticamente ao carrinho (Padrão: 20L / 1 un).
                                            </div>
                                        </div>

                                        {/* CART DISPLAY IN FORM */}
                                        {cart.length > 0 && (
                                            <div className="bg-brand-light border border-brand-dark/5 rounded-2xl p-6 space-y-4 shadow-inner">
                                                <h4 className="text-[10px] font-black text-brand-dark/40 uppercase tracking-widest flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green shadow-[0_0_5px_rgba(37,136,102,0.4)]" /> Itens na Cotação ({cart.length})
                                                </h4>
                                                <div className="space-y-2 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                                                    {cart.map((item, index) => (
                                                        <div key={index} className="flex items-center justify-between text-sm bg-white p-3 rounded-xl border border-brand-dark/5 shadow-sm">
                                                            <div className="flex items-center gap-3">
                                                                <div className="w-8 h-8 rounded-lg bg-brand-light flex items-center justify-center text-[10px] font-bold text-brand-dark/30 border border-brand-dark/5">
                                                                    {index + 1}
                                                                </div>
                                                                <div>
                                                                    <div className="text-brand-dark font-bold text-sm">{item.product.title}</div>
                                                                    <div className="text-brand-green font-bold text-[10px] uppercase tracking-wider">
                                                                        {item.volume} • Qtd: {item.quantity}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button
                                                                type="button"
                                                                onClick={() => removeFromCart(item.product.title)}
                                                                className="text-brand-dark/20 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-full"
                                                            >
                                                                <X size={14} />
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="md:col-span-2 flex flex-col gap-10 pt-6">
                                        <div className="flex items-start gap-4 p-6 bg-brand-light border border-brand-dark/5 rounded-2xl">
                                            <div className="w-5 h-5 rounded border-2 border-brand-green/30 mt-1 flex-shrink-0" />
                                            <p className="text-[11px] text-brand-dark/40 font-medium leading-relaxed">
                                                Ao enviar este formulário, você concorda com nossa <span className="text-brand-dark font-bold">Política de Privacidade</span> e autoriza o processamento de seus dados para fins de orçamento corporativo conforme a <span className="text-brand-dark font-bold">LGPD</span>.
                                            </p>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="btn-stitch btn-stitch-primary w-full py-10 text-2xl font-black flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed group shadow-[0_20px_50px_rgba(37,136,102,0.2)]"
                                        >
                                            {isSubmitting ? (
                                                <>Processando <Loader2 className="w-6 h-6 animate-spin" /></>
                                            ) : (
                                                <>Solicitar Orçamento <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
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
                            className="bg-white border border-brand-dark/5 rounded-[64px] p-12 md:p-24 text-center space-y-12 shadow-[0_40px_120px_rgba(0,0,0,0.08)] relative overflow-hidden"
                        >
                            {/* Decorative Elements */}
                            <div className="absolute inset-0 scanlines opacity-[0.02] pointer-events-none" />
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1.5 bg-gradient-to-r from-transparent via-brand-green/30 to-transparent" />

                            <div className="relative">
                                {/* Success Icon with Metallic/Glass effect */}
                                <div className="relative mx-auto w-40 h-40 mb-12">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", damping: 12, stiffness: 200 }}
                                        className="absolute inset-0 bg-brand-green/10 blur-3xl rounded-full"
                                    />
                                    <motion.div
                                        initial={{ scale: 0, rotate: -45 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        className="relative w-full h-full rounded-full border-4 border-brand-green/20 flex items-center justify-center bg-white shadow-xl"
                                    >
                                        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,1),transparent)]" />
                                        <CheckCircle size={80} className="text-brand-green drop-shadow-[0_10px_20px_rgba(37,136,102,0.2)]" strokeWidth={1.5} />
                                    </motion.div>
                                </div>

                                <div className="space-y-6">
                                    <h2 className="text-4xl md:text-7xl font-black text-brand-dark italic tracking-tighter uppercase leading-none">
                                        Solicitação Enviada<br />
                                        <span className="text-brand-green">com Sucesso!</span>
                                    </h2>
                                    <p className="text-brand-dark/60 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
                                        Obrigado por escolher a BRUX. Nossa equipe técnica analisará sua demanda e entrará em contato em até 24 horas úteis.
                                    </p>
                                </div>

                                {/* Protocol Box */}
                                <div className="mt-12 py-6 px-10 bg-brand-light border border-brand-dark/5 rounded-3xl inline-block shadow-sm">
                                    <span className="block text-[10px] font-black text-brand-green uppercase tracking-[0.4em] mb-2">Número de Protocolo:</span>
                                    <span className="text-brand-dark font-mono text-2xl font-black tracking-widest">{protocol}</span>
                                </div>

                                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-16">
                                    <button
                                        onClick={() => setSuccess(false)}
                                        className="px-10 py-5 rounded-2xl border border-brand-dark/10 text-brand-dark font-black uppercase tracking-widest text-sm hover:bg-brand-light transition-all"
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

                                <div className="pt-16 text-[10px] font-black text-brand-dark/10 uppercase tracking-[0.8em]">
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
