import React from 'react'
import { useState,useEffect } from 'react'

const UseEffectOne = () => {
    const [data,setData]=useState(0);
    const [otherdata,setOtherData]=useState(5);

    // without dependency it running when every the change happens in this component (i.e UseEffectOne )
    useEffect(()=>{
        document.title=`${data} is clicked!`
    })

    // with empty array only for one time
    useEffect(()=>{
        document.title=`${data} is clicked!`
    },[])

    // with variable 
    useEffect(()=>{
        document.title=`${otherdata} is clicked!`
    },[otherdata])

    const increaseCount=()=>{
        setData(data+1);
    }

    const decreaseCount=()=>{
        setData(data-1);
    }

  return (
    <div>
    
      <h1> Count value is : {data}</h1>
      <button onClick={increaseCount}>Click to increase</button>
      <button onClick={decreaseCount}>Click to decrease</button>

      <br></br>
      <h1>Other Count value is : {otherdata}</h1>
      <button onClick={()=>{setOtherData(otherdata+5)}}>Click to increase by 5</button>
    </div>
  )
}

export default UseEffectOne
