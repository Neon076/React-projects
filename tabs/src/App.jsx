import { useEffect, useState } from 'react'
import './App.css'
import Loading from './components/Loading'
import JobInfo from './components/JobInfo'
import BtnContainer from './components/BtnContainer'


const url ="https://course-api.com/react-tabs-project"
function App() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentItem, setCurrentItem] = useState(0)


  const fetchData = async()=>{
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs)
    setLoading(false)
    // console.log(newJobs)
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className='jobs-center'>

    {loading && <Loading/>}
    <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem}/>
    {!loading && <JobInfo jobs={jobs} currentItem={currentItem}/>}

    </div>
  )
}

export default App
