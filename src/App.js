import './App.css';
import './Responsive.css';
import OpeningText from "./OpeningText.jsx";
import UserText from "./UserText.jsx";


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
        <div  id="PHONE" class="contentBox" >
          <UserText value={phone} display="Phone Numbers" id="PHONE-DATA" class="innerContent" name="phoneData" dump={null}></UserText>
        </div>
        <div  id="INNER-LINK">
          <a href="#top" id="TOP-LINK">Top</a>
          <a href="#bottom" id="BOTTOM-LINK">Bottom</a>
        </div>
        <div id="URL" class="contentBox" >
          <UserText value={url} display="Website URLs" id="URL-DATA" class="innerContent" name="urlData"></UserText>
        </div>
        <div  id="INNER-LINK">
          <a href="#top" id="TOP-LINK">Top</a>
          <a href="#bottom" id="BOTTOM-LINK">Bottom</a>
        </div>
        <div id="PASSWORD" class="contentBox" >
          <UserText value={password} display="Passwords" id="PASSWORD-DATA" class="innerContent" name="passwordData"></UserText>
        </div>
        <div  id="INNER-LINK">
          <a href="#top" id="TOP-LINK">Top</a>
          <a href="#bottom" id="BOTTOM-LINK">Bottom</a>
        </div>
        <div id="ADDRESS" class="contentBox" >
          <UserText value={address} display="Addresses" id="ADDRESS-DATA" class="innerContent" name="addressData"></UserText>
        </div>
        <div  id="INNER-LINK">
          <a href="#top" id="TOP-LINK">Top</a>
          <a href="#bottom" id="BOTTOM-LINK">Bottom</a>
        </div>
        <div id="RECIPE" class="contentBox" >
          <UserText value={recipe} display="Recipes" id="RECIPE-DATA" class="innerContent" name="recipeData"></UserText>
        </div>
        <div  id="INNER-LINK">
          <a href="#top" id="TOP-LINK">Top</a>
          <a href="#bottom" id="BOTTOM-LINK">Bottom</a>
        </div>
        <div id="MISC" class="contentBox" >
          <UserText value={misc} display="Miscellaneous" id="MISC-DATA" class="innerContent" name="miscData"></UserText>
        </div>
        
        

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

export default App;

//PLANNING




/*


new Date().toLocalDateString();


trashcan
  Know how to give file information to alter...
  ...but not sure how to have information from file to alter

*/
