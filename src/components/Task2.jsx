import React, { useState } from 'react'
//import {Cart} from "../Componets/Cart.jsx";
import Cart from './Cart';
import Item from './Item.jsx';
//import "../styles/Task2.css;"



let im = "https://www.kfcpakistan.com/images/b527b2b0-87a7-11ee-8f64-8969f6610645-thumbnail-2-good-min_variant_0-2023-11-20132126.png"

let products = [{
  name:"2 Zingers,2 Drinks,1 Fries",
  id:101,
  des:"The best Deal in this city at lowest price.",
  price:2000,
  image:im,
  qty:0
},
{
  name:"2 Zingers,2 Drinks,1 Fries",
  id:102,
  des:"The best Deal in this city at lowest price.",
  price:2000,
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