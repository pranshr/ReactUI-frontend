import React, { Component } from 'react'
import ContactForm from './contact/ContactForm';
import InnerBanner from './common/InnerBanner'
import axios from 'axios';
export default class Contact extends Component {
  constructor(){
    super();
    this.state={
      success:false,
      error:false,
      respMessage:'',

    }
    this.onSubmit = this.onSubmit.bind(this);
  }
 
  onSubmit(data) {
    const json = JSON.stringify(data);
    axios.post('https://api.unlistedassets.com/contact/submit', json, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json'
      }
    }).then(res => {
      const resData = res.data;
      if(resData === true){
        this.setState({
          success:true,
          respMessage:"You have Successfully submitted your request."
        });
      }else{
        this.setState({
          success:false,
          error:true,
          respMessage:"Something went wrong!"
        });
      }
      
   }).catch(error => {
         this.setState({
           success:false,
           error:true,
           respMessage:"Something went wrong!"
          });
            console.error('There was an error!', error);
        });
  }
  render() {
    const bannerImage = "contact.png";
    const headingtxt = "Want to know more!";
    const subHeadingtxt = "Please drop us an email or send us a text message . Our team will reach out to you shortly and help you understand our offering and our process better.";
    return (
     <>
        	<InnerBanner headingtxt={headingtxt} subHeadingtxt={subHeadingtxt} bannerImage={bannerImage}/>
        <section className="contact-section1">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="talk">
                  <h3>Let's Connect!</h3>
                  <p classname="con" />
                  {
                    this.state.error ? <div class="alert alert-danger alert-dismissible fade show" role="alert">
   {this.state.respMessage }
  {/* <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button> */}
</div> : null
                  }
                  {
                    this.state.success ? <div class="alert alert-success alert-dismissible show" role="alert">
  <strong>Thank You! </strong> {this.state.respMessage }
  {/* <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button> */}
</div> : null
                  }
                  
                   <ContactForm handleChange={ this.handleChange } onSubmit={ this.onSubmit }/>
                </div>
              </div>
              <div className="col-md-4">
                <div className="call">
                  <div className="section-contact-address mt-30">
                    <img src={process.env.PUBLIC_URL + "./assets/images/whatsapp-icon.png"} alt="phone"/>
                     <p>WhatsApp</p>
                  </div>
                  
                  <p><a href="!#" className="text-bold">+91 9971133005</a>, <a href="!#" className="text-bold">+91 9711149200</a></p>
                  <div className="section-contact-address mt-30">
                  <img src={process.env.PUBLIC_URL + "./assets/images/phone.png"} alt="phone"/>
                  <p>Call Us</p>
                  </div>
                  <p><a href="tel:+91 9971133005" className="text-bold">+91 9971133005</a>, <a href="tel:+91 9711149200" className="text-bold">+91 9711149200</a> <a href="tel:+91 7011306533" className="text-bold">+91 7011306533</a></p>
                  <div className="section-contact-address mt-30">
                  <img src={process.env.PUBLIC_URL + "./assets/images/email.png"} alt="email"/>
                  <p>Mail Us</p>
                  </div>
                  <p><a href="mailto:hello@unlistedassets.com" className="text-bold">hello@unlistedassets.com</a></p>
                  <div className="section-contact-address mt-30">
                  <img src={process.env.PUBLIC_URL + "./assets/images/address.png"} alt="email"/>
                  <p>Address</p>
                  </div>
                  <p className="text-bold color-theme">Plot No. 242, I Floor, AIHP Palms, 243, Udyog Vihar, Gurugram, Haryana 122015</p>
                </div>
              </div>
            </div>
          </div>
        </section>
     </>
    )
  }
}
