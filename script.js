const animals = [
    // the weight is the probability to find the animal, the lesser the rarer
    // Common 
  { name: "Pigeon",   rarity: "common", weight: 60, color: "#aaaaaa" },
  { name: "Squirrel", rarity: "common", weight: 60, color: "#aaaaaa" },
  { name: "Rat",      rarity: "common", weight: 60, color: "#aaaaaa" },
  { name: "Chicken",  rarity: "common", weight: 60, color: "#aaaaaa" },
  { name: "Crow",     rarity: "common", weight: 60, color: "#aaaaaa" },

  // Uncommon 
  { name: "Fox",      rarity: "uncommon", weight: 30, color: "#4caf50" },
  { name: "Rabbit",   rarity: "uncommon", weight: 30, color: "#4caf50" },
  { name: "Raccoon",  rarity: "uncommon", weight: 30, color: "#4caf50" },
  { name: "Owl",      rarity: "uncommon", weight: 30, color: "#4caf50" },

  // Rare 
  { name: "Wolf",     rarity: "rare", weight: 12, color: "#3498db" },
  { name: "Eagle",    rarity: "rare", weight: 12, color: "#3498db" },
  { name: "Bear",     rarity: "rare", weight: 12, color: "#3498db" },
  { name: "Dog",     rarity: "rare", weight: 12, color: "#3498db" },

  // Epic
  { name: "Tiger",    rarity: "epic", weight: 5, color: "#9b59b6" },
  { name: "Lion",     rarity: "epic", weight: 5, color: "#9b59b6" },
  { name: "Panther",  rarity: "epic", weight: 5, color: "#9b59b6" },

  // Legendary
  { name: "Dragon",   rarity: "legendary", weight: 1.5, color: "#f1c40f" },
  { name: "Griffin",  rarity: "legendary", weight: 1.5, color: "#f1c40f" },
  { name: "Phoenix",  rarity: "legendary", weight: 1.5, color: "#f1c40f" },

  // Mythic
  { name: "Kraken",   rarity: "mythic", weight: 0.4, color: "#e74c3c" },
  { name: "Unicorn",  rarity: "mythic", weight: 0.4, color: "#e74c3c" },

  // Secret, dont ask me why the cat is a secret. i just like cats.
  { name: "Tung Tung Sahur",        rarity: "secret", weight: 0.02, color: "#000000" },
  { name: "Cat", rarity: "secret", weight: 0.02, color: "#ffffff" },
  { name: "Dragon",     rarity: "secret", weight: 0.02, color: "#ffd700" },
];