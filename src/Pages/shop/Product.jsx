import React, { useContext } from 'react'
import {ShopContext} from '../../Context/shop-context'

export  const Product = (props) =>{
    const{id,productName,price,productImage} = props.data;

    const {addToCart, cartItems} = useContext(ShopContext);
    const CartItemAmount = cartItems[id];
    
    return (
    <div className='product'><img src={productImage}/>
    <div className='description'>
      <p> <b>{productName}</b> </p>
      <p> <b> ${price}</b> </p>
    </div>
    <button className='addToCartBttn' onClick={()=>addToCart(id)}>Add To Cart {CartItemAmount > 0 && <> ({CartItemAmount}) </>} </button>
    </div>
  )
}