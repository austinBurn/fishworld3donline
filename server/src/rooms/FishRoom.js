import { Room } from "@colyseus/core";
import { State, Fish } from "shared/src/State.js";
export class FishRoom extends Room {
  onCreate(options) {
    console.log('FishRoom created.');

    // Set the initial state
    this.setState(new State());

    // Initialize fish positions
    for (let i = 0; i < 5; i++) {
      const fish = new Fish();
      fish.id = `${i}`; // Ensure id is a string
      fish.x = Math.random() * 10 - 5;
      fish.y = Math.random() * 5 - 2.5;
      fish.z = Math.random() * 5 - 2.5;
      fish.speed = Math.random() * 0.05 + 0.01; // Random speed between 0.01 and 0.06
      fish.targetX = Math.random() * 10 - 5;
      fish.targetY = Math.random() * 5 - 2.5;
      fish.targetZ = Math.random() * 5 - 2.5;
      this.state.fishes.set(fish.id, fish); // Add to MapSchema
      console.log(
        `Fish ${fish.id} created at (${fish.x.toFixed(2)}, ${fish.y.toFixed(2)}, ${fish.z.toFixed(2)}) targeting (${fish.targetX.toFixed(2)}, ${fish.targetY.toFixed(2)}, ${fish.targetZ.toFixed(2)})`
      );
    }

    // Schedule regular updates
    this.setSimulationInterval((deltaTime) => this.update(deltaTime), 50);
  }

  update(deltaTime) {
    // Update fish positions
    this.state.fishes.forEach((fish) => {
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

  onJoin(client, options) {
    console.log(`Client ${client.sessionId} joined.`);
  }

  onLeave(client, consented) {
    console.log(`Client ${client.sessionId} left.`);
  }

  onDispose() {
    console.log('FishRoom disposed.');
  }
}