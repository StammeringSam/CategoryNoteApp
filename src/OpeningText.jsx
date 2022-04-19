//import { useState } from "react";
import Moment from 'moment';
import './App.css';
import './Responsive.css';


function OpeningText(params){

    
    let date = Moment().format('LL');
    return (
        <div>
            <h1 id='DATE'>{" " + date}</h1>

            <div id='LINKS'>
                <a href="#PHONE-DATA" id='PHONE-LINK'>Phone Numbers</a>
                <a href="#URL-DATA" id='URL-LINK'>Website URLs</a>
                <a href="#PASSWORD-DATA" id='PASSWORD-LINK'>Passwords</a>
                <a href="#ADDRESS-DATA" id='ADDRESS-LINK'>Addresses</a>
                <a href="#RECIPE-DATA" id='RECIPE-LINK'>Recipes</a>
                <a href="#MISC-DATA" id='MISC-LINK'>Miscellaneous</a>
                <br/>
                <br/>

            </div>
        </div>
    );
}

export default OpeningText;