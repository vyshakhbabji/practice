function evaluateExpression(expression) {
    let currentNum = 0;
    let prevNum = 0;
    let result = 0;
    let lastOperator = '+';

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (char >= '0' && char <= '9') {
            currentNum = currentNum * 10 + (char - '0');
        }

        if (char === '+' || char === '*' || i === expression.length - 1) {
            if (lastOperator === '*') {
                prevNum = prevNum * currentNum;
            } else {
                result += prevNum; //2
                prevNum = currentNum; //3
            }
            lastOperator = char;
            currentNum = 0;
        }
    }

    return result + prevNum;
}

