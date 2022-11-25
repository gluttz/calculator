const resultField = document.querySelector('#result');
const inputField =  document.querySelector('#input');
const buttons = document.querySelectorAll('button');

const operators = {
    '+': function(a,b){
        return a + b;
    },
    
    '-': function(a,b){
        return a - b;
    },
    
    '*': function(a,b){
        return a * b;
    },
    
    '/': function(a, b){
        return a / b;
    },
    
    '%': function(a, b){
        return a % b;
    },
};

function operate(operator, a, b){
    if(operator === '+'){
        return Math.round(operators['+'](+a , +b) * 100) / 100;
    }else if(operator === '-'){
        return Math.round(operators['-'](+a , +b) * 100) / 100;
    }else if(operator === '*'){
        return Math.round(operators['*'](+a , +b) * 100) / 100;
    }else if(operator === '/' && b === '0'){
        return inputField.textContent = 'ERR0R, You\'re not supposed to do that';
    }else if(operator === '/'){
        return Math.round(operators['/'](+a , +b) * 100) / 100;
    }else if(operator === '%'){
        return Math.round(operators['%'](+a , +b) * 100) / 100;
    }else if(operator === '' && currentValue === ''){
        return totalValue;
    }else{
        return b;
    }
}

buttons.forEach(item => {
    item.addEventListener('click', (e) => {
        buttonInput(e.target.id);
    });
   });

let storedOperator = '';
let currentValue = '';
let totalValue = '';
let operatorState = false;
//takes button click and filters it to other functions
function buttonInput(btnValue){
    if(isNaN(btnValue) && btnValue != '.' && btnValue != '(' && btnValue != ')'){ //targets all buttons besides numbers
        if(btnValue === '='){
            equals();
        }else if(btnValue === 'clear'){
            clear();
        }else if(btnValue === 'backspace'){
            backspace();
        }else { //all operators
            if(currentValue.indexOf('(') > -1 && currentValue.indexOf(')') < 1){ //if ( and no )
                numberInput(btnValue);
            }else{ //when operator clicked
                operatorClicked(btnValue);
            }
        }
    }else{//all number buttons
        numberInput(btnValue);
    }
}

function numberInput(btnValue){
    if(operatorState){
        currentValue = btnValue;
        inputField.textContent = currentValue;
        operatorState = false;
    }else{
        currentValue += btnValue;
        inputField.textContent = currentValue;
    }
}

function clear(){
    inputField.textContent = '';
    resultField.textContent = '';
    storedOperator = '';
    currentValue = '';
    totalValue = '';
    
}

function backspace(){
    currentValue = currentValue.slice(0, -1);
    inputField.textContent = inputField.textContent.slice(0, -1);
}

function operatorClicked(btnValue){
    totalValue = operate(storedOperator, totalValue, currentValue);
    inputField.textContent = totalValue;
    storedOperator = btnValue
    currentValue = '';
    operatorState = true;
}

function equals(){
    totalValue = operate(storedOperator, totalValue, currentValue);
    inputField.textContent = totalValue;
    currentValue = '';
    storedOperator = '';
}