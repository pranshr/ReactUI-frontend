import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Faq from './components/faqs/Faq'
import PrivacyPolicy from './components/PrivacyPolicy'
import Contact from './components/Contact'
import PlateForm from './components/Plateform'
import PortfolioFun from './components/PortfolioFun'

//import CompaniesDetails from './components/company-trade/CompaniesDetails'
import CompDetails from './components/company-trade/CompDetails';
import {Footer, Home, Companies, Services, About, Disclaimers, Terms, Scompanies, Institutions, Investors, Shareholders, Cdetail, Why } from "./components";
import ReactGA from 'react-ga';
import ScrollToTop from './components/ScrollToTop'
import "./style.css";

function initilizeAnalystic(){
  ReactGA.initialize('G-6TEVYNRLLY');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

function App() {
  initilizeAnalystic();
  // document.addEventListener("contextmenu", (event) => {
  //   event.preventDefault();
  // });
  return (
    <div className="App">
      <Router>
          <ScrollToTop />
        <Header />
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/companies" component={Companies}/>
        <Route path="/company/:cslug" component={CompDetails}/>
        <Route path="/services" component={Services}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/about-us" component={About}/>
        <Route path="/disclaimers" component={Disclaimers}/>
        <Route path="/faqs" component={Faq}/>
        <Route path="/terms-and-conditions" component={Terms}/>
        <Route path="/privacy-policy" component={PrivacyPolicy}/>
        <Route path="/solution-for-companies" component={Scompanies}/>
        <Route path="/solution-for-institutions" component={Institutions}/>
        <Route path="/solution-for-investors" component={Investors}/>
        <Route path="/solution-for-shareholders" component={Shareholders}/>
        <Route path="/cdetail/:id" component={Cdetail}/>
        <Route path="/why-us" component={Why}/>
        <Route path="/platform" component={PlateForm}/>
        <Route path="/portfolio" component={PortfolioFun}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
