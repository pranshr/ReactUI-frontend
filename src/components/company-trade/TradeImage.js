import React, { Component } from 'react'

export default class TradeImage extends Component {
  constructor(){
      super();
      this.state = {loaded: false};
  }
    render() {
        return (
          <>
            <img
            style={this.state.loaded ? {} : {display: 'none'}}
            src={this.props.imgSrc}
            onLoad={() => this.setState({loaded: true})}
            alt=""
          />
          </>
           
        )
    }
}
