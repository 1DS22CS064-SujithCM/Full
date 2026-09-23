// function App(){
//   return <h3>hello</h3>
// }

import { useState } from "react"

// export default App

const App = () => {
  const [a,seta]= useState(10)

  const increaseCount=()=>{
    console.log("Before value: ",a);
    seta(a+1)
    console.log("After value: ",a);
  }

  const decreaseCount=()=>{
    console.log("Before value: ",a);
    seta(a-1)
    console.log("After value: ",a);
  }

  return (
    <div>
      <h1>Hello value of a:{a} </h1>
      <button onClick={increaseCount}>Click to increase</button>
      <button onClick={decreaseCount}>Click to decrease</button>
    
    </div>
  )
}

export default App
