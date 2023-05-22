import React from 'react'

function Person(props) {
  return (
    <div className='person'>
        <img src={props.image} alt={props.name} />
        <div>
            <h3>{props.name}</h3>
            <p>{props.age}</p>
        </div>
    </div>
  )
}

export default Person
