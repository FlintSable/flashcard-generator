var inquirer = require("inquirer");

var Card = function(guid, question, answer) {
    this.guid = guid;
    this.cardInput = question;
    this.answer = answer;
};

exports.createFlash = function(arg1, arg2) {
    count = 0;
    deckName = arg2;
    flashy(arg1, arg2);

    // function flashy(x) {

    //     if (count < x) {
    //         inquirer.prompt([{
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
    //             guid = arg2;
    //             var flash = new Card(guid, answers.question, answers.answer);
    //             count++;
    //             console.log(flash);
    //         });





    //     }

    //}
};
count = 0;

function flashy(x, arg2) {
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
            var flash = new Card(guid, answers.question, answers.answer);
            count++;
            console.log(count);
            flashy(x, guid);
        });



    }

}

// create the deck
exports.Deck = function(deckName) {
    this.deckName = deckName;
    this.deckOut = function() {
        var outFile = './assets/decks/' + deckName + '.json';
    };
};
