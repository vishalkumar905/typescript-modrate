"use strict";
function combineNum(number1, number2, resultConversion) {
    var result;
    if (typeof number1 === 'number' && typeof number2 === 'number' || resultConversion === 'as-number') {
        result = +number1 + +number2;
    }
    else {
        result = number1.toString() + number2.toString();
    }
    return result;
}
var combineNumNumber = combineNum(24, 32, 'as-number');
console.log(combineNumNumber);
var combineNumStringAges = combineNum('24', '32', 'as-number');
console.log(combineNumStringAges);
var combineNumString = combineNum('Hari', 'Om', 'as-text');
console.log(combineNumString);
