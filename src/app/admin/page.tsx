'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lock, ArrowRight } from 'lucide-react'

export default function AdminLogin() {
    const [pin, setPin] = useState('')
    const [error, setError] = useState(false)
    const router = useRouter()

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        // Simple Demo PIN - In prod use real auth
        if (pin === '1234') {
            document.cookie = "admin_auth=true; path=/"
            router.push('/admin/dashboard')
        } else {
            setError(true)
            setPin('')
        }
    }

    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-brand-green/20">
                        <Lock className="text-brand-green w-8 h-8" />
                    </div>
                    <h1 className="text-3xl font-black text-white uppercase tracking-tighter">Área Restrita</h1>
                    <p className="text-white/40 font-medium">Digite o PIN de acesso administrativo</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <input
                            type="password"
                            value={pin}
                            onChange={(e) => {
                                setPin(e.target.value)
                                setError(false)
                            }}
                            maxLength={4}
                            className={`w-full bg-white/5 border ${error ? 'border-red-500 text-red-500' : 'border-white/10 text-white'} rounded-xl px-4 py-4 text-center text-4xl font-mono tracking-[1em] focus:outline-none focus:border-brand-green/50 transition-colors placeholder:text-white/10`}
                            placeholder="••••"
                            autoFocus
                        />
                        {error && (
                            <p className="text-red-500 text-xs text-center font-bold uppercase tracking-widest animate-pulse">
                                PIN Incorreto
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-brand-green text-black font-black uppercase text-sm tracking-widest py-4 rounded-xl hover:bg-[#32e012] transition-colors flex items-center justify-center gap-2"
                    >
                        Acessar Dashboard <ArrowRight size={16} />
                    </button>
                </form>
            </div>
        </div>
    )
}
