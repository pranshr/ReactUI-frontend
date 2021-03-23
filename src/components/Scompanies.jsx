import React from "react";

import InnerBanner from './common/InnerBanner'
const Scompanies = () => {
	const bannerImage = "company-banner.png";
	const headingtxt = "For Companies";
	const subHeadingtxt = "We tailor unique programs to match your need to raise capital, provide liquidity to investors, provide professional consultancy and insights. We work hand in hand to ensure that we provide a customized solution to ensure your needs are taken care of.";
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
						<div class="col-md-9">
							<div class="bank">
					           <h4 class="stay">Stay Private Longer</h4>
					           <p>Raise private financing when needed and avoid expectations shareholders.</p>
					        </div>
					    </div>
					</div>
				  </div>
				  <div class="private">
					<div class="row">
						<div class="col-md-9">
							<div class="bank1">
					           <h4 class="stay">Lock in primary capital</h4>
					           <p>We provide you with direct access to investors and funds based out of India and across the world. We help you with creating investor decks and closing the investment rounds through our comprehensive professional solutions.</p>
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
						<div class="col-md-9">
							<div class="bank2">
					           <h4 class="stay">Provide executive and investor liquidity</h4>
					           <p>We help you get the secondary stock inventory placed to institutional as well as HNI investors to ensure that your shareholders immediate liquidity needs are taken care of.</p>
					        </div>
					    </div>
					</div>
				</div>
				<div class="private">
					<div class="row">
						<div class="col-md-9">
							<div class="bank3">
					           <h4 class="stay">Uncover price trends and analytics</h4>
					           <p>Get access to our insights on the private market, your sector information and strategy. Create lasting value through innovative and rewarding culture for all the stakeholders</p>
					        </div>
					    </div>
					    <div class="col-md-3">
							<img src={`${process.env.PUBLIC_URL}/assets/images/company4.png`} class="img-responsive center-block" alt="company4"/>
						</div>
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

export default Scompanies;