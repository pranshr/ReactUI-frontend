import React, { Component, Fragment } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
class Register extends Component {
    constructor(props){
        super(props);
          this.state = {
            name:'',
            email:'',
            phone:'',
            rawPhone:'',
            password:'',
            cpassword:'',
            nameError:'',
            emailError:'',
            passwordError:'',
            passwordMatch:0,
            passwordMatch2:0,
            passwordMatch3:0,
            passwordMatch4:0,
            cpasswordError:'',
            phoneError:''
            
        }
      }
      handleNameChange = event => {
        this.setState({ name: event.target.value }, () => {
          this.validateName();
        });
      };
      handleEmailChange = event => {
        this.setState({ email: event.target.value }, () => {
          this.validateName();
        });
      };

      handlePasswordChange = event => {
        this.setState({ password: event.target.value }, () => {
          this.validatePassword();
        });
      };
      handlecPasswordChange= event => {
        this.setState({ cpassword: event.target.value }, () => {
            this.validatecPassword();
          });
      };

      handlePhoneChange= (value, data, event, formattedValue) => {
        this.setState({ phone: event.target.value,rawPhone: value.slice(data.dialCode.length) }, () => {
            this.validatecPhone();
          });
      };
      


      validateName = () => {
        const { name } = this.state;
        let formIsValid = true;
        if(name.length > 0){
            this.setState({
                nameError:null,
              });
            
        }else{
            this.setState({
                nameError:'The name field is required',
              });
              formIsValid = false;
        }
        return formIsValid;
      
      }
      
