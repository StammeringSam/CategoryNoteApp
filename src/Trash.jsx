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

    //checks if there isn't anything currently stored in trashData local storage
        //if that's the case, create dummy data to split over
    if (trashRetrieve == null){

        deleteLast = true;
        trashRetrieve = "this should not show on the webpage"
    }
    let trashArray = trashRetrieve.split('&#11088');

    //if dummy data was created
        //delete it so it doesn't show on the webpage
    if (deleteLast === true){
        deleteLast = false;
        trashArray.splice(trashArray.length - 1, 1);
    }

    //go through every element in the trashArray and format tabs in it
    trashPrint = trashArray.map(data=>{
        return(
        <div>

        <h1 id="TRASH-TEXT">{data.split("\n").map(data=>"\t\t" + data).join("\n")}</h1>

        </div>);
        
    });
    //if there isn't anything in the trash
        //return text telling the user this
    if (trashArray.length === 0){
        return(<h1 id="DATE">Trash is empty!</h1>)
    }
    else{
        return(trashPrint);
    }

}


export default Trash;