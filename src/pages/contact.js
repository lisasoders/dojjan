import React from "react";
import { BsTelephone } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';



function Contact() {
    return(
        <div className="contact-wrapper">
            <h3 className="contact-title">KONTAKT</h3>
            <div className="telephone-wrapper">
                <div className="contact-telephone">
                        <BsTelephone />
                        <p>TELEFON</p>
                </div>
                <div className="contact-number">
                        <p className="contact-text">020 120 3132</p>
                        <p className="contact-text">Från måndag till fredag: 9:30 - 17:00</p>
                </div>
           </div>
           <div className="mail-wrapper">
                <div className="contact-mail">
                        <TfiEmail />
                        <p>MAIL</p>
                </div>
                <div className="contact-mail-info">
                        <p className="contact-text">info@dojjan.com</p>
                        <p className="contact-text">Från måndag till söndag: 9:00 - 15:00</p>
                </div>
           </div>
        </div>
    )
}

export default Contact;