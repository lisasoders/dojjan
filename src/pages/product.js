import { useState, useEffect, useParams } from "react";
import Axios from 'axios';
import dummyImg from '../image/dummyImg.png';


function Product({id}) {

    // const {productId} = useParams();

    const [products, setProducts] = useState([]);

    // console.log(productId, "test")


    useEffect(() => {
        Axios.get(`http://localhost:3001/api/get/:id`).then((response) => {
            setProducts(response.data)
        })
    }, [])

    return(
        <div className="product-wrapper">
                {Array.from(products).map((product) => {
                    return(
                        <div className="card" key={product.id}>
                            {/* <p>{productId}</p> */}
                            <h2>{product.title}</h2>
                            <img alt="shoe" src={dummyImg} />
                            <p className="price"> {product.price} kr</p>
                            <h4> {product.description} </h4>
                            <h1>HEEEEJ</h1>
                        </div>
                )})}
        </div>
    )
}

export default Product;