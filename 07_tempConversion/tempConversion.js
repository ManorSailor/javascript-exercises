// Note: * 10 / 10 just cancels each other. Math.round round the trailing zeroes to 1 decimal & then we * 10 to save that decimal & divide it again
// Math.round(37.77778) => 38 BUT Math.round(37.77778 * 10) => 378 / 10 => 37.8
const ftoc = function(faren) {
  let FTOC = (faren - 32) * 5/9;
  return Math.round(FTOC * 10) / 10;
};

const ctof = function(celsi) {
  let CTOF = (celsi * 9/5) + 32;
  return Math.round(CTOF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
