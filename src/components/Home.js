import React from "react";
import { Link } from "react-router-dom";
//import axios from 'axios';


const Home = () => {

	/*
  useState, useEffect// use in import
  const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios.get('http://13.127.179.126:8080/company/findAll')
			.then(res => {
				console.log(res)
				setPosts(res.data)
				
			})
			.catch(err => {
				console.log(err)
			})
	})*/

	return(
		<>
		 <section className="banner">
          <div className="container">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              {/* Indicators */}
              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to={0} className="active" />
                <li data-target="#myCarousel" data-slide-to={1} />
                <li data-target="#myCarousel" data-slide-to={2} />
              </ol>
              {/* Wrapper for slides */}
              <div className="carousel-inner">
                <div className="item active">
                  <div className="row">
                    <div className="col-md-7">
                      <h1>Promoting escrow based safe<br />transactions for buying/selling<br />of unlisted assets</h1>
                      <p><Link to="/Investors">Buyer</Link>
                        <Link to="/Companies">Seller</Link></p>
                    </div>
                    <div className="col-md-5"><img src={process.env.PUBLIC_URL + "./assets/images/slider1.png"} className="img-responsive center-block" alt="bannerimage" /></div>
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col-md-7">
                      <h1>Promoting escrow based safe<br />transactions for buying/selling<br />of unlisted assets</h1>
                      <p><Link to="/Investors">Buyer</Link>
                        <Link to="/Companies">Seller</Link></p>
                    </div>
                    <div className="col-md-5"><img src={process.env.PUBLIC_URL + "./assets/images/slider2.png"} className="img-responsive center-block"  alt="bannerimage"/></div>
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col-md-7">
                      <h1>Promoting escrow based safe<br />transactions for buying/selling<br />of unlisted assets</h1>
                      <p><Link to="/Investors">Buyer</Link>
                        <Link to="/Companies">Seller</Link></p>
                    </div>
                    <div className="col-md-5"><img src={process.env.PUBLIC_URL + "./assets/images/slider3.png"} className="img-responsive center-block"  alt="bannerimage"/></div>
                  </div>
                </div>
              </div>
              {/* Left and right controls */}
            </div>
          </div>
        </section>
        <section className="main-section">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
              </div>
              <div className="col-md-5" />
            </div>
          </div>
        </section>
        <section className="second-section">
          <div className="container">
            <div className="row">
              <div className="row">
                <div className="col-md-6">
                  <h2><strong>Companies currently available <br />for trade</strong></h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="box">
                    <div className="box1">
                      <div className="row">
                        <div className="col-md-2 col-xs-2">
                          <div className="border1">
                            <img src={process.env.PUBLIC_URL + "./assets/images/sunphar.png"} alt="company_logo" className="center-block" />
                          </div>
                        </div>
                        <div className="col-md-8 col-xs-8 pl-25">
                          <p className="p2" style={{fontWeight: 'bold'}}>Sun Pharma</p>
                          <p className="pharmacy">Pharmacy</p>
                          <p className="pharmacy">INE044A01036</p>
                        </div>
                        <div className="col-md-2 col-xs-2">
                          <p className="plus1"><Link to="#" className><img src={process.env.PUBLIC_URL + "./assets/images/add.png"} alt="add" /></Link></p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="value">
                          <p>Valuation<span className="pull-right text-bold">2,909.76</span></p>
                          <p>Series of Funding<span className="pull-right text-bold">Series A</span></p>
                          <p>Sun Pharmaceutical Industries Limited is an Indian multinational pharmaceutical company headquartered in Mumbai, Maharashtra.</p>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="box">
                    <div className="box1">
                      <div className="row">
                        <div className="col-md-2 col-xs-2">
                          <div className="border1">
                            <img src={process.env.PUBLIC_URL + "./assets/images/hdfc.png"} alt="company_logo" className="center-block" />
                          </div>
                        </div>
                        <div className="col-md-8 col-xs-8 pl-25">
                          <p className="p2" style={{fontWeight: 'bold'}}>HDFC Bank</p>
                          <p className="pharmacy">Pharmacy</p>
                          <p className="pharmacy">INE044A01036</p>
                        </div>
                        <div className="col-md-2 col-xs-2">
                          <p className="plus1"><Link to="#" className><img src={process.env.PUBLIC_URL + "./assets/images/add.png"} alt="add" /></Link></p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="value">
                          <p>Valuation<span className="pull-right text-bold">2,909.76</span></p>
                          <p>Series of Funding<span className="pull-right text-bold">Series A</span></p>
                          <p>Sun Pharmaceutical Industries Limited is an Indian multinational pharmaceutical company headquartered in Mumbai, Maharashtra.</p>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="box">
                    <div className="box1">
                      <div className="row">
                        <div className="col-md-2 col-xs-2">
                          <div className="border1">
                            <img src={process.env.PUBLIC_URL + "./assets/images/logo1.png"} alt="company_logo" className="center-block" />
                          </div>
                        </div>
                        <div className="col-md-8 col-xs-8 pl-25 ">
                          <p className="p2" style={{fontWeight: 'bold'}}>Sun Pharma</p>
                          <p className="pharmacy">Pharmacy</p>
                          <p className="pharmacy">INE044A01036</p>
                        </div>
                        <div className="col-md-2 col-xs-2">
                          <p className="plus1"><Link to="#" className><img src={process.env.PUBLIC_URL + "./assets/images/add.png"} alt="add" /></Link></p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="value">
                          <p>Valuation<span className="pull-right text-bold">2,909.76</span></p>
                          <p>Series of Funding<span className="pull-right text-bold">Series A</span></p>
                          <p>Sun Pharmaceutical Industries Limited is an Indian multinational pharmaceutical company headquartered in Mumbai, Maharashtra.</p>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="box">
                    <div className="box1">
                      <div className="row">
                        <div className="col-md-2 col-xs-2">
                          <div className="border1">
                            <img src={process.env.PUBLIC_URL + "./assets/images/adani.png"} alt="company_logo" className="center-block" />
                          </div>
                        </div>
                        <div className="col-md-8 col-xs-8 pl-25">
                          <p className="p2" style={{fontWeight: 'bold'}}>Sun Pharma</p>
                          <p className="pharmacy">Pharmacy</p>
                          <p className="pharmacy">INE044A01036</p>
                        </div>
                        <div className="col-md-2 col-xs-2">
                          <p className="plus1"><Link to="#" className><img src={process.env.PUBLIC_URL + "./assets/images/add.png"} alt="add" /></Link></p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="value">
                          <p>Valuation<span className="pull-right text-bold">2,909.76</span></p>
                          <p>Series of Funding<span className="pull-right text-bold">Series A</span></p>
                          <p>Sun Pharmaceutical Industries Limited is an Indian multinational pharmaceutical company headquartered in Mumbai, Maharashtra.</p>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="box">
                    <div className="box1">
                      <div className="row">
                        <div className="col-md-2 col-xs-2">
                          <div className="border1">
                            <img src={process.env.PUBLIC_URL + "./assets/images/sunphar.png"} className="center-block" alt="company_logo" />
                          </div>
                        </div>
                        <div className="col-md-8 col-xs-8 pl-25">
                          <p className="p2" style={{fontWeight: 'bold'}}>Sun Pharma</p>
                          <p className="pharmacy">Pharmacy</p>
                          <p className="pharmacy">INE044A01036</p>
                        </div>
                        <div className="col-md-2 col-xs-2">
                          <p className="plus1"><Link to="#" className><img src={process.env.PUBLIC_URL + "./assets/images/add.png"} alt="add" /></Link></p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="value">
                          <p>Valuation<span className="pull-right text-bold">2,909.76</span></p>
                          <p>Series of Funding<span className="pull-right text-bold">Series A</span></p>
                          <p>Sun Pharmaceutical Industries Limited is an Indian multinational pharmaceutical company headquartered in Mumbai, Maharashtra.</p>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="box">
                    <div className="box1">
                      <div className="row">
                        <div className="col-md-2 col-xs-2">
                          <div className="border1">
                            <img src={process.env.PUBLIC_URL + "./assets/images/hdfc.png"} className="center-block" alt="company_logo"/>
                          </div>
                        </div>
                        <div className="col-md-8 col-xs-8 pl-25">
                          <p className="p2" style={{fontWeight: 'bold'}}>HDFC Bank</p>
                          <p className="pharmacy">Pharmacy</p>
                          <p className="pharmacy">INE044A01036</p>
                        </div>
                        <div className="col-md-2 col-xs-2">
                          <p className="plus1"><Link to="#" className><img src={process.env.PUBLIC_URL + "./assets/images/add.png"} alt="add" /></Link></p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="value">
                          <p>Valuation<span className="pull-right text-bold">2,909.76</span></p>
                          <p>Series of Funding<span className="pull-right text-bold">Series A</span></p>
                          <p>Sun Pharmaceutical Industries Limited is an Indian multinational pharmaceutical company headquartered in Mumbai, Maharashtra.</p>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="box">
                    <div className="box1">
                      <div className="row">
                        <div className="col-md-2 col-xs-2">
                          <div className="border1">
                            <img src={process.env.PUBLIC_URL + "./assets/images/logo1.png"} className="center-block" alt="company_logo"/>
                          </div>
                        </div>
                        <div className="col-md-8 col-xs-8 pl-25 ">
                          <p className="p2" style={{fontWeight: 'bold'}}>Sun Pharma</p>
                          <p className="pharmacy">Pharmacy</p>
                          <p className="pharmacy">INE044A01036</p>
                        </div>
                        <div className="col-md-2 col-xs-2">
                          <p className="plus1"><Link to="#" className><img src={process.env.PUBLIC_URL + "./assets/images/add.png"} alt="add" /></Link></p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="value">
                          <p>Valuation<span className="pull-right text-bold">2,909.76</span></p>
                          <p>Series of Funding<span className="pull-right text-bold">Series A</span></p>
                          <p>Sun Pharmaceutical Industries Limited is an Indian multinational pharmaceutical company headquartered in Mumbai, Maharashtra.</p>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="box">
                    <div className="box1">
                      <div className="row">
                        <div className="col-md-2 col-xs-2">
                          <div className="border1">
                            <img src={process.env.PUBLIC_URL + "./assets/images/adani.png"} className="center-block" alt="company_logo" />
                          </div>
                        </div>
                        <div className="col-md-8 col-xs-8 pl-25">
                          <p className="p2" style={{fontWeight: 'bold'}}>Sun Pharma</p>
                          <p className="pharmacy">Pharmacy</p>
                          <p className="pharmacy">INE044A01036</p>
                        </div>
                        <div className="col-md-2 col-xs-2">
                          <p className="plus1"><Link to="#" className><img src={process.env.PUBLIC_URL + "./assets/images/add.png"} alt="add" /></Link></p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="value">
                          <p>Valuation<span className="pull-right text-bold">2,909.76</span></p>
                          <p>Series of Funding<span className="pull-right text-bold">Series A</span></p>
                          <p>Sun Pharmaceutical Industries Limited is an Indian multinational pharmaceutical company headquartered in Mumbai, Maharashtra.</p>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="view">
                    <p className="text-center p1"><Link to="#">View All</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="third-section">
          <div className="container">
            <div className="row">
              <h2 className="text-center"><strong>Why invest in Unlisted<br /> Shares</strong></h2>
              <div className="col-md-6">
                <div className="invest">
                  <img src={process.env.PUBLIC_URL + "./assets/images/highvalue.png"} alt="icon_share_invest"/>
                  <p className="invest-p">Several unlisted companies including start-up companies have unique and high growth business models</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="invest">
                  <img src={process.env.PUBLIC_URL + "./assets/images/peace.png"} alt="icon_share_invest"/>
                  <p className="invest-p">Investment in unlisted shares offers huge potential of returns wherein substantial value unlocking usually happens when they go for IPOs</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="invest1">
                  <img src={process.env.PUBLIC_URL + "./assets/images/growth.png"} alt="icon_share_invest" />
                  <p className="invest-p">Absence of leverage makes these investments in unlisted shares as stable investment opportunities</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="invest1">
                  <img src={process.env.PUBLIC_URL + "./assets/images/diver.png"} alt="icon_share_invest"/>
                  <p className="invest-p">Unexplored growth potential exist in several unlisted securities which are available at substantial discount to their intrinsic value as also to their listed peers</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="invest1">
                  <img src={process.env.PUBLIC_URL + "./assets/images/diver.png"} alt="icon_share_invest"/>
                  <p className="invest-p">These offer enormous wealth creation opportunity to informed investors having discretionary corpus</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="forth-section">
          <div className="container">
            <h2>Why Unlisted Shares?</h2>
            <div className="row">
              <div className="col-md-1 pr0"><img src={process.env.PUBLIC_URL + "./assets/images/3.png"} alt="unlisted_shares" /></div>
              <div className="col-md-10 pl0">
                <p>Because of their lower base, many start-ups are growing much faster than the older generation companies and they continue to outperform the benchmark returns significantly. Much of this development, however, happens before the firm goes public with an IPO. Hence investing in the Growth / Pre IPO stage in these companies will provide the investor with early- mover advantage resulting in superior returns. </p>
				        <p>We fulfil the intrinsic need of the buyers for a safe platform that gives them access to high-quality shares at the best price, provide trade matching and even allows retail purchases. Moreover, it is very easy and economical to buy stocks in these start-ups & private companies just as venture capitalists do without spending huge money.</p>
              </div>
              <div className="col-md-1" />
            </div>
            <div className="space">
              <div className="row">
                <div className="col-md-1  pr0">
                  <img src={process.env.PUBLIC_URL + "./assets/images/2.png"} alt="unlisted_shares"/>
                </div>
                <div className="col-md-10 pl0">
                 <p class="listed">Huge return potential</p>
				        <p>Investment in unlisted shares offers huge return potential, however value unlocking usually happens when they go for IPOs.</p>
                </div>
                <div className="col-md-1" />
              </div>
            </div>
            <div className="space">
              <div className="row">
                <div className="col-md-1 pr0"><img src={process.env.PUBLIC_URL + "./assets/images/4.png"} alt="unlisted_shares"/>
                </div>
                <div className="col-md-10 pl0">
                 <p class="listed">Value of shares increases</p>
				        <p>Value of shares also usually increases when a startup goes for a fresh round of funding.</p>
                </div>
                <div className="col-md-1" />
              </div>
            </div>
            <div className="space">
              <div className="row">
                <div className="col-md-1 pr0"><img src={process.env.PUBLIC_URL + "./assets/images/1.png"} alt="unlisted_shares"/>
                </div>
                <div className="col-md-10 pl0">
                 <p class="listed">Stable investment opportunity</p>
				        <p>Absence of leverage makes it a stable investment opportunity driven usually by business rationale.</p>
                </div>
                <div className="col-md-1" />
              </div>
            </div>
            <div className="space">
              <div className="row">
                <div className="col-md-1 pr0"><img src={process.env.PUBLIC_URL + "./assets/images/5.png"} alt="unlisted_shares"/>
                </div>
                <div className="col-md-10 pl0">
                 <p class="listed">Greater future profit potential</p>
				        <p>Investors should look for such opportunities where unlisted securities are trading at a substantial discount to their listed peers and also their own intrinsic business worth, thus offering greater future profit potential.</p>
                </div>
                <div className="col-md-1" />
              </div>
            </div>
            <div className="space">
              <div className="row">
                <div className="col-md-1 pr0"><img src={process.env.PUBLIC_URL + "./assets/images/7.png"} alt="unlisted_shares"/>
                </div>
                <div className="col-md-10 pl0">
                <p class="listed">Suitable for informed investors</p>
				        <p>They are suitable for informed investors with discretionary corpus.</p>
                </div>
                <div className="col-md-1" />
              </div>
            </div>
          </div>
        </section>
        <section className="last-section">
          <div className="container">
            <h2>Which companies’ shares <br/>
			do we work with?</h2>
            <div className="row">
              <div className="col-md-7">
                <p>We work as marketplace for all sort of unlisted companies primarily focusing on secondary transactions in the following companies:</p>
					<p>&diams; Venture Capital (VC)/Private Equity (PE) backed companies</p>
					<p>&diams; Late-stage VC or PE backed companies which are planning or in the process of IPO evincing maximum public interest and getting formalised price discovery;</p>
					<p>&diams; Rapidly growing companies having good visibility in press and/or business models with proven unit economics</p>
					<p>&diams; Pre-IPO companies other than those funded by VCs or PEs</p>
					<p>&diams; Operating companies delisted from stock exchanges </p>
					<p>&diams; Indian businesses which are part of company registered outside India </p>
              </div>
              <div className="col-md-5">
                <p className="orange"><img src={process.env.PUBLIC_URL + "./assets/images/last.png"} alt="last" className="img-responsive" /></p>
              </div>
            </div>
          </div>
        </section>
        <section className="addsection">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>Explore our Investing Platform</h2>
                <p>Excellent plan and very easy and takes less than few <br /> minutes in "Sell" and "Buy" shares</p>
                <p><Link to="#" className="btn1">Try Our Platform</Link></p>
              </div>
            </div>
          </div>
        </section>
		</>
	);
}

export default Home;