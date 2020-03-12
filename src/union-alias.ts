type Combinable = number | string;
type CombinableDescriptor = 'as-number' | 'as-text'; 

function combineUnAl(
  number1: Combinable, 
  number2: Combinable,
  resultConversion: CombinableDescriptor   
) {
  
  let result;

  if (typeof number1 === 'number' && typeof number2 === 'number' || resultConversion === 'as-number') {
    result = +number1 + +number2;
  } else {
    result = number1.toString() + number2.toString();
  }

  return result;
}


const combineUnAlNumber = combineUnAl(24, 32, 'as-number');
console.log(combineUnAlNumber);

const combineUnAlStringAges = combineUnAl('24', '32', 'as-number');
console.log(combineUnAlStringAges);

const combineUnAlString = combineUnAl('Hari', 'Om', 'as-text');
console.log(combineUnAlString);