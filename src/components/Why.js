import React from "react";
import { Link } from "react-router-dom";
import InnerBanner from './common/InnerBanner'
const Why = () => {
  const bannerImage = "shareholder-banner.png";
  const firsttxt = "A Smart Line";
  const headingtxt = "Why Us";
  const subHeadingtxt = "End to end integrated tech platform for facilitating buy/sell of unlisted assets and endeavor to create automated process for any kind of asset (i.e., shares, ESOP’s) buying or selling in unlisted space";
	return(
		<>
			
      <InnerBanner firsttxt ={firsttxt} headingtxt={headingtxt} subHeadingtxt={subHeadingtxt} bannerImage={bannerImage}/>
			  <section className="inner-page-content">
                <div className="main-title text-center">
                   <h1>Why UnlistedAssets.com?</h1>
                   <p>Our platform provides facilitation to Buy/Sell/Explore investment opportunities in Unlisted Shares in India through a transparent and safe process by way of automating the process of share transfer in India</p>
                </div>

                <div className="private"> 
                  <div className="row">
                  <div className="col-md-2">
                     <div className="box-img">
                      <img src={process.env.PUBLIC_URL + "./assets/images/sh2.png"} className="img-responsive center-block"  alt="sh2" />
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="box-content">
                        <h4 className="stay">Buyer-Seller Interaction</h4>
                        <p>Our unique platform ensures a transparent interaction/negotiation between buyers and sellers. One can create his holdings, create listings and do a transparent transaction with other buyers and sellers through an automated and seamless process on our platform.</p>
                      </div>
                    </div>
                  
                  </div>
                </div>
                <div className="private">
                  <div className="row">
                    <div className="col-md-2">
                    <div className="box-img">
                      <img src={process.env.PUBLIC_URL + "./assets/images/sh3.png"} className="img-responsive center-block" alt="sh3" />
                    </div>
                    </div>
                    <div className="col-md-10">
                      <div className="box-content">
                        <h4 className="stay">Enhanced Liquidity</h4>
                        <p>Shareholders of unlisted companies can get easy and quick liquidity through our platform. Further, there is access to domestic and global funds which can help in getting better pricing for unlisted shares due to multiple offers at times. </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="private">
                  <div className="row">
                  <div className="col-md-2">
                    <div className="box-img">
                      <img src={process.env.PUBLIC_URL + "./assets/images/sh2.png"} className="img-responsive center-block" alt="sh2" />
                    </div>
                    </div>
                    <div className="col-md-10">
                      <div className="box-content">
                        <h4 className="stay">Easy to Access</h4>
                        <p>Our platform is accessible to all investors and stakeholders of unlisted shares with an end to end integrated and automated process. We ensure seamless transaction without any hassles on the platform and users can view all inventories listed on the platform and buy and sell them by following a simple process.   </p>
                      </div>
                    </div>
                   
                  </div>
                </div>
                <div className="private">
                  <div className="row">
                    <div className="col-md-2">
                    <div className="box-img">
                      <img src={process.env.PUBLIC_URL + "./assets/images/sh3.png"} className="img-responsive center-block" alt="sh3" />
                    </div>
                    </div>
                    <div className="col-md-10">
                      <div className="box-content">
                        <h4 className="stay">Secured via Bank Escrow</h4>
                        <p>Our transactions are secured through a bank escrow mechanism, which will safeguard your interest as buyer and seller of unlisted shares. The funds are escrowed from the time when transaction documents are executed on the platform till the completion of the transaction on the platform. </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="private">
                  <div className="row">
                  <div className="col-md-2">
                  <div className="box-img">
                      <img src={process.env.PUBLIC_URL + "./assets/images/sh2.png"} className="img-responsive center-block" alt="sh2" />
                    </div>
                    </div>
                    <div className="col-md-10">
                      <div className="box-content">
                        <h4 className="stay">SEBI Registered Trustee</h4>
                        <p>A SEBI registered trustee does the audit trail of each transaction before release of funds through the bank escrow.</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
                <div className="private">
                  <div className="row">
                    <div className="col-md-2">
                    <div className="box-img">
                      <img src={process.env.PUBLIC_URL + "./assets/images/sh3.png"} className="img-responsive center-block" alt="sh3" />
                    </div>
                    </div>
                    <div className="col-md-10">
                      <div className="box-content">
                        <h4 className="stay">Investment Banking / Consulting / Valuations / Fund Management</h4>
                        <p>Our founders have established their presence in various domains and are well equipped to provide all that you would need. These services may involve our associate arms which are domain experts in their field. </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="private">
                  <div className="row">
                  <div className="col-md-2">
                  <div className="box-img">
                      <img src={process.env.PUBLIC_URL + "./assets/images/sh2.png"} className="img-responsive center-block" alt="sh2" />
                    </div>
                    </div>
                    <div className="col-md-10">
                      <div className="box-content">
                        <h4 className="stay">Customized solutions for everyone</h4>
                        <p>Our solutions for investors, companies and institutions are customized, industry specific and best in class.</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
                <div className="private">
                  <div className="row">
                    <div className="col-md-2">
                    <div className="box-img">
                      <img src={process.env.PUBLIC_URL + "./assets/images/sh3.png"} className="img-responsive center-block" alt="sh3" />
                    </div>
                    </div>
                    <div className="col-md-10">
                      <div className="box-content">
                        <h4 className="stay">Quick on-boarding</h4>
                        <p>You can quickly sign up and be trade ready after getting your KYC and personal details verified. We endeavour to provide a seamless experience to our users.</p>
                      </div>
                    </div>
                  </div>
                </div>
           
               <div className=" addsection1 bottom-box">
               <div className="main-title text-center">
                   <h1>More Question?</h1>
                   <p className="mt-30">We take utmost care to ensure that we protect the interest of all our clients. We are available 24*7 to help you with all your questions and issues. </p>
                   <div className="mt-50">
                   <Link to="/contact" class="btn2 ">Contact us</Link>
                   </div>
                </div>
               </div>
           
              
        </section>

		</>
	);
}

export default Why;