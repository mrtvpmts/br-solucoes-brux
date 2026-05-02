'use client'

import { motion } from 'framer-motion'
import { Award, Zap, Droplets, FlaskConical } from 'lucide-react'

export default function MicroProof() {
    const stats = [
        {
            icon: <img src="/images/icon-pro-glass.png" alt="Profissional" className="w-16 h-16 object-contain" />,
            title: "Uso Profissional",
            desc: "Fórmulas aprovadas para alto tráfego"
        },
        {
            icon: <img src="/images/icon-conc-glass.png" alt="Concentração" className="w-16 h-16 object-contain" />,
            title: "Alta Concentração",
            desc: "Poder de limpeza real, sem excesso de água"
        },
        {
            icon: <img src="/images/icon-yield-glass.png" alt="Rendimento" className="w-16 h-16 object-contain" />,
            title: "Rendimento Extremo",
            desc: "Mais metros quadrados limpos por litro"
        }
    ]

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {stats.map((stat, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center text-center space-y-6 group p-8 rounded-[3rem] hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-brand-dark/5"
                        >
                            <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center border border-brand-dark/5 shadow-inner group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                                <div className="absolute inset-0 bg-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                {stat.icon}
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xl font-black text-brand-dark uppercase italic tracking-tight">{stat.title}</h4>
                                <p className="text-brand-dark/50 font-medium text-sm leading-relaxed">{stat.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
