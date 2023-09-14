const numbersForFolder = []
const numbers = function(){
    for(i=0; i<90; i++) {
        numbersForFolder.push(i)
        
    }
}
numbers()
console.log(numbersForFolder)
let number
const randomNumber = function(){
     number = Math.floor(Math.random()* 77)
    }
randomNumber()
console.log(number)

const createDiv = function(){
    const folderDiv = document.getElementById('folder')
    for(i=0; i<numbersForFolder.length; i++) {
        const numberCell = document.createElement('div')
        numberCell.classList.add('cell')
        const cellValue = document.createElement('h2')
        cellValue.innerText = i + 1

        numberCell.appendChild(cellValue)
        folderDiv.append(numberCell)
}}
createDiv()

const numberPicked = document.getElementById('header')
    numberPicked.innerHTML =`<p> Your Number is ${number} </p>`

const pickNumber = function(e){   
    const clickedButton =e.target
    clickedButton.parentElement.number()
}
pickNumber()
