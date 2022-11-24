function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function remainder(a, b){
    return a % b;
}

function operate(operator, a, b){
    if(operator === '+'){
        return Math.round(add(+a , +b) * 100) / 100;
    }else if(operator === '-'){
        return Math.round(subtract(+a , +b) * 100) / 100;
    }else if(operator === '*'){
        return Math.round(multiply(+a , +b) * 100) / 100;
    }else if(operator === '/'){
        return Math.round(divide(+a , +b) * 100) / 100;
    }else if(operator === '%'){
        return Math.round(remainder(+a , +b) * 100) / 100;
    }
}

console.log(operate('%', '11.355344', '20.243'));