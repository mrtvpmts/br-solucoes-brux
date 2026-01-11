'use client'

import { motion } from 'framer-motion'
import { Building2, Hotel, Utensils, Store, Factory, Building } from 'lucide-react'

export default function Segments() {
    const segments = [
        { title: "Condomínios", icon: <Building size={48} />, desc: "Residenciais e comerciais com alta circulação." },
        { title: "Hotéis", icon: <Hotel size={48} />, desc: "Rede hoteleira que exige padrão de excelência." },
        { title: "Restaurantes", icon: <Utensils size={48} />, desc: "Lanchonetes e áreas de manipulação de alimentos." },
        { title: "Comércios", icon: <Store size={48} />, desc: "Lojas e estabelecimentos de atendimento ao público." },
        { title: "Indústrias", icon: <Factory size={48} />, desc: "Fábricas, galpões e ambientes de grande porte." },
        { title: "Ambientes Corporativos", icon: <Building2 size={48} />, desc: "Escritórios e espaços empresariais diversos." }
    ]

    return (
        <section id="segments" className="relative py-40 bg-[#060807] overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 relative z-10">

                <div className="flex flex-col items-center mb-32 space-y-6">
                    <h2 className="text-impact !text-4xl md:!text-7xl">
                        Segmentos <span className="text-neon">Atendidos</span>
                    </h2>
                    <p className="text-white/40 font-black uppercase tracking-[0.4em] text-xs text-center">
                        Soluções versáteis para demandas de qualquer escala
                    </p>
                    <div className="h-1 w-32 bg-brand-green/20 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {segments.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="industrial-card group flex flex-col gap-8 h-full"
                        >
                            <div className="text-brand-green/40 group-hover:text-brand-green group-hover:drop-shadow-[0_0_20px_#39FF14] transition-all duration-500">
                                {s.icon}
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-black uppercase text-white tracking-widest">{s.title}</h3>
                                <p className="text-white/50 font-medium leading-relaxed">{s.desc}</p>
                            </div>

                            {/* HUD Decoration */}
                            <div className="mt-auto pt-8 border-t border-white/5 flex justify-between items-center opacity-20 group-hover:opacity-100 transition-opacity">
                                <span className="text-[8px] font-black uppercase tracking-widest text-brand-green">Status: Operation_Active</span>
                                <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Extreme Detail: Industrial Metallic Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/5 blur-[120px] rounded-full" />
        </section>
    )
}
