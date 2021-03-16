import React, { Component } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
export default class ContactForm extends Component {

    render() {
        return (
            <>
                <form onSubmit={ this.props.onSubmit}>
<div className="row">
  <div className="col-md-6">
    <p>Name*</p>
    <div className="form-group">
      <input type="text" className="form-control" name="name"  onChange={this.props.handleChange}/>
    </div>
  </div>
  <div className="col-md-6">
    <p>Email*</p>
    <div className="form-group">
      <input type="email" className="form-control" name="email"  onChange={this.props.handleChange}/>
    </div>
  </div>
</div>
 <div className="row">
  <div className="col-md-12">
  <p>Your Profile*</p>
     <ul className="profile_list">
       <li className="customRadio">
        <input className="radio-control" type="radio" value="Investor" name="stock" id="pickup-1"/>
        <label htmlFor="pickup-1"> Investor <span className="checkmark"/></label>
       </li>
       <li className="customRadio">
        <input className="radio-control" type="radio" value="Partner" name="stock" id="pickup-2"/>
        <label htmlFor="pickup-2"> Partner <span className="checkmark"/></label>
       </li>
       <li className="customRadio">
        <input className="radio-control" type="radio" value="Institution" name="stock" id="pickup-3"/>
        <label htmlFor="pickup-3"> Institution <span className="checkmark"/></label>
       </li>
       <li className="customRadio">
        <input className="radio-control" type="radio" value="Shareholder" name="stock" id="pickup-4"/>
        <label htmlFor="pickup-4"> Shareholder <span className="checkmark"/></label>
       </li>
       <li className="customRadio">
        <input className="radio-control" type="radio" value="Employee" name="stock" id="pickup-5"/>
        <label htmlFor="pickup-5"> Employee <span className="checkmark"/></label>
       </li>
      
     </ul>
  </div>
  </div>
<div className="row">
  <div className="col-md-12">
    <p>Message</p>
    <div className="form-group">
      <textarea className="form-control" defaultValue={""} name="message"  onChange={this.props.handleChange}/>
    </div>
  </div>
</div>
  <div className="form-group">
  <ReCAPTCHA
    sitekey="6Ldr55IUAAAAAJdiP0sM8vJLZ2PbsQH7eJKzEoCm"
    name="recptcha"
    onChange={this.props.handleChange}
  />
  </div>
<button className="button1">Submit</button>
</form>
            </>
        )
    }
}
