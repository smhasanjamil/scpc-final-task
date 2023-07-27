// Task 5 
// Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        default:
            return 'Invalid operator';
    }
}

const num1 = 21;
const num2 = 7;
const operator = '/';
const result = calculate(num1, num2, operator);
console.log(result);   