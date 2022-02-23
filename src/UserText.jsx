import { useState } from "react";
import ArraySort from "./ArraySort.jsx"
import './App.css';



function TestBox(params){

   
    const [input, setInput] = useState('');
    const [dataRetrieve, setDataRetrieve] = useState(localStorage.getItem(params.name) || '');


    const holdSubmit = (event) => {
        //prevent page reload
        event.preventDefault();
        //through current user text into a variable
        const heldSubmit = input;
        //adds text to front of the array when button is pressed
        params.value.unshift(heldSubmit);
        //turn array into string separated by ~
        const dataString = params.value.join('&#11088');
        //store string into local storage
        localStorage.setItem(params.name, dataString);
        //update the data string for local storage
        setDataRetrieve(dataString);
    }

    //needs work
    const eraseStorage = (event) => {
        localStorage.removeItem(params.name);
        window.location.reload();
    }

    //needs work
    let dataArray = dataRetrieve.split('&#11088');
    const deleteEntry = (event) =>{
        let entryDel = document.getElementById("DELETE-ENTRY").value;
        if((entryDel > 0) & (entryDel <= dataArray.length)){
            dataArray.splice(entryDel - 1, 1);
            dataRetrieve = dataArray.join('&#11088');
            console.log(entryDel);
            console.log(dataRetrieve);
        }
    }

    console.log(dataArray.length);
    console.log(params.value);
    console.log(dataRetrieve);

    return (
        <div id="CATEGORY">
            <form id={params.id} onSubmit={holdSubmit}>
                <label id="TEXT-LABEL"></label>
                    {params.display}: {"\n"}
                    <textarea 
                    id="TEXT-AREA"
                    required 
                    value={input}
                    rows={10}
                    cols={45}
                    onChange={(event) => setInput(event.target.value)}
                    ></textarea>
                <div></div>
                <button id="TEXT-SUBMIT">Create</button>
            </form>
            <p id="INPUT-AREA"> {input} </p>
           
           <div id="CONTROLS">
                <div id="SEARCH">
                    <label>Search: </label>
                    <input type="search" id="SEARCH-BAR"></input>
                </div>
                <div id="DELETE">
                    <label>Delete: </label>
                    <input id="DELETE-ENTRY" type="number" min="1" max={params.value.length}></input>
                    <button onClick={deleteEntry}>Remove entry</button>
                </div>
                <div id="CLEAR">
                    <button id="CLEAR-STORAGE" onClick={eraseStorage}>CLEAR ALL!</button>
                </div>
            </div>
          
                <ArraySort value={dataRetrieve}></ArraySort>
            
        </div>
    );
}



export default TestBox;