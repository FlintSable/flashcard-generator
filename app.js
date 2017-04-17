var inquirer = require("inquirer");
var card = require('./assets/CardCreate');
var deck = require('./assets/DeckCreate');

// file extensions are not neccessary



// ceate cards element
// recite cards 
// first you would be prompted a question
// then you would fill the answer 
// then the full phrase should be recited

// cloze will be another constructor


// ask the user how many cards they would like to create
// process.argv[2]



// could you like to create a new deck or continue a deck 


var deckCardCount = function() {
    inquirer.prompt([{
        name: 'newDeck',
        message: 'would you like to create a new deck?',
        type: 'confirm'
    }, {
        name: 'deckName',
        type: 'input',
        message: 'What would you like the deck to be named?',
        when: function(answers) {
            return answers.newDeck === true;
        }
    },{
        name: 'flashCount',
        type: 'input',
        message: 'How many cards would you like in this deck?',
        when: function(answers){
            return answers.newDeck === true;
        }
    }, {
        name: 'deskExists',
        type: 'choices',
        message: 'select a deck to continue',
        choices: [],
        when: function(answers){
            // choces array needs to be populated with the files names from ./assets/decks/
            return answers.newDeck === false;
        }     
    }]).then(function(answers) {
        // call another inquire squence
        if(answers.newDeck === true){
           card.createFlash(Number(answers.flashCount), answers.deckName);
        }else if(answers.newDeck === false){
            // proceede to going to the selection of deck 

        }
    });


};

deckCardCount();





// time to study: please select a deck
