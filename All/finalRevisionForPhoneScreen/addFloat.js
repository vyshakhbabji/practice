function addNum(num1, num2) {
    // Split the numbers into integer and decimal parts
    let [intNum1, floatNum1 = ''] = num1.split(".");
    let [intNum2, floatNum2 = ''] = num2.split(".");

    // Determine the maximum length of the decimal parts and pad with zeros
    let maxLen = Math.max(floatNum1.length, floatNum2.length);
    floatNum1 = floatNum1.padEnd(maxLen, '0');
    floatNum2 = floatNum2.padEnd(maxLen, '0');

    // Handle decimal part addition
    let solution = [];
    let carry = 0;
    let p1 = floatNum1.length - 1;
    let p2 = floatNum2.length - 1;

    // Add decimal parts
    while (p1 >= 0 || p2 >= 0) {
        let a = p1 >= 0 ? parseInt(floatNum1[p1]) : 0;
        let b = p2 >= 0 ? parseInt(floatNum2[p2]) : 0;
        let currentSum = a + b + carry;
        carry = Math.floor(currentSum / 10);
        currentSum = currentSum % 10;
        solution.push(currentSum.toString());
        p1--;
        p2--;
    }

    // Reverse the decimal result (as it's currently backwards)
    let decimalResult = solution.reverse().join("");

    // Handle integer part addition
    solution = [];
    p1 = intNum1.length - 1;
    p2 = intNum2.length - 1;

    // Add integer parts
    while (p1 >= 0 || p2 >= 0 || carry) {
        let a = p1 >= 0 ? parseInt(intNum1[p1]) : 0;
        let b = p2 >= 0 ? parseInt(intNum2[p2]) : 0;
        let currentSum = a + b + carry;
        carry = Math.floor(currentSum / 10);
        currentSum = currentSum % 10;
        solution.push(currentSum.toString());
        p1--;
        p2--;
    }

    // If there's still a carry left after the integer addition, add it
    if (carry) {
        solution.push(carry.toString());
    }

    // Reverse the integer result (as it's currently backwards)
    let integerResult = solution.reverse().join("");

    // Combine the integer and decimal parts
    if (decimalResult.replace(/0+$/, '') === '') {
        return integerResult; // If decimal part is empty or all zeros, return only the integer part
    } else {
        return `${integerResult}.${decimalResult}`;
    }
}

// Example Usage:
console.log(addNum("1.0003", "1"));  // Output: "2.0003"
console.log(addNum("123.45", "76.55"));  // Output: "200.00"
