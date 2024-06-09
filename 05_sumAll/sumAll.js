const sumAll = function(init, termi) {

  console.log(typeof(init), typeof(termi));
  if ((init < 0 || termi < 0) ||
  (typeof(init) !== 'number' || typeof(termi) !== 'number')) {
    return "ERROR";
  }

  let reversedInit = termi;
  let reversedTermi = init;

  if (init > termi) {
    init = reversedInit;
    termi = reversedTermi;
  }

  let diff = 1;
  const sumTimes = termi - init;
  let totalSum = init;
  let nextNum;

  for (let i = 0; i < sumTimes; i += 1) {
    nextNum = init + diff;
    diff += 1;
    totalSum += nextNum;
  }

  return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
