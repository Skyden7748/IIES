import React from 'react'
import './Contact.css'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

function Contact() {
  return (
    <div className='contact-main'>
         <div className='about-header one'>

<div className='about-header-text'>
    
    <h1>Contact Us</h1>       
    
</div>
</div>
        <div className='contact-content'>
            <div className='contact-content-left'>
                <div className='contact-content-left-text'>
                    <div className='contact-content-left-text-one'>
                    <h1>Branch/Project Offices:</h1>
                    <p> <span className='iconss'>< FaMapMarkerAlt /></span> At/Po-Padampur, Dist-Bargarh, Odisha</p>
                    <p> <span className='iconss'>< FaMapMarkerAlt /></span> At/Po-Kantilo, Dist-Nayagarh, Odisha</p>
                    <p> <span className='iconss'>< FaMapMarkerAlt /></span> At/Po-Kakiriguma, Via-Koraput, Dist-Cuttack, Odisha</p>
                    </div>

                    <div className='contact-content-left-text-one'>

                    <h1>Address:</h1>
                    <p> <span className='iconss'>< FaMapMarkerAlt /></span> At-Gobindapur, Po-Jatni, Dist-Khordha, Odisha</p>
                    </div>
                    <div className='contact-content-left-text-one'>

                    <h1>Contact:</h1>
                    <p>  <span className='iconss'>< FaPhone /></span> 9583345755</p>
                    </div>

                    </div> 
                   
                    
                   
                    
            </div>
            <div className='contact-content-left right'>
            <form className="form">
      <div className="title">Contact</div>
      <input type="text" placeholder="Your name" className="input" />
      <input type="text" placeholder="Your email" className="input" />
      <textarea placeholder="Your message" />
      <button type="submit">Submit</button>
    </form>
            </div>
        </div>
    </div>
  )
}

export default Contact