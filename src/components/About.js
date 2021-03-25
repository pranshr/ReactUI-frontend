import React from "react";
import InnerBanner from './common/InnerBanner'
const About = () => {
  const bannerImage = "about.png";
  const headingtxt = "About Us";
  // const subHeadingtxt = "Unlisted Tech Private Limited is a Fintech company which is empowering secondary equity transactions for various stakeholders of unlisted companies including Start-ups, Delisted companies and Pre IPO companies to Buy/Sell shares in a transparent and safe escrow environment.";
  const subHeadingtxt = "Creating a facilitation platform for buying and selling of unlisted shares in an automated, secure,transparent and time efficient process";
	return(
		<>
				
        <InnerBanner headingtxt={headingtxt} subHeadingtxt={subHeadingtxt} bannerImage={bannerImage}/>
        <section className="about2">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-30">
                {/* <h3 className="heading pl-67 mt-70">About Unlisted Assets</h3> */}
                
                <p>Unlisted Tech Private Limited is offering a tech based platform which is empowering variousstakeholders of unlisted companies (including Startups, Delisted companies and Pre IPO companies) toBuy/Sell shares in a transparent and safe escrow environment.</p>
                <p>We, through our automated platform, help retail and institutional investors  to transact in equity sharesor ESOP of various unlisted companies through a time efficient and secured process and enabling pricediscovery as well. We offer an end to end automated process for transfer of shares or ESOP In safe andsecured manner through an escrow mechanism provided through our Banking partner and by way oftransaction approved by SEBI registered Trustee.</p>
                <p>We also help startups and pre-IPO companies raise primary capital from HNI investors, Family Officesand Institutional Funds, both domestic and international  through our associate entity.</p>
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
                        <p>An experienced financial services professional with 20 years of experience across Risk, CreditPolicy, Operations, IT, Process Excellence and Audit with global leading financial servicesorganisations & BPO. Exposure across retail financial products - Mortgages, Business Loans,Personal Loans, Sales Finance and Mortgage Guarantee business</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-40">
                  <div className="row">
                    <div className="col-md-3">
                      <img src={process.env.PUBLIC_URL + "./assets/images/AnkushGorav.png"} className="img-responsive center-block"  alt="team4"/>
                    </div>
                    <div className="col-md-9">
                      <div className="found">
                        <h4><strong>Ankush Gorav </strong>(Founding Team)</h4>
                        <p>A seasoned technology professional with 14 years of experience in architecting and managingdevelopment and delivery of enterprise level e-commerce applications, Revenue ManagementSystems and Supply Chain Management systems for fortune 500 customers</p>
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