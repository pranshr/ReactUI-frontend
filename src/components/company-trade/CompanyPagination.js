import React from 'react';
import { Link } from "react-router-dom";
const CompanyPagination = ({postsPerpage, totalPosts, paginate }) =>{
    let pageNumbers = [];
    //const [tabno, setTabno] = useState(0);
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerpage); i++){
        pageNumbers.push(i);
    }
    // let lenth = 5;
    //  if(pageNumbers.length > 5){
    //   pageNumbers = pageNumbers.slice(0,5);

    //   setTabno(5);
    //  }
    // function paginateNext(){
    //   tabno = tabno+5;
    //  }
    return(
        <>
        <div className="text-center">
          <ul className="pagination">
          <li className="page-item">
        <a className="page-link" href="!#" aria-label="Previous">
          <span aria-hidden="true">«</span>
          <span className="sr-only">Previous</span>
        </a>
      </li>
              {
                pageNumbers.map( number =>(
                    <li key={number} className="page-item">
                    <Link onClick={()=> paginate(number)} className="page-link">  {number} </Link>   
                    </li>
                ))
              }
              <li className="page-item"><Link className="page-link"> ... </Link> </li>
              <li className="page-item">
        <a className="page-link" href="!#" aria-label="Next" >
          <span aria-hidden="true">»</span>
          <span className="sr-only">Next</span>
        </a>
      </li>
          </ul> 
          </div>
        </>
        )
    
}
export default CompanyPagination;