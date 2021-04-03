import React, { Component } from 'react'
import Subscribe from './subscribe/Subscribe'
export default class CommingSoon extends Component {
    render() {
        return (
            <>
              <h2 className="text-center text-bold">Don’t miss the launch!</h2>
              <p className="text-center">We are in the process of creating transparent and secure escrow based technology platform for buying and selling of unlisted shares in order to provide liquidity and monetisation window for various stakeholders of unlisted companies including start-up companies</p>
              <div className="subscribe-form">
              <Subscribe inputClass={"text form-control"} buttonClass={"btn btn-white"}/>
              </div>
              <div className="bottom-img">
              <img src={process.env.PUBLIC_URL + "./assets/images/commingSoon.png"} alt=""/>
              </div>
            </>
            
        )
    }
}
