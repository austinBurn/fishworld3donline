// src/components/Fish.js
import React from 'react';

function Fish({ position, rotationY = 0 }) {
  //console.log('Rendering Fish at position:', position, 'with rotationY:', rotationY);

  return (
<group position={position} rotation={[0, rotationY, 0]}>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} /> {/* Main body of the fish */}
        <meshStandardMaterial color="orange" />
      </mesh>
      
      {/* Tail */}
      <mesh position={[0, 0, -.4]} rotation={[Math.PI/2, 0, 0]}>
        <coneGeometry args={[0.3, 1, 32]} /> {/* Tail of the fish */}
        <meshStandardMaterial color="orange" />
      </mesh>
      
      {/* Fins */}
      <mesh position={[0.4, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[0.1, 0.5, 32]} /> {/* Right fin */}
        <meshStandardMaterial color="orange" />
      </mesh>
      <mesh position={[-0.4, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <coneGeometry args={[0.1, 0.5, 32]} /> {/* Left fin */}
        <meshStandardMaterial color="orange" />
      </mesh>
      
      {/* Eyes */}
      <mesh position={[0.2, 0.3, 0.4]}>
        <sphereGeometry args={[0.05, 16, 16]} /> {/* Right eye */}
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[-0.2, 0.3, 0.4]}>
        <sphereGeometry args={[0.05, 16, 16]} /> {/* Left eye */}
        <meshStandardMaterial color="black" />
      </mesh>
    </group>
  );
}

export default Fish;
