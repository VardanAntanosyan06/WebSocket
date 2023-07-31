import React, { useState } from "react";
import { io } from "socket.io-client";
const root = ReactDOM.createRoot(document.getElementById("root"));
const socket = io("http://localhost:3000");

const Foo = () => {
  const [id, setId] = useState("...");

  return <div>{id}</div>;
};
