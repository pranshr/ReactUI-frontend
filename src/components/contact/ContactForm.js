import React, { Component } from 'react'
//import Recaptcha from "react-recaptcha";
//import {GoogleReCaptchaProvider,GoogleReCaptcha} from 'react-google-recaptcha-v3';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const profileChoices = [

    {  id:1, el_id: 'pickup-1', value: 'Investor', label:"Investor" },
    {  id:2, el_id: 'pickup-2', value: 'Company', label:"Company" },
    {  id:3, el_id: 'pickup-3', value: 'Institution', label:"Institution" },
    {  id:4, el_id: 'pickup-4', value: 'Shareholder', label:"Shareholder" },
    {  id:5, el_id: 'pickup-5', value: 'Employee', label:"Employee" }
  
]
export default class ContactForm extends Component {
  constructor(){
    super();
    this.state={
      name:'',
      email:'',
      phone:'',
      message:'',
      profile:'Investor',
      recaptchaVal:'',
      errors: {},
      nameError:'',
      emailError:'',
      messageError:'',
      captchVerified:false,
      captchError:'',
    }
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeProfile = this.handleChangeProfile.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    //this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  // recaptchaLoaded(){
  //   console.log('Google recaptcha loaded successfully.')
  // }
  verifyCallback(responce){
    this.setState({
      captchVerified:true
    });
  }
 
  handleNameValidation = () => {
    const { name } = this.state;
    let formIsValid = true;
     if(name === ''){
      formIsValid = false;
      this.setState({
        nameError:'Name field is required.'
      });
    }else if(typeof name !== "undefined"){
    
        this.setState({
          nameError:''
        });
           
   }
    return formIsValid; 
  }

  handleEmailValidation = () => {
    const { email } = this.state;
    let formIsValid = true;
     if(email === ''){
      formIsValid = false;
      this.setState({
        emailError:'Email field is requred.'
      });
    }else if(typeof email !== "undefined"){
      let lastAtPos = email.lastIndexOf('@');
      let lastDotPos = email.lastIndexOf('.');
  
      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
         formIsValid = false;
         this.setState({
          emailError:'Invalid Email ! Please enter a valid email address.'
        });
       }else{
        this.setState({
          emailError:''
        });
      }   
    }else{
      this.setState({
        emailError:''
      });
    }     
    return formIsValid; 
  }


  handleMessageValidation = () => {
    const { message } = this.state;
    let formIsValid = true;
    if(message === ''){
     formIsValid = false;
     this.setState({
      messageError:'Message field is requred.'
     });
   }else{
    this.setState({
      messageError:''
    });
  }    
   return formIsValid; 

  }
  
  

  handleChangeName = (e) => {
    this.setState({ name: e.target.value }, () => {
     this.handleNameValidation();
     
    });
  };
  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value });
    this.handleEmailValidation();
  };

  handleChangePhone = (e) =>{
    this.setState({ phone: e.target.value });
  }
  handleChangeProfile = (e) => {
    this.setState({ profile: e.target.value });
  };
  
  handleChangeMessage = (e) => {
    this.setState({ message: e.target.value });
    this.handleMessageValidation();
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let user_captcha_value = document.getElementById('user_captcha_input').value;
   
     
    const nameValid = this.handleNameValidation();
    const emailValid = this.handleEmailValidation();
    const messageValid = this.handleMessageValidation();
   
    
    if(nameValid && emailValid && messageValid){
      if(user_captcha_value === ''){
        this.setState({
          captchError:'Please verify captcha.'
        });
      }else {
        if (validateCaptcha(user_captcha_value)===true) {
          this.props.onSubmit(this.state);  
        }else{
          this.setState({
            captchError:'Invalid captcha code.'
          });
        }
      }
    }else{
       console.log('Invalid data.');
    } 
 
    
    //this.setState(this.initialState);
}

componentDidMount () {
  loadCaptchaEnginge(6); 
};
    render() {
       const { profile, nameError, emailError, messageError, captchError } = this.state;
        return (  
            <>
                <form onSubmit={ this.handleSubmit}>
<div className="row"> 
  <div className="col-md-6">
    <p>Name*</p>
    <div className="form-group">
      <input type="text" className="form-control" name="name"  onChange={this.handleChangeName}  onBlur={this.handleNameValidation}/>
      <span className="error-help">{nameError}</span>
    </div>
  </div>
  <div className="col-md-6">
    <p>Email*</p>
    <div className="form-group">
      <input type="email" className="form-control" name="email"  onChange={this.handleChangeEmail} onBlur={this.handleEmailValidation}/>
      <span className="error-help">{emailError}</span>
    </div>
  </div>

</div>
 <div className="row">
 <div className="col-md-6">
    <p>Phone</p>
    <div className="form-group">
      <input type="tel" className="form-control" name="phone"  onChange={this.handleChangePhone}/>
    </div>
  </div>
 </div>

 <div className="row">
  <div className="col-md-12">
 
  <p>Your Profile*</p>
     <ul className="profile_list">
     {profileChoices.map((choice, index) => (
      <li className="customRadio" key={index}>
        <input 
        className="radio-control" 
        type="radio" 
        value={choice.value} 
        key={index}
        name="stock" 
        id={choice.el_id}
        checked={profile === choice.value}
        onChange={this.handleChangeProfile} />  
        <label htmlFor={choice.el_id}> {choice.label} <span className="checkmark"/></label>
       </li> 
        ))}
     </ul>
  </div>
  </div>
<div className="row">
  <div className="col-md-12">
    <p>Message</p>
    <div className="form-group">
      <textarea className="form-control" defaultValue={""} name="message"  onChange={this.handleChangeMessage} onBlur={this.handleMessageValidation}/>
      <span className="error-help">{messageError}</span>
    </div>
  </div>
</div>
  <div className="form-group recap">
  {/* <Recaptcha
    sitekey="6Lcc_Z8aAAAAADWd3rScf0rA1y2qWVtLraRLIy3z"
    render="explicit"
    verifyCallback={this.verifyCallback}
    onloadCallback={this.recaptchaLoaded}
  /> */}
  {/* <GoogleReCaptchaProvider reCaptchaKey="[6LcCIZgaAAAAALArkX6mk3CD2sZp5FCWborqB-5n]">
    <GoogleReCaptcha onVerify={this.verifyCallback} />
  </GoogleReCaptchaProvider> */}
  <div className="row">
    <div className="col-md-3">
    <LoadCanvasTemplate />
    </div>
    <div className="col-md-3">
    <input placeholder="Enter Captcha Value" id="user_captcha_input" name="user_captcha_input" type="text" />
  <span className="error-help">{captchError}</span>
      </div>
  </div>
 
  
  
  </div>
  <div className="sbt">
    <button className="button1">Submit</button>
</div>
</form>
            </>
        )
    }
}
