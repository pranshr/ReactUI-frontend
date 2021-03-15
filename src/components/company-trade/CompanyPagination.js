import React from 'react';
import { Link } from "react-router-dom";
const CompanyPagination = ({postsPerpage, totalPosts, paginate }) =>{
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerpage); i++){
        pageNumbers.push(i);
    }

  
    return(
        <>
        <div className="text-center">
          <ul className="pagination">
              {
                pageNumbers.map( number =>(
                    <li key={number} className="page-item">
                    <Link onClick={()=> paginate(number)} className="page-link">  {number} </Link>   
                    </li>
                ))
              }
          </ul> 
          </div>
        </>
        )
    
}
export default CompanyPagination;