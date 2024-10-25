function calculate(s) {

    let stack = []
    let currentNumber = 0
    let lastOperator = '+'
    let length = s.length

    // "Out of bound" index as a trigger last operation
    for (let i = 0; i <= length; i++) {
        if (i < length && isDigit(s[i])) {
            buildNumber(s[i]);
        }
        //"Out of bound" index as a trigger  last operation
        if (i === length || (!isDigit(s[i]) && s[i] !== ' ')) {
            operations(lastOperator);
            lastOperator = s[i];
            currentNumber = 0;
        }
    }

    function  operations(operation  ){
        switch (operation){
            case '+' :
                stack.push(currentNumber)
                break
            case '-':
                stack.push(-currentNumber)
                break
            case '*':
                stack.push(stack.pop()*currentNumber)
                break
            case '/':
                stack.push(Math.trunc(stack.pop() / currentNumber));
                break;
        }
    }


    function buildNumber(n){
        currentNumber = currentNumber* 10+ parseInt(n)
    }

    function isDigit(char) {
        return char >= '0' && char <= '9';
    }

    return stack

}



// Example usage:
// console.log(calculate("3+2*2")); // Output: 7
console.log(calculate(" 3*22 ")); // Output: 1
// console.log(calculate(" 3+5 / 2 ")); // Output: 5
// console.log(calculate("0-2147483647")); // Output: -2147483647