import React, { useState } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:3000");

const Foo = () => {
  const [id, setId] = useState("...");
  socket.on("connect",()=>)
  return <div>{id}</div>;
};

export default Foo