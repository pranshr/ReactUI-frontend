import React, { Component } from 'react'
import CommingSoon from './CommingSoon';
export default class PlateForm extends Component {

    render() {

        return (
            <>
                  <section className="underconstruction">
        <div className="container">
          <div className="row">
            <div className="col-md-1" />
            <div className="col-md-10">
              {/* <h1 className="text-center text-bold">Platform</h1> */}
              <CommingSoon/>
            </div>
            <div className="col-md-1" />
            
          </div>	
         
        </div>
      
      </section>
            </>
        )
    }
}
