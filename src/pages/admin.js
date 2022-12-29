import { useState, useEffect } from "react";
import Axios from 'axios';
import RegisterAdmin from "../components/registerAdmin";

function Admin() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    // const [productList, setProductList] = useState([])

    // useEffect(() => {
    //     Axios.get('http://localhost:3001/api/get').then((response) => {
    //         setProductList(response.data)
    //     })
    // }, [])

    const handleAdd = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3001/api/post', {
            title: title,
            description: description,
            price: price,
            image: image,
        }).then(() => {
            alert("successfull post")
        })
    }

    return(
        <div>
            <div className="RegLog-admin">
                <RegisterAdmin />
            </div>
            <label>Title</label>
            <input type="text" name="title" onChange={(e) => {setTitle(e.target.value)}}></input>
            <label>description</label>
            <input type="text" name="description" onChange={(e) => {setDescription(e.target.value)}}></input>
            <label>Price</label>
            <input type="number" name="price" onChange={(e) => {setPrice(e.target.value)}}></input>
            <label>Image</label>
            <input type="file" name="image" onChange={(e) => {setImage(e.target.value)}}></input>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default Admin;