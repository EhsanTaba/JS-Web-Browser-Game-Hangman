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
"Blue",
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
"Frenchie",
"Golden Retriever",
"Lab",
"Pitbull",
],

food: ["Pizza",
"Nuggets",
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

//blocking the buttons
const blocker = () => {
    let optionsButtons = document.querySelectorAll(".options");
    let letterButtons = document.querySelectorAll(".letters");

//options disabled
optionsButtons.forEach((button) => {
    button.disabled = true;
});

//letters disabled
letterButtons.forEach((button) => {
    button.disabled.true;
});
newGameContainer.classList.remove("hide");
};

//Generation of the words
const generateWord = (optionValue) => {
    let optionsButtons = document.querySelectorAll(".options");

//If optionValue the button innerText then highlight the button
optionsButtons.forEach((button) =>{
    if (button.innerText.toLowerCase() === optionValue) {
        button.classList.add("active");
    }
button.disabled = true;
});

//hide letters in the begining, and clear the previous word
letterContainer.classList.remove("hide");
userInputSection.innerText = "";

let optionArray = options[optionValue];

//random word chooser
chosenWord = optionArray[Math.floor(Math.random
    () *  optionArray.length )];
    chosenWord = chosenWord.toUpperCase();
   console.log(chosenWord);
};

//Function (Called when page loads/user presses new game)

const initializer = () => {
    winCount = 0;
    count = 0;

//Createe letter buttons
for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");

    //string.fromCharCode() is a string method to create a string from a 
//unicode(letter symbols and didgits that have its own unicode)sequence.(source is w3schools)
button.innerText = String.fromCharCode(i);
letterContainer.append(button);
}

    displayOptions();
};

//New Game

newGameButton.addEventListener("click", initializer);
window.onload = initializer;