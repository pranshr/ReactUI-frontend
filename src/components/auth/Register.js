import React, { Component, Fragment } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
class Register extends Component {
    constructor(props){
        super(props);
        this.state  = {
            phone:''
          }
         
    
       
      }
    render(){
        const { phone } = this.state;
        return(
          <Fragment>

                <h3 className="text-bold">Create New Account</h3>
                <div className="social-login text-center">
                <button type="button" className="btn btn-block"> 	<img src={`${process.env.PUBLIC_URL}/assets/images/google.png`} alt="modalimg" /> Sign Up With Google</button>
                <p>---------------Or---------------</p>
                </div>
                <div className="register-form">
                   <div className="form-group">
       				<label>Name</label>
       				<input type="text" className="form-control" />
       			</div>
       			<div className="form-group">
       				<label>Email</label>
       				<input type="email" className="form-control" />
       			</div>
                   <div class="form-group">
       				<label>Mobile Number </label>
       				<PhoneInput
                       country={'in'}
                       value={this.state.phone}
                       onChange={phone => this.setState({ phone })}
                    />
       			</div>
                   <div className="form-group">
       				<label>Password</label>
       				<input type="password" className="form-control" />
       			</div>
                   <div className="form-group">
       				<label>Confirm Password</label>
       				<input type="password" className="form-control" />
       			</div>  
                   
       			<div className="form-group">
       				<button type="button" className="btn btn-block loginbtn sign-up-btn">Sign Up</button>
       			</div>
       			<div className="signup">
       				<p className="text-center">Already have an account? <button className="login_link"  onClick={()=>this.props.onLogin()}>Login</button></p>
       			</div>
                   </div>
                  
          </Fragment>
        ) 
    }
}
export default Register;