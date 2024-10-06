// server/index.js
const http = require('http');
const express = require('express');
const colyseus = require('colyseus');
const FishRoom = require('./FishRoom');

const port = process.env.PORT || 2567;
const app = express();

const server = http.createServer(app);
const gameServer = new colyseus.Server({
  server,
});

// Define the room
gameServer.define('fish_room', FishRoom);
console.log('FishRoom defined.');

gameServer.listen(port);
console.log(`Game server is listening on ws://localhost:${port}`);
