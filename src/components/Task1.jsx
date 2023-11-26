import React, { useState } from 'react'
import "../styles/Task1.css"


import Item from './Item'
import Cart from './Cart'
let im = "https://as1.ftcdn.net/v2/jpg/04/63/64/00/1000_F_463640059_J3TMAmOkM4Ri0dkSBoOIGVxmyOLXuaQt.jpg"
let product = {
  name:"MacBook Air",
  id:101,
  des:"The best macbook in market at lowest price.",
  price:50000,
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