import React, { useState } from 'react'

const Form = () => {

const submitHandler=(e)=>{
    e.preventDefault()
    console.log("hi",e)
    console.log(username)
    setName('')
}

const [username,setName]=useState("")
  return (
    <div>
        <form 
         onSubmit={(e)=>{
            submitHandler(e)}}
            >
            <input type="text" 
            placeholder='HEllo'
            onChange={(e)=>{
                // console.log(e.target.value)
                setName(e.target.value)
            }}
            value={username}
            ></input>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form
