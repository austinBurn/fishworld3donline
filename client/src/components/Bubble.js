// src/components/Bubble.js
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function Bubble({ position }) {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.y += 0.02;
      if (meshRef.current.position.y > 2.5) {
        meshRef.current.position.y = -2.5;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.05, 16, 16]} />
      <meshStandardMaterial color="white" transparent opacity={0.5} />
    </mesh>
  );
}

export default Bubble;
