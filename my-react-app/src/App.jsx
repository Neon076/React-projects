import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import data from '../data'

function App() {
  const [people, setPeople] = useState([])
  
  const showClick = ()=>{
    const data1 = data
    setPeople(data1)
   document.getElementById("clear").style.display = "block"
    // console.log(data)
  } 

  const removeItem = (id)=>{
    console.log(id)
   const newPeople = people.filter((person)=> person.id !==id)
    // console.log(newPeople)
    setPeople(newPeople)
  }
  const clearItem = ()=>{
    setPeople([])
    document.getElementById("clear").style.display = "none"
  }

  return (
    <>
      <div className="container">
        <h2>UserState Array Example</h2>
        <h4>Show People List:</h4>
        <button className="btn btn-success btn-lg" onClick={showClick}>Show</button>
        <hr />
      </div>
      {people.map((person)=>{
        return(
        <div  className="d-flex flex-column align-items-start" key={person
        .id}>
          <h4>Name:{person.Name}</h4>
          <p>Age:{person.Age}</p>
          <p>Email:{person.email}</p>
          <button className="btn btn-sm btn-primary" onClick={()=>removeItem(person.id)}>Remove Item</button>
          <hr style={{width:"350px"}}/>         
        </div>
        )
      })}
      <button className="btn btn-lg btn-success" id="clear" style={{display:"none"}} onClick={clearItem}>Clear All Items</button>
    </>
  )
}

export default App
