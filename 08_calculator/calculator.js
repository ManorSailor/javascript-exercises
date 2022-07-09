const add = function(...numbers) {
	return numbers.reduce((sum, num) => sum + num, 0);
};

const subtract = function(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length - 1; i++) {
    result = numbers[i] - numbers[i + 1];
  }
  return result;
};

const sum = function(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((sum, num) => sum * num, 1);
};

const power = function(number, power) {
  return number ** power;
};

const factorial = function(number) {
	return (number === 0 || number === 1) ? 1 : factorial(number - 1) * number;
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
