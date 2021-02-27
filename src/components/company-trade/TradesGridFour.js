import React, { Component } from 'react';
import { Link } from "react-router-dom";
import trades from '../../data/trades.json';
import TradeModal from '../modal/TradeModal';
class TradesGridFour extends Component{
  constructor() {
    super();
    this.state = {
        show: false,
        item_id:''
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
}

showModal = (id) => {
  this.setState({ show: true, item_id:id});
};

hideModal = () => {
    this.setState({ show: false });

};
    render(){
        return(
            <>
             <div className="row">
              {trades.map(trade => {
               if(trade.id < 9){
                  return (
                    <div className="col-md-3" key={trade.id}>
                <div className="box">
                    <div className="box1">
                      <div className="row">
                        <div className="col-md-2 col-xs-2">
                          <div className="border1">
                            <img src={process.env.PUBLIC_URL + trade.img_src} alt="company_logo" className="center-block" />
                          </div>
                        </div>
                        <div className="col-md-8 col-xs-8 pl-25">
                          <p className="p2" style={{fontWeight: 'bold'}}> { trade.title }</p>
                          <p className="pharmacy">{ trade.c_category }</p>
                          <p className="pharmacy">{ trade.c_id }</p>
                        </div>
                        <div className="col-md-2 col-xs-2">
                          <p className="plus1"><Link to="#" className><img src={process.env.PUBLIC_URL + "./assets/images/add.png"} alt="add" /></Link></p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="value content-box">
                          <p>Valuation<span className="pull-right text-bold">{ trade.valuation }</span></p>
                          <p>Series of Funding<span className="pull-right text-bold">{ trade.funding }</span></p>
                          <p>{ trade.desc }</p>
                          <div className="hover-box">
                          <button type="button" onClick={(e) => this.showModal(trade.c_id)}> Trade </button><Link to="#">Explore</Link>
                         </div>
                        </div>
                      </div>
                    </div>
                   
                    <div className="clearfix" />
                  </div>
                  </div>
                  ); 
               }else{
                 return null;
               }
                })}
                
                </div>
                { trades.length < 8 ? null :
                <div className="row">
                <div className="col-md-12">
                  <div className="view">
                    <p className="text-center p1"><Link to="/companies">View All</Link></p>
                  </div>
                </div>
              </div>
                }
                { !this.state.show ? null :
                
                <TradeModal show={this.state.show} handleClose={this.hideModal} c_id={ this.state.item_id }/>
           
                }
            </>
        )
    }
}
export default TradesGridFour;