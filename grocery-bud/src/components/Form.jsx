import React from 'react'
import { useState } from 'react'

const Form = ({addItems}) => {
    const [newItems,setNewItems] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(newItems);
        if(!newItems) return;
        addItems(newItems)
        setNewItems("")
    }
  return (
        <form onSubmit={handleSubmit}>
        <h2>Grocery Bud</h2>
    <div className='form-control'>
        <input type="text" className='form-input' value={newItems} onChange={(e)=> setNewItems(e.target.value)}/>
        <button type="submit" className='btn'>Submit</button>
    </div>
        </form>
  )
}

export default Form
