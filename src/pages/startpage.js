import React from "react";
import Header from "../components/header";
import dummyImg from '../image/dummyImg.png'
import GetProducts from "../components/getProducts";
import adidasStartPage  from '../image/adidas.startpage.jpg';
import nikePopular  from '../image/nike-popular.jpg';
import nbPopular  from '../image/nb-popular.jpg';
import nikeAirPopular  from '../image/nikeAir-popular.jpg';
import adidasPopular  from '../image/adidas-popular.jpg';
import nbBig  from '../image/nb-startpage-big.jpg';
import nbSmall  from '../image/nb-startpage-small.png';

function Startpage() {
    return(
        <div className="hero-wrapper">
            <div className="startpage-hero">
                {/* <img src={adidasStartPage}></img> */}
                <h1>Nu ännu bättre pris på fler varor online</h1>
            </div>
        <div className="startpage-wrapper">
            <h3>Populära varor</h3>
            <div className="products-popular">
                <div className="nike-popular">
                    {/* Här ska det vara länk till enskild produkt */}
                    <img alt="shoe" src={nikePopular}></img>
                    <p>Nike Legend Essential</p>
                </div>
                <div className="nikeAir-popular">
                    {/* Här ska det vara länk till enskild produkt */}
                    <img alt="shoe" src={nikeAirPopular}></img>
                    <p>Air Force 1</p>
                </div>
                <div className="nb-popular">
                    {/* Här ska det vara länk till enskild produkt */}
                    <img alt="shoe" src={nbPopular}></img>
                    <p>New Balance – 574</p>
                </div>
                <div className="adidas-popular">
                    {/* Här ska det vara länk till enskild produkt */}
                    <img alt="shoe" src={adidasPopular}></img>
                    <p>Adidas Originals</p>
                </div>
            </div>
            <div className="startpage-offer">
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="startpage-products">
                    <img className="img-big" alt="shoe" src={nbBig}></img>
                <div className="img-small">
                     {/* Här ska det vara länk till enskild produkt */}
                    <h1>NEW BALANCE M997</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</p>
                    <img alt="shoe" src={nbSmall}></img>
                </div>
            </div>
           {/* <div className="product-info">
            <img className="startpage-img" alt="shoe" src={dummyImg}></img>
                <div className="startpage-text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
           </div>
           <div className="product-info">
                <div className="startpage-text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </div>
                <img className="startpage-img" alt="shoe" src={dummyImg}></img>
           </div> */}
        </div>
        </div>
    )
}

export default Startpage;