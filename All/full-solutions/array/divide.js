function divide(dividend, divisor) {
    // Handle overflow case
    if (dividend === -Math.pow(2, 31) && divisor === -1) {
        return Math.pow(2, 31) - 1;
    }

    // Determine the sign of the result
    let negative = (dividend < 0) !== (divisor < 0);

    // Convert both numbers to positive for simplicity
    let absDividend = Math.abs(dividend);
    let absDivisor = Math.abs(divisor);

    let result = 0;

    // Subtract divisor from dividend until dividend is smaller than divisor
    while (absDividend >= absDivisor) {
        absDividend -= absDivisor;
        result++;
    }

    // Apply the sign to the result
    return negative ? -result : result;
}

// Example usage:
console.log(divide(10, 3));    // Output: 3
console.log(divide(7, -3));    // Output: -2
console.log(divide(1, 1));     // Output: 1
console.log(divide(-2147483648, -1)); // Output: 2147483647 (overflow case)
