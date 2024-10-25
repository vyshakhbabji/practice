function calculate(s) {
    let stack = [];
    let current_number = 0;
    let result = 0;
    let sign = 1; // 1 for positive, -1 for negative

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (!isNaN(parseInt(char))) {
            current_number = current_number * 10 + parseInt(char);
        } else if (char === '+') {
            result += sign * current_number;
            sign = 1;
            current_number = 0;
        } else if (char === '-') {
            result += sign * current_number;
            sign = -1;
            current_number = 0;
        } else if (char === '(') {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        } else if (char === ')') {
            result += sign * current_number;
            result *= stack.pop(); // sign before the parenthesis
            result += stack.pop(); // result calculated before the parenthesis
            current_number = 0;
        }
    }

    return result + (sign * current_number); // Add any number left after the loop
}

// Example usage:
console.log(calculate("1 + 1"));        // Output: 2
console.log(calculate(" 2-1 + 2 "));    // Output: 3
console.log(calculate("(1+(4+5+2)-3)+(6+8)")); // Output: 23
