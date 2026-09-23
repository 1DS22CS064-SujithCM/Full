import React, { createContext } from 'react'

export const dataContext= createContext()

const UserContext = ({children}) => {

  const user={
    username:"something",
    age: 10,
    city: "None"
  }
  return (
    <div>
        <dataContext.Provider value={user}>
            {children}
        </dataContext.Provider>
        
      From UserContext.jsx
    </div>
  )
}

export default UserContext
