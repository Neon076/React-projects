import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import Menu from './components/Menu'
import data from './data'
import Category from './components/Category'

// const tempCat = data.map((item)=> item.category)
// const catSet = new Set(tempCat)
// const all = ['all',...catSet]

const allCategory = ['all',...new Set(data.map((item)=> item.category))]
// console.log(allCategory)
function App() {
  const [menuItems, setMenuItems] = useState(data)
  const [category, setCategory] = useState(allCategory)
  const filterItems=(category)=>{

    if(category ==='all'){
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((item)=>item.category === category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <Title title="our Menu" />
      <Category category={category} filterItems={filterItems}/>
      <Menu menuItems={menuItems}/>
    </main>
  )
}

export default App
