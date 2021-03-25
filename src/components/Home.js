//import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Link } from "react-router-dom";

//import axios from 'axios';
import TradesGridFour from './company-trade/TradesGridFour';

class HomeTwo extends Component {
  constructor(props) {
    super(props)
    this.unlistedCompanies = React.createRef() 
}
scrollTounlistedCompanies = () =>  window.scroll({
  top: this.unlistedCompanies.current.offsetTop,
  left: 0,
  behavior: 'smooth'
});
render(){
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
                    <p><Link to="#">Buyer</Link>
                      <Link to="#">Seller</Link></p>
                  </div>
                  <div className="col-md-5"><img src={process.env.PUBLIC_URL + "./assets/images/slider1.png"} className="img-responsive center-block" alt="bannerimage" /></div>
                </div>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-md-7">
                    <h1>India's first platform to make<br />transactions of unlisted assets<br />seamless</h1>
                    <p><Link to="#">Buyer</Link>
                      <Link to="#">Seller</Link></p>
                  </div>
                  <div className="col-md-5"><img src={process.env.PUBLIC_URL + "./assets/images/slider2.png"} className="img-responsive center-block" alt="bannerimage" /></div>
                </div>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-md-7">
                    <h1>Investing in private equity<br />made easy</h1>
                    <p><Link to="#">Buyer</Link>
                      <Link to="#">Seller</Link></p>
                  </div>
                  <div className="col-md-5"><img src={process.env.PUBLIC_URL + "./assets/images/slider3.png"} className="img-responsive center-block" alt="bannerimage" /></div>
                </div>
              </div>
            </div>
            {/* Left and right controls */}
          </div>
        </div>
      </section>


      <section className="newsection1">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-1 col-md-10">
              <div className="col-md-12">
                <h2 className="text-center sectiontitle"><strong>Start investment in few easy steps</strong></h2>
                <p className="hline" />
              </div>
              <div className="row">
                <div className="col-md-5 pr0 mrm-20">
                  <div className="offlineprocess">
                    <h3 className="text-align-right">Our Offline Process</h3>
                    <h4>Buy/Sell Form</h4>
                    <p> Fill the form with your buy/sell requirements and basic contact information</p>
                    <h4>Reachout</h4>
                    <p>Our team matches our information database of buyers and sellers to get the best suggested deals basis your requirements</p>
                    <h4>Finalise terms of Buy/Sell</h4>
                    <p>You can also talk to our investment advisors to discuss the deal details. </p>
                    <h4>Buyer/Seller Agreement</h4>
                    <p>Sign buyer/seller agreement in physical copy. Scan it/Courier it back to us. </p>

                    <h4>Trustee Escrow</h4>
                    <p>A SEBI registered trustee facilitates a safe and secure transaction for you. </p>

                    <h4>Buyer payment</h4>
                    <p>Buyer payment is secured in a bank escrow. </p>


                    <h4>Seller transfer</h4>
                    <p>Seller transfers the shares to the buyers demat account. </p>

                    <h4>Trustee approves</h4>
                    <p>Trustee approves transaction closure </p>

                    <h4>Our facilitation fee </h4>
                    <p>Our facilitation fee is deducted and debited from the escrow funds.  </p>

                    <h4>Trustee releases</h4>
                    <p>Trustee releases balance funds to the Seller </p>


                    <p className="mt-50"><Link to="/contact" className="btn2">Consult Us</Link></p>
                  </div>
                </div>
                <div className="col-md-2 text-center number hidden-xs p0">
                  <h4 className="mt77">01</h4>
                  <p />
                  <h4 className="mt-30">02</h4>
                  <p />
                  <h4 className="mt-30">03</h4>
                  <p />
                  <h4 className="mt-30">04</h4>
                  <p />
                  <h4 className="mt-30">05</h4>
                  <p />
                  <h4 className="mt-30">06</h4>
                  <p />
                  <h4 className="mt-30">07</h4>
                  <p />
                  <h4 className="mt-30">08</h4>
                  <p />
                  <h4 className="mt-30">09</h4>
                  <p />
                  <h4 className="mt-30">10</h4>
                  <p />
                </div>
                <div className="col-md-5 pl0 mlm-20">
                  <div className="onlineprocess">
                    <h3 className="text-align-left">Our Online Process</h3>
                    <h4>Register</h4>
                    <p>Register on our platform by following a simple sign-up process and get access to unlisted shares listings of all our users</p>
                    <h4>Trade Ready</h4>
                    <p>Provide your profile, bank account, demat account and KYC verification details to be trade ready</p>
                    <h4>Seller Dashboard</h4>
                    <p>List all your shares/esops (unlisted assets) holdings.</p>
                    <h4>Listings</h4>
                    <p>Create listings of stocks that you want to sell from your holdings on your dashboard</p>
                    <h4>Negotiations</h4>
                    <p>Buyers can look at the listings on the platform and can initiate negotiations with the sellers for the unlisted shares they want to buy</p>
                    <h4>Transaction</h4>
                    <p>Once the negotiation completes between the buyers and sellers, a buyer-seller agreement gets generated for e-signing.</p>
                    <h4>Buyer payment</h4>
                    <p>Buyer makes payment in his secured escrow (virtual account)</p>
                    <h4>Seller transfer</h4>
                    <p>Seller transfers the shares to the buyers demat account</p>
                    <h4>Trustee approves </h4>
                    <p>Trustee approves transaction closure </p>
                    <h4>Our facilitation fee</h4>
                    <p>Our facilitation fee deducted and debited from the escrow account </p>
                    <h4>Trustee releases </h4>
                    <p>Trustee releases balance funds to Seller</p>


                    <p className="mt-50"><Link to="/" className="btn2">Signup Now</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></section>

        <section className="second-section">
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col-md-12">
                <h2 className="text-center sectiontitle"><strong>Explore potential fund oppurtunities</strong></h2>
              </div>
            </div>
            <TradesGridFour showModal={ this.showModal }/>
            
          </div>
        </div>
      </section>
      <section className="addsection">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="sectiontitle">Know more about an unlisted equity <br />before it goes public </h2>
              <p>Lorem Ipsum is simply dummy text. This is placeholder content. Lorem Ipsum is<br /> simply dummy text. Lorem Ipsum is simply dummy text. </p>
              <p><Link to="#" className="btn2">how it works?</Link></p>
            </div>
          </div>
        </div>
      </section>


      <section className="third-sectionnew">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center sectiontitle"><strong>Why Invest in <br />Unlisted Shares</strong></h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-1" />
            <div className="col-md-2 text-center">
              <div className="th-single">
              <img src={process.env.PUBLIC_URL + "./assets/images/highvalue.png"} alt="icon_share_invest"/>
                <p>Several unlisted companies including start-up companies have unique and high growth business models</p>
              </div>
            </div>
            <div className="col-md-2 text-center">
              <div className="th-single">
                <img src={process.env.PUBLIC_URL + "./assets/images/peace.png"} alt="icon_share_invest"/>
                <p>Investment in unlisted shares offers huge potential of returns wherein substantial value unlocking usually happens when they go for IPOs</p>
              </div>
            </div>
            <div className="col-md-2 text-center">
              <div className="th-single">
              <img src={process.env.PUBLIC_URL + "./assets/images/growth.png"} alt="icon_share_invest" />
                <p>Absence of leverage makes these investments in unlisted shares as stable investment opportunities</p>
              </div>
            </div>
            <div className="col-md-2 text-center">
              <div className="th-single">
              <img src={process.env.PUBLIC_URL + "./assets/images/diver.png"} alt="icon_share_invest"/>
                <p>Unexplored growth potential exist in several unlisted securities which are available at substantial discount to their intrinsic value as also to their listed peers</p>
              </div>
            </div>
            <div className="col-md-2 text-center">
              <div className="th-single">
              <img src={process.env.PUBLIC_URL + "./assets/images/diver.png"} alt="icon_share_invest"/>
                <p>These offer enormous wealth creation opportunity to informed investors having discretionary corpus</p>
              </div>
            </div>
          </div>
        </div>
      </section>


        <section className="forth-section">
        <div className="container">
          <h2 className="text-center sectiontitle">Why Unlisted Shares?</h2>
          <div className="row">
            <div className="col-md-offset-1 col-md-10">
              <div className="space">
                <div className="row">
                  <div className="col-md-1  pr0">
                    <img src={process.env.PUBLIC_URL + "./assets/images/2.png"} alt="unlisted_shares"/>
                  </div>
                  <div className="col-md-10 pl0">
                    <p className="listed">Huge return potential</p>
                    <p>Investment in unlisted shares offers huge return potential, however value unlocking usually happens when they go for IPOs.</p>
                  </div>
                  <div className="col-md-1" />
                </div>
              </div>
              <div className="space">
                <div className="row">
                  <div className="col-md-1 pr0">
                  <img src={process.env.PUBLIC_URL + "./assets/images/4.png"} alt="unlisted_shares"/>
                  </div>
                  <div className="col-md-10 pl0">
                    <p className="listed">Value of shares increases</p>
                    <p>Value of shares also usually increases when a startup goes for a fresh round of funding.</p>
                  </div>
                  <div className="col-md-1" />
                </div>
              </div>
              <div className="space">
                <div className="row">
                
                  <div className="col-md-1 pr0">
                  <img src={process.env.PUBLIC_URL + "./assets/images/1.png"} alt="unlisted_shares"/>
                  </div>
                  <div className="col-md-10 pl0">
                    <p className="listed">Stable investment opportunity</p>
                    <p>Absence of leverage makes it a stable investment opportunity driven usually by business rationale.</p>
                  </div>
                  <div className="col-md-1" />
                </div>
              </div>
              <p className="mt-50 text-center"><Link to="#" className="btn2">Learn More</Link></p>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial-section" id="carousel">    				
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <h2 className="text-center text-blue text-bold sectiontitle">What people say</h2>
              <div className="carousel slide" id="fade-quote-carousel" data-ride="carousel" data-interval={3000}>
                {/* Carousel indicators */}
                <ol className="carousel-indicators hometestimonial">
                  <li className="active" data-target="#fade-quote-carousel" data-slide-to={1}>
                    <img src={process.env.PUBLIC_URL + "./assets/images/c3.png"} alt=""/>
                  </li>
                  <li data-target="#fade-quote-carousel" data-slide-to={2}>
                  <img src={process.env.PUBLIC_URL + "./assets/images/c3.png"} alt=""/>
                  </li>
                  <li data-target="#fade-quote-carousel" data-slide-to={3} >
                  <img src={process.env.PUBLIC_URL + "./assets/images/c3.png"} alt=""/>
                  </li>
                </ol>
                {/* Carousel items */}
                <div className="carousel-inner">
                  <div className="item active">
                    <blockquote>
                    Unlisted Assets provided me with support to sell my converted ESOPS toa list of buyers. I am very happy with their prompt, transparent and efficient process.
                    </blockquote>	
                    <h4 className="text-center">Ravi Varma Datla, Hyderabad</h4>
                  </div>
                  <div className="item">
                    <blockquote>
                    Unlisted Assets provided me with the investment opportunities toparticipate in the high growth tech companies in India. I have been dealing with the team for over 3years now and am highly satisfied with the experience.
                    </blockquote>	
                    <h4 className="text-center">Dr Deepankar Sharma-USA</h4>
                  </div>
                  <div className="item">
                    <blockquote>
                    I was able to invest in the shares of Paytm, NSE and Nazara through UnlistedAssets. They provide me with frequent opportunities to create wealth through pre-IPO share investmentideas. Highly recommend their professional and transparent services.
                    </blockquote>	
                    <h4 className="text-center">Manu Handa, Canada</h4>
                  </div> 
                </div>
              </div>
            </div>							
          </div>
        </div>
      </section>
		</>
	);
}
}

export default HomeTwo;