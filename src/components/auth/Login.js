import React, { Component, Fragment } from 'react';

class Login extends Component {
	constructor(props){
		super(props);
   
		this.state = {
			user_id: '',
			password: '',
			user_idError:'',
			passwordError:''
		}
	 }
	 handleUseridChange = event => {
        this.setState({ user_id: event.target.value }, () => {
          this.validateUserid();
        });
      };
	  handlePasswordChange = event => {
        this.setState({ password: event.target.value }, () => {
          this.validatePassword();
        });
      };
	  validateUserid = () => {
        const { user_id } = this.state;
        let formIsValid = true;
        if(!user_id.length > 0){
			this.setState({
                user_idError:'The UserID field is required',
              });
			formIsValid = false;
        }else{
			this.setState({
                user_idError:null,
              });
        }
        return formIsValid;
      
      }
	  validatePassword = () => {
        const { password } = this.state;
        let formIsValid = true;
        if(!password.length > 0){
			this.setState({
                passwordError:'The Password field is required',
              });
			  formIsValid = false;
        }else{
			this.setState({
                passwordError:null,
              });
        }
        return formIsValid;
      
      }
	 
	loginSubmit(e){
		 e.preventDefault();
        const useridValid = this.validateUserid();
		const passwordValid = this.validatePassword();
		 if(useridValid && passwordValid){
			const { user_id, password } = this.state
			alert(`Your state values: \n User ID: ${user_id} \n Password: ${password}`)
		 }
   
	 }
 
    render(){
        return(
          <Fragment>
               
                <h3 className="text-bold">Welcome Back</h3>
				<form name="loginform" className="loginform" onSubmit= {this.loginSubmit.bind(this)}>
       			<div className="form-group">
       				<label htmlFor="user_id">User ID</label>
					   <input
                     name='user_id'
                     className={`form-control ${this.state.user_idError ? 'is-invalid' : ''}`}
                     id='user_id'
                     value={this.state.user_id}
                     onChange={this.handleUseridChange}
                     onBlur={this.validateUserid}
                   />
                   <div className='invalid-feedback'>{this.state.user_idError}</div>
				   </div>
				   <div className="form-group">
       				<label htmlFor="password">Password</label>
					   <input
                     name='password'
                     className={`form-control ${this.state.passwordError ? 'is-invalid' : ''}`}
                     id='password'
                     value={this.state.password}
                     onChange={this.handlePasswordChange}
                     onBlur={this.validatePassword}
                   />
				    <div className='invalid-feedback'>{this.state.passwordError}</div>
			   	</div>
       			<div className="form-group">
       				<button type="submit" className="btn btn-block loginbtn">Login</button>
       			</div>
				   </form>

       			<div class="forgotdiv text-center">

       				<div className="text-left"><button className="login_link"  onClick={()=>this.props.onForgetUserid()}>Forgot User ID?</button></div> <div className="text-right"><button className="login_link"  onClick={()=>this.props.onForgetPassword()}>Forgot Password?</button></div>
       			</div>
       			<div className="signup">
       				<p className="text-center">Don't have an account yet?  <button className="login_link"  onClick={()=>this.props.onRegister()}>Sign Up</button></p>
       			</div>
                  
          </Fragment>
        ) 
    }
}
export default Login;