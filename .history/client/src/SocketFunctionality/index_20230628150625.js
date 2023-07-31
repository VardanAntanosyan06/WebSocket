import React, { useState } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:3000");

const Foo = () => {
  const [id, setId] = useState("...");
  socket.on("connect", () => setId(socket.id));
  return(
            <div>
                    <h1><
  )
          h1>{id}</div>;
};

export default Foo;
