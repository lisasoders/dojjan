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
    const [image, setImage] = useState([])
    const [backenddata, setBackenddata] = useState([]);
    const [productImg, setProductImg] = useState([]);

    // async function fetchData(url) {
    //     const response = await fetch(url);
    //     const result = await response.json()
    //     // result.data should be as arrayBuffer type
    //     let base64String = btoa(String.fromCharCode(...new Uint8Array(result.data)));
    //     setBackenddata(base64String);
    //   }

    //   useEffect(() => {
    //     let url = "http://localhost:3001/api/get/img"; //xampp server
    //     fetchData(url);
    //   }, []);

      useEffect(() => {
        Axios.get('http://localhost:3001/api/get/img').then((response) => {
            setBackenddata(response.data[2].file_src.data)
            const base64String = btoa(String.fromCharCode(...new Uint8Array(response.data[0].file_src.data)));
            
            var blob = new Blob(response.data[1].file_src.data, {
                type: "image/jpg",
              });
              var reader = new FileReader();
              reader.readAsDataURL(blob);
              reader.onloadend = function () {
                let base64String = reader.result;
                setProductImg(base64String); 
              };
           console.log(response.data, "respondssdsdsdse")
           console.log(base64String, "base64")
        })
       
    }, [])

    console.log(productImg, "productImg")
    


   
    // console.log(base64String, "base64String")
  



    useEffect(() => {
        Axios.get('http://localhost:3001/api/get').then((response) => {
            setProductList(response.data)
            
        })
    }, [])


    // console.log(productList, "produktlista")
    console.log(backenddata, "backenddata")


    
    const handleAdd = (e) => {
        e.preventDefault()
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
                                <div onClick={() => addToCart(product)}><BsCart2 /></div>
                            </div>
                            <Link to={`/product/${product.product_id}`} className="products-link"><h2>{product.title}</h2></Link>
                            <p className="price"> {product.price} kr</p>
                            <img alt="shoe" src={product.image} />
                            <select>
                                <option>Välj storlek</option>
                                <option>38</option>
                                <option>39</option>
                                <option>40</option>
                            </select>
                            <p onClick={() => deletedProduct(product)}>ta bort produkt</p>
                        </div>
                )})}
                <img alt="heeeeeeeeeeej" src={backenddata} />
                {Array.from(backenddata).map((product) => {
                    return(
                        <div className="card" key={product.product_id}>
                              <img alt="shoe" src={product.file_src} />
                        </div>
                )})}

                <img src={`${productImg}`} alt="hjej"/>
        </div>
    )
}

export default Products;