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


function Header({product}) {

    const [cartItems, setCartItems] = useState([]);
    const [productsInCart, setProductsInCart] = useState([]);

    const addProduct= (addItems) =>{

        setCartItems([
          ...cartItems,
          addItems,  
        ])
        }

    return(
        <Router>
            <div className="header-wrapper">
                <div className="hamburger-menu">
                <RxHamburgerMenu />
                <div className="dropdown-content">
                    <Link to="/">Startsida</Link>
                    <Link to="/products">Produkter</Link>
                    <Link to="/contact">Kontakt</Link>
                    <Link to="/admin">Admin</Link>
                </div>
                </div>
                <h1>DOJJAN</h1>
                {/* <div className="link-wrapper">
                    <Link to="/">Startsida</Link>
                    <Link to="/products">Produkter</Link>
                    <Link to="/contact">Kontakt</Link>
                    <Link to="/cart">Varukorg</Link>
                    <Link to="/admin">Admin</Link>
                </div> */}
                <div className="header-icon">
                    <Link to="/cart"><BsCart2 /></Link>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Startpage />}></Route>
                <Route path="/products" element={<Products addProduct={addProduct} />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}></Route>
                <Route path="/admin" element={<Admin />}></Route>
                <Route path="/product/:id" element={<Product />} />
            </Routes>
        </Router>
    )
}

export default Header;