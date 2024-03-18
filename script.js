const num1 = 1;
const num2 = 2;
const operator = "";


function addition( num1, num2 ){
    return ( num1+num2 )
}

function subtraction( num1, num2 ){
    return ( num1 - num2 )
}

function multiplication( num1, num2 ){
    return( num1 * num2 )
}

function division( num1, num2 ){
    if (num2 === 0){
        return "You cant divide by 0..."
    }
    console.log(( num1 / num2 ))
    let result = Math.floor( ( num1 / num2 ) *1000 ) / 1000
    return( result )
}

function operate( num1, num2){
    if ( operate === "+" ){
        return addition( num1, num2 )
    }
    else if ( operate === "-" ){
        return subtraction( num1, num2 )
    }
    else if ( operate === "*" ){
        return multiplication( num1, num2 )
    }
    else if ( operate === "/" ){
        return division( num1, num2 )
    }
}

const buttons = document.querySelectorAll(".button")

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        checkButton(button.textContent)})
})

function checkButton(buttonValue) {
    if (buttonValue === "1" || buttonValue === "2" || buttonValue === "3" || buttonValue === "4" || buttonValue === "5" || buttonValue === "6" || buttonValue === "7" || buttonValue === "8" || buttonValue === "9" || buttonValue === "0") {
        concatString(buttonValue);
    } else if (buttonValue === "+" || buttonValue === "-" || buttonValue === "*" || buttonValue === "/") {
        const lastChar = results.textContent.charAt(results.textContent.length - 1);
        if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
            // Replace the existing operator with the new one
            replaceLastOperator(buttonValue);
        } else if (results.textContent !== "") {
            // Perform the operation and then append the new operator
            const newValue = stripString();
            replaceString(newValue + buttonValue);
        }
    } else if (buttonValue === "Clear") {
        clearString();
    } else if (buttonValue === "=") {
        const newValue = stripString();
        replaceString(newValue);
    }
    else if (buttonValue === ".") {
        handleDecimal();
    }
    else if (buttonValue === "Del"){
        deletePreviousCharacter()
    }
}

function replaceLastOperator(newOperator) {
    const equation = results.textContent;
    const newEquation = equation.substring(0, equation.length - 1) + newOperator;
    document.querySelector("#results").textContent = newEquation;
}

const results = document.querySelector("#results")
function concatString(buttonValue){
    
    document.querySelector("#results").textContent = (results.textContent + buttonValue)
}

function clearString(){
    document.querySelector("#results").textContent = ""
}

function stripString() {
    let equation = results.textContent;
    let operands = equation.split(/\+|\-|\*|\//); // Splitting by operators
    let operator = equation.match(/\+|\-|\*|\//); // Matching the operator

    if (operator && operands.length === 2) {
        let num1 = parseFloat(operands[0]);
        let num2 = parseFloat(operands[1]);

        switch (operator[0]) {
            case '+':
                return addition(num1, num2);
            case '-':
                return subtraction(num1, num2);
            case '*':
                return multiplication(num1, num2);
            case '/':
                return division(num1, num2);
            default:
                return "Invalid operation";
        }
    } else {
        return equation;
    }
}

function isOperator(char) {
    return char === "+" || char === "-" || char === "*" || char === "/";
}

function handleDecimal() {
    const equation = results.textContent;
    const lastChar = equation.charAt(equation.length - 1);

    // Check if the last character is an operator
    if (!isOperator(lastChar)) {
        const operands = equation.split(/[\+\-\*\/]/);
        const lastOperand = operands[operands.length - 1];

        // Check if the current operand already contains a decimal point
        if (lastOperand === "" || !lastOperand.includes(".")) {
            concatString(".");
        }
    }
}

function replaceString(newValue){
    document.querySelector("#results").textContent = `${newValue}`
}

function deletePreviousCharacter() {
    const currentText = results.textContent;
    
    if (currentText.length > 0) {
        const newText = currentText.slice(0, -1);
        replaceString(newText);
    }
}