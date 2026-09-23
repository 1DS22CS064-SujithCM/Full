import React from 'react'
import { useState } from 'react'
// useState with object
const UseState = () => {
    const [details,setDetails]=useState({counter:0,name:""});
    
    const increaseCount=()=>{
        setDetails((prev)=>({
            ...prev,
            counter: prev.counter+1
        }));
    }
    
    const decreaseCount=()=>{
        setDetails((prev)=>({
            ...prev,
            counter: prev.counter+1
        }));
    }

    const setText=(e)=>{
        setDetails((prev)=>({
            ...prev,
            name:e.target.value
        }));
    }

  return (
    <div>
      <input type="text" onChange={setText}></input>
      <h1>{details.name} Count value is : {details.counter}</h1>
      <button onClick={increaseCount}>Click to increase</button>
      <button onClick={decreaseCount}>Click to decrease</button>
    </div>
  )
}

export default UseState
