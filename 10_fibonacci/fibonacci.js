const fibonacci = function(terms) {
  if (parseInt(terms) === 1 || parseInt(terms) === 2) {
    return 1;
  } else if (parseInt(terms) === 0) {
    return 0;
  } else if (parseInt(terms) < 0) {
    return 'OOPS';
  }

  let fibSequence = [1, 1];
  let nextTerm = 0;

  for (let i = 2; i < terms; i += 1) {
    nextTerm = fibSequence[i - 1] + fibSequence[i - 2];
    fibSequence.push(nextTerm);
  }
  return fibSequence[parseInt(terms) - 1];
};

// Do not edit below this line
module.exports = fibonacci;
