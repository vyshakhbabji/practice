
/*
    Given : Integer num
    Req : 1 swap to make largest number
    Obs: consider the pos of the digits and vals
    optimal swap would put larger digit to most significant pos
    scan from right to left

    steps : screate array to store index of last occurance of each digit
    iterate from left to right  check if there is large digit occurs later in the number
    if found swap

 */


function maximumSwap(num){

    let digits = num.toString().split('').map(Number)


    let indexArray = new Array(digits.length)
    let maxIndex  = digits.length-1

    //you need to create an array - from here on this is the maxIndex where u find max digit
    //iterate right to left
    for(let i = digits.length ; i>=0 ; i--){

        if(digits[i]>digits[maxIndex]){
            maxIndex = i
        }

        indexArray[i] = maxIndex
    }


    // now interate from left to right
    //if u find digit which is smaller than the digit towards right on indexArray ,
    //thats the digit u wanna swap

    for (let i = 0 ; i < digits.length; i++){

        if(digits[i] < digits[indexArray[i]]){

            //then swap
            [digits[i] , digits[indexArray[i]]] = [digits[indexArray[i]], digits[i] ]

            break

        }

    }

    return parseInt(digits.join(""))

}

console.log(maximumSwap(2736)); // Output: 7236
// console.log(maximumSwap(9973)); // Output: 9973

//time complexity: O(n)