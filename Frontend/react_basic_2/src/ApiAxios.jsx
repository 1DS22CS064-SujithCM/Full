import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ApiAxios  = () => {

  const[data,setData]=useState([])

  const getData= async ()=>{
    // console.log("Hello")
    const response= await axios.get('https://picsum.photos/v2/list');
    console.log(response.data)

    setData(response.data)
  }

  return (
    <div>
      API calling using Axios
      <br></br>
      <button onClick={getData}>GET DATA</button>
      <div>
        {data.map(function (ele, idx) {
          return (
            <div key={idx}>
              <img
                style={{ height: "100px", width: "100px" }}
                src={ele.download_url}
                alt="nope"
              />
              <h1>{ele.author}</h1>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default ApiAxios
