const addRow = document.querySelector(".add");
const tableBody = document.querySelector("tbody");
let c = 1

function hasClicked(){

    const tr = document.createElement('tr')
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    const td3 = document.createElement('td') 

    td1.textContent = c
    td2.textContent = c + 1
    td3.textContent = c + 2

    c = c + 3

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)

    tableBody.appendChild(tr);
}

addRow.addEventListener('click', () => {
    hasClicked();
})