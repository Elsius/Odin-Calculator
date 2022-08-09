const mathFuncts = {
    add: (a, b) => parseInt(a) + parseInt(b),
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
}
function doMath(firstNum, scndNum, operation) {
    return mathFuncts[operation](firstNum, scndNum)
}

let result = 0,
    currentNum = 0,
    active = false;
const output = document.querySelector('#output');


const pressed = document.querySelectorAll('.calcButton')
//pull all buttons and apply event listener with a loop that calls function
pressed.forEach(el => el.addEventListener("click", getButtonPressed))


//clicking a button calls function to check what is pressed
//this function pulls element id of button pressed
//act based on this id, use e?

/*active state is when the number we're working with is not from result
if it is from prev result, we work with an active state
from there, any numbers pressed is appended into the active state var
when a non-num button is pressed, we do math on the active state var and
it is then outputted a result to display and closes the active state*/
function getButtonPressed(e) {
    const button = e.target.id;
    if (button == 'clear'){
        allClear()
        return
    }
    if (e.target.classList.contains('numButton')) {
        if (active == false) {
            active = true
            output.textContent = '';
        }
        numberPressed(button)
        return
    }
    if (e.target.classList.contains('opButton')){
        applyOperator(button)
        return
    }
}
//make buttons apply to 'result', change output.text = result

function numberPressed(number) {
    if (number == 'dot'){
        if (output.textContent.indexOf('.') != -1){
            return
        }
        number = '.';
    }
    output.textContent = output.textContent + number
    currentNum = parseFloat(output.textContent)
}

function allClear(){
    result = 0;
    currentNum = 0;
    output.textContent = '0';
    active = false;
}

function applyOperator(operator){
    console.log(doMath(result,currentNum,operator))
}