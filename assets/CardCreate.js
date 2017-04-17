var inquirer = require("inquirer");

var Card = function(question, answer) {
    this.cardInput = question;
    this.answer = answer;
};

exports.createFlash = function(arg1) {
	count = 0;
	totalCards = arg1;
    if (count < totalCards) {
        inquirer.prompt([{
            name: 'question',
            message: "insert the text for the flash card"
        }, {
            name: 'answer',
            message: "what would you like the back of the flash card to say?"
        }, {
            name: 'placeholder',
            message: "placeholder:"
        }, {
            name: "placeholder2",
            message: "placeholder2?"
        }]).then(function(answers) {
            // initializes the variable newguy to be a programmer object which will take
            // in all of the user's answers to the questions above
            // console.log(card.toString());

            var flash = new Card(answers.question, answers.answer);

            console.log(flash);
            // var newFlash = new Card(answers.question, answers.answer, answers.placeholder, answers.placeholder2);
            // printInfo method is run to show that the newguy object was successfully created and filled
            //newFlash.printInfo();
            count++;
            createFlash();
        });
    }
};





exports.Toast = function(arg){
	console.log(arg);
};




// create the cards put them into the deck




// create the deck
exports.Deck = function(deckName) {
    this.deckName = deckName;
    this.deckOut = function() {
        var outFile = './assets/decks/' + deckName + '.json';
    };
};






















// module.exports = {Card, Deck} ;s
