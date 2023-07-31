const io = require("socket.io")(3000);

io.on("conection", (socket) => {
  console.log(socket.id);
});
