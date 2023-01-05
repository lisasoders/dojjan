import React from "react";
import dummyImg from "../image/dummyImg.png"

function Cart( {cartItems, setCartItems} ) {
    return(
        <div className="cart-wrapper">
            {cartItems.length === 0 ? <div className="empty-cart">Din varukorg är tom </div> :  <div className="product-cart">
                <h1 className="cart-title">Din varukorg</h1>
                {cartItems.map(item => (
                <div className="cart-item" key={item.id}>
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                    <img className="cart-img" alt="dummyImg" src={dummyImg} />
                </div>
            ))}</div>}
        </div>
    )
}

export default Cart;