      validateEmail = () => {
        const { email } = this.state;
        let formIsValid = true;
        if(email.length > 0){
            if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
                this.setState({
                    emailError:'Invalid Email'
                  });
                  formIsValid = false;
            }else{
                this.setState({
                    emailError:null
                  });
                  
            }
           
        }else{
            this.setState({
            emailError:'The Email field is required',
            
        });
        formIsValid = false;
        }
        return formIsValid;
      }

      validatePassword = () => {
        const { password } = this.state;
        let formIsValid = true;
        if(password.length > 0){
            
            if(!password.match(/(?=.*[A-Z])/)){
                this.setState({
                    passwordMatch2:0,
                });
                formIsValid = false;
             }else{
                this.setState({
                    passwordMatch2:1,
                });
             }
             if(!password.match(/(?=.*\d)/)){
                this.setState({
                    passwordMatch3:0,
                });
                formIsValid = false;
             }else{
                this.setState({
                    passwordMatch3:1,
                });
             }
             if(!password.match(/[^a-z\d]+/i)){
                this.setState({
                    passwordMatch4:0,
                });
                formIsValid = false;
             }else{
                this.setState({
                    passwordMatch4:1,
                });
             }
             if(password.length === 8){
                this.setState({
                    passwordMatch:1,
                });
                
            }else{
                this.setState({
                    passwordMatch:0,
                    passwordError:null,
                });
                formIsValid = false;
            }
           
        }else{
            this.setState({
                passwordError:'The password field is required',
                passwordMatch:0,
                passwordMatch2:0,
                passwordMatch3:0,
                passwordMatch4:0,
            });
            formIsValid = false;
        }
        return formIsValid;
        
      }
      validatecPassword = () =>{
        const { password, cpassword } = this.state;
        let formIsValid = true;
        if(cpassword.length > 0){
           
            if(password === cpassword){
                this.setState({
                    cpasswordError:null
                });
            }else{
                this.setState({
                    cpasswordError:'Confirm Password does not match.'
                });
                formIsValid = false;
            }
           
        }else{
            this.setState({
                cpasswordError:'The cpassword field is required'
            });
            formIsValid = false;
        }
        return formIsValid;

        
      }
      validatecPhone = () =>{
        
        const { rawPhone } = this.state;
        let formIsValid = true;
        if(rawPhone.length > 0){
          this.setState({
            phoneError:null
        });
        }else{
          this.setState({
            phoneError:'The phone field is required'
        });
        formIsValid = false;
        }
        return formIsValid;
      }
      regiSubmit(e){
        e.preventDefault();
          const nameValid = this.validateName();
          const emailValid = this.validateEmail();
          const passwordValid = this.validatePassword();
          const cpasswordValid = this.validatecPassword();
          const phoneValid = this.validatecPhone();
          
        if(nameValid && emailValid && passwordValid && cpasswordValid && phoneValid){
          const { name, email,phone, password } = this.state
		    	alert(`Your state values: \n Name: ${name} \n Email: ${email}\n Phone: ${phone} \n Password: ${password}`)
        }
  
    }
    render(){
       const correctImg = <img src={`${process.env.PUBLIC_URL}/assets/images/correct-icon.svg`} alt="correct-icon" />;
       const falseImg = <img src={`${process.env.PUBLIC_URL}/assets/images/error-icon.svg`} alt="false-icon" />;
        return(
          <Fragment>

                <h3 className="text-bold">Create New Account</h3>
                <div className="social-login text-center">
                <button type="button" className="btn btn-block"> 	<img src={`${process.env.PUBLIC_URL}/assets/images/google.png`} alt="modalimg" /> Sign Up With Google</button>
                <p>---------------Or---------------</p>
                </div>
                <div className="register-form">
                <form name="regiform" className="regiform" onSubmit= {this.regiSubmit.bind(this)}>
              
                   <div className="form-group">
                   <label htmlFor='name'>Name</label>
                   <input
                     name='name'
                     className={`form-control ${this.state.nameError ? 'is-invalid' : ''}`}
                     id='name'
                     placeholder='Enter name'
                     value={this.state.name}
                     onChange={this.handleNameChange}
                     onBlur={this.validateName}
                   />
                   <div className='invalid-feedback'>{this.state.nameError}</div>
       				   
                   </div>
       			<div className="form-group">
                   <label htmlFor='email'>Email</label>
                   <input
                     name='email'
                     className={`form-control ${this.state.emailError ? 'is-invalid' : ''}`}
                     id='email'
                     placeholder='Enter email'
                     value={this.state.email}
                     onChange={this.handleEmailChange}
                     onBlur={this.validateEmail}
                   />
                   <div className='invalid-feedback'>{this.state.emailError}</div>
               	</div>
                   <div class="form-group">
       				<label>Mobile Number </label>
       				<PhoneInput
                     containerClass={`${this.state.phoneError ? 'is-invalid-phone' : ''}`}
                       country={'in'}
                       value={this.state.phone}
                      
                       onChange={this.handlePhoneChange}
                       onBlur={this.validatecPhone}
                    />
                      <div className='invalid-feedback'>{this.state.phoneError}</div>
       			</div>
                   <div className="form-group">
                   <label htmlFor='password'>Password</label>
                   <input
                     type='password'
                     name='password'
                     className={`form-control ${this.state.passwordError ? 'is-invalid' : ''}`}
                     id='password'
                     placeholder='Enter password'
                     value={this.state.password}
                     onChange={this.handlePasswordChange}
                     onBlur={this.validatePassword}
                   />  
                    <div className='invalid-feedback'>{this.state.passwordError}</div>
                   </div>
                   <div className="form-group">
                       <label htmlFor='cpassword'>Confirm Password</label>
                   <input
                     type='password'
                     name='cpassword'
                     className={`form-control ${this.state.cpasswordError ? 'is-invalid' : ''}`}
                     id='cpassword'
                     placeholder='Enter cpassword'
                     value={this.state.cpassword}
                     onChange={this.handlecPasswordChange}
                     onBlur={this.validatecPassword}
                   />  
                    <div className='invalid-feedback'>{this.state.cpasswordError}</div>
                    <div className="password-validation-list">
                        <p>{this.state.passwordMatch === 1 ? correctImg : falseImg} Password must be 8 or more characters in length.</p>
                        <p>{this.state.passwordMatch2 === 1 ? correctImg : falseImg} Password must contain 1 or more uppercase characters.</p>
                        <p>{this.state.passwordMatch3 === 1 ? correctImg : falseImg} Password must contain 1 or more digit characters</p>
                        <p>{this.state.passwordMatch4 === 1 ? correctImg : falseImg} Password must contain 1 or more special characters</p>
                    </div>

                   </div>  
                   
       			<div className="form-group">
       				<button type="submit" className="btn btn-block loginbtn sign-up-btn">Sign Up</button>
       			</div>
                   </form>
       			<div className="signup">
       				<p className="text-center">Already have an account? <button className="login_link"  onClick={()=>this.props.onLogin()}>Login</button></p>
       			</div>
                   </div>
                  
          </Fragment>
        ) 
    }
}
export default Register;