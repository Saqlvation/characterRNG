// checks which scenario to use initially
let currentScenario = 0;
let currentCharacters = scenarios[currentScenario].currentCharacters;
let totalWeight = currentCharacters.reduce((sum, item) => sum + item.weight, 0);

// getting all the elements
const rollBtn = document.getElementById("playBtn");
const characterArea = document.getElementById("characterFound");
const characterText = document.getElementById("characterText");
const characterRarity = document.getElementById("characterRarity");
const characterDescription = document.getElementById("characterDescription")
const characterImage = document.getElementById("characterImage");
const changeScenario = document.getElementById("changeScenario");
const textRoll = document.getElementById("textRolls");
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
  characterText.textContent = chosenCharacter.name;
  characterRarity.textContent = chosenCharacter.rarity;
  characterRarity.style.color = chosenCharacter.color

  characterDescription.textContent = chosenCharacter.description;
  characterImage.src = chosenCharacter.image;
  characterArea.style.display = "block";
  


  });

changeScenario.addEventListener("click", function() {
  currentScenario = (currentScenario + 1) % scenarios.length;
  currentCharacters = scenarios[currentScenario].currentCharacters;
  totalWeight = currentCharacters.reduce((sum, item) => sum + item.weight, 0);
  changeScenario.textContent = scenarios[currentScenario].name;
  characterArea.style.display = "none";
});

