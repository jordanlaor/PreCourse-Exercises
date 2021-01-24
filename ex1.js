(function (){
    'use strict';
    const input = require('readline-sync');
    let name = input.question('Hello, what\'s your name? ');
    console.log(`Hello ${name}!`);
})();