import React, { Component } from 'react'

export default class CommingSoon extends Component {
    render() {
        return (
            <>
              <h2 className="text-center text-bold">This Page is under construction</h2>
              <p className="text-center">Please subscribe to our mailing list. We will notify you as soon as the page is live
              </p>
              <div className="row">
                <div className="col-sm-offset-2 col-sm-5">
                  <input type="text" placeholder="Enter your email" className="form-control custom-field" />
                </div>
                <div className="col-sm-4 m-xs">
                  <button type="submit" className="btn btn-lg btn-mail">Join our mailing list</button>
                </div>
              </div>
            </>
        )
    }
}
