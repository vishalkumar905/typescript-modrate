let userInput: unknown;
let userName: string;

userName = 'Hey';

if (typeof userInput === 'string') {
  userInput = userName
}


function generateError(message: string, statusCode: number) {
  throw { message: message, statusCode: statusCode}
}

console.log(generateError('An object error occured', 500));

