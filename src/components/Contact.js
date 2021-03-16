import React, { Component } from 'react'
import ContactForm from './contact/ContactForm'
export default class Contact extends Component {
  constructor(){
    super();
    this.state={
      name:'',
      email:'',
      message:'',
      recaptchaVal:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
     <>
         <section className="main-contact banner">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h1>Want to know more!!</h1>
                <p>Please drop us an email or send us a text message . Our <br/>team will reach our to you shortly and help you <br/> understand our offering and our process better.</p>
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
              <div className="col-md-8">
                <div className="talk">
                  <h3>Let's Connect!</h3>
                  <p classname="con" />
                   <ContactForm handleChange={ this.handleChange } onSubmit={ this.onSubmit }/>
                </div>
              </div>
              <div className="col-md-4">
                <div className="call">
                <img src={process.env.PUBLIC_URL + "./assets/images/whatsapp-icon.png"} alt="phone"/>
                  <p>WhatsApp</p>
                  <p><a href="!#" className="text-bold">+91 9971133005</a>, <a href="!#" className="text-bold">+91 9711149200</a></p>
                  <img src={process.env.PUBLIC_URL + "./assets/images/phone.png"} alt="phone" className="mt-15"/>
                  <p>Call Us</p>
                  <p><a href="tel:+91 9971133005" className="text-bold">+91 9971133005</a>, <a href="tel:+91 9711149200" className="text-bold">+91 9711149200</a></p>
                  <img src={process.env.PUBLIC_URL + "./assets/images/email.png"} className="mt-15" alt="email"/>
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
