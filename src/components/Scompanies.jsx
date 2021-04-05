import React from "react";

import InnerBanner from './common/InnerBanner'
const Scompanies = () => {
	const bannerImage = "company-banner.png";
	const headingtxt = "For Companies";
	const subHeadingtxt = "We offer tailor made programs to match your need to do secondary placement and primary placement of your shares and ESOPS, provide liquidity to investors/Employees, provide professional consultancy and insights into various unlisted shares. We work hand in hand to provide a customized solution to ensure that all your needs are taken care of.";
	return(
		<>
			<InnerBanner headingtxt={headingtxt} subHeadingtxt={subHeadingtxt} bannerImage={bannerImage}/>
				<section class="solution2">
		<div class="container">
			<div class="row">
				<div class="col-md-1"></div>
				<div class="col-md-10">
					<div class="private">
					  <div class="row">
						<div class="col-md-3">
							<img src={`${process.env.PUBLIC_URL}/assets/images/company1.png`} class="img-responsive center-block" alt="company1"/>
						</div>
						 <div className="col-md-9 d-flex align-item minHeight214">
							<div class="get">
					           <h4 class="stay">Stay Private Longer</h4>
					           <p>Raise funding for all your expansion needs without getting into public markets to help you float as unlisted companies for longer tenure</p>
							   <p>Raise venture debt funding as and when required to bridge finance or to do hybrid financing to support your growth plans </p>
					        </div>
					    </div>
					</div>
				  </div>
				  <div class="private">
					<div class="row">
						 <div className="col-md-9 d-flex align-item minHeight214">
							<div class="get">
					           <h4 class="stay">Primary placement of unlisted shares </h4>
					           <p>We provide you with direct access to investors and funds based out of India and across the world. We can help you, through our associate, in creating investor decks and closing the investment rounds through our comprehensive professional solutions.</p>
					        </div>
					    </div>
					    <div class="col-md-3">
							<img src={`${process.env.PUBLIC_URL}/assets/images/company2.png`} class="img-responsive center-block" alt="company2"/>
						</div>
					</div>
				</div>
				<div class="private">
					<div class="row">
						<div class="col-md-3">
							<img src={`${process.env.PUBLIC_URL}/assets/images/company3.png`} class="img-responsive center-block" alt="company3" />
						</div>
						 <div className="col-md-9 d-flex align-item minHeight214">
							<div class="get">
					           <h4 class="stay">Liquidity to Investors </h4>
					           <p>We assist through our platform in giving exits to angel investors, individual investors and institutional investors in unlisted companies including start-up companies. </p>
							   <p>We also assist in consolidation of cap tables of various start-up companies </p>
					        </div>
					    </div>
					</div>
				</div>
				<div class="private">
					<div class="row">
						 <div className="col-md-9 d-flex align-item minHeight214">
							<div class="get">
					           <h4 class="stay">Uncover price trends and analytics</h4>
					           <p>We assist, through our platform, in implied price discovery of unlisted shares by way of sharing relevant information to enable the decision making at end of investors. We intend to cover all news, updates related to financing or otherwise, through a single window along with our data analytics to help you assess the price trends.</p>
					        </div>
					    </div>
					    <div class="col-md-3">
							<img src={`${process.env.PUBLIC_URL}/assets/images/company4.png`} class="img-responsive center-block" alt="company4"/>
						</div>
					</div>
				</div>



				<div class="private">
					  <div class="row">
						<div class="col-md-3">
							<img src={`${process.env.PUBLIC_URL}/assets/images/sr-5.jpg`} class="img-responsive center-block" alt="company1"/>
						</div>
						 <div className="col-md-9 d-flex align-item minHeight214">
							<div class="get">
					           <h4 class="stay">For Institutions, UHNI’s and Family Offices</h4>
					           <p>We work with all institution players, Family Offices to help them get the unlisted stocks, through our platform, which are otherwise difficult to source from the market in large quantities. We have relations with institutions across the world and to help them in making investment in unlisted stocks by way of primary and secondary placement and also help them liquidate their investments in unlisted stocks through the platform or offline.</p>
					        </div>
					    </div>
					</div>
				  </div>
				  <div class="private">
					<div class="row">
						 <div className="col-md-9 d-flex align-item minHeight214">
							<div class="get">
					           <h4 class="stay">Get access to your target companies</h4>
					           <p>We work closely with the management of various Unlisted companies through our associate consulting arm. We help them access a pool of inventory of unlisted shares of employees, early investors, ex-co-founders in the unlisted space.</p>
                               <p>You can access our Bulk Deals window to view and execute high ticket transactions.</p>
					        </div>
					    </div>
					    <div class="col-md-3">
							<img src={`${process.env.PUBLIC_URL}/assets/images/sr-6.jpg`} class="img-responsive center-block" alt="company2"/>
						</div>
					</div>
				</div>

				<div class="private">
					  <div class="row">
						<div class="col-md-3">
							<img src={`${process.env.PUBLIC_URL}/assets/images/sr-7.jpg`} class="img-responsive center-block" alt="company1"/>
						</div>
						 <div className="col-md-9 d-flex align-item minHeight214">
							<div class="get">
					           <h4 class="stay">Stay informed on opportunities</h4>
					           <p>We can provide you premium services through our platform to get first-hand information on various opportunities in an unlisted space basis your investment criteria and ticket size.</p>
					        </div>
					    </div>
					</div>
				  </div>
				  <div class="private">
					<div class="row">
						 <div className="col-md-9 d-flex align-item minHeight214">
							<div class="get">
					           <h4 class="stay">Get professional services</h4>
					           <p>We can provide the relevant transaction support services including due diligence, valuations, documentation in relation to transaction in unlisted shares through our consulting arm. Our professional experience comes handy in providing you with end to end solutions.</p>
					        </div>
					    </div>
					    <div class="col-md-3">
							<img src={`${process.env.PUBLIC_URL}/assets/images/sr-8.jpg`} class="img-responsive center-block" alt="company2"/>
						</div>
					</div>
				</div>
    

              {/* <div className="mt-50">
				<h4 class="stay">For Institutions, UHNI’s and Family Offices</h4>
<p className="mb-30">We work with all institution players, Family Offices to help them get the unlisted stocks, through our platform, which are otherwise difficult to source from the market in large quantities. We have relations with institutions across the world and to help them in making investment in unlisted stocks by way of primary and secondary placement and also help them liquidate their investments in unlisted stocks through the platform or offline. </p>
 
<h4 class="stay">Get access to your target companies</h4>
<p>We work closely with the management of various Unlisted companies through our associate consulting arm. We help them access a pool of inventory of unlisted shares of employees, early investors, ex-co-founders in the unlisted space.</p>
<p className="mb-30">You can access our Bulk Deals window to view and execute high ticket transactions.</p>
 
<h4 class="stay">Stay informed on opportunities</h4>
<p className="mb-30">We can provide you premium services through our platform to get first-hand information on various opportunities in an unlisted space basis your investment criteria and ticket size.</p>
 
<h4 class="stay">Get professional services</h4>
<p>We can provide the relevant transaction support services including due diligence, valuations, documentation in relation to transaction in unlisted shares through our consulting arm. Our professional experience comes handy in providing you with end to end solutions. </p>
</div> */}

				</div>
				<div class="col-md-2"></div>
			</div>
		</div>
	</section>
		</>
	);
}

export default Scompanies;