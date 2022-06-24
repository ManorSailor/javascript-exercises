const reverseString = function(string) {
    let length = string.length;
    let reversedString = "";

    // Strings are just an array of characters, you can access individual characters of a string using [] notation
    // Starting from length - 1 because it is the same last element of array. Array index starts from 0.
    // We start accessing elements from the end of string & append it to a new variable
    for (let i = length - 1; i >= 0; i--) reversedString += string[i];

    return reversedString;
};

// Alternate method doing the same thing
// const reverseString = function(string) {
//     let length = string.length;
//     let reversedString = "";

//     for (let i = 0; i < length; i++) reversedString += string[length - (i + 1)];

//     return reversedString;
// };

// Do not edit below this line
module.exports = reverseString;
