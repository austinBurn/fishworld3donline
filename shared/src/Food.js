// Food.js
import * as schema from "@colyseus/schema";

class Food extends schema.Schema {
  constructor() {
    super();
    this.id = "";
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.quality = 0;
    this.rotationY = 0;
  }

  updatePosition() {
    this.y = this.y - 1;
    // Keep food within bounds
    this.y = Math.max(-2.5, Math.min(2.5, this.y));
  }
}

schema.defineTypes(Food, {
  id: "string",
  x: "number",
  y: "number",
  z: "number",
  quality: "number",
  rotationY: "number",
});

export default Food;
