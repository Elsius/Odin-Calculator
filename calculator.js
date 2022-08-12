const mathFuncts = {
    add: (a, b) => parseFloat(a) + parseFloat(b),
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    modulus: (a,b) => a % b
}
function doMath(firstNum, scndNum, operation) {
    return mathFuncts[operation](firstNum, scndNum)
}

let prevNum = '',
    currentNum = '',
    result = '',
    opHolder = '';
const output = document.querySelector('#output');


const pressed = document.querySelectorAll('.calcButton')
//pull all buttons and apply event listener using a loop that calls function
pressed.forEach(el => el.addEventListener("click", getButtonPressed))


//clicking a button calls function to check what is pressed
//this function pulls element id of button pressed
//act based on this id, use e?

function getButtonPressed(e) {
    const button = e.target.id;
    if (button == 'clear'){
        allClear()
        return
    }
    if (e.target.classList.contains('numButton')) {
        numberPressed(button)
        return
    }
    if (e.target.classList.contains('opButton')){
        applyOperator(button)
        return
    }
}
function numberPressed(number) {
    if (number == 'dot'){//check if a decimal already exists
        if (output.textContent.indexOf('.') != -1){
            return
        }
        number = '.';
    }
    currentNum += number
    output.textContent = currentNum
}

function allClear(clearDisplay = true){
    prevNum = '';
    currentNum = '';
    opHolder = '';
    result = '';
    if (clearDisplay == true){
    output.textContent = '0';
    }
}
function applyOperator(operator){
    if (operator == 'equals'){
        if (opHolder == ''){
            return
        }
        output.textContent = doMath(prevNum,currentNum,opHolder)
        prevNum = output.textContent;
        result = prevNum;
        return
    }
    if (operator == 'inverse'){
        currentNum = currentNum * (-1);
        output.textContent = currentNum;
        console.log('we flipped')
        return
    }
    opHolder = operator;
    if (result != ''){
    prevNum = result;
    } else {
        prevNum = currentNum;
    }
    currentNum = '';
}

/* display defaults at 0, currentNum = '';
click a button, calls a function to see what is pressed
if it is a number, {
    if opHolder is not empty, {push currentNum to prevNum}
    concat number to currentNum
    display = currentNum
}
if an operator is pressed, put it into opHolder

if it is a util, run its function

equals function
    result = doMath(prevNum,CurrentNum,operator)
    display = result
    clear currentNum, opHolder, prevNum
inverse function
    currentNum = currentNum * -1
modulus operator,
    add modulus as operation in mathFuncts

*/