import React from "react";



const Contact = () => {
	return(
		<>
                   <section className="main-contact banner">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h1>Want to know more!!</h1>
                <p>Worry not drop us a email or send a text message<br />
                  to our team will reach out to you shortly and<br /> help you understand the process</p>
              </div>
              <div className="col-md-5">
                <img src={process.env.PUBLIC_URL + "./assets/images/contact.png"} className="img-responsive center-block" alt="contact" />
              </div>
            </div>
          </div>
        </section>
        <section className="contact-section1">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="talk">
                  <h3>Let's talk!</h3>
                  <p classname="con" />
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <p>Name</p>
                        <div className="form-group">
                          <input type="text" className="form-control" name />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <p>Email</p>
                        <div className="form-group">
                          <input type="email" className="form-control" name />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <p>Message</p>
                        <div className="form-group">
                          <textarea className="form-control" defaultValue={""} />
                        </div>
                      </div>
                    </div>
                    <button className="button1">Submit</button>
                  </form>
                </div>
              </div>
              <div className="col-md-5">
                <div className="call">
                  <img src={process.env.PUBLIC_URL + "./assets/images/phone.png"} alt="phone"/>
                  <p>Call Us</p>
                  <p>+91 254 168 254 168</p>
                  <img src={process.env.PUBLIC_URL + "./assets/images/email.png"} className="mt-50" alt="email"/>
                  <p>Main Us</p>
                  <p>hello@unlistedassets.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>

		</>
	);
}

export default Contact;