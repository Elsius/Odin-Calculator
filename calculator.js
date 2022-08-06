const mathFuncts = {
    add : (a,b) => parseInt(a) + parseInt(b),
    subtract : (a,b) => a - b,
    multiply : (a,b) => a * b,
    divide : (a,b) => a / b
}
function doMath(firstNum,scndNum,operation) {
    return mathFuncts[operation](firstNum,scndNum)
} 

let result = 0;
const output = document.querySelector('#output');


const pressed = document.querySelectorAll('.calcButton') 
//pull all buttons and apply event listener with a loop that calls function
pressed.forEach(el => el.addEventListener("click", getButtonPressed))


//clicking a button calls this function
//this function pulls element id of button pressed
//act based on this id, use e?
function getButtonPressed(e) {
    if (e.target.classList.contains('numButton')){
        console.log('hi')
        //at this point when clicking a button, it calls this function
        //this if statement checks if its a number button
        
    }
}
//make buttons apply to 'result', change output.text = result
function updateDisplay(input){
    output.textContent = input
}