var plusOne = function(digits) {

    for(let i = digits.length-1; i>=0 ; i--){

        digits[i] = digits[i]+1

        if(digits[i]<10){
            return digits
        }
        // if digits = [9]
        digits[i] = 0

    }

    digits.unshift(1)
    return digits
};


// Example input
const digits = [1,2,9];
console.log(plusOne(digits));