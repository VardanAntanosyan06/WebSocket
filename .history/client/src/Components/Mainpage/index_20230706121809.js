import React, { useState } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:3000");
import Inputs from "../Inputs/Inputs";

const Foo = () => {
  const [id, setId] = useState("...");
  socket.on("connect", () => setId(socket.id));
  return (
    <div>
      <h1>Your id is</h1>
      <h2>{id}</h2>
      <in
    </div>
  );
};

export default Foo;
