import React from 'react'
import MenuItems from './MenuItems'

function Menu(props) {
    function fun(cat){
        return (<MenuItems key={cat.id} {...cat}/>)
    }
  return (
    <div className='container'>

        {/* {props.menuItems.map((item)=>{
            return (
                <MenuItems key={item.id} {...item}/>
            )
        })} */}
        {props.menuItems.map(fun)}
    </div>
  )
}

export default Menu
