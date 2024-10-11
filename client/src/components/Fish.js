// src/components/Fish.js
import React from 'react';

function Fish({ position, rotationY = 0 }) {
  //console.log('Rendering Fish at position:', position, 'with rotationY:', rotationY);

  return (
<group position={position} rotation={[0, rotationY, 0]}>
      {/* Body */}
      <mesh scale={[.5,1,2]} position={[0, 0, 0]} >
        <sphereGeometry args={[0.2, 6, 6]} /> {/* Main body of the fish */}
        <meshStandardMaterial color="orange" />
      </mesh>
      
      {/* Tail */}
      <mesh scale={[.1,1,1]} position={[0, 0, -.1]} rotation={[Math.PI/2, 0, 0]}>
        <coneGeometry args={[0.2, .6, 4]} /> {/* Tail of the fish */}
        <meshStandardMaterial color="orange" />
      </mesh>
      
      {/* Fins */}
      <mesh scale={[.1,1,1]} position={[0.12, 0, 0]} rotation={[Math.PI / 2, 0, Math.PI / 8]}>
        <coneGeometry args={[0.1, 0.2, 4]} /> {/* Right fin */}
        <meshStandardMaterial color="orange" />
      </mesh>
      <mesh scale={[.1,1,1]} position={[-0.12, 0, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 8]}>
        <coneGeometry args={[0.1, 0.2, 4]} /> {/* Left fin */}
        <meshStandardMaterial color="orange" />
      </mesh>
      
      {/* Eyes */}
      <mesh position={[0.05, 0.05, 0.32]}>
        <sphereGeometry args={[0.03, 4, 4]} /> {/* Right eye */}
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[-0.05, 0.05, 0.32]}>
        <sphereGeometry args={[0.03, 4, 4]} /> {/* Left eye */}
        <meshStandardMaterial color="black" />
      </mesh>
    </group>
  );
}

export default Fish;
