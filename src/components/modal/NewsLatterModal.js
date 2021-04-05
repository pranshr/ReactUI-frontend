import React from 'react'
import Subscribe from '../subscribe/Subscribe'
export default function NewsLatterModal(props) {
    const showHideClassName = props.show ? "modal pd-50 display-block " : "modal pd-50 display-none";
    return (
        <><div className={showHideClassName}>
            <section className="modal-main newslatter-modal-main">
         
            <div class="modal-content">
             <div className="bgImages">
               <img src={process.env.PUBLIC_URL + "./assets/images/formandtextRe.jpg"} alt="icon_share_invest"/>
             </div>
                
                <div class="modal-body newslatter-modal">
                <button type="button" class="close" onClick={props.handleClose}><i class="fa fa-times"></i></button>
                  <div className="newlatter-popup">
                  <div className="heading-pop">
                    <h2>Opportunity <br></br> to invest  <br></br> in Unlisted  <br></br>Stocks is here</h2>
                  </div>
                  <div className="subscribe-form">
                     <Subscribe inputClass={"newlatter-control form-control"} buttonClass={"button1"}/>
                  </div>     
                  </div>
                   
                </div>
                
              </div>
            </section>
          </div>
            </>
    )
}
