import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from './auth/Modal';

class Header extends Component {
  constructor(props){
    super(props);
    this.state  = {
      sidenav:false,
      show: false,
      topbar:true
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
  render(){
    const { sidenav, topbar  } = this.state;
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
                      <li><Link to="/Companies">Companies</Link></li>
                      <li><Link to="/Services">Services</Link></li>
                      <li><Link to="/Contact">Contact Us</Link></li>
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
      <Modal show={this.state.show} handleClose={this.hideModal}>
          

    
    
      <div class="modal-body">
       <div class="row">
       	<div class="col-md-6">
       		<div class="modalleft">
       			<img src={`${process.env.PUBLIC_URL}/assets/images/modalimg.png`} class="center-block" alt="modalimg" />
       			<h4 class="text-center text-bold">Your data 100% secure <br class="hidden-xs"/> with us</h4>
       			<p class="text-center ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
       		</div>
       	</div>
       	<div class="col-md-6">
       		<div class="modalright">
       			<img src={`${process.env.PUBLIC_URL}/assets/images/modallogo.png`} alt="modallogo" />
       			<h3 class="text-bold">Welcome Back</h3>
       			<div class="form-group">
       				<label>User ID</label>
       				<input type="text" class="form-control" />
       			</div>
       			<div class="form-group">
       				<label>Password</label>
       				<input type="password" class="form-control" />
       			</div>
       			<div class="form-group">
       				<button type="button" class="btn btn-block loginbtn">Login</button>
       			</div>

       			<div class="forgotdiv text-center">
       				<p><Link to="#">Forgot User ID?</Link> <Link to="#">Forgot Password?</Link></p>
       			</div>
       			<div class="signup">
       				<p class="text-center">Don't have an account yet? <Link to="#">Sign Up</Link></p>
       			</div>
       		</div>
       	</div>

       </div>
      </div>
      
    
        </Modal>
        

		</>
	);
}
}
export default Header;