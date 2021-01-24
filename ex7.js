(function (){
    'use strict';
    const readline = require('readline-sync');

    //define the factorial fuction
    function factorial (number){
        let i = 1;
        let total = 1;
        while(i <= number){
            total *= i;
            i += 1;
        }
        return total;
    }
    //get a positive number from the user
    let number = -1;
    while (number <= 0){
        number = readline.questionInt('Enter a positive number  ');
    }

    //return the factorial of the number
    console.log(`${number}! = ${factorial(number)}`);
})();