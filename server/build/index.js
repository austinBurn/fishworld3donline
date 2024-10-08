"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("@colyseus/tools");
const app_config_1 = __importDefault(require("./app.config"));
// Listen on port 2567 (or PORT environment variable)
const port = process.env.PORT || 2567;
(0, tools_1.listen)(app_config_1.default);
console.log(`Game server is listening on ws://localhost:${port}`);
