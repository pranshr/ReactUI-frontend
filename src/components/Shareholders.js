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
                    <div className="col-md-9 d-flex align-item minHeight214">
                      <div className="get">
                        <h4 className="stay">Get liquidity by selling your ESOP/shares</h4>
                        <p>You can assess what your shares are worth in the market at any particular time using our price discovery mechanism along with updated information on the platform and decide the appropriate time for liquidating your holding(s). You can quickly realize cash against your shares/ESOP rather than wait for a long time to get an exit.</p>
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