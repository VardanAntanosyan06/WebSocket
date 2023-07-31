import React, { useState, useEffect } from "react";
import SendMessage from "../SendMessage/SendMessage";

import { io } from "socket.io-client";
const socket = io("http://localhost:3000");

const Foo = () => {
  const [id, setId] = useState("...");
  const [value, setValue] = useState(null);
  const [messages, setMessages] = useState([]);
  // useEffect(() => {
    // const handleClick = 
    socket.on("connect", () => setId(socket.id));
  // }, []);
    return (
    <div
      style={{
        height: 900 + "px",
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
      <div style={{height:600+"px",overflowY:"scroll"}}>
      {messages.length>0 && messages.map((message)=><h1>{message}</h1>)}
      </div>
          {socket.emit("")}
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
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          style={{ width: 20 + "%", height: 30 + "px" }}
          onClick={()=>value.length>0 && setMessages([...messages,value])}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Foo;
