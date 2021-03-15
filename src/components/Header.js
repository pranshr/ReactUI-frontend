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
      sidenav:false,
      show: false,
      topbar:true,
      isLogin:true,
      isRegister:false,
      isForgetPassword:false,
      isForgetUserid:false,
      }
      this.ToogleSidebar = this.ToogleSidebar.bind(this);
      this.showModal = this.showModal.bind(this);
      this.hideModal = this.hideModal.bind(this);

   
  }
  ToogleSidebar (){
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
                    <Link to="/"><img src={process.env.PUBLIC_URL + "../assets/images/logo.png"} className="logo"  alt=""/></Link>
                  </div></div>
                <div className="col-md-10">
                  <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className=" navbar-right">
                      <li>
                        <Link to="/companies">Unlisted Stocks</Link>
                      </li>
                      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">  Our Offerings</Link>
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" href="#">Services </Link></li>
          <li><Link className="dropdown-item" href="#"> Solutions » </Link>
            <ul className="submenu dropdown-menu">
              <li><Link className="dropdown-item" href>For companies</Link></li>
              <li><Link className="dropdown-item" href>For companies</Link></li>
              <li><Link className="dropdown-item" href>For investors</Link></li>
              <li><Link className="dropdown-item" href>For Shareholders</Link></li>
            </ul>
          </li>
         
          </ul>
      </li>

      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">  About</Link>
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" href="#">About Us </Link></li>
          <li><Link className="dropdown-item" href="#">Why Us </Link></li>
          </ul>
      </li>
                      <li><Link to="/platform">Platform</Link></li>
                      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">  Resource</Link>
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item" href="#">Blog</Link></li>
          <li><Link className="dropdown-item" href="#">FAQs </Link></li>
          </ul>
      </li>
                      <li><Link to="/contact">Contact Us</Link></li>
                      <li>
                      <button type="button" onClick={this.showModal} className="login-btn">
                         Login/Sign Up
                      </button>
                    </li>
                      <li>
					          <button className="side-nav-btn"   onClick={this.ToogleSidebar}>
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
      <div className={sidenav ? "backdrop-body active": "backdrop-body "}></div> 
		<div id="mySidenavR" className={sidenav ? "sidenavR skew open": "sidenavR skew "}>
        <div className="skewnav">
		
          <button  onClick={this.ToogleSidebar} className="closebtn side-nav-btn-closebtn">
		Close <i className="fa fa-times" />
              </button> 
          <h4><Link to="/about" className="text-white" onClick={this.ToogleSidebar}>About UnlistedAssets.com</Link></h4>
          <p className="text-white">Solutions</p>
          <ul className="sidenav1">
            <li><Link to="/scompanies" onClick={this.ToogleSidebar}>For Companies</Link></li>
            <li><Link to="/institutions" onClick={this.ToogleSidebar}>For Institutions</Link></li>
            <li><Link to="/investors" onClick={this.ToogleSidebar}>For Investors</Link></li>
            <li><Link to="/shareholders" onClick={this.ToogleSidebar}>For Shareholders</Link></li>
          </ul>
          <p><Link to="/why-us" onClick={this.ToogleSidebar}>Why Us</Link></p>
          <p><Link to="/faq" onClick={this.ToogleSidebar}>FAQ</Link></p>
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