import { useState, useEffect } from "react";
import Axios from 'axios';

function CreateProducts() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [productimg, setProductImg] = useState('');
    

    const handleAdd = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3001/api/post',  {
            title: title,
            description: description,
            price: price,
            image: image,
        }).then(() => {
            alert("successfull post")
        })
    }

    const handleimg = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3001/api/img',  {
            productimg: productimg,
        }).then(() => {
            alert("successfull post")
        })
    }

    console.log(image, "hkj")
    console.log(productimg, "produktbild")

    return(
        <div>
            <label>Title</label>
            <input type="text" name="title" onChange={(e) => {setTitle(e.target.value)}}></input>
            <label>description</label>
            <input type="text" name="description" onChange={(e) => {setDescription(e.target.value)}}></input>
            <label>Price</label>
            <input type="number" name="price" onChange={(e) => {setPrice(e.target.value)}}></input>
            <label>Image</label>
            <input type="file" name="image" onChange={(e) => {setImage(e.target.value)}}></input>
            <button onClick={handleAdd}>Add</button>
            <div>
            <input type="file" name="productimg" onChange={(e) => {setProductImg(e.target.value)}}></input>
            <button onClick={handleimg}>LÄGG TILL</button>
            </div>
        </div>
    )
}

export default CreateProducts;