import React from "react";
import dummyImg from "../image/dummyImg.png"
import { FaRegTrashAlt } from 'react-icons/fa';


function Cart( {cartItems, setCartItems} ) {

    const deletedProduct = (cartItem) => {
        let deletedProduct = Object.values(cartItems).filter(i => i.id !== cartItem.id)
            setCartItems(deletedProduct)
            console.log(cartItem.id);
      }
    return(
        <div className="cart-wrapper">
            {cartItems.length === 0 ? <div className="empty-cart">Din varukorg är tom </div> :  <div className="product-cart">
                <h1 className="cart-title">Din varukorg</h1>
                {cartItems.map(item => (
                <div className="cart-item" key={item.id}>
                    <img className="cart-img" alt="dummyImg" src={dummyImg} />
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                    <div onClick={() => deletedProduct(item)}><FaRegTrashAlt /></div>
                </div>
            ))}</div>}
        </div>
    )
}

export default Cart;