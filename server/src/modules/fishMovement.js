// fishMovement.js
export function updateFishes(deltaTime, state) {
    state.fishes.forEach((fish) => {
      // Move towards target
      const dx = fish.targetX - fish.x;
      const dy = fish.targetY - fish.y;
      const dz = fish.targetZ - fish.z;
      const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
  
      if (distance < 0.1) {
        // Set a new target if close to the current one
        fish.targetX = Math.random() * 10 - 5;
        fish.targetY = Math.random() * 5 - 2.5;
        fish.targetZ = Math.random() * 5 - 2.5;
      } else {
        // Move towards the target
        const moveX = (dx / distance) * fish.speed;
        const moveY = (dy / distance) * fish.speed;
        const moveZ = (dz / distance) * fish.speed;
  
        fish.x += moveX;
        fish.y += moveY;
        fish.z += moveZ;
      }
  
      // Keep fish within bounds
      fish.x = Math.max(-5, Math.min(5, fish.x));
      fish.y = Math.max(-2.5, Math.min(2.5, fish.y));
      fish.z = Math.max(-2.5, Math.min(2.5, fish.z));
  
      // Update rotation based on movement direction
      fish.rotationY = Math.atan2(dx, dz);
    });
  }
  