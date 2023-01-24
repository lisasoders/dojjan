import {Link} from 'react-router-dom';
import dummyImg from "../image/dummyImg.png"
import { useState} from "react";
import Axios from 'axios';

function Checkout({checkoutItems}) {

    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [location, setLocation] = useState("")
    const [street, setStreet] = useState("")
    const [popup, setPopup] = useState(false)

    /* Post an order to database */

    const handleAdd = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3001/api/post/order',  {
            name: name,
            lastname: lastname,
            email: email,
            zipcode: zipcode,
            location: location, 
            street: street,
        }).then(() => {
            alert("successfull post")
        })
    }

 
    const togglePopup = () => {
        setPopup(!popup)
      }
   
    return(
        <div>
            <div>
                {checkoutItems.map(item => (
                <form className="cart-card" key={item.id} >
                    <div className="cart-img-svg">
                        <img className="cart-img" alt="dummyImg" src={dummyImg} />
                    </div>
                    <p type="text" name="title" value={item.title} >{item.title}</p>
                    <p type="text" name="description" value={item.description}>{item.description}</p>
                    <p type="number" name="price">{item.price}</p>
                </form>
            ))}</div>
            <div className=''>
                <h1>FAKTURADDRESS</h1>
                    <div className='checkout-form'>
                        <label>Namn</label>
                        <input type="text" name="name" onChange={(e) => {setName(e.target.value)}} />
                        <label>Efternamn</label>
                        <input type="text" name="lastname" onChange={(e) => {setLastname(e.target.value)}} />
                        <label>E-post</label>
                        <input type="text" name="email" onChange={(e) => {setEmail(e.target.value)}}/>
                        <label>Postnummer</label>
                        <input type="text" name="zipcode" onChange={(e) => {setZipcode(e.target.value)}}/>
                        <label>Ort</label>
                        <input type="text" name="location" onChange={(e) => {setLocation(e.target.value)}}/>
                        <label>Gatddda</label>
                        <input type="text" name="street" onChange={(e) => {setStreet(e.target.value)}}/>
                        <button className='btn-modal' onClick={(event) => { handleAdd(event); togglePopup(event);}}>Köp</button>
                        {popup && (
                        <div className='popup'>
                        <div className='overlay'>
                            <div className='popup-content'>
                                <p>TACK FÖR DITT KÖP!</p>
                                <button className='close-popup' onClick={togglePopup}>CLOSE</button>
                            </div>
                        </div>
                        </div>
                        )}
                       
                    </div>
            </div>
        </div>
    )
}

export default Checkout;