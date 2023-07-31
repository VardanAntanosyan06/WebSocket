const io = require("socket.io")(3000, {
  cors: {
    origin: "localhost:3001",
  },
});

io.on("connection", (socket) => {
  socket.on("send-message",(message)=>{
    io.emit("display-message",message)
  })
});
