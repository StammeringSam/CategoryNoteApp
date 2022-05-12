import { useState } from "react";
import moment from "moment";
import ArraySort from "./ArraySort.jsx";
import ArrayFilter from "./ArrayFilter.jsx";
import './App.css';
import './Responsive.css';
import {StoreDelete} from "./TextDelete.js";



function Category(params){


    const [input, setInput] = useState('');
    let [dataRetrieve, setDataRetrieve] = useState(localStorage.getItem(params.name) || '');

    let [hide, setHide] = useState('none');
    let [length, setLength] = useState('View All');
    let [content, setContent] = useState('none');
    

    const holdSubmit = (event) => {
        //prevent page reload
        event.preventDefault();
        let day = moment().format('L');
        //through current user text into a variable
        const heldSubmit = input + "\n\n\n" + day;
        //adds text to front of the array when button is pressed
        params.value.unshift(heldSubmit);
        //turn array into string separated by ~
        const dataString = params.value.join('&#11088');
        //store string into local storage
        localStorage.setItem(params.name, dataString);
        //update the data string for local storage
        setDataRetrieve(dataString);
        setInput("");
    }

    const eraseStorage = (event) => {
        localStorage.removeItem(params.name);
        window.location.reload();
    }

    const hideShow = (event) => {
        if (hide === 'block'){
            setHide('none');
        }
        else{
            setHide('block');
        }
    }

    const changeLength = (event => {
        if (length === 'View Top'){
            setLength('View All');
        }
        else{
            setLength('View Top');
        }
    });


    const contentDisplay = (event => {
        if (content === 'block'){
            setContent('none');
        }
        else{
            setContent('block');
        }
    });

    const deleteEntry = (event) =>{
        event.preventDefault();
        
        let data = new FormData(event.target);
        let entryDel = data.get('delete');
        if((entryDel > 0) || (entryDel <= params.value.length)){
            let deleteLast = false;
            let cut = params.value[entryDel - 1];
            params.value.splice(entryDel - 1, 1);
            let newDataString = params.value.join('&#11088');
            localStorage.setItem(params.name, newDataString);
            let trashReturn = localStorage.getItem(params.garbage);
            
            if (trashReturn == null){
                deleteLast = true;
                trashReturn = "this should not show on the webpage"
            }

            let trashArray = trashReturn.split('&#11088');
            console.log(trashReturn);
            trashArray.unshift(cut);

            if (deleteLast === true){
                deleteLast = false;
                trashArray.splice(trashArray.length - 1, 1);
            }
;
            trashReturn = trashArray.join('&#11088');
            localStorage.setItem(params.garbage, trashReturn);
            setDataRetrieve(newDataString);
            StoreDelete(cut);
        }
    }

    return (
        <div id="CATEGORY">
            <form id={params.id} onSubmit={holdSubmit}>
                <label id="TEXT-LABEL"></label>
                    {params.display}: {"\n"}

                    <textarea 
                    className="TEXT-AREA"
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
            <div id="DISPLAY">

                <button 
                id="CONTROL-TOGGLE" 
                onClick={hideShow}
                >Controls</button>

                <button 
                id = "USER-TOGGLE" 
                onClick={changeLength}
                >{length}</button>

            </div>
           <div id="CONTROLS" style={{display:hide}}>

                <ArrayFilter value={dataRetrieve}></ArrayFilter>

                <form onSubmit={deleteEntry}>
                    <div id="DELETE">
                        <label>Delete:

                        <input 
                        className="DELETE-ENTRY" 
                        name="delete" 
                        type="number" 
                        min="1" 
                        max={params.value.length}
                        ></input>

                        </label>
                        <button>Remove entry</button>
                    </div>
                </form>

                <div id="CLEAR">

                    <button 
                    id="CLEAR-STORAGE" 
                    onClick={eraseStorage}
                    >CLEAR ALL!</button>

                </div>
                
            </div>
            <div id="ARRAY-SORT" style={{display:content}}>
                <ArraySort 
                value={dataRetrieve} 
                key={params.display}
                length={length}
                ></ArraySort>
            </div>
            <button onClick={contentDisplay} id="CONTENT-TOGGLE">Toggle Content</button>
        </div>
    );
}



export default Category;