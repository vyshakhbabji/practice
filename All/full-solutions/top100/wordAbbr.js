function validWordAbbreviation(word, abbr){

    function isDigit(c) {
        return /^[0-9]$/.test(c)
    }
    let i  = 0 , j = 0

    let num = 0
    while(i<word.length && j< abbr.length){
        if(isDigit(abbr[j])){
            if (abbr[j] === '0') {
                return false; // Leading zero is not allowed
            }
            let num = 0
            while(j<abbr.length && isDigit(abbr[j])){
                num= parseInt(abbr[j]) + 10*num
                j++
            }
            i+=num
        }else{
            if(abbr[j] !== word[i]){
                return false
            }
            i++
            j++
        }
    }
    return  i === word.length && j=== abbr.length
}

// Example usage:
console.log(validWordAbbreviation("internationalization", "i12iz4n")); // Output: true
console.log(validWordAbbreviation("apple", "a2e"));// Output: false