const caesar = function(string, key) {
    // New String
    let newString = '';

    [...string].forEach(char => {
        // Get the ASCII code of the current character
        const charCode = char.charCodeAt();

        // Variable for storing rotated character
        let rotatedChar;

        // If char is between 65 to 90. It is a capital letter. (A = 65 & Z = 90 as per ASCII)
        // Why? Because we need to maintain case sensitivity.
        if (charCode >= 65 && charCode <= 90) {
            if (key < 0) {
                // Same as below except we do it the other way around for negative keys.
                // ((((65 - 90) - 5) % 26) + 90) = 86
                rotatedChar = ((((charCode - 90) + key) % 26) + 90);
            } else {
                // We subtract 65 from a charCode to normalize it, i.e, to make it smaller than 26. This gives us a value b/w [0, 26 - 1] 
                // Then we add a key to it for rotating the character that many times.
                // Modulo 26 will give a value smaller than 26, it will help in wrapping around the alphabet. 26 = no of alphabets
                // We add back 65 because in ASCII uppercase alphabets starts from 65.
                rotatedChar = ((((charCode - 65) + key) % 26) + 65);
            }
            newString += String.fromCharCode(rotatedChar);
        } 
        // If char is between 97 to 122. It is a lowercase letter. (a = 97 & z = 122 as per ASCII)
        else if (charCode >= 97 && charCode <= 122) {
            if (key < 0) {
                rotatedChar = ((((charCode - 122) + key) % 26) + 122);
            } else {
                rotatedChar = ((((charCode - 97) + key) % 26) + 97);
            }
            newString += String.fromCharCode(rotatedChar);
        } 
        // If its not an alphabet, simply ignore it & add to the string
        else {
            newString += char;
        }
    });

    return newString;
};

// Do not edit below this line
module.exports = caesar;
