var maximumSwap = function(num) {
    let digits = num.toString().split('').map(Number)
    let maxIndex= digits.length-1
    let indexArr = Array(digits.length).fill(maxIndex)

    for(let i = digits.length-1; i >=0 ; i--){
        if(digits[i]>digits[maxIndex]){
            maxIndex = i
        }
        indexArr[i] = maxIndex
    }

    for(let i = 0 ; i < digits.length;i++){
        if(digits[i]< digits[indexArr[i]]){
            [digits[i], digits[indexArr[i]]] = [digits[indexArr[i]], digits[i]]
            break
        }
    }

    return parseInt(digits.join(''))
};

/*
dry run

Iteration  for indexArray

digits = [2,7.3.6]
index =  [0,1,2,3]



i= 3   maxIndex = 3 , digits[3] > digits[3]  => 6>6 F =>  [3,3,3,3]
i= 2   maxIndex = 3 , digits[2] > digits[3]  => 3>6 F =>  [3,3,3,3]
i= 1   maxIndex = 3 , digits[1] > digits[3]  => 7>6 T => maxIndex = 1  [3,1,3,3]
i= 0   maxIndex = 1 , digits[0] > digits[1]  => 2>7 F =>  [1,1,3,3]


for swap iteration

digits = [2,7.3.6]
idxArr = [1,1,3,3]
i =      [0,1,2,3]

i=0  digits[0]<digits[idx[0]] => 2 < digits[1] => 2<7 T => swap 2,7 => digits [7.2.3,6] break
 */
