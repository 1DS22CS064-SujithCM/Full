import React, { useContext } from 'react'
import { dataContext } from '../context/UserContext'

const Header = () => {

  const data = useContext(dataContext)

  return (
    <div>
      Header from userContext {data.age}
    </div>
  )
}

export default Header
