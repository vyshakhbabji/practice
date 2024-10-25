function maxSwap(num) {

    //2763 = [2,7,6,3]
    let digitsArray = String(num).split('')

    let lastPos ={}


    //track the indexes of each digit from left to right
    // {2:0 , 7:1 , 6:2, 3:3}
    for(let i = 0; i < digitsArray ; i++){
        let digit  = digitsArray[i]
        lastPos[digit] = i
    }


    //traverse the digits by its index
    for(let i = 0 ; i < digitsArray.length ; i ++){

        for(let digit = 9 ; digit > curDigit  ; digit--){

            let digStr= String(digit) // 9 - > 2


            if(lastPos[digStr] > i ){   //  lastPos[9] X  lastPos[8] X lastPos[7] === 1  > 0...3

                [digitsArray[i] , digitsArray[lastPos[i]] ] = [ digitsArray[lastPos[i]] , digitsArray[i]  ]    // 2  , 7  => digitsArray[2] , digitArray [ lastpos[7] =>1 ]

                return parseInt(digitsArray.join(''))


            }



        }




    }




}
