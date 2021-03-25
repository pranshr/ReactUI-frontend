import React from "react";
import { Link } from "react-router-dom";


const Faq = () => {
	return(
		<>

	       <section className="faq-section">
    <div class="container">




      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <h1 class="text-center">Hi! How can we help you?</h1>
          <form>
            <div class="list">
            <div class="form-group">
             <Link to="#" className="icon"><i class="fa fa-search"></i></Link><input type="text"placeholder="Search here..." name="" class="form-control control" />
             </div>
          </div>
          </form>
          <div className="key">
          <button className="accordion">I need to list my shares (holding) for sale. How can I do that</button>
                     <div className="panel">
                         <p>You can list your shares using the following simple steps:</p>
                         <p>-Login to UnlistedAssets.com</p>
                         <p>-On your “Holdings” page, click on “Add” button</p>
                         <p>-Fill the listing form. </p>
                         <p>Upload the proof of ownership (screenshot/statement of your Demat account substantiation ownership with your account details)</p>
                         <p>-Submit, </p>
                         <p>our team will then verify your listing and make it live on the Inventory page</p>
                     </div>

                    <button className="accordion">What is Transaction (Trade) Ready Steps?</button>
                    <div className="panel">
                        <p>We need to get you ready to be able to transact using the escrow services. As per AML and Bank escrow guidelines, we need to get your personal/company details and verify your KYC and Bank account details before we execute transaction on the platform. It’s a simple and quick process to verify your account and make you ready to transact on unlistedassets.com</p>
                    </div>

                    <button className="accordion">What is Inventory (Listings)?</button>
                     <div className="panel">
                         <p>You can list your shares on unlistedassets.com. Once we verify your ownership and based on your consent, we list your shares for buyers to explore and negotiate with you to buy your shares. There is inventory tradable companies available on unlistedassets.com for you to explore</p>
                     </div>
                     <button className="accordion">How does the negotiation happen between Buyer/Seller?</button>
                     <div className="panel">
                         <p>The buyers can click and select a stock from available inventory and initiate the negotiation with the sellers. The negotiation happens through a transparent and secure window.</p>
                     </div>
                     <button className="accordion">What happens after Buyer/Seller bid matches?</button>
                     <div className="panel">
                         <p>When buyer and seller bid matches, the transaction is confirmed and the Deal ID gets generated. We then move the transaction to our safe and secure escrow for closing the deal.</p>
                     </div>
                     <button className="accordion">I’ve submitted my bids. What are the next steps?</button>
                     <div className="panel">
                         <p>We will intimate your bids to the seller. Please wait for the seller to respond to your bid.</p>
                     </div>
                     <button className="accordion">How long will it be until I get liquidity?</button>
                     <div className="panel">
                         <p>It depends upon how active you are on unlistedassets.com. We have many investors looking to invest in the right companies and at the right price. You can use our services to get the highest possible price in a transparent and secure transaction.</p>
                     </div>
                     <button className="accordion">How do I price shares?</button>
                     <div className="panel">
                         <p>We believe in a safe and transparent process. UnlistedAssets.com relies on price discovery between Buyers and Sellers through a one to one negotiation. You can refer to the recent deal price of subject company or price of similar traded companies in unlisted space. You can also refer to factors like current market conditions, demand/supply factors, quantity to trade etc. </p>
                         <p>The end prices vary from company to company based on funding stage, time since last raise, performance, growth potential, etc. </p>
                         <p>Ultimately, demand and supply set the price for any unlisted shares at any particular point in time. </p>
                     </div>
                     <button className="accordion">What fees do you charge?</button>
                     <div className="panel">
                         <p>The fees we charge is to fund our rigorous review process, servicing, legal and compliance overhead, marginal transaction costs, and our efforts to grow and improve the efficiency of our technology backed interactive platform. </p>
                         <p>Our baseline fee is 3% on the transaction amount (each from Buyers and Sellers). On certain transactions, we may need to charge a higher amount to one side (and charge proportionately lesser amount to the other), due to structural or operational reasons.</p>
                         <p>We offer slab -based fee reduction plan on larger value transactions exceeding Rs. 10 Lakhs.</p>
                         <p>We always quote the net price after fee adjustment to facilitate easy analysis of transactions.</p>
                     </div>
                     <button className="accordion">What are the legal and compliance aspects of this?</button>
                     <div className="panel">
                         <p>We conduct all transactions through a Buyer/Seller Agreement. The transactions are also verified by a SEBI registered Trustee for accuracy and completeness in terms of verification of demat holding, KYC details, etc.</p>
                         <p>Please note that we do not provide legal advice or counsel to shareholders or investors. Therefore, they should evaluate the benefits and risks of this asset class and in underlying transactions.</p>
                     </div>
                     <button className="accordion">Will you help me to sell my shares?</button>
                     <div className="panel">
                         <p>Yes, we will help you find a buyer through our Premium Services- “Hire a Broker”. However, we do not guarantee a sale. Note that you are also free to sell these shares on your own. You can reach out through “Hire a Broker” services page if you are a retail investor or reach through “contact us “if you are an institutional investor.</p>
                     </div>
                     <button className="accordion">What investor tools, products and services are offered by UnlistedAssets.com?</button>
                     <div className="panel">
                         <p>UnlistedAssets.com provides following services free of any charges, without any obligation :</p>
                         <p>We provide publicly available data such as capitalization information, financing history, valuation information from venture financing rounds, and discovery tools for private and public technology companies.</p>
                         <p>We provide information, data, news, and analysis of public and private tech companies and their securities — if you want to know company valuations, how much they have raised or the latest news across a wide variety of publications, UnlistedAssets.com is the place to find it.</p>
                         <p>Our site allows investors to create, view, and track a listing of private company shares in their portfolio.</p>
                     </div>
                     <button className="accordion">I am located abroad (or my entity is located abroad); can I invest?</button>
                     <div className="panel">
                         <p>This depends on the regulations and compliance that are applicable to you. We will review applicable regulations in your home country. We will also complete all the required compliance checks (accreditation, background and ID checks for regulation, Anti-Money Laundering and SEBI regulations) etc. from the perspective of Indian Laws in order to determine whether you are eligible to invest. These are required for all customers, whether domestic or international.</p>
                     </div>
           <button className="accordion">Why should I consider this asset class?</button>
                     <div className="panel">
                         <p>Unlisted Assets help you get access to investments in companies which have features like high growth, pre-IPO, technology driven, disruptive, big investors owned and problem solving businesses.</p>
                         <p>These companies give you opportunities to generate high return on investments, however needless to say that the risk in these investments is high. </p>
                         <p>The private tech market is rapidly growing as a meaningful portion of the suite of asset classes available in today’s financial markets. Assuming you already have a sufficiently diversified portfolio across a range of safe and moderately safe securities, it is certainly worth considering for inclusion in a balanced portfolio.</p>
                     </div>
                     <button className="accordion">How Secure is my transaction?</button>
                     <div className="panel">
                         <p>We verify each and every user of Unlisted Assets.com. All transactions are backed by a legal agreement. A SEBI Registered Trustee verifies the transaction before closing it. The transaction is backed by a safe and secure escrow of funds with a nationalised Bank.</p>
                     </div>
                     <button className="accordion">I run a portfolio of venture investments already (or I'm an angel investor).Why is UnlistedAssets.com a good fit?</button>
                     <div className="panel">
                         <p>Given you are already familiar with private, rapidly growing companies, you may have unique advantage in judging private technology investments. </p>
                         <p>What is the total addressable market? Does it feel like they’ve reached product-market fit? Are they in a scalable business with strong unit economics? Familiarity with these topics may provide an advantage on our platform.</p>
                         <p>Many funds we’ve spoken and worked with think of us as part of a barbell approach. They allocate their capital primarily to early stage investments but are expanding into growth-stage investments to balance risk and reward.</p>
                     </div> 
                     <button className="accordion">What companies are available for investment on UnlistedAssets.com?</button>
                     <div className="panel">
                         <p>We provide investments in equity of nearly 100+ private companies on our platform, at ticket sizes ranging from INR 50,000 to 100 Crores – especially in large growth-stage companies through mix of online and offline advisory services. Just sign up on our platform, certify your accreditation, and you'll be able to access the full list.</p>
                     </div> 
                     <button className="accordion">Does UnlistedAssets.com work with brokers, fund managers, and other financial professionals?</button>
                     <div className="panel">
                         <p>Yes, UnlistedAssets.com’s services include bringing together buyers, sellers, investment advisors and brokers of private company securities — including funds that may buy and sell shares. If you are not the actual investor or shareholder, we ask that you contact us directly before entering any transaction information online.</p>
                     </div>
                     <button className="accordion">What are Unlisted Shares?</button>
                     <div className="panel">
                         <p>Shares which are not listed with any nationalised stock exchange (like NSE, BSE, etc.) are known as Unlisted Shares. Moreover, they are not traded publicly as they are not published on any stock exchange. Some of the famous unlisted companies in India are: PayTM, Fino PayTech, HDB Financial services, Swiggy and the list is exhaustive.</p>
                     </div>
                     <button className="accordion">Why Unlisted Shares?</button>
                     <div className="panel">
                         <p>Because of their lower base, many start-ups are growing much faster than the older generation companies and they continue to outperform the benchmark returns significantly. Much of this development, however, happens before the firm goes public with an IPO. Hence investing in the Growth / Pre IPO stage in these companies will provide the investor with early- mover advantage resulting in superior returns. </p>
                         <p>We fulfil the intrinsic need of the buyers for a safe platform that gives them access to high-quality shares at the best price, provide trade matching and even allows retail purchases. Moreover, it is very easy and economical to buy stocks in these start-ups & private companies just as venture capitalists do without spending huge money.</p>
                     </div>
                     <button className="accordion">How to choose Unlisted shares yourself?</button>
                     <div className="panel">
                         <p>The factors to be considered while choosing Unlisted Shares of a company are:</p>
                         <p>Probability of the share getting listed in the nearby future</p>
                         <p>Value of the stock</p>
                         <p>Competitors Analysis</p>
                         <p>However, we recommend all investors to consult their Financial advisors prior to decision making. </p>
                     </div>
                     <button className="accordion">What are the documents required for buying or bidding in a stock.?</button>
                     <div className="panel">
                         <p>The process is as easy as placing an order at any e-commerce platform by entering few details such as: </p>
                         <p>Photo</p>
                         <p>Aadhar Number</p>
                         <p>PAN Card copy</p>
                         <p>DEMAT Account details such as CMR Copy (Client master copy) And DIS (delivery instruction slip)</p>
                         <p>Bank account details</p>
                     </div>
                     <button className="accordion">What are the advantages of Unlisted Shares?</button>
                     <div className="panel">
                         <p>High value investments: Since the stocks are not quite liquid, they are mostly either undervalued or overvalued for long periods. So this situation offers opportunity to an investor to invest when the stock is undervalued thereby fetching n good returns on their investments.</p>
                         <p>Peace of mind: Unlike listed equity shares, unlisted equity stock prices are fairly stable and the investor need not worry about price volatility.</p>
                         <p>High growth investments: Most non-listed companies are smaller in scale and have yet to enter a point where they can go to the market to make use of funds for their capital needs. When the business is small, it often yields higher returns and when it gets listed on stock market, the investor generates faster unlocking of its intrinsic value.</p>
                         <p>Diversification of risk: Unlisted equity shares are unique asset class which provide some risk diversification for investors who are primarily invested in the listed stock markets.</p>
                     </div>
                     <button className="accordion">What is the downside of Unlisted Shares?</button>
                     <div className="panel">
                         <p>Liquidity is one of the key challenges for shareholders of unlisted / Pre IPO shares.</p>
                         <p>Lock-in period of 1 year from the date of IPO launch. According to SEBI’s guidelines, the Unlisted shares can be sold in the market only after one year of IPO. </p>
                         <p>Dividends: Start-up and early stage businesses very rarely pay dividends because the companies usually redeploy their profits in the growth of business to build the shareholder value over a period of time.  </p>
                         <p>Dilution: If start-up’s go for additional funding at a later stage, more shareholders will come on board, reducing your percentage of holding in the company. Another reason for dilution in a business would be due to the grant of options available to employees of the investee company or to other service providers closely linked to the business. It is therefore important to continue to reinvest in the business, increasing your percentage of shareholding.  </p>
                     </div>
                     <button className="accordion">What is the future of Unlisted Shares?</button>
                     <div className="panel">
                         <p>Unlisted stock market has been growing phenomenally and has substantially increased the wealth of investors of private companies in 2019</p>
                         <p>India’s IPO market has been buzzing for past few months of 2020. The primary market has a line-up of over 50 issues, with many still filing red herring prospectus with SEBI in preparation for market debut. HDB Financial, Studds, Kurlon and HDFC Securities are being tipped as potential candidates to hit the market soon.</p>
                         <p>Recent companies which have surged after listing include Bector Foods Happiest Minds, BVG India, Kannur Airport, Utkarsh Small Finance Bank, Digvijay Finlease, Suryoday Small Finance Bank, Deepak Industries, etc.</p>
                     </div>
                     <button className="accordion">What is the impact on Taxation?</button>
                     <div className="panel">
                         <p>LTCG on sale of unlisted shares is taxed at 20 per cent, while in case of short-term capital gains it is 30 per cent.</p>
                         <p>Income arising from transfer of unlisted shares would be taxed under the head ‘Capital Gain’, irrespective of period of holding.However, the government had introduced a TCS of 0.1% on sale of goods worth Rs 50 lakh and above with effect from 1st Oct 2019. This is virtually like STT (Securities Transactional Tax) for unlisted shares.
</p>
                     </div>





                 </div>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
  </section>





		</>
	);
}

export default Faq;