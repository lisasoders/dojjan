import { useState, useEffect } from "react";
import Axios from 'axios';
import dummyImg from '../image/dummyImg.png';
import {Link} from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';


function Products({addProduct, cartItems, setCartItems}) {

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

  const deletedProduct = (cartItem) => {
    let deletedProduct = Object.values(cartItems).filter(i => i.id !== cartItem.id)
        setProductList(deletedProduct)
        console.log(cartItem.id);
  }

    return(
        <div className="product-wrapper">
                {productList.map((product) => {
                    return(
                        <div className="card" key={product.product_id}>
                            <div className="product-img-svg">
                                <img className="products-img" alt="shoe" src={dummyImg} />
                                <div onClick={() => addToCart(product)}><BsCart2 /></div>
                            </div>
                            <Link to={`/product/${product.product_id}`} className="products-link"><h2>{product.title}</h2></Link>
                            <p className="price"> {product.price} kr</p>
                            {/* <h4> {product.description} </h4> */}
                            <p onClick={() => deletedProduct(product)}>ta bort produkt</p>
                        </div>
                )})}
        </div>
    )
}

export default Products;