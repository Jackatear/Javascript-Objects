const addRow = document.querySelector(".add");
const tableBody = document.querySelector("tbody");
const inputOne = document.querySelector("#input-one")
const inputTwo = document.querySelector("#input-two")
const inputThree = document.querySelector("#input-three")
const lib = []


function Store(name, author, pages) {

    this.name = name;
    this.author = author;
    this.pages = pages;

}


function hasClicked(input1, input2, input3){

    const tr = document.createElement('tr')
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    const td3 = document.createElement('td') 
    const td4 = document.createElement('td')

    const checkBox = document.createElement('input')

    checkBox.type = 'checkbox'
    checkBox.id = "haveRead"

    td1.textContent = input1
    td2.textContent = input2
    td3.textContent = input3
    
    td4.appendChild(checkBox)



    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)

    tableBody.appendChild(tr);
}

let booksInLibrary = 0;

addRow.addEventListener('click', () => {
    
    const book = new Store(inputOne.value, inputTwo.value, inputThree.value);

    let canAdd = true
    
    lib.forEach(item => {
        if (item.name == book.name) {
            canAdd = false;
            alert("book already in library! Please pick another book")
        }
    })

    if (canAdd == true){
        lib.push(book);

        hasClicked(lib[booksInLibrary].name, lib[booksInLibrary].author, lib[booksInLibrary].pages);
        
        booksInLibrary++;
        console.log(lib)
    }

    

    inputOne.value = ''
    inputTwo.value = ''
    inputThree.value = ''
})

