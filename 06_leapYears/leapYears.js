const leapYears = function(year) {
  console.assert(typeof(year) === 'number', "Year must a be a number.");

  return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))
};

// Do not edit below this line
module.exports = leapYears;
