import React from 'react'
import { useState } from 'react'
// useState with number and strings
const UseState = () => {
    const [data,setData]=useState(0);
    const [text,setText]=useState("");

    const increaseCount=()=>{
        setData(data+1);
    }

    const decreaseCount=()=>{
        setData(data-1);
    }

  return (
    <div>
      <input type="text" onChange={e=>setText(e.target.value)}></input>
      <h1>{text} Count value is : {data}</h1>
      <button onClick={increaseCount}>Click to increase</button>
      <button onClick={decreaseCount}>Click to decrease</button>
    </div>
  )
}

export default UseState
