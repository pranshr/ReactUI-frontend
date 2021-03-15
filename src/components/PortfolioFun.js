import React, {useState} from 'react'

export default function PortfolioFun() {
    const [options, setOptions] = useState([]);
    const sectorChange = (e) =>{
        let index
       
        // check if the check box is checked or unchecked
        if (e.target.checked) {
          // add the numerical value of the checkbox to options array
          options.push(e.target.value)
        } else {
          // or remove the value from the unchecked checkbox from the array
          index = options.indexOf(e.target.value)
          options.splice(index, 1)
        }
    
        // update the state with the new array of options
        setOptions(options);
        alert(options);
    }
   
    return (
        <main className='portfolio'>

        <form>
          <div className="input-group">
            <label>cb1</label>
            <input type="checkbox" value="series A" onChange={sectorChange} />
          </div>
          <div className="input-group">
            <label>cb2</label>
            <input type="checkbox" value="series B" onChange={sectorChange} />
          </div>
          <div className="input-group">
            <label>cb3</label>
            <input type="checkbox" value="series C" onChange={sectorChange} />
          </div>
        </form>

        

      </main>
    )
}
