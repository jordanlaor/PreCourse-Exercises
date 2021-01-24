
'use strict';
const readline = require('readline-sync');
const figlet = require('figlet');
const deck = {signs: ['\u2660', '\u2663', '\u2665', '\u2666'], sign: ''};
let end = false;

function roundSingleplayerMode(){
    placeBet(player1);
    if(end){
        return;
    }
    drawCards();
    if (player1.funds <= 0){
        console.log('You are broke... Bye bye');
        end = true;
        return;
    }
    let anotherRound;
    do {
        anotherRound = readline.questionInt(`What would you like to do?\n1. play another round!\n2. leave with my money...\n`, {limitMessage: 'Please select 1 or 2'});
    } while(anotherRound !=1 && anotherRound != 2);
    if (anotherRound == 1){
        roundSingleplayerMode();
    }
    else {
        console.log(`You got ${player1.funds} ILS left. Bye!`);
    }
}

function roundMultiplayerMode(){
    placeBet(player1);
    if(end){
        return;
    }
    placeBet(player2);
    if (end){
        return;
    }
    drawCards();
    if (player1.funds <= 0){
        console.log(`${player1.name} is broke... Bye bye`);
        end = true;
        return;
    }
    if (player2.funds <= 0){
        console.log(`${player2.name} is broke... Bye bye`);
        end = true;
        return;
    }
    let anotherRound;
    do{
        anotherRound = readline.questionInt(`What would you like to do?\n1. play another round!\n2. leave with our money...\n`, {limitMessage: 'Please select 1 or 2'});
    } while (anotherRound != 1 && anotherRound != 2);
    if (anotherRound == 1){
        roundMultiplayerMode();
    }
    else {
        console.log(`${player1.name} got ${player1.funds} ILS left and ${player2.name} got ${player2.funds}. Bye!`);
    }
}

function placeBet(player){
    let bet = readline.questionInt(`${player.name} place your bet for the next round: 1 to ${player.funds}\n`);
    if (bet < 1){
        console.log(`Placing a bet of ${bet} is not allowed. Bye!!!`);
        end = true;
        return;
    }
    else if (bet > player.funds){
        console.log(`You can't place a bet of ${bet} ILS when you only have ${player.funds}! Bye!!!`);
        end = true;
        return;
    }
    player.bet = bet;
}

function randomCard(){
    return (Math.floor(Math.random()*12)+1);
}

function drawCards(){
    if(multiplayerMode){
        player1.card = randomCard();
        player2.card = randomCard();
        if(player1.card == player2.card){
            console.log(`You both drew a ${player1.card}${deck.sign}, It's a tie, draw again`);
            drawCards();
        }
        else if (player1.card > player2.card){
            player1.funds += player1.bet;
            player2.funds -= player2.bet;
            console.log(`${player1.name} drew a ${player1.card}${deck.sign} and ${player2.name} drew a ${player2.card}${deck.sign}\n${player1.name} won ${player1.bet} ILS and now has ${player1.funds} ILS\n${player2.name} lost ${player2.bet} ILS and now has ${player2.funds} ILS`);
        }
        else {
            player1.funds -= player1.bet;
            player2.funds += player2.bet;
            console.log(`${player1.name} drew a ${player1.card}${deck.sign} and ${player2} drew a ${player2.card}${deck.sign}\n${player2.name} won ${player2.bet} ILS and now has ${player2.funds} ILS\n${player1.name} lost ${player1.bet} ILS and now has ${player1.funds} ILS`);
        }
    }
    else{
        player1.card = randomCard();
        computerCard = randomCard();
        if(computerCard == player1.card){
            console.log(`We both drew a ${player1.card}${deck.sign}, It's a tie, let's draw again`);
            drawCards();
        }
        else if (computerCard > player1.card){
            player1.funds -= player1.bet;
            console.log(`You drew a ${player1.card}${deck.sign} and I drew a ${computerCard}${deck.sign}\nYou lost ${player1.bet} ILS and now you have ${player1.funds} ILS`);
        }
        else {
            player1.funds += player1.bet;
            console.log(`You drew a ${player1.card}${deck.sign} and I drew a ${computerCard}${deck.sign}\nYou won ${player1.bet} ILS and now you have ${player1.funds} ILS`);
        }
    }

}

function callBackFunction (err, data){
    if(err){
        console.log('/*********  Welcome to WAR  *********\\');
    }
    else {
        console.log(data);
    }
    multiplayerMode = readline.keyInYNStrict('Would you like to play in multiplayer mode?');
    if(multiplayerMode){
        player1.name = readline.question('Please enter the first player name:    ');
        player2.name = readline.question('Please enter the second player name:   ');
        console.log(`Hello ${player1.name} and ${player2.name}! You both currently have ${player1.funds} ILS`);
        roundMultiplayerMode();
    }
    else{
        player1.name = readline.question('Please enter your name:    ');
        console.log(`Hello ${player1.name}! You currently have ${player1.funds} ILS`);
        roundSingleplayerMode();
    }
}

let multiplayerMode;
deck.sign = deck.signs[Math.floor(Math.random() * 4)];
const player1 = {
    name: '',
    funds: 50,
    bet: 0,
    card: 0
}
const player2 = {
    name: '',
    funds: 50,
    bet: 0,
    card: 0
}
let computerCard = 0;

figlet('welcome to WAR', {font: 'Calvin S'}, callBackFunction);