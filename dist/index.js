"use strict";
var userInput;
var userName;
userName = 'Hey';
if (typeof userInput === 'string') {
    userInput = userName;
}
function generateError(message, statusCode) {
    throw { message: message, statusCode: statusCode };
}
console.log(generateError('An object error occured', 500));
