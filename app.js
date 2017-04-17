var inquirer = require("inquirer");
// var card = require('./assets/cards');
var jsonfile = require('jsonfile');
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
        when: function(answers){
            return answers.newDeck === false;
        }     
    }]).then(function(answers) {
        // call another inquire squence
        if(answers.newDeck === true){
            // proceede to createFlash()
            console.log('in the true');
            console.log(typeof Number(answers.flashCount));
            card.createFlash(Number(answers.flashCount), answers.deckName);
        }else if(answers.newDeck === !true){
            // proceede to going to the selection of deck 
        }
    });


};

deckCardCount();

// console.log(count);




// go through this to create the cars


// function createFlash(count) {
//     if (count < 2) {
//         inquirer.prompt([{
//             name: 'nodeckyes',
//             message: 'Would you like to create a new deck:',
//             type: 'list',
//             choices: ['yes', 'no'],
//             when: function(answers) {
//                 if (answers.nodeckyes === 'yes') {
//                     console.log('will be created');
//                     // set deck variable
//                 } else {
//                     console.log('current deck will be used');
//                     // use the deck variable
//                     // use the current deck
//                 }
//             }
//         }, {
//             name: 'deckname',
//             message: 'what is the subject of this deck',
//             type: 'input',
//             when: function(answers) {
//                 if (answers.nodeckyes) {
//                     deck = answers.deckname;
//                     // create the new deck
//                 }
//             }
//         }, {
//             name: 'question',
//             message: "insert the text for the flash card"
//         }, {
//             name: 'answer',
//             message: "what would you like the back of the flash card to say?"
//         }, {
//             name: 'placeholder',
//             message: "placeholder:"
//         }, {
//             name: "placeholder2",
//             message: "placeholder2?"
//         }]).then(function(answers) {
//             // initializes the variable newguy to be a programmer object which will take
//             // in all of the user's answers to the questions above
//             // console.log(card.toString());

//             var flash = new card(answers.question, answers.answer);
//             // if(count = 0){
//             //     var deckName = new 
//             // }
//             console.log(flash);
//             // var newFlash = new Card(answers.question, answers.answer, answers.placeholder, answers.placeholder2);
//             // printInfo method is run to show that the newguy object was successfully created and filled
//             //newFlash.printInfo();
//             count++;
//             cardPrompter();
//         });
//     }
// }




// time to study: please select a deck
