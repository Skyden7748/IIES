import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa';
import './Footer.css'

function Footer() {
  return (
    <div className='footer-main'>
        <div className='footer-content'>
        <div className='f01'>
            <h1>IIES</h1>
            <p>Indian Institute of Environment and Science</p>

            <div className='footer-line'>
                <h1>address</h1>
                <p>  <span><FaMapMarkerAlt /></span> At-Gobindapur, Po-Jatni, Dist-Khordha, Odisha</p>
            </div>
            <div className='footer-line'>
                <h1>Phone</h1>
                <p>  <span> <FaPhone /> </span>9583345755</p>
            </div>
        </div>
        <div className='f02'>
            <h1>Links</h1>
            <a href="/home">HOME</a>
            <a href="/about">ABOUT</a>
            <a href="/donations">DONATIONS</a>
            <a href="/contact">CONTACT</a>
        </div>
        <div className='f03'>
            <h1>Follow Us</h1>
            
            <a href=""> <FaFacebook/></a>
            <a href=""><FaInstagram/></a>
            <a href=""> <FaTwitter/></a>
        </div>
        </div>
        <div className='footer-sub-content'>
         <h1>© 2024 IIES</h1>
        </div>
    </div>
  )
}

export default Footer