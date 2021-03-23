import React from "react";
import InnerBanner from './common/InnerBanner'


const Services = () => {
  const bannerImage = "1c.png";
  const headingtxt = "Our Services";
  const subHeadingtxt = "We serve the best services for our customers.";
	return(
		<>
           <InnerBanner headingtxt={headingtxt} subHeadingtxt={subHeadingtxt} bannerImage={bannerImage}/>
        <section className="services">
          <div className="container">
            <div className="row">
              <div className="col-md-1" />
              <div className="col-md-10">
                <div className="row">
                  <div className="col-md-7">
                    <img src={process.env.PUBLIC_URL + "./assets/images/2a.jpg"} className="img-responsive" alt="2a" />
                  </div>
                  <div className="col-md-5">
                    <div className="buy">
                      <h4>Buy Sell Unlisted shares</h4>
                      <p>We provide a transparent and secure mechanism to transact in such shares and hence provide liquidity through our offerings. We help retail investors, institutions and companies with various solutions to suit their various financial requirements.Unlisted shares include startups, Pre IPO companies, and delisted companies</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <div className="sell">
                      <h4>Primary Placement</h4>
                      <p>We come from a fund management, consultancy and valuations background. We help companies raise primary capital from funds/institutions/private domestic and global investors.</p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <img src={process.env.PUBLIC_URL + "./assets/images/3a.jpg"} className="mt-80 img-responsive" alt="3a"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-7">
                    <img src={process.env.PUBLIC_URL + "./assets/images/4.jpg"} className="mt-80 img-responsive" alt="4"/>
                  </div>
                  <div className="col-md-5">
                    <div className="see">
                      <h4>Providing liquidity to vested ESOP holders</h4>
                      <p>We help demated shareholders with the right solutions to get liquidity on their shares. We help in placing these shares to our investors and institutions.</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <div className="limit">
                      <h4>Consulting</h4>
                      <p>We have close association with a global consulting firm. We help our partners with complete solutions financial, compliance, investment banking, taxation, auditing solutions.</p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <img src={process.env.PUBLIC_URL + "./assets/images/5.jpg"} className="mt-80 img-responsive" alt="5"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-7">
                    <img src={process.env.PUBLIC_URL + "./assets/images/6.jpg"} className="mt-80 img-responsive" alt="6"/>
                  </div>
                  <div className="col-md-5">
                    <div className="escrow">
                      <h4>Escrow Service</h4>
                      <p>Transfer share among different parties hassle free with the help of safe and secure bank escrow service provided by UnlistedAssets.com.</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <div className="growth">
                      <h4>ESOP Management</h4>
                      <p>We provide end to end ESOP management solutions to suit companies at various stages of their business cycle. Our background of compliance through our consulting practice comes in handy for ensuring solutions that suits you the best.</p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <img src={process.env.PUBLIC_URL + "./assets/images/7.jpg"} className="mt-80 img-responsive" alt="7"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-7">
                    <img src={process.env.PUBLIC_URL + "./assets/images/6.jpg"} className="mt-80 img-responsive" alt="6"/>
                  </div>
                  <div className="col-md-5">
                    <div className="escrow">
                      <h4>Valuations services</h4>
                      <p>We are a leader in valuations practice in India and have privilege of offering our services to leading companies.</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <div className="growth">
                      <h4>Fund Management Services</h4>
                      <p>We provide fund management and research advisory services to our clients in listed as well as unlisted equities.</p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <img src={process.env.PUBLIC_URL + "./assets/images/7.jpg"} className="mt-80 img-responsive" alt="7" />
                  </div>
                </div>
              </div>
              <div className="col-md-2" />
            </div>
          </div>
        </section>
        <section className="last-services">
          <div className="container">
            <div className="row">
              <div className="col-md-1" />
              <div className="col-md-10">
                <h3 className="text-center">Salient Features and Investment Rationale</h3>
                <div className="img1">
                  <p className="i1">1</p><img src={process.env.PUBLIC_URL + "./assets/images/icon.png"} alt="icon" />
                  <p>Unlisted companies usually can be small companies with unique business models and very high growth potential. However, much of the growth happens in such businesses takes place before they go for IPOs.</p>
                </div>
                <div className="img1">
                  <p className="i2">2</p><img src={process.env.PUBLIC_URL + "./assets/images/icon.png"} alt="icon" />
                  <p>Investment in unlisted shares offers huge return potential, however value unlocking usually happens when they go for IPOs.</p>
                </div>
                <div className="img1">
                  <p className="i3">3</p><img src={process.env.PUBLIC_URL + "./assets/images/icon.png"} alt="icon" />
                  <p>Absence of leverage makes it a stable investment opportunity driven usually by business rationale.</p>
                </div>
                <div className="img1">
                  <p className="i4">4</p><img src={process.env.PUBLIC_URL + "./assets/images/icon.png"} alt="icon" />
                  <p>Investors should look for such opportunities where unlisted securities are trading at a substantial discount to their listed peers and also their own intrinsic business worth, thus offering greater future profit potential.</p>
                </div>
                <div className="img1">
                  <p className="i5">5</p><img src={process.env.PUBLIC_URL + "./assets/images/icon.png"} alt="icon" />
                  <p>They are suitable for informed investors with discretionary corpus.</p>
                </div>
                <div className="img1">
                  <p className="i6">6</p><img src={process.env.PUBLIC_URL + "./assets/images/icon.png"} alt="icon" />
                  <p>Generally, unlisted and pre -IPO investment in equity shares should form part of investor's core portfolio with a five-year investment horizon.</p>
                </div>
              </div>
              <div className="col-md-3" />
            </div>
          </div>
        </section>
		</>
	);
}

export default Services;