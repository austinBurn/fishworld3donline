// Fish.js
import * as schema from "@colyseus/schema";

class Fish extends schema.Schema {
  constructor() {
    super();
    this.id = "";
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.rotationY = 0;
    this.speed = 0.01; // Default speed value
    this.targetX = 0;
    this.targetY = 0;
    this.targetZ = 0;
  }

  updatePosition() {
    // Move towards target
    const dx = this.targetX - this.x;
    const dy = this.targetY - this.y;
    const dz = this.targetZ - this.z;
    const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

    if (distance < 0.1) {
      // Set a new target if close to the current one
      this.targetX = Math.random() * 10 - 5;
      this.targetY = Math.random() * 5 - 2.5;
      this.targetZ = Math.random() * 5 - 2.5;
    } else {
      // Move towards the target
      const moveX = (dx / distance) * this.speed;
      const moveY = (dy / distance) * this.speed;
      const moveZ = (dz / distance) * this.speed;

      this.x += moveX;
      this.y += moveY;
      this.z += moveZ;
    }

    // Keep fish within bounds
    this.x = Math.max(-5, Math.min(5, this.x));
    this.y = Math.max(-2.5, Math.min(2.5, this.y));
    this.z = Math.max(-2.5, Math.min(2.5, this.z));

    // Update rotation based on movement direction
    this.rotationY = Math.atan2(dx, dz);
  }
}

schema.defineTypes(Fish, {
  id: "string",
  x: "number",
  y: "number",
  z: "number",
  rotationY: "number",
  speed: "number",
  targetX: "number",
  targetY: "number",
  targetZ: "number",
});

export default Fish;
