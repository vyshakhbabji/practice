// Given a non-empty string word and a string abbr that represents
// an abbreviation of word, return whether the abbreviation is valid.
// A string abbr is a valid abbreviation of word if it can be formed by
// replacing any number of non-overlapping substrings with their lengths.

function validWordAbbreviation(word, abbr){

    //word: lower letter english alpha
    //abbr : lower letter alpha and numbers

    //return abbr valid

    //eg :  s = "aba"  abbr = "a1a"
    //      s= "abba"  abbr = "a1a"
    //      s = "abba" abbr = "a5a"

    // "internationalization"  i12iz4n  true
    //apple                    a2e      false

    let i = 0 , j =0

    function isDigit(c){
        return /^[0-9]$/.test(c)
    }


    while(i<word.length && j<abbr.length){

        if(isDigit(abbr[j])){
            if (abbr[j] === '0') {
                return false; // Leading zero is not allowed
            }

            //num is the digit
            let num = 0

            //iterate over abbr until its digits and collect it in nuns
            while(j<abbr.length && isDigit(abbr[j])){
                num = num *10 + parseInt(abbr[j])
                j++
            }

            //increment i by num
            i+=num

        }

        else
        {
            //is base case where no digits
            if (word[i] !== abbr[j]) {
                return false
            }
            //incremnt i , j
            i++
            j++
        }
    }

    return i ===word.length && j === abbr.length

}

// Example usage:
console.log(validWordAbbreviation("internationalization", "i12iz4n")); // Output: true
console.log(validWordAbbreviation("apple", "a2e"));// Output: false