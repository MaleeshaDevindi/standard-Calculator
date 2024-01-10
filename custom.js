
//To Clear the Input Field
function clearScreen(){
    document.getElementById("screen").value="";
}

//To do the Calculations
function calculation(){
    var equation=document.getElementById("screen").value;
    var ans=eval(equation);
    document.getElementById("screen").value=ans;
}

//For the Backspace button
function removeLastChar(){
    var display = document.getElementById("screen");
    var currentValue = display.value;
    var lastChar = currentValue.slice(0,-1);
    document.getElementById("screen").value=lastChar;
}

//Remove the First Zero & Use for Mathematical Operators
function operations(value) {
    var display = document.getElementById("screen");
    var currentValue = display.value;
    var lastChar = currentValue.charAt(currentValue.length - 1);
    var findOperator = currentValue.charAt(currentValue.length - 2);

    if ((currentValue === '0' && '0123456789'.includes(value)) && value !== '.' || (lastChar === '0' && '+-/*'.includes(findOperator)) && value !== '.' ){
        display.value = currentValue.slice(0, -1) + value;
    } else if ('+-/*'.includes(lastChar) && '+-/*'.includes(value)) {
        display.value = currentValue.slice(0, -1) + value;
    } else {
        display.value += value;
    }
}

