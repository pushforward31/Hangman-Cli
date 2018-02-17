var inquirer = require("inquirer");
//var newGuess = require("./guesses.js");
var newGuess = ["The Matrix", "Black Panther", "Avatar", "Thor"];
var chosen;
var letterChoices = [];
var wrongletter = [];
var blanks = [];
var wins = 0;
var losses = 0;
var guessesLeft = 8;

function letter(name){
this.name = name;

}

letter.prototype.printinfo = function(){
console.log("Current choices " + this.name)};
//render question
function renderQuestion() {


    chosen = newGuess[Math.floor(Math.random() * newGuess.length)];

    for (var i = 0; i < chosen.length; i++) {
        blanks.push("_");
    }
    var newRender = blanks.textContent = blanks.join("");

    console.log(newRender);

//askQuestion()

}
////////////
//letter.prototype.printinfo = function({})
/////////////////////
function askQuestion() {
    if (guessesLeft >  0) {
        

        inquirer.prompt([
        {
        	type: "input",
            name: "name",
            message: "Guess a letter?"
        }
        ]).then(function(answers) {
       var letters = new letter(
        answers.name
        );
        letterChoices.push(letters);
        
            console.log("Letters Chosen " + letterChoices);
            console.log("You have " + guessesLeft + " guesses left....good luck!!!" + "\n");
            guessesLeft--;

            askQuestion();
        });
       // askQuestion()
    }else{
    	console.log("not working");
    }

}
////////////////

renderQuestion();
askQuestion();