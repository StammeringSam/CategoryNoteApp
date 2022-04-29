import './App.css';
import './Responsive.css';
import OpeningText from "./OpeningText.jsx";
import UserText from "./UserText.jsx";
import Trash from "./Trash.jsx";



//load local storage
let phone = localStorage.getItem('phoneData')? localStorage.getItem('phoneData').split('&#11088') : [];
let password = localStorage.getItem('passwordData')? localStorage.getItem('passwordData').split('&#11088') : [];
let url = localStorage.getItem('urlData')? localStorage.getItem('urlData').split('&#11088') : [];
let address = localStorage.getItem('addressData')? localStorage.getItem('addressData').split('&#11088') : [];
let recipe = localStorage.getItem('recipeData')? localStorage.getItem('recipeData').split('&#11088') : [];
let misc = localStorage.getItem('miscData')? localStorage.getItem('miscData').split('&#11088') : [];

function App() {
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
          <UserText value={phone} display="Phone Numbers" id="PHONE-DATA" className="innerContent" name="phoneData"></UserText>
        </div>
        <div  id="INNER-LINK">
          <a href="#top" id="TOP-LINK">Top</a>
          <a href="#bottom" id="BOTTOM-LINK">Bottom</a>
        </div>
        <div id="URL" className="contentBox" >
          <UserText value={url} display="Website URLs" id="URL-DATA" className="innerContent" name="urlData"></UserText>
        </div>
        <div  id="INNER-LINK">
          <a href="#top" id="TOP-LINK">Top</a>
          <a href="#bottom" id="BOTTOM-LINK">Bottom</a>
        </div>
        <div id="PASSWORD" className="contentBox" >
          <UserText value={password} display="Passwords" id="PASSWORD-DATA" className="innerContent" name="passwordData"></UserText>
        </div>
        <div  id="INNER-LINK">
          <a href="#top" id="TOP-LINK">Top</a>
          <a href="#bottom" id="BOTTOM-LINK">Bottom</a>
        </div>
        <div id="ADDRESS" className="contentBox" >
          <UserText value={address} display="Addresses" id="ADDRESS-DATA" className="innerContent" name="addressData"></UserText>
        </div>
        <div  id="INNER-LINK">
          <a href="#top" id="TOP-LINK">Top</a>
          <a href="#bottom" id="BOTTOM-LINK">Bottom</a>
        </div>
        <div id="RECIPE" className="contentBox" >
          <UserText value={recipe} display="Recipes" id="RECIPE-DATA" className="innerContent" name="recipeData"></UserText>
        </div>
        <div  id="INNER-LINK">
          <a href="#top" id="TOP-LINK">Top</a>
          <a href="#bottom" id="BOTTOM-LINK">Bottom</a>
        </div>
        <div id="MISC" className="contentBox" >
          <UserText value={misc} display="Miscellaneous" id="MISC-DATA" className="innerContent" name="miscData"></UserText>
        </div>
        
        

      </div>
      <br/>
      <br/>
      <Trash></Trash>
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

export default App;

//PLANNING




/*


new Date().toLocalDateString();


trashcan
  Know how to give file information to alter...
  ...but not sure how to have information from file to alter

  





  import use state on App.js and switch pages like that
  import the page
  set up a function to have a condition to change pages
  
*/


