const io = require("socket.io")(3000, {
  cors: {
    origin: "http://localhost:3001",
  },
});

io.on("connection", (socket) => {
  socket.on("send-message",(message)=>{
    
  })
});
