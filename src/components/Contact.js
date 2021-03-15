import React, { Component } from 'react'
import ContactForm from './contact/ContactForm'
export default class Contact extends Component {
  render() {
    return (
     <>
         <section className="main-contact banner">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h1>Want to know more!!</h1>
                <p>Worry not drop us a email or send a text message<br />
                  to our team will reach out to you shortly and<br /> help you understand the process</p>
              </div>
              <div className="col-md-5">
                <img src={process.env.PUBLIC_URL + "./assets/images/contact.png"} className="img-responsive center-block" alt="contact" />
              </div>
            </div>
          </div>
        </section>
        <section className="contact-section1">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="talk">
                  <h3>Let's talk!</h3>
                  <p classname="con" />
                   <ContactForm/>
                </div>
              </div>
              <div className="col-md-5">
                <div className="call">
                  <img src={process.env.PUBLIC_URL + "./assets/images/phone.png"} alt="phone"/>
                  <p>Call Us</p>
                  <p><a href="tel:+91 254 168 254 168" className="text-bold">+91 254 168 254 168</a></p>
                  <img src={process.env.PUBLIC_URL + "./assets/images/email.png"} className="mt-50" alt="email"/>
                  <p>Mail Us</p>
                  <p><a href="mailto:hello@unlistedassets.com" className="text-bold">hello@unlistedassets.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
     </>
    )
  }
}
