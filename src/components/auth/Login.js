import React, { Component, Fragment } from 'react'
class Login extends Component {
    render(){
        return(
          <Fragment>
               
                <h3 className="text-bold">Welcome Back</h3>
       			<div className="form-group">
       				<label>User ID</label>
       				<input type="text" className="form-control" />
       			</div>
       			<div className="form-group">
       				<label>Password</label>
       				<input type="password" className="form-control" />
       			</div>
       			<div className="form-group">
       				<button type="button" className="btn btn-block loginbtn">Login</button>
       			</div>

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