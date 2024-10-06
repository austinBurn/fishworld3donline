// server/schema.js
const { Schema, MapSchema, defineTypes } = require('@colyseus/schema');

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

module.exports = {
  Fish,
  State,
};
