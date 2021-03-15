import React, { useState } from "react";
import { Link } from "react-router-dom";
import TradesGridThree from './company-trade/TradesGridThree';
import { SWRConfig } from 'swr';
import useSWR from "swr";
import PriceRangeSlider from './PriceRangeSlider';
//import SectorList from './filter/SectorList';
//import SeriesOfFundingList from './filter/SeriesOfFundingList';
const fetcher = (...args) => fetch(...args).then((response) => response.json());
const Companies = () => {
  const [panelShow1, setPanel1] = useState(false);
  const [panelShow3, setPanel3] = useState(false);
  const [panelShow4, setPanel4] = useState(false);
 // const [dataList, setdataList] = useState([]);
  
 

  const showPanel1 = () => setPanel1(!panelShow1);
  const showPanel3 = () => setPanel3(!panelShow3);
  const showPanel4 = () => setPanel4(!panelShow4);
  const [currentFilterProduct, setcurrentFilterProduct] = useState([]);
  const [checkFilterProduct2, setcheckFilterProduct2] = useState([]);
 const [checkFilterProduct3, setcheckFilterProduct3] = useState([]);
  const [filterCount, setfilterCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsNotFound, setrecordsNotFound] = useState(false);

  const postPerpage = 6;

  function paginate(pageNumber) {
    setCurrentPage(pageNumber)
    console.log(pageNumber);
  }
  

  const [sectorOptions, setsSctorOptions] = useState([]);
  const [fundinOptions, setsFundingOptions] = useState([]);

  //const apiEndpoint = "http://13.232.34.18:8080/company/findAll";
  const apiEndpoint = "https://api.unlistedassets.com/company/findAll";
  const sectorApiEndpoint = "https://api.unlistedassets.com/company/sector/findAll";
  const fundingApiEndpoint = "https://api.unlistedassets.com/company/fundingseries/findAll";
  const { data: conpanies } = useSWR(apiEndpoint, { refreshInterval: 2 });
  
  const { data: SectorList } = useSWR(sectorApiEndpoint, { refreshInterval: 2 });
  const { data: SeriesOfFundingList } = useSWR(fundingApiEndpoint, { refreshInterval: 2 });

  const indexOfLastpost = currentPage * postPerpage;
  const indexOfFirstPost = indexOfLastpost - postPerpage;

  var currentPost = conpanies ? conpanies.slice(indexOfFirstPost, indexOfLastpost) : null;
  const totalPosts = conpanies ? conpanies.length : 0;


 
  // var lastPrice = conpanies ? conpanies[conpanies.length-1].last_fund_raising_valuation : null;
  // var firstPrice = conpanies ? conpanies[0].last_fund_raising_valuation : null;
  // console.log(firstPrice);
  
//  var arrayInt = [5,3,5,6,9];
//  var minValue = arrayInt[0];
//  for (var i=1 ; i<arrayInt.length ; i++) {
//      if(minValue > arrayInt[i]){
//       minValue = arrayInt[i];
//      }
//  }
//  console.log(minValue)





var maxPrice;
var minPrice;
if(conpanies){
maxPrice = parseInt(conpanies[0].last_fund_raising_valuation)
for (var x=0 ; x<conpanies.length ; x++) {
       if(maxPrice < parseInt(conpanies[x].last_fund_raising_valuation)){
        maxPrice = parseInt(conpanies[x].last_fund_raising_valuation);
       }   
}
}

if(conpanies){
minPrice = parseInt(conpanies[0].last_fund_raising_valuation)
for (var y=0 ; y<conpanies.length ; y++) {
       if(minPrice > parseInt(conpanies[y].last_fund_raising_valuation)){
        minPrice = parseInt(conpanies[y].last_fund_raising_valuation);
       }   
}
}





  const FilterData = (val1, val2) => {
    var res = [];
    if (val1.length !== 0 && val2.length !== 0) {
      res = conpanies.filter(conpany => val1.includes(conpany.sector) && val2.includes(conpany.series_of_funding));
      if (res.length === 0) {
        setrecordsNotFound(true);
      }
    } else if (val1.length !== 0 && val2.length === 0) {
      res = conpanies.filter(conpany => val1.includes(conpany.sector));
      setrecordsNotFound(false);
    } else if (val1.length === 0 && val2.length !== 0) {
      res = conpanies.filter(conpany => val2.includes(conpany.series_of_funding));
      if (res.length === 0) {
        setrecordsNotFound(true);
      }else{
        setrecordsNotFound(false);
      }
      
    } else {
      res = conpanies;
      setrecordsNotFound(false);
    }
    
    
    setcurrentFilterProduct(res);
    
    setcheckFilterProduct2(res);
    setfilterCount(res.length);
    //console.log(checkFilterProduct2);


  }

  const sectorChange = (e) => {
    let index
    // check if the check box is checked or unchecked
    if (e.target.checked) {
      // add the numerical value of the checkbox to options array
      sectorOptions.push(e.target.value)
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = sectorOptions.indexOf(e.target.value)
      sectorOptions.splice(index, 1)
    }

    // update the state with the new array of options
    setsSctorOptions(sectorOptions);
    FilterData(sectorOptions, fundinOptions);
  }


  const FundingChange = (e) => {
    let index
    // check if the check box is checked or unchecked
    if (e.target.checked) {
      // add the numerical value of the checkbox to options array
      fundinOptions.push(e.target.value)
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = fundinOptions.indexOf(e.target.value)
      fundinOptions.splice(index, 1)
    }

    // update the state with the new array of options
    setsFundingOptions(fundinOptions);
    FilterData(sectorOptions, fundinOptions);
    console.log(fundinOptions);
  }

  function finalChange(val){
    var miniumValue = val.value.min;
    var maximumvalue = val.value.max;
    var res;
    if(checkFilterProduct2.length !== 0){
      res =  checkFilterProduct2.filter(conpany => miniumValue <= conpany.last_fund_raising_valuation && maximumvalue >= conpany.last_fund_raising_valuation);
    }else{
      res =  conpanies.filter(conpany => miniumValue <= conpany.last_fund_raising_valuation && maximumvalue >= conpany.last_fund_raising_valuation);
    }

  // currentPost = res;
  setcurrentFilterProduct(res);
  setcheckFilterProduct3(res);
  setfilterCount(res.length);
  if (res.length === 0) {
    setrecordsNotFound(true);
  }else{
    setrecordsNotFound(false);
  }
   };



  return (
    <>

      <section className="company-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sun">
                <div className="moon">
                  <p>Filter<span className="pull-right"><Link to="#">Clear All</Link></span></p>
                </div>
                <div className="earth">
                  <button className={panelShow1 ? "accor active1" : "accor"} onClick={showPanel1}>Sector</button>
                  <div className={panelShow1 ? "panel1 show-panel1" : "panel1"} >
                    {SectorList && SectorList.map((item, index) => {
                      return <div className="form-group" key={index}>
                        <p>  <input type="checkbox" name="sector_value" value={item.value} onChange={sectorChange} /> <span>{item.label}</span></p>
                      </div>;

                    })}


                  </div>
                  <button className={panelShow3 ? "accor active1" : "accor"} onClick={showPanel3}>Series of Funding</button>
                  <div className={panelShow3 ? "panel1 show-panel1" : "panel1"}>
                    {SeriesOfFundingList && SeriesOfFundingList.map((item, index) => {
                      return <div className="form-group" key={index}>
                        <p>  <input type="checkbox" name="company_series_of_funding" value={item.value} onChange={FundingChange} /> <span>{item.label}</span></p>
                      </div>;
                    })}
                  </div>
                  <button className={panelShow4 ? "accor active1" : "accor"} onClick={showPanel4}>Valuation</button>
                  <div className={panelShow4 ? "panel1 show-panel1" : "panel1"}>
                  {
                    minPrice && maxPrice ? <PriceRangeSlider minVal={minPrice} maxVal={maxPrice} finalChange={finalChange}/> : null
                  }
                  
                  
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              {/* <form>
                <div className>
                  <div className="form-group">
                    <a href="#" className="icon"><i className="fa fa-search" /></a><input type="text" placeholder="Search here..." name className="form-control control" />
                  </div>
                </div>
              </form> */}
              <div className="galaxy">
          
               
                {
                  currentFilterProduct.length === 0 ?
                    recordsNotFound ? "Record not found !" :
                      <SWRConfig value={{ fetcher }}>
                        <TradesGridThree postPerpage={postPerpage} currentPost={currentPost} totalPosts={totalPosts} paginate={paginate} />
                      </SWRConfig>
                    :
                    <TradesGridThree postPerpage={postPerpage} currentPost={currentFilterProduct} totalPosts={filterCount} paginate={paginate} />
                }

              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}

export default Companies;