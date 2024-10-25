



function decryptString(s) {

    let i = s.length-1
    let res=''
    let char = ''
    while(i>=0 ){

        if(s[i] === '#'){

            let num = parseInt(s.substring(i-2,i))
            char = String.fromCharCode(num + 'a'.charCodeAt(0)-1) // a starts with 1
            res = char + res
            i-=3
        }
        else{
            char  =  String.fromCharCode(parseInt(s[i]) + 'a'.charCodeAt(0)-1) //a starts with 1
            res = char+res
            i--
        }
    }
    return res

}

// Example usage:
console.log(decryptString("10#11#12")); // Output: "jkab"
console.log(decryptString("1326#"));    // Output: "acz"
console.log(decryptString("25#"));      // Output: "y"
console.log(decryptString("123456789")); // Output: "abcdefghi"
