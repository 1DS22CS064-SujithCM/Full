import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const UseRef = () => {
const [ name,setName]=useState("")

// useRef returns the object with consists of current 
const count=useRef(0);

useEffect(()=>{
    count.current=count.current+1;
})

  return (
    
    <div>
        <input type="text" onChange={(e)=> setName(e.target.value)}></input>
      <h1> Name is: {name}</h1>
      <h1> Renders: {count.current}</h1>
    </div>
  )
}

export default UseRef
