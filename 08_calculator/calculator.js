const add = function(a, b) {

  return a + b;
	
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(...nums) {


  return nums.flat().reduce((total, num) => total + num, 0);
	
};

const multiply = function(...nums) {

  return nums.flat().reduce((total, num) => total * num);

};

const power = function(num, power) {

  return num ** power;
	
};

const factorial = function(num) {

  if (num === 0) {
    return 1;
  }

  let fact = 1;

  for (i = 1; i <= num; i++) {
    fact = fact * i;
  }

  return fact;
	
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
