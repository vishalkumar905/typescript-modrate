function combineNum(
  number1: number | string, 
  number2: number | string,
  resultConversion: 'as-number' | 'as-text'   
) {
  
  let result;

  if (typeof number1 === 'number' && typeof number2 === 'number' || resultConversion === 'as-number') {
    result = +number1 + +number2;
  } else {
    result = number1.toString() + number2.toString();
  }

  return result;
}

const combineNumNumber = combineNum(24, 32, 'as-number');
console.log(combineNumNumber);

const combineNumStringAges = combineNum('24', '32', 'as-number');
console.log(combineNumStringAges);

const combineNumString = combineNum('Hari', 'Om', 'as-text');
console.log(combineNumString);