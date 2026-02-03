'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Lock, Loader2, CheckCircle2 } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function ResetPassword() {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)
    const router = useRouter()

    const handleReset = async (e: React.FormEvent) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setError('As senhas não coincidem')
            return
        }

        setLoading(true)
        setError(null)

        try {
            const { error } = await supabase.auth.updateUser({
                password: password
            })

            if (error) throw error
            setSuccess(true)
            setTimeout(() => router.push('/admin'), 3000)
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
                        <Lock className="text-brand-green w-8 h-8" />
                    </div>
                    <h1 className="text-3xl font-black text-white uppercase tracking-tighter">Nova Senha</h1>
                    <p className="text-white/40 font-medium italic">Defina sua nova credencial de acesso</p>
                </div>

                {!success ? (
                    <form onSubmit={handleReset} className="space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Nova Senha</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green/50 transition-colors placeholder:text-white/10"
                                    placeholder="••••••••"
                                    required
                                    minLength={6}
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">Confirmar Senha</label>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-green/50 transition-colors placeholder:text-white/10"
                                    placeholder="••••••••"
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
                            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : 'Redefinir Senha'}
                        </button>
                    </form>
                ) : (
                    <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 text-center space-y-6">
                        <CheckCircle2 className="text-brand-green w-16 h-16 mx-auto" />
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-white uppercase italic">Senha Alterada!</h3>
                            <p className="text-white/40 text-sm">Sua senha foi atualizada com sucesso. Redirecionando para o login...</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
