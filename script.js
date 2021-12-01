function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === "add") {
    return add(a,b);
} else if (operator === "subtract") {
    return subtract(a,b);
} else if (operator === "multiply") {
    return multiply(a,b);
} else if (operator === "divide") {
    return divide(a,b);
    }
}

const memory = {
    previousOperand: '',
    currentOperand: '',
    operator: '',
}

let number = document.getElementsByClassName("number")
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", printNumber);
}

function printNumber(e) {
    memory.previousOperand = e.target.innerText;
    console.log(memory.previousOperand);
    document.getElementsByClassName("previous-operand")[0].innerText += memory.previousOperand;
}



