import React from "react";
import InnerBanner from './common/InnerBanner'

const Institutions = () => {
  const bannerImage = "ins-banner.png";
	const headingtxt = "For Institutions";
	const subHeadingtxt = "We work with all types of institutions, Family Offices to facilitate unlisted stocks transactions. We have relations with institutions across the world primary and to help primary and secondary investments and help them liquidate their investments in unlisted stocks";
  document.title ="Unlisted Shares/Trading/Pre IPO Solutions For the Institutions -Unlistedassets"; 
  document.getElementsByTagName("META")[3].content="Pre IPO solutions are available along with IPO trading shade price, Pre IPO and Pre IPO solutions for the institutions. ";
  return(
		<>
		<InnerBanner headingtxt={headingtxt} subHeadingtxt={subHeadingtxt} bannerImage={bannerImage}/>
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
                    <div className="col-md-9 d-flex align-item minHeight214">
                      <div className="get">
                        <h4 className="stay">Get access to Bulk deals in target companies</h4>
                        <p>We work closely with many unlisted companies in various capacities through our other arms which can better help us source inventory in bulk for Institutional clients. We may get you access to a pool of ESOP/Shares inventory, inventory from angel investors and early stage investors, ex-co-founders or facilitate placing capital in primary rounds in the target sectors or companies.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="private">
                  <div className="row">
                    <div className="col-md-9 d-flex align-item minHeight214">
                      <div className="get">
                        <h4 className="stay">Stay informed on opportunities</h4>
                        <p>Get first-hand information on all lucrative opportunities customized to fund mandate</p>
                        <p>Access to all public domain information at all places</p>
                        <p>Price discovery mechanism for retail and institutional deals for competitive landscape </p>
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
                    <div className="col-md-9 d-flex align-item minHeight214">
                      <div className="get">
                        <h4 className="stay">Get professional services</h4>
                        <p>We provide various professional services including Legal, valuations, documentation as part of consulting practice of our associated arms, who have relevant experience in their area of expertise. </p>
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