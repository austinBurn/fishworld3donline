// fishUtils.js
import { Fish } from "shared/src/index.js";

export function initializeFishes(numFishes, state) {
  for (let i = 0; i < numFishes; i++) {
    const fish = new Fish();
    fish.id = `${i}`; // Ensure id is a string
    fish.x = Math.random() * 10 - 5;
    fish.y = Math.random() * 5 - 2.5;
    fish.z = Math.random() * 5 - 2.5;
    fish.speed = Math.random() * 0.05 + 0.01; // Random speed between 0.01 and 0.06
    fish.targetX = Math.random() * 10 - 5;
    fish.targetY = Math.random() * 5 - 2.5;
    fish.targetZ = Math.random() * 5 - 2.5;
    state.fishes.set(fish.id, fish); // Add to MapSchema
    console.log(
      `Fish ${fish.id} created at (${fish.x.toFixed(2)}, ${fish.y.toFixed(2)}, ${fish.z.toFixed(2)}) targeting (${fish.targetX.toFixed(2)}, ${fish.targetY.toFixed(2)}, ${fish.targetZ.toFixed(2)})`
    );
  }
}
