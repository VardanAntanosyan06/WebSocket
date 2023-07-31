const io = require("socket.io")(3000,{
          cors:{
                    origin:""
          }
});

io.on("conection", (socket) => {
  console.log(socket.id);
});
