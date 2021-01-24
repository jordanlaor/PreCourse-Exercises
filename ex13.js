(function (){
    'use strict';
    function countABC(word){
        let counter = 0;
        word = String(word).toLowerCase();
        for(let char of word){
            if(char >= 'a' && char <= 'z'){
                counter += 1;
            }
        }
        return counter;
    }
    const readline = require('readline-sync');
    let input = readline.question('Enter a string   ');

    let words = input.split(' ');
    const longestWord = {
        index: [0],
        length: countABC(words[0])
    };
    for (let index = 1; index < words.length; index += 1) {
        if(countABC(words[index]) > longestWord.length){
            longestWord.index = [index];
            longestWord.length = countABC(words[longestWord.index[0]]);
        }
        else if(countABC(words[index]) == longestWord.length){
            longestWord.index.push(index);
        }
    }
    if (longestWord.length != 0){
        for (let i of longestWord.index){
        console.log(words[i]);
    }
    }
    else {
        console.log('You didn\'t enter any ABC characters');
    }
})();