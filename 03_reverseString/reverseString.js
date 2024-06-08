const reverseString = function(string) {
  let convertedString = string.split("");
  let newString = [];

  for (let i = 0; i < string.length; i += 1) {
    newString.push(convertedString.pop());
  }

  return newString.join("");
};

// Do not edit below this line
module.exports = reverseString;
