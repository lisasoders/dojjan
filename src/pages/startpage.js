import React from "react";
import Header from "../components/header";
import dummyImg from '../image/dummyImg.png'

function Startpage() {
    return(
        <div className="startpage-wrapper">
           <div className="product-info">
            <img className="startpage-img" alt="shoe" src={dummyImg}></img>
                <div className="startpage-text"><p> 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
           </div>
           <div className="product-info">
                <div className="startpage-text"><p>2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </div>
                <img className="startpage-img" alt="shoe" src={dummyImg}></img>
           </div>
        </div>
    )
}

export default Startpage;