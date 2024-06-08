const removeFromArray = function(array, ...itemsToRemove) {

  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < itemsToRemove.length; j += 1) {

      if (array[i] === itemsToRemove[j]) {
        array.splice(i, 1);
        i -= 1;
      }
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
