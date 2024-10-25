function moveZeros(nums){

    let n = nums.length


    let lastZeroFoundAt=0
    for (let i = 0 ; i< n; i++) {
        if(nums[i]!=0){
            [nums[lastZeroFoundAt], nums[i]] = [nums[i], nums[lastZeroFoundAt]]
            lastZeroFoundAt++
            console.log('lastzero', lastZeroFoundAt)
        }
    }


    return nums

}

function moveZeros2(nums){

    let n = nums.length

    // keep a track of external pointer - index
    // index only moves if the num[i] ! = 0
    let index = 0
    for(let i =0 ; i < nums.length;i++){
         if(nums[i]!==0){
             nums[index] = nums[i]
             index++
         }
    }

    for (let i = index; i < nums.length ; i++) {
        nums[i]=0
    }

    return nums

}

let nums = [0,1,0,3,12]
console.log(moveZeros2(nums))