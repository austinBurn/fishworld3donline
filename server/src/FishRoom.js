// room.js
import { Room } from "@colyseus/core";
import { State } from "shared/src/index.js";
import { initializeFishes } from "./modules/fishUtils.js";
import { updateFishes } from "./modules/fishMovement.js";

export class FishRoom extends Room {
  onCreate(options) {
    console.log('FishRoom created.');
    // Set the initial state
    this.setState(new State());
    this.setPatchRate(16.6);

    // Initialize fish positions
    initializeFishes(24, this.state);

    // Schedule regular updates
    this.setSimulationInterval((deltaTime) => this.update(deltaTime), 50);
  }

  update(deltaTime) {
    this.state.updateAllFishes();
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