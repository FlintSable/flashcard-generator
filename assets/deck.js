
var CreateDeck = function(){
	console.log('deck from user module');
};


// functions are objects 
function greet(){
	console.log('hi');
}


greet.language = 'english';


module.exports.deckedout = CreateDeck();

// this cannot actually be run without arguments at the moment