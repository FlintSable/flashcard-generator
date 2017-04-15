var inquirer = require("inquirer");
var card = require('./assets/cards');

// ceate cards element
// recite cards 
// first you would be prompted a question
// then you would fill the answer 
// then the full phrase should be recited


// ask the user how many cards they would like to create
// process.argv[2]
count = 0;

function cardPrompter() {
    if (count < 2) {
        inquirer.prompt([{
            name: "question",
            message: "insert the text for the flash card"
        }, {
            name: "answer",
            message: "what would you like the back of the flash card to say?"
        }, {
            name: "placeholder",
            message: "placeholder:"
        }, {
            name: "placeholder2",
            message: "placeholder2?"
        }]).then(function(answers) {
            // initializes the variable newguy to be a programmer object which will take
            // in all of the user's answers to the questions above
            var newFlash = new FlashCard(answers.question, answers.answer, answers.placeholder, answers.placeholder2);
            // printInfo method is run to show that the newguy object was successfully created and filled
            newFlash.printInfo();
            count++;
            cardPrompter();
        });
    }
}

cardPrompter();
