'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import Gallon3D from './Gallon3D'
import { useEffect, useState, Suspense } from 'react'

export default function Hero3D() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const onScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
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
    )
}
