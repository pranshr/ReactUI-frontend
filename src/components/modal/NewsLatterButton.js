import React, { Component } from 'react'
import { Link } from "react-router-dom";
import NewsLatterModal from './NewsLatterModal'
export default class NewsLatterButton extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
            item_id:''
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }
    
    showModal = () => {
      this.setState({ show: true});
    };
    
    hideModal = () => {
        this.setState({ show: false });
    
    };
    componentDidMount(){
        let sessionData = localStorage.getItem('subscribedUser');
        console.log(sessionData);
        if(sessionData !=='subscribed'){
            setTimeout(function(){
                this.setState({show: true});
           }.bind(this),20000);  // wait 20 seconds, then reset to false
        }
        
    }
    render() {
     
        return (
            <>
            
               <Link to="#" className="ml-20 btn-white" onClick={this.showModal}>Join our platform</Link>
            
                 
                 { !this.state.show ? null :<NewsLatterModal show={this.state.show} handleClose={this.hideModal}/>}
            </>
        )
    }
}
