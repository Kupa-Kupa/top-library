// array to store book objects
let library = [];

// Book constructor function
function Book(title, author, currentPage, pages, read) {
  this.title = title;
  this.author = author;
  this.currentPage = currentPage;
  this.pages = pages;
  this.percentage = (currentPage / pages) * 100;
  this.read = read;
}

// info method
Book.prototype.info = function () {
  let status = '';
  if (this.read.toLowerCase() === 'yes') {
    status = 'read';
  } else if (this.read.toLowerCase() === 'no') {
    status = 'not read yet';
  }
  return `${this.title} by ${this.author}, ${
    this.pages
  } pages, ${status}. You are ${this.percentage.toFixed(
    2
  )}% of the way through.`;
};

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 30, 295, 'no');
const randomWalk = new Book(
  'A Random Walk Down Wall Street',
  'Burton G. Malkiel',
  56,
  448,
  'no'
);
console.log(theHobbit.info());
console.log(theHobbit.percentage);
console.log(theHobbit.author);
console.table(theHobbit);

// function to add book object to library
function addBookToLibrary() {
  library.push(theHobbit, randomWalk);
  console.table(library);
}

addBookToLibrary();
