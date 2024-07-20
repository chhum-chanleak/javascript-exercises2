const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
];

const getTheTitles = function(arr) {
  let books = [];

  for (let i = 0; i < arr.length; i += 1) {
    books.push(arr[i].title);
  }
  return books;
};

// Do not edit below this line
module.exports = getTheTitles;
