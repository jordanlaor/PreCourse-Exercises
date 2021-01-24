(function (){
    'use strict';
    const boom = 'BOOM';
    //Check if number contains the digit 7
    function seven (num){
        let stringNum = String(num);
        if (num % 7 == 0 || stringNum.includes('7')){
            return boom;
        }
        else {
            return num;
        }
    }
    
    for(let i = 0 ; i <= 100 ; i += 1){
            console.log(seven(i));
    }
    

})();