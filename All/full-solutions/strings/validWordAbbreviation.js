function validWordAbbreviation(word , abbr){

    let i =0 , j = 0

    while(j<abbr.length){

        //check if abbr's numbers qre valid
        if(abbr[j]>='0' && abbr[j]<='9'){

            if(abbr[j]==='0') return false

            let num = 0
            while(j < abbr.length && abbr[j]>='0' && abbr[j]<='9' ){
                num = num * 10 + parseInt(abbr[j])
                j++
            }
            i+=num

        }else {
            if(word[i]!==abbr[j]){
                return false
            }
            i++
            j++
        }
    }

    return  i ===word.length

}

console.log(validWordAbbreviation("internationalization", "i12iz4n")); // Output: true
console.log(validWordAbbreviation("apple", "a2e")); // Output: false
console.log(validWordAbbreviation("substitution", "s10n")); // Output: true
console.log(validWordAbbreviation("substitution", "sub4u4")); // Output: true
console.log(validWordAbbreviation("substitution", "12")); // Output: true
console.log(validWordAbbreviation("substitution", "s55n")); // Output: false
console.log(validWordAbbreviation("substitution", "s010n")); // Output: false