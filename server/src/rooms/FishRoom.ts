import { Room, Client } from "@colyseus/core";
import { Fish, State } from "./schema/Schema";

export class FishRoom extends Room<State> {
  onCreate(options: any) {
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
      this.state.fishes.set(fish.id, fish);
      console.log(
        `Fish ${fish.id} created at (${fish.x.toFixed(2)}, ${fish.y.toFixed(2)}, ${fish.z.toFixed(2)})`
      );
    }

    // Schedule regular updates
    this.setSimulationInterval((deltaTime) => this.update(deltaTime), 50);
  }

  update(deltaTime: number) {
    // Update fish positions
    this.state.fishes.forEach((fish) => {
      // Random movement
      const deltaX = (Math.random() - 0.5) * 0.05;
      const deltaY = (Math.random() - 0.5) * 0.05;
      const deltaZ = (Math.random() - 0.5) * 0.05;

      fish.x += deltaX;
      fish.y += deltaY;
      fish.z += deltaZ;

      // Keep fish within bounds
      fish.x = Math.max(-5, Math.min(5, fish.x));
      fish.y = Math.max(-2.5, Math.min(2.5, fish.y));
      fish.z = Math.max(-2.5, Math.min(2.5, fish.z));

      // Update rotation based on movement direction
      fish.rotationY = Math.atan2(deltaX, deltaZ);
    });
  }

  onJoin(client: Client, options: any) {
    console.log(`Client ${client.sessionId} joined.`);
  }

  onLeave(client: Client, consented: boolean) {
    console.log(`Client ${client.sessionId} left.`);
  }

  onDispose() {
    console.log('FishRoom disposed.');
  }
}