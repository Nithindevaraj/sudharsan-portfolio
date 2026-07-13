"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingShapes() {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      // Slow subtle rotation for the whole group
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
      group.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.1) * 0.2;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2} position={[-2, 1, -2]}>
        <Sphere args={[1, 64, 64]}>
          <MeshDistortMaterial 
            color="#c8a97e" // accent-primary
            envMapIntensity={1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            metalness={0.8}
            roughness={0.2}
            distort={0.4}
            speed={2}
          />
        </Sphere>
      </Float>
      
      <Float speed={2} rotationIntensity={2} floatIntensity={3} position={[3, -1, -3]}>
        <Sphere args={[1.5, 64, 64]}>
          <MeshDistortMaterial 
            color="#1a1a1a"
            envMapIntensity={2}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={1}
            roughness={0.1}
            distort={0.2}
            speed={1.5}
          />
        </Sphere>
      </Float>
    </group>
  );
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 bg-background">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
      >
        <color attach="background" args={["#0a0a0a"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} color="#c8a97e" />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
        
        <FloatingShapes />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
