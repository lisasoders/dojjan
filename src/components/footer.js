import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import { RxInstagramLogo } from 'react-icons/rx';
import { AiFillFacebook } from 'react-icons/ai';
import { ImTwitter } from 'react-icons/im';
import { FaYoutube } from 'react-icons/fa';
import Contact from "../pages/contact";




function Footer() {
    return(
        <Router>
        <div className="footer-wrapper">
            <div className='footer-info-wrapper'>
                <div className='footer-contact'>
                    <h1 className='footer-title'>HJÄLP</h1>
                    <Link to="/contact"><p className='footer-text'>KUNDSERVICE</p></Link>
                    <p className='footer-text'>BUTIK</p>
                </div>
                <div className='footer-information'>
                    <h1 className='footer-title'>FÖRETAGSINFORMATION</h1>
                    <p className='footer-text'>OM OSS</p>

                </div>
            </div>
            <div className="footer-icons">
                <RxInstagramLogo  />
                <AiFillFacebook />
                <ImTwitter />
                <FaYoutube />
            </div>
        </div>
        </Router>
    )
}

export default Footer;