
const rollBtn = document.getElementById("playBtn");
const characterArea = document.getElementById("characterFound");
const characterText = document.getElementById("characterText");
const characterRarity = document.getElementById("characterRarity");
const characterDescription = document.getElementById("characterDescription")
const characterImage = document.getElementById("characterImage");
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

