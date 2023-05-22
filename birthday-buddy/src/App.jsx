import './App.css'
import React from 'react'
import data from './data'
import { useState } from 'react'
import List from './List'

function App() {
  const[people ,setPeople]=useState(data);

  const clearItems = ()=>{
    setPeople([]);
  }
  return (
    <main>
      <section className='container'>
        <h3>{people.length} Birthdays Today</h3>
        <List people={people}/>
      <button className="btn" onClick={clearItems}>Clear All</button>
      </section>
    </main>
  )
}

export default App
