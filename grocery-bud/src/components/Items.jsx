import React from 'react'
import Singleitem from '../Singleitem'

const Items = ({items,removeItem,editItem}) => {
  return (
    <div className='items'>
        {items.map((item)=>{
            return <Singleitem key={item.id} item={item} removeItem={removeItem} editItem={editItem}/>
        })}
    </div>
  )
}

export default Items
