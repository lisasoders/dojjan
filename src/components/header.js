import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import { useState } from "react";
import Startpage from "../pages/startpage";
import Products from "../pages/products";
import Contact from "../pages/contact";
import Cart from "../pages/cart";
import Admin from "../pages/admin";
import Product from "../pages/product";
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsCart2 } from 'react-icons/bs';
import DeleteProduct from "./deleteProduct";
import Checkout from "../pages/checkout";


function Header({product}) {

    const [cartItems, setCartItems] = useState([]);
    const [checkoutItems, setCheckoutItems] = useState([]);
    const [productsInCart, setProductsInCart] = useState([]);

    /* Spred operator for cart items */

    const addProduct= (addItems) =>{

        setCartItems([
          ...cartItems,
          addItems,  
        ])
    }

     /* Spred operator for checkout items*/

    const addToCheckout= (addItems) =>{

        setCheckoutItems([
          ...checkoutItems,
          addItems,  
        ])
    }
    

    return(
        <Router>
            <div className="header-wrapper">
                <div className="hamburger-menu">
                <RxHamburgerMenu />
                <div className="dropdown-content">
                    <Link to="/products">Produkter</Link>
                    <Link to="/contact">Kontakt</Link>
                    <Link to="/admin">Admin</Link>
                </div>
                </div>
                <Link to="/"><h1 className="header-title">DOJJAN</h1></Link>
                <div className="header-icon">
                    <Link to="/cart"><BsCart2 /></Link>
                    {/* <Link to="/checkout">checkout</Link> */}
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Startpage />}></Route>
                <Route path="/products" element={<Products addProduct={addProduct} cartItems={cartItems} setCartItems={setCartItems} />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/cart" element={<Cart cartItems={cartItems} checkoutItems={checkoutItems} addProduct={addProduct} addToCheckout={addToCheckout} setCartItems={setCartItems} />}></Route>
                <Route path="/admin" element={<Admin />}></Route>
                <Route path="/checkout" element={<Checkout checkoutItems={checkoutItems} />}></Route>
                <Route path="/product/:id" element={<Product />} />
            </Routes>
        </Router>
    )
}

export default Header;