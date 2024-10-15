// FishRoom.js
import { Room } from "@colyseus/core";
import { State, Food } from "shared/src/index.js";
import { initTestFish, initTestFood } from "./modules/tankUtils.js";

export class FishRoom extends Room {
  onCreate(options) {
    console.log('FishRoom created.');
    // Set the initial state
    this.setState(new State());
    this.setPatchRate(16.6);

    // Initialize fish positions
    initTestFish(24, this.state);
    initTestFood(4, this.state);

    // Schedule regular updates
    this.setSimulationInterval((deltaTime) => this.update(deltaTime), 50);

    // Listen for messages from clients to add food
    this.onMessage('add_food', (client, data) => {
      initTestFood(1, this.state);
      //console.log(`Food added by client ${client.sessionId} at (${food.x}, ${food.y}, ${food.z})`);
    });
  }

  update(deltaTime) {
    this.state.updateAllFishes();
    this.state.updateAllFood();
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
