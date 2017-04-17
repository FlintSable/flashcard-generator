var inquirer = require("inquirer");
var jsonfile = require('jsonfile');
var fs = require('fs');


var Card = function(guid, question, answer) {
    this.guid = guid;
    this.cardInput = question;
    this.answer = answer;
};

exports.createFlash = function(arg1, arg2) {
    flashy(arg1, arg2);
            
};
count = 0;

// get this to log out to json file
var obj = [];
function flashy(x, arg2) {
	var file = './assets/decks/'+ arg2 + '.json';
	

    if (count < x) {
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
            guid = arg2;
            var flash = new Card(guid + count, answers.question, answers.answer);
            count++;
            flash = JSON.stringify(flash);
            obj.push(flash+ '\n');
            flashy(x, guid);
        });
    }
    else{

    	fs.appendFile(file, obj), function(err) {
  			console.error(err);
			};
    }

}




// create the deck
exports.Deck = function(deckName) {
    this.deckName = deckName;
    this.deckOut = function() {
        var outFile = './assets/decks/' + deckName + '.json';
    };
};
