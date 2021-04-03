import React from 'react'
import Subscribe from '../subscribe/Subscribe'
export default function NewsLatterModal(props) {
    const showHideClassName = props.show ? "modal pd-50 display-block " : "modal pd-50 display-none";
    return (
        <><div className={showHideClassName}>
            <section className="modal-main newslatter-modal-main">
            <div class="modal-header">
          <button type="button" class="close" onClick={props.handleClose}><i class="fa fa-times"></i></button>
         </div>
            <div class="modal-content">
         
                <div class="modal-body newslatter-modal pd-30">
                <div class="row mb-mgb-60">
                        <div class="col-md-8 col-sm-8 col-xs-8">
                        <div className="heading-section">
                           
                            <h2>Opportunity to invest in Unlisted Stockes is here</h2>
                       </div>
                       </div>
                    </div>
                    <div class="row modal-center-row mobile-row">
                        <div class="col-md-6">
                        <div className="heading-section">
                           
                            <Subscribe inputClass={"newlatter-control form-control"} buttonClass={"button1"}/>
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
