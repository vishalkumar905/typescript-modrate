function combineUn(number1: number | string, number2: number | string) {
  let result;
  if (typeof number1 === 'number' && typeof number2 === 'number') {
    result = number1 + number2;
  } else {
    result = number1.toString() + number2.toString();
  }

  return result;
}


const combineUnNumber = combineUn(24, 32);
console.log(combineUnNumber);

const combineUnString = combineUn('Hari', 'Om');
console.log(combineUnString);