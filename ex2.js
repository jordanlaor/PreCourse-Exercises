(function (){
    'use strict';
    function ten(){
        const input = require('readline-sync');
        let numbers = [];
        numbers[0] = input.questionInt('Hello, please enter the first number ');
        numbers[1] = input.questionInt('Please enter one more number ');
        let sum = numbers[0] + numbers[1];
        if(sum == 10){
            console.log('makes 10');
        }
        else{
            console.log('nope');
        }
    }
    ten();
})();