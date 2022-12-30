const addRow = document.querySelector(".add");
const tableBody = document.querySelector("tbody");
const inputOne = document.querySelector("#input-one")
const inputTwo = document.querySelector("#input-two")
const inputThree = document.querySelector("#input-three")




function hasClicked(input1, input2, input3){

    const tr = document.createElement('tr')
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    const td3 = document.createElement('td') 

    td1.textContent = input1
    td2.textContent = input2
    td3.textContent = input3



    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)

    tableBody.appendChild(tr);
}

addRow.addEventListener('click', () => {
    const lib = []

    hasClicked(inputOne.value, inputTwo.value, inputThree.value);
})