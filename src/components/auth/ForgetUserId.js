import React, { Component, Fragment } from 'react'
class ForgetUserId extends Component {
  constructor(props){
		super(props);
		this.state = {
			email: '',
			emailError: '',
		}
	 }
   handleEmailChange = event => {
    this.setState({ email: event.target.value }, () => {
      this.validateEmail();
    });
  };
  validateEmail = () => {
    const { email } = this.state;
    let formIsValid = true;
    if(!email.length > 0){
  this.setState({
         emailError:'The Email field is required',
          });
        formIsValid = false;
    }else{
          this.setState({
            emailError:null,
          });
    }
    return formIsValid;
  
  }
  requestSubmit(e){
       e.preventDefault();
      const isValid = this.validateEmail();
      if(isValid){
        const { email } = this.state
        alert(`Your state values: \n User Email: ${email}`)
       }
  }
    render(){
        return(
          <Fragment>
             <div className="back-btn-modal">
               <button className="back_link"  onClick={()=>this.props.onBack()}><span><i class="fa fa-chevron-left"></i></span> Back</button>
               </div>
               <div className="password-forms">
                 <div className="form-top">
                   <img src={`${process.env.PUBLIC_URL}/assets/images/icons-forget-user-id.png`} alt="forgetuserid icon" />
                   <h3 className="text-bold">Forget Your User ID</h3>
                   <p>Enter your email address and we'll providing your User ID.</p>  
                 </div>
                 <form name="forgetform" className="forgetform" onSubmit= {this.requestSubmit.bind(this)}>
       			<div className="form-group">
       			
       			<label htmlFor="email">Email</label>
					   <input
                     type="text"
                     name='email'
                     className={`form-control ${this.state.emailError ? 'is-invalid' : ''}`}
                     id='email'
                     value={this.state.email}
                     onChange={this.handleEmailChange}
                     onBlur={this.validateEmail}
                   />
                   <div className='invalid-feedback'>{this.state.emailError}</div>
       			</div>
       			<div className="form-group">
       				<button type="submit" className="btn btn-block loginbtn">Continue</button>
       			</div>
             </form>
                 </div>
                
           
                  
          </Fragment>
        ) 
    }
}
export default ForgetUserId;