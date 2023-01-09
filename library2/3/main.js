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

class Library {
    constructor(name) {
        this.name = name;
        this.books = []
    }

    addBook(book){
        this.books.push(book);
    }

    totalBooks() {
        return this.books.length;
    }

}

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
    const deleteButton = document.createElement("button")

    cardHeader.textContent = title;
    cardBody.textContent = author;
    cardFooter.textContent = pages;
    deleteButton.textContent = "❌"
    deleteButton.classList.add("bin")

    newCard.appendChild(cardHeader)
    newCard.appendChild(cardBody)
    newCard.appendChild(cardFooter)
    newCard.appendChild(deleteButton)

    container.appendChild(newCard)

    const deleteButtons = document.querySelectorAll(".bin")
    
    for (let i = 0; i < deleteButtons.length; i++){

        deleteButtons[i].addEventListener("click", () => {
            deleteButtons[i].parentElement.remove();
        })

    }
}

const JacksLibrary = new Library("Jack");

addButton.addEventListener("click", () => {
    let currBook = new Book(book.value, author.value, pages.value)

    if (JacksLibrary.books.length == 0){
        JacksLibrary.addBook(currBook);
        addNewCard(currBook.bookDescription);
    }
    
    else {
        c =0
        JacksLibrary.books.forEach((book) => {
            if (currBook.book == book.book){
                c ++;
            } 
        })

        if ( c > 0 ){
            alert("book already in library! :) ")
        } else {
            JacksLibrary.addBook(currBook);
            addNewCard(currBook.bookDescription);
        }
    }
    
    console.log(JacksLibrary)

})