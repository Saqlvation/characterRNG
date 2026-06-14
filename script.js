const animals = [
  // the weight is the probability to find the animal, the lesser the rarer

  // Common
  {
    name: "Pigeon",
    rarity: "common",
    weight: 60,
    color: "#aaaaaa",
    description: "a bird that lives in cities and can be lowkey annoying.. did you know they used to be our pets?"
  },
  {
    name: "Squirrel",
    rarity: "common",
    weight: 60,
    color: "#aaaaaa",
    description: "they sometimes bite, just pray they don't have rabies"
  },
  {
    name: "Rat",
    rarity: "common",
    weight: 60,
    color: "#aaaaaa",
    description: "some people keep rats as pets, NYC is full of those"
  },
  {
    name: "Chicken",
    rarity: "common",
    weight: 60,
    color: "#aaaaaa",
    description: "the bird that lays eggs, they can somehow float"
  },
  {
    name: "Crow",
    rarity: "common",
    weight: 60,
    color: "#aaaaaa",
    description: "insanely smart animal did you know some people tame them?"
  },

  // Uncommon
  {
    name: "Fox",
    rarity: "uncommon",
    weight: 30,
    color: "#4caf50",
    description: "they are cute, did you know they made a song called -what does the fox say?- "
  },
  {
    name: "Rabbit",
    rarity: "uncommon",
    weight: 30,
    color: "#4caf50",
    description: "very hard to catch."
  },
  {
    name: "Raccoon",
    rarity: "uncommon",
    weight: 30,
    color: "#4caf50",
    description: "i personally dont trust them, always around the trash cans"
  },
  {
    name: "Owl",
    rarity: "uncommon",
    weight: 30,
    color: "#4caf50",
    description: "Harry's potter pet"
  },

  // Rare
  {
    name: "Wolf",
    rarity: "rare",
    weight: 12,
    color: "#3498db",
    description: "they hunt in packs.. and howl"
  },
  {
    name: "Eagle",
    rarity: "rare",
    weight: 12,
    color: "#3498db",
    description: "Freedom!"
  },
  {
    name: "Bear",
    rarity: "rare",
    weight: 12,
    color: "#3498db",
    description: "Huge lads, i would not go close to them."
  },
  {
    name: "Dog",
    rarity: "rare",
    weight: 12,
    color: "#3498db",
    description: "man's best friend"
  },

  //Epic
  {
    name: "Tiger",
    rarity: "epic",
    weight: 5,
    color: "#9b59b6",
    description: "stealthy animal quite scary"
  },
  {
    name: "Lion",
    rarity: "epic",
    weight: 5,
    color: "#9b59b6",
    description: "the king!"
  },
  {
    name: "Panther",
    rarity: "epic",
    weight: 5,
    color: "#9b59b6",
    description: "a solitary animal only interacts in mating season!"
  },

  //Legendary 
  {
    name: "Shark",
    rarity: "legendary",
    weight: 1.5,
    color: "#f1c40f",
    description: "one of the most scary animals in the sea"
  },
  {
    name: "Griffin",
    rarity: "legendary",
    weight: 1.5,
    color: "#f1c40f",
    description: "They dont exist in our world, they guard gold an ancient belief"
  },
  {
    name: "Phoenix",
    rarity: "legendary",
    weight: 1.5,
    color: "#f1c40f",
    description: "A mythical bird! does not exist it has healing powers."
  },

  //Mythic
  {
    name: "Kraken",
    rarity: "mythic",
    weight: 0.4,
    color: "#e74c3c",
    description: "A huge sea monster, would not want to face it"
  },
  {
    name: "Unicorn",
    rarity: "mythic",
    weight: 0.4,
    color: "#e74c3c",
    description: "adorable little horn horse, very colorful "
  },

  // Secret
  // (don't ask why the cat is secret I just like cats)
  {
    name: "Tung Tung Sahur",
    rarity: "secret",
    weight: 0.02,
    color: "#000000",
    description: "the most legendary AI creation"
  },
  {
    name: "Cat",
    rarity: "secret",
    weight: 0.02,
    color: "#ffffff",
    description: "Cats are so adorable!"
  },
  {
    name: "Dragon",
    rarity: "secret",
    weight: 0.02,
    color: "#ffd700",
    description: "an ancient animal, spits out fire they say it ruled the world 4,000–7,000 years ago!"
  },
];

const totalWeight = animals.reduce((sum,animal) => sum + animal.weight, 0);
const rollBtn = document.getElementById("playBtn");
const animalArea = document.getElementById("animalFound");
const animalText = document.getElementById("animalText");
const animalRarity = document.getElementById("animalRarity");
const animalDescription = document.getElementById("animalDescription")
rollBtn.addEventListener("click", function() {
  let roll = Math.random() * totalWeight;
  let chosenAnimal;

  for(const animal of animals) {
    roll -= animal.weight;
    if(roll<=0){
      chosenAnimal=animal;
      break;
    }
  }
  animalText.textContent = chosenAnimal.name;
  animalRarity.textContent = chosenAnimal.rarity;
  animalRarity.style.color = chosenAnimal.color

  animalDescription.textContent = chosenAnimal.description;
  animalArea.style.display = "block";

  });

