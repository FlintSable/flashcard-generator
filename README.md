# Flash Card Generator
node.js command line flash cards using inquirer

### current functionality only consists of create decks and saving them to .deck files

enter the applicaiton

```
node app.js
```

### Overview of assignment

1. **Basic** flashcards, which have a front (_"Who was the first president of the United States?"_), and a back (_"George Washington"_).

2. **Cloze-Deleted** flashcards, which present _partial_ text (_"... was the first president of the United States."_), and the full text when the user requests it (_"George Washington was the first president of the United States."_)


#### Cloze Deletions

A **cloze deletion** is simply a sentence that has had some of its text removed. For example, given the sentence:

_"George Washington was the first president of the United States."_

...We can create a "cloze deletion" by removing the words _"George Washington"_:

_"... was the first president of the United States."_

This is useful for building flash card applications that forces users to remember the important part of a sentence, and is [a common device in educational applications](https://en.wikipedia.org/wiki/Cloze_test).

A flash card built this way has three parts:

1. The **full text**. This is the entire sentence users need to remember:  _"George Washington was the first president of the United States."_

2. The **cloze deletion**. This is the text we've chosen to remove: _"George Washington"_.

3. The **partial text**. This is what we get if we remove the **cloze deletion** from the **full text**: _"... was the first president of the United States._

See below for examples as to how your constructor should behave.

### Remember

You will be fully capable of doing this homework by the end of Saturday's class.

## Instructions

* Create a new GitHub repository, named `Flashcard-Generator` or something similar. Clone this to your local drive.

* Create a `BasicCard` constructor. It should accept `front` and `back` arguments.

* Create a `ClozeCard` constructor. It should accept `text` and `cloze` arguments.

  * `ClozeCard` should have a property or method that contains or returns _only_ the cloze-deleted portion of the text.

  * `ClozeCard` should have a property or method that contains or returns _only_ the partial text.

  * `ClozeCard` should have a property or method that contains or returns _only_ the full text.

  * `ClozeCard` should throw or log an error when the cloze deletion does _not_ appear in the input text.

  * Use prototypes to attach these methods, wherever possible.

As your application will not have a front end, your only need to determine an efficient way to store cloze-deleted cards—you don't have to solve the problem of displaying them. You are free to decide how you'd like to implement this. One might represent the above flashcard thus:

The bulk of this assignment is implementing `ClozeCard`. If you build a robust `ClozeCard` implementation, feel free to try your hand at implementing a front-end, as well.