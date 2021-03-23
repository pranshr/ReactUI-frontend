import React from 'react'

function InnerBanner(props) {
    return (
        <>
            <section className="inner-banner">
          <div className="container">
            <div className="row d-flex align-item">
                <div className="col-md-7 col-sm-12">
                <div className="banner-text">
                <h3>{ props.firsttxt }</h3>
                <h1>{ props.headingtxt }</h1>
                <p>{ props.subHeadingtxt }</p>
                </div>
                </div>
                <div className="col-md-5 col-sm-12">
                <img src={process.env.PUBLIC_URL + "./assets/images/"+props.bannerImage} className="img-responsive center-block" alt="shareholder-banner" />
                </div>
            </div>
            </div>
      </section>
        </>
    )
}

export default InnerBanner
