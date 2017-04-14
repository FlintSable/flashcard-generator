function FlashCard(question, answer, age, language) {
  this.question = question;
  this.answer = answer;
  this.age = age;
  this.language = language;
}

// creates the printInfo method and applies it to all ClashCard objects
FlashCard.prototype.printInfo = function() {
  console.log("Name: " + this.name + "\nPosition: " + this.position + "\nAge: " +
  this.age + "\nLanguages: " + this.language);
};
