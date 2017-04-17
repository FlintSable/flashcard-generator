var inquirer = require("inquirer");


exports.createFlash = function(arg1) {
	count = 0;
	totalCards = arg1;
    if (count < totalCards) {
        inquirer.prompt([{
            name: 'nodeckyes',
            message: 'Would you like to create a new deck:',
            type: 'list',
            choices: ['yes', 'no'],
            when: function(answers) {
                if (answers.nodeckyes === 'yes') {
                    console.log('will be created');
                    // set deck variable
                } else {
                    console.log('current deck will be used');
                    // use the deck variable
                    // use the current deck
                }
            }
        }, {
            name: 'deckname',
            message: 'what is the subject of this deck',
            type: 'input',
            when: function(answers) {
                if (answers.nodeckyes) {
                    deck = answers.deckname;
                    // create the new deck
                }
            }
        }, {
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

            var flash = new card(answers.question, answers.answer);
            // if(count = 0){
            //     var deckName = new 
            // }
            console.log(flash);
            // var newFlash = new Card(answers.question, answers.answer, answers.placeholder, answers.placeholder2);
            // printInfo method is run to show that the newguy object was successfully created and filled
            //newFlash.printInfo();
            count++;
            cardPrompter();
        });
    }
};

exports.Toast = function(arg){
	console.log(arg);
};




// create the cards put them into the deck
exports.Card = function(question, answer) {
    this.cardInput = question;
    this.answer = answer;
};



// create the deck
exports.Deck = function(deckName) {
    this.deckName = deckName;
    this.deckOut = function() {
        var outFile = './assets/decks/' + deckName + '.json';
    };
};






















// module.exports = {Card, Deck} ;s
