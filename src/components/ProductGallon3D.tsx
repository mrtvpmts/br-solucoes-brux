'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture, Environment, ContactShadows } from '@react-three/drei'
import { useRef, Suspense } from 'react'
import * as THREE from 'three'

function Gallon() {
    const meshRef = useRef<THREE.Group>(null!)
    const label = useTexture('/textures/logo-brux.png')

    useFrame(() => {
        meshRef.current.rotation.y += 0.006
    })

    return (
        <group ref={meshRef}>
            {/* Optimized Body */}
            <mesh castShadow>
                <boxGeometry args={[1.6, 2.5, 1.2]} />
                <meshPhysicalMaterial
                    color="#063212"
                    roughness={0.6}
                    metalness={0.2}
                    clearcoat={0.2}
                    clearcoatRoughness={0.4}
                    emissive="#2cff7a"
                    emissiveIntensity={0.12}
                />
            </mesh>
            {/* Simplified Handle area */}
            <mesh position={[0, 1.45, 0]}>
                <boxGeometry args={[1.5, 0.3, 1.1]} />
                <meshPhysicalMaterial color="#063212" />
            </mesh>
            {/* Cap */}
            <mesh position={[0.4, 1.6, 0]}>
                <cylinderGeometry args={[0.2, 0.2, 0.15, 16]} />
                <meshPhysicalMaterial color="#111111" />
            </mesh>
            {/* Label Decal */}
            <mesh position={[0, 0, 0.61]}>
                <planeGeometry args={[1.4, 1.8]} />
                <meshBasicMaterial map={label} transparent />
            </mesh>
        </group>
    )
}

export default function ProductGallon3D() {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 40 }} dpr={[1, 1.5]}>
            <ambientLight intensity={1} />
            <directionalLight position={[4, 5, 3]} intensity={1.5} />
            <Environment preset="city" />
            <Suspense fallback={null}>
                <Gallon />
                <ContactShadows position={[0, -1.4, 0]} opacity={0.3} scale={5} blur={2.5} far={4} />
            </Suspense>
        </Canvas>
    )
}
