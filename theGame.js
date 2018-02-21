var inquirer = require("inquirer");
var newGuess = require("./guesses.js");
var isLetter = require('is-letter');
var hello = require('./function.js');
hello();
//var newGuess = ["gladiator", "titanic", "avatar", "braveheart", "jaws", "rocky"];
var chosen;
var letterChoices = [];
var wrongletter = [];
var blanks = [];
var wins = 0;
var losses = 0;
var guessesLeft = 8;
var newRender;
var correctCounter = 0;
var gameOver = false;

function letter(name) {
    this.name = name;

}

letter.prototype.printinfo = function() {
    console.log("Current choices " + this.name)
};
//render question
function startGame() {
    inquirer.prompt([{
        type: "confirm",
        name: "start",
        message: "Do you want to play a game? (In the jigsaw voice)",

    }]).then(function(answer) {
        if (answer.start) {
            renderQuestion();
            askQuestion();
        } else {
            console.log("Well alrighty then loser!")
            // return;
        }
    });

}

function renderQuestion() {


    chosen = newGuess[Math.floor(Math.random() * newGuess.length)];

    for (var i = 0; i < chosen.length; i++) {
        blanks.push("_");
    }
    newRender = blanks.textContent = blanks.join("");

    console.log(newRender);

    //askQuestion()

}
////////////
//letter.prototype.printinfo = function({})
/////////////////////
function askQuestion() {
    if (guessesLeft > 0 && gameOver == false) {
        console.log("The subjects are all time good movies")

        inquirer.prompt([{
                type: "input",
                name: "name",
                message: "Guess a letter?",
                validate: isLetter
            }

        ]).then(function correctAnswer(answers) {
            var letters = new letter(
                answers.name
            );

            var choices = answers.name;
            letterChoices.push(choices);

            //console.log(newRender);
            if (chosen.indexOf(choices) > -1) {
                for (var i = 0; i < chosen.length; i++) {
                    if (chosen[i] === choices) {
                        blanks[i] = choices;
                        // blanks[i] =newRender ;
                        
                        correctCounter++;
                        console.log("CorrectCount: " + correctCounter + " / " + chosen.length);
                        winLose();

                    }

                }
                console.log(blanks.join(""));
                console.log("yes....keep going!");

            } else {
                console.log(blanks.join(""));
                console.log("incorrect..try again!");
                guessesLeft--;

                //correctAnswer();


                console.log("You have " + guessesLeft + " guesses left....good luck!!!")

            }
            console.log("Letters Chosen " + letterChoices);
            askQuestion();



        });


        //   correctAnswer();
        // askQuestion()
    } else {
    	if ( guessesLeft > 0 ) {
    		console.log("You have become my new best friend......you love movies!!!");
        	console.log("NOW CHOOSE THE LETTER Z UNTIL PROMPTED");
    	} else {
	        console.log("You lose.....you're no movie buff!!!");
    	    console.log("You're out of guesses, the correct word " + chosen + "\n");
    	}
        gameRestart();
    }

}

function gameRestart() {
	blanks = [];
	chosen = "";
	gameOver = false;
	guessesLeft = 8;
	correctCounter = 0;
	letterChoices = [];
    inquirer.prompt([{
        type: "confirm",
        name: "end",
        message: "Would you like to play again?"
    }]).then(function(answer) {
        if (answer.end) {
            // renderQuestion();
            // askQuestion();
            startGame();
        } else {
            console.log("I guess were done here!!")
            return;
        }

    });

}

function winLose() {
    if (correctCounter === chosen.length) {
        gameOver = true;
        //startGame();

    }


}

startGame();

//renderQuestion();
//askQuestion();

/*function(answers) {
       var letters = new letter(
        answers.name
        );
        
        var choices = answers.name;
        letterChoices.push(choices);

        //console.log(newRender);
        
        correctAnswer();
        
            console.log("Letters Chosen " + letterChoices);
            console.log("You have " + guessesLeft + " guesses left....good luck!!!" + "\n")
            
            guessesLeft--;
            
            askQuestion();
            

        });
*/