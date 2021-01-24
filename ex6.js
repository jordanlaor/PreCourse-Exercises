(function (){
    'use strict';
    const input = require('readline-sync');
    let num = 0;
    while(num <= 10)
        num = input.questionInt('please choose a number larger than 10  ');
    console.log('Thank you!');
})();