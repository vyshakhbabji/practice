function addOperators(num, target) {
    const result = [];

    function backtrack(index, path, value, last) {
        // Base case: If we've processed all digits and reached the target
        if (index === num.length) {
            if (value === target) {
                result.push(path);
            }
            return;
        }

        for (let i = index; i < num.length; i++) {
            // Avoid numbers with leading zero
            if (i !== index && num[index] === '0') break;

            // Slice the current number from the string
            const currentStr = num.slice(index, i + 1);
            const currentNum = parseInt(currentStr, 10);

            if (index === 0) {
                // Starting number, just move forward
                backtrack(i + 1, currentStr, currentNum, currentNum);
            } else {
                // Addition
                backtrack(i + 1, path + "+" + currentStr, value + currentNum, currentNum);

                // Subtraction
                backtrack(i + 1, path + "-" + currentStr, value - currentNum, -currentNum);

                // Multiplication
                backtrack(i + 1, path + "*" + currentStr, value - last + last * currentNum, last * currentNum);
            }
        }
    }

    backtrack(0, "", 0, 0);
    return result;
}

// Example usage:
console.log(addOperators("123", 6));  // Output: ["1+2+3", "1*2*3"]
console.log(addOperators("232", 8));  // Output: ["2*3+2", "2+3*2"]
console.log(addOperators("105", 5));  // Output: ["1*0+5","10-5"]
console.log(addOperators("00", 0));   // Output: ["0+0", "0-0", "0*0"]
console.log(addOperators("3456237490", 9191));  // Output: []
