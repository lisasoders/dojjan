// import { useState, useEffect } from "react";
// import Axios from 'axios';
// import dummyImg from '../image/dummyImg.png';

// function GetProducts() {

//     const [productList, setProductList] = useState([]);

//     /* Get all products */

//     useEffect(() => {
//         Axios.get('http://localhost:3001/api/get').then((response) => {
//             setProductList(response.data)
//         })
//     }, [])

//     const handleClick = (e) => {
//         // e.preventDefault();
//         console.log("hej")
//     }

//     return(
//         <div className="product-wrapper">
//                 {productList.map((product) => {
//                     return(
//                         <div className="card" key={product.id}>
//                             <h2>{product.title}</h2>
//                             <img alt="shoe" src={dummyImg} />
//                             <p className="price"> {product.price} kr</p>
//                             <h4> {product.description} </h4>
//                             <button onClick={(e) => {handleClick(e)}}>Add to cart</button>
//                         </div>
//                 )})}
//         </div>
//     )
// }

// export default GetProducts;