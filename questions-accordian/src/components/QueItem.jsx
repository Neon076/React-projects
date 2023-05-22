import React from 'react'
import { useState } from 'react'
import { AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'
function QueItem(props) {
    
    const [showAns, setShowAns] = useState(false)
  return (
    <div className='container'>
      <header>
        <h4 className='questions'>{props.title}</h4>
        <button className="btn btn-question" onClick={()=>setShowAns(!showAns)}>
            {showAns?<AiOutlineMinus/>:<AiOutlinePlus/>}
        </button>
      </header>
        {showAns && <p className='answer'>{props.info}</p>}
    </div>
  )
}

export default QueItem
