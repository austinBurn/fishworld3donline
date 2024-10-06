// src/components/FishTank.js
import React from 'react';
import { Plane } from '@react-three/drei';
import Fish from './Fish';
import Bubble from './Bubble';

function FishTank({ fishes }) {
  //console.log('FishTank received fishes:', fishes);

  return (
    <>
      {/* Fish tank walls */}
      <mesh>
        <boxGeometry args={[10, 5, 5]} />
        <meshStandardMaterial color="skyblue" transparent opacity={0.1} />
      </mesh>

      {/* Ground plane */}
      <Plane rotation={[-Math.PI / 2, 0, 0]} args={[10, 5]} position={[0,2,0]}>
        <meshStandardMaterial color="skyblue" />
      </Plane>

      {/* Render fish from server state */}
      {fishes.map((fish) => (
        <Fish
          key={fish.id}
          position={[fish.x, fish.y, fish.z]}
          rotationY={fish.rotationY}
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
