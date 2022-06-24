// Following solution uses formula of sum of consecutive (positive) integers
// Note: For negative integers we will need this formula -n(n - 1) / 2 or -n^2 + n / 2
// Note2: This approach has a running time of O(1) in the worst case, really efficient!
const sumAll = function (numOne, numTwo) {
    if (numOne < 0 || numTwo < 0 || typeof(numOne) != "number" || typeof(numTwo) != "number") {
        return 'ERROR'
    }

    // We need the biggest of two numbers to ensure that formula works as expected
    let biggestNum = (numOne >= numTwo) ? numOne : numTwo;

    // Sum of n consecutive positive integers is n * (n + 1) / 2 or n^2 + n / 2
    let sum = biggestNum * (biggestNum + 1) / 2;

    return sum;
};

// Iterative approach to calculate the sum of consecutive positive integers
// Note: This approach has a running time of O(n) in the worst case, severely inefficient as compared to the solution above
// Note2: 
// const sumAll = function (numOne, numTwo) {
//     if (numOne < 0 || numTwo < 0 || typeof(numOne) != "number" || typeof(numTwo) != "number") {
//         return 'ERROR'
//     }
//     let sum = 0;

//     let biggestNum = (numOne >= numTwo) ? numOne : numTwo;
//     let smallestNum = (numOne < numTwo) ? numOne : numTwo;

//     for (let i = smallestNum; i <= biggestNum; i++) {
//         sum += i;
//     }

//     return sum;
// };

// Do not edit below this line
module.exports = sumAll;
