import React, {useState, useEffect} from "react";
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';

const Cdetail = () => {
	const { id } = useParams();

	const [body, setBody] = useState();
	

	useEffect(() => {
		async function getData(){
			const res = await axios.get(
				`https://jsonplaceholder.typicode.com/posts/${id}`
			);
			
			setBody(res.data.body);
		}
		getData();
	});


	return(
		<>
			
		  <section className="company-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 p0">
                <div className="top">
                  <ul className="company-ul">
                    <li><Link to="#"><img src={process.env.PUBLIC_URL + "./assets/images/home.png"} alt="home"/></Link></li>
                    <li><i className="fa fa-angle-double-right" /></li>
                    <li><Link to="#" className="com">Companies</Link></li>
                    <li><i className="fa fa-angle-double-right" /></li>
                    <li><Link to="#" className="hdfc">{body}</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-9">
                <div className="angle">
                  <p className="pc"><img src="{'../assets/images/sunphar.png'}" className="pc-img" alt="sunphar"/>title<span className="pull-right"><img src={process.env.PUBLIC_URL + "./assets/images/c1.png"} alt="c1" /><img src={process.env.PUBLIC_URL + "./assets/images/download.png"} alt="download" /></span></p>
                  <p className="mt-1">description</p>
                  <div className="range">
                    <div className="row">
                      <div className="col-md-3">
                        <p>Category Type</p>
                        <p> c_category </p>
                        <p>Company Name</p>
                        <p>title</p>
                      </div>
                      <div className="col-md-3">
                        <p>valuation</p>
                        <p>valuation</p>
                        <p>Funding</p>
                        <p>funding</p>
                      </div>
                      <div className="col-md-3">
                        <p>Company Code</p>
                        <p>c_id</p>
                      </div>
                      <div className="col-md-3">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="code">
                  <img src={process.env.PUBLIC_URL + "./assets/images/c2.png"} className="center-block" alt="c2" />
                  <p className="text-center mt-30">Directly reach out to place Buy/Sell orders</p>
                  <p className="reach text-center"><Link to="#">Trade</Link></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="rt">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <h3 className="want">Do you want to know more about Inventory?</h3>
                <p>Not to worry, Please login to our platform and you can access Inventory, Buy or Sell shares with negotiation and many more.</p>
                <p className="mt-30"><Link to="#" className="btn2">Go To Login</Link></p>
              </div>
              <div className="col-md-2" />
            </div>
          </div>
        </section>

		</>
	);
}

export default Cdetail;