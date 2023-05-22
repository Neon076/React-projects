import { useState } from 'react'
import './App.css'
import reviews from './data'
import {FaChevronLeft,FaChevronRight,FaQuoteRight} from 'react-icons/fa'
function App() {
  const [index, setIndex] = useState(0)

  const prevItem =()=>{
    setIndex((index)=>{
      const newValue = index-1 
      return newValue;
    })
  }
  const nextItem =()=>{
    setIndex((index)=>{
      const newValue = index+1 
      return newValue;
    })
  }
  return (
   <div className='main'>
    <section className='container'>

      <div className="img-container">
        <span className='quote-icon'><FaQuoteRight/></span>
        <img src={reviews[index].image} alt={reviews[index].name} className='img'/>
      </div>
      <h3 className='author'>{reviews[index].name}</h3>
      <p className="job">{reviews[index].job}</p>
      <p className="review">{reviews[index].text}</p>
      <div className="btn-container">
        <button className="btn btn-prev" onClick={prevItem} disabled={index <= 0}><FaChevronLeft/></button>
        <button className="btn btn-next" onClick={nextItem} disabled={index >=reviews.length-1}><FaChevronRight/></button>
      </div>
    </section>
   </div>
  )
}

export default App
