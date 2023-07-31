const io = require("socket.io")(3000,{
          cors:""
});

io.on("conection", (socket) => {
  console.log(socket.id);
});
