import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../css/modal.css';
class TradeModal extends Component {
    constructor() {
        super();
        this.state = {
            company_interest: 'Swiggy',
            email:'',
            phone:'',
            comments:''
        };


    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value.trim() });
      };
	onSubmit(e){
		 e.preventDefault();
         const { company_interest } = this.state
          console.log(company_interest);
   
	 }
    render() {
        const showHideClassName = this.props.show ? "modal pd-50 display-block " : "modal pd-50 display-none";
        return (
            <><div className={showHideClassName}>
            <section className="modal-main trade-modal-main">
            <div class="modal-header">
          <button type="button" class="close" onClick={this.props.handleClose}><i class="fa fa-times"></i></button>
         </div>
            <div class="modal-content">
         
                <div class="modal-body trade-modal pd-50">
                    <div class="row modal-center-row">
                        <div class="col-md-12">
                        <div className="heading-section">
                            <h3>Let us know about your interest </h3>
                            <p> We are soon launching a transparent and secure plateform for buying and selling of unlisted shares. Till then, We will provide you with a safe and secure offline support for trading unlisted stocks. </p>
                          
                       </div>
                           
                            <div className="form-wrapper">
                                <form onSubmit= {this.onSubmit.bind(this)}>
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <label htmlFor="company_of_interest">Company of interest *</label>
                                            {/* <select name="company_interest" value={this.state.company_interest} onChange={this.handleChange} className="form-control">
                                                <option value="Swiggy">Swiggy</option>
                                                <option value="Zomato">Zomato</option>
                                            </select> */}
                                            <p>{ this.props.c_id }</p>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                          <label htmlFor="company_of_interest">I am seriously interested *</label>
                                        </div>
                                        <div className="form-group radio-button-control">
                                            <div onChange={this.onChangeValue}>
                                                <div className="col-md-6 customRadio">
                                                <input className="radio-control" type="radio" value="To buy stock" name="stock" id="pickup-1"/>
                                                <label htmlFor="pickup-1"> To buy stocks  <span className="checkmark"/></label>
                                                </div>
                                                <div className="col-md-6 customRadio">
                                                <input className="radio-control" type="radio" value="To sell stock" name="stock" id="pickup-2"/>
                                                <label htmlFor="pickup-2"> To sell stocks, I have inventory  <span className="checkmark"/></label>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-6">
                                                <label htmlFor="email">Email *</label>
                                                <input type="text" name="email" className="form-control" placeholder="johndoe@gmail.com" onChange={this.handleChange} />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="phone">Phone </label>
                                                <input type="text" name="phone" className="form-control" placeholder="+91 1234567890" onChange={this.handleChange} />
                                            </div>

                                        </div>
                                        <div className="form-group row">
                                        <div className="col-md-12">
                                          <label htmlFor="comment">Comment</label>
                                             <textarea
                                             name="comments"
                                             className="form-control textarea-control"
                                             id="comment"
                                             rows="5"
                                             onChange={this.handleChange}
                                             />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                        <div className="col-md-12 checkbox">
                                          <input type="checkbox" id="check" />
                                          <label htmlFor="check"><span className="check " /> I would like to receive relevant updates related to stock inventories and product launch.</label></div>
                                        </div>
                                        <div className="form-group row">
                                          <div className="col-md-12">
                                          <p className="note-section"><strong>Note:</strong> Reach us at <Link to="/">hello@unlistedassets.com</Link> and we would be happy to help you. *By submitting this form you agree to the legal terms and conditions of this websites.</p>
                                          </div>
                                        </div>
                                        <div className="form-group row">
                                          <div className="col-md-12 btn-trade-section">
                                             <button className="cancel-btn" type="button" onClick={this.props.handleClose}> Cancel </button>
                                             <button className="sbt-btn" type="submit"> Submit </button>
                                          </div>
                                        </div>
                                </form>
                            </div>
                        </div>


                    </div>
                </div>
                
              </div>
            </section>
          </div>
            </>
        )
    }
}
export default TradeModal;