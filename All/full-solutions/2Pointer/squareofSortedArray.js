function sortedSquares(nums) {

    const n = nums.length
    let res = new Array(n)

    let l = 0 ,  r = n-1 ,  index  = n -1


    //Compare the squares of the elements at left and right.
    // Place the larger square at the current index in the result array.
    // Move the respective pointer inward (left or right) and decrement index.

    while(l<=r){
        const lsquare  = nums[l]*nums[l]
        const rsquare  =  nums[r] * nums[r]
        console.log('before')
        console.log(res)
        console.log(rsquare)
        console.log(lsquare)
        if(lsquare<rsquare){
            res[index] = rsquare
            r--
        }
        else{
            res[index] = lsquare
            l++
        }
        index--

        console.log('after')
        console.log(res)
        console.log(rsquare)
        console.log(lsquare)
    }

    return res

}

// Example input
const nums = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums)); // Output should be [0, 1, 9, 16, 100]
