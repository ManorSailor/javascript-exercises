// Iterative approach. Slightly easy & readable but quite long
const fibonacci = function(num) {
    if (num.toString().match(/[^0-9]/g) || num < 0) return 'OOPS';
    if (num == 0) return 0; // Strict equality (===) causes the check to fail
    
    let lastNum = 1; // 1st num of the fib series
    let prevNum = 1; // 2nd num of the fib series

    for (let i = 1; i < num; i++) {
        let nextNum = lastNum + prevNum;
        lastNum = prevNum; // Shift lastNum to prevNum
        prevNum = nextNum; // Shift prevNum to nextNum
    }
    return lastNum; // lastNum will always contain the answer. Used a notebook to figure this out
}

// Recursive approach. hard (If you don't know recursion) & ambiguous but cool
// const fibonacci = function(num) {
//     if (num.toString().match(/[^0-9]/g) || num < 0) return 'OOPS';
//     if (num == 0) return 0;
//     if (num <= 2) return 1;
//     return fibonacci(num - 1) + fibonacci(num - 2);
// };

// Do not edit below this line
module.exports = fibonacci;
