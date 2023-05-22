import React, { useState } from 'react'

const Form = ({addColor}) => {
  const [color ,setColor]=useState('')

  const handleSubmit=(e)=>{
    e.preventDefault();
    addColor(color)
  }
  return (
    <div className='center'>
      <h3>Color Generator</h3>
      <form className='form-color' onSubmit={handleSubmit}>
        <input type="color" value={color} onChange={(e)=> setColor(e.target.value)}/>
        <input type="text" value={color} onChange={(e)=> setColor(e.target.value)} placeholder='#1e3a8a'/>
        <button type="submit" className='btn' style={{background: color}}>Submit</button>
      </form>
    </div>
  )
}

export default Form
