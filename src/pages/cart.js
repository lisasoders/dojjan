import React from "react";
import dummyImg from "../image/dummyImg.png"
import { useState, useEffect } from "react";
import { FaRegTrashAlt } from 'react-icons/fa';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import Checkout from "./checkout";


function Cart( {cartItems, setCartItems} ) {

    const [purchase, setPurchase] = useState([]);
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [price, setPrice] = useState([]);
    const [image, setImage] = useState('');
    

    var totalPrice = 0;

    console.log(purchase, "purchase");

    const handleAdd = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3001/api/post/purchase', {
            title: title,
            description: description,
            price: price,
        }).then(() => {
            alert("successfull post")
        })

        console.log("TEST")
    }

    

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
                <form className="cart-card" key={item.id}>
                    <div className="cart-img-svg">
                        <img className="cart-img" alt="dummyImg" src={dummyImg} />
                        <div onClick={() => deletedProduct(item)}><FaRegTrashAlt /></div>
                    </div>
                    <input type="text" name="title" value="name" onChange={(e) => {setTitle(e.target.value)}}></input>
                    <input type="text" name="description" value={item.description} onChange={(e) => {setDescription(e.target.value)}}></input>
                    <input type="number" name="price" value={item.price} onChange={(e) => {setPrice(e.target.value)}}></input>
                    <button onClick={(e) => handleAdd(e)}>Köp</button>
                   
                </form>
            ))}</div></div>}
            {cartItems.length === 0 ? <div className="empty-cart"> </div> :
            <div className="cart-info">
                <h1 className="title-cart-info">VAROR</h1>
                <div className="info-box">
                    <p>TOTALT {totalPrice} SEK</p>
                    <button onClick={() => handleAdd}>Köp</button>
                </div>
            </div>}
        </div>
    )
}

export default Cart;