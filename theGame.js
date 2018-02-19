var inquirer = require("inquirer");
var newGuess = require("./guesses.js");
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

function letter(name) {
    this.name = name;

}

letter.prototype.printinfo = function() {
    console.log("Current choices " + this.name)
};
//render question
function startGame(){
	inquirer.prompt([{
		type: "confirm",
		name: "name",
		message: "Do you want to play a game? (In the jigsaw voice)"
	}]).then(function(){
		renderQuestion();
		askQuestion();
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
    if (guessesLeft > 0)  {
        console.log("The subjects are all time good movies")

        inquirer.prompt([{
                type: "input",
                name: "name",
                message: "Guess a letter?"
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
                    	blanks[i]=choices;
                       // blanks[i] =newRender ;
                        console.log(blanks.join(""));
                        correctCounter++;
                		winLose();
                		
                    }

                }
                console.log("yes....keep going!");
               
            }else {
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
    }else{
        console.log("You lose.....you're no movie buff!!!");
    }

}

function winLose(){
	if(correctCounter === chosen.length){
		console.log("You have become my new best friend......you love movies!!!");
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