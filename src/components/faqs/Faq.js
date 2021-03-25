import React, { Component } from 'react'
// import FaqsData from './FaqsData';
import GeneralFaqData from './Data/GeneralFaqData';
import FaqList from './FaqList';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
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
                <Tabs>
    <TabList>
      {/* <Tab>For Shareholders</Tab>
      <Tab>For Investors</Tab>
      <Tab>For Institutional Investors</Tab> */}
      <Tab>General FAQ</Tab>
      <Tab>Share Transfer Process related </Tab>
    </TabList>

    {/* <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel> */}
    <TabPanel>
    {GeneralFaqData.map((item, index) => {
                  return <FaqList item={item} key={index} />;
                 })}
    </TabPanel>
    <TabPanel>
      <h2>Content Not Available</h2>
    </TabPanel>
   

  </Tabs>

                {/* <form>
            <div class="list">
            <div class="form-group">
             <Link to="#" className="icon"><i class="fa fa-search"></i></Link><input type="text"placeholder="Search here..." name="" class="form-control control" />
             </div>
          </div>
          </form> */}
                
                </div>
                </div>
              </div>
              </section>
            </>
        )
    }
}
export default Faq;