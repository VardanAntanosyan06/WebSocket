import React, { useState, useEffect } from "react";
import SendMessage from "../SendMessage/SendMessage";

import { io } from "socket.io-client";
const socket = io("http://localhost:3000");

const Foo = () => {
  const [id, setId] = useState("...");
  const [value, setValue] = useState(null);
  useEffect(() => {
    const handleClick = ()=>{
      <SendMessage name={value} />
    }
    socket.on("connect", () => setId(socket.id));
  }, []);
  return (
    <div
      style={{
        height: 400 + "px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div
          style={{
            width: 30 + "%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h1>Your id is</h1>
          <h1>{id}</h1>
        </div>
      </div>
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
        />
        <input
          type="text"
          placeholder="send message ..."
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          style={{ width: 20 + "%", height: 30 + "px" }}
          onClick={handleClick}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Foo;
