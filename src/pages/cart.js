import React from "react";
import dummyImg from "../image/dummyImg.png"

function Cart( {cartItems, setCartItems} ) {
    return(
        <div className="cart-wrapper">
            {cartItems.length === 0 ? <div>Din varukorg är tom </div> : <div>{cartItems.map(item => (
                <div key={item.id}>
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                    <img src={dummyImg} />
                </div>
            ))}</div>}
        </div>
    )
}

export default Cart;