//References

const letterContainer = document.getElementById 
("letter-container");

const optionsContainer = document.getElementById
("options-container");

const userInputSection = document.getElementById
("user-input-section");

const newGameContainer = document.getElementById
("new-game-container");

const newGameButton = document.getElementById
("new-game-button");

const canvas = document.getElementById
("canvas");

const resultText = document.getElementById
("result-text");

//options for buttons

let options = {

colors: ["Lavender",
"Gold",
"Navy Blue",
"Pink",
"Green",
"Turquoise",
],

camping: ["Tent",
"Smores",
"Campfire",
"Hiking",
"Fishing",
"Picnic",
],

dogs: ["German Shepherd",
"Dalmation",
"French Bulldog",
"Golden Retriever",
"Lab",
"Pitbull",
],

food: ["Pizza",
"Chicken Nuggets",
"Burger",
"Sandwich",
"Steak",
"Waffles",
],
};

//count
let winCount = 0;
let count = 0;

let chosenWord = "";

//Display Buttons

const displayOptions = () => {
    optionsContainer.innerHTML += '<h3>Please Select a Category</h3>';
    let buttonCon = document.createElement("div");
    for (let value in options) {
    buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
    }
    optionsContainer.appendChild(buttonCon);
};

//Function (Called when page loads/user presses new game)

const initializer = () => {
    winCount = 0;
    count = 0;
    displayOptions();
};

//New Game

newGameButton.addEventListener("click", initializer);
window.onload = initializer;