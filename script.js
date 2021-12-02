const memory = {
    previousOperand: '',
    currentOperand: '',
    operator: '',
}

/* function add(a,b) {
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
} */

let number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", printNumber);
}

function printNumber(e) {
    memory.currentOperand += e.target.innerText;
    document.getElementsByClassName("current-operand")[0].innerText = memory.currentOperand;
    console.log("PREVIOUS " + memory.previousOperand)
    console.log("CURRENT " + memory.currentOperand);
    console.log("OPERATOR " + memory.operator);
}

let operation = document.getElementsByClassName("operation");
for (let i = 0; i < operation.length; i++) {
    operation[i].addEventListener("click", setOperation);
}

function setOperation(e) {
    if (memory.operator != '') {
        runOperation();
        memory.operator= e.target.value;
        memory.previousOperand = '';
        console.log("PREVIOUS " + memory.previousOperand)
        console.log("CURRENT " + memory.currentOperand);
        console.log("OPERATOR " + memory.operator);
    } else {
    memory.operator = e.target.value;
    memory.previousOperand = memory.currentOperand;
    memory.currentOperand = '';
    document.getElementsByClassName("current-operand")[0].innerText = memory.currentOperand;
    console.log("PREVIOUS " + memory.previousOperand)
    console.log("CURRENT " + memory.currentOperand);
    console.log("OPERATOR " + memory.operator);
    }
}

let calculate = document.getElementsByClassName("calculate");
calculate[0].addEventListener("click", runOperation);

function runOperation() {
    if (memory.operator === "add") {
        memory.currentOperand = parseFloat(memory.previousOperand) + parseFloat(memory.currentOperand);
        document.getElementsByClassName("current-operand")[0].innerText = memory.currentOperand;
        console.log("PREVIOUS " + memory.previousOperand)
        console.log("CURRENT " + memory.currentOperand);
        console.log("OPERATOR " + memory.operator);

    } else if (memory.operator === "subtract") {
        memory.currentOperand = parseFloat(memory.previousOperand) - parseFloat(memory.currentOperand);
        document.getElementsByClassName("current-operand")[0].innerText = memory.currentOperand;
        console.log("PREVIOUS " + memory.previousOperand)
        console.log("CURRENT " + memory.currentOperand);
        console.log("OPERATOR " + memory.operator);

    } else if (memory.operator === "divide" && memory.currentOperand != "0") {
        memory.currentOperand = parseFloat(memory.previousOperand) / parseFloat(memory.currentOperand);
        document.getElementsByClassName("current-operand")[0].innerText = memory.currentOperand;
        console.log("PREVIOUS " + memory.previousOperand)
        console.log("CURRENT " + memory.currentOperand);
        console.log("OPERATOR " + memory.operator);
        
    } else if (memory.currentOperand === "0") {
        alert("You cannot divide by 0");
        cleanDisplay();
        console.log("PREVIOUS " + memory.previousOperand)
        console.log("CURRENT " + memory.currentOperand);
        console.log("OPERATOR " + memory.operator);

    } else if (memory.operator === "multiply") {
        memory.currentOperand = parseFloat(memory.previousOperand) * parseFloat(memory.currentOperand);
        document.getElementsByClassName("current-operand")[0].innerText = memory.currentOperand;
        console.log("PREVIOUS " + memory.previousOperand)
        console.log("CURRENT " + memory.currentOperand);
        console.log("OPERATOR " + memory.operator);
    }
}

let clearDisplay = document.getElementsByClassName("clear-display");
clearDisplay[0].addEventListener("click", cleanDisplay);

function cleanDisplay() {
    memory.operator = '';
    memory.previousOperand = '';
    memory.currentOperand = '';
    document.getElementsByClassName("current-operand")[0].innerText = memory.currentOperand;
}



/* if (memory.currentOperand.toString().length > 9) {
    document.getElementsByClassName("current-operand")[0].innerText = memory.currentOperand.toFixed(8);
    console.log(typeof(memory.currentOperand)) */