function addStrings(num1, num2) {

    let i = num1.length-1
    let j = num2.length-1
    let carry =0

    let result  = []

    while(i>=0 || j>=0 || carry >0 ){

        let digit1 = i>=0?num1[i]:0
        let digit2  = j>=0?num2[j]:0


        let sum = parseInt(digit1) + parseInt(digit2) + carry
        result.push(sum %10)
        carry = Math.floor(sum/10)

        i--
        j--
    }

    return result.reverse().join('')


}

// Example usage:
console.log(addStrings("123", "456")); // Output: "579"
console.log(addStrings("11", "123"));  // Output: "134"
console.log(addStrings("456", "77"));  // Output: "533"
console.log(addStrings("0", "0"));     // Output: "0"
