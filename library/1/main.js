let myLibrary = [];
const submitButton = document.querySelector("#submit-button");
const nameInput = document.querySelector(".name");
const authorInput = document.querySelector(".author");
const pagesInput = document.querySelector(".pages");

const displayBox = document.querySelector(".display");

let c = 0;

function Book(name, author, pages) {
  (this.name = name), (this.author = author), (this.pages = pages);
}

submitButton.addEventListener("click", () => {
  let n = nameInput.value;
  let a = authorInput.value;
  let p = pagesInput.value;
  const newBook = new Book(n, a, p);
  myLibrary.push(newBook);
  const addBookToLibrary = document.createElement("div");

  addBookToLibrary.textContent = `${myLibrary[c].name} | ${myLibrary[c].author} | ${myLibrary[c].pages}`;
  addBookToLibrary.style.display = "block";
  displayBox.appendChild(addBookToLibrary);

  c += 1;
});

console.log(myLibrary);

// function addBookToLibrary() {
//   // do stuff here
// }
