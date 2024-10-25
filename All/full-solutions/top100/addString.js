function addStrings(num1, num2) {

    let i = num1.length-1 , j = num2.length-1 , carry =0
    res = []

    let sum = 0
    while(i>=0 || j>=0 || carry>0){
       let dig1 =  i>=0?num1[i]:0
        let dig2 = j>=0?num2[j]:0
        sum = parseInt(dig2) + parseInt(dig1) + carry
        res.push(sum%10)
        carry =Math.floor( sum/10)
        i--
        j--
    }

    return res.reverse().join('')
}

// Example usage:
console.log(addStrings("123", "456")); // Output: "579"
console.log(addStrings("11", "123"));  // Output: "134"
console.log(addStrings("456", "77"));  // Output: "533"
console.log(addStrings("0", "0"));     // Output: "0"
