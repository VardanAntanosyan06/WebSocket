import React, { useState } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:3000");

const Foo = () => {
  const [id, setId] = useState("...");
  socket.on("connect", () => setId(socket.id));
  return (
    <div>
      <h1>Your id is</h1>
      <h2>{id}</h2>
      <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
        <input style={{width:70+"%",height:50+"px"}} placeholder="send message ..."/>
        <button style={{width:20+"%",height:30+"px",borderRadius:30+"px"}}>Send</button>
      </div>
    </div>
  );
};

export default Foo;
