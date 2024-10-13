// src/components/FishTank.js
import React, { useRef } from 'react';
import { Plane } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Fish from './Fish';
import Food from './Food';
import Bubble from './Bubble';
import waterNormalMap from './940-normal.jpg'; // Import a water normal map for the wavy surface

function FishTank({ fishes, peicesOfFood }) {
  const waterSurfaceRef = useRef();

  // Animate the water surface to give it a dynamic effect
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (waterSurfaceRef.current) {
      waterSurfaceRef.current.material.normalScale.set(Math.sin(time * 0.5) * 0.5, Math.cos(time * 0.5) * 0.5);
    }
  });

  console.log(peicesOfFood);
  return (
    <>
      {/* Four glass tank walls */}
      <mesh position={[-5.05, 0, 0]}>
        <boxGeometry args={[0.1, 7, 5]} />
        <meshStandardMaterial color="skyblue" transparent opacity={0.1} />
      </mesh>
      <mesh position={[5.05, 0, 0]}>
        <boxGeometry args={[0.1, 7, 5]} />
        <meshStandardMaterial color="skyblue" transparent opacity={0.1} />
      </mesh>
      <mesh position={[0, 0, -2.55]}>
        <boxGeometry args={[10, 7, 0.1]} />
        <meshStandardMaterial color="skyblue" transparent opacity={0.1} />
      </mesh>
      <mesh position={[0, 0, 2.55]}>
        <boxGeometry args={[10, 7, 0.1]} />
        <meshStandardMaterial color="skyblue" transparent opacity={0.1} />
      </mesh>

      {/* Water box in the middle */}
      <mesh position={[0, -.5, 0]}>
        <boxGeometry args={[10, 6, 5]} />
        <meshStandardMaterial color="blue" transparent opacity={0.1} />
      </mesh>

      {/* Water surface (dynamic and shiny) */}
      <Plane
        args={[10, 5]}
        position={[0, 2.51, 0]} // Positioned at the surface of the water box
        rotation={[-Math.PI / 2, 0, 0]}
        ref={waterSurfaceRef}
      >
        <meshStandardMaterial
          attach="material"
          color="lightblue"
          metalness={0.3} // Makes it shiny
          roughness={0.1} // Adds reflection
          normalMap={new THREE.TextureLoader().load(waterNormalMap)} // Apply normal map for water waves
          transparent
          opacity={0.8}
        />
      </Plane>

      <Plane
        args={[10, 5]}
        position={[0, -2.501, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          color="darkgreen"
          wireframe={false}
        />
      </Plane>

      <mesh position={[0, -6.8, 0]}>
        <boxGeometry args={[15, 8.5, 7]} />
        <meshStandardMaterial color="rgb(120,80,0)" />
      </mesh>

      {/* Render fish from server state */}
      {fishes.map((fish) => (
        <Fish
          key={fish.id}
          position={[fish.x, fish.y, fish.z]}
          rotationY={fish.rotationY}
        />
      ))}

      {/* Render food from server state */}
      {peicesOfFood.map((food) => (
        <Food
          key={food.id}
          position={[food.x, food.y, food.z]}
          rotationY={food.rotationY}
        />
      ))}

      

      {/* Bubbles */}
      <Bubble position={[0, -2.5, 0]} />
      <Bubble position={[1, -2.5, -1]} />
      <Bubble position={[-1, -2.5, 1]} />
    </>
  );
}

export default FishTank;
