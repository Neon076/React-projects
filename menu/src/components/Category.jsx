import React from 'react'

function Category(props) {
//   console.log(props.category)
    // var {category , filterItems} = props

  return (
    <div className='btn-catagegory'>
      {props.category.map((cat)=>{
        return <button className="btn" key={cat} onClick={()=>props.filterItems(cat)}>{cat}</button>
      })}
    </div>
  )
}

export default Category
