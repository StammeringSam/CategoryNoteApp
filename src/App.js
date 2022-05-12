import './tools/App.css';
import './tools/Responsive.css';
import { useState } from "react";
import OpeningText from "./tools/OpeningText.jsx";
import UserText from "./tools/UserText.jsx";
import Trash from "./Trash.jsx";
import { SaveTrash } from './tools/restoreTrash';



//load local storage
let phone = localStorage.getItem('phoneData')? localStorage.getItem('phoneData').split('&#11088') : [];
let password = localStorage.getItem('passwordData')? localStorage.getItem('passwordData').split('&#11088') : [];
let url = localStorage.getItem('urlData')? localStorage.getItem('urlData').split('&#11088') : [];
let address = localStorage.getItem('addressData')? localStorage.getItem('addressData').split('&#11088') : [];
let recipe = localStorage.getItem('recipeData')? localStorage.getItem('recipeData').split('&#11088') : [];
let misc = localStorage.getItem('miscData')? localStorage.getItem('miscData').split('&#11088') : [];

function App() {

  const [showPage, setPage] = useState(true);
  

  function switchPage(){
    if (showPage === true){
      setPage(false);
    }
    else{
      setPage(true);
    }
  }

  if (showPage === false){
    const emptyTrash = () => {
      localStorage.removeItem('trashData');
      localStorage.removeItem('phoneTrash');
      localStorage.removeItem('urlTrash');
      localStorage.removeItem('passwordTrash');
      localStorage.removeItem('addressTrash');
      localStorage.removeItem('recipeTrash');
      localStorage.removeItem('miscTrash');
      window.location.reload();
    }


    const restoreTrash = () =>{
      SaveTrash();
      emptyTrash();
    }


    return(
      <div   id="TRASH-AREA">
        <div id="TRASH-BUTTONS">
          <button id='EMPTY' onClick={emptyTrash}>EMPTY</button>
          <button id='EMPTY' onClick={restoreTrash}>RESTORE</button>
        </div>

        <Trash></Trash>

        <div id="TRASH-BUTTONS">
          <button id='RETURN' onClick={switchPage}>Main Page</button>
        </div>
      </div>
    );
  }
  else{

    return (
      <div id ="APP">
        <p id='top'></p>
        <br/>
        <OpeningText></OpeningText>
        <a href="#bottom" id="SCROLL-LINK">Bottom of page</a>
        <br/>
        
        <br/>
        
        <div id = "USER-CONTENT">
          <div  id="PHONE" className="contentBox" >
            <UserText value={phone} display="Phone Numbers" id="PHONE-DATA" className="innerContent" name="phoneData" garbage="phoneTrash"></UserText>
          </div>
          <div  id="INNER-LINK">
            <a href="#top" id="TOP-LINK">Top</a>
            <a href="#bottom" id="BOTTOM-LINK">Bottom</a>
          </div>
          <div id="URL" className="contentBox" >
            <UserText value={url} display="Website URLs" id="URL-DATA" className="innerContent" name="urlData" garbage="urlTrash"></UserText>
          </div>
          <div  id="INNER-LINK">
            <a href="#top" id="TOP-LINK">Top</a>
            <a href="#bottom" id="BOTTOM-LINK">Bottom</a>
          </div>
          <div id="PASSWORD" className="contentBox" >
            <UserText value={password} display="Passwords" id="PASSWORD-DATA" className="innerContent" name="passwordData" garbage="passwordTrash"></UserText>
          </div>
          <div  id="INNER-LINK">
            <a href="#top" id="TOP-LINK">Top</a>
            <a href="#bottom" id="BOTTOM-LINK">Bottom</a>
          </div>
          <div id="ADDRESS" className="contentBox" >
            <UserText value={address} display="Addresses" id="ADDRESS-DATA" className="innerContent" name="addressData" garbage="addressTrash"></UserText>
          </div>
          <div  id="INNER-LINK">
            <a href="#top" id="TOP-LINK">Top</a>
            <a href="#bottom" id="BOTTOM-LINK">Bottom</a>
          </div>
          <div id="RECIPE" className="contentBox" >
            <UserText value={recipe} display="Recipes" id="RECIPE-DATA" className="innerContent" name="recipeData" garbage="recipeTrash"></UserText>
          </div>
          <div  id="INNER-LINK">
            <a href="#top" id="TOP-LINK">Top</a>
            <a href="#bottom" id="BOTTOM-LINK">Bottom</a>
          </div>
          <div id="MISC" className="contentBox" >
            <UserText value={misc} display="Miscellaneous" id="MISC-DATA" className="innerContent" name="miscData" garbage="miscTrash"></UserText>
          </div>
          
          

        </div>
        <br/>
        <br/>
        <div>
          <button id="RETURN" onClick={switchPage}>Trash page</button>
        </div>
        <br/>
        <br/>
        <a href="#top" id="SCROLL-LINK">Top of page</a>
        <br/>
        <OpeningText></OpeningText>
        <br/>
        <br/>
        <p id='bottom'></p>





      </div>
  );
  }
}

export default App;


/*

separate the trash array to be able to restore the data
    new storage created, add button to restore data and redistribute the data to their categories
    remember to delete both the trashData and individual storages

css style the page

*/