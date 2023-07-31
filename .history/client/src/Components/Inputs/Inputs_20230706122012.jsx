import React from "react";

const Inputs = () {
  return (
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
  );
}

export default Inputs;
