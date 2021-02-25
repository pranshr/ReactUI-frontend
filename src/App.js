import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Faq from './components/faqs/Faq'
import PrivacyPolicy from './components/PrivacyPolicy'

import {Footer, Home, Companies, Services, Contact, About, Disclaimers, Terms, Scompanies, Institutions, Investors, Shareholders, Cdetail, Why } from "./components";
import ReactGA from 'react-ga';
import "./style.css";

function initilizeAnalystic(){
  ReactGA.initialize('G-6TEVYNRLLY');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

function App() {
  initilizeAnalystic();
  return (
    <div className="App">
      <Router>
        <Header />
        
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/companies" exact component={() => <Companies />} />
          <Route path="/services" exact component={() => <Services />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/disclaimers" exact component={() => <Disclaimers />} />
          <Route path="/faq" exact component={() => <Faq />} />
          <Route path="/terms-and-conditions" exact component={() => <Terms />} />
          <Route path="/privacy-policy" exact component={() => <PrivacyPolicy />} />
          <Route path="/scompanies" exact component={() => <Scompanies />} />
          <Route path="/institutions" exact component={() => <Institutions />} />
          <Route path="/investors" exact component={() => <Investors />} />
          <Route path="/shareholders" exact component={() => <Shareholders />} />
          <Route path="/cdetail/:id" exact component={() => <Cdetail />} />
          <Route path="/why-us" exact component={() => <Why />} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
