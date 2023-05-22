import React from 'react'
import Person from './Person'

function List(props) {
  return (
    <section>
        {props.people.map((person)=>{
            return (
                <Person key={person.id} {...person}/>
            )
        })}
    </section>
  )
}

export default List
