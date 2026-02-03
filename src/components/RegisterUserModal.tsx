'use client'

import { useState } from 'react'
import { X, UserPlus, Loader2, Mail, Lock, ShieldCheck, MailCheck } from 'lucide-react'

interface RegisterUserModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function RegisterUserModal({ isOpen, onClose }: RegisterUserModalProps) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('admin')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        try {
            const response = await fetch('/api/admin/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, role })
            })

            const data = await response.json()

            if (!response.ok) throw new Error(data.error || 'Erro ao cadastrar usuário')

            setSuccess(true)
            setTimeout(() => {
                onClose()
                setSuccess(false)
                setEmail('')
                setPassword('')
            }, 3000)

        } catch (err: any) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-[#0b0f0d] border border-white/10 rounded-[32px] w-full max-w-md overflow-hidden shadow-2xl relative">
                {/* Header Gradient */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-green/0 via-brand-green/50 to-brand-green/0" />

                <div className="p-8 md:p-10 space-y-8">
                    <div className="flex justify-between items-start">
                        <div className="space-y-1">
                            <h3 className="text-2xl font-black uppercase tracking-tighter text-white">Novo <span className="text-brand-green">Membro</span></h3>
                            <p className="text-white/40 text-xs font-medium uppercase tracking-widest">Acesso ao Painel Analytics</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/5 rounded-full text-white/20 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {!success ? (
                        <form onSubmit={handleRegister} className="space-y-6">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">E-mail Corporativo</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/10 focus:border-brand-green/30 focus:bg-brand-green/[0.02] outline-none transition-all"
                                            placeholder="exemplo@brux.com.br"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Senha de Acesso</label>
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/10 focus:border-brand-green/30 focus:bg-brand-green/[0.02] outline-none transition-all"
                                            placeholder="••••••••"
                                            required
                                            minLength={6}
                                        />
                                    </div>
                                    <p className="text-[10px] text-white/20 ml-1 italic">* Mínimo de 6 caracteres</p>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Nível de Acesso</label>
                                    <select
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 text-white focus:border-brand-green/30 outline-none transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="admin">Administrador Padrão</option>
                                        <option value="master">Master (Pode gerenciar equipe)</option>
                                    </select>
                                </div>

                                {error && (
                                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-[10px] font-bold uppercase tracking-wider text-center animate-pulse">
                                        {error}
                                    </div>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-brand-green text-black font-black uppercase text-xs tracking-[0.2em] py-5 rounded-2xl hover:bg-[#32e012] transition-colors flex items-center justify-center gap-3 disabled:opacity-50"
                            >
                                {loading ? (
                                    <Loader2 className="animate-spin" size={18} />
                                ) : (
                                    <>
                                        Cadastrar Usuário
                                        <UserPlus size={16} strokeWidth={2.5} />
                                    </>
                                )}
                            </button>
                        </form>
                    ) : (
                        <div className="py-10 text-center space-y-6">
                            <div className="w-20 h-20 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-green/30">
                                <MailCheck className="text-brand-green" size={40} />
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-black text-white uppercase italic">Sucesso!</h4>
                                <p className="text-white/40 text-sm font-medium">O usuário foi cadastrado e já pode acessar o sistema.</p>
                            </div>
                        </div>
                    )}

                    <div className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                        <ShieldCheck className="text-brand-green/40 mt-1 flex-shrink-0" size={14} />
                        <p className="text-[9px] text-white/20 leading-relaxed font-medium">
                            Este usuário terá acesso total ao rastreio de visitantes, cliques e orçamentos do site BRUX. Certifique-se de que é um membro autorizado da equipe.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
