import './App.css';
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
      <OpeningText description = "I hope this app will be good"></OpeningText>
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
  
  //swap between showing 5 and all of the array elements
  //search for elements in the array with text

//CSS styling and add more categories
//Better organize code
  //give each function a different file



//QUESTIONS


//put each action in its own form
//do not use id selectors, use FormData and get

//Ask about map
  //Mainly focus on filter, would like a demonstration
  //Ask if you can map through a specific number of entires in the array instead of all

//change id for css in forms to classes

