import {Link} from 'react-router-dom';
import dummyImg from "../image/dummyImg.png"

function Checkout({checkoutItems}) {

    console.log(checkoutItems)
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
        </div>
    )
}

export default Checkout;