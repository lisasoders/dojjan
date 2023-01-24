import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from 'axios';
import dummyImg from '../image/dummyImg.png';


function Product() {

    /* using useParams() to get the id from clicked product */ 

    const {id} = useParams();

    const [products, setProducts] = useState([]);

    console.log(id, "test")

    /* Gets the single product based on the id */

    useEffect(() => {
        Axios.get(`http://localhost:3001/api/get/${id}`).then((response) => {
            setProducts(response.data)
        })
    }, [id])

    console.log(products);

    return(
        <div className="single-page-wrapper">
                {Array.from(products).map((product) => {
                    return(
                        <div className="single-product" key={product.id}>
                            <div className="single-page-img">
                                <img alt="shoe" src={dummyImg} />
                                <img alt="shoe" src={dummyImg} />
                            </div>
                            <div className="single-product-info">
                                <h2>{product.title}</h2>
                                <p className=""> {product.price} kr</p>
                                <h4> {product.description} </h4>
                                <select className="single-product-select">
                                    <option>Välj storlek</option>
                                    <option>38</option>
                                    <option>39</option>
                                    <option>40</option>

                                </select>
                            </div>
                        </div>
                )})}
        </div>
    )
}

export default Product;