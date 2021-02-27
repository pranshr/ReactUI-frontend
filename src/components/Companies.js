import React, {useState} from "react";
import { Link } from "react-router-dom";
import TradesGridThree from './company-trade/TradesGridThree'
const Companies = () => {
    const [panelShow1, setPanel1] = useState(false);
    const [panelShow2, setPanel2] = useState(false);
    const [panelShow3, setPanel3] = useState(false);
    const [panelShow4, setPanel4] = useState(false);
    const showPanel1 = () => setPanel1(!panelShow1);
    const showPanel2 = () => setPanel2(!panelShow2);
    const showPanel3 = () => setPanel3(!panelShow3);
    const showPanel4 = () => setPanel4(!panelShow4);

	return(
		<>
           <section className="company-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sun">
                <div className="moon">
                  <p>Filter<span className="pull-right"><Link to="#">Clear All</Link></span></p>
                </div>
                <div className="earth">
                  <button className={ panelShow1 ? "accor active1" : "accor" } onClick={showPanel1}>Sector</button>
                  <div className={ panelShow1 ? "panel1 show-panel1" : "panel1" } >
                    <form>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Education</span>s</p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Pharmacy</span></p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>IT Service</span></p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Agriculture and Farming</span></p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Biotechnology</span></p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Consumer Goods</span></p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Clothing</span></p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Energy</span></p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Healthcare</span></p>
                      </div>
                    </form>
                  </div>
                  <button className={ panelShow2 ? "accor active1" : "accor" } onClick={showPanel2}>Stage of Company</button>
                  <div className={ panelShow2 ? "panel1 show-panel1" : "panel1" }>
                    <form>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Education</span>s</p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Pharmacy</span></p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>IT Service</span></p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Agriculture and Farming</span></p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Biotechnology</span></p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Consumer Goods</span></p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Clothing</span></p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Energy</span></p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Healthcare</span></p>
                      </div>
                    </form>
                  </div>
                  <button className={ panelShow3 ? "accor active1" : "accor" } onClick={showPanel3}>Series of Funding</button>
                  <div className={ panelShow3 ? "panel1 show-panel1" : "panel1" }>
                    <form>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Education</span>s</p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Pharmacy</span></p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>IT Service</span></p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Agriculture and Farming</span></p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Biotechnology</span></p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Consumer Goods</span></p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Clothing</span></p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Energy</span></p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Healthcare</span></p>
                      </div>
                    </form>
                  </div>
                  <button className={ panelShow4 ? "accor active1" : "accor" } onClick={showPanel4}>Valuation</button>
                  <div className={ panelShow4 ? "panel1 show-panel1" : "panel1" }>
                    <form>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Education</span>s</p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Pharmacy</span></p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>IT Service</span></p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Agriculture and Farming</span></p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Biotechnology</span></p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Consumer Goods</span></p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Clothing</span></p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Energy</span></p>
                      </div>
                      <div className="form-group">
                        <p><input type="checkbox" name /><span>Healthcare</span></p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              {/* <form>
                <div className>
                  <div className="form-group">
                    <a href="#" className="icon"><i className="fa fa-search" /></a><input type="text" placeholder="Search here..." name className="form-control control" />
                  </div>
                </div>
              </form> */}
              <div className="galaxy">
               
                  <TradesGridThree/>
                </div>
              </div>
            </div>
          </div>
       
      </section>
		</>
	);
}

export default Companies;