import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { FaAngleDoubleRight } from 'react-icons/fa';

const Duties = ({duties}) => {
   
  return (
    <div>
      {duties.map((duty)=>{
         const id =uuidv4();
         console.log(id);
        return (
            <div className="job-desc" key={id}>
                <FaAngleDoubleRight className='job-icon'/>
                <p>{duty}</p>
            </div>
        )
      })}
    </div>
  )
}

export default Duties
