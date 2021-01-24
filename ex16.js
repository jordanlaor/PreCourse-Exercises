(function (){
    'use strict';
    function reverseArray(arr){
        return arr.reverse();
    }
    const readline = require('readline-sync');
    let arrayLength = 0;
    while (arrayLength <= 0){
        arrayLength = readline.questionInt('Enter the length of the array ');
    }
    let userArrray = [];
    while (userArrray.length < arrayLength){
        userArrray.push(readline.questionInt('Enter a number    '));
    }
    console.log(reverseArray(userArrray));
})();