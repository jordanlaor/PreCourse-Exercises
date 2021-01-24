(function (){
    'use strict';
    //requires
    const figlet = require('figlet');
    const randomWords = require('random-words');
    const readline = require('readline-sync');

    //functions
    //callback function for figlet. Prints title and then runs guessAChar and prints the relevant message
    function callBackFunction(err, data){
        if (err){
            console.log('Hang Man');
        }
        console.log(data);
        guessAChar();
        //if the user discovered the whole word
        if(displayedWord.join('') == word){
            console.log(`Wow! You are good!\nYou are right, the word is ${word}`);
        }
        //if the user didn't managed to discover the whole word
        else{
            console.log('You have no more attempts');
            console.log(`The secret word is ${word}`);
        }
    }


    //guess a character function- runs a turn
    function guessAChar (){
        //if the user guessed wrong less than 10 times and didn't guessed the whole word
        if(guesses.bad.length < 10 && word != displayedWord.join('')){
            //prints out the number of attempts left and the secret word (example: **l* for hole). Then gets the new guess as a string.
            console.log(`You have ${10-guesses.bad.length} guesses left`);
            console.log(`The word is:\n${displayedWord.join('')}`);
            let guess = (readline.question('What is your guess?\n')).toLowerCase();
            //if the guess is either 1 char or the secret word's length
            if (guess.length == word.length || guess.length == 1){
                //checks if the word contains chars other than ABC chars
                if (!/^[a-z]+$/.test(guess)){
                    console.log('The input is invalid');
                    guessAChar();
                }
                //check if the user already tried to guess his current guess
                if(guesses.all.includes(guess)){
                    console.log(`You already tried ${guess}`);
                    guessAChar();
                }
                //adds the current guess to the array of all the valid guesses
                guesses.all.push(guess);
                //if the guess doesn't appear in the secret word, add the current guess to the bad guesses array
                if (!word.includes(guess)){
                    guesses.bad.push(guess);
                    guessAChar();
                }
                //if the guess appear in the secret word
                else {
                    //if the guess is 1 char long replaces all of the asterisks that represents the guess is replaced with the letter
                    if (guess.length == 1){
                        for (let index in word){
                            if(word[index] == guess){
                                displayedWord[index] = word [index];
                            }
                        }
                    }
                    //the user successfully guessed the whole word, and all of the asterisks are replaces by the whole word
                    else {
                        if (guess == word){
                            displayedWord = word.split('');
                        }
                    }
                    guessAChar();
                }

            }
            //if the guess isn't 1 char and not the secret word's length 
            else {
                console.log('The input is invalid');
                guessAChar();
            }
        }
        //if the number of bad attempts are 10 or more and the user didn't discover the whole word return false
        else if (guesses.bad.length >= 10 && word != displayedWord.join('')){
            return false;
        }
        //the user discovered the whole word, returns true
        else {
            return true;
        }
    }

    //welcome message
    //randomize the font
    let fonts = {
        options: ['Fun Faces', 'Acrobatic', 'Small Keyboard'],
        chosen: 0
    };
    fonts.chosen = fonts.options[Math.floor(Math.random() * fonts.options.length)];
    figlet ('HANG MAN', {font: fonts.chosen}, callBackFunction);
    
    //randomise a word
    const word = randomWords();
    //builds an asterisks covered word
    let displayedWord = [];
    for (let i in word){
        displayedWord.push('*');
    }
    const guesses = {all: [], bad: []};
})();