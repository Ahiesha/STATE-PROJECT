import React, { useState } from 'react'
import "../styles/Task1.css"


import Item from './Item'
import Cart from './Cart'
let im = "https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-CrispyDuoBox-2023-05-31115706.png"
let product = {
  name:"Crispy Duo Box",
  id:101,
  des:"The best Deal in this city at lowest price.",
  price:1250,
  image:im,
}

const Task1 = () => {

  let [cartCount, setCartCount] = useState([0,0])
  

  const addToCart = () =>{
    let cart = [...cartCount]
    cart[0] +=1
    cart[1] = product.price * cart[0]
    setCartCount(cart)
    
  }

  const resetCart= ()=>{
    let cartReset = [...cartCount]
    cartReset[0]=0
    cartReset[1]=0
    setCartCount(cartReset)
  }

  return (
    <>

      <Cart
            resetCart = {resetCart}
            cartCount = {cartCount}
            
      />

      <div>
        <Item
            id={product.id}
            name={product.name}
            img = {product.image}
            desc = {product.des}
            price = {product.price}
            addToCart={addToCart}
        />
      </div>
    
    </>
  )
}

export default Task1