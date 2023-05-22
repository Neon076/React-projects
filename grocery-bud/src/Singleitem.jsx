import React, { useState } from "react";

const Singleitem = ({ item, removeItem, editItem }) => {
    
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p style={{ textDecoration: item.completed && "line-through" }}>
        {item.name}
      </p>
      <button className='btn btn-remove' onClick={() => removeItem(item.id)}>
        Remove
      </button>
    </div>
  );
};

export default Singleitem;
