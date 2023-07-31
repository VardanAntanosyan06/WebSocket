import React, { useState } from "react";
import Inputs from "../Inputs/Inputs";
import SendMessage from "../SendMessage/SendMessage";

import { io } from "socket.io-client";
const socket = io("http://localhost:3000");

const Foo = () => {
  const [id, setId] = useState("...");
  socket.on("connect", () => setId(socket.id));

  return (
    <div>
      <h1>Your id is</h1>
      <h2>{id}</h2>
      <Inputs />
      <SendMessage name={}/>
    </div>
  );
};

export default Foo;
