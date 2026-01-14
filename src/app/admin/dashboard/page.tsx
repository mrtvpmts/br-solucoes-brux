'use client'

import { useEffect, useState } from 'react'
import { BarChart3, Users, ShoppingCart, MousePointer2, RefreshCw, ArrowUpRight, Settings } from 'lucide-react'

interface AnalyticsData {
    pageViews: number
    clicks: number
    quotes: number
    referrers: Record<string, number>
    topProducts: Record<string, number>
    recentEvents: any[]
}

export default function AdminDashboard() {
    const [data, setData] = useState<AnalyticsData | null>(null)
    const [loading, setLoading] = useState(true)
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)
    const [newPassword, setNewPassword] = useState('')

    const fetchData = async () => {
        try {
            const res = await fetch('/api/track')
            const json = await res.json()
            setData(json)
        } catch (error) {
            console.error('Failed to fetch stats')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
        const interval = setInterval(fetchData, 5000) // Poll every 5s
        return () => clearInterval(interval)
    }, [])

    if (loading) return <div className="min-h-screen bg-[#050505] flex items-center justify-center text-brand-green font-mono">Carregando dados...</div>


    const handleExport = () => {
        if (!data) return

        const csvContent = "data:text/csv;charset=utf-8,"
            + "Evento,Produto,Origem,Data\n"
            + data.recentEvents.map(e => `${e.event},${e.product || '-'},${e.referrer || 'Direto'},${new Date(e.timestamp || e.id).toLocaleString()}`).join("\n")

        const encodedUri = encodeURI(csvContent)
        const link = document.createElement("a")
        link.setAttribute("href", encodedUri)
        link.setAttribute("download", `brux_relatorio_${new Date().toISOString().slice(0, 10)}.csv`)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const handleUpdatePassword = (e: React.FormEvent) => {
        e.preventDefault()
        if (newPassword.length < 4) return alert("Senha muito curta")
        localStorage.setItem('admin_custom_pwd', newPassword)
        setIsSettingsOpen(false)
        setNewPassword('')
        alert("Senha atualizada com sucesso! Use a nova senha no próximo login.")
    }

    return (
        <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-8">
                    <div>
                        <h1 className="text-3xl font-black uppercase tracking-tighter italic">
                            Brux <span className="text-brand-green">Analytics</span>
                        </h1>
                        <p className="text-white/40 text-sm font-medium mt-2">Monitoramento em Tempo Real</p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={handleExport}
                            className="flex items-center gap-2 px-4 py-2 bg-brand-green/10 hover:bg-brand-green/20 text-brand-green rounded-lg text-xs font-bold uppercase tracking-widest transition-colors border border-brand-green/20"
                        >
                            <ArrowUpRight size={14} /> Exportar CSV
                        </button>
                        <button
                            onClick={() => setIsSettingsOpen(true)}
                            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors border border-white/10"
                        >
                            <Settings size={14} /> Configurações
                        </button>
                    </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <KpiCard
                        title="Visitas Totais"
                        value={data?.pageViews || 0}
                        icon={<Users className="text-brand-green" />}
                        subtitle="Pageviews nesta sessão"
                    />
                    <KpiCard
                        title="Orçamentos"
                        value={data?.quotes || 0}
                        icon={<ShoppingCart className="text-purple-400" />}
                        subtitle="Solicitações enviadas"
                        highlight
                    />
                    <KpiCard
                        title="Cliques no WhatsApp"
                        value={data?.clicks || 0}
                        icon={<MousePointer2 className="text-blue-400" />}
                        subtitle="Intenção de contato"
                    />
                    <KpiCard
                        title="Taxa de Conversão"
                        value={`${data?.pageViews ? ((data.quotes / data.pageViews) * 100).toFixed(1) : 0}%`}
                        icon={<BarChart3 className="text-yellow-400" />}
                        subtitle="Visitas x Orçamentos"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Traffic Sources */}
                    <div className="bg-[#0b0f0d] border border-white/10 rounded-3xl p-8 space-y-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center border border-brand-green/20">
                                <ArrowUpRight className="text-brand-green w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-tight">Origem do Tráfego</h3>
                        </div>

                        <div className="space-y-4">
                            {data?.referrers && Object.keys(data.referrers).length > 0 ? (
                                Object.entries(data.referrers)
                                    .sort(([, a], [, b]) => b - a)
                                    .map(([source, count], i) => (
                                        <div key={source} className="flex items-center justify-between group">
                                            <div className="flex items-center gap-4">
                                                <span className="font-mono text-white/30 text-sm">0{i + 1}</span>
                                                <span className="font-bold text-white/80">{source}</span>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="w-32 h-2 bg-white/5 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-brand-green rounded-full"
                                                        style={{ width: `${(count / (data.pageViews || 1)) * 100}%` }}
                                                    />
                                                </div>
                                                <span className="font-mono text-brand-green w-8 text-right">{count}</span>
                                            </div>
                                        </div>
                                    ))
                            ) : (
                                <div className="text-center py-12 text-white/20 italic text-sm">
                                    Nenhuma visita registrada ainda.
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Top Products */}
                    <div className="bg-[#0b0f0d] border border-white/10 rounded-3xl p-8 space-y-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                                <ShoppingCart className="text-purple-400 w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-tight">Produtos Mais Cotados</h3>
                        </div>

                        <div className="space-y-4">
                            {data?.topProducts && Object.keys(data.topProducts).length > 0 ? (
                                Object.entries(data.topProducts)
                                    .sort(([, a], [, b]) => b - a)
                                    .slice(0, 5)
                                    .map(([product, count], i) => (
                                        <div key={product} className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black ${i === 0 ? 'bg-yellow-500 text-black' : 'bg-white/10 text-white'}`}>
                                                    {i + 1}
                                                </div>
                                                <span className="font-bold text-white text-sm">{product}</span>
                                            </div>
                                            <span className="font-mono text-white/50 text-sm">{count} cot.</span>
                                        </div>
                                    ))
                            ) : (
                                <div className="text-center py-12 text-white/20 italic text-sm">
                                    Nenhum produto adicionado ainda.
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Recent Events Log (Mini) */}
                <div className="border-t border-white/5 pt-8">
                    <h4 className="text-xs font-black uppercase tracking-widest text-white/30 mb-6">Log de Eventos (Últimos 50)</h4>
                    <div className="bg-black/40 rounded-xl border border-white/5 p-4 h-48 overflow-y-auto font-mono text-xs space-y-2 custom-scrollbar">
                        {data?.recentEvents.map((ev) => (
                            <div key={ev.id} className="flex gap-4 text-white/50 border-b border-white/5 pb-2 last:border-0">
                                <span className="text-brand-green/60">{new Date(ev.timestamp || ev.id).toLocaleTimeString()}</span>
                                <span className="text-white font-bold">{ev.event}</span>
                                <span className="truncate flex-1 text-white/30">
                                    {ev.product ? `Produto: ${ev.product}` : ''}
                                    {ev.url ? ` | URL: ${ev.url.split('/').pop() || 'Home'}` : ''}
                                    {ev.referrer ? ` | Ref: ${ev.referrer}` : ''}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Settings Modal */}
            {isSettingsOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="bg-[#0b0f0d] border border-white/10 rounded-2xl p-8 max-w-sm w-full space-y-6">
                        <h3 className="text-xl font-black uppercase tracking-tight">Configurações</h3>

                        <form onSubmit={handleUpdatePassword} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-white/50">Nova Senha de Acesso</label>
                                <input
                                    type="text"
                                    value={newPassword}
                                    onChange={e => setNewPassword(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-brand-green outline-none"
                                    placeholder="Digite a nova senha"
                                />
                            </div>
                            <button className="w-full btn-stitch py-3 text-xs uppercase">Salvar Alterações</button>
                        </form>

                        <button
                            onClick={() => setIsSettingsOpen(false)}
                            className="w-full text-white/30 hover:text-white text-xs uppercase tracking-widest mt-4"
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

function KpiCard({ title, value, icon, subtitle, highlight = false }: any) {
    return (
        <div className={`p-6 rounded-3xl border ${highlight ? 'bg-brand-green/5 border-brand-green/30' : 'bg-[#0b0f0d] border-white/10'} relative overflow-hidden group hover:border-brand-green/30 transition-colors`}>
            <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-start">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{title}</span>
                    <div className="p-2 bg-white/5 rounded-lg text-white/80 group-hover:bg-white/10 transition-colors">
                        {icon}
                    </div>
                </div>
                <div>
                    <div className="text-4xl font-black text-white tracking-tighter">{value}</div>
                    <p className="text-xs font-medium text-white/30 mt-1">{subtitle}</p>
                </div>
            </div>
            {highlight && <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-green/10 blur-3xl rounded-full" />}
        </div>
    )
}
