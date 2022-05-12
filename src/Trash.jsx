import { useState, useEffect } from "react";
import './tools/App.css';
import './tools/Responsive.css';

function Trash(){

    let [trashRetrieve, setTrash] = useState();
    let deleteLast = false;

    useEffect(() => {
        //This code will run when the page loads
        setTrash(localStorage.getItem("trashData"));
    }, [])

    let trashPrint = null;
    if (trashRetrieve == null){
        deleteLast = true;
        trashRetrieve = "this should not show on the webpage"
    }
    let trashArray = trashRetrieve.split('&#11088');

    if (deleteLast === true){
        deleteLast = false;
        trashArray.splice(trashArray.length - 1, 1);
    }


    trashPrint = trashArray.map(data=>{
        return(
        <div>

        <h1 id="TRASH-TEXT">{data.split("\n").map(data=>"\t\t" + data).join("\n")}</h1>

        </div>);
        
    });
    if (trashArray.length === 0){
        return(<h1 id="DATE">Trash is empty!</h1>)
    }
    else{
        return(trashPrint);
    }

}


export default Trash;