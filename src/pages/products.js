import { useState, useEffect } from "react";
import Axios from 'axios';
import dummyImg from '../image/dummyImg.png';
import {Link} from 'react-router-dom';

function Products({addProduct}) {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/get').then((response) => {
            setProductList(response.data)
        })
    }, [])

  const addToCart = (product) => {
    addProduct(product);
    console.log(product);
  }

    return(
        <div className="product-wrapper">
                {productList.map((product) => {
                    return(
                        <div className="card" key={product.id}>
                            <Link to={`/product/${product.id}`}><h2>{product.title}</h2></Link>
                            <img alt="shoe" src={dummyImg} />
                            <p className="price"> {product.price} kr</p>
                            <h4> {product.description} </h4>
                            <button onClick={() => addToCart(product)}>Add to cart</button>
                        </div>
                )})}
        </div>
    )
}

export default Products;