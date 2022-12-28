import { useState, useEffect } from "react";
import Axios from 'axios';
import Products from "./products";

function Admin() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [productList, setProductList] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3001/api/get').then((response) => {
            setProductList(response.data)
        })
    }, [])

    const handleAdd = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3001/api/post', {
            title: title,
            description: description,
            price: price,
        }).then(() => {
            alert("successfull post")
        })
    }

    return(
        <div>
            <label>Title</label>
            <input type="text" name="title" onChange={(e) => {setTitle(e.target.value)}}></input>
            <label>description</label>
            <input type="text" name="description" onChange={(e) => {setDescription(e.target.value)}}></input>
            <label>Price</label>
            <input type="number" name="price" onChange={(e) => {setPrice(e.target.value)}}></input>
            <button onClick={handleAdd}>Add</button>
            <div>
                {productList.map((product) => {
                    return <h1>{product.title}</h1>
                })}
            </div>
            <Products productList={productList}/>
        </div>
    )
}

export default Admin;