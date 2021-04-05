import React, { Component } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe"

// simplest form (only email)
// use the render prop and your custom form

// a basic form
const CustomForm = ({ status, message, inputClass, buttonClass, onValidated }) => {
  let email
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div>
      {status === "sending" && <div className="infoMessage">sending...</div>}
      {status === "error" && (
        <div
          className="errorMessage"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
           className="successMessage"
          dangerouslySetInnerHTML={{ __html: message }}
        >
          { 
            localStorage.setItem('subscribedUser', "subscribed"),
            window.location.reload()
           }
        </div>
      )}
    
                 
    <div className="form-group">
      <input
        ref={node => (email = node)}
        type="email"
        className={inputClass}
        placeholder="Enter your email"
      />
       </div>
       <div className="form-group">
      <button className={buttonClass} onClick={submit}>
         Subscribe
      </button>
      </div>
    </div>
  );
};

class Subscribe extends Component {
  render() {
    const url =
      "https://unlistedassets.us1.list-manage.com/subscribe/post?u=44a3d42cc4dfacaced1cf1dc8&amp;id=e075a39da2";
    return (
      <div className="form-margin">
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              inputClass = {this.props.inputClass}
              buttonClass = {this.props.buttonClass}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
      </div>
    );
  }
}

export default Subscribe;