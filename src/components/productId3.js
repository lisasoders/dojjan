import React, { useState, useEffect } from "react";
import Axios from 'axios';
import dummyImg from '../image/dummyImg.png';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import GetProducts from "./getProducts";

function ProductId3() {

    const [productList, setProductList] = useState([]);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/get').then((response) => {
            setProductList(response.data)
        })
    }, [])

    const handleClick = (e) => {
        // e.preventDefault();
        console.log("hej")
    }

    return(
        <div>
                {productList.map((product) => {
                    return(
                        <div key={product.id}>
                            <h2>{product.title}</h2>
                            <h4> {product.description} </h4>
                        </div>
                )})}
        </div>
    )
}

export default ProductId3;