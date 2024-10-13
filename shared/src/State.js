// State.js
import * as schema from "@colyseus/schema";
import Fish from "./Fish.js";

class State extends schema.Schema {
  constructor() {
    super();
    this.fishes = new schema.MapSchema();
  }

  updateAllFishes() {
    this.fishes.forEach((fish) => {
      fish.updatePosition();
    });
  }
}

schema.defineTypes(State, {
  fishes: { map: Fish },
});

export default State;
