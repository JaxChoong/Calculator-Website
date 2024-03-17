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
    if (operate === "+"){
        return addition( num1, num2 )
    }
    else if (operate === "-"){
        return subtraction( num1, num2 )
    }
    else if (operate === "*"){
        return multiplication( num1, num2 )
    }
    else if (operate === "/"){
        return division( num1, num2 )
    }
}
