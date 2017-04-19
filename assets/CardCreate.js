var inquirer = require("inquirer");
var fs = require('fs');


var Card = function(guid, question, answer) {
    this.guid = guid;
    this.text = question;
    this.answer = answer;
};

exports.createFlash = function(arg1, arg2) {
    flashy(arg1, arg2);
};


count = 0;

// get this to log out to json file
var obj = [];


function flashy(x, arg2) {
    var file = './assets/decks/' + arg2 + '.deck';
    if (count < x) {
        inquirer.prompt([{
            name: 'question',
            message: "insert the text for the flash card"
        }, {
            name: 'answer',
            message: "what would you like the back of the flash card to say?"
        }]).then(function(answers) {
            guid = arg2;
            var flash = new Card(guid + count, answers.question, answers.answer);
            count++;
            flash = JSON.stringify(flash);
            obj.push(flash);
            flashy(x, guid);
        });

    } else if (count === x) {
        fs.appendFile(file, '['+ obj + ']', function(err) {
            if (err) throw err;
            console.error(err);
        });
        inquirer.prompt([{
            name: 'study',
            message: 'would you like to study this deck',
            type: 'confirm'
        }]).then(function(answers) {
            console.log('\ntime to study');
            console.log('read the deck function');
            cardReader(file);
        });

    }

}


function cardReader(deckName) {
    fs.readFile(deckName, 'utf8', function(err, data) {
        if (err) {
            console.log(err);
        } else if (data !== null) {
        	redData = JSON.parse(data);
        	console.log(redData[1].text);
        }

    });

}



// create the deck
exports.Deck = function(deckName) {
    this.deckName = deckName;
    this.deckOut = function() {
        var outFile = './assets/decks/' + deckName + '.json';
    };
};
