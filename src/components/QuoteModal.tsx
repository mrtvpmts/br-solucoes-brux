'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useQuote } from './QuoteContext'
import { X, CheckCircle, Send } from 'lucide-react'

export default function QuoteModal() {
    const { open, setOpen, success, setSuccess } = useQuote()

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
                    <div className="absolute inset-0" onClick={() => setOpen(false)} />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="bg-[#0b0f0d] border border-white/10 rounded-3xl p-8 md:p-10 w-full max-w-lg relative z-10 shadow-[0_0_50px_rgba(44,255,122,0.15)] overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-6 right-6 text-white/30 hover:text-white transition-colors p-2"
                        >
                            <X size={20} />
                        </button>

                        {!success ? (
                            <div className="space-y-8">
                                <div className="space-y-2 text-center">
                                    <h3 className="text-3xl font-bold tracking-tight text-white mb-2">Solicitar Orçamento</h3>
                                    <p className="text-white/40 text-sm font-light">Preencha os dados e nossa equipe técnica retornará em breve.</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Nome Completo</label>
                                        <input className="w-full p-4 rounded-xl bg-white/[0.03] border border-white/10 focus:border-brand-green/60 focus:outline-none transition-all placeholder:text-white/10" placeholder="Seu nome" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Empresa</label>
                                        <input className="w-full p-4 rounded-xl bg-white/[0.03] border border-white/10 focus:border-brand-green/60 focus:outline-none transition-all placeholder:text-white/10" placeholder="Nome da empresa" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">E-mail Corporativo</label>
                                            <input className="w-full p-4 rounded-xl bg-white/[0.03] border border-white/10 focus:border-brand-green/60 focus:outline-none transition-all placeholder:text-white/10" placeholder="email@empresa.com" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">WhatsApp</label>
                                            <input className="w-full p-4 rounded-xl bg-white/[0.03] border border-white/10 focus:border-brand-green/60 focus:outline-none transition-all placeholder:text-white/10" placeholder="(00) 00000-0000" />
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => setSuccess(true)}
                                        className="w-full py-5 rounded-2xl bg-brand-green text-black font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform active:scale-95 glow-green mt-4"
                                    >
                                        Enviar Solicitação <Send size={18} />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-10 space-y-8"
                            >
                                <div className="relative mx-auto w-24 h-24">
                                    <div className="absolute inset-0 bg-brand-green/20 blur-2xl rounded-full animate-pulse" />
                                    <div className="relative w-full h-full rounded-full border-2 border-brand-green/40 flex items-center justify-center text-brand-green bg-white/[0.03]">
                                        <CheckCircle size={48} strokeWidth={1.5} />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-3xl font-bold text-white tracking-tight">Solicitação Enviada!</h3>
                                    <p className="text-white/40 leading-relaxed font-light">
                                        Obrigado por escolher a BRUX. Nossa equipe técnica analisará sua demanda e entrará em contato em até 24 horas úteis.
                                    </p>
                                </div>

                                <button
                                    onClick={() => {
                                        setSuccess(false)
                                        setOpen(false)
                                    }}
                                    className="w-full py-4 rounded-2xl border border-white/10 text-white font-bold hover:bg-white hover:text-black transition-all"
                                >
                                    Continuar Navegando
                                </button>
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
