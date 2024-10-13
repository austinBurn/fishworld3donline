// tankUtils.js
import { Fish, Food } from "shared/src/index.js";

export function initTestFish(numFishes, state) {
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

export function initTestFood(numFood, state) {
  for (let i = 0; i < numFood; i++) {
    const food = new Food();
    food.id = `${i}`; // Ensure id is a string
    food.x = Math.random() * 10 - 5;
    food.y = Math.random() * 5 - 2.5;
    food.z = Math.random() * 5 - 2.5;
    state.peicesOfFood.set(food.id, food); // Add to MapSchema
    console.log(
      `Food ${food.id} created at (${food.x.toFixed(2)}, ${food.y.toFixed(2)}, ${food.z.toFixed(2)})`
    );
  }
}

