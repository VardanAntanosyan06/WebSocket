const io = require("socket.io")(3000, {
  cors: {
    origin: "http://localhost:3001",
  },
});

io.on("conection", (socket) => {
  console.log(socket.id);
  socket.on("send-message",(message)=>{
    {message}
  })
});
