"use strict";
function combineUnAl(number1, number2, resultConversion) {
    var result;
    if (typeof number1 === 'number' && typeof number2 === 'number' || resultConversion === 'as-number') {
        result = +number1 + +number2;
    }
    else {
        result = number1.toString() + number2.toString();
    }
    return result;
}
var combineUnAlNumber = combineUnAl(24, 32, 'as-number');
console.log(combineUnAlNumber);
var combineUnAlStringAges = combineUnAl('24', '32', 'as-number');
console.log(combineUnAlStringAges);
var combineUnAlString = combineUnAl('Hari', 'Om', 'as-text');
console.log(combineUnAlString);
