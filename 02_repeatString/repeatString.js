const repeatString = function(string, num) {
    // Declare a variable & assign an empty string to it, unassigned vars are undefined by default
    // If the num is 0, our function will return undefined but the test expects an empty string
    let result = "";

    for (let i = 0; i < num; i++) result += string;

    // If num is a negative no, return an error. You can't repeat something negative times, can you?
    return (num < 0) ? "ERROR" : result;
};

// Do not edit below this line
module.exports = repeatString;