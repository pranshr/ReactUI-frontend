import React, { Component } from 'react'

export default class ContactForm extends Component {
    render() {
        return (
            <>
                <form>
<div className="row">
  <div className="col-md-6">
    <p>Name</p>
    <div className="form-group">
      <input type="text" className="form-control" name />
    </div>
  </div>
  <div className="col-md-6">
    <p>Email</p>
    <div className="form-group">
      <input type="email" className="form-control" name />
    </div>
  </div>
</div>
<div className="row">
  <div className="col-md-12">
    <p>Message</p>
    <div className="form-group">
      <textarea className="form-control" defaultValue={""} />
    </div>
  </div>
</div>
<button className="button1">Submit</button>
</form>
            </>
        )
    }
}
