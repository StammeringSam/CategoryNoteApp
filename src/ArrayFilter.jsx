import { useState } from "react";
import './App.css';


function FilterArray(params){

    const [filter, setFilter] = useState('');
    const [number, setNum] = useState('3');
    let [hide, setHide] = useState('none');

    const dataArray = params.value.split('&#11088');


    function updateFilter(event){
        setFilter(event.target.value);
        console.log(filter);
    }

    const showFilter = (event) => {
        setHide('block');
    }

    function callingFilter(event){
        updateFilter(event);
        showFilter(event);
    }

    
    function updateNum(event){
        setNum(event.target.value);
    }


   

    

    return(
        <div id="SEARCH">
                        
        <label>Search: 
        <input type="search" className="SEARCH-BAR" onChange={callingFilter} value={filter}></input>
        <input type="number" className="SEARCH-NUM" min="1" max={dataArray.length} onChange={updateNum} value={number}></input>
        <ul id="SEARCH-LIST" style={{display:hide}}>
            
            {dataArray 

            .filter((val) => filter !== '')

            .filter((val) => val.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))

            .filter((val, num) => num < number)

                
            .map((val) => (
                
                
                <p id="SEARCH-ELEMENT">{"\n" + val + "\n\n"}</p>

            ))}
        </ul>
        </label>
    </div>
    );
}

export default FilterArray;