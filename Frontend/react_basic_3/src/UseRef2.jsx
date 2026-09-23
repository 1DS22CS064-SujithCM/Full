import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const UseRef = () => {

    const inputEle=useRef();

    // React stores the input DOM element inside current
    const handleClick=()=>{
        console.log(inputEle.current)
        inputEle.current.style.width="500px"
        inputEle.current.focus()
    }

  return (
    
    <div>
      <input type="text" ref={inputEle}></input>
      <br>
      </br>
      <button onClick={handleClick}>Click here </button>
      
    </div>
  )
}

export default UseRef
