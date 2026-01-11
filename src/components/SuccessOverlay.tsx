'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Check, MessageCircle, Home } from 'lucide-react'

interface SuccessOverlayProps {
    isOpen: boolean
    onClose: () => void
    protocol: string
}

export default function SuccessOverlay({ isOpen, onClose, protocol }: SuccessOverlayProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/95 backdrop-blur-xl px-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        className="max-w-md w-full text-center space-y-8"
                    >
                        {/* Metallic Checkmark */}
                        <div className="relative mx-auto w-24 h-24">
                            <div className="absolute inset-0 bg-brand-green/20 blur-2xl rounded-full animate-pulse" />
                            <div className="relative w-full h-full rounded-full border-2 border-brand-green/40 flex items-center justify-center bg-brand-dark overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/20 to-transparent" />
                                <Check className="text-brand-green relative z-10" size={48} strokeWidth={3} />
                                {/* Metallic shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-light-sweep" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-white tracking-tight">Solicitação Enviada com Sucesso!</h2>
                            <p className="text-white/40 leading-relaxed text-sm">
                                Obrigado por escolher a BRUX. Nossa equipe técnica analisará sua demanda e entrará em contato em até 24 horas úteis.
                            </p>
                        </div>

                        {/* Protocol Badge */}
                        <div className="inline-block px-6 py-3 bg-white/[0.03] border border-white/5 rounded-sm">
                            <span className="text-[10px] text-white/20 uppercase tracking-[0.3em] block mb-1">Número de Protocolo</span>
                            <span className="text-brand-green font-mono text-lg font-bold">{protocol}</span>
                        </div>

                        <div className="flex flex-col gap-3 pt-4">
                            <button
                                onClick={onClose}
                                className="flex items-center justify-center gap-2 w-full py-4 bg-transparent border border-white/10 text-white font-bold rounded-sm hover:bg-white/5 transition-all"
                            >
                                <Home size={18} /> Voltar para o Início
                            </button>
                            <a
                                href="https://wa.me/55123456789"
                                target="_blank"
                                className="flex items-center justify-center gap-2 w-full py-4 bg-brand-green text-brand-dark font-bold rounded-sm hover:shadow-[0_0_20px_rgba(44,255,122,0.4)] transition-all"
                            >
                                <MessageCircle size={18} /> Falar agora no WhatsApp
                            </a>
                        </div>

                        <div className="pt-8 opacity-20">
                            <span className="text-[10px] tracking-[0.3em] uppercase">BRUX - Soluções em Limpeza</span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
