import React from 'react'

function MenuItems(props) {
  return (
    <article className='menu-item'>
        <img src={props.img} alt={props.title} className="img" />
        <div className="item-info">
            <header className='title-price'>
                <h4 className='menu-title'>{props.title}</h4>
                <p className="price">₹{props.price}</p>
            </header>
            <p className="desc">{props.desc}</p>
        </div>
    </article>
    )
}

export default MenuItems
