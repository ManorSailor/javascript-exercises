const palindromes = function (original) {
    original = original.toLowerCase().replace(/[^a-z]/g, '');
    reversed = reverseString(original).toLowerCase().replace(/[^a-z]/g, '');
    return (original === reversed) ? true : false;
};

const reverseString = function(string) {
    let length = string.length;
    let reversedString = "";

    for (let i = length - 1; i >= 0; i--) reversedString += string[i];

    return reversedString;
};


// Do not edit below this line
module.exports = palindromes;
