const io = require("socket.io")(3000,co);

io.on("conection", (socket) => {
  console.log(socket.id);
});
