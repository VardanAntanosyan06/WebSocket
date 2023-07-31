import React, { useState } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:3000");
impo
const Foo = () => {
  const [id, setId] = useState("...");
  socket.on("connect", () => setId(socket.id));
  return (
    <div>
      <h1>Your id is</h1>
      <h2>{id}</h2>
    </div>
  );
};

export default Foo;
