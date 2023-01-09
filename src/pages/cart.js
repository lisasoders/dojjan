import React from "react";
import dummyImg from "../image/dummyImg.png"
import { useState, useEffect } from "react";
import { FaRegTrashAlt } from 'react-icons/fa';


function Cart( {cartItems, setCartItems} ) {

    var totalPrice = 0;

    

    const deletedProduct = (cartItem) => {
        let deletedProduct = Object.values(cartItems).filter(i => i.id !== cartItem.id)
            setCartItems(deletedProduct)
            console.log(cartItem.id);
      }
    return(
        <div className="cart-wrapper">
            {cartItems.length === 0 ? <div className="empty-cart">Din varukorg är tom </div> :  <div className="product-cart">
                <h1 className="cart-title">Din varukorg</h1>
                <div className="cart-line"></div>
                <div className="card-wrapper">
                {cartItems.map(item => (
                    totalPrice += item.price,
                <div className="cart-card" key={item.id}>
                    <div className="cart-img-svg">
                        <img className="cart-img" alt="dummyImg" src={dummyImg} />
                        <div onClick={() => deletedProduct(item)}><FaRegTrashAlt /></div>
                    </div>
                    <p>{item.title}</p>
                    <p>{item.price} kr</p>
                   
                </div>
            ))}</div></div>}
            {cartItems.length === 0 ? <div className="empty-cart"> </div> :
            <div className="cart-info">
                <h1 className="title-cart-info">VAROR</h1>
                <div className="info-box">
                    <p>TOTALT {totalPrice} SEK</p>
                </div>
            </div>}
        </div>
    )
}

export default Cart;