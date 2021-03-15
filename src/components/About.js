import React from "react";
const About = () => {
	return(
		<>
				
  <section className="about-section banner">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h1>About Us</h1>
                <p>Unlisted Tech Private Limited is a Fintech company which is empowering secondary equity transactions for various stakeholders of unlisted companies including Start-ups, Delisted companies and Pre IPO companies to Buy/Sell shares in a transparent and safe escrow environment.</p>
              </div>
              <div className="col-md-5"><img src={process.env.PUBLIC_URL + "./assets/images/about.png"} className="img-responsive" alt="about"/></div>
            </div>
          </div>
        </section>
        <section className="about2">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3 className="heading pl-67 mt-70">About Unlisted Assets</h3>
                <p><strong>Unlisted Tech Private Limited</strong> is a Fintech company which is empowering secondary equity shareholders of Startups, Delisted companies and Pre IPO companies to Buy/Sell shares in a transparent and safe escrow environment.</p>
                <p>We help retail and institutions transact in unlisted equity shares.</p>
                <p>We also help startups and pre IPO companies raise primary capital from HNI investors, Family Offices and Funds (India and International)</p>
              </div>
              <div className="col-md-6"><img src={process.env.PUBLIC_URL + "./assets/images/about1.png"} className="img-responsive center-block" alt="about1"/></div>
            </div>
          </div>
        </section>
        <section className="about3">
          <div className="container">
            <div className="row">
              <h2 className="text-center heading">Our Team</h2>
              <div className="col-md-1" />
              <div className="col-md-10">
                <div className="mt-40">
                  <div className="row">
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/Divam.png"} className="img-responsive center-block" alt="team1"/>
                    </div>
                    <div className="col-md-9">
                      <div className="found">
                        <h4><strong>Divam Sharma </strong>(Founding Team)</h4>
                        <p>Divam is a Member of The Institute of Chartered Accountants of India, MBA (PGDM Finance) from Indian School of Business Hyderabad, Masters in Business Finance (ICAI) and B Com (Honors) from Delhi University. He has worked for over 6 years as Financial Analyst with Banks including Kotak Mahindra Bank, Citibank, and IMGC. He has over 13 years of experience of investment management in stock markets.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-40">
                  <div className="row">
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/Manish-Khanna.png"} className="img-responsive center-block"  alt="team2"/>
                    </div>
                    <div className="col-md-9">
                      <div className="found">
                        <h4><strong>Manish Khanna</strong>(Founding Team)</h4>
                        <p>Mr. Manish has more than 15 years of work experience in transaction advisory including valuation, transaction structuring and debt and equity fund raising. He is currently Partner at Shinewing India and has been working majorly in services sector in the domain of valuation and corporate finance. Prior to joining Shinewing, he has worked with Ernst & Young for around 3  years in their Transaction Advisory practice and with PwC in their Valuation advisory practice. He is a CA (India), CS (India) & LLB (India) qualified professional. Manish has been actively participating at various professional forums and Committees on emerging areas of valuation and M&A. Manish is the visiting faculty at ICAI, ICSI and PHD Chamber of Commerce for Valuation and Corporate Restructuring Courses.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-40">
                  <div className="row">
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/Shubham.png"} className="img-responsive center-block"  alt="team3"/>
                    </div>
                    <div className="col-md-9">
                      <div className="found">
                        <h4><strong>Shubham Sharma </strong>(Founding Team)</h4>
                        <p>Shubham is a UX designer and an  entrereneure. He started his career as a car designer for various german car manufacturers. He is a lead desiger for various startups like coltello.store, Greenportfolio, Unlisted Assets, and also for Chatbot autmation company LivePerson. He has completed his Masters in Automotive Desing from Turin, Italy and he is currently working as a lead designer in Frankfurt, Germany.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-40">
                  <div className="row">
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/Sunil-Jain.png"} className="img-responsive center-block"  alt="team4"/>
                    </div>
                    <div className="col-md-9">
                      <div className="found">
                        <h4><strong>Sunil Jain </strong>(Founding Team)</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="mt-40">
                  <div className="row">
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/team5.png"} className="img-responsive center-block"  alt="team5"/>
                    </div>
                    <div className="col-md-9">
                      <div className="found">
                        <h4><strong>Anirudh</strong>(Founding Team)</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="col-md-1" />
            </div>
          </div>
        </section>
        <section className="about-last">
          <div className="container">
            <div className="row">
              <div className="col-md-1" />
              <div className="col-md-10">
                <div className="row">
                  <div className="col-md-5">
                    <img src={process.env.PUBLIC_URL + "./assets/images/about2.png"} className="img-responsive lastimg" alt="about2"/>
                  </div>
                  <div className="col-md-6">
                    <h3 className="text-bold heading">Join Our Team</h3>
                    <p>At UnlistedAssets.com, we provide opportunities for growth, providing endless possibilities, lifetime experience, flexibility with a great environment. </p>
                    <p>Reach out to explore the endless opportunities in this interesting and growing space. <a href="mailto:info@unlistedassets.com" className="text-bold">info@unlistedassets.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
		</>
	);
}

export default About;