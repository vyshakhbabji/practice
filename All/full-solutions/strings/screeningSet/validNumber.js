function validNumber(s){

    //clean up white space
    s = s.trim()

    let seenDigit = false
    let seenExponent = false
    let seenSign = false
    let seenDigitAfterExponent  = true
    let seenDot =false


    for(let i = 0 ; i < s.length; i ++){

        const c = s[i]

        switch (true) {
            case isDigit(c):
                seenDigit=true
                if(seenExponent) seenDigitAfterExponent = true
                break

            case isSign(c):
                //if the sign is seen after initial digits are parsed and prev char is not e or E
                if(i>0 && !isExponent(s[i-1])) return false
                break

            case isExponent(c):
                if(seenExponent || !seenDigit) return false
                seenExponent = true
                seenDigitAfterExponent = false
                break
            case c === ".":
                //dot must not been seen before ,  must not come after exponent
                if(seenDot||seenExponent) return  false
                seenDot=true
                break
            default:
                return  false
        }
    }

    //isDigit to check digits
    function isDigit(c){
        return c>=0 && c<=9
    }

    //check sign
    function isSign(c){
        return c=== '-' || c=== '+'
    }

    //check exponent
    function isExponent(c){
        return c==='e'|| c==='E'
    }


    return seenDigit && (!seenExponent || seenDigitAfterExponent ) ;
}