import React from 'react'
import QueItem from './QueItem'

function Questionss(props) {
  return (
    <div className='question-container'>
      <h2 style={{marginTop:'1rem'}}>FAQ's</h2>
      <div className='title-underline'></div>
      {props.questions.map((que)=>{
        return(
            <QueItem key={que.id} {...que}/>
        )
      })}
    </div>
  )
}

export default Questionss
