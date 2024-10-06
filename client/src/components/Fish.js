// src/components/Fish.js
import React from 'react';

function Fish({ position, rotationY = 0 }) {
  //console.log('Rendering Fish at position:', position, 'with rotationY:', rotationY);

  return (
    <mesh position={position} rotation={[0, rotationY, 0]}>
      <sphereGeometry args={[0.5, 32, 32]} /> {/* Increased size for visibility */}
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default Fish;
