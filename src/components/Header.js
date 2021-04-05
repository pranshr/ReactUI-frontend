import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
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
      sidenav:false
      }
      this.showModal = this.showModal.bind(this);
      this.hideModal = this.hideModal.bind(this);
      this.toogleNav = this.toogleNav.bind(this);
   
  }
  toogleNav(){
    this.setState({
      sidenav:!this.state.sidenav,
    })
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
    const { topbar, isRegister, isForgetPassword, isLogin, isForgetUserid, sidenav  } = this.state;
    let sessionData2 = localStorage.getItem('subscribedUser');
	return(
		<>
    
    {
      sessionData2 ==='subscribed' ? null : 
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
        <div className="container">
<div className="custom-header">
  <div className="header-logo">
  <NavLink to="/"><img src={process.env.PUBLIC_URL + "../assets/images/logo.png"}  alt=""/></NavLink>
  </div>
  <div className={sidenav ? "custom-navbar active" : "custom-navbar"}>
  <button type="button" className="navbar-toggle mobilenavClose" onClick={ this.toogleNav } >
  <i className="fa fa-times" />
                    </button>
  <nav id="menu">
 
        <ul className="main-menu clearfix">
        <li><NavLink activeClassName='is-active' to="/companies" onClick={ sidenav ? this.toogleNav:null }>Explore Companies</NavLink></li>
          <li className="dropdown-menu-link">Our Offerings
              <span className="drop-icon">▾</span>
              <label title="Toggle Drop-down" className="drop-icon" htmlFor="sm1">▾</label>
            <input type="checkbox" id="sm1" />
            <ul className="sub-menu">
              <li><NavLink activeClassName='is-active' to="/services" onClick={ sidenav ? this.toogleNav:null }>Services </NavLink></li>
              <li className="dropdown-menu-link">Solutions
                  <span className="drop-icon">▾</span>
                  <label title="Toggle Drop-down" className="drop-icon" htmlFor="sm2">▾</label>
                <input type="checkbox" id="sm2" />
                <ul className="sub-menu">
                  <li><NavLink activeClassName='is-active' to="/solution-for-companies" onClick={ sidenav ? this.toogleNav:null }>For companies</NavLink></li>
                  <li><NavLink activeClassName='is-active' to="/solution-for-institutions" onClick={ sidenav ? this.toogleNav:null }>For Institutions</NavLink></li>
                  <li><NavLink activeClassName='is-active' to="/solution-for-investors" onClick={ sidenav ? this.toogleNav:null }>For investors</NavLink></li>
                  <li><NavLink activeClassName='is-active' to="/solution-for-shareholders" onClick={ sidenav ? this.toogleNav:null }>For Shareholders</NavLink></li>
                </ul>
              </li>
            </ul>
          </li>
          
          <li className="dropdown-menu-link">About Company
              <span className="drop-icon">▾</span>
              <label title="Toggle Drop-down" className="drop-icon" htmlFor="sm3">▾</label>
            
            <input type="checkbox" id="sm3" />
            <ul className="sub-menu">
             <li><NavLink activeClassName='is-active' to="/about-us" onClick={ sidenav ? this.toogleNav:null }>About Us </NavLink></li>
             <li><NavLink activeClassName='is-active' to="/why-us" onClick={ sidenav ? this.toogleNav:null }>Why Us </NavLink></li>
            </ul>
          </li>

          <li><Link to="/platform" onClick={ sidenav ? this.toogleNav:null }>Platform</Link></li>
          <li className="dropdown-menu-link">Resource
              <span className="drop-icon">▾</span>
              <label title="Toggle Drop-down" className="drop-icon" htmlFor="sm4">▾</label>
        
            <input type="checkbox" id="sm4" />
            <ul className="sub-menu">
            <li><a href={'http://blog.unlistedassets.com'} target={'_blank'} rel="noreferrer">Blog</a></li> 
             <li><NavLink activeClassName='is-active' to="/faqs" onClick={ sidenav ? this.toogleNav:null }>FAQs </NavLink></li>
            </ul>
          </li>

          <li><NavLink activeClassName='is-active' to="/contact" onClick={ sidenav ? this.toogleNav:null }>Contact Us</NavLink></li>
        </ul>
      </nav>





      
  </div>
  {/* <div className="login_btn">
     <button type="button" onClick={this.showModal} className="login-btn desktop-login-btn">Login/Sign Up</button>
  </div> */}
  <button type="button" className="navbar-toggle" onClick={ this.toogleNav }>
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
</div>
</div>
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