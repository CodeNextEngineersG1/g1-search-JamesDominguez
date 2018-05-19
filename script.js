/* write your script here */
let searchBar=document.getElementById('search-bar');
let searchButton=document.getElementById('search-search-button');
let autoSuggestions=document.getElementById('auto-suggestions');
let display=document.getElementById('display');
searchBar.addEventListener("keypress", checkKey);
searchButton.addEventListener("click", processInput);

function checkKey(e) {
  var key = e.which || e.keyCode;
  if(key == 13) {
  //  console.log(“You pressed enter!”);
  processInput();
  }
}
function processInput(){
  let cleanedInput=searchBar.value.toLowerCase().trim()
}

function getRecord(cleanedInput){
  for(let i=o; i<database.length; i++){
  let cleanedRecordName = database[i].name.toLowerCase().trim();
  if(cleanedInput==cleanedRecordName){
    return database][i];
  }
  }
  return null;
}
}

let database=[
  {
  name:"kevin Durant",
  team:"warriors",
  ppg:"27.1",
  college:"University of Texas at Austin",
  position:"Small Forward and Shooting Guard and Power Forward"
},
{
  name:"Giannis Antetokounmpo",
  team:"Milwaukee Bucks",
  ppg:"17.2",
  college:"N/A",
  position:"Small Forward and Shooting Guard and Power Forward and Point Guard"
},
{
  name:"Kyrie Irving",
  team:"Boston Celtics"
  ppg:"22.0",
  college:"Duke University",
  position:"Point Guard"
},
{
  name:"Anthony Davis",
  team:"New Orleans Pelicans",
  ppg:"23.4",
  college:"University of Kentucky",
  position:"Power Forward and Center",
},
{
  name:"Joel Embiid",
  team:"Philadelphia 76ers",
  ppg:"22.0",
  college:"University of Kansas",
  position:"Center",
}

];
