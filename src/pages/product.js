import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from 'axios';
import dummyImg from '../image/dummyImg.png';


function Product() {

    const {id} = useParams();

    const [products, setProducts] = useState([]);

    console.log(id, "test")


    useEffect(() => {
        Axios.get(`http://localhost:3001/api/get/${id}`).then((response) => {
            setProducts(response.data)
        })
    }, [id])

    console.log(products);

    return(
        <div className="product-wrapper">
                {Array.from(products).map((product) => {
                    return(
                        <div className="card" key={product.id}>
                            <p>{id}</p>
                            <h2>{product.title}</h2>
                            <img alt="shoe" src={dummyImg} />
                            <p className="price"> {product.price} kr</p>
                            <h4> {product.description} </h4>
                            <h1>hej</h1>
                        </div>
                )})}
        </div>
    )
}

export default Product;