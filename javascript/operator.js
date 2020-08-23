const operators = {
    SUM: '+',
    SUBTRACTION: '-',
    MULTIPLICATION: 'x',
    DIVISION: '÷'
}

var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var result = 0;

function calculate(operator) {

    switch (operator) {
        case operators.SUM:
            result = parseInt(number1.value) + parseInt(number2.value);
            alert("Result is: " + result);
            break;
        
        case operators.SUBTRACTION:
            result = parseInt(number1.value) - parseInt(number2.value);
            alert("Result is: " + result);
            break;

        case operators.MULTIPLICATION:
            result = parseInt(number1.value) * parseInt(number2.value);
            alert("Result is: " + result);
            break;
        
        case operators.DIVISION:
            result = parseInt(number1.value) / parseInt(number2.value);
            alert("Result is: " + result);
            break;
    } 
}