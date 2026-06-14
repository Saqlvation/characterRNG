const scenarios = [
    {name : "Animals", currentCharacters: animals}
]
let currentScenario = 0;
let currentCharacters = scenarios[currentScenario].currentCharacters;
let totalWeight = currentCharacters.reduce((sum, item) => sum + item.weight, 0);