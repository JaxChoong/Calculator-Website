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
    return( num1 / num2 )
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

function checkButton( buttonValue ){
    if ( buttonValue ==="1" || buttonValue ==="2" || buttonValue ==="3" || buttonValue ==="4" || buttonValue ==="5" || 
        buttonValue ==="6" || buttonValue ==="7" || buttonValue ==="8" || buttonValue ==="9" || buttonValue ==="0" ){
        
        concatString( buttonValue );
    }
    else if (buttonValue ==="+" || buttonValue ==="-" || buttonValue ==="*" || buttonValue ==="/" ){
        concatString( buttonValue );
    }
    else if (buttonValue ==="Clear"){
        clearString()
    }
}

const results = document.querySelector("#results")
function concatString(buttonValue){
    
    document.querySelector("#results").textContent = (results.textContent + buttonValue)
}

function clearString(){
    document.querySelector("#results").textContent = ""
}