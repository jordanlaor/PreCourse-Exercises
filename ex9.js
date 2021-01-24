(function (){
    'use strict';
    const readline = require('readline-sync');
    let primes = [2];

    //check if a number is prime
    function isPrime(number){
        for (let prime of primes){
            if (number % prime == 0){
                return false;
            }
        }
        primes.push(number);
    }

    //get a number from the user that is greater or equals to 2
    let number = 0;
    while(number < 2){
        number = readline.questionInt('Enter a number greater than 1 to check if it\'s a prime  ');
    }
    // 0 and 1 are not primes and 2 is already in primes so it doesn't need to be checked
    for (let i = 3; i <= number; i += 1){
        isPrime(i);
    }
    console.log(primes.join(', '));
})();