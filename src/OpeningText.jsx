//import { useState } from "react";
import Moment from 'moment';
import './App.css';


function OpeningText(params){

    
    let date = Moment().format('LL');
    return (
        <div>
            <h1>{" " + date}</h1>

            <p>{params.description}</p>
        </div>
    );
}

export default OpeningText;