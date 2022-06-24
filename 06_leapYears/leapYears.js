// Check if year is divisible by 4 AND NOT divisible by 100, then its a leap year
// else if, year is is divisible by 400, then its a leap year

// AND looks for the first falsy value & returns it, doesn't check the other condition.
// OR looks for the first truthy value & returns it, in this case, when any of these expressions year % 4 === 0 && year % 100 !== 0
// return false, the next part i.e, year % 400 === 0 gets executed & check for the else if condition
// If the AND expression returns True in both cases, then the OR expression doesn't run

// Note: This also works mathematically, if a number isn't divisible by 4. 
// It will never be divisible by 100 because, 100 is a multiple of 4
const leapYears = function(year) {
    return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) ? true : false;
};

// Do not edit below this line
module.exports = leapYears;
