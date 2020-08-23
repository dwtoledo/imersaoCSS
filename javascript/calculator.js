const calculator = {
    SUM: '+',
    SUBTRACTION: '-',
    MULTIPLICATION: '*',
    DIVISION: '/',
    DOT: '.',
    EQUAL: '=',
    parentheses_LEFT: '(',
    parentheses_RIGHT: ')',
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
    ZERO: 0,
    CLEAR: 'clear',
    CLEAR_ALL: 'clear_all'
}

var input = document.getElementById("expression");

function expressionClearAll() {
    input.value=""
}

function expressionNumber(text) {
    var lastChar = input.value.charAt(input.value.length - 1);

    if (lastChar == calculator.parentheses_RIGHT) {
        alert("Can't enter a number without an operator!!!")

    } else {
        input.value = input.value + text;
    }  
}

function expressionDot(text) {
    var lastChar = input.value.charAt(input.value.length - 1);

    if (lastChar == calculator.ZERO || lastChar == calculator.ONE || lastChar == calculator.TWO || lastChar == calculator.THREE || lastChar == calculator.FOUR || lastChar == calculator.FIVE || lastChar == calculator.SIX || lastChar == calculator.SEVEN || lastChar == calculator.EIGHT || lastChar == calculator.NINE || lastChar == calculator.parentheses_LEFT) {
        input.value = input.value + text;
        
    } else {
        alert("DOT is allowed only for numbers!")
    }
}

function expressionOperator(text) {
    var lastChar = input.value.charAt(input.value.length - 1);

    if (lastChar == "") {

        if (text == calculator.MULTIPLICATION || text == calculator.DIVISION) {
            alert("Can't start the expression with the operator: " + text);
            input.value = "";
            
        } else {
            input.value = input.value + text;
        }

    } else if (text == calculator.SUBTRACTION && lastChar != calculator.SUBTRACTION) {
        input.value = input.value + text;

    } else if (lastChar == calculator.DIVISION || lastChar == calculator.MULTIPLICATION || lastChar == calculator.SUBTRACTION || lastChar == calculator.SUM || lastChar == calculator.parentheses_LEFT) {
        alert("Can't add a second operator!");

    } else {
        input.value = input.value + text;
    }
}

function expressionParenthesesLeft(text) {
    var lastChar = input.value.charAt(input.value.length - 1);

    if (lastChar == calculator.parentheses_LEFT || lastChar == "" || lastChar == calculator.DIVISION || lastChar == calculator.MULTIPLICATION || lastChar == calculator.SUBTRACTION || lastChar == calculator.SUM) {
        input.value = input.value + text;

    } else {
        alert("Can't open a parentheses without an operator!");
    }
}

function expressionParenthesesRight(text) {
    var lastChar = input.value.charAt(input.value.length - 1);
    
    if (input.value.indexOf(calculator.parentheses_LEFT) == -1) {
        alert("Can't close a parentheses without open one!")

    } else if (lastChar == calculator.DIVISION || lastChar == calculator.MULTIPLICATION || lastChar == calculator.SUBTRACTION || lastChar == calculator.SUM || lastChar == calculator.parentheses_LEFT) {
        alert("Can't add a parentheses next to an operator!")

    } else {
        var countParenthesesLeft = 0;
        var countParenthesesRight = 0;

        for (var i=0; i < input.value.length; i++) {
            if(input.value.charAt(i) == calculator.parentheses_LEFT) {
                countParenthesesLeft++;
            }
        }

        for (var i=0; i < input.value.length; i++) {
            if(input.value.charAt(i) == calculator.parentheses_RIGHT) {
                countParenthesesRight++;
            }
        }

        if (countParenthesesLeft > countParenthesesRight) {
            input.value = input.value + text;

        } else {
            alert("Already closed all the parentheses!")
        }               
    }
}

function expressionCalc() {
    var expressionLength = input.value.length;

    if (expressionLength == 0) {
        alert("Enter an expression!");

    } else {
        const regex = /[0-9]|\+|\-|\*|\/|\)|\.|\(/g;

        if (input.value.match(regex) === null) {
            var numberOfMatches = 0;

        } else {
            var numberOfMatches = input.value.match(regex).length;
        }

        if (numberOfMatches == expressionLength) {
            var countParenthesesLeft = 0;
            var countParenthesesRight = 0;

            for (var i=0; i < input.value.length; i++) {
                if(input.value.charAt(i) == calculator.parentheses_LEFT) {
                    countParenthesesLeft++;
                }
            }

            for (var i=0; i < input.value.length; i++) {
                if(input.value.charAt(i) == calculator.parentheses_RIGHT) {
                    countParenthesesRight++;
                }
            }

            if (countParenthesesLeft != countParenthesesRight) {
                alert("Please close all parentheses!");
                
            } else {
                input.value = input.value + " = " + parseFloat(eval(input.value)).toFixed(2);                            
            }

        } else {
            alert("Only dot, number, operator and parentheses are allowed. Try again!");
            input.value="";

            eval('1+2*(2+3)*-1')
        }
    }
}

