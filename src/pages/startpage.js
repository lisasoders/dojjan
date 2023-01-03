import React from "react";
import Header from "../components/header";
import dummyImg from '../image/dummyImg.png'
import ProductId3 from "../components/productId3";
import ProductId7 from "../components/productId7";
import GetProducts from "../components/getProducts";

function Startpage() {
    return(
        <div className="startpage-wrapper">
           <div className="product-info">
            <img className="startpage-img" alt="shoe" src={dummyImg}></img>
                <div className="startpage-text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
           </div>
           <div className="product-info">
                <div className="startpage-text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </div>
                <img className="startpage-img" alt="shoe" src={dummyImg}></img>
           </div>
        </div>
    )
}

export default Startpage;