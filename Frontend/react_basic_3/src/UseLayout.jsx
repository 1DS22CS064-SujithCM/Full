import React, { useEffect, useLayoutEffect, useState,useRef } from 'react'

const UseLayout = () => {
  const [toggle, setToggle] = useState(false)
  const dom=useRef()

  useLayoutEffect(() => {
    if(dom.current!=null)
    {
        const dimension=dom.current.getBoundingClientRect();
        dom.current.style.paddingTop=`${dimension.height}px`
    }
  }, [toggle])

  useEffect(() => {
    if(dom.current!=null)
    {
        const dimension=dom.current.getBoundingClientRect();
        dom.current.style.paddingTop=`${dimension.height}px`
    }
  }, [toggle])
  

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h4 ref={dom}>Hello</h4>}
    </div>
  )
}

export default UseLayout