import React from 'react'
import "../styles/Cart.css"
import reset from "../assets/reset.png"
import cart from "../assets/cart.png"

const Cart = ({cartCount,resetCart}) => {
  return (
   
    <div className='cart-con'>

    <div className='cart-img-con'>
    <img className='cart-img' src={cart} alt="" />
    <div className='count'>{cartCount[0]}</div>
    </div>
    
    <h2 className='total'>Total:  Rs. {cartCount[1]}</h2>
    <img onClick={resetCart} className='reset' src={reset} />
  
  </div>

  )
}

export default Cart