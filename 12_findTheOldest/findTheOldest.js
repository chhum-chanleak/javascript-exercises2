const getMax = (arr) => {
  let max = arr[0];

  for (let i = 0; i < arr.length; i += 1) {
    if (max > arr[i + 1]) {
      max = max;
    } else if (max < arr[i + 1]) {
      max = arr[i + 1];
    }
  }
  return max;
};

const findTheOldest = function(arr) {
  let oldest;

  for (let i = 0; i < arr.length; i += 1) {

  }
};

// Do not edit below this line
module.exports = findTheOldest;
