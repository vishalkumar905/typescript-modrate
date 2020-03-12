"use strict";
function combineUn(number1, number2) {
    var result;
    if (typeof number1 === 'number' && typeof number2 === 'number') {
        result = number1 + number2;
    }
    else {
        result = number1.toString() + number2.toString();
    }
    return result;
}
var combineUnNumber = combineUn(24, 32);
console.log(combineUnNumber);
var combineUnString = combineUn('Hari', 'Om');
console.log(combineUnString);
