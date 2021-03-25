import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class CompanyPagination extends Component {
  constructor(props){
    super(props);
    this.state={
      totalPosts:props.totalPosts,
      postsPerpage:props.postsPerpage,
      pageNumbers:[],
      showpageNumbers:[],
      start:0,
      end:5,
    }
    this.NavigateNext = this.NavigateNext.bind(this);
  }
  componentDidMount(){
    let pageNo = [];
    for(let i = 1; i <= Math.ceil(this.state.totalPosts / this.state.postsPerpage); i++){
      pageNo.push(i);
    }

      this.setState({
        pageNumbers:pageNo,
        showpageNumbers: pageNo.slice(this.state.start,this.state.end),
        // start:this.state.start+5,
        // end:this.state.end+5,
      }) 
  }
  getNavigate(val1,val2){
    this.setState({
      showpageNumbers: this.state.pageNumbers.slice(val1,val2),
    }) 
  }
  NavigateNext = () => {
    this.setState({
      start:this.state.start+5,
      end:this.state.end+5,
  }, () => {
    this.getNavigate(this.state.start,this.state.end);
  });
  };

  NavigatePrev= () => {
    this.setState({
      start:this.state.start-5,
      end:this.state.end-5,
  }, () => {
    this.getNavigate(this.state.start,this.state.end);
  });

  }
  render() {
     
    return (
      <>
       <div className="text-center">
          <ul className="pagination">
            <li className="page-item">
            {
              this.state.start === 0 ? null : <Link onClick={this.NavigatePrev} className="page-link"> <i className="fa fa-angle-double-left" aria-hidden="true"></i> </Link>
            }
              
            </li>
             {
                this.state.showpageNumbers.map( number =>(
                    <li key={number} className="page-item">
                    <Link className="page-link" onClick={()=> this.props.paginate(number)}>  {number} </Link>   
                    </li>
                ))
              }
              <li className="page-item">
              {
                this.state.pageNumbers.length  > this.state.end ? <Link onClick={this.NavigateNext} className="page-link"> <i className="fa fa-angle-double-right" aria-hidden="true"></i></Link> :null
            }
              
              </li>
              </ul>
              </div>
      </>
    )
  }
}
