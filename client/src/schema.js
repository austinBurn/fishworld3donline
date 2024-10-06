// src/schema.js
import { Schema, MapSchema, defineTypes } from '@colyseus/schema';

class Fish extends Schema {
  constructor() {
    super();
    this.id = '';
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.rotationY = 0;
  }
}

defineTypes(Fish, {
  id: 'string',
  x: 'number',
  y: 'number',
  z: 'number',
  rotationY: 'number',
});

class State extends Schema {
  constructor() {
    super();
    this.fishes = new MapSchema();
  }
}

defineTypes(State, {
  fishes: { map: Fish },
});

export { Fish, State };
