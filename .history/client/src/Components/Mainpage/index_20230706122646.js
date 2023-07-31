import React, { useState } from "react";
import SendMessage from "../SendMessage/SendMessage";

import { io } from "socket.io-client";
const socket = io("http://localhost:3000");

const Foo = () => {
  const [id, setId] = useState("...");
  socket.on("connect", () => setId(socket.id));

  return (
    <div style={{height}}>
      <h1>Your id is</h1>
      <h2>{id}</h2>
      <SendMessage name={"aaaaaa"} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <input
          style={{
            width: 70 + "%",
            height: 50 + "px",
            borderRadius: 30 + "px",
            textAlign: "center",
          }}
          placeholder="send message ..."
        />
        <button style={{ width: 20 + "%", height: 30 + "px" }}>Send</button>
      </div>
    </div>
  );
};

export default Foo;
