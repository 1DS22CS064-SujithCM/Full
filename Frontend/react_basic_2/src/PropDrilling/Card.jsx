import React from 'react'
import Card2 from './Card2'

const Card = (props) => {
    console.log(props.username)
  return (
    <div>
      This is Card 1
      username is {props.username}
      <Card2 username={props.username} />
    </div>
  )
}

export default Card
