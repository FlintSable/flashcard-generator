var FlashPlay = function(){
	this.cardInput = 

	};
};



var flash = function FlashCard(question, answer, placeholder, placeholder2) {
    this.question = question;
    this.answer = answer;
    this.placeholder = placeholder;
    this.placeholder2 = placeholder2;
}

// creates the printInfo method and applies it to all ClashCard objects
FlashCard.prototype.printInfo = function() {
    console.log("question: " + this.question + "\nanswer: " + this.answer + "\nplaceholder: " +
        this.placeholder + "\nplaceholder2: " + this.placeholder2);
};
