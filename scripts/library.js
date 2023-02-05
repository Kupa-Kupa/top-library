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
// console.log(theHobbit.info());
// console.log(theHobbit.percentage);
// console.log(theHobbit.author);
// console.table(theHobbit);

// get elements need for adding to table

let table = document.querySelector('table');
let tableBody = document.querySelector('tbody');
// console.log(table);
// console.log(tableBody);

library.push(theHobbit, randomWalk);
// console.table(library);

// let newTd = document.createElement('td');

// function to add book object to screen
function addNewBookToScreen() {
  let newTr = document.createElement('tr');
  for (const prop in library[library.length - 1]) {
    let newTd = document.createElement('td');
    if (prop === 'percentage') {
      newTd.textContent = `${library[library.length - 1][prop].toFixed(2)}%`;
      // console.log(prop);
      newTr.appendChild(newTd);
    } else if (prop === 'info') {
      continue;
    } else {
      newTd.textContent = library[library.length - 1][prop];
      // console.log(prop);
      newTr.appendChild(newTd);
    }
  }

  let newTd = document.createElement('td');
  let newCheckBox = document.createElement('input');
  newCheckBox.setAttribute('type', 'checkbox');
  newCheckBox.setAttribute('data-library-index', `${library.length - 1}`);
  newCheckBox.setAttribute('name', 'index');
  newCheckBox.setAttribute('value', `${library.length - 1}`);
  newTd.appendChild(newCheckBox);
  newTr.appendChild(newTd);
  tableBody.appendChild(newTr);
}

// addBookToScreen();

/* on click remove button
delete objects at indexes to be removed
rebuild table with existing indexes
for (let i = 0; i < library.length; i++) {
  addBookToScreen();
}
*/

let removeButton = document.querySelector('#remove');

removeButton.addEventListener('click', removeBooks);

function removeBooks() {
  library.pop();
  console.log(library.length);
  for (const child of tableBody.children) {
    child.remove();
  }
}

// removeBooks();

function rebuildTable() {
  for (let i = 0; i < library.length; i++) {
    let newTr = document.createElement('tr');

    for (const prop in library[i]) {
      let newTd = document.createElement('td');

      if (prop === 'percentage') {
        newTd.textContent = `${library[i][prop].toFixed(2)}%`;
        // console.log(prop);
        newTr.appendChild(newTd);
      } else if (prop === 'info') {
        continue;
      } else {
        newTd.textContent = library[i][prop];
        // console.log(prop);
        newTr.appendChild(newTd);
      }
    }

    let newTd = document.createElement('td');
    let newCheckBox = document.createElement('input');
    newCheckBox.setAttribute('type', 'checkbox');
    newCheckBox.setAttribute('data-library-index', `${library.length - 1}`);
    newCheckBox.setAttribute('name', 'index');
    newCheckBox.setAttribute('value', `${library.length - 1}`);
    newTd.appendChild(newCheckBox);
    newTr.appendChild(newTd);
    tableBody.appendChild(newTr);
  }
}

window.addEventListener('load', rebuildTable);
// rebuildTable();
console.table(library);

// add books
let addButton = document.querySelector('#add-book-button');
let titleInput = document.querySelector('#title');
let authorInput = document.querySelector('#author');
let currentPageInput = document.querySelector('#current-page');
let pagesInput = document.querySelector('#pages');
let readInput = document.querySelector('#read');

addButton.addEventListener('click', addBookToLibrary);

// window.addEventListener('load', addBookToLibrary);

// add book to library
function addBookToLibrary(event) {
  // reloading the page on submit resets the library array bc JS is rerun
  // so prevent submit with preventDefault
  event.preventDefault();

  let title = titleInput.value;
  let author = authorInput.value;
  let currentPage = currentPageInput.value;
  let pages = pagesInput.value;
  let read = readInput.value;
  const newBook = new Book(title, author, currentPage, pages, read);
  library.push(newBook);
  console.table(library);
  addNewBookToScreen();
}

// add book to library - if url change on submit
// function addBookToLibrary(event) {
//   let currentUrlSearch = window.location.search;
//   if (currentUrlSearch.length !== 0) {
//     let currentUrlSearch = window.location.search;
//     let bookDetails = currentUrlSearch.split('&');
//     let title = bookDetails[0].slice(bookDetails[0].indexOf('=') + 1);
//     let author = bookDetails[1].slice(bookDetails[1].indexOf('=') + 1);
//     let currentPage = bookDetails[2].slice(bookDetails[2].indexOf('=') + 1);
//     let pages = bookDetails[3].slice(bookDetails[3].indexOf('=') + 1);
//     let read = bookDetails[4].slice(bookDetails[4].indexOf('=') + 1);
//     const newBook = new Book(title, author, currentPage, pages, read);
//     library.push(newBook);
//     console.table(library);
//     return;
//   } else {
//     return;
//   }
// }
