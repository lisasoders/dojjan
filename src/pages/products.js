import { useState, useEffect } from "react";
import Axios from 'axios';
import dummyImg from '../image/dummyImg.png';
import {Link} from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';


function Products({addProduct, cartItems, setCartItems}) {

    const [productList, setProductList] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        Axios.get('http://localhost:3001/api/get').then((response) => {
            setProductList(response.data)
        })
    }, [])

    
    const handleAdd = (e) => {
      
        Axios.post('http://localhost:3001/api/post/purchase', {
            title: title,
            description: description,
            price: price,
        }).then(() => {
            alert("successfull post")
        })
    }

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
                                <div onClick={() => {addToCart(product); handleAdd()}}><BsCart2 /></div>
                            </div>
                            <Link to={`/product/${product.product_id}`} className="products-link"><input type="text" name="title" value={product.title} onChange={(e) => {setTitle(e.target.value)}}></input></Link>
                            <input type="number" name="price" value={product.price} onChange={(e) => {setPrice(e.target.value)}}></input>
                            <input type="text" name="description" value={product.description} onChange={(e) => {setDescription(e.target.value)}}></input>
                            <select>
                                <option>Välj storlek</option>
                                <option>38</option>
                                <option>39</option>
                                <option>40</option>
                            </select>
                            {/* <h4> {product.description} </h4> */}
                            <p onClick={() => deletedProduct(product)}>ta bort produkt</p>
                        </div>
                )})}
        </div>
    )
}

export default Products;