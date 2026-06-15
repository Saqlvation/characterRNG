// checks which scenario to use initially
let currentScenario = 0;
let currentCharacters = scenarios[currentScenario].currentCharacters;
let totalWeight = currentCharacters.reduce((sum, item) => sum + item.weight, 0);
// change background
document.body.style.backgroundColor = scenarios[currentScenario].background;
// getting all the elements
const rollBtn = document.getElementById("playBtn");
const characterArea = document.getElementById("characterFound");
const characterText = document.getElementById("characterText");
const characterRarity = document.getElementById("characterRarity");
const characterDescription = document.getElementById("characterDescription")
const characterImage = document.getElementById("characterImage");
const changeScenario = document.getElementById("changeScenario");
const textRoll = document.getElementById("textRolls");


let rollHistory = []; // array to keep track of all our rolls
rollBtn.addEventListener("click", function() {
  
  let roll = Math.random() * totalWeight;
  let chosenCharacter;
  

  for(const character of currentCharacters) {
    roll -= character.weight;
    if(roll<=0){
      chosenCharacter=character;
      break;
    }
  }
  // we set all texts and colors to the HTML objects
  characterText.textContent = chosenCharacter.name;
  characterRarity.textContent = chosenCharacter.rarity;
  characterRarity.style.color = chosenCharacter.color

  characterDescription.textContent = chosenCharacter.description;
  characterImage.src = chosenCharacter.image;
  characterArea.style.display = "block";
  

  // start of array handling
  // adds all rolls to the front od the array so to the 0 index
  rollHistory.unshift(chosenCharacter.name + " " + chosenCharacter.rarity)

  // we make sure to check if the array gets too big(since it would get out of the page)
  if(rollHistory.length > 10){
    rollHistory.pop(); // pop deletes the last index contents
  }

  // we display everything in the latest rolls
  textRoll.innerHTML = rollHistory.join("<br>");


  });

changeScenario.addEventListener("click", function() {
  currentScenario = (currentScenario + 1) % scenarios.length;
  currentCharacters = scenarios[currentScenario].currentCharacters;
  totalWeight = currentCharacters.reduce((sum, item) => sum + item.weight, 0);
  changeScenario.textContent = scenarios[currentScenario].name;
  characterArea.style.display = "none"; 
  // change background
  document.body.style.backgroundColor = scenarios[currentScenario].background;
});

