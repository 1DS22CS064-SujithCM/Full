import React,{ useContext } from 'react'
import { dataContext } from '../context/UserContext'

const Footer = () => {
  const data = useContext(dataContext)
  return (
    <div>
      Footer  from userContext {data.username}
    </div>
  )
}

export default Footer
