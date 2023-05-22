import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { nanoid } from 'nanoid'
import text from './data'

function App() {
  const [count, setCount] = useState(1)
  const [data ,setData] = useState([])

  const handleSubmit = (e)=>{
    e.preventDefault();
    // console.log(typeof count);
    const num = parseInt(count)
    const newText = text.slice(0,num)
    setData(newText)
    // console.log(data);
  }
  return (
    <>
     <div className="center">
      <h4>Tired of boring lorem ipsum?</h4>

    <form className='info-form' onSubmit={handleSubmit}>
    <label htmlFor="amount">Paragraphs :</label>
    <input type="number" name="amount" className='input-text' min={1} max={8} step={1} onChange={(e)=> setCount(e.target.value)} value={count}/>
    <button type="submit" className='btn-gen'>Generate</button>
    </form>
    <article className='text-container'>
      {data.map((item )=>{
       return <p key={nanoid()} className='text'>{item}</p>
      })}
    </article>
     </div>
    </>
  )
}

export default App
