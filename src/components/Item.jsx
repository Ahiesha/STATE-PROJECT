import React from 'react'
import "../styles/Item.css"


const Item = ({addToCart, name, price, img, desc}) => {
   
  return (
    <div className='item-container'>
        <img width={"90%"} src={img} alt="" />
        <div className='item-body'>
            <h2>{name}</h2>
            <p>{desc}</p>
            <h2>Rs. {price}</h2>

            <button onClick={addToCart} className='btn'>Add to Cart</button>
        </div>
    </div>
  )
}

export default Item;