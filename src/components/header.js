import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import { useState } from "react";
import Startpage from "../pages/startpage";
import Products from "../pages/products";
import Contact from "../pages/contact";
import Cart from "../pages/cart";
import Admin from "../pages/admin";

function Header() {

    return(
        <Router>
            <div className="header-wrapper">
                <h1>Dojjan</h1>
                <div className="link-wrapper">
                    <Link to="/">Startsida</Link>
                    <Link to="/products">Produkter</Link>
                    <Link to="/contact">Kontakt</Link>
                    <Link to="/cart">Varukorg</Link>
                    <Link to="/admin">Admin</Link>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Startpage />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/admin" element={<Admin />}></Route>
            </Routes>
        </Router>
    )
}

export default Header;