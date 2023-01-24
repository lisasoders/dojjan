import { useState, useEffect } from "react";
import Axios from 'axios';

function DeleteProducts( {title, description, price, image, loggedIn, setLoggedIn} ) {

    /* Trying to delete product */

    const deleteProduct = () => {
        Axios.delete(`http://localhost:3001/api/delete/${title}`)
    }


    return(
        <div>
            <h1>hej</h1>
        </div>
    )
}

export default DeleteProducts;