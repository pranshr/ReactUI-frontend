import React from "react";
import { Link } from "react-router-dom";
import Subscribe from './subscribe/Subscribe'
const Footer = () => {
	return(
		<>
			 <footer className="footer">
        <div className="footer-back">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <img src={process.env.PUBLIC_URL + "../assets/images/logo.png"} className="footer-logo" alt="" />
                <p className="mt-30">© 2020 -2020 Unlisted Assets</p>
                <p className="mb-30">All Rights Reserved.</p>
                <ul className="sociallinks">
                  <li><a href={'https://twitter.com/AssetsUnlisted'} target={'_blank'} rel="noreferrer"><img src={process.env.PUBLIC_URL + "./assets/images/twitter.png"} alt="" /></a></li> 
                  <li><a href={'https://www.facebook.com/unlistedassets/'} target={'_blank'} rel="noreferrer"><img src={process.env.PUBLIC_URL + "./assets/images/fb.png"} alt="" /></a></li> 
                  <li><a href={'https://www.instagram.com/unlistedassets/'} target={'_blank'} rel="noreferrer"><img src={process.env.PUBLIC_URL + "./assets/images/insta.png"} alt="" /></a></li> 
                  <li><a href={'https://www.youtube.com/channel/UCdBq98pTcB5VV2SkWZfoFGQ'} target={'_blank'} rel="noreferrer"><img src={process.env.PUBLIC_URL + "./assets/images/yt.png"} alt="" /></a></li> 
                 
                </ul>
              </div>
              <div className="col-md-2 col-sm-2">
                <h4 className="quick">Quick Links</h4>
                <ul className="ul1">
                  <li><Link to="/platform">Platform</Link></li>
                  <li><Link to="/companies">Unlisted stocks</Link></li>
                  <li><Link to="/about-us">About Us</Link></li>
                  <li><Link to="/why-us">Why Us</Link></li>
                  <li><Link to="/faqs">FAQs</Link></li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-2">
              <h4 className="quick">Our offerings</h4>
                <ul className="ul2">
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/solution-for-companies">Solution For companies</Link></li>
                  <li><Link to="/solution-for-institutions">Solution For Institutions</Link></li>
						    	<li><Link to="/solution-for-investors">Solution For Investors</Link></li>
                  <li><Link to="/solution-for-shareholders">Solution For Shareholders</Link></li>
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
               <Subscribe inputClass={"text form-control"} buttonClass={"btn btn-white"}/>
              
              </div>
            </div>
          </div>
        </div>
      </footer>
		</>
	);
}

export default Footer;