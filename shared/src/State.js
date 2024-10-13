// State.js
import * as schema from "@colyseus/schema";
import {Fish, Food} from "./index.js";

class State extends schema.Schema {
  constructor() {
    super();
    this.fishes = new schema.MapSchema();
    this.peicesOfFood = new schema.MapSchema();
  }

  updateAllFishes() {
    this.fishes.forEach((fish) => {
      fish.updatePosition();
    });
  }

  updateAllFood() {
    this.peicesOfFood.forEach((food) => {
      food.updatePosition();
    });
  }
}

schema.defineTypes(State, {
  fishes: { map: Fish },
  peicesOfFood: { map: Food },
});

export default State;
