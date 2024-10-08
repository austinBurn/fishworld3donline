import * as schema from "@colyseus/schema";

class Fish extends schema.Schema {
  constructor() {
    super();
    this.id = "";
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.rotationY = 0;
  }
}

schema.defineTypes(Fish, {
  id: "string",
  x: "number",
  y: "number",
  z: "number",
  rotationY: "number",
});

class State extends schema.Schema {
  constructor() {
    super();
    this.fishes = new schema.MapSchema();
  }
}

schema.defineTypes(State, {
  fishes: { map: Fish },
});

export { Fish, State };