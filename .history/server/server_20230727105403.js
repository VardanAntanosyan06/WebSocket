const io = require("socket.io")(3000, {
  cors: {
    origin: "http://192.168.1.33:3001",
  },
});

io.on("connection", (socket) => {
  socket.on("send-message",(message)=>{
    io.emit("display-message",message)
  })
});
const io = require("socket.io")(3000, {
  cors: {
    origin: "http://192.168.1.33:3001",
  },
});

io.on("connection", (socket) => {
  socket.on("send-message",(message)=>{
    io.emit("display-message",message)
  })
});
