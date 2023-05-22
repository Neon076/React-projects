import { useState } from 'react'
import Form from './components/Form'
import './App.css'
import ColorList from './components/ColorList'
import Values from 'values.js'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [count, setCount] = useState(0)
  const [colors ,seetColors] = useState(new Values('#1e3a8a').all(10))

  const addColor = (color)=>{
    try {
      const newColor = new Values(color).all(10)
      seetColors(newColor)
    } catch (error) {
      toast.error("Invalid Hex Color Input")
    }
    console.log(color);
  }
  return (
    <>
      <Form addColor={addColor}/>
      <ColorList colors={colors}/>
      <ToastContainer position='top-center'/>
    </>
  )
}

export default App
