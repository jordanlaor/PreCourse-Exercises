(function (){
    'use strict';
    const readline = require('readline-sync');
    let input = readline.question('Hello, enter a sentence  ');
    console.log(input.split(' ').join('*'));
})();