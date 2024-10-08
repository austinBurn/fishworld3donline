"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = __importDefault(require("@colyseus/tools"));
const monitor_1 = require("@colyseus/monitor");
const playground_1 = require("@colyseus/playground");
const FishRoom_1 = require("./rooms/FishRoom");
exports.default = (0, tools_1.default)({
    initializeGameServer: (gameServer) => {
        // Define your room handlers:
        gameServer.define('fish_room', FishRoom_1.FishRoom);
        console.log('FishRoom defined.');
    },
    initializeExpress: (app) => {
        // Create an Express app instance
        app.get("/hello_world", (req, res) => {
            res.send("It's time to kick ass and chew bubblegum!");
        });
        // Use @colyseus/playground (not recommended in production)
        if (process.env.NODE_ENV !== "production") {
            app.use("/", playground_1.playground);
        }
        // Use @colyseus/monitor
        app.use("/colyseus", (0, monitor_1.monitor)());
    },
    beforeListen: () => {
        // Before gameServer.listen() is called
        console.log('Game server is ready to listen.');
    }
});
