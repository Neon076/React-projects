import { useState } from 'react'
import './App.css'
import Questionss from './components/Questionss'
import questions from './data'
function App() {
  

  return (
    <main>
      <Questionss questions={questions} />
    </main>
  )
}

export default App
