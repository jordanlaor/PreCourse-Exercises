(function (){
    'use strict';
    const readline = require('readline-sync');
    const vowels = ['a','e','i','o','u','y'];
    
    let input = readline.question('Please enter a string    ');

    for(let vowel of vowels){
        while(input.includes(vowel, 0)){
            input = input.replace(vowel, vowel.toUpperCase());
        } 
    }
    console.log(input);
})();