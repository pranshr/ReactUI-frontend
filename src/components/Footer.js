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
                
                  <li><a href={'https://twitter.com'} target={'_blank'}><img src={process.env.PUBLIC_URL + "./assets/images/twitter.png"} alt="" /></a></li> 
                  <li><a href={'https://facebook.com'} target={'_blank'}><img src={process.env.PUBLIC_URL + "./assets/images/fb.png"} alt="" /></a></li> 
                  <li><a href={'https://instagram.com'} target={'_blank'}><img src={process.env.PUBLIC_URL + "./assets/images/insta.png"} alt="" /></a></li> 
                  <li><a href={'https://youtube.com'} target={'_blank'}><img src={process.env.PUBLIC_URL + "./assets/images/yt.png"} alt="" /></a></li> 
                 
                </ul>
              </div>
              <div className="col-md-2 col-sm-2">
                <h4 className="quick">Quick Links</h4>
                <ul className="ul1">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="#">Platform</Link></li>
                  <li><Link to="/companies">Companies</Link></li>
                  <li><Link to="#">Blog</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/why-us">Why Us</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                  <li><Link to="/faq">FAQ</Link></li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-2">
              <h4 className="quick">Our Solution</h4>
                <ul className="ul2">
                  <li><Link to="/scompanies">For Companies</Link></li>
                  <li><Link to="/institutions">For Institutions</Link></li>
						    	<li><Link to="/investors">Investors</Link></li>
                  <li><Link to="/shareholders">Shareholders</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="#">Types of Unlisted Companies</Link></li>
                  <li><Link to="#">Solutions</Link></li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-2">
                <h4 className="legal">Legal</h4>
                <ul className="ul3">
                  <li><Link to="/disclaimers">Disclaimer</Link></li>
                  <li><Link to="/terms-and-conditions">Terms of Use</Link></li>
                  <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-3">
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