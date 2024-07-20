const add = function(num1 = 1, num2 = 2) {
  return num1 + num2;	
};

const subtract = function(num1 = 1, num2 = 2) {
	return num1 - num2;
};

const sum = function(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i += 1) {
    result += arr[i];
  }
  return result;
};

const sumV2 = (arr) => {
  const result = arr.reduce((acc, cur) => acc + cur, 0);

  return result;
};

const multiply = function(arr) {
  let result = 1;

  for (let i = 0; i < arr.length; i += 1) {
    result *= arr[i];
  }
  return result;
};

const multiplyV2 = (arr) => {
  const result = arr.reduce((acc, cur) => acc * cur, 1);
  
  return result;
};

const power = function(base, pow) {
	return base ** pow;
};

const powerV2 = (base, pow) => {
  return Math.pow(base, pow);
};

const factorial = function(terms) {
	let result = 1;

  if (parseInt(terms) === 0 || parseInt(terms) === 1) {
    return 1;
  }

  for (let i = 0; i < terms; i += 1) {
    result *= parseInt(terms) - i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
