import React from "react";


const Institutions = () => {
	return(
		<>
			<section className="institutions-section banner">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h1>For Institutions</h1>
                <p>We work with all types of institutions, Family Offices to facilitate unlisted stocks transactions. We have relations with institutions across the world primary and to help primary and secondary investments and help them liquidate their investments in unlisted stocks</p>
              </div>
              <div className="col-md-5"><img src={process.env.PUBLIC_URL + "./assets/images/ins-banner.png"} className="img-responsive center-block" alt="ins_banner" /></div>
            </div>
          </div>
        </section>
        <section className="institutions">
          <div className="container">
            <div className="row">
              <div className="col-md-1" />
              <div className="col-md-10">
                <div className="private">
                  <div className="row">
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/ins1.png"} className="img-respnsive center-block" alt="ins1"/>
                    </div>
                    <div className="col-md-9">
                      <div className="get1">
                        <h4 className="stay">Get access to your target companies</h4>
                        <p>We work closely with the CXO’s of various target Unlisted companies. We also serve them through our consulting arm. Get access to pool of ESOP inventory, early investors, ex-co-founders or place capital in a primary round in the target sectors or companies.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="private">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="get">
                        <h4 className="stay">Stay informed on opportunities</h4>
                        <p>Get first-hand information on all lucrative opportunities to your fund mandate.</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/ins2.png"} className="img-respnsive center-block" alt="ins2"/>
                    </div>
                  </div>
                </div>
                <div className="private">
                  <div className="row">
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/ins3.png"} className="img-respnsive center-block" alt="ins3"/>
                    </div>
                    <div className="col-md-9">
                      <div className="get1">
                        <h4 className="stay">Get professional services</h4>
                        <p>Legal, valuations, documentation, and consulting. Our professional experience comes handy in providing you an end to end structure.</p>
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

export default Institutions;