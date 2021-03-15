import React, { Component } from 'react'
import FaqsData from './FaqsData';
import FaqList from './FaqList';
// import { Link } from "react-router-dom";
class Faq extends Component {
    render(){
        return(
            <>
             <section className="faq-section">
              <div class="container">
                <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                <h1 class="text-center">Hi! How can we help you?</h1>
                {/* <form>
            <div class="list">
            <div class="form-group">
             <Link to="#" className="icon"><i class="fa fa-search"></i></Link><input type="text"placeholder="Search here..." name="" class="form-control control" />
             </div>
          </div>
          </form> */}
                 {FaqsData.map((item, index) => {
                  return <FaqList item={item} key={index} />;
                 })}
                </div>
                </div>
              </div>
              </section>
            </>
        )
    }
}
export default Faq;