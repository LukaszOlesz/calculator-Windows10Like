// Operand Input
const previousOperand = document.querySelector(".previous-operand");
const currentOperand = document.querySelector(".current-operand");

// Numbers and Operands
const num = document.querySelectorAll(".numbers");
const ope = document.querySelectorAll(".operands");
const buttons = document.querySelectorAll("button");
const clearAll = document.querySelector(".clearAll");
const clearCur = document.querySelector(".clearCur");
const del = document.querySelector(".delete");
const comma = document.querySelector(".comma");
const equ = document.querySelector(".equal");

// Functions
buttons.forEach((numbers) => {
    numbers.addEventListener('click', () => {
        currentOperand.innerText += numbers.innerText;
    })
})

// Clear and Delete
clearAll.addEventListener('click', () => {
    currentOperand.innerText = ''
    previousOperand.innerText = ''
})

clearCur.addEventListener('click', () => {
    currentOperand.innerText = ''
})

del.addEventListener('click', () => {
    currentOperand.innerText = currentOperand.innerText.slice(0, -4)
})

// Comma

// function appendNumber(number) {
//     if (number === '.' && currentOperand.includes('.')) return
//     currentOperand = currentOperand.toString() + number.toString()
// }

// Equal

equ.addEventListener('click', () => {
    currentOperand.innerText = currentOperand.innerText.slice(0, -1);
    currentOperand.innerText = eval(currentOperand.innerText);
})
