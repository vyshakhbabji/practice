function addBinary(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = '';

    while(i >= 0 || j >= 0 || carry > 0) {
        let digitA = i >= 0 ? parseInt(a[i]) : 0;
        let digitB = j >= 0 ? parseInt(b[j]) : 0;
        let sum = digitA + digitB + carry;
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
        i--;
        j--;
    }
    return result;
}

// Example usage:
console.log(addBinary("11", "1"));    // Output: "100"
console.log(addBinary("1010", "1011")); // Output: "10101"
console.log(addBinary("1101", "111"));