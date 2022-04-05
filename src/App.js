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
      <OpeningText description = "This is a placeholder until you think of something better"></OpeningText>
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
  

  //search for elements in the array with text
    //FILTERING
      //move code to different file to organize better
      //Figure out a place to put output
      //Maybe replace saved text when search has input
      //Or replace the area below text area where it shows text updating
        //if this, see if having the toggle controls button impacting this works well
      //Better style the output, looks basic and not all that great
      //Limit the number of results to 5

//Add date/time of post to each element in the array
  //try adding data to the original array in the sort array file 
    //may work better than creating a new array
    //worry about styling later, focus on getting it to work


//CSS styling and add more categories
//Better organize code
  //give each function a different file


//figure out something to do with with the placeholder text at the top


//QUESTIONS


//put each action in its own form
//do not use id selectors, use FormData and get

//change id for css in forms to classes
