import React, { useState } from 'react'
import parse from 'html-react-parser';
const FaqList = ({ item }) =>{
     const [panelShow, setPanel] = useState(false);
     const showPanel = () => setPanel(!panelShow);
     return(
         <>
           <button className="accordion" onClick={showPanel}> <i className={panelShow ? "fa fa-minus" : "fa fa-plus"}></i>{ item.title }</button>
           <div className={ panelShow ? "panel open" : "panel" } >
             {parse(item.desc)}  
          </div>
         </>
     )
}
export default FaqList