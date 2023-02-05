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

// get elements need for adding to table

let table = document.querySelector('table');
let tableBody = document.querySelector('tbody');
console.log(table);
console.log(tableBody);

library.push(theHobbit, randomWalk);
console.table(library);

// let newTd = document.createElement('td');

// function to add book object to screen
function addBookToScreen() {
  let newTr = document.createElement('tr');
  for (const prop in library[library.length - 1]) {
    let newTd = document.createElement('td');
    if (prop === 'percentage') {
      newTd.textContent = `${library[library.length - 1][prop].toFixed(2)}%`;
      console.log(prop);
      newTr.appendChild(newTd);
    } else if (prop === 'info') {
      continue;
    } else {
      newTd.textContent = library[library.length - 1][prop];
      console.log(prop);
      newTr.appendChild(newTd);
    }
  }

  let newTd = document.createElement('td');
  let newCheckBox = document.createElement('input');
  newCheckBox.setAttribute('type', 'checkbox');
  newTd.appendChild(newCheckBox);
  newTr.appendChild(newTd);
  tableBody.appendChild(newTr);
}

addBookToScreen();
