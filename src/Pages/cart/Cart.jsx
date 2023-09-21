import React, { useContext } from 'react'
import {PRODUCTS} from '../../products'
import {ShopContext} from '../../Context/shop-context'
import {CartItem} from './Cart-item'
import './Cart.css'
import {useNavigate} from 'react-router-dom'
export const Cart = () => {
  const {cartItems,getTotalCartAmount} =useContext(ShopContext)
  const TotalAmount =getTotalCartAmount()

  const navigate = useNavigate()


  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product)=>{
          if(cartItems[product.id]!==0){
            return <CartItem data ={product}/>
          }
        })}
      </div>
      {TotalAmount > 0 ?
      <div className='checkout'>
        <p>Subtotal : ${TotalAmount} </p>
        <button onClick={()=>navigate("/")}>Continue Shopping</button>
        <button>CheckOut</button>
      </div>

      :   <h1>Your Cart Is Empty</h1>
      }
    </div>  
  )
}
