import React from "react";
import InnerBanner from './common/InnerBanner'


const Services = () => {
  const bannerImage = "1c.png";
  const headingtxt = "Our Services";
  // const subHeadingtxt = "We serve the best services for our customers.";
  const subHeadingtxt = "We endeavor to provide the best in-class service to our clients through our technology driven processesand ensure the time efficient, and transparent completion of transactions.";
	return(
		<>
           <InnerBanner headingtxt={headingtxt} subHeadingtxt={subHeadingtxt} bannerImage={bannerImage}/>

           <section className="services">
          <div className="container">
            <div className="row">
              <div className="col-md-1" />
              <div className="col-md-10">
                <div className="private">
                  <div className="row">
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/2a.jpg"} className="img-respnsive center-block wh100" alt="ins1"/>
                    </div>
                    <div className="col-md-9 d-flex align-item minHeight214">
                      <div className="get1">
                        <h4 className="stay">Buy/Sell Unlisted shares/ESOP</h4>
                        <p>We, through our technology enabled platform,  provide a transparent and secure mechanism to transactin shares/ESOP of unlisted companies including start up-companies, and hence providing liquiditythrough our offerings. We help retail investors, institutions and corporations with various solutions tosuit their requirements in relation to transactions in unlisted shares/ESOP. Unlisted shares includeshares/ESOP of startups companies, Pre IPO companies, and delisted companies</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="private">
                  <div className="row">
                    <div className="col-md-9 d-flex align-item minHeight214">
                      <div className="get">
                        <h4 className="stay">Primary Placement</h4>
                        <p>Our team has relevant experience in fund management, transaction advisory and transaction supportservices in the past. We help companies raise primary capital from various funds/institutions/familyoffices having domestic and global presence.</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/3a.jpg"} className="img-respnsive center-block wh100" alt="ins2"/>
                    </div>
                  </div>
                </div>
                <div className="private">
                  <div className="row">
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/4.jpg"} className="img-respnsive center-block wh100" alt="ins3"/>
                    </div>
                    <div className="col-md-9 d-flex align-item minHeight214">
                      <div className="get1">
                        <h4 className="stay">Pre-IPO Placement</h4>
                        <p>We help unlisted companies do primary and secondary placement of their equity shares to domestic andglobal funds through our platform before they are planning to come out with an Initial Public offerwhether in domestic or international capital markets.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="private">
                  <div className="row">
                    <div className="col-md-9 d-flex align-item minHeight214">
                      <div className="get">
                        <h4 className="stay">ESOP Transaction Management</h4>
                        <p>We provide end to end ESOP transaction management solutions through our technology enabledplatform  to enable the corporation to manage the transaction in ESOP given to its employees in a timeefficient manner and help in getting the right price for ESOP. Our background of transaction advisorythrough consulting practice comes in handy for ensuring solutions that suits you the best.</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/5.jpg"} className="img-respnsive center-block wh100" alt="ins2"/>
                    </div>
                  </div>
                </div>
                <div className="private">
                  <div className="row">
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/6.jpg"} className="img-respnsive center-block wh100" alt="ins3"/>
                    </div>
                    <div className="col-md-9 d-flex align-item minHeight214">
                      <div className="get1">
                        <h4 className="stay">Transaction support services</h4>
                        <p>We provide the transaction support services including valuation advisory through our associate entitywhich is one of the leading firms in transaction advisory services in India.</p>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="private">
                  <div className="row">
                    <div className="col-md-9 d-flex align-item minHeight214">
                      <div className="get">
                        <h4 className="stay">Fund Management Services</h4>
                        <p>Our team has relevant credentials for fund management and research advisory servicesfor listed and unlisted companies in India. We offer these services to our clients to helpthem optimize their return on investment.</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/7.jpg"} className="img-respnsive center-block wh100" alt="ins2"/>
                    </div>
                  </div>
                </div>
                <div className="private">
                  <div className="row">
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/6.jpg"} className="img-respnsive center-block wh100" alt="ins3"/>
                    </div>
                    <div className="col-md-9 d-flex align-item minHeight214">
                      <div className="get1">
                        <h4 className="stay">Consulting</h4>
                        <p>We have close association with a global consulting firm. We help our clients with complete solutionspertaining to secondary transactions of equity shares/ESOP be it pertaining to finance, tax, regulatorycompliance, or other services.</p>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="private">
                  <div className="row">
                    <div className="col-md-9 d-flex align-item minHeight214">
                      <div className="get">
                        <h4 className="stay">Valuation Services</h4>
                        <p>Our associate company which is one of the leading brands invaluations practice in India is working with us for providing valuation advisory or support services to our clients on a need basis.</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/7.jpg"} className="img-respnsive center-block wh100" alt="ins2"/>
                    </div>
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
                <h3 className="text-center">Rationale for unlisted shares developing as an Asset Class globally</h3>
                <div className="img1">
                  <p className="i1"><span>1</span> <img src={process.env.PUBLIC_URL + "./assets/images/icon.png"} alt="icon" /></p>
                  <p>Unlisted companies usually can be small companies (primarily tech driven) with unique business models and very high growth potential. However, much of the growth in such businesses takes place before they go for IPOs.</p>
                </div>
                <div className="img1">
                <p className="i1"><span>2</span> <img src={process.env.PUBLIC_URL + "./assets/images/icon.png"} alt="icon" /></p>
                  <p>Investment in unlisted shares offers huge potential for generating alpha return considering the growth potential, unique business model, demand supply gaps, globally scalable businesses and high margins.</p>
                </div>
                <div className="img1">
                <p className="i1"><span>3</span> <img src={process.env.PUBLIC_URL + "./assets/images/icon.png"} alt="icon" /></p>
                  <p>Absence of leverage  in tech driven companies generally carry low risk of default, and thereby, makes it a stable investment opportunity.</p>
                </div>
                <div className="img1">
                <p className="i1"><span>4</span> <img src={process.env.PUBLIC_URL + "./assets/images/icon.png"} alt="icon" /></p>
                  <p>Investors generally look for opportunities where unlisted securities are trading at a substantial discount to their listed peers considering the relevant demand and supply gap at the time of investment, thus offering greater future profit potential.</p>
                </div>
                <div className="img1">
                <p className="i1"><span>5</span> <img src={process.env.PUBLIC_URL + "./assets/images/icon.png"} alt="icon" /></p>
                  <p>Investment in unlisted shares is suitable for those informed investors who are looking for deploying their discretionary investible corpus into a high return asset class whose growth is linked to emerging trends in the global market.</p>
                </div>
                <div className="img1">
                <p className="i1"><span>6</span> <img src={process.env.PUBLIC_URL + "./assets/images/icon.png"} alt="icon" /></p>
                  <p>Generally, investment in unlisted shares should form part of an investor's core portfolio with a three to five-year investment horizon considering the time taken by start-up companies for their business model to mature, and to maximise the growth from investment.</p>
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