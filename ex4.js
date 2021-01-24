
(function (){
    'use strict';
    function recommendedRestaurat(restaurant){
        console.log(`Based on what you told me you should go to ${restaurant}`);
    }
    //import readline
    const input = require('readline-sync');

    //get number of people attending the restaurant
    let numPeople = input.questionInt('How many people are you going with? ');
    if (numPeople < 0){
        throw "stop execution";
    }
    //get Kosher preferences
    let kosher = input.keyInYN('Should it be Kosher?');
    let lemehadrin;
    if(kosher){
        lemehadrin = input.keyInYN('Should it be Kashrut Lemehadrin?');
        if(lemehadrin !== false && lemehadrin !== true){
            throw "stop execution";
        }
    }
    else if(kosher === false){
        console.log('not');
    }
    else{
        throw "stop execution";
    }

    //get type of food
    let foodTypes = ['pizza', 'asian', 'italian'];
    let selectedFood = input.keyInSelect(foodTypes , 'What kind of food do you want?' , {cancel: false});

    //calculate recommended restaurant
    let restaurants = [];
    if(numPeople>3){
        if(kosher){
            if(lemehadrin){
                //more than 3 people, Kosher Lemehadrin
                restaurants[0] = 'Pizza Agvania';
                restaurants[1] = 'Oshi Oshi';
                restaurants[2] = 'LaCusina';
                recommendedRestaurat(restaurants[selectedFood]);
            }
            else{
                //more than 3 people, Kosher
                restaurants[0] = 'Pizzafino';
                restaurants[1] = 'Nina Sushi';
                restaurants[2] = 'Spuntini';
                recommendedRestaurat(restaurants[selectedFood]);
            }
        }
        else{
            //more than 3 people, not Kosher
            restaurants[0] = 'Hapizza';
            restaurants[1] = 'Zesushi';
            restaurants[2] = 'Nono';
            recommendedRestaurat(restaurants[selectedFood]);
        }
        
    }
    else{
        if(kosher){
            if(lemehadrin){
                //3 people or less, Kosher Lemehadrin
                restaurants[0] = 'Mama Pizza';
                restaurants[1] = 'Papaya';
                restaurants[2] = 'Biga';
                recommendedRestaurat(restaurants[selectedFood]);
            }
            else{
                // 3 people or less, Kosher
                restaurants[0] = 'Pizza People';
                restaurants[1] = 'Nagisa';
                restaurants[2] = 'Little Napoli';
                recommendedRestaurat(restaurants[selectedFood]);
            }
        }
        else{
            // 3 people or less, not Kosher
            restaurants[0] = 'Panama Pizza';
            restaurants[1] = 'Frame';
            restaurants[2] = 'Pasta e Via';
            recommendedRestaurat(restaurants[selectedFood]);
        }
    }
})();