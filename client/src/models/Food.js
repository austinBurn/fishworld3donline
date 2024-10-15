// src/components/Food.js
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function Food({ position, quality }) {
  const meshRef = useRef();

  /*useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.y += 0.02;
      if (meshRef.current.position.y > 2.5) {
        meshRef.current.position.y = -2.5;
      }
    }
  });*/

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.09, 4, 4]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}

export default Food;
