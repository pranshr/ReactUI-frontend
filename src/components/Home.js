//import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Link } from "react-router-dom";

//import axios from 'axios';
import TradesGridFour from './company-trade/TradesGridFour';

class Home extends Component {
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
  document.title ="Buy Sell Unlisted Shares | Unlisted Shares Trading | Shares List"; 
document.getElementsByTagName("META")[3].content="Buy and Sell Unlisted Shares in India. Unlisted Shares List and Unlisted Shares Dealer/Broker. Sell ESOP Shares, Buy Pre-IPO shares stocks at best price.";
	return(
		<>
       <section className="home-banner">
          <div className="container">
            <div className="row d-flex align-item">
                <div className="col-md-7 col-sm-12">
                <div className="banner-text">
                <h3>A smartest way to</h3>
                <h1>Buy or Sell Unlisted Shares / ESOP's,</h1>
                <p>India's first platform providing you a transparent buyer-seller negotiation, a safe bank escrow-based transaction and an automated transaction flow of buying / selling Unlisted Shares and ESOP's. </p>
                {/* <Link class="home-banner-btn" to="/contact">Proceed</Link> */}
                </div>
                </div>
                <div className="col-md-5 col-sm-12">
                <div className="slider-image">
                <img src={process.env.PUBLIC_URL + "./assets/images/home-slider.jpg"} className="home-banner-img" alt="bannerimage" />
                </div>
                </div>
            </div>
            </div>
      </section>
      <section className="newsection1">
        <div className="container">
      <div className="process_title">
        <h2 className="text-center sectiontitle"><strong>Start investment in few easy steps</strong></h2>
        <p className="hline" />
      </div>
     
      <div className="my-row">
                <div className="col-one text-right">
                <h3 className="text-align-right">Our Offline Process</h3>
                    
                </div>
                <div className="width120">
                   
                </div>
                <div className="col-three text-left">
                <h3 className="text-align-left">Our Online Process</h3>
                </div>
              </div>
              <div className="my-row">
                <div className="col-one text-right">
                     <h4>Explore companies</h4>
                    <p> Choose from the available companies and fill out our Buy/Sell form. Our team suggests the best available deals for you.</p>
                </div>
                <div className="col-two text-center">
                    <span>01</span>
                </div>
                <div className="col-three text-left">
                <h4>Join our platform</h4>
                    <p>Signup to unlistedassets.com and fill out the necessary details. KYC and Bank details are verified for one time. (Platform Launching soon)</p>
                </div>
              </div>
              <div className="my-row">
                <div className="col-one text-right">
                     <h4>Sign Agreement</h4>
                    <p>Both buyer and seller sign agreements to avoid any malpractices.</p>
                </div>
                <div className="col-two text-center">
                    <span>02</span>
                </div>
                <div className="col-three text-left">
                <h4>List shares to Marketplace</h4>
                    <p> List your shares for sale on our marketplace/ Bid on shares you want to buy.</p>
                </div>
              </div>
              <div className="my-row">
                <div className="col-one text-right">
                     <h4>Secure money in Escrow</h4>
                    <p> Payment of buyer is secured in an escrow bank account of a SEBI regd. Trustee.</p>
                </div>
                <div className="col-two text-center">
                    <span>03</span>
                </div>
                <div className="col-three text-left">
                <h4>Negotiate prices for verified Shares/ESOP’s</h4>
                    <p>Explore the best available listings in the market and negotiate prices directly with buyer/seller.</p>
                </div>
              </div>
              <div className="my-row">
                <div className="col-one text-right">
                     <h4>Transfer of shares</h4>
                    <p>Seller transfers shares to the buyer's Demat account.</p>
                </div>
                <div className="col-two text-center">
                    <span>04</span>
                </div>
                <div className="col-three text-left">
                <h4>Escrow Transfer of payment</h4>
                    <p>Payment of buyer is secured in an escrow bank account of a SEBI regd. Trustee. Similarly, the seller transfers shares to the buyer’s Demat account.</p>
                </div>
              </div>
              <div className="my-row">
                <div className="col-one text-right">
                     <h4>Transaction is complete</h4>
                    <p> The trustee approves the transaction, our fee is debited and payment is credited to the seller.</p>
                    
                </div>
                <div className="col-two text-center">
                    <span>05</span>
                </div>
                <div className="col-three text-left">
                <h4>Transaction is complete</h4>
                    <p>The trustee approves the transaction, our fee is debited and payment is credited to the seller.</p>
                </div>
              </div>
              <div className="my-row">
                <div className="col-one text-right">
                <Link to="/contact" className="btn2">Consult Us</Link>
                    
                </div>
                <div className="width120">
                   
                </div>
                <div className="col-three text-left">
                <Link to="/platform" className="btn2">Signup Now</Link>
                </div>
              </div>



        </div></section>

        <section className="second-section">
        <div className="container">
          <div className="row">
         
              <div className="col-md-12">
                <h2 className="text-center sectiontitle"><strong>Explore potential fund opportunities</strong></h2>
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
              {/* <p>Lorem Ipsum is simply dummy text. This is placeholder content. Lorem Ipsum is<br /> simply dummy text. Lorem Ipsum is simply dummy text. </p> */}
              <br/>
              <p><Link to="/platform" className="btn2">how it works?</Link></p>
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
              <img src={process.env.PUBLIC_URL + "./assets/images/wealth.png"} alt="icon_share_invest"/>
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
              <p className="mt-50 text-center"><Link to="/why-us" className="btn2">Why UnlistedAssets.com</Link></p>
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
                 {/* Indicators */}
      <ol className="carousel-indicators">
        <li data-target="#fade-quote-carousel" data-slide-to={0} className="active">
        <img src={process.env.PUBLIC_URL + "./assets/images/RaviVarmaDatla.jpeg"} alt=""/>
        </li>
        <li data-target="#fade-quote-carousel" data-slide-to={1}>
        <img src={process.env.PUBLIC_URL + "./assets/images/DeepankerSharma.jpeg"} alt=""/>
        </li>
        <li data-target="#fade-quote-carousel" data-slide-to={2}>
        <img src={process.env.PUBLIC_URL + "./assets/images/ManuHanda.jpg"} alt=""/>
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

export default Home;