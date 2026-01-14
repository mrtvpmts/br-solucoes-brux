'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import Gallon3D from './Gallon3D'
import { useEffect, useState, Suspense } from 'react'
import { motion } from 'framer-motion' // Assuming framer-motion is needed for motion.h1, motion.p, motion.div

export default function Hero3D() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const onScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <>
            {/* Text Content - Absolute Center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 w-full px-6">
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] italic"
                >
                    Limpeza de <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-[#7FFF00] to-brand-green drop-shadow-[0_0_30px_rgba(57,255,20,0.6)] animate-pulse-slow">
                        Alta Performance
                    </span><br />
                    e parceria para
                    <span className="block text-3xl md:text-6xl text-white/90 mt-2 not-italic tracking-normal">o seu negócio</span>
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mt-8 text-sm md:text-xl text-white/70 max-w-2xl mx-auto font-medium leading-relaxed tracking-wide"
                >
                    Soluções químicas completas para alimentação, saúde, condomínios e indústrias.
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-10"
                >
                    <a href="#catalog" className="inline-flex items-center gap-3 px-8 py-4 bg-brand-green hover:bg-[#32e012] text-black font-black uppercase tracking-widest rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(57,255,20,0.3)]">
                        Ver Soluções
                    </a>
                </motion.div>
            </div>

            <Canvas camera={{ position: [0, 0, 6], fov: 45 }} shadows dpr={[1, 2]}>
                <ambientLight intensity={0.9} />
                <directionalLight position={[4, 6, 4]} intensity={1.6} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#39FF14" />

                <Environment preset="city" />

                <Suspense fallback={null}>
                    <Gallon3D scrollY={scrollY} />
                    <ContactShadows
                        position={[0, -1.5, 0]}
                        opacity={0.4}
                        scale={10}
                        blur={2.5}
                        far={4.5}
                    />
                </Suspense>

                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </>
    )
}
