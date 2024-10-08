import config from "@colyseus/tools";
import { monitor } from "@colyseus/monitor";
import { playground } from "@colyseus/playground";
import { FishRoom } from "./rooms/FishRoom";

export default config({

    initializeGameServer: (gameServer) => {
        // Define your room handlers:
        gameServer.define('fish_room', FishRoom);
        console.log('FishRoom defined.');
    },

    initializeExpress: (app) => {
        // Create an Express app instance
        app.get("/hello_world", (req, res) => {
            res.send("It's time to kick ass and chew bubblegum!");
        });

        // Use @colyseus/playground (not recommended in production)
        if (process.env.NODE_ENV !== "production") {
            app.use("/", playground);
        }

        // Use @colyseus/monitor
        app.use("/colyseus", monitor());
    },

    beforeListen: () => {
        // Before gameServer.listen() is called
        console.log('Game server is ready to listen.');
    }
});