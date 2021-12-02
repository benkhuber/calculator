const memory = {
    previousOperand: '',
    currentOperand: '',
    operator: '',
}

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

function operate(operator,a,b) {
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

let number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", printNumber);
}

function printNumber(e) {
    memory.currentOperand += e.target.innerText;
    document.getElementsByClassName("current-operand")[0].innerText = memory.currentOperand;
    console.log(memory.currentOperand);
}

let operation = document.getElementsByClassName("operation");
for (let i = 0; i < operation.length; i++) {
    operation[i].addEventListener("click", setOperation);
}

function setOperation(e) {
    memory.operator = e.target.value;
    memory.previousOperand = memory.currentOperand;
    memory.currentOperand = '';
    document.getElementsByClassName("current-operand")[0].innerText = memory.currentOperand;
    console.log(memory.operator);
    console.log("current" + memory.currentOperand);
    console.log("previous" + memory.previousOperand);
}

let calculate = document.getElementsByClassName("calculate");
calculate[0].addEventListener("click", runOperation);

function runOperation() {
    operate()
    

}



