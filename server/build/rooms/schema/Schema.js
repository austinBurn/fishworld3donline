"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = exports.Fish = void 0;
const schema_1 = require("@colyseus/schema");
class Fish extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.id = "";
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.rotationY = 0;
    }
}
exports.Fish = Fish;
__decorate([
    (0, schema_1.type)("string")
], Fish.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("number")
], Fish.prototype, "x", void 0);
__decorate([
    (0, schema_1.type)("number")
], Fish.prototype, "y", void 0);
__decorate([
    (0, schema_1.type)("number")
], Fish.prototype, "z", void 0);
__decorate([
    (0, schema_1.type)("number")
], Fish.prototype, "rotationY", void 0);
class State extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.fishes = new schema_1.MapSchema();
    }
}
exports.State = State;
__decorate([
    (0, schema_1.type)({ map: Fish })
], State.prototype, "fishes", void 0);
