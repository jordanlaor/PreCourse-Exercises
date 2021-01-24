(function (){
    'use strict';
    const input = require('readline-sync');
    //each q_a contains the question, an array of 4 answers and the score of each answer in the array,
    // the score of answer[0] is at score[0]
    let q_a0 = {que: 'You see an old lady with some shopping bags walking home', answer: ['I\'m calling her a cab', 'I wish I could help, I\'m late for work', 'She\'s not that old...', 'I\'m leaving everything and walking her home!'], score: [20 , 10 , 0 , 30]};
    let q_a1 = {que: 'What\'s your relationship with your neighbors?', answer: ['My neighbor is a creep', 'They are my BFF!', 'We exchnge are hellos but nothing more', 'I\'m married to mine'], score: [0 , 20 , 10, 30]};
    let q_a2 = {que: 'You see a letter that\'s addressed to someone else', answer: ['Oh, It wasn\'t for me? Oooops?', 'Interesting, but I would never!', 'I couldn\'t care less, it\'s non of my business', 'I read it, Obviously'], score: [10,20,30,0]};
    let q_a3 = {que: 'You walk the street, when suddenly you spot 5,000 NIS on the floor', answer: ['I have no idea where it came from, I should put it to good use', 'I hand it over to the police and post on social media trying to get to the owner', 'It\'s shopping time!!', 'I keep walking'], score: [10 , 30 ,0 ,20]};
    let q_a4 = {que: 'When is the last time you told a little white lie?', answer: ['In the last week', 'Probably some time in the last year...', 'Just now', 'Me? I believe in the brutal truth'], score: [10 , 20 , 0 , 30]};
    let scoreSum = 0;
    
    function answer(queNum, q_a){
        let ans;
        console.log(`\nQuestion #${queNum}:\n============================================\n`);
        ans = input.keyInSelect(q_a.answer, q_a.que, {cancel: false});
        scoreSum += q_a.score[ans];
    }

    console.log('\n\nHello! Welcome to the quiz "Are you an angel?"\n\nLet\'s start!\n');
    
    //first question
    answer(1,q_a0);

    //second question
    answer(2,q_a1);

    //third question
    answer(3,q_a2);

    //fourth question
    answer(4,q_a3);

    //fifth question
    answer(5,q_a4);

    //results
    console.log(`\n\n\nQuiz Results!\n============================================\n`);
    if(scoreSum <= 30){
        console.log(`You are the devil himself!`);
    }
    else if(scoreSum <= 70){
        console.log(`You are no saint`);
    }
    else if(scoreSum <= 110){
        console.log(`You are pretty nice, but not an angel...`);
    }
    else if(scoreSum <= 150){
        console.log(`You are a true angel!`);
    }
})();