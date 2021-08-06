import React from 'react';
import './styles/ContactMe.css'
import contactMe from '../assets/images/contact-me.jpg'

function ContactMe () {    
    return (
        <div className="contact-me">
        <div className="container-fluid">
            
            
        <div className="contact-me-container pt-5 mt-5 pb-1 row">

            <div className="contact-me-img col-lg-4">
                <img src={contactMe} className="img-fluid" alt="Contact Me" />
            </div>
            <div className="contact-me-body text-white col-lg-8">

                <h1>
                    Can’t <i>choose</i> a freelancer?
                </h1>
                <br />
                <h4>
                    Contact me via email: mats.card.one@gmail.com

                </h4>
                <a className="btn btn-warning rounded-0" href = "mailto: mats.card.one@gmail.com">SEND EMAIL</a>
            </div>
        </div>
        </div>
        </div>
)
}
;


export default ContactMe;