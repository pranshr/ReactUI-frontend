import React from "react";


const Why = () => {
	return(
		<>
			
			  <section className="shareholders-section banner">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h1>Why Us</h1>
                <p>Our platform provides a new way to Buy/Sell/Explore investment in Unlisted Share in India through a transparent and safe process</p>
              </div>
              <div className="col-md-5"><img src={process.env.PUBLIC_URL + "./assets/images/shareholder-banner.png"} className="img-responsive center-block" alt="shareholder-banner" /></div>
            </div>
          </div>
        </section>
        <section className="shareholders">
          <div className="container">
            <div className="row">
              <div className="col-md-1" />
              <div className="col-md-10">
                <div className="private">
                  <div className="row">
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/sh1.png"} className="img-responsive center-block" alt="sh1" />
                    </div>
                    <div className="col-md-9">
                      <div className="trust">
                        <h4 className="stay">Why UnlistedAssets.com? </h4>
                        <p>Our platform provides a new way to Buy/Sell/Explore investment in Unlisted Share in India through a transparent and safe process</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="private"> 
                  <div className="row">
                    <div className="col-md-9">
                      <div className="integrity">
                        <h4 className="stay">Buyer-Seller Interaction</h4>
                        <p>Our unique marketplace ensures a transparent interaction/negotiation between buyers and sellers. One can create his holdings, create listings and do a transparent transaction with other buyers and sellers through our seamless platform.</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/sh2.png"} className="img-responsive center-block"  alt="sh2" />
                    </div>
                  </div>
                </div>
                <div className="private">
                  <div className="row">
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/sh3.png"} className="img-responsive center-block" alt="sh3" />
                    </div>
                    <div className="col-md-9">
                      <div className="analysis">
                        <h4 className="stay">Enhanced Liquidity</h4>
                        <p>Shareholders of unlisted companies can get easy and quick liquidity through our marketplace. </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="private">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="integrity">
                        <h4 className="stay">Easy to Access</h4>
                        <p>Our unique marketplace ensures a transparent interaction/negotiation between buyers and sellers. One can create his holdings, create listings and do a transparent transaction with other buyers and sellers through our seamless platform.</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/sh2.png"} className="img-responsive center-block" alt="sh2" />
                    </div>
                  </div>
                </div>
                <div className="private">
                  <div className="row">
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/sh3.png"} className="img-responsive center-block" alt="sh3" />
                    </div>
                    <div className="col-md-9">
                      <div className="analysis">
                        <h4 className="stay">Secured via Escrow</h4>
                        <p>Our transactions are secured through a bank escrow mechanism. So you need not worry about your transaction while dealing through unlistedassets.com </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="private">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="integrity">
                        <h4 className="stay">SEBI Registered Trustee</h4>
                        <p>A SEBI registered trustee audits the transaction before release of funds through the bank escrow.</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/sh2.png"} className="img-responsive center-block" alt="sh2" />
                    </div>
                  </div>
                </div>
                <div className="private">
                  <div className="row">
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/sh3.png"} className="img-responsive center-block" alt="sh3" />
                    </div>
                    <div className="col-md-9">
                      <div className="analysis">
                        <h4 className="stay">Investment Banking/Consulting/Valuations/Fund Management</h4>
                        <p>- Our founders have established their presence in various domains and are well equipped to provide all that you would need. </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="private">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="integrity">
                        <h4 className="stay">Customized solutions for everyone</h4>
                        <p>Our tailored solutions for investors, companies and institutions are unique, industry specific and best in class.</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/sh2.png"} className="img-responsive center-block" alt="sh2" />
                    </div>
                  </div>
                </div>
                <div className="private">
                  <div className="row">
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/sh3.png"} className="img-responsive center-block" alt="sh3" />
                    </div>
                    <div className="col-md-9">
                      <div className="analysis">
                        <h4 className="stay">Quick on-boarding</h4>
                        <p>You can quickly sign up and be trade ready after getting your KYC’s and personal details verified. We endeavour to provide a seamless experience to our users. </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="private">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="analysis">
                        <p>We take utmost care to ensure that we protect the interest of all our clients. We are available 24*7 to help you with all your questions and issues. </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2" />
            </div>
          </div>
        </section>
		</>
	);
}

export default Why;