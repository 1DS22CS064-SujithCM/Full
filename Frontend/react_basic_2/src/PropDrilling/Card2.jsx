import React from 'react'
import Card3 from './Card3'

const Card2 = (props) => {
  return (
    <div>
      This is Card 2
      Username is {props.username}
      <Card3 username={props.username}/>
    </div>
  )
}

export default Card2
