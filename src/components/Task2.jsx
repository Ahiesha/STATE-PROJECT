import React, { useState } from 'react'
//import {Cart} from "../Componets/Cart.jsx";
import Cart from './Cart';
import Item from './Item.jsx';
//import "../styles/Task2.css;"



let im = "https://img.freepik.com/premium-photo/modern-laptop-computer-with-blank-screen-desk_488220-61299.jpg?w=740"

let products = [{
  name:"MacBook Air",
  id:101,
  des:"The best macbook in market at lowest price.",
  price:60000,
  image:im,
  qty:0
},
{
  name:"Hp Laptop",
  id:102,
  des:"The best Dell Laptop in market at lowest price.",
  price:20000,
  image:im,
  qty:0
},]

const Task2 = () => {

  let [cart, setCart] = useState({
    
    total:0,
    count:0,

  })

  const addToCart = (index) =>{
     
      let countNew = cart.count 
      countNew+=1 
      
      let totalNew = cart.total
      totalNew += products[index].price
      
      let newcart = {
        count: countNew,
        total:totalNew,
      }
   
      setCart(newcart)

      console.log(cart)
    
  }

  const resetCart= ()=>{

    let newcart = {
      count: 0,
      total:0,
    }

    setCart(newcart)
   
  }

  return (
    <div>
        <Cart resetCart={resetCart} cartCount={[cart.count, cart.total]} />
      <div className='products'>
      {
        products.map((item,i)=>(

          <Item key={i}
            id={item.id}
            name={item.name}
            img = {item.image}
            desc = {item.des}
            price = {item.price}
            addToCart={()=>addToCart(i)}
          />
        ))
      }

  </div>
    </div>
  )
}

export default Task2