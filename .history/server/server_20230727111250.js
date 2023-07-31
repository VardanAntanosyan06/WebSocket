const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = 3000;
const host = '0.0.0.0'; // Listen on all network interfaces

// Your Socket.io server code here

server.listen(port, host, () => {
  cors: {
    // origin: "http://192.168.1.32:3000/",
  },
});

io.on("connection", (socket) => {
  socket.on("send-message",(message)=>{
    io.emit("display-message",message)
  })
});
