import React from 'react'
import Duties from './Duties'

const JobInfo = ({jobs , currentItem}) => {
    const {id,order,title,dates,duties,company} =jobs[currentItem]
  return (
    <div className='jobs-info'>
      <h2>{title}</h2>
      <span className='job-company'>{company}</span>
      <p className='job-date'>{dates}</p>
      <Duties duties={duties}/>
    </div>
  )
}

export default JobInfo
