import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from './auth/Modal';
import Login from './auth/Login';
import Register from './auth/Register';
import ForgetPassword from './auth/ForgetPassword';
import ForgetUserId from './auth/ForgetUserId';

import NewsLatterButton from './modal/NewsLatterButton';
import AuthLayout from './auth/AuthLayout';

class Header extends Component {
  constructor(props){
    super(props);
    this.state  = {
      topbar:true,
      isLogin:true,
      isRegister:false,
      isForgetPassword:false,
      isForgetUserid:false,
      }
      this.showModal = this.showModal.bind(this);
      this.hideModal = this.hideModal.bind(this);

   
  }
 
   CloseTopbar= () =>{
    this.setState({
      topbar:false
    })	
	};
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  
  onRegister= () =>{
    this.setState({
      isRegister:true
    });
  }
  onLogin = () =>{
    this.setState({
      isRegister:false
    });
  }

  onForgetPassword = () =>{
    this.setState({
      isLogin:false,
      isForgetPassword:true
    });
  }
  onForgetUserid = () =>{
    this.setState({
      isLogin:false,
      isForgetUserid:true
    });
  }
  onBack = () =>{
    this.setState({
      isLogin:true,
      isForgetPassword:false,
      isForgetUserid:false
    });
  }
  render(){
    const { topbar, isRegister, isForgetPassword, isLogin, isForgetUserid  } = this.state;
	return(
		<>
    {
      !topbar ? null :  <section className="topheader">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p className="text-center">Buy/ sell unlisted shares with us. Subscribe to get an early access to our platform<NewsLatterButton/><Link to="#" className="close1" onClick={this.CloseTopbar}><i className="fa fa-times" /></Link></p>
              </div>
            </div>
          </div>
        </section>
    }
        <header className="header">
          <nav className="navbar">
            <div className="container">
              <div className="row">
                <div className="col-md-2">
                  <div className="navbar-header">
                
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                    <button type="button" onClick={this.showModal} className="login-btn mobile-login-btn">
                         Login/Sign Up
                      </button>
                    <Link to="/"><img src={process.env.PUBLIC_URL + "../assets/images/logo.png"} className="logo"  alt=""/></Link>
                  </div></div>
                <div className="col-md-10 dp-flex">
                  <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className=" navbar-right">
                      <li>
                        <Link to="/unlisted-stocks">Unlisted Stocks</Link>
                      </li>
                      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">  Our Offerings</Link>
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to="/services">Services </Link></li>
          <li><Link className="dropdown-item" href="#"> Solutions » </Link>
            <ul className="submenu dropdown-menu">
              <li><Link className="dropdown-item" to="/solution-for-companies">For companies</Link></li>
              <li><Link className="dropdown-item" to="/solution-for-institutions">For Institutions</Link></li>
              <li><Link className="dropdown-item" to="/solution-for-investors">For investors</Link></li>
              <li><Link className="dropdown-item" to="/solution-for-shareholders">For Shareholders</Link></li>
            </ul>
          </li>
         
          </ul>
      </li>

      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" href="#" data-toggle="dropdown"> About Company</Link>
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to="/about-us">About Us </Link></li>
          <li><Link className="dropdown-item" to="/why-us">Why Us </Link></li>
          </ul>
      </li>
                      <li><Link to="/platform">Platform</Link></li>
                      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">  Resource</Link>
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" href="#">Blog</Link></li>
          <li><Link className="dropdown-item" to="/faqs">FAQs </Link></li>
          </ul>
      </li>
                      <li><Link to="/contact">Contact Us</Link></li>
                    
                    </ul>
                  </div>
                 
                  <button type="button" onClick={this.showModal} className="login-btn desktop-login-btn">
                         Login/Sign Up
                      </button>
                </div>
              </div>
            </div>
          </nav>

        </header>

        <Modal show={this.state.show} handleClose={this.hideModal} headerClass={ !isForgetPassword && !isForgetUserid ? null: "header-hide"}>
        {  isLogin || isRegister ? 
            <AuthLayout>
              {
                !isForgetPassword && !isRegister && <Login onRegister={this.onRegister} onForgetPassword={this.onForgetPassword} onForgetUserid={this.onForgetUserid}/> 
              }
             
              {
                isRegister && <Register onLogin={this.onLogin}/> 
              }
            </AuthLayout>   
            :null
          } 
              {
                !isLogin && isForgetPassword && <ForgetPassword onBack={this.onBack} />
              }   

              {
                !isLogin && isForgetUserid && <ForgetUserId onBack={this.onBack} />
              }    
        </Modal>
        
    
		</>
	);
}
}
export default Header;