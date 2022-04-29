import { useState, useEffect } from "react";
import './App.css';
import './Responsive.css';

function Trash(params){
    //maybe have user go to a separate page with a link
    //work on this assuming that the textDelete works

    const [trashRetrieve, setTrash] = useState();

    useEffect(() => {
        //This code will run when the page loads
        setTrash(localStorage.getItem("trashData"));
    }, [])

    let test = localStorage.getItem("phoneData");
    console.log(test);
    return(<h1>{trashRetrieve}</h1>);

}


export default Trash;