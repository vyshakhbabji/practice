function maximumSwap(num){

    let digits = num.toString().split("").map(Number)
    let indexArr = Array(digits.length)
    let maxIdx = digits.length-1
    for(let i = digits.length-1;i>=0 ; i--){
            if(digits[i]> digits[maxIdx]){
                maxIdx = i
            }
            indexArr[i]=maxIdx
    }

    for(let i = 0 ; i<digits.length;i++){
        if(digits[i]<digits[indexArr[i]]){
            [digits[i], digits[indexArr[i]]] = [digits[indexArr[i]], digits[i]]
            break
        }
    }

    return digits.join('')
}

console.log(maximumSwap(2736)) //7236