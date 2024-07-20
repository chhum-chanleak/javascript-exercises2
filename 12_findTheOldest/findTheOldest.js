const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];
const people2 = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

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

// Find a property of an object. Return false if there is no such property
const findProperty = (obj, propName) => {

  for (let prop in obj) {
    if (prop === propName) {
      return true;
    }
  }
  return false
};



// Do not edit below this line
module.exports = findTheOldest;
