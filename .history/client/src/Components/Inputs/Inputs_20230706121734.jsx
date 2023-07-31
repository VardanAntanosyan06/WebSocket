import React from 'react'

function Inputs() {
  return (
    <div>   <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
    <input style={{width:70+"%",height:50+"px",borderRadius:30+"px",textAlign:"center"}} placeholder="send message ..."/>
    <button style={{width:20+"%",height:30+"px"}}>Send</button>
  </div></div>
  )
}

export default Inputs