import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return(
		<>
			 <footer className="footer">
        <div className="footer-back">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <img src={process.env.PUBLIC_URL + "./assets/images/logo.png"} className="footer-logo" alt="" />
                <p className="mt-30">© 2020 -2020 Unlisted Assets</p>
                <p className="mb-30">All Rights reserved.</p>
                <ul className="sociallinks">
                  <li><Link to="https://twitter.com" target="_blank"><img src={process.env.PUBLIC_URL + "./assets/images/twitter.png"} alt="" /></Link></li>
                  <li><Link to="https://facebook.com" target="_blank"><img src={process.env.PUBLIC_URL + "./assets/images/fb.png"} alt="" /></Link></li>
                  <li><Link to="https://instagram.com" target="_blank"><img src={process.env.PUBLIC_URL + "./assets/images/insta.png"} alt="" /></Link></li>
                  <li><Link to="https://youtube.com" target="_blank"><img src={process.env.PUBLIC_URL + "./assets/images/yt.png"} alt=""/></Link></li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-2">
                <h4 className="quick">Quick Links</h4>
                <ul className="ul1">
                  <li><Link to="#">Home</Link></li>
                  <li><Link to="#">Platform</Link></li>
                  <li><Link to="/Companies">Companies</Link></li>
                  <li><Link to="#">Blog</Link></li>
                  <li><Link to="/Services">Services</Link></li>
                  <li><Link to="/Contact">Contact Us</Link></li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-3">
                
                <ul className="ul2">
                  <li><Link to="/About">About</Link></li>
                  <li><Link to="#">Types of Unlisted Companies</Link></li>
                  <li><Link to="#">Solutions</Link></li>
                  <li><Link to="/Why">Why Us</Link></li>
                  <li><Link to="/Faq">FAQ</Link></li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-2">
                <h4 className="legal">Legal</h4>
                <ul className="ul3">
                  <li><Link to="/Disclaimers">Disclaimer</Link></li>
                  <li><Link to="#">Terms of Use</Link></li>
                  <li><Link to="/Terms">Privacy Policy</Link></li>
                  <li><Link to="/Scompanies">Solution For Companies</Link></li>
							    <li><Link to="/Institutions">Institutions</Link></li>
						    	<li><Link to="/Investors">Investors</Link></li>
						    	<li><Link to="/Shareholders">Shareholders</Link></li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-2">
                <h4>Subscribe To Our Newsletter</h4>
                <div className="form-group">
                  <input type="text" name className="text form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                  <button type="button" className="btn btn-white">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
		</>
	);
}

export default Footer;