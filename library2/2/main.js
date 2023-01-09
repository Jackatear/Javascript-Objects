const addButton = document.querySelector(".add")
const container = document.querySelector(".container")
const book = document.querySelector("#book")
const author = document.querySelector("#author")
const pages = document.querySelector("#pages")


class Book {
    constructor(book, author, pages) {
        this.book = book;
        this.author = author;
        this.pages = pages;
    }

    get bookDescription() {
        return `${this.book}| ${this.author}| ${this.pages}`;
    }
}

const myLibrary = []

function addNewCard(text) {
    const newCard = document.createElement("div")
    newCard.classList.add("card")

    let x = text.split("| ")
    let title = x[0]
    let author = x[1]
    let pages = x[2]

    const cardHeader = document.createElement("h2")
    const cardBody = document.createElement("h4")
    const cardFooter = document.createElement("p")

    cardHeader.textContent = title;
    cardBody.textContent = author;
    cardFooter.textContent = pages;

    newCard.appendChild(cardHeader)
    newCard.appendChild(cardBody)
    newCard.appendChild(cardFooter)

    container.appendChild(newCard)
}


addButton.addEventListener("click", () => {
    let currBook = new Book(book.value, author.value, pages.value)
    console.log(currBook)
    addNewCard(currBook.bookDescription);
})