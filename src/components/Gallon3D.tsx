'use client'

import { useFrame } from '@react-three/fiber'
import { useTexture, Decal } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

interface Gallon3DProps {
  scrollY?: number
}

export default function Gallon3D({ scrollY = 0 }: Gallon3DProps) {
  const groupRef = useRef<THREE.Group>(null!)
  const label = useTexture('/textures/brux-logo-horizontal.png')

  useFrame((state) => {
    // Rotation reacts to scroll as requested
    groupRef.current.rotation.y = scrollY * 0.002
    // Float remains independent
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.08
  })

  return (
    <group ref={groupRef} rotation={[0.1, Math.PI / 4, 0]}>
      {/* Main Body - 5L Realistic Shape */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[1.6, 2.5, 1.2]} />
        <meshPhysicalMaterial
          color="#063212"
          roughness={0.6} // More rugged
          metalness={0.2}
          clearcoat={0.2} // Less shiny, more industrial
          clearcoatRoughness={0.4}
          emissive="#2cff7a"
          emissiveIntensity={0.15} // Better glow
        />
        <Decal
          position={[0, 0, 0.601]}
          rotation={[0, 0, 0]}
          scale={[1.4, 1.8, 1]}
        >
          <meshBasicMaterial
            map={label}
            transparent
            polygonOffset
            polygonOffsetFactor={-10}
          />
        </Decal>
      </mesh>

      {/* Top Handle part */}
      <mesh position={[0, 1.45, 0]} castShadow>
        <boxGeometry args={[1.6, 0.4, 1.2]} />
        <meshPhysicalMaterial color="#063212" roughness={0.2} metalness={0.1} />
      </mesh>

      {/* Handle Grip */}
      <mesh position={[0, 1.4, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <torusGeometry args={[0.5, 0.15, 16, 32, Math.PI]} />
        <meshPhysicalMaterial color="#063212" roughness={0.3} />
      </mesh>

      {/* Cap */}
      <mesh position={[0.4, 1.6, 0]} castShadow>
        <cylinderGeometry args={[0.25, 0.25, 0.2, 32]} />
        <meshPhysicalMaterial color="#111111" roughness={0.4} metalness={0.2} />
      </mesh>
    </group>
  )
}
