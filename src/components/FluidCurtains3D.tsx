'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  varying vec2 vUv;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m;
    m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 a0 = x - floor(x + 0.5);
    vec3 g = a0 * vec3(x0.x,x12.xz) + h * vec3(x0.y,x12.yw);
    vec3 opacity = 1.79284291400159 - 0.85373472095314 * ( g*g + h*h );
    g *= opacity;
    h *= opacity;
    return 130.0 * dot(m, g);
  }

  void main() {
    float time = uTime * 0.15;
    vec2 uv = vUv;
    
    // Create thick organic vertical flow
    float n1 = snoise(uv * vec2(2.0, 0.5) + vec2(time * 0.2, time));
    float n2 = snoise(uv * vec2(1.5, 0.3) - vec2(time, time * 0.4));
    float flow = (n1 + n2) * 0.5;

    // The "Stitch" Color Palette
    vec3 black = vec3(0.0, 0.0, 0.0);
    vec3 deepGreen = vec3(0.02, 0.12, 0.05); // Dark industrial green
    vec3 toxicGreen = vec3(0.17, 1.0, 0.48); // #2cff7a

    // Base liquid effect
    float curtains = smoothstep(-0.2, 0.8, sin(uv.x * 15.0 + flow * 5.0));
    curtains *= smoothstep(0.0, 1.0, uv.y); // Fade out towards top/bottom

    vec3 color = mix(black, deepGreen, curtains * 0.8);
    color = mix(color, toxicGreen, pow(curtains, 6.0) * 1.2);
    
    // Glowing specular highlights for "viscosity"
    float highlight = pow(curtains, 12.0);
    color += toxicGreen * highlight * 0.8;

    gl_FragColor = vec4(color, 1.0);
  }
`

function FluidBackground() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const { size } = useThree()

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2(size.width, size.height) }
  }), [])

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial
      material.uniforms.uTime.value = state.clock.getElapsedTime()
    }
  })

  return (
    <mesh ref={meshRef} scale={[size.width / 100, size.height / 100, 1]}>
      <planeGeometry args={[100, 100]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  )
}

export default function FluidCurtains3D() {
  return (
    <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden bg-black">
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}>
        <FluidBackground />
      </Canvas>
    </div>
  )
}
