import React from "react";
import InnerBanner from './common/InnerBanner'

const Shareholders = () => {
  const bannerImage = "inv-banner.png";
	const headingtxt = "For Shareholders";
	const subHeadingtxt = "Start selling your unlisted company shares without waiting to encash after IPO/ exit as you might have to wait for the event much longer than expected. You can take the first step by exploring and assessing the worth of your assets through our guidance and help.";
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
                      <img src={process.env.PUBLIC_URL + "./assets/images/inv1.png"} className="img-responsive center-block" alt="inv-banner" />
                    </div>
                    <div className="col-md-9">
                      <div className="insights">
                        <h4 className="stay">Get liquidity by selling your shares</h4>
                        <p>You can realize what your shares are worth. You can quickly realize cash against your shares rather than wait for a long time to get an exit.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="private">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="access">
                        <h4 className="stay">Pay your tax liabilities for conversion of stock options</h4>
                        <p>You can liquidate part holdings as you convert your stock options to shares.</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/inv2.png"} className="img-responsive center-block" alt="inv2" />
                    </div>
                  </div>
                </div>
                <div className="private">
                  <div className="row">
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/inv1.png"} className="img-responsive center-block" alt="inv1" />
                    </div>
                    <div className="col-md-9">
                      <div className="insights">
                        <h4 className="stay">Transact in a transparent and safe process</h4>
                        <p>Interact directly with buyers. Get money in escrow before transferring your shares.</p>
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

export default Shareholders;