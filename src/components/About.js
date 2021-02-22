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
                <p>We facilitate retail and institutions to transact in unlisted equity shares through our platform.</p>
                <p>We also help start-ups and pre IPO companies in raising primary capital from HNI investors, Family Offices and Funds, both within India and globally. </p>
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
                      <img src={process.env.PUBLIC_URL + "./assets/images/team1.png"} className="img-responsive center-block" alt="team1"/>
                    </div>
                    <div className="col-md-9">
                      <div className="found">
                        <h4><strong>Divam Sharma </strong>(Founding Team)</h4>
                        <p>Divam is a Member of The Institute of Chartered Accountants of India, MBA (PGDM Finance) from Indian School of Business Hyderabad, Masters in Business Finance (ICAI) and B Com (Honors) from Delhi University. He has worked for over 6 years as Financial Analyst with Banks including Kotak Mahindra Bank, Citibank, and IMGC. He has over 15 years of experience of investment management. He is also a Co-founder at Green Portfolio.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-40">
                  <div className="row">
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/team2.png"} className="img-responsive center-block"  alt="team2"/>
                    </div>
                    <div className="col-md-9">
                      <div className="found">
                        <h4><strong>Manish Khanna</strong>(Founding Team)</h4>
                        <p>Manish is a CA, CS and has more than 15 years of work experience in Corporate Finance and Valuations. He had worked with Ernst &amp; Young for around 3 years in their Transaction Advisory practice. Prior to EY, he was working with Financial Advisory Services Team of PricewaterhouseCoopers (PwC) and with DE Shaw &amp; Co, a Hedge Fund. He is also a partner of Shinewing India, visiting faculty of ICAI. Manish heads the Business Development vertical of the company.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-40">
                  <div className="row">
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/team3.png"} className="img-responsive center-block"  alt="team3"/>
                    </div>
                    <div className="col-md-9">
                      <div className="found">
                        <h4><strong>Shubham Sharma </strong>(Founding Team)</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-40">
                  <div className="row">
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/team4.png"} className="img-responsive center-block"  alt="team4"/>
                    </div>
                    <div className="col-md-9">
                      <div className="found">
                        <h4><strong>Sunil Jain </strong>(Founding Team)</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-40">
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
                </div>
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
                    <p>At unlistedassets.com, we provide opportunities for growth, providing endless possibilities, lifetime experience, flexibility with a great environment.</p>
                    <p>Reachout to explore the endless opportunities in this interesting and growing space. <a href="mailto:info@unlistedassets.com" className="text-bold">info@unlistedassets.com</a></p>
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