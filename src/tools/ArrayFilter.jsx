import { useState } from "react";
import './App.css';
import './Responsive.css';


function FilterArray(params){

    const [filter, setFilter] = useState('');
    const [number, setNum] = useState('3');
    let [hide, setHide] = useState('none');

    //create an array from the data sent to this file
    const dataArray = params.value.split('&#11088');

    
    function updateFilter(event){
        setFilter(event.target.value);
    }

    const showFilter = (event) => {
        setHide('block');
    }

    //this function is split up into this block and the three above
        //it will update the value searched for based on what the user inputs into the text box
        //it will also draw the designated filter area when text has been input instead of hiding it.
    function callingFilter(event){
        updateFilter(event);
        showFilter(event);
    }

    //updates the stored number based on what the user inputs
        //the number stored in the number state will determine how many filtered elements will draw
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