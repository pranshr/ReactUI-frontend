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
                    <div class="row modal-center-row">
                        <div class="col-md-12">
                        <div className="heading-section">
                            <h3>Join our mailing list </h3>
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
