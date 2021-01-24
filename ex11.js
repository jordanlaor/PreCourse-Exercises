(function (){
    'use strict';
    const readline = require('readline-sync');

    let palindrome = function (input){
        let halfLength = Math.floor(input.length/2);
        for (let i = 0, j = input.length-1; i <= halfLength; i += 1, j -= 1){
            if(input[i] != input[j]){
                return false
            }
        }
        return true;
    }

    let input = readline.question('Enter your input to check if it\'s a palindrome  ');

    if (palindrome(input.toLowerCase())){
        console.log('Your input in a palindrome!');
    }
    else {
        console.log('Your input isn\'t a palindrome');
    }
})();