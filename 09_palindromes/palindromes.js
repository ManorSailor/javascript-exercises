const palindromes = function(original) {
    // Uses regex. [^...] means ignore what's inside. /g means globally i.e, in the whole string
    // Using this we convert everything other than characters to '' i.e, nothing, removing them from the new returned string
    original = original.toLowerCase().replace(/[^a-z]/g, '');
    reversed = reverseString(original);
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
