import logo from './logo.svg';
import './App.css';
import TestHi from "./TestHi.jsx";
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
      <TestHi description = "I hope this app will be good"></TestHi>
      <div id = "USER-CONTENT">
        <div  id="PHONE" class="contentBox" >
        <UserText value={phone} display="Phone Numbers" id="PHONE-DATA" class="innerContent" name="phoneData"></UserText>
          </div>
          <div id="URL" class="contentBox" >
          <UserText value={url} display="Website URLs" id="URL-DATA" class="innerContent" name="urlData"></UserText>
        </div>
        <div id="PASSWORD" class="contentBox" >
          <UserText value={password} display="Passwords" id="PASSWORD-DATA" class="innerContent" name="passwordData"></UserText>
        </div>
        <div id="ADDRESS" class="contentBox" >
          <UserText value={address} display="Addresses" id="ADDRESS-DATA" class="innerContent" name="addressData"></UserText>
        </div>
        <div id="RECIPE" class="contentBox" >
          <UserText value={recipe} display="Recipes" id="RECIPE-DATA" class="innerContent" name="recipeData"></UserText>
        </div>
        <div id="MISC" class="contentBox" >
          <UserText value={misc} display="Miscellaneous" id="MISC-DATA" class="innerContent" name="miscData"></UserText>
        </div>
      </div>
    </div>
  );
}

export default App;

//PLANNING

//better format each entry

//The four actions at the bottom of each section
  //Clear local storage
  //swap between showing 5 and all of the array elements
  //search for elements in the array with text
  //delete elements in the array by its given number

//CSS styling and add more categories