const io = require("socket.io")(3000, {
  cors: {
    origin: "http://localhost:3000/",
  },
});

io.on("connection", (socket) => {
  socket.on("send-message",(message)=>{
    io.emit("display-message",message)
  })
});
