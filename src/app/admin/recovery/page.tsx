'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Mail, ArrowLeft, Loader2, CheckCircle2 } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'

export default function PasswordRecovery() {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)

    const handleRecovery = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        try {
            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${window.location.origin}/admin/reset-password`,
            })

            if (error) throw error
            setSuccess(true)
        } catch (err: any) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-brand-green/20">
                        <Mail className="text-brand-green w-8 h-8" />
                    </div>
                    <h1 className="text-3xl font-black text-white uppercase tracking-tighter">Recuperar Senha</h1>
                    <p className="text-white/40 font-medium italic">Enviaremos um link de acesso para seu e-mail</p>
                </div>

                {!success ? (
                    <form onSubmit={handleRecovery} className="space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">E-mail Cadastrado</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green/50 transition-colors placeholder:text-white/10"
                                    placeholder="seu-email@brux.com.br"
                                    required
                                />
                            </div>

                            {error && (
                                <p className="text-red-500 text-xs text-center font-bold uppercase tracking-widest p-2 bg-red-500/10 rounded-lg">
                                    {error}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-brand-green text-black font-black uppercase text-sm tracking-widest py-4 rounded-xl hover:bg-[#32e012] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : 'Enviar Link de Recuperação'}
                        </button>

                        <Link
                            href="/admin"
                            className="flex items-center justify-center gap-2 text-white/30 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors mt-4"
                        >
                            <ArrowLeft size={14} /> Voltar para Login
                        </Link>
                    </form>
                ) : (
                    <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 text-center space-y-6">
                        <CheckCircle2 className="text-brand-green w-16 h-16 mx-auto" />
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-white uppercase italic">E-mail Enviado!</h3>
                            <p className="text-white/40 text-sm">Verifique sua caixa de entrada e siga as instruções para redefinir sua senha.</p>
                        </div>
                        <Link
                            href="/admin"
                            className="block w-full bg-white/5 hover:bg-white/10 text-white font-bold uppercase text-xs tracking-widest py-4 rounded-xl transition-colors"
                        >
                            Voltar para Login
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
