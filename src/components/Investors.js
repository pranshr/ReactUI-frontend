import React from "react";
import InnerBanner from './common/InnerBanner'

const Investors = () => {
  const bannerImage = "inv-banner.png";
	const headingtxt = "For Investors";
	const subHeadingtxt = "Get easy access to our marketplace. Quickly interact, negotiate, close deal and transact with verified buyers and verified inventories. Get transparer quick liquidity for your unlisted stocks. Interact with thousands of potential buyers and sellers.Access company details, available investment opportunities, premium services using the platform.";
	return(
		<>
    <InnerBanner headingtxt={headingtxt} subHeadingtxt={subHeadingtxt} bannerImage={bannerImage}/>
		
        <section className="investors">
          <div className="container">
            <div className="row">
              <div className="col-md-1" />
              <div className="col-md-10">
                <div className="private">
                  <div className="row">
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/inv1.png"} className="img-responsive center-block" alt="inv1"/>
                    </div>
                    <div className="col-md-9">
                      <div className="insights">
                        <h4 className="stay">Get insights to Unlisted Companies</h4>
                        <p>We provide you with all the information on companies, their regulatory filings, price trends and our assessment notes.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="private">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="access">
                        <h4 className="stay">Get access to high growth and high potential Private Companies</h4>
                        <p>You get opportunities to companies which you dream of owning. These are companies who's services you use frequently and want to become a part of their growth stories.</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/inv2.png"} className="img-responsive center-block" alt="inv2"/>
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

export default Investors;