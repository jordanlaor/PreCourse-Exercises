(function (){
    'use strict';
    const readline = require('readline-sync');
    let length = 0;

    while(length <= 0){
        length = readline.questionInt('Enter the length of the array    ');
    }
    let numbersArray = [];
    for (let i = 0; i < length; i += 1){
        numbersArray.push(Math.floor(Math.random()*50)+1);
    }
    const min = Math.min(...numbersArray);
    const max = Math.max(...numbersArray);
    console.log('min is ' + min + '\nmax is ' + max);
})();