const palindromes = function (str) {
  const charArr = filterAlphabets(str).split('');
  const reversedStr = [];

  for (let i = 0; i < charArr.length; i += 1) {
    reversedStr.push(charArr.pop());
    i -= 1;
  }
  console.log(filterAlphabets(str));
  return filterAlphabets(str) === reversedStr.join('');
};

const filterAlphabets = (str) => { // background-color
  const alphabets = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let convertedStr = str.toLowerCase();
  let newStr = []; 

  for (let i = 0; i < convertedStr.length; i += 1) {
    if (alphabets.includes(convertedStr[i])) {
      newStr.push(convertedStr[i]);
    }
  }
  return newStr.join('');
};

// Do not edit below this line
module.exports = palindromes;
