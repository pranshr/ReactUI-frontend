import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from './auth/Modal';
import Login from './auth/Login';
import Register from './auth/Register';
import ForgetPassword from './auth/ForgetPassword';
import ForgetUserId from './auth/ForgetUserId';

import AuthLayout from './auth/AuthLayout';

class Header extends Component {
  constructor(props){
    super(props);
    this.state  = {
      sidenav:false,
      show: false,
      topbar:true,
      isLogin:true,
      isRegister:false,
      isForgetPassword:false,
      isForgetUserid:false,
      }
      this.OpenSidebar = this.OpenSidebar.bind(this);
      this.showModal = this.showModal.bind(this);
      this.hideModal = this.hideModal.bind(this);

   
  }
   OpenSidebar (){
    this.setState({
      sidenav:!this.state.sidenav
    })
		
	};
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
    const { sidenav, topbar, isRegister, isForgetPassword, isLogin, isForgetUserid  } = this.state;
	return(
		<>
    {
      !topbar ? null :  <section className="topheader">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p className="text-center">Buy/ Sell umlisted shares with us. Join ours planform with easy steps <Link to="#" className="ml-50 btn-white">Join our platform</Link><Link className="close1" onClick={this.CloseTopbar}><i className="fa fa-times" /></Link></p>
              </div>
            </div>
          </div>
        </section>
    }
        <header className="header">
          <nav className="navbar">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                    <Link to="/"><img src={process.env.PUBLIC_URL + "./assets/images/logo.png"} className="logo"  alt=""/></Link>
                  </div></div>
                <div className="col-md-9">
                  <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className=" navbar-right">
                      <li className="active"><Link to="/">Home</Link></li>
                      <li><Link to="#">Platform</Link></li>
                      <li><Link to="/companies">Companies</Link></li>
                      <li><Link to="/services">Services</Link></li>
                      <li><Link to="/contact">Contact Us</Link></li>
                      <li>
                      <button type="button" onClick={this.showModal} className="login-btn">
                         Login/Sign Up
                      </button>
                    </li>
                      <li>
					          <button className="side-nav-btn"   onClick={this.OpenSidebar}>
				        	    <i className="fa fa-list" />
                    </button> 
					         </li>
                    </ul>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
          </nav>
        </header>
       
		<div id="mySidenavR" className={sidenav ? "sidenavR skew open": "sidenavR skew "}>
        <div className="skewnav">
		
          <button  onClick={this.OpenSidebar} className="closebtn side-nav-btn-closebtn">
		Close <i className="fa fa-times" />
              </button> 
          <h4><Link to="#" className="text-white">About UnlistedAssets.com</Link></h4>
          <p className="text-white">Solutions</p>
          <ul className="sidenav1">
            <li><Link to="#">For Companies</Link></li>
            <li><Link to="#">For Institutions</Link></li>
            <li><Link to="#">For Investors</Link></li>
            <li><Link to="#">For Shareholders</Link></li>
          </ul>
          <p><Link to="#">Why Us</Link></p>
          <p><Link to="#">FAQ</Link></p>
        </div>
      </div>
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