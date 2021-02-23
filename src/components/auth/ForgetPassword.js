import React, { Component, Fragment } from 'react'
class ForgetPassword extends Component {
    render(){
        return(
          <Fragment>
             <div className="back-btn-modal">
               <button className="back_link"  onClick={()=>this.props.onBack()}><span><i class="fa fa-chevron-left"></i></span> Back</button>
               </div>
               <div className="password-forms">
                 <div className="form-top">
                   <img src={`${process.env.PUBLIC_URL}/assets/images/icons-password.png`} alt="modallogo" />
                   <h3 className="text-bold">Forget Your Password</h3>
                   <p>Enter your email address and we'll send you a link to reset your password.</p>  
                 </div>
                
       			<div className="form-group">
       				<label>Email</label>
       				<input type="text" class="form-control" />
       			</div>
       			<div className="form-group">
       				<button type="button" className="btn btn-block loginbtn">Continue</button>
       			</div>
                 </div>
                
           
                  
          </Fragment>
        ) 
    }
}
export default ForgetPassword;