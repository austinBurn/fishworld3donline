import { Schema, MapSchema, type } from "@colyseus/schema";

export class Fish extends Schema {
  @type("string") id: string = "";
  @type("number") x: number = 0;
  @type("number") y: number = 0;
  @type("number") z: number = 0;
  @type("number") rotationY: number = 0;
}

export class State extends Schema {
  @type({ map: Fish }) fishes = new MapSchema<Fish>();
}