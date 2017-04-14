var inquirer = require("inquirer");
var card = require('./assets/cards');


count = 0;

function CardApp() {
    if (count < 2) {
        inquirer.prompt([{
            name: "name",
            message: "What is your name?"
        }, {
            name: "position",
            message: "What is your current position?"
        }, {
            name: "age",
            message: "How old are you?"
        }, {
            name: "language",
            message: "What is your favorite programming language?"
        }]).then(function(answers) {
            // initializes the variable newguy to be a programmer object which will take
            // in all of the user's answers to the questions above
            var newGuy = new FlashCard(answers.name, answers.position, answers.age, answers.language);
            // printInfo method is run to show that the newguy object was successfully created and filled
            newGuy.printInfo();
            count++;
            prompter();
        });
    }
}

CardApp();
