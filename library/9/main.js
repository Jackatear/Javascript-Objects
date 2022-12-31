const lib = []

const nameInput = document.querySelector("#book-name")
const authorInput = document.querySelector("#book-author")
const pagesInput = document.querySelector("#book-pages")
const submitButton = document.querySelector("#submit-book")

const wholeTable = document.querySelector("#book-table")
const tableBody = document.querySelector("#table-body")

let rows = 0


function StoreBook(name, author, pages){
    this.name = name;
    this.author = author;
    this.pages = pages;
}

function inLib(book, lib) {

    for (let i = 0; i < lib.length; i++){
        if (lib[i].name == book.name)
        return true
    }

    return false

}

function addToList(book){
    const newRow = document.createElement('tr');
    newRow.classList.add("table-row")
    newRow.id = `table-row-${rows}`
    newRow.setAttribute("book", book.name)

    const tdName = document.createElement("td")
    const tdAuthor = document.createElement("td")
    const tdPages = document.createElement("td")
    const tdRead = document.createElement("td")
    const tdRemove = document.createElement("td")
    const checkBox = document.createElement("input")
    checkBox.type = 'checkbox';
    checkBox.id = "haveRead";
    const binButton = document.createElement('button')
    binButton.style.width = "30px";
    binButton.style.padding = "0";
    binButton.style.margin = "0";
    binButton.id = "deleteRow";
    binButton.setAttribute("book", book.name)
    const binIcon = document.createElement('img');
    binIcon.src = './images/delete.png';
    binIcon.style.height = '25px'
    binIcon.style.width = '25px'
    binButton.style.marginInline = "auto"

    binButton.appendChild(binIcon);

    tdName.textContent = book.name;
    tdAuthor.textContent = book.author;
    tdPages.textContent = book.pages;
    tdRead.appendChild(checkBox);
    tdRemove.appendChild(binButton);

    newRow.appendChild(tdName)
    newRow.appendChild(tdAuthor)
    newRow.appendChild(tdPages)
    newRow.appendChild(tdRead)
    newRow.appendChild(tdRemove)

    tableBody.appendChild(newRow)

    const removeButtons = document.querySelectorAll("#deleteRow")

    for (let i=0; i<removeButtons.length; i++){
        removeButtons[i].addEventListener("click", () => {
            console.log(removeButtons[i].getAttribute("book"))
            for (let j = 0; j < lib.length; j++){
                if (lib[j].name == removeButtons[i].getAttribute("book")){
                    console.log(lib)
                    lib.splice(j, 1)
                    console.log(lib)
                }
                
                const toRemove = removeButtons[i].parentElement;
                toRemove.parentElement.remove();
            }
        })
    }
}


submitButton.addEventListener("click", () => {
    
    if ((nameInput.value == '') || (authorInput.value == '') || (pagesInput.value == '')){
        alert("Please enter data :) ");
    }

    else {
        let newAddition = new StoreBook(nameInput.value, authorInput.value, pagesInput.value);
        
        if (inLib(newAddition, lib)){
            alert("Book already Added!")
        }
        else {
            lib.push(newAddition);
            addToList(newAddition);
        } 
    }

    nameInput.value = ''
    authorInput.value = ''
    pagesInput.value = ''
    console.log(lib)
});